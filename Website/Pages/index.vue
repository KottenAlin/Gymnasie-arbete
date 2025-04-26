<template>
    <div class="weather-drone-app">

        <section
            class="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-20 text-center dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700 dark:text-white">
            <div class="max-w-7xl mx-auto px-5">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Weather Drones</h1>
                <p class="text-xl mb-8">Cost effective weather monitoring using drone technology</p>
                <NuxtLink to="/dashboard"
                    class="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition ">View
                    Live Data</NuxtLink>
            </div>
        </section>

        <section class="py-16">
            <div class="max-w-7xl mx-auto px-5">
                <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Real-time Weather
                    Insights</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex flex-col items-center">
                        <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Temperature</span>
                        <span class="text-4xl font-bold text-blue-600 dark:text-blue-400">{{ temperatureData[0]
                        }}°C</span>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex flex-col items-center">
                        <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Humidity</span>
                        <span class="text-4xl font-bold text-green-500 dark:text-green-400">{{ humidityData[0]
                        }}%</span>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex flex-col items-center">
                        <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Wind Speed</span>
                        <span class="text-4xl font-bold text-purple-500 dark:text-purple-400">{{ windSpeedData[0] }}
                            m/s</span>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex flex-col items-center">
                        <span class="text-gray-500 dark:text-gray-400 text-xs mb-1">Cloudiness</span>
                        <span class="text-4xl font-bold text-gray-400 dark:text-gray-300">{{ Math.round(100 *
                            (humidityData[0] / 100))
                        }}%</span>
                    </div>
                </div>
                <!-- Drone Status Section -->
                <div class="mt-10">
                    <h2 class="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Drone Status</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="drone in droneFleetInfo" :key="drone.id"
                            class="bg-white dark:bg-gray-800 p-5 rounded-lg shadow flex flex-col items-center">
                            <span class="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-1">{{ drone.id
                                }}</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 mb-1">Status: <span
                                    :class="{ 'text-green-500 dark:text-green-400': drone.status === 'Active', 'text-red-500 dark:text-red-400': drone.status !== 'Active' }">{{
                                        drone.status }}</span></span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 mb-1">Location: <span
                                    class="text-gray-700 dark:text-gray-300">{{
                                        drone.location }}</span></span>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Battery: <span
                                    class="text-green-600 dark:text-green-500 font-bold">{{
                                        drone.battery }}</span></span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="py-16 ">
            <div class="max-w-7xl mx-auto px-5">
                <h2 class="text-3xl font-bold text-center mb-4">About Us</h2>
                <p class="text-center mb-8">Learn more about our team and mission</p>
                <div class="bg-gray-100 p-6 rounded-lg dark:bg-gray-700">
                    <p class="text-center mb-8">We are a team of innovators passionate about harnessing the power of
                        drone technology to advance weather monitoring and prediction.</p>
                    <NuxtLink to="/about" class="text-blue-500 hover:underline">About</NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
//import { collection, addDoc, getDoc, doc } from 'firebase/firestore'
import { onMounted, ref, computed } from 'vue'

import 'leaflet/dist/leaflet.css'

/*

// Get references to Firebase services from the plugin
const { $db, $addDroneData } = useNuxtApp()

// check if firestore is connected
console.log('Firestore instance:', $db)

// Ensure Firestore is connected before proceeding
onMounted(async () => {
    if (!$db) {
        console.error('Firestore connection failed');
    } else {
        console.log('Firestore connected successfully');

        // Use the function from the plugin
        try {
            // Option 1: Use the function from the plugin
            if ($addDroneData) {
                const docId = await $addDroneData();
                console.log('Drone data added with ID:', docId);
            }

            // Option 2: Add data manually if needed
            await addCustomDroneData();

            // Try to get a document from the 'items' collection
            await getDocument();
        } catch (error) {
            console.error('Error in data operations:', error);
        }
    }
});

// Custom function to add drone data directly from the component
const addCustomDroneData = async () => {
    // Define the drone data object
    const droneData = {
        "timestamp": new Date(1704960000 * 1000), // Convert Unix seconds to JS Date object
        "drone_id": "weatherdrone-001",
        "position": {
            "latitude": 34.0522,
            "longitude": -118.2437
        },
        "temperature": 25.5,
        "humidity": 60.2,
        "light": {
            "visible": 500,
            "ir": 120
        },
        "power_consumption": 1.2,
        "battery_status": 85,
        "acceleration": {
            "x": 0.1,
            "y": -0.2,
            "z": 9.8
        },
        "calculated": {
            "cloudiness": 0.7,
            "wind_speed": 15.3,
            "wind_direction": 225
        }
    };

    try {
        // Use the client-side SDK ($db) provided by the Nuxt plugin
        const collectionRef = collection($db, 'drone_readings');
        const docRef = await addDoc(collectionRef, droneData);
        console.log('Drone data document written with ID:', docRef.id);
    } catch (error) {
        console.error('Error adding drone data document:', error);
    }
}

// Get a document from the collection 'items'
const getDocument = async () => {
    try {
        // You need to reference a specific document ID
        // First create a reference to the collection
        const itemsCollection = collection($db, 'items');

        // Then you would need a specific document ID
        // For example: const docRef = doc(itemsCollection, 'documentId');
        // Or query for documents in the collection

        console.log('Items collection reference created');
    } catch (error) {
        console.error('Error accessing items collection:', error);
    }
}
*/
// Sample weather data points
const weatherPoints = ref([
    { lat: 59.3293, lng: 18.0686, temperature: 22, humidity: 55, windSpeed: 5 },
    { lat: 59.3328, lng: 18.0649, temperature: 21, humidity: 60, windSpeed: 4 },
    { lat: 59.3275, lng: 18.0707, temperature: 23, humidity: 50, windSpeed: 6 }
]);

// Fake data for the main page sections
const temperatureData = ref([20, 21, 22, 23, 22, 21, 20, 19, 18, 19, 20, 21]);
const humidityData = ref([70, 68, 65, 66, 67, 64, 62, 60, 61, 63, 65, 68]);
const windSpeedData = ref([10, 12, 15, 14, 11, 9, 8, 10, 12, 13, 11, 10]);
const pressureData = ref([1010, 1012, 1015, 1014, 1011, 1009, 1010, 1013, 1015, 1014, 1012, 1010]);
const lightIntensityData = ref([500, 600, 700, 800, 750, 650, 550, 450, 400, 480, 520, 550]);
const batteryStatusData = ref([95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40]);
const powerConsumptionData = ref([1.0, 1.1, 1.2, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.9, 1.0, 1.1]);

const droneFleetInfo = ref([
    { id: 'drone-001', status: 'Inactive', location: 'Area A', battery: '85%' },
    { id: 'drone-002', status: 'Inactive', location: 'Hangar', battery: '60%' },
    { id: 'drone-003', status: 'Inactive', location: 'Area B', battery: '92%' },
]);

// Computed properties for simple visualization (replace with actual charting library later)
const maxTemp = computed(() => Math.max(...temperatureData.value));
const maxHumidity = computed(() => Math.max(...humidityData.value));
const maxWindSpeed = computed(() => Math.max(...windSpeedData.value));
const maxPressure = computed(() => Math.max(...pressureData.value));
const maxLightIntensity = computed(() => Math.max(...lightIntensityData.value));
const maxBatteryStatus = computed(() => Math.max(...batteryStatusData.value));
const maxPowerConsumption = computed(() => Math.max(...powerConsumptionData.value));

</script>
