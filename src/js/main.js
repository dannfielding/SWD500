
//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';

//import libraries
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import ContactForm from './components/ContactForm.vue';


Vue.use(VeeValidate);
Vue.component('contact-form', ContactForm);

const app = new Vue({
    el: '#app',
});


