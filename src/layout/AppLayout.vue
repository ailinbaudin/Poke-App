<script setup>
import { computed, watch, ref, onBeforeUnmount } from 'vue';
import { usePrimeVue } from 'primevue/config';
import AppTopbar from './AppTopbar.vue';
import AppSidebar from './AppSidebar.vue';
import AppConfig from './AppConfig.vue';
import AppBreadCrumb from './AppBreadcrumb.vue';
import { useLayout } from '@/layout/composables/layout';
import Toast from 'primevue/toast';

const $primevue = usePrimeVue();
const { layoutConfig, layoutState, isSidebarActive } = useLayout();
const outsideClickListener = ref(null);
const sidebarRef = ref(null);
const topbarRef = ref(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

onBeforeUnmount(() => unbindOutsideClickListener());

const containerClass = computed(() => ({
    'layout-light': layoutConfig.colorScheme.value === 'light',
    'layout-dim': layoutConfig.colorScheme.value === 'dim',
    'layout-dark': layoutConfig.colorScheme.value === 'dark',
    'layout-colorscheme-menu': layoutConfig.menuTheme.value === 'colorScheme',
    'layout-primarycolor-menu': layoutConfig.menuTheme.value === 'primaryColor',
    'layout-transparent-menu': layoutConfig.menuTheme.value === 'transparent',
    'layout-overlay': layoutConfig.menuMode.value === 'overlay',
    'layout-static': layoutConfig.menuMode.value === 'static',
    'layout-slim': layoutConfig.menuMode.value === 'slim',
    'layout-slim-plus': layoutConfig.menuMode.value === 'slim-plus',
    'layout-horizontal': layoutConfig.menuMode.value === 'horizontal',
    'layout-reveal': layoutConfig.menuMode.value === 'reveal',
    'layout-drawer': layoutConfig.menuMode.value === 'drawer',
    'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
    'layout-overlay-active': layoutState.overlayMenuActive.value,
    'layout-mobile-active': layoutState.staticMenuMobileActive.value,
    'p-input-filled': $primevue.config.inputStyle === 'filled',
    'p-ripple-disabled': $primevue.config.ripple === false,
    'layout-sidebar-active': layoutState.sidebarActive.value,
    'layout-sidebar-anchored': layoutState.anchored.value
}));

const bindOutsideClickListener = () => {
    let { value } = outsideClickListener;
    if (!value) {
        value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive.value = false;
                layoutState.overlaySubmenuActive.value = false;
                layoutState.staticMenuMobileActive.value = false;
                layoutState.menuHoverActive.value = false;
            }
        };
        document.addEventListener('click', value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    const sidebarEl = sidebarRef?.value.$el;
    const topbarEl = topbarRef?.value.$el.querySelector('.topbar-menubutton');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div :class="['layout-container', { ...containerClass }]">
        <AppSidebar ref="sidebarRef" />

        <div class="layout-content-wrapper">
            <AppTopbar ref="topbarRef" />
            <AppBreadCrumb class="content-breadcrumb" />
            <div class="layout-content">
                <router-view />
            </div>
        </div>
        <AppConfig />
        <Toast />
        <div class="layout-mask" />
    </div>
</template>
