<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-950">
        <header class="bg-blue-900 dark:bg-gray-900 text-white dark:text-gray-200 py-4">
            <div class="max-w-7xl mx-auto px-5">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-2xl font-bold">Weather Drones</div>
                    <nav class="flex gap-6 mt-4 md:mt-0">
                        <NuxtLink to="/" class="text-white hover:opacity-80 transition">Home</NuxtLink>
                        <NuxtLink to="/dashboard" class="text-white hover:opacity-80 transition">Dashboard</NuxtLink>
                        <NuxtLink to="/about" class="text-white hover:opacity-80 transition">About</NuxtLink>
                    </nav>
                    <button @click="toggleDarkMode" class="ml-6 flex items-center px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                        <svg v-if="isDark" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path></svg>
                        <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71m16.97-7.78h-1M4 12H3m2.34-6.36l-.71-.71M19.95 4.93l-.71-.71"></path></svg>
                        <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
                    </button>
                </div>
            </div>
        </header>
    <main class="min-h-[60vh] bg-gray-100 dark:bg-gray-950">
        <slot />
    </main>
    <footer class="bg-blue-900 dark:bg-gray-900 text-white dark:text-gray-200 text-center py-8 mt-8">
        <div class="max-w-7xl mx-auto px-5">
            <p> {{ new Date().getFullYear() }} Weather Drone Project</p>
            <p>© {{ new Date().getFullYear() }} Weather Drone Project</p>
        </div>
    </footer>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

function setDarkClass(val) {
  if (val) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleDarkMode() {
  isDark.value = !isDark.value;
  setDarkClass(isDark.value);
  localStorage.setItem('darkMode', isDark.value ? '1' : '0');
}

onMounted(() => {
  const stored = localStorage.getItem('darkMode');
  if (stored === '1') isDark.value = true;
  else if (stored === '0') isDark.value = false;
  else isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkClass(isDark.value);
});
</script>