import { harvests } from "@/lib/mockData";

export default function HarvestRecordsPage() {
  return (
    <main className="min-h-screen bg-white p-8 text-black">
      <h1 className="text-3xl font-bold text-green-800">Harvest Records</h1>

      <div className="mt-6 grid gap-4">
        {harvests.map((h) => (
          <div key={h.id} className="rounded-lg border p-4">
            <h2 className="font-bold">{h.batch_id}</h2>
            <p>Farm: {h.farm_name}</p>
            <p>Crop: {h.crop_type}</p>
            <p>Weight: {h.weight}</p>
            <p>Status: {h.status}</p>
            <p>Risk: {h.risk}</p>
          </div>
        ))}
      </div>
    </main>
  );
}