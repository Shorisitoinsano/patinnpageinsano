import type { Bi } from './types';

export interface DiaryEntry { id: string; alt: boolean; date: string; tag: Bi; title: Bi; excerpt: Bi; body: Bi[] }

export const diary: DiaryEntry[] = [
  {
    "id": "e0",
    "alt": false,
    "date": "12 SEP 2026",
    "tag": {
      "es": "Notas",
      "en": "Notes"
    },
    "title": {
      "es": "Cuaderno sin fecha",
      "en": "Undated notebook"
    },
    "excerpt": {
      "es": "Una libreta que empecé sin saber para qué y que ya va por la mitad.",
      "en": "A notebook I started without knowing why, now halfway full."
    },
    "body": [
      {
        "es": "Compré una libreta de hojas lisas y me prometí no tirar ninguna página. Funcionó una semana. Después empecé a arrancar las que no me gustaban y a guardarlas en un sobre, que es peor.",
        "en": "I bought a blank notebook and promised not to tear out a single page. It worked for a week. Then I started ripping out the ones I disliked and keeping them in an envelope, which is worse."
      },
      {
        "es": "Lo que sí se quedó es la costumbre de dibujar algo pequeño antes de abrir el computador. Un ojo, una mano, una estrella. Es mi manera de decirle al día que ya empezó.",
        "en": "What did stay is the habit of drawing something tiny before opening the computer. An eye, a hand, a star. It’s how I tell the day it has begun."
      }
    ]
  },
  {
    "id": "e1",
    "alt": true,
    "date": "28 AGO 2026",
    "tag": {
      "es": "Música",
      "en": "Music"
    },
    "title": {
      "es": "Veinte veces la misma canción",
      "en": "Twenty times, same song"
    },
    "excerpt": {
      "es": "Por qué repito discos hasta aprenderme cada respiración.",
      "en": "Why I replay albums until I know every breath."
    },
    "body": [
      {
        "es": "Hay canciones que uso como lámpara: las pongo y la habitación cambia de color. Esta semana fue una sola, con un sintetizador que parece una luz parpadeando al fondo de un pasillo.",
        "en": "Some songs I use as lamps: I play them and the room changes colour. This week it was a single one, with a synth like a light flickering at the end of a hallway."
      },
      {
        "es": "No sé si escucho o si me escondo. Probablemente las dos.",
        "en": "I don’t know if I’m listening or hiding. Probably both."
      }
    ]
  },
  {
    "id": "e2",
    "alt": false,
    "date": "14 AGO 2026",
    "tag": {
      "es": "Dibujo",
      "en": "Drawing"
    },
    "title": {
      "es": "Cuervos en los márgenes",
      "en": "Ravens in the margins"
    },
    "excerpt": {
      "es": "Cómo un pájaro negro terminó siendo mi firma.",
      "en": "How a black bird ended up being my signature."
    },
    "body": [
      {
        "es": "Empezó como un garabato en la esquina de un apunte. Después apareció en otro, y en otro. Ahora lo dibujo sin pensar, y cada uno sale distinto, con más o menos plumas.",
        "en": "It began as a doodle in the corner of lecture notes. Then it showed up in another, and another. Now I draw it without thinking and each one comes out different, with more or fewer feathers."
      },
      {
        "es": "Me gusta que sea una silueta: no necesita cara para parecer que me mira.",
        "en": "I like that it’s a silhouette: it needs no face to look like it’s watching me."
      }
    ]
  },
  {
    "id": "e3",
    "alt": false,
    "date": "30 JUL 2026",
    "tag": {
      "es": "Web",
      "en": "Web"
    },
    "title": {
      "es": "Páginas como carteles",
      "en": "Websites as posters"
    },
    "excerpt": {
      "es": "Lo que aprendí de los pósters al diseñar para pantalla.",
      "en": "What posters taught me about designing for screens."
    },
    "body": [
      {
        "es": "Un cartel decide en dos segundos si te detiene. Una web debería hacer lo mismo: una palabra enorme, una etiqueta pequeña y mucho aire.",
        "en": "A poster decides in two seconds whether to stop you. A website should do the same: one enormous word, one small label and lots of air."
      },
      {
        "es": "Por eso uso una sola tipografía grande y una mono diminuta. Lo demás sobra.",
        "en": "That’s why I use one big typeface and one tiny mono. The rest is noise."
      }
    ]
  },
  {
    "id": "e4",
    "alt": true,
    "date": "09 JUL 2026",
    "tag": {
      "es": "Comida",
      "en": "Food"
    },
    "title": {
      "es": "Ramen de madrugada",
      "en": "Late-night ramen"
    },
    "excerpt": {
      "es": "Un ritual de las dos de la mañana que no recomiendo.",
      "en": "A 2 a.m. ritual I don’t recommend."
    },
    "body": [
      {
        "es": "Hay un local que abre tarde y tiene siempre la misma luz verde. Pido lo mismo, me siento en la barra y dibujo en la servilleta.",
        "en": "There’s a shop that opens late and always has the same green light. I order the same thing, sit at the counter and draw on a napkin."
      },
      {
        "es": "No recomiendo el horario. Sí recomiendo la servilleta.",
        "en": "I don’t recommend the hours. I do recommend the napkin."
      }
    ]
  },
  {
    "id": "e5",
    "alt": false,
    "date": "21 JUN 2026",
    "tag": {
      "es": "Notas",
      "en": "Notes"
    },
    "title": {
      "es": "Lo que no dije",
      "en": "What I didn’t say"
    },
    "excerpt": {
      "es": "Una frase que me acompaña, y el pájaro que la carga.",
      "en": "A sentence that follows me, and the bird that carries it."
    },
    "body": [
      {
        "es": "“No importa dónde estés, todo está siempre conectado.” La escribí en una pared de mi cabeza y no se borra.",
        "en": "“No matter where you are, everything is always connected.” I wrote it on a wall in my head and it won’t wipe off."
      },
      {
        "es": "Por eso el cuervo de la portada la lleva dentro: cada letra, una pluma.",
        "en": "That’s why the raven on the cover carries it inside: every letter, a feather."
      }
    ]
  }
];
