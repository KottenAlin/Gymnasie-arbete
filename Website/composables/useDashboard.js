// Dashboard logic composable for Weather Drone Dashboard
import { ref, watch, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  currentFlight,
  droneFleetInfo,
  weatherPoints,
  temperatureData,
  humidityData,
  windSpeedData,
  pressureData,
  lightIntensityData,
  batteryStatusData,
  powerConsumptionData
} from '~/data/dashboardData';
import { fetchSMHIWeather } from '~/Plugin/smhi.js';

// --- SMHI Weather Data ---
const compareWithSMHI = ref(true);
const smhiWeather = ref({ temp: '-', humidity: '-', cloudiness: '-', windDirection: '-' });

async function updateSMHIWeather(lat = 59.3293, lon = 18.0686) {
  try {
    const data = await fetchSMHIWeather(lat, lon);
    // Find the first forecast timepoint (now)
    const now = data.timeSeries && data.timeSeries.length ? data.timeSeries[0] : null;
    if (now) {
      // SMHI parameter codes: t=temperature, r=humidity, ws=windSpeed, wd=windDirection, tcc=cloudiness
      const getParam = code => {
        const p = now.parameters.find(p => p.name === code);
        return p ? p.values[0] : '-';
      };
      smhiWeather.value = {
        temp: getParam('t'),
        humidity: getParam('r'),
        wind: getParam('ws'),
        windDirection: getParam('wd'),
        cloudiness: getParam('tcc'),
      };
    }
  } catch (e) {
    smhiWeather.value = { temp: '-', humidity: '-', wind: '-', windDirection: '-', cloudiness: '-' };
    console.error('Failed to fetch SMHI weather:', e);
  }
}

function randomize10Percent(value) {
    const percent = 0.1 * value;
    return Math.round(value + (Math.random() * 2 - 1) * percent);
}

// --- SMHI Series for Graphs ---
const smhiSeries = ref({
    temperature: [],
    humidity: [],
    wind: [],
});

// --- Chart Data ---
const chartData = ref(null);

// --- Map ---
let mapInstance = null;

function initMap(mapContainerId = 'map') {
    if (mapInstance) return;
    mapInstance = L.map(mapContainerId).setView([59.3293, 18.0686], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapInstance);
    // Add weather points
    weatherPoints.forEach(point => {
        L.marker([point.lat, point.lng]).addTo(mapInstance)
            .bindPopup(`Temp: ${point.temperature}°C, Humidity: ${point.humidity}%, Wind: ${point.windSpeed} m/s`);
    });
}

function initCharts() {
    // Example: initialize Chart.js instances after DOM is ready
    // (implement your chart logic here)
}

onMounted(() => {
    initMap();
    initCharts();
    if (compareWithSMHI.value) updateSMHIWeather();
});

watch(compareWithSMHI, (val) => {
  if (val) updateSMHIWeather();
});

export function useDashboard() {
    return {
        currentFlight,
        droneFleetInfo,
        weatherPoints,
        temperatureData,
        humidityData,
        windSpeedData,
        pressureData,
        lightIntensityData,
        batteryStatusData,
        powerConsumptionData,
        compareWithSMHI,
        smhiWeather,
        smhiSeries,
        chartData,
        initMap,
        initCharts,
        randomize10Percent,
        updateSMHIWeather
    };
}
