<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <h1 class="text-red-500 text-7xl font-bold mb-4">{{ error.statusCode }}</h1>
            <p class="text-gray-700 text-2xl mb-4">Something went wrong</p>
            <p class="text-gray-600 mb-6">{{ error.message }}</p>

            <div class="flex justify-center">
                <button class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" @click="handelError">
                    Back to home
                </button>
            </div>
        </div>
        <p>hello</p>
    </div>

</template>

<script setup>
defineProps(['error'])

function handelError() {
  clearError({redirect: '/'})
}
</script>
