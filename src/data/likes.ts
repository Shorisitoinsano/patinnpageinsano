import type { Bi } from './types';

/** tone = clases de color de Tailwind para la tarjeta o diapositiva. */
export const likes: Array<{ tone: string; kanji: string; title: Bi; text: Bi }> = [
  {
    "tone": "bg-cobalt text-onblue",
    "kanji": "夜",
    "title": {
      "es": "Música",
      "en": "Music"
    },
    "text": {
      "es": "Bastante rock alternativo y también algo de indie.",
      "en": "A lot of alternative rock, and some indie too."
    }
  },
  {
    "tone": "bg-paper2",
    "kanji": "墨",
    "title": {
      "es": "Ilustración",
      "en": "Illustration"
    },
    "text": {
      "es": "Tinta negra, tramas de puntos, pósters japoneses y mucho espacio vacío.",
      "en": "Black ink, halftone dots, Japanese posters and lots of empty space."
    }
  },
  {
    "tone": "bg-paper2",
    "kanji": "本",
    "title": {
      "es": "Lectura",
      "en": "Reading"
    },
    "text": {
      "es": "Mangas, casi siempre, y cualquier cosa de AO3 (revívanlo, por favor).",
      "en": "Manga, mostly, and anything from AO3 (please bring it back)."
    }
  },
  {
    "tone": "bg-deep text-onblue",
    "kanji": "映",
    "title": {
      "es": "Cine y series",
      "en": "Film & series"
    },
    "text": {
      "es": "Ciencia ficción lenta, anime de culto y terror que da más tristeza que miedo.",
      "en": "Slow sci-fi, cult anime and horror that’s sadder than scary."
    }
  },
  {
    "tone": "bg-paper2",
    "kanji": "食",
    "title": {
      "es": "Comida",
      "en": "Food"
    },
    "text": {
      "es": "Si me das cualquier cosa con papas, soy feliz.",
      "en": "Give me anything with potatoes and I’m happy."
    }
  },
  {
    "tone": "bg-cobalt text-onblue",
    "kanji": "癖",
    "title": {
      "es": "Manías",
      "en": "Quirks"
    },
    "text": {
      "es": "Usar siempre negro para todo cuando dibujo. Ahí dibujo cualquier cuervo, lol.",
      "en": "Always using black for everything when I draw. That’s where any raven shows up, lol."
    }
  }
];

export const slides: Array<{ tone: string; word: Bi }> = [
  {
    "tone": "bg-cobalt text-onblue",
    "word": {
      "es": "TINTA",
      "en": "INK"
    }
  },
  {
    "tone": "bg-deep text-onblue",
    "word": {
      "es": "NOCHE",
      "en": "NIGHT"
    }
  },
  {
    "tone": "bg-paper2",
    "word": {
      "es": "CUERVO",
      "en": "RAVEN"
    }
  },
  {
    "tone": "bg-cobalt text-onblue",
    "word": {
      "es": "PUNTOS",
      "en": "DOTS"
    }
  },
  {
    "tone": "bg-paper2",
    "word": {
      "es": "SEÑAL",
      "en": "SIGNAL"
    }
  }
];
