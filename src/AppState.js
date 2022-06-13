import { reactive } from 'vue';
import anji from "./assets/Boss Monster/Anji.gif";
import palamute from "./assets/Boss Monster/palamute.gif";
import rathalos from './assets/Boss Monster/Rathalos.gif';
import switchAxe from "./assets/Boss Monster/SwitchAxe.webp";
import teostra from './assets/Boss Monster/Teostra.gif';

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  gold: 0,
  bosses : [
    {
      name: "Erwin",
      level: 1,
      health: 100,
      maxHealth: 100,
      damage: 5,
      img: anji
    },
    {
      name: 'Annie',
      level: 1,
      health: 150,
      maxHealth: 150,
      damage: 10,
      img: rathalos
    },
    {
      name: 'Levi',
      level: 1,
      health: 200,
      maxHealth: 200,
      damage: 15,
      img: teostra
    }
  ],
   heros: [
        {
          name: "Eren",
          health: 100,
          damage: 5,
          img: switchAxe,
        },
        {
          name: "Eli",
          health: 100,
          damage: 5,
          img: palamute,
        },
      ]
})
