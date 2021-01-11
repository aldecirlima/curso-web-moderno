import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: h => h(App)
}).$mount("#app")

// Outra forma de fazer o mesmo para renderizar
// new Vue({
//     el: '#app',
//     render(createElement) {
//         return createElement(App)
//     }
// })