import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./i18n.js";

// Add PrimeVue UI Library
import PrimeVue from "primevue/config";

// Add theme for app
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

// Add icons for app
import 'primeicons/primeicons.css';

// Add PrimeFlex for app
import 'primeflex/primeflex.css';

// Add UI Components for application
import Button       from "primevue/button";
import Card         from "primevue/card";
import SelectButton from "primevue/selectbutton";
import Sidebar      from "primevue/sidebar";
import Avatar       from "primevue/avatar";
import Menu         from "primevue/menu";
import Menubar      from "primevue/menubar";
import Toolbar      from "primevue/toolbar";


const app = createApp(App);

// Add configuration for PrimeVue Plugin and components
app.use(PrimeVue, { ripple: true })
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar);

// Add i18n configuration
app.use(i18n);

// Mount the app
app.mount('#app');
