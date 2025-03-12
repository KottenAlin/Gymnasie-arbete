<template>
    <div>
        <p>{{error.statusCode}}</p>
        <p> Something went wrong</p>
        <p>{{error.message}}</p>
        <p>hello</p>
    </div>
</template>

<script setup>
defineProps(['error'])

</script>