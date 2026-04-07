import { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { divIcon, type LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Menu, X } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

type IncidentStatus = "urgent" | "verified" | "review";

type Incident = {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  location: string;
  date: string;
  status: IncidentStatus;
  caseId?: string;
};

const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Unlawful Detention of Journalist",
    description: "A journalist was detained without a warrant while reporting on a protest.",
    latitude: 9.03,
    longitude: 38.74,
    location: "Addis Ababa",
    date: "2026-03-12",
    status: "urgent",
  },
  {
    id: 2,
    title: "Use of Excessive Force",
    description: "Security forces used excessive force during a peaceful demonstration.",
    latitude: 11.6,
    longitude: 37.39,
    location: "Bahir Dar",
    date: "2026-02-25",
    status: "verified",
  },
  {
    id: 3,
    title: "Forced Eviction Case",
    description: "Residents were evicted without prior notice or compensation.",
    latitude: 7.67,
    longitude: 36.83,
    location: "Jimma",
    date: "2026-01-18",
    status: "review",
  },
  {
    id: 4,
    title: "Violation of Freedom of Speech",
    description: "Individual arrested for expressing political views online.",
    latitude: 13.5,
    longitude: 39.47,
    location: "Mekelle",
    date: "2026-03-01",
    status: "urgent",
  },
];

const statusColor: Record<IncidentStatus, string> = {
  urgent: "#C62828",
  verified: "#1976D2",
  review: "#FBC02D",
};

const statusLabel: Record<IncidentStatus, string> = {
  urgent: "Urgent",
  verified: "Verified",
  review: "Under Review",
};

const statusBadgeClass: Record<IncidentStatus, string> = {
  urgent: "bg-[#C62828]/10 text-[#C62828] border-[#C62828]/30",
  verified: "bg-[#1976D2]/10 text-[#1976D2] border-[#1976D2]/30",
  review: "bg-[#FBC02D]/20 text-[#8A6D00] border-[#FBC02D]/30",
};

function markerIcon(status: IncidentStatus, active: boolean) {
  const size = active ? 20 : 16;
  return divIcon({
    className: "",
    html: `<div style="width:${size}px;height:${size}px;background:${statusColor[status]};border:3px solid white;border-radius:9999px;box-shadow:0 0 0 ${active ? 5 : 0}px rgba(198,40,40,0.25);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function FocusMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], Math.max(map.getZoom(), 7), { duration: 0.8 });
  }, [lat, lng, map]);
  return null;
}

function MapClickCapture({ onMapClick }: { onMapClick: (e: LeafletMouseEvent) => void }) {
  useMapEvents({
    click: onMapClick,
  });
  return null;
}

function toCaseId(id: number) {
  return `EHRDC-2026-${String(id).padStart(4, "0")}`;
}

export function Home() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIncidentId, setActiveIncidentId] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [detailsIncident, setDetailsIncident] = useState<Incident | null>(null);
  const [tempPoint, setTempPoint] = useState<{ lat: number; lng: number } | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: new Date().toISOString().slice(0, 10),
    anonymous: false,
    evidence: "",
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIncidents(mockIncidents.map((item) => ({ ...item, caseId: toCaseId(item.id) })));
      setActiveIncidentId(1);
      setIsLoading(false);
    }, 900);
    return () => window.clearTimeout(timer);
  }, []);

  const regions = useMemo(
    () => ["all", ...Array.from(new Set(incidents.map((item) => item.location)))],
    [incidents],
  );

  const filteredIncidents = useMemo(() => {
    return incidents.filter((item) => {
      const statusMatch = statusFilter === "all" || item.status === statusFilter;
      const regionMatch = regionFilter === "all" || item.location === regionFilter;
      return statusMatch && regionMatch;
    });
  }, [incidents, regionFilter, statusFilter]);

  const activeIncident =
    filteredIncidents.find((incident) => incident.id === activeIncidentId) ?? filteredIncidents[0];

  const onMapClick = (e: LeafletMouseEvent) => {
    const lat = Number(e.latlng.lat.toFixed(5));
    const lng = Number(e.latlng.lng.toFixed(5));
    setTempPoint({ lat, lng });
    setFormData((prev) => ({ ...prev, location: `${lat}, ${lng}` }));
    setReportOpen(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newId = incidents.length + 1;
    const newIncident: Incident = {
      id: newId,
      title: formData.title || "Untitled Incident",
      description: formData.description || "No description provided.",
      latitude: tempPoint?.lat ?? 9.03,
      longitude: tempPoint?.lng ?? 38.74,
      location: formData.location || "Unknown location",
      date: formData.date,
      status: "review",
      caseId: toCaseId(newId),
    };
    setIncidents((prev) => [newIncident, ...prev]);
    setActiveIncidentId(newId);
    setReportOpen(false);
    setFormData({
      title: "",
      description: "",
      location: "",
      date: new Date().toISOString().slice(0, 10),
      anonymous: false,
      evidence: "",
    });
    setTempPoint(null);
    toast.success(`Report submitted successfully (${newIncident.caseId})`);
  };

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-4 py-4 md:px-6">
      <section className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-['Montserrat',_sans-serif] text-2xl font-semibold">Interactive Violence Reporting Map</h1>
            <p className="font-['Inter',_sans-serif] text-sm text-muted-foreground">Track incidents, verify reports, and submit new violations in no-backend mode.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-full min-w-[180px] md:w-auto">
              <Label className="mb-1 block text-xs text-muted-foreground">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full min-w-[180px] md:w-auto">
              <Label className="mb-1 block text-xs text-muted-foreground">Region</Label>
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region === "all" ? "All Regions" : region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="outline"
              className="md:hidden"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              {isSidebarOpen ? <X className="mr-2 h-4 w-4" /> : <Menu className="mr-2 h-4 w-4" />}
              Incidents
            </Button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[340px_1fr]">
        <aside className={`${isSidebarOpen ? "block" : "hidden"} rounded-xl border bg-white shadow-sm lg:block`}>
          <div className="border-b p-4">
            <h2 className="font-['Montserrat',_sans-serif] text-lg font-semibold">Reported Incidents</h2>
            <p className="text-xs text-muted-foreground">{filteredIncidents.length} results</p>
          </div>
          <div className="max-h-[65vh] space-y-2 overflow-y-auto p-3">
            {filteredIncidents.map((incident) => (
              <Card
                key={incident.id}
                onClick={() => {
                  setActiveIncidentId(incident.id);
                  setIsSidebarOpen(false);
                }}
                className={`cursor-pointer p-3 transition hover:shadow-md ${activeIncidentId === incident.id ? "ring-2 ring-primary/35" : ""}`}
              >
                <h3 className="mb-1 text-sm font-semibold">{incident.title}</h3>
                <p className="text-xs text-muted-foreground">{incident.location} • {incident.date}</p>
                <Badge className={`mt-2 border ${statusBadgeClass[incident.status]}`}>{statusLabel[incident.status]}</Badge>
              </Card>
            ))}
          </div>
        </aside>

        <section className="relative overflow-hidden rounded-xl border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-3 text-xs">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#C62828]" />Urgent/Unverified</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#1976D2]" />Verified</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#FBC02D]" />Under Review</span>
            </div>
            <p className="hidden text-muted-foreground md:block">Click map to pre-fill report location</p>
          </div>
          {isLoading ? (
            <div className="flex h-[70vh] items-center justify-center bg-muted/50">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/25 border-t-primary" />
            </div>
          ) : (
            <MapContainer center={[9.145, 40.4897]} zoom={6} className="h-[70vh] w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
              <MapClickCapture onMapClick={onMapClick} />
              {activeIncident && <FocusMap lat={activeIncident.latitude} lng={activeIncident.longitude} />}
              {filteredIncidents.map((incident) => (
                <Marker
                  key={incident.id}
                  position={[incident.latitude, incident.longitude]}
                  icon={markerIcon(incident.status, incident.id === activeIncidentId)}
                  eventHandlers={{ click: () => setActiveIncidentId(incident.id) }}
                >
                  <Popup>
                    <div className="min-w-[220px] space-y-2">
                      <h3 className="font-semibold">{incident.title}</h3>
                      <p className="text-xs text-muted-foreground">{incident.description}</p>
                      <p className="text-xs"><strong>Location:</strong> {incident.location}</p>
                      <p className="text-xs"><strong>Date:</strong> {incident.date}</p>
                      <Button size="sm" className="h-8 w-full bg-primary hover:bg-primary/90" onClick={() => setDetailsIncident(incident)}>
                        View Details
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {tempPoint && (
                <Marker
                  position={[tempPoint.lat, tempPoint.lng]}
                  icon={divIcon({ className: "", html: '<div style="width:14px;height:14px;background:#111827;border:2px solid white;border-radius:9999px;"></div>' })}
                />
              )}
            </MapContainer>
          )}
        </section>
      </div>

      <Button
        className="fixed right-5 bottom-6 z-[900] rounded-full bg-primary px-6 py-6 text-white shadow-xl hover:bg-primary/90"
        onClick={() => setReportOpen(true)}
      >
        Report a Violation
      </Button>

      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[640px]">
          <DialogHeader>
            <DialogTitle>Report a Violation</DialogTitle>
            <DialogDescription>Submit a new case in local no-backend mode. A case ID is generated automatically.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Incident title</Label>
              <Input id="title" value={formData.title} onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" rows={4} value={formData.description} onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))} required />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={formData.location} onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))} placeholder="Click map or type region/city" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" value={formData.date} onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))} required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="evidence">Upload evidence</Label>
              <Input id="evidence" type="file" onChange={(e) => setFormData((prev) => ({ ...prev, evidence: e.target.files?.[0]?.name ?? "" }))} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="anonymous"
                checked={formData.anonymous}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, anonymous: Boolean(checked) }))}
              />
              <Label htmlFor="anonymous" className="text-sm">Submit anonymously</Label>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Submit Report</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(detailsIncident)} onOpenChange={() => setDetailsIncident(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{detailsIncident?.title}</DialogTitle>
            <DialogDescription>{detailsIncident?.caseId}</DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">{detailsIncident?.description}</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <p><strong>Location:</strong> {detailsIncident?.location}</p>
            <p><strong>Date:</strong> {detailsIncident?.date}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
