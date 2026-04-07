import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { divIcon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { toast } from "sonner";
import { ReportItem, ReportStatus, violenceReports } from "../data/violenceReports";

const STATUS_STYLES: Record<ReportStatus, string> = {
  urgent: "bg-[#C62828] text-white",
  verified: "bg-[#1976D2] text-white",
  review: "bg-[#F9A825] text-white",
};

const STATUS_LABELS: Record<ReportStatus, string> = {
  urgent: "Urgent",
  verified: "Verified",
  review: "Under Review",
};

const STATUS_COLOR: Record<ReportStatus, string> = {
  urgent: "#C62828",
  verified: "#1976D2",
  review: "#F9A825",
};

function markerIcon(status: ReportStatus, isSelected: boolean) {
  const border = isSelected ? "4px solid #111827" : "2px solid #ffffff";
  return divIcon({
    className: "",
    html: `<div style="width:${isSelected ? 22 : 18}px;height:${isSelected ? 22 : 18}px;background:${STATUS_COLOR[status]};border:${border};border-radius:9999px;box-shadow:0 4px 12px rgba(0,0,0,0.35);"></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  });
}

function FlyToSelection({ item }: { item: ReportItem | null }) {
  const map = useMap();
  useEffect(() => {
    if (!item) return;
    map.flyTo([item.latitude, item.longitude], 7, { duration: 0.6 });
  }, [item, map]);
  return null;
}

function MapClickCapture({
  onPick,
}: {
  onPick: (coords: { lat: number; lng: number }) => void;
}) {
  useMapEvents({
    click(event) {
      onPick({ lat: event.latlng.lat, lng: event.latlng.lng });
    },
  });
  return null;
}

export function ViolenceReportingMap() {
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState<ReportItem[]>(violenceReports);
  const [selectedStatus, setSelectedStatus] = useState<"all" | ReportStatus>("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [pickedCoords, setPickedCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    anonymous: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!pickedCoords) return;
    setFormData((current) => ({
      ...current,
      location: `Lat ${pickedCoords.lat.toFixed(4)}, Lng ${pickedCoords.lng.toFixed(4)}`,
    }));
  }, [pickedCoords]);

  const regions = useMemo(() => {
    return Array.from(new Set(reports.map((item) => item.location)));
  }, [reports]);

  const filteredReports = useMemo(() => {
    return reports.filter((item) => {
      const statusMatch = selectedStatus === "all" || item.status === selectedStatus;
      const regionMatch = selectedRegion === "all" || item.location === selectedRegion;
      return statusMatch && regionMatch;
    });
  }, [reports, selectedStatus, selectedRegion]);

  const selectedItem = reports.find((item) => item.id === selectedId) ?? null;
  const mapCenter: LatLngExpression = [9.145, 40.4897];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextId = reports.length + 1;
    const caseId = `EHRDC-2026-${String(nextId).padStart(4, "0")}`;
    const lat = pickedCoords?.lat ?? 9.03;
    const lng = pickedCoords?.lng ?? 38.74;
    const submitted: ReportItem = {
      id: nextId,
      title: formData.title || "Untitled Incident",
      description: formData.description || "No description provided.",
      latitude: lat,
      longitude: lng,
      location: formData.location || "Unspecified location",
      date: formData.date || new Date().toISOString().slice(0, 10),
      status: "review",
      caseId,
    };

    setReports((current) => [submitted, ...current]);
    setSelectedId(submitted.id);
    setModalOpen(false);
    setFormData({ title: "", description: "", location: "", date: "", anonymous: false });
    toast.success(`Report submitted successfully. Case ID: ${caseId}`);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-gray-900">
      <section className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
        <Card className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <label className="text-sm font-medium text-gray-600">Status</label>
              <select
                className="rounded-md border bg-white px-3 py-2 text-sm"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as "all" | ReportStatus)}
              >
                <option value="all">All</option>
                <option value="verified">Verified</option>
                <option value="urgent">Urgent</option>
                <option value="review">Under Review</option>
              </select>
              <label className="text-sm font-medium text-gray-600">Region</label>
              <select
                className="rounded-md border bg-white px-3 py-2 text-sm"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="all">All Regions</option>
                {regions.map((region) => (
                  <option value={region} key={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <span className="font-medium">Legend:</span>
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-[#C62828]" /> Urgent</span>
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-[#1976D2]" /> Verified</span>
              <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-[#F9A825]" /> Under Review</span>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
          <aside className={`${sidebarOpen ? "block" : "hidden"} max-h-[72vh] overflow-hidden rounded-xl border bg-white shadow-sm lg:block`}>
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h2 className="text-lg font-semibold">Incident Reports</h2>
              <Button variant="ghost" className="lg:hidden" onClick={() => setSidebarOpen(false)}>Close</Button>
            </div>
            <div className="max-h-[64vh] space-y-3 overflow-y-auto p-4">
              {filteredReports.map((item) => (
                <button
                  key={item.id}
                  className={`w-full rounded-lg border p-3 text-left shadow-sm transition hover:border-[#C62828] ${selectedId === item.id ? "border-[#C62828] bg-[#FFF5F5]" : "bg-white"}`}
                  onClick={() => setSelectedId(item.id)}
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <Badge className={STATUS_STYLES[item.status]}>{STATUS_LABELS[item.status]}</Badge>
                  </div>
                  <p className="text-xs text-gray-500">{item.location}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </button>
              ))}
              {!filteredReports.length && (
                <div className="rounded-lg border border-dashed p-5 text-sm text-gray-500">
                  No incidents match the selected filters.
                </div>
              )}
            </div>
          </aside>

          <div className="relative overflow-hidden rounded-xl border bg-white shadow-sm">
            <Button
              className="absolute top-3 left-3 z-[450] bg-white text-gray-700 shadow hover:bg-gray-100 lg:hidden"
              onClick={() => setSidebarOpen((current) => !current)}
            >
              {sidebarOpen ? "Hide List" : "Show List"}
            </Button>

            {loading ? (
              <div className="flex h-[72vh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#C62828]/20 border-t-[#C62828]" />
              </div>
            ) : (
              <MapContainer center={mapCenter} zoom={6} className="h-[72vh] w-full">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapClickCapture onPick={(coords) => setPickedCoords(coords)} />
                <FlyToSelection item={selectedItem} />

                {filteredReports.map((item) => (
                  <Marker
                    key={item.id}
                    icon={markerIcon(item.status, selectedId === item.id)}
                    position={[item.latitude, item.longitude]}
                    eventHandlers={{ click: () => setSelectedId(item.id) }}
                  >
                    <Popup>
                      <div className="space-y-2">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                        <p className="text-xs"><strong>Location:</strong> {item.location}</p>
                        <p className="text-xs"><strong>Date:</strong> {item.date}</p>
                        <Button
                          size="sm"
                          asChild
                          className="mt-2 w-full bg-[#1976D2] !text-black hover:bg-[#1565C0] [&_a]:!text-black"
                        >
                          <Link to={`/violence-reporting-map/${item.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {pickedCoords && (
                  <Marker
                    position={[pickedCoords.lat, pickedCoords.lng]}
                    icon={divIcon({
                      className: "",
                      html: `<div style="width:14px;height:14px;background:#111827;border:2px solid #ffffff;border-radius:9999px;"></div>`,
                      iconSize: [14, 14],
                      iconAnchor: [7, 7],
                    })}
                  >
                    <Popup>Picked location for report form</Popup>
                  </Marker>
                )}
              </MapContainer>
            )}
          </div>
        </div>
      </section>

      <Button
        className="fixed right-6 bottom-6 z-[500] rounded-full bg-[#C62828] px-6 py-5 text-sm shadow-xl hover:bg-[#B71C1C]"
        onClick={() => setModalOpen(true)}
      >
        Report a Violation
      </Button>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Report a Violation</DialogTitle>
            <DialogDescription>
              Click on the map to auto-fill coordinates in the location field.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Incident Title</label>
              <input
                required
                value={formData.title}
                onChange={(e) => setFormData((current) => ({ ...current, title: e.target.value }))}
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Enter incident title"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Description</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData((current) => ({ ...current, description: e.target.value }))}
                className="min-h-24 w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Describe what happened"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Location</label>
              <input
                value={formData.location}
                onChange={(e) => setFormData((current) => ({ ...current, location: e.target.value }))}
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Click map or type location"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData((current) => ({ ...current, date: e.target.value }))}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Upload Evidence</label>
              <input type="file" className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={formData.anonymous}
                onChange={(e) => setFormData((current) => ({ ...current, anonymous: e.target.checked }))}
              />
              Submit anonymously
            </label>
            <Button type="submit" className="w-full bg-[#C62828] hover:bg-[#B71C1C]">
              Submit Report
            </Button>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  );
}
