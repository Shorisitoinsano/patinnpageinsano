import type { Bi } from './types';

/** "Un día cualquiera" (Sobre mí). */
export const routineNote: Bi = {"es":"(sábados y domingos; ojalá todo el año)","en":"(Saturdays and Sundays; ideally all year)"};

export const routine: Array<{ time: string; text: Bi }> = [
  {
    "time": "07:30",
    "text": {
      "es": "Primeros cafés de vainilla; después organizo mis deberes.",
      "en": "First vanilla coffees; then I sort out my to-dos."
    }
  },
  {
    "time": "11:00",
    "text": {
      "es": "Tomo encargos y hablo con clientes para afinar detalles.",
      "en": "I take commissions and talk with clients to pin down details."
    }
  },
  {
    "time": "16:00",
    "text": {
      "es": "Cierro lo anterior y salgo a tocar pasto con la playlist de siempre.",
      "en": "I wrap that up and go touch grass with the same old playlist."
    }
  },
  {
    "time": "22:00",
    "text": {
      "es": "Dibujo en tradicional para no perder la costumbre.",
      "en": "I draw traditionally so I don’t lose the habit."
    }
  },
  {
    "time": "02:00",
    "text": {
      "es": "No pienso en nada: solo garabateo.",
      "en": "I don’t think about anything: I just doodle."
    }
  }
];
