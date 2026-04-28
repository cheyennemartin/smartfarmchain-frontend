export const demoDashboard = {
  transparency: "99%",
  monitoring: "24/7",
  security: "100%",
  totalHarvests: 8,
  pendingApprovals: 3,
  approvedHarvests: 4,
  blockedPayments: 1,
};

export const demoHarvests = [
  {
    id: 1,
    batchId: "SFC-001",
    farmer: "Green Valley Farm",
    crop: "Tomatoes",
    weight: "450 kg",
    harvestDate: "2026-04-10",
    location: "Quincy, FL",
    approvalStatus: "Pending",
    paymentStatus: "Pending",
    riskScore: 22,
  },
  {
    id: 2,
    batchId: "SFC-002",
    farmer: "FAMU Research Farm",
    crop: "Corn",
    weight: "800 kg",
    harvestDate: "2026-04-12",
    location: "Tallahassee, FL",
    approvalStatus: "Approved",
    paymentStatus: "Released",
    riskScore: 8,
  },
  {
    id: 3,
    batchId: "SFC-003",
    farmer: "Sunrise Produce",
    crop: "Peppers",
    weight: "300 kg",
    harvestDate: "2026-04-15",
    location: "Apalachicola, FL",
    approvalStatus: "Rejected",
    paymentStatus: "Blocked",
    riskScore: 87,
  },
];

export const demoIoT = [
  {
    id: 1,
    batchId: "SFC-001",
    temperature: "76°F",
    humidity: "62%",
    soilMoisture: "44%",
    ndvi: "0.72",
    status: "Normal",
  },
  {
    id: 2,
    batchId: "SFC-002",
    temperature: "80°F",
    humidity: "58%",
    soilMoisture: "39%",
    ndvi: "0.81",
    status: "Healthy",
  },
  {
    id: 3,
    batchId: "SFC-003",
    temperature: "91°F",
    humidity: "38%",
    soilMoisture: "18%",
    ndvi: "0.42",
    status: "Anomaly Detected",
  },
];

export const demoPayments = [
  {
    id: 1,
    batchId: "SFC-001",
    farmer: "Green Valley Farm",
    amount: "$1,250",
    status: "Pending",
    wallet: "0x91...F23A",
  },
  {
    id: 2,
    batchId: "SFC-002",
    farmer: "FAMU Research Farm",
    amount: "$2,400",
    status: "Released",
    wallet: "0x45...9ACD",
  },
  {
    id: 3,
    batchId: "SFC-003",
    farmer: "Sunrise Produce",
    amount: "$900",
    status: "Blocked",
    wallet: "0x77...B21F",
  },
];

export const demoAuditLog = [
  {
    id: 1,
    action: "Harvest registered",
    user: "Farmer",
    batchId: "SFC-001",
    time: "2026-04-10 09:15 AM",
  },
  {
    id: 2,
    action: "AI risk analysis completed",
    user: "System",
    batchId: "SFC-003",
    time: "2026-04-15 11:40 AM",
  },
  {
    id: 3,
    action: "Payment released",
    user: "Admin",
    batchId: "SFC-002",
    time: "2026-04-16 02:20 PM",
  },
];

export const demoProfile = {
  name: "Cheyenne Martin",
  role: "Admin",
  company: "Cyberbelle Consulting Firm",
  wallet: "0x91F3...24AC",
  access: "Full platform governance",
};

