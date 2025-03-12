<template>
    <div>
        <header class="bg-blue-900 text-white py-4">
            <div class="max-w-7xl mx-auto px-5">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-2xl font-bold">Weather Drone</div>
                    <nav class="flex gap-6 mt-4 md:mt-0">
                        <NuxtLink to="/" class="text-white hover:opacity-80 transition">Home</NuxtLink>
                        <NuxtLink to="/dashboard" class="text-white hover:opacity-80 transition">Dashboard</NuxtLink>
                        <NuxtLink to="/about" class="text-white hover:opacity-80 transition">About</NuxtLink>
                    </nav>
                </div>
            </div>
        </header>
    <div>
        <slot />
    </div>
    <footer class="bg-blue-900 text-white text-center py-8 mt-8">
        <div class="max-w-7xl mx-auto px-5">
            <p>© {{ new Date().getFullYear() }} Weather Drone Project</p>
        </div>
    </footer>
</div>
</template>