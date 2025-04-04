<script setup>
import AppBreadcrumb from './AppBreadcrumb.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);

onMounted(() => bindOutsideClickListener());

onBeforeUnmount(() => unbindOutsideClickListener());

const bindOutsideClickListener = () => {
    let { value } = outsideClickListener;
    if (!value) {
        value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', value);
    }
};
const unbindOutsideClickListener = () => {
    const { value } = outsideClickListener;
    if (value) {
        document.removeEventListener('click', value);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-topbar">
        <div class="topbar-start">
            <Button type="button" class="topbar-menubutton p-link p-trigger" @click="onMenuToggle">
                <i class="pi pi-bars" />
            </Button>

            <AppBreadcrumb class="topbar-breadcrumb" />
        </div>

        <div class="topbar-end">
            <ul class="topbar-menu" />
        </div>
    </div>
</template>

<style lang="scss" scoped />
