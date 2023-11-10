<template>
    <router-view v-slot="{ Component }">
        <transition enter-active-class="animate__animated animate__backInUp">
            <component :is="Component" />
        </transition>
    </router-view>
    <router-view name="home-page" v-slot="{ Component }">
        <transition type="animation" leave-active-class="animate__animated animate__fadeOutDown">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
