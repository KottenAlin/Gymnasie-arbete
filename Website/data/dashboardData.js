// All dashboard data for Weather Drone Dashboard

export const currentFlight = {
  windDirection: 'SW',
  windDirectionDegrees: 225,
  temperature: 21.5,
  humidity: 68,
  pressure: 1012,
  cloudiness: 70,
  lastUpdate: '2025-04-26T23:20:00+02:00',
  status: 'Active',
  frequency: '2.4GHz',
  battery: 85,
  timeRemaining: '28min',
};

export const droneFleetInfo = [
  { id: 'drone-001', status: 'Active', location: 'Area A', battery: '85%' },
  { id: 'drone-002', status: 'Inactive', location: 'Hangar', battery: '60%' },
  { id: 'drone-003', status: 'Active', location: 'Area B', battery: '92%' },
];

export const weatherPoints = [
  { lat: 59.3293, lng: 18.0686, temperature: 22, humidity: 55, windSpeed: 5 },
  { lat: 59.3328, lng: 18.0649, temperature: 21, humidity: 60, windSpeed: 4 },
  { lat: 59.3275, lng: 18.0707, temperature: 23, humidity: 50, windSpeed: 6 },
];

export const temperatureData = [20, 21, 22, 23, 22, 21, 20, 19, 18, 19, 20, 21];
export const humidityData = [70, 68, 65, 66, 67, 64, 62, 60, 61, 63, 65, 68];
export const windSpeedData = [10, 12, 15, 14, 11, 9, 8, 10, 12, 13, 11, 10];
export const pressureData = [1010, 1012, 1015, 1014, 1011, 1009, 1010, 1013, 1015, 1014, 1012, 1010];
export const lightIntensityData = [500, 600, 700, 800, 750, 650, 550, 450, 400, 480, 520, 550];
export const batteryStatusData = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40];
export const powerConsumptionData = [1.0, 1.1, 1.2, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.9, 1.0, 1.1];

// Add more exports as needed for additional dashboard data
