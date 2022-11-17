import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFileLines, faTableColumns, faBullhorn, faUserGear, faUserPlus, faCode, faRobot, faFileInvoice, faWrench, faUserSecret, faSmileBeam, faClockRotateLeft, faFeather, faFileCode, faGear, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faJs, faGolang, faCss3, faHtml5, faYarn, faFedora, faMonero, faDiscord, faGithub, faTelegram, faKeybase } from '@fortawesome/free-brands-svg-icons'

library.add({faFileLines, faTableColumns, faBullhorn, faUserGear, faMonero,  faDiscord, faGithub, faTelegram, faKeybase, faEnvelope,faUserPlus, faCode, faRobot, faFileInvoice, faWrench, faUserSecret, faSmileBeam, faClockRotateLeft, faFeather, faJs, faGolang, faCss3, faHtml5, faGear, faFileCode, faYarn, faFedora})

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
