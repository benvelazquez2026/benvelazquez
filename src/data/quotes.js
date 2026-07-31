/**
 * Testimonials, exactly as supplied. These are attributed to named, real
 * people and are emitted as schema.org `Review` objects — never rolled into
 * a fabricated `aggregateRating`.
 */

export const quotes = [
  {
    id: 'fleiszer',
    name: 'Tim Fleiszer',
    featured: true,
    role: {
      en: 'Executive Director, Concussion Legacy Foundation Canada · 4× Grey Cup Champion',
      es: 'Director Ejecutivo, Concussion Legacy Foundation Canada · 4× campeón de la Grey Cup',
    },
    text: {
      en: '“Ben Velazquez is one of the leading corrective exercise professionals in the world. It has been a pleasure to work with him for more than 15 years. I have witnessed his unique approach benefit a ‘who’s who’ of professional athletes across all sports, military personnel through our Operation Brain Health program, business leaders, young, developing athletes, and anyone recovering from injury or seeking to improve their performance. I recommend Ben in the strongest of terms.”',
      es: '“Ben Velázquez es uno de los mejores profesionales de ejercicio correctivo del mundo. Ha sido un placer trabajar con él durante más de 15 años. He visto su enfoque único beneficiar a un ‘quién es quién’ de atletas profesionales de todos los deportes, a personal militar a través de nuestro programa Operation Brain Health, a líderes empresariales, a jóvenes atletas en desarrollo y a cualquiera que se recupere de una lesión o busque mejorar su rendimiento. Recomiendo a Ben en los términos más firmes.”',
    },
  },
  {
    id: 'luzardo',
    name: 'Jesús Luzardo',
    featured: true,
    role: { en: 'Starting Pitcher · Philadelphia', es: 'Pitcher abridor · Philadelphia' },
    text: {
      en: '“Thanks to working with Ben, I’ve felt at my best physically over these last two years. Feeling what needs to get fixed and how to fix it quickly is something I’ve come to learn in that time. Getting the body into the proper form to perform at the level I want is tough for many athletes — and working with Ben has made it easier for me to do that.”',
      es: '“Gracias a trabajar con Ben, en estos últimos dos años me he sentido mejor que nunca físicamente. Aprender a sentir qué hay que corregir —y cómo corregirlo rápido— es algo que gané en ese tiempo. Poner el cuerpo en la forma adecuada para rendir al nivel que quiero es difícil para muchos atletas, y trabajar con Ben me lo ha hecho más fácil.”',
    },
  },
  {
    id: 'mccaffrey',
    name: 'Christian McCaffrey',
    role: { en: 'Running Back · NFL', es: 'Running Back · NFL' },
    text: {
      en: '“The details in his programming take you from good to great. One of the best tools in my toolbox.”',
      es: '“El detalle de su programación te lleva de bueno a excelente. Una de las mejores herramientas que tengo.”',
    },
  },
  {
    id: 'domi',
    name: 'Max Domi',
    role: { en: 'Center · NHL', es: 'Centro · NHL' },
    text: {
      en: '“The best my body has ever felt. The daily ELDOA practice changed everything.”',
      es: '“Mi cuerpo nunca se había sentido mejor. La práctica diaria de ELDOA lo cambió todo.”',
    },
  },
  {
    id: 'carr',
    name: 'Derek Carr',
    role: { en: 'Quarterback · NFL', es: 'Quarterback · NFL' },
    text: {
      en: '“Working with Ben has been a game changer for me.”',
      es: '“Trabajar con Ben ha sido un antes y un después para mí.”',
    },
  },
  {
    id: 'mcdavid',
    name: 'Connor McDavid',
    role: { en: 'Center · NHL', es: 'Centro · NHL' },
    text: {
      en: '“He’s helped me recover from serious injuries — and prevent the next ones.”',
      es: '“Me ha ayudado a recuperarme de lesiones graves — y a prevenir las siguientes.”',
    },
  },
];

/** Names for the proof strip. */
export const proofNames = [
  { name: 'Christian McCaffrey', league: 'NFL' },
  { name: 'Derek Carr', league: 'NFL' },
  { name: 'Connor McDavid', league: 'NHL' },
  { name: 'Max Domi', league: 'NHL' },
  { name: 'Jesús Luzardo', league: 'MLB' },
  { name: 'Mariano Rivera', league: 'Being: Mariano' },
];
