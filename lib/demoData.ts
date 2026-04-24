export const demoHarvests = [
  {
    id: "H001",
    crop: "Tomatoes",
    farmer: "Green Valley Farm",
    quantity: "240 kg",
    status: "Pending Approval",
    date: "2026-04-24",
  },
  {
    id: "H002",
    crop: "Corn",
    farmer: "Sunrise Acres",
    quantity: "520 kg",
    status: "Approved",
    date: "2026-04-23",
  },
  {
    id: "H003",
    crop: "Lettuce",
    farmer: "Fresh Leaf Co.",
    quantity: "180 kg",
    status: "Rejected",
    date: "2026-04-22",
  },
];

export const demoIoT = [
  { sensor: "Soil Moisture", value: "62%", status: "Normal" },
  { sensor: "Temperature", value: "78°F", status: "Normal" },
  { sensor: "Humidity", value: "54%", status: "Normal" },
  { sensor: "pH Level", value: "6.5", status: "Good" },
];

export const demoPayments = [
  { id: "P001", farmer: "Green Valley Farm", amount: "$1,240", status: "Pending" },
  { id: "P002", farmer: "Sunrise Acres", amount: "$2,850", status: "Paid" },
];

export const demoAuditLog = [
  { action: "Harvest registered", user: "Admin", time: "Today 10:15 AM" },
  { action: "Corn harvest approved", user: "Admin", time: "Yesterday 4:40 PM" },
  { action: "Payment processed", user: "System", time: "Yesterday 2:05 PM" },
];