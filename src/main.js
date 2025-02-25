import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // Importa Pinia
import Button from 'primevue/button';
import '@/assets/styles.scss';

import PrimeVue from 'primevue/config';
import DataView from 'primevue/dataview';
import DataTable from 'primevue/datatable';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import Tooltip from 'primevue/tooltip';
import Aura from '@primeuix/themes/aura';
import Column from 'primevue/column';
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice'; 
import InputText from 'primevue/inputtext';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(router);
app.use(DialogService);
app.use(ConfirmationService);
app.use(ToastService);

app.directive('tooltip', Tooltip);
app.component('DataView', DataView);
app.component('DataTable', DataTable);
app.component('DeferredContent', DeferredContent);
app.component('Dialog', Dialog);
app.component('Button', Button)
app.component('Column', Column)
app.component('InputText', InputText);

app.mount('#app');
