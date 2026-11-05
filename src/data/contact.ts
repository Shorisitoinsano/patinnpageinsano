import type { Bi } from './types';

export const channels: Array<{ href: string; icon: string; label: Bi; value: string }> = [
  {
    "href": "mailto:hola@patinn.example",
    "icon": "star4",
    "label": {
      "es": "Correo",
      "en": "Email"
    },
    "value": "hola@patinn.example"
  },
  {
    "href": "#",
    "icon": "star4",
    "label": {
      "es": "Instagram",
      "en": "Instagram"
    },
    "value": "@patinn"
  },
  {
    "href": "#",
    "icon": "star4",
    "label": {
      "es": "Behance",
      "en": "Behance"
    },
    "value": "/patinn"
  }
];

export const faq: Array<{ q: Bi; a: Bi }> = [
  {
    "q": {
      "es": "¿Haces encargos?",
      "en": "Do you take commissions?"
    },
    "a": {
      "es": "A veces. Escríbeme con una idea y una fecha; si me late, te respondo en unos días.",
      "en": "Sometimes. Write with an idea and a date; if it clicks, I’ll answer within a few days."
    }
  },
  {
    "q": {
      "es": "¿Qué tipo de ilustración haces?",
      "en": "What kind of illustration do you do?"
    },
    "a": {
      "es": "Tinta, blanco y negro, tramas de puntos y siluetas. Poco color y casi siempre uno solo.",
      "en": "Ink, black and white, halftone and silhouettes. Little colour, usually just one."
    }
  },
  {
    "q": {
      "es": "¿Haces páginas web?",
      "en": "Do you build websites?"
    },
    "a": {
      "es": "Sí y no. Por ahora, preferentemente estáticas, y no las vendo: solo las hago para mí.",
      "en": "Yes and no. For now, mostly static ones, and I don’t sell them: I only make them for myself."
    }
  },
  {
    "q": {
      "es": "¿En qué idiomas respondes?",
      "en": "Which languages do you reply in?"
    },
    "a": {
      "es": "En español y algo de inglés. Si me hablas en japonés, exploto como Toby Fox.",
      "en": "Spanish and some English. If you speak to me in Japanese, I’ll explode like Toby Fox."
    }
  },
  {
    "q": {
      "es": "¿Cuánto tardas en responder?",
      "en": "How long until you reply?"
    },
    "a": {
      "es": "Entre dos y cuatro días. Soy algo lento, pero siempre respondo.",
      "en": "Between two and four days. I’m a bit slow, but I always reply."
    }
  }
];

export const topics: Array<{ value: string; label: Bi }> = [
  { value: 'a', label: { es: 'Encargo', en: 'Commission' } },
  { value: 'b', label: { es: 'Colaboración', en: 'Collaboration' } },
  { value: 'c', label: { es: 'Solo saludar', en: 'Just saying hi' } }
];
