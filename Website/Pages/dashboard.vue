<template>


    <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-950 p-6 transition-colors duration-300">
        <div class="flex items-center mb-2">
            <!-- Dynamic Weather Icon -->
            <div class="mr-4">

            </div>
            <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Weather Drone Dashboard</h1>
            <!-- Compass Rose for Wind Direction -->
            <div class="ml-auto flex items-center">
                <div class="relative w-14 h-14">
                    <!-- Heroicons Compass SVG (simplified) -->

                </div>
                <span class="ml-2 text-sm text-gray-600">{{ currentFlight.windDirection }} ({{
                    currentFlight.windDirectionDegrees }}°)</span>
            </div>
        </div>
        <!-- Stat cards for time remaining, frequency, last update -->
        <!-- Compare with SMHI toggle -->
        <div class="flex items-center mb-2">

            <label for="compare-smhi" class="mr-2 font-semibold">Compare with SMHI Data:</label>
            <input id="compare-smhi" type="checkbox" v-model="compareWithSMHI"
                class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-400">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <!-- Stat Cards -->
            <div
                class="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col items-center transition-colors duration-300">
                <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Flight Time Left</span>
                <span class="font-bold text-lg">{{ flightTimeLeft }} min</span>
            </div>
            <div
                class="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col items-center transition-colors duration-300">
                <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Data Frequency</span>
                <span class="font-bold text-lg">{{ dataFrequency }} Hz</span>
            </div>
            <div
                class="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col items-center transition-colors duration-300">
                <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Last Update</span>
                <span class="font-bold text-lg">{{ lastUpdate }}</span>
            </div>
            <div v-if="compareWithSMHI"
                class="bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-4 flex flex-col items-center transition-colors duration-300">
                <span class="text-blue-500 dark:text-blue-300 text-xs mb-1">SMHI Weather</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Temp: <span class="font-bold">{{ smhiWeather.temp
                }}°C</span></span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Humidity: <span class="font-bold">{{
                    smhiWeather.humidity }}%</span></span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Cloud: <span class="font-bold">{{
                    smhiWeather.cloudiness }}%</span></span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Wind: <span class="font-bold">{{
                    smhiWeather.windDirection }}</span></span>
            </div>
        </div>
        <!-- Export button and flight selector (no color param for main map) -->
        <div class="flex items-center mb-2">
            <button @click="exportCSV" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-4">Export
                Data</button>
            <label for="flight-select" class="mr-2 font-semibold">Select Flight:</label>
            <select id="flight-select" v-model="selectedFlight"
                class="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-gray-200">
                <option v-for="(flight, idx) in flights" :key="idx" :value="idx">
                    Flight {{ idx + 1 }}
                </option>
            </select>
        </div>

        <!-- Secondary Color Map Parameter Selector -->
        <div class="flex items-center mb-4">
            <label for="secondary-color-map-param" class="mr-2 font-semibold">Color Map by:</label>
            <select id="secondary-color-map-param" v-model="selectedColorParam"
                class="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-900 dark:text-gray-200">
                <option v-for="opt in colorMapOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <!-- Summary Stats Cards -->

            <!-- Summary Stats Cards -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200">Current Temperature</h2>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-blue-600">{{ currentFlight.currentTemperature }}°C</span>
                    <!-- Modern temperature icon -->
                    <svg class="w-12 h-12 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="9" y="2" width="6" height="14" rx="3" stroke-width="2" stroke="currentColor"
                            fill="#f87171" />
                        <circle cx="12" cy="19" r="4" stroke-width="2" stroke="currentColor" fill="#fca5a5" />
                    </svg>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700">Humidity</h2>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-blue-400">{{ currentFlight.currentHumidity }}%</span>
                    <!-- Modern humidity icon -->
                    <svg class="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <ellipse cx="12" cy="15" rx="7" ry="7" fill="#38bdf8" stroke-width="2" stroke="currentColor" />
                        <path d="M12 2C14 6 17 10 17 14a5 5 0 01-10 0c0-4 3-8 5-12z" fill="#0ea5e9" stroke-width="2"
                            stroke="currentColor" />
                    </svg>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700">Wind Speed</h2>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-purple-600">{{ currentFlight.currentWindSpeed }} m/s</span>
                    <!-- Modern wind icon -->
                    <svg class="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 12h12a4 4 0 100-8c-2.21 0-4 1.79-4 4" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" stroke="currentColor" />
                        <path d="M2 19h7a3 3 0 100-6c-1.66 0-3 1.34-3 3" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" stroke="currentColor" />
                    </svg>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Steady from {{ currentFlight.windDirection }}
                </p>

            </div>

            <!-- Cloud Cover -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700">Cloud Cover</h2>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-400 flex items-center">
                        <svg class="w-8 h-8 mr-2 text-blue-400" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <path
                                d="M17.5 19a4.5 4.5 0 0 0 0-9c-.29 0-.58.02-.86.07A5.5 5.5 0 0 0 6 13a4 4 0 0 0 1 7.87h10.5z" />
                        </svg>
                        {{ currentFlight.cloudCover }}%
                    </span>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Cloud coverage</p>
            </div>

            <!-- Light Intensity -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700">Light Intensity</h2>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-yellow-400 flex items-center">
                        <svg class="w-8 h-8 mr-2 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="5" />
                            <g>
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </g>
                        </svg>
                        {{ currentFlight.lightIntensity }} lux
                    </span>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Ambient light</p>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Barometric Pressure</h2>
                <div class="flex items-center justify-center">
                    <div class="relative w-32 h-32">
                        <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" stroke-width="10" />
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" stroke-width="10"
                                stroke-dasharray="282.7" :stroke-dashoffset="pressureStrokeOffset" />
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center flex-col">
                            <span class="text-2xl font-bold">{{ Math.round(pressure) }}</span>
                            <span class="text-xs text-gray-500 dark:text-gray-400">hPa</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Drone Map Section -->
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
            <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Drone Map (Mora, Sweden)</h2>
            <div id="drone-map" style="height: 400px; width: 100%;"></div>
        </div>
        <!-- Color Map Section -->
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
            <div class="flex items-center mb-3">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mr-4">Color Map by Parameter</h2>


                <select id="color-param" v-model="selectedColorParam" @change="alert('Color parameter changed')"
                    class="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-gray-200">
                    <option value="temperature">Temperature</option>
                    <option value="humidity">Humidity</option>
                    <option value="windSpeed">Wind Speed</option>
                    <option value="pressure">Pressure</option>
                    <option value="lightIntensity">Light Intensity</option>
                    <option value="cloudiness">Cloudiness</option>
                    <option value="altitude">Altitude</option>
                    <option value="battery">Battery</option>
                </select>
            </div>
            <div id="color-map" style="height: 400px; width: 100%;"></div>
        </div>

        <!-- Main charts section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <!-- Temperature Chart -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Temperature (30min flight)
                    <span :class="qualityColor('temperature')" class="ml-2 inline-block w-3 h-3 rounded-full"></span>
                </h2>
                <canvas id="temperatureChart" height="220"></canvas>
            </div>
            <!-- Humidity Chart -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Humidity (30min flight)
                    <span :class="qualityColor('humidity')" class="ml-2 inline-block w-3 h-3 rounded-full"></span>
                </h2>
                <canvas id="humidityChart" height="220"></canvas>
            </div>
            <!-- Luminicity Chart -->

        </div>


        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <!-- Wind Chart -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Wind Speed (30min flight)</h2>
                <canvas id="windChart" height="220"></canvas>
            </div>

            <!-- Air Pressure Chart -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Air Pressure (30min flight)</h2>
                <canvas id="pressureChart" height="220"></canvas>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4 transition-colors duration-300">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200">Cloudiness (%)</h2>
                <canvas id="cloudinessChart" height="220"></canvas>

            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Light Intensity (30min flight)
                    <span :class="qualityColor('light')" class="ml-2 inline-block w-3 h-3 rounded-full"></span>
                </h2>
                <canvas id="lightIntensityChart" height="220"></canvas>
            </div>
        </div>
        <!-- Altitude and Battery Discharge Charts -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <!-- Altitude Chart -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Altitude (30min flight)
                    <span :class="qualityColor('altitude')" class="ml-2 inline-block w-3 h-3 rounded-full"></span>
                </h2>
                <canvas id="altitudeChart" height="220"></canvas>
            </div>
            <!-- Battery Discharge Chart -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
                <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Battery Discharge Rate
                    <span :class="qualityColor('battery')" class="ml-2 inline-block w-3 h-3 rounded-full"></span>
                </h2>
                <canvas id="batteryChart" height="220"></canvas>
            </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
            <!-- Pressure -->


        </div>

        <!-- Drone Status Section -->
        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-4">Drone Status</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-3">
                <div class="bg-gray-50 rounded p-4 flex flex-col items-center">
                    <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Speed</span>
                    <span class="font-bold text-lg">{{ currentFlight.droneSpeed }} m/s</span>
                </div>
                <div class="bg-gray-50 rounded p-4 flex flex-col items-center">
                    <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Acceleration</span>
                    <span class="font-bold text-lg">{{ currentFlight.droneAcceleration }} m/s²</span>
                </div>
                <div class="bg-gray-50 rounded p-4 flex flex-col items-center">
                    <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Power</span>
                    <span class="font-bold text-lg">{{ currentFlight.dronePower }} W</span>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="border border-gray-200 rounded p-3 flex flex-col">
                    <div class="flex items-center mb-1">
                        <!-- Battery Icon -->
                        <svg class="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <rect x="2" y="7" width="18" height="10" rx="2" fill="#22c55e" />
                            <rect x="20" y="10" width="2" height="4" rx="1" fill="#a3e635" />
                        </svg>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Battery</span>
                    </div>
                    <div class="flex items-center mt-1">
                        <div class="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div class="h-2.5 rounded-full"
                                :class="currentFlight.batteryLevel > 50 ? 'bg-green-500' : currentFlight.batteryLevel > 20 ? 'bg-yellow-400' : 'bg-red-500'"
                                :style="{ width: `${currentFlight.batteryLevel}%` }"></div>
                        </div>
                        <span class="text-sm font-medium">{{ currentFlight.batteryLevel }}%</span>
                    </div>
                </div>

                <div class="border border-gray-200 rounded p-3 flex flex-col">
                    <div class="flex items-center mb-1">
                        <!-- Signal Icon -->
                        <svg class="w-5 h-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24">
                            <circle cx="5" cy="19" r="2" fill="#3b82f6" />
                            <circle cx="12" cy="19" r="2" fill="#60a5fa" />
                            <circle cx="19" cy="19" r="2" fill="#a5b4fc" />
                        </svg>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Signal Strength</span>
                    </div>
                    <div class="flex items-center mt-1">
                        <div class="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div class="bg-blue-500 h-2.5 rounded-full"
                                :style="{ width: `${currentFlight.signalStrength}%` }"></div>
                        </div>
                        <span class="text-sm font-medium">{{ currentFlight.signalStrength }}%</span>
                    </div>
                </div>

                <div class="border border-gray-200 rounded p-3 flex flex-col">
                    <div class="flex items-center mb-1">
                        <!-- GPS Icon -->
                        <svg class="w-5 h-5 mr-1 text-teal-500" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="#14b8a6" stroke-width="2" fill="none" />
                            <circle cx="12" cy="12" r="4" fill="#2dd4bf" />
                        </svg>
                        <span class="text-sm text-gray-500 dark:text-gray-400">GPS Accuracy</span>
                    </div>
                    <div class="flex items-center mt-1">
                        <div class="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div class="bg-teal-500 h-2.5 rounded-full" :style="{ width: `${gpsAccuracy}%` }"></div>
                        </div>
                        <span class="text-sm font-medium">{{ gpsAccuracy }}%</span>
                    </div>
                </div>

                <div class="border border-gray-200 rounded p-3">
                    <div class="text-sm text-gray-500 dark:text-gray-400">Status</div>
                    <div class="flex items-center mt-1">
                        <div class="w-3 h-3 rounded-full mr-2" :class="isDroneActive ? 'bg-green-500' : 'bg-red-500'">
                        </div>
                        <span class="text-sm font-medium">{{ droneStatus }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="chartData">
            <canvas id="weatherChart"></canvas>
            <canvas id="droneChart"></canvas>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// --- SMHI Weather Data ---
const compareWithSMHI = ref(true);
const smhiWeather = ref({ temp: '-', humidity: '-', cloudiness: '-', windDirection: '-' });

function randomize10Percent(value) {
    const percent = 0.1 * value;
    return Math.round(value + (Math.random() * 2 - 1) * percent);
}

// --- SMHI Series for Graphs ---
const smhiSeries = ref({
    temperature: [],
    humidity: [],
    wind: [],
    pressure: [],
    cloudiness: []
});

function avg(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function randomizePercent(value, percent) {
    const delta = percent * value;
    return Math.round((value + (Math.random() * 2 - 1) * delta) * 10) / 10;
}

function generateMockSMHISeries() {
    const base = currentFlight.value; // current flight data
    console.log(base);
    const len = base.temperatureData.length;
    // Generate SMHI temperature: smooth profile 10–15°C
    let t = Math.random() * 2 * Math.PI;
    smhiSeries.value.temperature = Array.from({ length: len }, (_, i) => 13.5 + 1.5 * Math.sin(t + i * 0.1) + Math.random() * 0.3);
    // Generate SMHI pressure: smooth profile 1005–1015 hPa
    let p = Math.random() * 2 * Math.PI;
    smhiSeries.value.pressure = Array.from({ length: len }, (_, i) => 1010 + 3 * Math.sin(p + i * 0.05) + Math.random());
    // Generate SMHI wind: smooth profile 1–3 m/s
    let w = Math.random() * 2 * Math.PI;
    if (base.windData && base.windData.length === len) {
        //smhiSeries.value.wind = [...base.windData];
    } else {
        smhiSeries.value.wind = Array.from({ length: len }, (_, i) => 2 + Math.sin(w + i * 0.1) + Math.random() * 0.5)
    }
    // Generate SMHI humidity: use original drone data as SMHI reference if available, else random 40–80%
    if (base.humidityData && base.humidityData.length === len) {
        smhiSeries.value.humidity = [...base.humidityData];
    } else {
        smhiSeries.value.humidity = Array.from({ length: len }, () => 40 + Math.random() * 40);
    }
    // Generate SMHI cloudiness: smooth profile 70-85 %
    let c = Math.random() * 2 * Math.PI;
    smhiSeries.value.cloudiness = Array.from({ length: len }, (_, i) => Math.max(0, Math.min(100, 70 + 10 * Math.sin(c + i * 0.09) + Math.random() * 10)));

    // Generate SMHI wind direction: random compass direction
    smhiSeries.value.windDirection = Array.from({ length: len }, () => randomizeWindDirection(base.windDirection));

    // Generate SMHI luminosity: smooth profile 2000–10000 lux
    let l = Math.random() * 2 * Math.PI;
    smhiSeries.value.lightIntensity = Array.from({ length: len }, (_, i) => 6000 + 4000 * Math.sin(l + i * 0.07) + Math.random() * 2000);
    // Clamp values to 2000–10000 lux
    smhiSeries.value.lightIntensity = smhiSeries.value.lightIntensity.map(v => Math.max(2000, Math.min(10000, v)));

    // Drone = SMHI ±3–5% (temp), ±1 hPa (pressure), ±20% (wind), ±10% (humidity), ±10% (cloudiness), ±10% (luminosity)
    base.temperatureData = smhiSeries.value.temperature.map(v => randomizePercent(v, 0.05)); // 4% avg
    base.pressureData = smhiSeries.value.pressure.map(v => Math.round((v + (Math.random() * 2 - 1)) * 10) / 10); // ±1 hPa
    base.windData = smhiSeries.value.wind.map(v => randomizePercent(v, 0.4)); // ±20%
    base.humidityData = smhiSeries.value.humidity.map(v => randomizePercent(v, 0.2)); // ±10%
    base.lightIntensityData = smhiSeries.value.lightIntensity.map(v => randomizePercent(v, 0.4)); // ±10%
    // Fix: set both cloudinessData (array) and cloudCover (summary value)
    base.cloudinessData = smhiSeries.value.cloudiness.map(v => randomizePercent(v, 0.2)); // ±10%
    base.cloudCover = Math.round(base.cloudinessData.reduce((a, b) => a + b, 0) / base.cloudinessData.length);
}


function randomizeWindDirection(dir) {
    // 8 compass directions
    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    let idx = dirs.indexOf(dir);
    if (idx === -1) idx = 0;
    // Randomly shift by -1, 0, or 1
    idx = (idx + Math.floor(Math.random() * 3) - 1 + 8) % 8;
    return dirs[idx];
}

function generateMockSMHIWeather() {
    // Use the current flight's values as base
    const base = currentFlight.value;
    smhiWeather.value = {
        temp: randomize10Percent(base.currentTemperature),
        humidity: randomize10Percent(base.currentHumidity),
        cloudiness: randomize10Percent(base.cloudCover),
        windDirection: randomizeWindDirection(base.windDirection)
    };
}

// --- Chart references (must be accessible to updateAllCharts) ---
let tempChart, altitudeChart, batteryChart, cloudinessChart, lightIntensityChart;

function updateAllCharts() {
    if (!tempChart || !altitudeChart || !batteryChart) return;
    // Temperature
    tempChart.data.datasets[0].data = currentFlight.value.temperatureData;
    if (compareWithSMHI.value) {
        if (tempChart.data.datasets.length < 2) {
            tempChart.data.datasets.push({
                label: 'SMHI Temperature',
                data: smhiSeries.value.temperature,
                borderColor: 'rgba(251, 191, 36, 1)',
                backgroundColor: 'rgba(251,191,36,0.08)',
                borderDash: [6, 6],
                tension: 0.2
            });
        } else {
            tempChart.data.datasets[1].data = smhiSeries.value.temperature;
        }
    } else if (tempChart.data.datasets.length > 1) {
        tempChart.data.datasets.pop();
    }
    tempChart.update();
    // Altitude (NO SMHI line)
    altitudeChart.data.datasets[0].data = currentFlight.value.altitudeData;
    if (altitudeChart.data.datasets.length > 1) {
        altitudeChart.data.datasets = [altitudeChart.data.datasets[0]];
    }
    altitudeChart.update();
    // Battery (NO SMHI line)
    batteryChart.data.datasets[0].data = currentFlight.value.batteryDischargeData;
    if (batteryChart.data.datasets.length > 1) {
        batteryChart.data.datasets = [batteryChart.data.datasets[0]];
    }
    batteryChart.update();
}

onMounted(() => { // Initialize charts and listeners
    generateMockSMHIWeather();
    generateMockSMHISeries();
    watch(currentFlight, () => {
        generateMockSMHIWeather();
        generateMockSMHISeries();
        updateAllCharts();
    }, { immediate: true });
    watch(compareWithSMHI, updateAllCharts);
});


// --- Multi-Flight Data ---
const selectedFlight = ref(0);
const flights = ref([
    {
        // Flight 1
        temperatureData: Array.from({ length: 60 }, (_, i) => 100 + Math.sin(i / 10) * 10 + Math.random() * 2),
        humidityData: Array.from({ length: 60 }, (_, i) => 65 + Math.sin(i / 8) * 5 + Math.random() * 2),
        windData: Array.from({ length: 60 }, (_, i) => 1 + Math.random() * 2),
        pressureData: Array.from({ length: 60 }, (_, i) => 1012 + Math.sin(i / 15) * 5 + Math.random()),
        altitudeData: Array.from({ length: 60 }, (_, i) => 100 + Math.sin(i / 10) * 10 + Math.random() * 2),
        batteryDischargeData: Array.from({ length: 60 }, (_, i) => Math.max(0, 100 - i * 1.2 + Math.random() * 1)),
        historicalAltitude: Array.from({ length: 60 }, (_, i) => 90 + Math.sin(i / 8) * 12 + Math.random() * 3),
        historicalBattery: Array.from({ length: 60 }, (_, i) => Math.max(0, 100 - i * 1.5 + Math.random() * 2)),
        cloudCover: 40,
        lightIntensity: 12000,
        windDirection: 'North-East',
        windDirectionDegrees: 45,
        batteryLevel: 85,
        signalStrength: 90,
        droneSpeed: 10.5,
        droneAcceleration: 2.1,
        dronePower: 85,
        currentTemperature: 18,
        currentHumidity: 65,
        currentWindSpeed: 2
    },
    {
        // Flight 2
        temperatureData: Array.from({ length: 60 }, (_, i) => 102 + Math.sin(i / 11) * 8 + Math.random() * 2),
        humidityData: Array.from({ length: 60 }, (_, i) => 60 + Math.sin(i / 9) * 4 + Math.random() * 2),
        windData: Array.from({ length: 60 }, (_, i) => 1 + Math.random() * 2),
        pressureData: Array.from({ length: 60 }, (_, i) => 1015 + Math.sin(i / 14) * 7 + Math.random()),
        altitudeData: Array.from({ length: 60 }, (_, i) => 110 + Math.sin(i / 9) * 9 + Math.random() * 2),
        batteryDischargeData: Array.from({ length: 60 }, (_, i) => Math.max(0, 100 - i * 1.1 + Math.random() * 1)),
        historicalAltitude: Array.from({ length: 60 }, (_, i) => 95 + Math.sin(i / 7) * 10 + Math.random() * 3),
        historicalBattery: Array.from({ length: 60 }, (_, i) => Math.max(0, 100 - i * 1.6 + Math.random() * 2)),
        cloudinessData: Array.from({ length: 60 }, (_, i) => 60 + Math.sin(i / 8) * 25 + Math.random() * 8),
        cloudCover: 60,
        lightIntensity: 13000,
        lightIntensityData: Array.from({ length: 60 }, (_, i) => 12000 + Math.sin(i / 8) * 1800 + Math.random() * 400),
        windDirection: 'East',
        windDirectionDegrees: 90,
        batteryLevel: 70,
        signalStrength: 80,
        droneSpeed: 11.2,
        droneAcceleration: 2.5,
        dronePower: 88,
        currentTemperature: 20,
        currentHumidity: 60,
        currentWindSpeed: 2
    },
    {
        // Flight 3
        temperatureData: Array.from({ length: 60 }, (_, i) => 98 + Math.sin(i / 12) * 7 + Math.random() * 2),
        humidityData: Array.from({ length: 60 }, (_, i) => 70 + Math.sin(i / 10) * 6 + Math.random() * 2),
        windData: Array.from({ length: 60 }, (_, i) => 1 + Math.random() * 2),
        pressureData: Array.from({ length: 60 }, (_, i) => 1010 + Math.sin(i / 13) * 6 + Math.random()),
        altitudeData: Array.from({ length: 60 }, (_, i) => 90 + Math.sin(i / 11) * 11 + Math.random() * 2),
        batteryDischargeData: Array.from({ length: 60 }, (_, i) => Math.max(0, 100 - i * 1.3 + Math.random() * 1)),
        historicalAltitude: Array.from({ length: 60 }, (_, i) => 85 + Math.sin(i / 9) * 11 + Math.random() * 3),
        historicalBattery: Array.from({ length: 60 }, (_, i) => Math.max(0, 100 - i * 1.4 + Math.random() * 2)),
        cloudinessData: Array.from({ length: 60 }, (_, i) => 35 + Math.sin(i / 7) * 28 + Math.random() * 12),
        cloudCover: 30,
        lightIntensity: 11000,
        lightIntensityData: Array.from({ length: 60 }, (_, i) => 10500 + Math.sin(i / 10) * 1500 + Math.random() * 350),
        windDirection: 'West',
        windDirectionDegrees: 270,
        batteryLevel: 95,
        signalStrength: 99,
        droneSpeed: 9.8,
        droneAcceleration: 1.9,
        dronePower: 82,
        currentTemperature: 16,
        currentHumidity: 70,
        currentWindSpeed: 7
    }
]);

const weatherCondition = ref(['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)]);
const dataFrequency = ref(2); // Hz
const lastUpdate = ref('');
// showHistorical removed, replaced by flight selector

// Helper: current flight data
const currentFlight = computed(() => flights.value[selectedFlight.value]);

// Simulated flight time left (based on battery)
const flightTimeLeft = computed(() => Math.max(0, Math.round((currentFlight.value.batteryLevel / 100) * 30)));

// Data quality indicators: 'good', 'medium', 'bad'
const dataQuality = ref({
    temperature: 'good',
    humidity: 'good',
    wind: 'good',
    pressure: 'good',
    light: 'good',
    cloud: 'good',
    altitude: 'good',
    battery: 'good'
});
function qualityColor(sensor) {
    return {
        good: 'bg-green-400',
        medium: 'bg-yellow-400',
        bad: 'bg-red-400'
    }[dataQuality.value[sensor] || 'good'];
}

// CSV export functionality
function exportCSV() {
    // Collect all current data
    let csv = 'Time,Temperature,Humidity,Wind,Pressure,Light,Cloud,Altitude,Battery\n';
    for (let i = 0; i < 60; i++) {
        csv += `${i * 30},${currentFlight.value.temperatureData[i]?.toFixed(2)},${currentFlight.value.humidityData[i]?.toFixed(2)},${currentFlight.value.windData[i]?.toFixed(2)},${currentFlight.value.pressureData[i]?.toFixed(2)},${currentFlight.value.lightIntensity},${currentFlight.value.cloudCover},${currentFlight.value.altitudeData[i]?.toFixed(2)},${currentFlight.value.batteryDischargeData[i]?.toFixed(2)}\n`;
    }
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'drone_dashboard_data.csv';
    a.click();
    URL.revokeObjectURL(url);
}

// Update last update time every second
setInterval(() => {
    const now = new Date();
    lastUpdate.value = now.toLocaleTimeString();
}, 1000);


const pressure = computed(() => currentFlight.value.pressureData[0]); // Example: first value

const gpsAccuracy = ref(95);
const isDroneActive = ref(true);

// Computed properties for dynamic styling and text based on fake data
const maxTemp = computed(() => Math.max(...currentFlight.value.temperatureData));

const humidityPath = computed(() => {
    const data = humidityData.value;
    if (data.length === 0) return '';
    const maxHumidity = 100; // Assuming max humidity is 100%
    const pointWidth = 100 / (data.length - 1);

    let path = `M 0 ${100 - (data[0] / maxHumidity) * 100}`;
    for (let i = 1; i < data.length; i++) {
        path += ` L ${pointWidth * i} ${100 - (data[i] / maxHumidity) * 100}`;
    }
    return path;
});

const pressureStrokeOffset = computed(() => {
    // Assuming normal pressure is around 1013 hPa, scaling for a gauge
    const minPressure = 980;
    const maxPressure = 1040;
    const range = maxPressure - minPressure;
    const percentage = (pressure.value - minPressure) / range;
    return 282.7 * (1 - percentage); // 282.7 is the circumference of a circle with radius 45 * PI
});




const droneStatus = computed(() => isDroneActive.value ? 'Active' : 'Inactive');

const chartData = ref(null);


onMounted(() => {
    // Initialize Leaflet map for Mora, Sweden
    const moraLat = 61.0042, moraLng = 14.5376;
    const map = L.map('drone-map').setView([moraLat, moraLng], 13); // Centered on Mora
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // --- Color Map Parameter ---
    const colorMapParameter = ref('temperature');
    const colorMapOptions = [
        { value: 'temperature', label: 'Temperature' },
        { value: 'humidity', label: 'Humidity' },
        { value: 'windSpeed', label: 'Wind Speed' },
        { value: 'pressure', label: 'Pressure' },
        { value: 'lightIntensity', label: 'Light Intensity' },
        { value: 'cloudiness', label: 'Cloudiness' },
        { value: 'altitude', label: 'Altitude' },
        { value: 'battery', label: 'Battery' }
    ];

    // Shared array to store all generated points
    const dronePoints = [];
    // --- Marker reference array ---
    const markerRefs = [];
    // --- Color utility function ---
    function getColorByParameter(val, param) {
        let min = 0, max = 100;
        switch (param) {
            case 'temperature': min = 10; max = 30; break;
            case 'humidity': min = 0; max = 100; break;
            case 'windSpeed': min = 0; max = 10; break;
            case 'pressure': min = 980; max = 1030; break;
            case 'lightIntensity': min = 2000; max = 10000; break;
            case 'cloudiness': min = 0; max = 100; break;
            case 'altitude': min = 80; max = 120; break;
            case 'battery': min = 0; max = 100; break;
        }
        let t = (val - min) / (max - min);
        t = Math.max(0, Math.min(1, t));
        const r = Math.round(255 * t);
        const g = Math.round(128 * (1 - t));
        const b = Math.round(255 * (1 - t));
        return `rgb(${r},${g},${b})`;
    }
    for (let i = 0; i < 100; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 1; // up to 1km
        // Approximate conversion: 1km ~ 0.009 degrees latitude/longitude
        const dLat = distance * 0.009 * Math.cos(angle);
        const dLng = distance * 0.009 * Math.sin(angle);
        const lat = moraLat + dLat + 0.01; // Move 5km north
        const lng = moraLng + dLng + 0.1; // Move 5km east
        // Generate random data for all variables
        const pointData = {
            lat,
            lng,
            temperature: Number((15 + Math.random() * 10).toFixed(1)),
            humidity: Number((50 + Math.random() * 40).toFixed(1)),
            windSpeed: Number((1 + Math.random() * 2).toFixed(1)),
            pressure: Number((1000 + Math.random() * 30).toFixed(1)),
            lightIntensity: Math.round(8000 + Math.random() * 6000),
            cloudiness: Math.round(Math.random() * 100),
            altitude: Number((80 + Math.random() * 40).toFixed(1)),
            battery: Number((40 + Math.random() * 60).toFixed(0)),
        };
        dronePoints.push(pointData);
        const markerIcon = L.divIcon({
            className: '',
            html: `<div style="background:${getColorByParameter(pointData[colorMapParameter.value], colorMapParameter.value)};width:18px;height:18px;border-radius:50%;border:2px solid #fff;"></div>`,
            iconSize: [18, 18],
            iconAnchor: [9, 9]
        });
        const marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);
        marker.bindPopup(`
            <strong>Drone Data Point #${i + 1}</strong><br>
            <strong>Lat:</strong> ${lat.toFixed(4)}, <strong>Lng:</strong> ${lng.toFixed(4)}<br>
            <strong>Temperature:</strong> ${pointData.temperature}°C<br>
            <strong>Humidity:</strong> ${pointData.humidity}%<br>
            <strong>Wind Speed:</strong> ${pointData.windSpeed} m/s<br>
            <strong>Pressure:</strong> ${pointData.pressure} hPa<br>
            <strong>Light Intensity:</strong> ${pointData.lightIntensity} lx<br>
            <strong>Cloudiness:</strong> ${pointData.cloudiness}%<br>
            <strong>Altitude:</strong> ${pointData.altitude} m<br>
            <strong>Battery:</strong> ${pointData.battery}%
        `);
    }

    // --- SECOND MAP: Color Map ---
    const colorMapParams = ['temperature', 'humidity', 'windSpeed', 'pressure', 'lightIntensity', 'cloudiness', 'altitude', 'battery'];
    const selectedColorParam = ref('temperature');
    let colorMap = null;
    let colorMarkers = [];
    function getMinMax(param) {
        let vals = dronePoints.map(p => p[param]);
        return [Math.min(...vals), Math.max(...vals)];
    }
    function getColor(val, min, max) {
        const t = (val - min) / (max - min);
        const r = Math.round(0 + (34 - 0) * t); // blue: 0, green: 34
        const g = Math.round(102 + (197 - 102) * t); // blue: 102, green: 197
        const b = Math.round(204 + (94 - 204) * t); // blue: 204, green: 94
        return `rgb(${r},${g},${b})`;
    }
    function renderColorMapMarkers(param) {
        if (!colorMap) return;
        colorMarkers.forEach(m => colorMap.removeLayer(m));
        colorMarkers.length = 0;
        const [min, max] = getMinMax(param);
        dronePoints.forEach((point, i) => {
            const color = getColor(point[param], min, max);
            const marker = L.circleMarker([point.lat, point.lng], {
                radius: 10,
                fillColor: color,
                color: '#222',
                weight: 1,
                fillOpacity: 0.85
            }).addTo(colorMap);
            marker.bindPopup(`
                <strong>Drone Data Point #${i + 1}</strong><br>
                <strong>${param.charAt(0).toUpperCase() + param.slice(1)}:</strong> ${point[param]}<br>
                <strong>Lat:</strong> ${point.lat.toFixed(4)}, <strong>Lng:</strong> ${point.lng.toFixed(4)}
            `);
            colorMarkers.push(marker);
        });
    }
    setTimeout(() => {
        colorMap = L.map('color-map').setView([moraLat, moraLng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(colorMap);
        renderColorMapMarkers(selectedColorParam.value);
    }, 0);
    watch(selectedColorParam, (param) => {
        renderColorMapMarkers(param);
    });


    // Generate time labels for 30min flight (every 30s)
    const timeLabels = Array.from({ length: 60 }, (_, i) => {
        const min = Math.floor(i / 2).toString().padStart(2, '0');
        const sec = ((i % 2) * 30).toString().padStart(2, '0');
        return `${min}:${sec}`;
    });

    // Temperature chart
    const ctxTemp = document.getElementById('temperatureChart');
    tempChart = new Chart(ctxTemp, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: currentFlight.value.temperatureData,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59,130,246,0.08)',
                    tension: 0.2
                },
                ...(compareWithSMHI.value ? [{
                    label: 'SMHI Temperature',
                    data: smhiSeries.value.temperature,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                }] : [])
            ]
        },
        options: {
            responsive: true,
            scales: { x: { title: { display: true, text: 'Time (mm:ss)' } }, y: { beginAtZero: false } }
        }
    });

    // Light Intensity (Luminicity) chart
    const ctxLight = document.getElementById('lightIntensityChart');
    lightIntensityChart = new Chart(ctxLight, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Drone Light Intensity (lux)',
                    data: currentFlight.value.lightIntensityData || Array(60).fill(currentFlight.value.lightIntensity),
                    borderColor: 'rgba(253, 224, 71, 1)',
                    backgroundColor: 'rgba(253,224,71,0.08)',
                    tension: 0.2
                },
                ...(compareWithSMHI.value ? [{
                    label: 'SMHI Light Intensity (lux)',
                    data: smhiSeries.value.lightIntensity,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59,130,246,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                }] : [])
            ]
        },
        options: {
            responsive: true,
            scales: { x: { title: { display: true, text: 'Time (mm:ss)' } }, y: { beginAtZero: true, title: { display: true, text: 'Lux' } } }
        }
    });

    // Humidity chart
    const ctxHum = document.getElementById('humidityChart');
    new Chart(ctxHum, {



        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Humidity (%)',
                    data: currentFlight.value.humidityData,
                    borderColor: 'rgba(96, 165, 250, 1)',
                    backgroundColor: 'rgba(96,165,250,0.1)',
                    tension: 0.2
                },
                ...(compareWithSMHI.value ? [{
                    label: 'SMHI Humidity',
                    data: smhiSeries.value.humidity,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                }] : [])
            ]
        },
        options: {
            responsive: true,
            scales: { x: { title: { display: true, text: 'Time (mm:ss)' } }, y: { beginAtZero: true } }
        }
    });

    // Wind chart
    const ctxWind = document.getElementById('windChart');
    new Chart(ctxWind, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Wind Speed (m/s)',
                    data: currentFlight.value.windData,
                    borderColor: 'rgba(168, 85, 247, 1)',
                    backgroundColor: 'rgba(168,85,247,0.1)',
                    tension: 0.2
                },
                ...(compareWithSMHI.value ? [{
                    label: 'SMHI Wind Speed',
                    data: smhiSeries.value.wind,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                }] : [])
            ]
        },
        options: {
            responsive: true,
            scales: { x: { title: { display: true, text: 'Time (mm:ss)' } }, y: { beginAtZero: true } }
        }
    });

    // Pressure chart
    const ctxPressure = document.getElementById('pressureChart');
    new Chart(ctxPressure, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Pressure (hPa)',
                    data: currentFlight.value.pressureData,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59,130,246,0.1)',
                    tension: 0.2
                },
                ...(compareWithSMHI.value ? [{
                    label: 'SMHI Pressure',
                    data: smhiSeries.value.pressure,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                }] : [])
            ]
        },
        options: {
            responsive: true,
            scales: { x: { title: { display: true, text: 'Time (mm:ss)' } }, y: { beginAtZero: false } }
        }
    });

    // Altitude chart
    const ctxAlt = document.getElementById('altitudeChart');
    altitudeChart = new Chart(ctxAlt, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Altitude (m)',
                    data: currentFlight.value.altitudeData,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    tension: 0.2
                },
                ...(compareWithSMHI.value ? [{
                    label: 'SMHI Altitude',
                    data: smhiSeries.value.altitude,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59,130,246,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                }] : [])
            ]
        },
        options: {
            responsive: true,
            scales: { x: { title: { display: true, text: 'Time (mm:ss)' } }, y: { beginAtZero: false } }
        }
    });
    // Battery discharge chart
    const ctxBat = document.getElementById('batteryChart');
    batteryChart = new Chart(ctxBat, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Battery (%)',
                    data: currentFlight.value.batteryDischargeData,
                    borderColor: 'rgba(34,197,94,1)',
                    backgroundColor: 'rgba(34,197,94,0.08)',
                    tension: 0.2
                },
                ...(compareWithSMHI.value ? [{
                    label: 'SMHI Battery',
                    data: smhiSeries.value.batteryDischarge,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                }] : [])
            ]
        },
        options: {
            responsive: true,
            scales: { x: { title: { display: true, text: 'Time (mm:ss)' } }, y: { beginAtZero: true } }
        }
    });

    // Cloudiness chart
    const ctxCloud = document.getElementById('cloudinessChart');
    cloudinessChart = new Chart(ctxCloud, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Cloudiness (%)',
                    data: currentFlight.value.cloudinessData,
                    borderColor: 'rgba(59,130,246,1)',
                    backgroundColor: 'rgba(59,130,246,0.08)',
                    tension: 0.2
                },
                ...(compareWithSMHI.value ? [{
                    label: 'SMHI Cloudiness',
                    data: smhiSeries.value.cloudiness,
                    borderColor: 'rgba(251,191,36,1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                }] : [])
            ]
        },
        options: {
            responsive: true,
            scales: { x: { title: { display: true, text: 'Time (mm:ss)' } }, y: { beginAtZero: true, max: 100, min: 0, title: { display: true, text: 'Cloudiness (%)' } } }
        }
    });

    // Watch for toggle to update charts
    function updateAllCharts() {
        // Light Intensity Chart
        if (lightIntensityChart) {
            lightIntensityChart.data.datasets[0].data = currentFlight.value.lightIntensityData || Array(60).fill(currentFlight.value.lightIntensity);
            lightIntensityChart.update();
        }
        // Update all charts with new data and SMHI lines
        // Temperature
        tempChart.data.datasets[0].data = currentFlight.value.temperatureData;
        if (compareWithSMHI.value) {
            if (tempChart.data.datasets.length < 2) {
                tempChart.data.datasets.push({
                    label: 'SMHI Temperature',
                    data: smhiSeries.value.temperature,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                });
            } else {
                tempChart.data.datasets[1].data = smhiSeries.value.temperature;
            }
        } else if (tempChart.data.datasets.length > 1) {
            tempChart.data.datasets.pop();
        }
        tempChart.update();
        // Altitude
        altitudeChart.data.datasets[0].data = currentFlight.value.altitudeData;
        if (compareWithSMHI.value) {
            if (altitudeChart.data.datasets.length < 2) {
                altitudeChart.data.datasets.push({
                    label: 'SMHI Altitude',
                    data: smhiSeries.value.altitude,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59,130,246,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                });
            } else {
                altitudeChart.data.datasets[1].data = smhiSeries.value.altitude;
            }
        } else if (altitudeChart.data.datasets.length > 1) {
            altitudeChart.data.datasets.pop();
        }
        altitudeChart.update();
        // Battery
        batteryChart.data.datasets[0].data = currentFlight.value.batteryDischargeData;
        if (compareWithSMHI.value) {
            if (batteryChart.data.datasets.length < 2) {
                batteryChart.data.datasets.push({
                    label: 'SMHI Battery',
                    data: smhiSeries.value.batteryDischarge,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                });
            } else {
                batteryChart.data.datasets[1].data = smhiSeries.value.batteryDischarge;
            }
        } else if (batteryChart.data.datasets.length > 1) {
            batteryChart.data.datasets.pop();
        }
        batteryChart.update();
        // Cloudiness
        cloudinessChart.data.datasets[0].data = currentFlight.value.cloudinessData;
        if (compareWithSMHI.value) {
            if (cloudinessChart.data.datasets.length < 2) {
                cloudinessChart.data.datasets.push({
                    label: 'SMHI Cloudiness',
                    data: smhiSeries.value.cloudiness,
                    borderColor: 'rgba(251,191,36,1)',
                    backgroundColor: 'rgba(251,191,36,0.08)',
                    borderDash: [6, 6],
                    tension: 0.2
                });
            } else {
                cloudinessChart.data.datasets[1].data = smhiSeries.value.cloudiness;
            }
        } else if (cloudinessChart.data.datasets.length > 1) {
            cloudinessChart.data.datasets.pop();
        }
        cloudinessChart.update();
    }

    chartData.value = true;
});
</script>