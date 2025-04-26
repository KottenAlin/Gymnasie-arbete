<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    Weather Drone Project
                </h1>
                <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Revolutionizing weather data collection with autonomous drone technology
                </p>
            </div>
        </div>

        <!-- About the Project -->
        <div class="max-w-7xl mx-auto mb-16">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                    <div class="lg:self-center">
                        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            <span class="block">About Our Project</span>
                        </h2>
                        <p class="mt-4 text-lg text-gray-500">
                            Our weather drone project aims to collect accurate, real-time meteorological data using 
                            custom-built autonomous drones. By deploying these drones in various environments, 
                            we can gather crucial information about temperature, humidity, wind speed, and atmospheric pressure
                            with unprecedented precision and flexibility.
                        </p>
                        <p class="mt-4 text-lg text-gray-500">
                            The project began in 2023 as a collaborative effort between engineers, 
                            meteorologists, and environmental scientists committed to improving weather 
                            forecasting and climate research.
                        </p>
                    </div>
                </div>
                <div class="relative lg:h-full">
                    <img class="absolute inset-0 w-full h-full object-cover" 
                             src="assets/images/template.png" 
                             alt="Weather drone in flight" 
                             onerror="this.src='https://via.placeholder.com/800x600?text=Drone+Image';this.onerror='';">
                </div>
            </div>
        </div>

        <!-- Key Features -->
        <div class="max-w-7xl mx-auto mb-16">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
                Key Capabilities
            </h2>
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div class="ml-5">
                                <h3 class="text-lg font-medium text-gray-900">Real-time Data</h3>
                                <p class="mt-2 text-sm text-gray-500">
                                    Collect and transmit meteorological data instantly for immediate analysis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <div class="ml-5">
                                <h3 class="text-lg font-medium text-gray-900">Advanced Mapping</h3>
                                <p class="mt-2 text-sm text-gray-500">
                                    Create detailed 3D weather maps with precise geographic data points.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div class="ml-5">
                                <h3 class="text-lg font-medium text-gray-900">Autonomous Operation</h3>
                                <p class="mt-2 text-sm text-gray-500">
                                    Fully programmed flight paths with obstacle avoidance and adaptive routing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Team Section -->
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
                Our Team
            </h2>
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div class="text-center">
                    <div class="mx-auto h-40 w-40 rounded-full overflow-hidden">
                        <img src="/assets/images/template.png" alt="Team member" class="h-full w-full object-cover"
                             onerror="this.src='https://via.placeholder.com/160x160?text=Team+Member';this.onerror='';">
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-medium text-gray-900">Alex Johnson</h3>
                        <p class="text-sm text-gray-500">Lead Engineer</p>
                    </div>
                </div>
                
                <div class="text-center">
                    <div class="mx-auto h-40 w-40 rounded-full overflow-hidden">
                        <img src="/assets/images/template.png" alt="Team member" class="h-full w-full object-cover"
                             onerror="this.src='https://via.placeholder.com/160x160?text=Team+Member';this.onerror='';">
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-medium text-gray-900">Maria Rodriguez</h3>
                        <p class="text-sm text-gray-500">Meteorologist</p>
                    </div>
                </div>
                
                <div class="text-center">
                    <div class="mx-auto h-40 w-40 rounded-full overflow-hidden">
                        <img src="/assets/images/template.png" alt="Team member" class="h-full w-full object-cover"
                             onerror="this.src='https://via.placeholder.com/160x160?text=Team+Member';this.onerror='';">
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-medium text-gray-900">David Lee</h3>
                        <p class="text-sm text-gray-500">Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>