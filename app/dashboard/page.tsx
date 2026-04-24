import { demoHarvests } from "@/lib/demoData";
export default function DashboardPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>SmartFarmChain Dashboard</h1>
      <p>Wallet connected successfully.</p>
    </main>
  );
}

{demoHarvests.map((harvest) => (
  <div key={harvest.id}>
    <p>{harvest.crop}</p>
    <p>{harvest.farmer}</p>
    <p>{harvest.quantity}</p>
    <p>{harvest.status}</p>
  </div>
))}