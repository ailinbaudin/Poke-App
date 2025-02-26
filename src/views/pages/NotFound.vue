<script setup></script>

<template>
   
    <div class="px-5 min-h-screen flex justify-content-center align-items-center">
        <div class="z-1 text-center">
            <div class="text-900 font-bold text-8xl mb-4 text-title">Uh-oh!</div>
            <p class="line-height-3 mt-0 mb-5 text-700 text-xl font-medium text-box">You look lost on your journey!</p>
            <router-link to="welcome-pikachu">
                <Button rounded type="button" class="font-medium cursor-pointer" raised severity="danger">Go back home</Button>
            </router-link>
        </div>
    </div>
</template>
