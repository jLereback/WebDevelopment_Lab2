import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar1 } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faXmark);
library.add(faStar1);
library.add(faStar);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
