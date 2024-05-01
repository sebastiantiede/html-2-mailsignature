import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { mailSignatureConverter } from 'vueMailSignatureConverter'
import { headerLineEncode } from 'emailjs-mime-codec'

createApp(App)
    .use(mailSignatureConverter)
    .mount('#app')
