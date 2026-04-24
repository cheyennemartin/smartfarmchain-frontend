export const harvests = [
  { id: 1, batch_id: "BATCH-001", farm_name: "Green Valley Farm", crop_type: "Corn", harvest_weight_kg: 120, harvest_date: "2026-04-20", approval_status: "APPROVED", risk: "Low" },
  { id: 2, batch_id: "BATCH-002", farm_name: "FAMU Research Farm", crop_type: "Tomatoes", harvest_weight_kg: 85, harvest_date: "2026-04-21", approval_status: "PENDING", risk: "Medium" },
  { id: 3, batch_id: "BATCH-003", farm_name: "Sunrise Farm", crop_type: "Soybeans", harvest_weight_kg: 200, harvest_date: "2026-04-22", approval_status: "FLAGGED", risk: "High" },
];

export const payments = [
  { id: 1, batch_id: "BATCH-001", amount: 250, payment_date: "2026-04-23", status: "RELEASED" },
  { id: 2, batch_id: "BATCH-002", amount: 180, payment_date: "2026-04-24", status: "PENDING" },
];

export const auditLogs = [
  { id: 1, action: "Harvest submitted", user: "Farmer", timestamp: "2026-04-20" },
  { id: 2, action: "AI risk analysis", user: "System", timestamp: "2026-04-21" },
  { id: 3, action: "Payment released", user: "Admin", timestamp: "2026-04-23" },
];

export const iotReadings = [
  { id: 1, batch_id: "BATCH-001", temperature: 25, humidity: 60, soil_moisture: 42, timestamp: "2026-04-20" },
  { id: 2, batch_id: "BATCH-002", temperature: 30, humidity: 70, soil_moisture: 35, timestamp: "2026-04-21" },
];

export const approvals = [
  { id: 1, batch_id: "BATCH-001", approved_by: "Admin", approval_date: "2026-04-22", status: "APPROVED" },
  { id: 2, batch_id: "BATCH-003", approved_by: "AI System", approval_date: "2026-04-23", status: "FLAGGED" },
];

export const profile = {
  name: "Cheyenne Martin",
  role: "Admin",
  wallet_address: "0x1234abcd5678efgh",
  created_at: "2026-04-20",
};