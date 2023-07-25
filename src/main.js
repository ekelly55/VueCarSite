
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// could this also have just been written as import router from ./router/index.js?
//does this work because we specifically exported router? b/c this says "import this object called router, which is somewhere in this directory"

import './assets/main.css'

const app = createApp(App)
//broken down into steps to apply something new. first define and create the app. 

app.use(router)

//then tell the app to use the router we created in index.js

app.mount('#app')

//now that we've told it to use the router, mount the app, or, go ahead and execute it?
