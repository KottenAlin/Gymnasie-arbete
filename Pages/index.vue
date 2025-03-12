<template>
    <div class="weather-drone-app">

        <section class="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-20 text-center">
            <div class="max-w-7xl mx-auto px-5">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Weather Drone Project</h1>
                <p class="text-xl mb-8">Advanced weather monitoring using drone technology</p>
                <NuxtLink to="/dashboard" class="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">View Live Data</NuxtLink>
            </div>
        </section>

        <section class="py-16">
            <div class="max-w-7xl mx-auto px-5">
                <h2 class="text-3xl font-bold text-center mb-12">Real-time Weather Insights</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold">Temperature Tracking</h3>
                        <div class="h-52 bg-gray-200 rounded flex items-center justify-center mt-4">
                            <p>Temperature graph loading...</p>
                        </div>
                    </div>
                    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold">Humidity Analysis</h3>
                        <div class="h-52 bg-gray-200 rounded flex items-center justify-center mt-4">
                            <p>Humidity graph loading...</p>
                        </div>
                    </div>
                    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold">Wind Patterns</h3>
                        <div class="h-52 bg-gray-200 rounded flex items-center justify-center mt-4">
                            <p>Wind pattern graph loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16">
            <div class="max-w-7xl mx-auto px-5">
                <h2 class="text-3xl font-bold text-center mb-4">Our Drone Fleet</h2>
                <p class="text-center mb-8">Equipped with advanced sensors to collect precise meteorological data</p>
                <div class="bg-gray-100 p-6 rounded-lg">
                    <p>Loading drone information...</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    head() {
        return {
            title: 'Weather Drone Project',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Advanced weather monitoring using drone technology'
                }
            ]
        }
    }
}
</script>
