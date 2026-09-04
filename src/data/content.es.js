/**
 * Spanish page copy — structurally identical to content.en.js.
 *
 * These are real Spanish pages at their own URLs (/es/…), not a JavaScript
 * language toggle. That is what makes them independently indexable and
 * correctly paired via hreflang.
 */

import { site } from './site.js';

const APPLY_CTA = { route: 'apply', label: 'Reserva tu análisis gratuito' };
const PROGRAMS_CTA = { route: 'programs', label: 'Ver los programas', ghost: true };

export const content = {
  /* ====================================================================== */
  home: {
    seo: {
      title: 'Ben Velazquez | Rehabilitación de Alto Rendimiento, NYC',
      description:
        'Rehabilitación de alto rendimiento, ELDOA y preparación física en Nueva York. La confianza de atletas de NFL, NHL y MLB. Ahora con cupos para ejecutivos.',
    },
    hero: {
      kicker: 'NYC · Rehabilitación de alto rendimiento',
      h1: 'El coach al que vuelan <span class="signal">los mejores atletas del mundo.</span>',
      lede: 'Rehabilitación de alto rendimiento galardonada y experto reconocido en soluciones de ejercicio para conmociones cerebrales — ahora con cupos limitados para ejecutivos.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
    stats: [
      { num: '20+', lbl: 'Años trabajando con atletas de élite' },
      { num: 'NFL · NHL · MLB', lbl: 'Atletas profesionales en varias ligas' },
      { num: '1,000+', lbl: 'Profesionales formados en sus seminarios' },
    ],
    proofLabel: 'La confianza de la élite',
    answer: [
      'Ben Velazquez es especialista en rehabilitación de alto rendimiento y preparador físico en Nueva York, con más de 20 años trabajando con atletas de élite, incluidos deportistas de la NFL, la NHL y la MLB. Es coautor colaborador de <em>Fascia: Clinical Applications for Health and Human Performance</em>, Soma-Terapeuta licenciado y Especialista Certificado en Fuerza y Acondicionamiento.',
      'Trabaja con tres grupos: atletas profesionales y en desarrollo, ejecutivos con poco tiempo, y personas en recuperación de conmociones cerebrales. Cada colaboración empieza con un Análisis de Necesidades de Rendimiento gratuito de 20 minutos, en línea a nivel mundial o presencial en Nueva York, en inglés o español.',
    ],
    philosophy: {
      kicker: 'Filosofía',
      heading: '¡El deporte es deporte! ¡El deporte no es salud!',
      body: `<p>Repito ese mantra cada vez que un atleta cruza la puerta.</p>
<p>Mi trabajo como su preparador físico es, ante todo, llevar un atleta sano al terreno de juego.</p>
<p>Primero, corregir lo que no está bien. Poner el motor a punto. El equilibrio estructural es la prioridad.</p>
<p>Solo entonces cambiamos de marcha y nos centramos en las cualidades que necesitan para mejorar su rendimiento.</p>
<p>La línea divisoria entre terapeuta y preparador físico siempre ha sido difusa. ¡Hoy más que nunca!</p>
<p>El desafío con cada atleta consiste en saber combinar la dosis justa de ciencia, experiencia y arte en su preparación personalizada.</p>
<p><span class="hl">Esa… es mi especialidad.</span></p>
<p>¡Mi pasión siempre ha sido empoderar a mis atletas! Brindarles las herramientas clave para mantenerlos en el campo de juego. Mitigar el riesgo de lesiones y convertirlos en mejores atletas.</p>
<p>Con cada repetición, cada serie y cada gota de sudor… juntos nos esforzamos por mejorar.</p>
<p><span class="hl">La sala de pesas es nuestro laboratorio; ¡es allí donde realizamos el trabajo que nos permite prosperar!</span></p>`,
    },
    results: { kicker: '01 — Resultados', heading: 'Quienes pueden entrenar con cualquiera, entrenan con Ben.' },
    inAction: {
      kicker: 'En acción',
      heading: 'Dentro del trabajo.',
      lede: 'Una mirada al entrenamiento en sí — empezando con sesiones junto a Connor McDavid.',
    },
    who: {
      kicker: '02 — Para quién',
      heading: 'Tres tipos de personas. Un mismo estándar.',
      lede: 'Los mismos métodos que mantienen a los atletas profesionales en la cima ahora funcionan para los líderes que mueven el mundo.',
      cards: [
        {
          idx: 'A',
          feature: true,
          tag: 'Cupos abiertos',
          heading: 'Ejecutivos',
          body: 'Energía sostenida en agendas exigentes. Libertad del dolor de espalda y cuello del escritorio y los vuelos. Resiliencia, longevidad y la ventaja de entrenar como los profesionales.',
          route: 'executive',
          link: 'Rendimiento ejecutivo →',
        },
        {
          idx: 'B',
          heading: 'Atletas',
          body: 'Recupérate más rápido, muévete mejor y alarga tu carrera. Rehabilitación de rendimiento y prevención de lesiones según cómo funciona realmente tu cuerpo.',
          route: 'athletes',
          link: 'Rendimiento atlético →',
        },
        {
          idx: 'C',
          heading: 'Recuperación de conmociones',
          body: 'Soluciones de ejercicio para conmociones desde el inicio de la lesión. Un enfoque integral y en equipo, centrado no solo en el regreso, sino en mantenerte ahí.',
          route: 'concussion',
          link: 'El programa de conmociones →',
        },
      ],
    },
    programs: {
      kicker: '03 — Programas',
      heading: 'Empieza donde estás. El acceso crece con el compromiso.',
      lede: 'Un camino claro desde un inicio autoguiado hasta el trabajo privado y directo. Los niveles superiores son intencionalmente limitados.',
      note: 'Cada lugar en el equipo comienza con un Análisis de Necesidades de Rendimiento gratuito.',
    },
    method: {
      kicker: '04 — Método',
      heading: 'La mayoría del entrenamiento desgasta el cuerpo. Esto lo reconstruye.',
      steps: [
        {
          n: '01',
          h: 'Evaluar, no adivinar',
          p: 'Cada programa parte de cómo tu cuerpo realmente se mueve, carga y se recupera — medido, no supuesto.',
        },
        {
          n: '02',
          h: 'ELDOA y trabajo fascial',
          p: 'Posturas de autonormalización que descomprimen la columna y las articulaciones — la práctica diaria por la que juran los atletas de élite.',
        },
        {
          n: '03',
          h: 'Hecho para durar',
          p: 'Recuperación y preparación como un solo sistema, para que el rendimiento aguante el estrés real y los viajes.',
        },
      ],
      vlabel: 'Rendimiento · medido',
      vbig: 'Precisión sobre intensidad.',
    },
    credentials: {
      kicker: 'Credenciales y reconocimiento',
      heading: 'Certificado. Publicado. La confianza de la élite.',
      lede: 'Galardonado y reconocido a nivel nacional — respaldado por la ciencia, no solo por la experiencia.',
    },
    analysis: {
      kicker: 'Gratis · Por aplicación',
      heading: 'Haz tu prueba para un lugar en el Executive Team.',
      lede: 'Cada lugar en el equipo empieza igual: un Análisis de Necesidades de Rendimiento virtual de 20 minutos, gratuito. Encuentro qué está frenando tu cuerpo, y te vas con un plan claro para resolverlo, te unas o no al equipo.',
      rows: [
        { n: '01', b: 'El análisis', t: 'Una evaluación virtual enfocada de 20 minutos sobre cómo te mueves, cargas y te recuperas.' },
        {
          n: '02',
          b: 'Lo que te llevas',
          t: 'Un diagnóstico personalizado: las dos o tres cosas que más te limitan y por dónde empezar. Tuyo para siempre.',
        },
        { n: '03', b: 'La prueba', t: 'Si encajas, se te ofrece uno de los pocos lugares disponibles en el roster.' },
      ],
      spots: `Lugares disponibles este mes: ${site.roster.openSpots}`,
      cta: 'Haz tu prueba',
    },
    insights: {
      kicker: 'Insights semanales',
      heading: 'Notas desde la cancha.',
      lede: 'Ideas breves y prácticas sobre rendimiento, recuperación y longevidad — una nueva casi cada semana.',
      all: 'Todos los insights →',
    },
    faqs: [
      {
        q: '¿Quién es Ben Velazquez?',
        a: '<p>Ben Velazquez es especialista en rehabilitación de alto rendimiento y preparador físico con base en Nueva York, con más de 20 años trabajando con atletas de élite. Ha trabajado con deportistas de la NFL, la NHL y la MLB, es coautor colaborador de <em>Fascia: Clinical Applications for Health and Human Performance</em> y es un experto reconocido en soluciones de ejercicio para conmociones cerebrales.</p>',
      },
      {
        q: '¿Con quién trabaja Ben?',
        a: '<p>Con tres grupos: atletas profesionales y en desarrollo, ejecutivos con agendas exigentes de viajes y escritorio, y personas en recuperación de conmociones cerebrales. El método basado en la evaluación es el mismo para los tres; solo cambia la programación.</p>',
      },
      {
        q: '¿Ben trabaja con clientes a distancia?',
        a: '<p>Sí. La mayor parte del trabajo ejecutivo es virtual y viaja con el cliente. El trabajo presencial en Nueva York está disponible a través del nivel Concierge, que comienza con un Performance Day presencial de jornada completa.</p>',
      },
      {
        q: '¿Cómo empiezo a trabajar con Ben?',
        a: '<p>Toda colaboración empieza con un Análisis de Necesidades de Rendimiento virtual y gratuito de 20 minutos. Te vas con un diagnóstico personalizado de las dos o tres cosas que más te limitan y por dónde empezar, trabajemos juntos o no. <a href="/es/aplicar/">Solicita tu análisis</a>.</p>',
      },
      {
        q: '¿En qué idiomas entrena Ben?',
        a: '<p>Inglés y español. Las sesiones, la programación y los materiales escritos están disponibles en cualquiera de los dos idiomas.</p>',
      },
      {
        q: '¿Cuánto cuesta trabajar con Ben?',
        a: `<p>Hay tres niveles. El Executive Reset es un programa autoguiado de $${site.pricing.resetDisplay} en pago único. Core Executive Performance cuesta $${site.pricing.core.toLocaleString(
          'en-US',
        )}/mes con compromiso trimestral. Concierge Private Performance cuesta $${site.pricing.concierge.toLocaleString(
          'en-US',
        )}/mes por aplicación, limitado a ${site.roster.conciergeSeats} lugares, y comienza con un Performance Day obligatorio desde $${site.pricing.performanceDay.toLocaleString(
          'en-US',
        )}. Todo el detalle está en la <a href="/es/programas/">página de programas</a>.</p>`,
      },
    ],
    related: [
      { route: 'executive', label: 'Para ejecutivos', title: 'Coaching de rendimiento ejecutivo' },
      { route: 'eldoa', label: 'La práctica', title: 'Qué es ELDOA y cómo funciona' },
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'about', label: 'Trayectoria', title: 'Sobre Ben Velazquez' },
    ],
    cta: {
      kicker: 'La prueba',
      heading: 'Cada lugar en el equipo empieza con un análisis gratuito.',
      body: 'Veinte minutos, virtual, sin costo. Te vas con un plan que puedes usar, trabajemos juntos o no.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  executive: {
    seo: {
      title: 'Coaching de Rendimiento Ejecutivo en NYC | Ben Velazquez',
      description:
        'Coaching privado para ejecutivos sin tiempo: ELDOA, descompresión y programación de fuerza que viaja contigo. Nueva York y virtual en todo el mundo.',
    },
    hero: {
      kicker: 'Cupos abiertos · Roster limitado',
      h1: 'Entrena como los profesionales, con una agenda que no se detiene.',
      lede: 'Energía sostenida en semanas brutales. Libertad del dolor de espalda y cuello del escritorio y los asientos de avión. La misma rehabilitación de rendimiento que mantiene a los atletas profesionales en el campo, adaptada a cómo vives realmente.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
    answer: [
      'El coaching de rendimiento ejecutivo con Ben Velazquez es un programa privado y basado en la evaluación para profesionales sénior que viajan constantemente y pasan sentados la mayor parte del día. Combina descompresión vertebral con ELDOA, trabajo fascial y programación de fuerza en una rutina que cabe en una habitación de hotel y en un hueco de quince minutos.',
      'La membresía Core cuesta $2,300 al mes con compromiso trimestral e incluye cuatro sesiones virtuales, programación personalizada actualizada cada mes, acceso asincrónico acotado con respuesta en 24 horas en días hábiles y reevaluación trimestral. Cada lugar empieza con un Análisis de Necesidades de Rendimiento gratuito de 20 minutos.',
    ],
    facts: [
      { k: 'Formato', v: 'Virtual mundial · presencial en NYC' },
      { k: 'Inversión Core', v: '$2,300 / mes' },
      { k: 'Compromiso', v: 'Trimestral' },
      { k: 'Punto de entrada', v: 'Análisis gratuito de 20 min' },
      { k: 'Idiomas', v: 'Inglés · Español' },
      { k: 'Roster Concierge', v: '7 lugares, por aplicación' },
    ],
    problem: {
      kicker: 'El problema',
      heading: 'Una hora de entrenamiento no puede con once horas en una silla.',
      body: `<p>La mayoría de los profesionales sénior no está falta de entrenamiento. Está mal recuperada y sobrecomprimida. Once horas al día encorvado frente a una pantalla, cien vuelos al año y el sueño tratado como la variable que cede primero.</p>
<p>El cuerpo se adapta a la posición que sostiene más tiempo. Por eso el dolor postural rara vez responde a entrenar más fuerte: estás intentando ganarle a once horas con una, y la aritmética no funciona.</p>
<p>La respuesta no es más volumen. Es precisión: identificar las dos o tres restricciones que realmente te limitan y luego interrumpir el patrón con la frecuencia suficiente para que el cuerpo deje de tratar una silla como su forma predeterminada.</p>`,
    },
    outcomes: {
      kicker: 'Qué cambia',
      heading: 'Por qué vienen realmente los ejecutivos.',
      cards: [
        {
          idx: '01',
          heading: 'Dolor de espalda y cuello que deja de repetirse',
          body: 'Trabajo de descompresión dirigido al segmento concreto implicado, en lugar de estiramientos generales que nunca terminan de acertar.',
        },
        {
          idx: '02',
          heading: 'Energía que sobrevive a la semana',
          body: 'La recuperación tratada como trabajo agendado: arquitectura del sueño, mecánica respiratoria y calidad del tejido, no solo sesiones más duras.',
        },
        {
          idx: '03',
          heading: 'Una rutina que viaja',
          body: 'Programación diseñada para una habitación de hotel y una maleta de mano. Si necesita gimnasio no la harás, así que no lo necesita.',
        },
        {
          idx: '04',
          heading: 'Rango que conservas',
          body: 'Movilidad construida con trabajo activo y cargado para que aguante bajo estrés, en lugar de estiramientos pasivos que se pierden el martes.',
        },
        {
          idx: '05',
          heading: 'Un cuerpo que dura toda la carrera',
          body: 'Periodizado a lo largo del año como el de un atleta, para medir la capacidad en décadas en lugar de trimestres.',
        },
        {
          idx: '06',
          heading: 'Acceso a una red verificada',
          body: 'Derivaciones coordinadas a profesionales de nutrición, fisioterapia y medicina con los que realmente trabajo.',
        },
      ],
    },
    how: {
      kicker: 'Cómo funciona',
      heading: 'Cómo es un mes en el equipo.',
      steps: [
        {
          n: '01',
          h: 'Análisis de necesidades completo',
          p: 'Una evaluación profunda de movimiento y postura establece la línea base: cómo te mueves, cargas y te recuperas, medido y no supuesto.',
        },
        {
          n: '02',
          h: 'Cuatro sesiones virtuales',
          p: 'Programación, ELDOA y coaching de rehabilitación, agendados según tu semana y no en un horario fijo.',
        },
        {
          n: '03',
          h: 'Programación que viaja',
          p: 'Un programa personalizado actualizado cada mes, escrito para el equipamiento que realmente vas a tener.',
        },
        {
          n: '04',
          h: 'Acceso asincrónico acotado',
          p: 'Revisiones de técnica por voz y texto entre sesiones, con respuesta en 24 horas en días hábiles. Acotado a propósito: es lo que lo hace sostenible.',
        },
        {
          n: '05',
          h: 'Reevaluación trimestral',
          p: 'Las mismas mediciones, repetidas. El progreso se revisa contra la línea base y el siguiente trimestre se planifica a partir del resultado.',
        },
      ],
    },
    faqs: [
      {
        q: '¿Cuánto tiempo requiere esto a la semana?',
        a: '<p>La mayoría de los miembros Core dedican de tres a cuatro horas semanales en total, sesiones incluidas. El trabajo diario de descompresión y movilidad es de diez a quince minutos y está diseñado para encajar en huecos, no para exigir un bloque dedicado.</p>',
      },
      {
        q: 'Viajo constantemente. ¿Eso lo hace inviable?',
        a: '<p>Al contrario: las agendas con muchos viajes son justo el caso para el que se construyó este programa. La programación está escrita para funcionar en una habitación de hotel sin equipamiento y las sesiones son virtuales, así que el trabajo se mueve contigo.</p>',
      },
      {
        q: '¿Necesito estar ya en forma?',
        a: '<p>No. El punto de partida es lo que muestre tu evaluación. Buena parte de los clientes ejecutivos empiezan con restricciones importantes y con años sin entrenar de forma constante.</p>',
      },
      {
        q: '¿Cuál es la diferencia entre Core y Concierge?',
        a: '<p>Core es virtual, cuatro sesiones al mes, por $2,300/mes. Concierge combina presencial y virtual con 8–12 puntos de contacto al mes, agenda prioritaria y acceso directo dentro de horarios acordados, por $6,500/mes más viajes a costo. Concierge es solo por aplicación, está limitado a 7 lugares y comienza con un Performance Day presencial obligatorio desde $3,000.</p>',
      },
      {
        q: '¿Hay un compromiso mínimo?',
        a: '<p>Core funciona con compromiso trimestral. Es deliberado: el cambio estructural se mide en meses, y un ciclo más corto no daría tiempo suficiente para que el trabajo aparezca en la reevaluación.</p>',
      },
      {
        q: '¿Puedo trabajar con Ben en español?',
        a: '<p>Sí. Sesiones, programación y materiales escritos están disponibles en inglés o español.</p>',
      },
      {
        q: '¿Trabajo directamente con Ben o con alguien de su equipo?',
        a: '<p>Directamente con Ben. Por eso el roster está limitado: el nivel Concierge admite solo siete lugares y la entrada a Core es deliberadamente pequeña.</p>',
      },
    ],
    related: [
      { route: 'programs', label: 'Precios', title: 'Programas y niveles de membresía' },
      { route: 'eldoa', label: 'La práctica', title: 'Qué es ELDOA y cómo funciona' },
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'apply', label: 'Empieza aquí', title: 'Reserva tu análisis gratuito' },
    ],
    cta: {
      kicker: 'Roster limitado',
      heading: 'Haz tu prueba para un lugar en el Executive Team.',
      body: `Un análisis virtual gratuito de 20 minutos. Te vas con un plan que puedes usar, te unas o no. ${site.roster.openSpots} lugares abiertos este mes.`,
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  athletes: {
    seo: {
      title: 'Rehabilitación de Rendimiento para Atletas | Ben Velazquez',
      description:
        'Rehabilitación de rendimiento, prevención de lesiones y retorno al juego para atletas profesionales y en desarrollo. Experiencia en NFL, NHL y MLB.',
    },
    hero: {
      kicker: 'Atletas · Profesionales y en desarrollo',
      h1: 'Recupérate más rápido, muévete mejor, alarga la carrera.',
      lede: 'Rehabilitación de rendimiento y prevención de lesiones basadas en cómo funciona realmente tu cuerpo — el enfoque que ha mantenido en el campo a atletas de la NFL, la NHL y la MLB.',
      ctas: [{ route: 'apply', label: 'Comienza tu evaluación' }, PROGRAMS_CTA],
    },
    answer: [
      'La rehabilitación de rendimiento es el trabajo que se sitúa entre la fisioterapia y la preparación física: primero restaura el equilibrio estructural y la calidad del tejido, y después construye las cualidades que el deporte realmente exige. Es lo que mantiene disponible a un atleta, no solo dado de alta.',
      'Ben Velazquez lleva más de 20 años haciendo esto con atletas de la NFL, la NHL y la MLB. Cada programa comienza con una evaluación de movimiento y postura, usa ELDOA y trabajo fascial para atender lo que la evaluación encuentra, y solo entonces progresa hacia cualidades de rendimiento.',
    ],
    facts: [
      { k: 'Ligas', v: 'NFL · NHL · MLB' },
      { k: 'Experiencia', v: '20+ años con atletas de élite' },
      { k: 'Práctica central', v: 'ELDOA · trabajo fascial · fuerza' },
      { k: 'Formato', v: 'Presencial en NYC · virtual mundial' },
      { k: 'También atiende', v: 'Atletas en desarrollo y universitarios' },
      { k: 'Idiomas', v: 'Inglés · Español' },
    ],
    problem: {
      kicker: 'La brecha',
      heading: 'Estar dado de alta no es lo mismo que estar listo para jugar.',
      body: `<p>La rehabilitación suele terminar cuando termina el dolor. Ese es el momento en que la mayoría de los atletas vuelve a un programa de fuerza, con los patrones de compensación que causaron la lesión totalmente intactos.</p>
<p>La línea entre terapeuta y preparador físico siempre ha sido difusa. Hoy más que nunca. Los atletas que se mantienen disponibles son aquellos cuyo trabajo estructural y trabajo de rendimiento no son dos conversaciones separadas.</p>
<p>Por eso el orden importa. Primero, corregir lo que no está bien. Poner el motor a punto. El equilibrio estructural es la prioridad. Solo entonces cambiamos de marcha hacia las cualidades que elevan el rendimiento.</p>`,
    },
    outcomes: {
      kicker: 'El trabajo',
      heading: 'En qué trabajan los atletas con Ben.',
      cards: [
        {
          idx: '01',
          heading: 'Retorno al juego, bien hecho',
          body: 'Cubrir la brecha entre el alta terapéutica y la carga competitiva completa, para que el patrón que causó la lesión no sobreviva al regreso.',
        },
        {
          idx: '02',
          heading: 'Reducción del riesgo de lesión',
          body: 'Identificar y corregir los desequilibrios estructurales que predicen la próxima lesión, antes de que ocurra.',
        },
        {
          idx: '03',
          heading: 'Durabilidad en temporada',
          body: 'Trabajo de mantenimiento y descompresión que aguanta una temporada completa de viajes y calendarios congestionados.',
        },
        {
          idx: '04',
          heading: 'Reconstrucción de pretemporada',
          body: 'La ventana en la que la estructura se reconstruye de verdad en lugar de solo mantenerse: el bloque de mayor impacto del año.',
        },
        {
          idx: '05',
          heading: 'Extensión de carrera',
          body: 'La atención dedicada al entrenamiento, la recuperación y el descanso suele determinar si el atleta profesional puede alargar su carrera más allá de lo normal, aportar valor y conseguir un nuevo contrato.',
        },
        {
          idx: '06',
          heading: 'Protocolos de conmoción',
          body: 'Soluciones de ejercicio para conmociones desde el inicio de la lesión, coordinadas con tu equipo médico.',
        },
      ],
    },
    faqs: [
      {
        q: '¿Qué es la rehabilitación de rendimiento?',
        a: '<p>Es la etapa entre la rehabilitación clínica y el entrenamiento de rendimiento deportivo. Primero restaura el equilibrio estructural, la calidad del tejido y las opciones de movimiento; después reconstruye fuerza, potencia y capacidad específica del deporte sobre un cuerpo capaz de expresarlas con seguridad.</p>',
      },
      {
        q: '¿Trabajas con atletas que no son profesionales?',
        a: '<p>Sí. Atletas en desarrollo, universitarios y máster trabajan con el mismo método basado en la evaluación. Lo que cambia es la programación y el volumen, no el estándar de atención.</p>',
      },
      {
        q: '¿Esto puede funcionar junto al cuerpo técnico de mi equipo?',
        a: '<p>Sí, y normalmente así ocurre. El trabajo está diseñado para complementar el programa del equipo, no para competir con él, y coordino con el cuerpo técnico cuando el atleta así lo desea.</p>',
      },
      {
        q: '¿Sustituyes a mi fisioterapeuta?',
        a: '<p>No. La rehabilitación de rendimiento acompaña a la atención clínica, no la reemplaza. También coordino el acceso a una red verificada de profesionales de fisioterapia, nutrición y medicina cuando un cliente lo necesita.</p>',
      },
      {
        q: '¿Cuánto tarda un atleta en notar cambios?',
        a: '<p>Los cambios en calidad de movimiento y síntomas suelen notarse en dos o tres semanas. El cambio estructural —el que aparece en la reevaluación y aguanta bajo carga— suele darse en un plazo de dos a tres meses.</p>',
      },
      {
        q: '¿El trabajo está disponible a distancia?',
        a: '<p>Sí. La programación y el coaching virtuales están disponibles en todo el mundo, y así es como se entrega la mayor parte del trabajo en temporada. El trabajo presencial está disponible en Nueva York.</p>',
      },
    ],
    related: [
      { route: 'eldoa', label: 'La práctica', title: 'Qué es ELDOA y cómo funciona' },
      { route: 'concussion', label: 'Conmociones', title: 'Recuperación con base en el ejercicio' },
      { route: 'results', label: 'Pruebas', title: 'Lo que dicen los atletas' },
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
    ],
    cta: {
      kicker: 'Empieza aquí',
      heading: 'Cada programa empieza con una evaluación.',
      body: 'Un análisis virtual gratuito de 20 minutos sobre cómo te mueves, cargas y te recuperas, y un plan claro sobre qué atender primero.',
      ctas: [{ route: 'apply', label: 'Comienza tu evaluación' }, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  concussion: {
    seo: {
      title: 'Recuperación de Conmociones con Ejercicio | Ben Velazquez',
      description:
        'Soluciones de ejercicio para conmociones desde el inicio de la lesión con Ben Velazquez, NYC. Un equipo integral enfocado en mantenerte ahí.',
    },
    hero: {
      kicker: 'Recuperación de conmociones · NYC',
      h1: 'Soluciones de ejercicio para conmociones, desde el inicio de la lesión.',
      lede: 'Un enfoque integral y en equipo para la recuperación de conmociones cerebrales, centrado no solo en que regreses, sino en mantenerte ahí.',
      ctas: [
        { route: 'apply', label: 'Conoce el programa' },
        { route: 'contact', label: 'Contactar', ghost: true },
      ],
    },
    answer: [
      'La recuperación de conmociones basada en ejercicio utiliza actividad física progresada cuidadosamente y por debajo del umbral de síntomas como parte activa de la recuperación, en lugar de asumir el reposo completo prolongado como opción predeterminada. Se entrega como parte de un equipo coordinado que incluye supervisión médica.',
      'Ben Velazquez es un experto reconocido en soluciones de ejercicio para conmociones y dirige el programa personalmente. Tim Fleiszer, Director Ejecutivo de Concussion Legacy Foundation Canada, ha trabajado con Ben durante más de 15 años, incluido el trabajo con personal militar a través del programa Operation Brain Health.',
    ],
    facts: [
      { k: 'Entregado por', v: 'Ben Velazquez' },
      { k: 'Enfoque', v: 'Basado en ejercicio, desde el inicio' },
      { k: 'Modelo', v: 'Equipo integral multidisciplinar' },
      { k: 'Poblaciones', v: 'Atletas · militares · público general' },
      { k: 'Contacto', v: `<a href="mailto:${site.email}">${site.email}</a>` },
      { k: 'Idiomas', v: 'Inglés · Español' },
    ],
    medical: {
      heading: 'Una nota importante sobre la atención médica',
      body: `<p>La conmoción cerebral es una condición médica. Nada en esta página es consejo médico, y este programa no sustituye la evaluación, el diagnóstico ni el alta por parte de un médico cualificado.</p>
<p>El trabajo de conmociones basado en ejercicio se entrega como una parte de un equipo coordinado, junto a tus profesionales médicos, no en su lugar. Si has sufrido un golpe en la cabeza, acude primero a un médico. Si presentas dolor de cabeza que empeora, vómitos repetidos, convulsiones, debilidad o entumecimiento, o confusión o somnolencia crecientes, busca atención de urgencia de inmediato.</p>`,
    },
    approach: {
      kicker: 'El enfoque',
      heading: 'Por qué ejercicio, y por qué temprano.',
      body: `<p>La pauta antigua para las conmociones era reposo completo hasta la resolución de los síntomas. La práctica ha avanzado bastante. La actividad cuidadosamente dosificada, por debajo del umbral de síntomas, introducida bajo supervisión y progresada según la evidencia y no según el calendario, es hoy una parte central del manejo de la conmoción.</p>
<p>La palabra clave ahí es <em>dosificada</em>. Demasiado provoca síntomas y retrasa la recuperación; demasiado poco deja a la persona desacondicionada, aislada y a menudo peor a nivel psicológico. Acertar la dosis, y ajustarla continuamente, es toda la habilidad.</p>
<p>Por eso se entrega como equipo y no como un solo profesional. La supervisión médica, la progresión del ejercicio y la decisión de retorno al trabajo o al juego son tres competencias distintas, y una recuperación falla con más frecuencia en las costuras entre ellas.</p>`,
    },
    faqs: [
      {
        q: '¿Qué es la recuperación de conmociones basada en ejercicio?',
        a: '<p>Es un enfoque que utiliza actividad física progresada cuidadosamente, mantenida por debajo del umbral que provoca síntomas, como componente activo de la recuperación. La progresión se basa en la respuesta individual y es supervisada, en lugar de seguir un calendario fijo.</p>',
      },
      {
        q: '¿Esto sustituye ir al médico?',
        a: '<p>No. La conmoción cerebral es una condición médica que requiere evaluación, diagnóstico y alta por parte de un médico cualificado. Este programa se entrega junto a la atención médica como parte de un equipo coordinado, nunca en su lugar.</p>',
      },
      {
        q: '¿Cuándo puede empezar el ejercicio tras una conmoción?',
        a: '<p>Es una decisión médica, caso por caso, con tu médico. La práctica actual suele favorecer introducir actividad ligera y controlada antes de lo que permitía el antiguo modelo de reposo completo, pero el momento concreto depende de la persona y de su cuadro clínico.</p>',
      },
      {
        q: '¿Para quién es el programa?',
        a: '<p>Para atletas de todos los niveles, para personal militar —Ben ha trabajado con personal militar a través de Operation Brain Health con Concussion Legacy Foundation Canada— y para cualquiera en recuperación de una conmoción que quiera un retorno estructurado y supervisado.</p>',
      },
      {
        q: '¿Quién dirige el programa de conmociones?',
        a: `<p>Ben Velazquez dirige el programa personalmente. Es un experto reconocido en soluciones de ejercicio para conmociones y coordina un equipo multidisciplinar en torno a cada caso, trabajando junto a tu médico y apoyándose en su red verificada de profesionales de fisioterapia y medicina cuando la recuperación lo requiere. Puedes contactarlo en <a href="mailto:${site.email}">${site.email}</a>.</p>`,
      },
      {
        q: '¿Qué significa «no solo el regreso, sino mantenerte ahí»?',
        a: '<p>Regresar una vez es la mitad fácil. La mitad difícil es reducir la probabilidad de una nueva lesión y gestionar la carga posterior al regreso, que es donde un programa estructurado más importa.</p>',
      },
    ],
    related: [
      { route: 'athletes', label: 'Atletas', title: 'Rehabilitación de rendimiento' },
      { route: 'about', label: 'Trayectoria', title: 'Sobre Ben Velazquez' },
      { route: 'results', label: 'Pruebas', title: 'Testimonios y respaldos' },
      { route: 'contact', label: 'Contacto', title: 'Habla con el equipo' },
    ],
    cta: {
      kicker: 'Trabaja con Ben',
      heading: 'Habla con el equipo sobre una recuperación estructurada.',
      body: 'Cuéntanos sobre la lesión y en qué punto de la recuperación estás, y te explicaremos cómo funciona el programa junto a tu atención médica.',
      ctas: [
        { route: 'contact', label: 'Contactar al equipo' },
        { route: 'apply', label: 'Reservar un análisis', ghost: true },
      ],
    },
  },

  /* ====================================================================== */
  eldoa: {
    seo: {
      title: 'ELDOA en NYC — Qué Es y Cómo Funciona | Ben Velazquez',
      description:
        'ELDOA es un sistema de posturas de autonormalización que crean espacio en un segmento vertebral concreto. Qué es, qué hace y cómo aprenderlo bien.',
    },
    hero: {
      kicker: 'La práctica',
      h1: 'ELDOA: la práctica diaria por la que juran los atletas de élite.',
      lede: 'Un sistema de posturas precisas y autoadministradas que descomprimen un segmento vertebral concreto a la vez, usando únicamente tu propia tensión muscular.',
      ctas: [APPLY_CTA, { route: 'method', label: 'Ver el método', ghost: true }],
    },
    answer: [
      'ELDOA (Étirements Longitudinaux avec Décoaptation Ostéo-Articulaire) es un sistema de posturas autoadministradas diseñadas para crear espacio en una articulación o segmento vertebral concreto. Cada postura utiliza la tensión muscular y las líneas fasciales del propio practicante para descoaptar un nivel específico, habitualmente un segmento vertebral como L5–S1.',
      'No es estiramiento general. Cada postura apunta a un segmento nombrado, se mantiene alrededor de un minuto en una posición precisa y se elige a partir de lo que encontró una evaluación. Practicado con constancia, los atletas reportan menos dolor asociado a la compresión, mejor rango de movimiento y mejor recuperación entre sesiones.',
    ],
    facts: [
      { k: 'Nombre completo', v: 'Étirements Longitudinaux avec Décoaptation Ostéo-Articulaire' },
      { k: 'Traducción', v: 'Estiramientos longitudinales con descoaptación osteoarticular' },
      { k: 'Duración típica', v: 'Unos 60 segundos por postura' },
      { k: 'Equipamiento', v: 'Ninguno — solo espacio en el suelo' },
      { k: 'Objetivo', v: 'Un segmento nombrado a la vez' },
      { k: 'Ideal para', v: 'Compresión, rigidez, viajes, postura de escritorio' },
    ],
    explainer: {
      kicker: 'Cómo funciona',
      heading: 'Un segmento a la vez, con tu propia tensión.',
      body: `<p>La mayoría del estiramiento es regional. Estiras «los isquiotibiales» o «la zona lumbar», y el rango que ganas se reparte entre los segmentos que ya eran más móviles, que normalmente no son los que lo necesitaban.</p>
<p>ELDOA invierte eso. Cada postura se construye de forma que las cadenas fasciales por encima y por debajo de un segmento elegido queden bajo tensión simultáneamente, creando una descoaptación —espacio— en ese nivel concreto. La posición es precisa, la tensión la generas tú en lugar de aplicarla un terapeuta, y el mantenimiento suele rondar el minuto.</p>
<h3>Por qué importa la especificidad</h3>
<p>Si una evaluación muestra que la restricción está en L5–S1, el trabajo general de movilidad lumbar moverá sobre todo los niveles que ya se mueven. Apuntar al segmento realmente restringido es la diferencia entre sentirse más suelto una hora y cambiar algo que se sostiene.</p>
<h3>Por qué pertenece a la conversación fascial</h3>
<p>La fascia es continua. Responde a lo que le pides de forma repetida, y por eso once horas al día en una silla son un estímulo de entrenamiento real, y por eso un contraestímulo tiene que ser igual de específico. Mi contribución a <em>Fascia: Clinical Applications for Health and Human Performance</em> sale directamente de este trabajo.</p>
<h3>Por qué los atletas se quedan con ello</h3>
<p>No requiere equipamiento, cabe en una habitación de hotel, lleva de diez a quince minutos y puede hacerse a diario sin añadir un costo de recuperación significativo. Para un atleta dentro de una temporada congestionada, esa combinación es rara.</p>`,
    },
    who: {
      kicker: 'A quién ayuda',
      heading: 'Para quién es ELDOA.',
      cards: [
        {
          idx: '01',
          heading: 'Atletas en temporadas congestionadas',
          body: 'Descompresión diaria que compensa la carga compresiva acumulada sin engrosar la factura de recuperación.',
        },
        {
          idx: '02',
          heading: 'Profesionales de escritorio',
          body: 'Un contrapeso directo a los segmentos concretos que más carga once horas sentado.',
        },
        {
          idx: '03',
          heading: 'Viajeros frecuentes',
          body: 'Diez minutos en el suelo de un hotel al aterrizar, revirtiendo horas de compresión axial antes de que se instale.',
        },
        {
          idx: '04',
          heading: 'Personas con dolor recurrente de espalda o cuello',
          body: 'Cuando la restricción está relacionada con la compresión y es localizada, apuntar al segmento gana al trabajo general de movilidad.',
        },
      ],
    },
    faqs: [
      {
        q: '¿Qué significa ELDOA?',
        a: '<p>ELDOA es un acrónimo francés: Étirements Longitudinaux avec Décoaptation Ostéo-Articulaire — estiramientos longitudinales con descoaptación osteoarticular. En la práctica significa crear espacio en una articulación o segmento vertebral concreto usando tu propia tensión muscular.</p>',
      },
      {
        q: '¿En qué se diferencia ELDOA del yoga o del estiramiento normal?',
        a: '<p>En especificidad e intención. El yoga y el estiramiento general trabajan por regiones y suelen repartir el rango entre los segmentos que ya se mueven bien. Cada postura de ELDOA está diseñada para descoaptar un segmento nombrado, se mantiene en una posición precisa alrededor de un minuto y se selecciona a partir de hallazgos de evaluación, no de cómo se siente una zona.</p>',
      },
      {
        q: '¿Cuánto dura una sesión de ELDOA?',
        a: '<p>Una práctica diaria suele ser de diez a quince minutos: unas pocas posturas de aproximadamente un minuto cada una. La prescripción depende de lo que muestre tu evaluación.</p>',
      },
      {
        q: '¿Con qué frecuencia debo practicar ELDOA?',
        a: '<p>La práctica diaria es de donde vienen los resultados. Como no añade un costo de recuperación significativo, puede hacerse todos los días, incluso en temporada y en días de viaje.</p>',
      },
      {
        q: '¿Necesito equipamiento o un gimnasio?',
        a: '<p>No. Basta con espacio en el suelo, y por eso justamente sobrevive a una agenda real de viajes.</p>',
      },
      {
        q: '¿Puedo aprender ELDOA con videos?',
        a: '<p>Puedes aprender las formas con video, pero el valor está en la precisión y en elegir las posturas correctas para tus restricciones. Aquí el acompañamiento importa más que en la mayoría del trabajo de movilidad, porque una postura mantenida ligeramente mal apunta a un segmento distinto del que pretendías.</p>',
      },
      {
        q: '¿Cuánto tardo en notar la diferencia?',
        a: '<p>Mucha gente nota menos rigidez al final del día en una o dos semanas. El cambio estructural que aguanta bajo carga suele requerir de dos a tres meses de práctica diaria constante.</p>',
      },
      {
        q: '¿Dónde puedo aprender ELDOA en Nueva York?',
        a: '<p>ELDOA es parte central de cada programa que escribo, tanto para atletas como para ejecutivos, presencial en NYC o virtual. Toda colaboración empieza con un Análisis de Necesidades de Rendimiento gratuito de 20 minutos, que es lo que determina qué posturas necesitas realmente.</p>',
      },
    ],
    related: [
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'executive', label: 'Para ejecutivos', title: 'Coaching de rendimiento ejecutivo' },
      { route: 'athletes', label: 'Para atletas', title: 'Rehabilitación de rendimiento' },
      { route: 'apply', label: 'Empieza aquí', title: 'Reserva tu análisis gratuito' },
    ],
    cta: {
      kicker: 'Apréndelo bien',
      heading: 'Las posturas correctas dependen de lo que encuentre tu evaluación.',
      body: 'Un análisis gratuito de 20 minutos identifica los segmentos que realmente te limitan, y qué posturas de ELDOA merecen tus diez minutos diarios.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  method: {
    seo: {
      title: 'El Método: Evaluar, Descomprimir, Construir para Durar',
      description:
        'La mayoría del entrenamiento desgasta el cuerpo. Esto lo reconstruye. El método de tres partes detrás de 20+ años de rehabilitación con atletas de élite.',
    },
    hero: {
      kicker: 'El método',
      h1: 'La mayoría del entrenamiento desgasta el cuerpo. Esto lo reconstruye.',
      lede: 'Tres principios, aplicados en orden, tanto si eres un atleta profesional en temporada congestionada como un ejecutivo en su cuarto vuelo de la semana.',
      ctas: [APPLY_CTA, { route: 'eldoa', label: '¿Qué es ELDOA?', ghost: true }],
    },
    answer: [
      'El método tiene tres etapas, aplicadas estrictamente en orden. Primero, evaluar: cada programa parte de datos medidos sobre cómo tu cuerpo se mueve, carga y se recupera, no de suposiciones. Segundo, descomprimir: ELDOA y trabajo fascial atienden las restricciones concretas que encontró la evaluación. Tercero, construir: la fuerza y las cualidades de rendimiento se añaden sobre una estructura capaz de expresarlas.',
      'El orden es lo esencial. Añadir carga a una estructura desequilibrada refuerza el desequilibrio. Primero el equilibrio estructural; después las cualidades de rendimiento.',
    ],
    steps: {
      kicker: 'En la práctica',
      heading: 'Tres etapas, en orden.',
      list: [
        {
          n: '01',
          h: 'Evaluar, no adivinar',
          p: 'Una evaluación profunda de movimiento y postura establece qué está realmente restringido, qué lado compensa y cómo te recuperas. Dos personas con síntomas idénticos necesitan con frecuencia programas opuestos, y por eso nada empieza antes de esto.',
        },
        {
          n: '02',
          h: 'ELDOA y trabajo fascial',
          p: 'Posturas de autonormalización dirigidas que descomprimen un segmento vertebral o articulación concretos, elegidos a partir de lo que encontró la evaluación. Esta es la práctica diaria: de diez a quince minutos, sin equipamiento, en cualquier lugar.',
        },
        {
          n: '03',
          h: 'Hecho para durar',
          p: 'Fuerza, potencia y capacidad, programadas sobre una estructura que ya puede expresarlas, con la recuperación y la preparación tratadas como un solo sistema y no como dos.',
        },
      ],
    },
    principles: {
      kicker: 'Los principios detrás',
      heading: 'Por qué está construido así.',
      cards: [
        {
          idx: '01',
          heading: 'El deporte es deporte. El deporte no es salud.',
          body: 'Competir y estar sano son objetivos distintos. El trabajo de un preparador físico es llevar primero un atleta sano al campo; el rendimiento es lo que construyes encima.',
        },
        {
          idx: '02',
          heading: 'Precisión sobre intensidad',
          body: 'El factor limitante casi nunca es el esfuerzo. Es saber en qué dos o tres cosas trabajar. La intensidad aplicada al objetivo equivocado solo afianza el problema más rápido.',
        },
        {
          idx: '03',
          heading: 'Para la postura, la duración gana a la intensidad',
          body: 'El tejido se adapta al estímulo sostenido. Once horas sentado pesan más que una hora de entrenamiento, y por eso la frecuencia de interrupción importa más que el volumen de sesión.',
        },
        {
          idx: '04',
          heading: 'La recuperación es una habilidad, no un premio',
          body: 'La arquitectura del sueño, la mecánica respiratoria, la calidad del tejido y el tono parasimpático son variables entrenables. Dejadas al azar, las cuatro se degradan.',
        },
        {
          idx: '05',
          heading: 'Ciencia, experiencia y arte',
          body: 'El desafío con cada atleta es combinar la dosis justa de las tres en una preparación hecha solo para él. Esa es la parte que ningún protocolo entrega por sí solo.',
        },
        {
          idx: '06',
          heading: 'Medir, y volver a medir',
          body: 'Reevaluación trimestral contra la línea base original. Si un programa funciona, aparece en las mismas mediciones con las que empezó.',
        },
      ],
    },
    faqs: [
      {
        q: '¿Qué ocurre en la evaluación?',
        a: '<p>Una valoración estructurada de cómo te mueves, cómo cargas y cómo te recuperas: postura, rango de movimiento, patrones de movimiento, compensaciones e historial de entrenamiento y lesiones. Produce la línea base contra la que se mide todo lo demás.</p>',
      },
      {
        q: '¿Por qué importa tanto el orden?',
        a: '<p>Porque cargar una estructura desequilibrada refuerza el desequilibrio. La fuerza añadida sobre un patrón de compensación lo hace más fuerte y más duradero, y así es como una restricción menor se convierte en lesión.</p>',
      },
      {
        q: '¿Esto es fisioterapia?',
        a: '<p>No. La rehabilitación de rendimiento se sitúa entre la rehabilitación clínica y el entrenamiento de rendimiento, y acompaña a la atención clínica en lugar de sustituirla. Cuando un cliente necesita atención médica o fisioterapia, coordino el acceso a una red verificada.</p>',
      },
      {
        q: '¿Cómo se mide el progreso?',
        a: '<p>Con reevaluación trimestral usando las mismas mediciones de la línea base, más los marcadores prácticos que le importan al cliente: frecuencia del dolor, energía a lo largo de la semana y qué puede hacer sin consecuencias.</p>',
      },
      {
        q: '¿Se aplica el mismo método a ejecutivos y atletas?',
        a: '<p>Sí, el método es idéntico. Los hallazgos de la evaluación, la programación y el volumen difieren por completo, pero el orden de operaciones no.</p>',
      },
    ],
    related: [
      { route: 'eldoa', label: 'La práctica', title: 'Qué es ELDOA y cómo funciona' },
      { route: 'about', label: 'Trayectoria', title: 'Sobre Ben Velazquez' },
      { route: 'programs', label: 'Precios', title: 'Programas y niveles de membresía' },
      { route: 'apply', label: 'Empieza aquí', title: 'Reserva tu análisis gratuito' },
    ],
    cta: {
      kicker: 'Etapa uno',
      heading: 'Empieza con la evaluación. Esa parte es gratuita.',
      body: 'Veinte minutos, virtual. Te vas con las dos o tres cosas que más te limitan y por dónde empezar.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  about: {
    seo: {
      title: 'Sobre Ben Velazquez — Rehabilitación de Rendimiento NYC',
      description:
        'Especialista en rehabilitación de alto rendimiento en Nueva York. 20+ años con atletas de NFL, NHL y MLB, autor sobre fascia y experto en conmociones.',
    },
    hero: {
      kicker: 'Sobre Ben',
      h1: 'Veinte años en la sala donde se protegen las carreras.',
      lede: 'Especialista en rehabilitación de alto rendimiento, posturólogo, preparador físico, autor publicado sobre fascia y experto reconocido en soluciones de ejercicio para conmociones cerebrales — con base en Nueva York, trabajando en inglés y español.',
      ctas: [APPLY_CTA, { route: 'method', label: 'El método', ghost: true }],
    },
    answer: [
      'Ben Velazquez es especialista en rehabilitación de alto rendimiento, posturólogo y preparador físico en Nueva York, con más de 20 años trabajando con atletas de élite. Ha trabajado con deportistas de la NFL, la NHL y la MLB, ha formado a más de 1,000 profesionales en sus seminarios y es coautor colaborador de <em>Fascia: Clinical Applications for Health and Human Performance</em>.',
      'Es Soma-Terapeuta licenciado, Especialista Certificado en Fuerza y Acondicionamiento (CSCS), Especialista en Ejercicio ACSM y Nutricionista de Rendimiento Deportivo ISSA, además de miembro de NSCA, ACSM e ISSA. Entrena en inglés y español, virtualmente en todo el mundo y presencialmente en Nueva York.',
    ],
    facts: [
      { k: 'Con base en', v: 'Nueva York' },
      { k: 'Experiencia', v: '20+ años con atletas de élite' },
      { k: 'Ligas', v: 'NFL · NHL · MLB' },
      { k: 'Seminarios', v: '1,000+ profesionales formados' },
      { k: 'Publicado', v: 'Fascia (coautor colaborador)' },
      { k: 'Idiomas', v: 'Inglés · Español' },
    ],
    bio: {
      kicker: 'Trayectoria',
      heading: 'Cómo el trabajo tomó esta forma.',
      body: `<p>He pasado mi carrera en el espacio donde dos profesiones se solapan y ninguna termina de ocupar el terreno. El terapeuta acaba cuando cesa el dolor. El preparador físico empieza cuando el atleta está dado de alta. En medio queda el trabajo que realmente determina si alguien se mantiene disponible, y durante mucho tiempo casi nadie lo hacía de forma deliberada.</p>
<p>En esa brecha construí mi práctica. Evaluar primero. Corregir lo que no está bien. Solo entonces cargarlo.</p>
<h2>Los atletas</h2>
<p>En veinte años ese enfoque me ha llevado a salas de pesas con atletas de la NFL, la NHL y la MLB —Christian McCaffrey, Derek Carr, Connor McDavid, Max Domi y Jesús Luzardo entre ellos— y al documental <em>Being: Mariano</em> con Mariano Rivera. Los deportes difieren enormemente. El orden de operaciones no.</p>
<h2>La ciencia</h2>
<p>La fascia es el hilo conductor. Es continua, se adapta a lo que le pides de forma repetida y explica por qué el trabajo localizado y específico supera al entrenamiento general de movilidad para la mayoría de los problemas que la gente me trae. Ese trabajo condujo a mi contribución a <em>Fascia: Clinical Applications for Health and Human Performance</em>, y es la razón por la que ELDOA está en el centro de casi todos los programas que escribo.</p>
<h2>Conmociones</h2>
<p>Trabajo en soluciones de ejercicio para conmociones desde el inicio de la lesión. Tim Fleiszer, Director Ejecutivo de Concussion Legacy Foundation Canada, y yo llevamos más de 15 años trabajando juntos, incluido el trabajo con personal militar a través del programa Operation Brain Health.</p>
<h2>Enseñanza</h2>
<p>Más de mil profesionales han pasado por mis seminarios. Enseñar afina el trabajo: no puedes despachar un principio con vaguedades ante una sala de profesionales que lo aplicarán el lunes.</p>
<h2>Ejecutivos</h2>
<p>Los métodos que mantienen a un atleta profesional en el campo resultan trasladables casi directamente a personas que se sientan once horas y vuelan cien veces al año. La misma compresión, los mismos patrones de compensación, menos tiempo de recuperación y mucho menos apoyo. Por eso existe el Executive Team, y por eso el roster es pequeño.</p>`,
    },
    credentials: {
      kicker: 'Credenciales y reconocimiento',
      heading: 'Certificado. Publicado. La confianza de la élite.',
      lede: 'Galardonado y reconocido a nivel nacional — respaldado por la ciencia, no solo por la experiencia.',
    },
    faqs: [
      {
        q: '¿Cuáles son las cualificaciones de Ben Velazquez?',
        a: '<p>Soma-Terapeuta licenciado (fisioterapia de rendimiento), Especialista Certificado en Fuerza y Acondicionamiento (CSCS), Especialista en Ejercicio ACSM y Nutricionista de Rendimiento Deportivo ISSA. Estudió posturología con el Dr. Bernard Bricot, es miembro de NSCA, ACSM e ISSA, y coautor colaborador de <em>Fascia: Clinical Applications for Health and Human Performance</em>.</p>',
      },
      {
        q: '¿Con qué atletas profesionales ha trabajado Ben?',
        a: '<p>Con atletas de la NFL, la NHL y la MLB, incluidos Christian McCaffrey, Derek Carr, Connor McDavid, Max Domi y Jesús Luzardo. También apareció en el documental de FOX Sports <em>Being: Mariano</em> con Mariano Rivera.</p>',
      },
      {
        q: '¿Dónde tiene su base Ben Velazquez?',
        a: '<p>En Nueva York. El trabajo presencial está disponible en NYC y el coaching virtual está disponible en todo el mundo.</p>',
      },
      {
        q: '¿A qué libro ha contribuido Ben?',
        a: `<p>Es coautor colaborador de <em>Fascia: Clinical Applications for Health and Human Performance</em>, sobre la ciencia de la fascia — la base del trabajo que hace con cada cliente. <a href="${site.links.book}" target="_blank" rel="noopener">El libro está disponible aquí</a>.</p>`,
      },
      {
        q: '¿Ben habla español?',
        a: '<p>Sí. Todo el coaching, la programación y el material escrito están disponibles en inglés o español.</p>',
      },
      {
        q: '¿Cuál es la filosofía de entrenamiento de Ben?',
        a: '<p>«¡El deporte es deporte! ¡El deporte no es salud!». El trabajo de un preparador físico es llevar primero un atleta sano al campo. Corregir lo que no está bien, lograr el equilibrio estructural y solo entonces construir las cualidades que elevan el rendimiento.</p>',
      },
    ],
    related: [
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'results', label: 'Pruebas', title: 'Testimonios y respaldos' },
      { route: 'podcast', label: 'Escuchar', title: 'El Podcast de Ben Velazquez' },
      { route: 'contact', label: 'Contacto', title: 'Ponte en contacto' },
    ],
    cta: {
      kicker: 'Trabajemos juntos',
      heading: 'Toda colaboración empieza igual.',
      body: 'Un Análisis de Necesidades de Rendimiento virtual y gratuito de 20 minutos, y un plan que te quedas, trabajemos juntos o no.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  programs: {
    seo: {
      title: 'Programas y Precios — Executive Team | Ben Velazquez',
      description:
        'Tres formas de trabajar con Ben Velazquez: Executive Reset ($297), Core Executive Performance ($2,300/mes) y Concierge Private Performance por aplicación.',
    },
    hero: {
      kicker: 'Programas',
      h1: 'Empieza donde estás. El acceso crece con el compromiso.',
      lede: 'Un camino claro desde un inicio autoguiado hasta el trabajo privado y directo. Los niveles superiores son intencionalmente limitados, y cada lugar comienza con un Análisis de Necesidades de Rendimiento gratuito.',
      ctas: [APPLY_CTA],
    },
    answer: [
      'Hay tres formas de trabajar con Ben Velazquez. El Executive Reset es un programa autoguiado de ELDOA y movilidad por $297 en pago único. Core Executive Performance cuesta $2,300 al mes con compromiso trimestral, e incluye cuatro sesiones virtuales, programación personalizada y acceso asincrónico acotado. Concierge Private Performance cuesta $6,500 al mes más viajes a costo, solo por aplicación y limitado a 7 lugares.',
      'El nivel Concierge requiere primero un Performance Day presencial: una evaluación y consulta de jornada completa desde $3,000, en pago único. Sea cual sea el nivel, cada lugar en el equipo empieza con un Análisis de Necesidades de Rendimiento virtual y gratuito de 20 minutos.',
    ],
    tiers: [
      {
        step: 'Inicio',
        name: 'The Executive Reset',
        price: `$${site.pricing.resetDisplay} <small>pago único</small>`,
        desc: 'Programa autoguiado de ELDOA y movilidad para profesionales de escritorio que viajan mucho. Empieza en minutos.',
        features: [
          'Secuencias autoguiadas de ELDOA y movilidad',
          'Diseñado para habitaciones de hotel y espacios pequeños — sin equipamiento',
          'De diez a quince minutos al día',
          'Tuyo para siempre',
        ],
        cta: 'Acceso inmediato',
        href: site.links.executiveReset,
        ghost: true,
      },
      {
        step: 'Núcleo',
        name: 'Executive Performance',
        badge: 'El más elegido',
        featured: true,
        price: `$${site.pricing.core.toLocaleString('en-US')} <small>/ mes</small>`,
        desc: 'Los puntos de contacto justos y acceso real — hecho para el ejecutivo sin tiempo.',
        features: [
          'Análisis de Necesidades completo + evaluación profunda de movimiento y postura',
          '4 sesiones virtuales / mes — programación más coaching de ELDOA y rehabilitación',
          'Diseño de programa personalizado, actualizado cada mes, que viaja contigo',
          'Acceso asincrónico acotado — revisiones por voz/texto, respuesta en 24 h en días hábiles',
          'Reevaluación y revisión de progreso trimestral',
          'Acceso coordinado a la red verificada de Ben — nutrición, fisioterapia, medicina',
          'Acceso de miembro a productos de socios',
        ],
        cta: 'Aplicar',
        route: 'apply',
        fine: 'Compromiso trimestral. Ideal para ejecutivos que quieren resultados y acceso, no volumen de sesiones.',
      },
      {
        step: 'Concierge',
        name: 'Private Performance',
        price: `$${site.pricing.concierge.toLocaleString('en-US')} <small>/ mes</small>`,
        desc: 'Máximo acceso. Presencial y virtual combinados — lo más parecido al apoyo que reciben los profesionales.',
        features: [
          'Todo lo de Core',
          'Presencial y virtual, combinados',
          'Hasta 8–12 puntos de contacto / mes, agenda prioritaria',
          'Diseño de programa personalizado, ajustado en tiempo real según cambia tu semana',
          'Mayor integración con recuperación, sueño y energía',
          'Acceso directo bajo demanda, dentro de horarios acordados',
        ],
        cta: 'Solicitar aplicar',
        route: 'apply',
        ghost: true,
        fine: `Por aplicación · ${site.roster.conciergeSeats} lugares. Requiere el Performance Day (desde $${site.pricing.performanceDay.toLocaleString(
          'en-US',
        )}, pago único). Viajes facturados a costo cuando el trabajo es presencial: vuelos (business en trayectos de 3 h+), transporte terrestre y hotel.`,
      },
    ],
    prereq: {
      kicker: 'Requisito obligatorio',
      heading: 'El Performance Day',
      body: `<p>Cada lugar Concierge comienza con una evaluación y consulta presencial de jornada completa — desde $${site.pricing.performanceDay.toLocaleString(
        'en-US',
      )}, en pago único.</p>
<p>Una jornada completa es lo que hace falta para ver cómo se comporta realmente un cuerpo, y no cómo se presenta en una ventana de veinte minutos: el movimiento bajo fatiga, cómo cargas por la tarde frente a por la mañana, y los patrones que solo aparecen cuando dejas de actuar para la evaluación.</p>`,
    },
    note: 'Cada lugar en el equipo comienza con un Análisis de Necesidades de Rendimiento gratuito.',
    faqs: [
      {
        q: '¿Cuánto cuesta trabajar con Ben Velazquez?',
        a: `<p>El Executive Reset cuesta $${site.pricing.resetDisplay} en pago único. Core Executive Performance cuesta $${site.pricing.core.toLocaleString(
          'en-US',
        )} al mes con compromiso trimestral. Concierge Private Performance cuesta $${site.pricing.concierge.toLocaleString(
          'en-US',
        )} al mes más viajes a costo, y requiere un Performance Day único desde $${site.pricing.performanceDay.toLocaleString(
          'en-US',
        )}.</p>`,
      },
      {
        q: '¿Qué incluye el Análisis de Necesidades gratuito?',
        a: '<p>Una evaluación virtual enfocada de 20 minutos sobre cómo te mueves, cargas y te recuperas, y un diagnóstico personalizado de las dos o tres cosas que más te limitan y por dónde empezar. Es genuinamente gratuito y te lo quedas trabajemos juntos o no.</p>',
      },
      {
        q: '¿Por qué el roster Concierge está limitado a 7?',
        a: '<p>Porque implica trabajo presencial, cambios de programación en tiempo real y acceso directo bajo demanda dentro de horarios acordados. Más allá de siete lugares, el nivel de acceso que define ese nivel deja de ser entregable.</p>',
      },
      {
        q: '¿Qué significa «acceso asincrónico acotado»?',
        a: '<p>Entre sesiones puedes enviar revisiones de técnica y preguntas por voz o texto, con respuesta en 24 horas en días hábiles. Es acotado y no ilimitado a propósito: eso es lo que mantiene real el tiempo de respuesta.</p>',
      },
      {
        q: '¿Los viajes están incluidos en el precio Concierge?',
        a: '<p>No. Cuando se requiere trabajo presencial, los viajes se facturan a costo: vuelos (clase business en trayectos de más de tres horas), transporte terrestre y hotel.</p>',
      },
      {
        q: '¿Puedo cambiar de nivel más adelante?',
        a: '<p>Sí. Muchos miembros empiezan en Core y pasan a Concierge cuando una temporada o una agenda exige más acceso. Pasar a Concierge requiere el Performance Day si aún no lo has hecho.</p>',
      },
      {
        q: '¿Ofreces sesiones sueltas?',
        a: '<p>No de forma habitual. El cambio estructural se mide en meses, y una sola sesión no puede entregarlo. El Executive Reset existe como un punto de partida autoguiado real para quien no está listo para un compromiso mensual.</p>',
      },
    ],
    related: [
      { route: 'executive', label: 'Para ejecutivos', title: 'Qué implica el coaching ejecutivo' },
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'faq', label: 'Preguntas', title: 'Preguntas frecuentes' },
      { route: 'apply', label: 'Empieza aquí', title: 'Reserva tu análisis gratuito' },
    ],
    cta: {
      kicker: 'La forma de entrar',
      heading: 'Todos los niveles empiezan con el mismo análisis gratuito.',
      body: `Veinte minutos, virtual, sin costo ni compromiso. ${site.roster.openSpots} lugares abiertos este mes.`,
      ctas: [APPLY_CTA],
    },
  },

  /* ====================================================================== */
  results: {
    seo: {
      title: 'Resultados y Testimonios — NFL, NHL, MLB | Ben Velazquez',
      description:
        'Lo que dicen los atletas profesionales y la Concussion Legacy Foundation sobre trabajar con Ben Velazquez. Testimonios de la NFL, la NHL y la MLB.',
    },
    hero: {
      kicker: '01 — Resultados',
      h1: 'Quienes pueden entrenar con cualquiera, entrenan con Ben.',
      lede: 'Atletas de la NFL, la NHL y la MLB, y la dirección de Concussion Legacy Foundation Canada, en sus propias palabras.',
      ctas: [APPLY_CTA, { route: 'athletes', label: 'Para atletas', ghost: true }],
    },
    answer: [
      'Ben Velazquez lleva más de 20 años trabajando con atletas de la NFL, la NHL y la MLB, incluidos Christian McCaffrey, Derek Carr, Connor McDavid, Max Domi y Jesús Luzardo. Tim Fleiszer, Director Ejecutivo de Concussion Legacy Foundation Canada, ha trabajado con él durante más de 15 años.',
      'Los testimonios que siguen fueron facilitados por las personas nombradas. Describen menos recurrencia de lesiones, mejor condición física diaria y el valor de una práctica constante de ELDOA.',
    ],
    inAction: {
      kicker: 'En acción',
      heading: 'Dentro del trabajo.',
      lede: 'Una mirada al entrenamiento en sí — empezando con sesiones junto a Connor McDavid.',
    },
    faqs: [
      {
        q: '¿Con qué atletas profesionales ha trabajado Ben Velazquez?',
        a: '<p>Con atletas de la NFL, la NHL y la MLB, incluidos Christian McCaffrey, Derek Carr, Connor McDavid, Max Domi y Jesús Luzardo. También apareció en el documental de FOX Sports <em>Being: Mariano</em> con Mariano Rivera.</p>',
      },
      {
        q: '¿Están verificados estos testimonios?',
        a: '<p>Sí: cada testimonio de este sitio está atribuido a una persona nombrada que lo facilitó. No se usan valoraciones agregadas ni reseñas anónimas en ninguna parte del sitio.</p>',
      },
      {
        q: '¿Los resultados con atletas profesionales se trasladan a quien no lo es?',
        a: '<p>El método se traslada; la programación no. El orden de operaciones basado en la evaluación es idéntico, pero el volumen, la intensidad y la selección de ejercicios para un ejecutivo no se parecen en nada a los de un atleta profesional en temporada.</p>',
      },
      {
        q: '¿Puedo hablar con un cliente actual?',
        a: '<p>Cuando un cliente lo ha aceptado, a veces pueden organizarse presentaciones después de un análisis de necesidades. La confidencialidad del cliente hace que esto nunca se dé por supuesto.</p>',
      },
    ],
    related: [
      { route: 'athletes', label: 'Para atletas', title: 'Rehabilitación de rendimiento' },
      { route: 'about', label: 'Trayectoria', title: 'Sobre Ben Velazquez' },
      { route: 'concussion', label: 'Conmociones', title: 'Recuperación con base en el ejercicio' },
      { route: 'apply', label: 'Empieza aquí', title: 'Reserva tu análisis gratuito' },
    ],
    cta: {
      kicker: 'La prueba',
      heading: 'El mismo estándar de atención, sea cual sea tu profesión.',
      body: 'Un análisis virtual gratuito de 20 minutos, y un plan que te quedas trabajemos juntos o no.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  insights: {
    seo: {
      title: 'Insights Semanales sobre Rendimiento | Ben Velazquez',
      description:
        'Textos breves y prácticos sobre rendimiento, recuperación, postura y longevidad de un coach con 20+ años junto a atletas de élite. Uno nuevo casi cada semana.',
    },
    hero: {
      kicker: 'Insights semanales',
      h1: 'Notas desde la cancha.',
      lede: 'Ideas breves y prácticas sobre rendimiento, recuperación y longevidad — una nueva casi cada semana.',
      ctas: [APPLY_CTA],
    },
    answer: [
      'Insights Semanales es una serie de formato breve sobre rendimiento, recuperación, postura y longevidad, escrita desde veinte años de trabajo con atletas profesionales y ejecutivos. Cada texto toma una sola pregunta práctica y la responde directamente.',
      'Se publican nuevos insights casi todas las semanas, en inglés y español, con feed RSS para ambos idiomas.',
    ],
    faqs: [
      {
        q: '¿Con qué frecuencia se publican nuevos insights?',
        a: '<p>Casi todas las semanas. Cada uno es un texto breve y autocontenido sobre una única pregunta práctica.</p>',
      },
      {
        q: '¿Hay feed RSS?',
        a: '<p>Sí — <a href="/es/feed.xml">/es/feed.xml</a> para español y <a href="/feed.xml">/feed.xml</a> para inglés.</p>',
      },
      {
        q: '¿Los insights están disponibles en inglés?',
        a: '<p>Sí. Cada insight se publica en español e inglés.</p>',
      },
    ],
    related: [
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'eldoa', label: 'La práctica', title: 'Qué es ELDOA y cómo funciona' },
      { route: 'podcast', label: 'Escuchar', title: 'El Podcast de Ben Velazquez' },
      { route: 'apply', label: 'Empieza aquí', title: 'Reserva tu análisis gratuito' },
    ],
    cta: {
      kicker: 'Llévalo a la práctica',
      heading: 'Leer sobre esto solo llega hasta cierto punto.',
      body: 'Un análisis gratuito de 20 minutos te dice cuáles de estas ideas aplican realmente a tu cuerpo, y en qué orden.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  faq: {
    seo: {
      title: 'Preguntas Frecuentes | Ben Velazquez',
      description:
        'Respuestas sobre programas, precios, ELDOA, coaching a distancia, recuperación de conmociones y cómo empezar a trabajar con Ben Velazquez en NYC o virtual.',
    },
    hero: {
      kicker: 'Preguntas',
      h1: 'Todo lo que se pregunta antes de empezar.',
      lede: 'Programas, precios, el método, el trabajo a distancia y cómo funciona realmente el Análisis de Necesidades de Rendimiento gratuito.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
    answer: [
      'Esta página reúne las preguntas más frecuentes sobre trabajar con Ben Velazquez: qué es la rehabilitación de rendimiento, en qué consiste ELDOA, cuánto cuestan los programas, si el trabajo puede hacerse a distancia y cómo empezar.',
      'Toda colaboración empieza con un Análisis de Necesidades de Rendimiento virtual y gratuito de 20 minutos, disponible en inglés o español.',
    ],
    groups: [
      {
        heading: 'Trabajar juntos',
        faqs: [
          {
            q: '¿Cómo empiezo a trabajar con Ben Velazquez?',
            a: '<p>Toda colaboración empieza con un Análisis de Necesidades de Rendimiento virtual y gratuito de 20 minutos. Te vas con un diagnóstico personalizado de las dos o tres cosas que más te limitan y por dónde empezar, trabajemos juntos o no. <a href="/es/aplicar/">Solicítalo aquí</a>.</p>',
          },
          {
            q: '¿El Análisis de Necesidades es realmente gratuito?',
            a: '<p>Sí. Es una evaluación real de 20 minutos, y el plan que te llevas es tuyo, te unas o no al equipo.</p>',
          },
          {
            q: '¿Trabajo directamente con Ben?',
            a: '<p>Sí. Por eso el roster está limitado: Concierge admite solo 7 lugares y la entrada a Core es deliberadamente pequeña.</p>',
          },
          {
            q: '¿El trabajo puede hacerse a distancia?',
            a: '<p>Sí. La mayor parte del trabajo ejecutivo es virtual y viaja con el cliente. El trabajo presencial está disponible en Nueva York y es parte obligatoria del nivel Concierge.</p>',
          },
          {
            q: '¿En qué idiomas trabajas?',
            a: '<p>Inglés y español: sesiones, programación y materiales escritos en cualquiera de los dos.</p>',
          },
          {
            q: '¿Para quién no es esto?',
            a: '<p>Para quien busca volumen de sesiones en lugar de resultados, o una solución rápida. El cambio estructural se mide en meses, y por eso Core funciona con compromiso trimestral.</p>',
          },
        ],
      },
      {
        heading: 'Programas y precios',
        faqs: [
          {
            q: '¿Cuánto cuestan los programas?',
            a: `<p>El Executive Reset cuesta $${site.pricing.resetDisplay} en pago único. Core Executive Performance cuesta $${site.pricing.core.toLocaleString(
              'en-US',
            )}/mes con compromiso trimestral. Concierge Private Performance cuesta $${site.pricing.concierge.toLocaleString(
              'en-US',
            )}/mes más viajes a costo, por aplicación, limitado a ${site.roster.conciergeSeats} lugares, y requiere un Performance Day único desde $${site.pricing.performanceDay.toLocaleString(
              'en-US',
            )}. Ver la <a href="/es/programas/">página de programas</a>.</p>`,
          },
          {
            q: '¿Qué es el Performance Day?',
            a: `<p>Una evaluación y consulta presencial de jornada completa, desde $${site.pricing.performanceDay.toLocaleString(
              'en-US',
            )} en pago único. Es requisito obligatorio para el nivel Concierge.</p>`,
          },
          {
            q: '¿Hay compromiso mínimo?',
            a: '<p>Core funciona por trimestres. El cambio estructural tarda meses en aparecer en una reevaluación, y un ciclo más corto no le daría una prueba justa al trabajo.</p>',
          },
          {
            q: '¿Cuántas sesiones incluye?',
            a: '<p>Core incluye cuatro sesiones virtuales al mes. Concierge incluye hasta 8–12 puntos de contacto al mes, combinando trabajo presencial y virtual con agenda prioritaria.</p>',
          },
        ],
      },
      {
        heading: 'El método',
        faqs: [
          {
            q: '¿Qué es la rehabilitación de rendimiento?',
            a: '<p>La etapa entre la rehabilitación clínica y el entrenamiento de rendimiento. Primero restaura el equilibrio estructural, la calidad del tejido y las opciones de movimiento; después reconstruye la fuerza y la capacidad específica del deporte sobre un cuerpo capaz de expresarlas con seguridad.</p>',
          },
          {
            q: '¿Qué es ELDOA?',
            a: '<p>ELDOA — Étirements Longitudinaux avec Décoaptation Ostéo-Articulaire — es un sistema de posturas autoadministradas que crean espacio en una articulación o segmento vertebral concreto usando tu propia tensión muscular. <a href="/es/eldoa/">Explicación completa aquí</a>.</p>',
          },
          {
            q: '¿Esto es fisioterapia?',
            a: '<p>No. Acompaña a la atención clínica en lugar de sustituirla. Cuando los clientes necesitan atención médica o fisioterapia, se coordina el acceso a una red verificada.</p>',
          },
          {
            q: '¿Cuánto tardo en ver resultados?',
            a: '<p>La menor rigidez y la mejora del movimiento diario suelen notarse en dos o tres semanas. El cambio estructural que aguanta bajo carga suele darse en un plazo de dos a tres meses.</p>',
          },
          {
            q: '¿Necesito estar en forma para empezar?',
            a: '<p>No. El punto de partida es lo que muestre la evaluación. Muchos clientes ejecutivos empiezan con restricciones importantes y con años sin entrenar de forma constante.</p>',
          },
        ],
      },
      {
        heading: 'Recuperación de conmociones',
        faqs: [
          {
            q: '¿Qué es la recuperación de conmociones basada en ejercicio?',
            a: '<p>Un enfoque que usa actividad progresada cuidadosamente y por debajo del umbral de síntomas como parte activa de la recuperación, supervisada y progresada según la respuesta individual y no según un calendario fijo. <a href="/es/recuperacion-de-conmociones/">Más información aquí</a>.</p>',
          },
          {
            q: '¿El programa de conmociones sustituye la atención médica?',
            a: '<p>No. La conmoción cerebral es una condición médica que requiere evaluación, diagnóstico y alta médica. El programa se entrega junto a la atención médica como parte de un equipo coordinado.</p>',
          },
        ],
      },
    ],
    related: [
      { route: 'programs', label: 'Precios', title: 'Programas y niveles de membresía' },
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'eldoa', label: 'La práctica', title: 'Qué es ELDOA y cómo funciona' },
      { route: 'apply', label: 'Empieza aquí', title: 'Reserva tu análisis gratuito' },
    ],
    cta: {
      kicker: '¿Aún lo estás pensando?',
      heading: 'El análisis responde más de lo que puede una página.',
      body: 'Veinte minutos, virtual, gratis. Te vas con un plan que puedes usar de cualquier manera.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  apply: {
    seo: {
      title: 'Aplicar — Análisis de Necesidades Gratuito | Ben Velazquez',
      description:
        'Solicita un Análisis de Necesidades de Rendimiento virtual y gratuito de 20 minutos. Te vas con un plan personalizado, te unas o no al Executive Team.',
    },
    hero: {
      kicker: 'Gratis · Por aplicación',
      h1: 'Haz tu prueba para un lugar en el Executive Team.',
      lede: 'Cada lugar en el equipo empieza igual: un Análisis de Necesidades de Rendimiento virtual de 20 minutos, gratuito. Encuentro qué está frenando tu cuerpo, y te vas con un plan claro para resolverlo, te unas o no al equipo.',
      ctas: [],
    },
    answer: [
      'El Análisis de Necesidades de Rendimiento es una evaluación virtual gratuita de 20 minutos sobre cómo te mueves, cargas y te recuperas. Te vas con un diagnóstico personalizado de las dos o tres cosas que más te limitan y por dónde empezar, tuyo trabajemos juntos o no.',
      `Si encajas, se te ofrece uno de los pocos lugares disponibles en el roster. Este mes hay ${site.roster.openSpots} lugares abiertos. Disponible en inglés o español.`,
    ],
    steps: [
      { n: '01', b: 'El análisis', t: 'Una evaluación virtual enfocada de 20 minutos sobre cómo te mueves, cargas y te recuperas.' },
      {
        n: '02',
        b: 'Lo que te llevas',
        t: 'Un diagnóstico personalizado: las dos o tres cosas que más te limitan y por dónde empezar. Tuyo para siempre.',
      },
      { n: '03', b: 'La prueba', t: 'Si encajas, se te ofrece uno de los pocos lugares disponibles en el roster.' },
    ],
    list: [
      { b: 'Es una evaluación de verdad.', t: 'Te vas con un plan que puedes usar, aunque no trabajemos juntos.' },
      { b: 'Hecho a tu medida.', t: 'Virtual, presencial o ambos — en inglés o español.' },
      { b: 'Roster limitado.', t: 'Solo acepto a un número reducido de ejecutivos a la vez.' },
    ],
    form: {
      heading: 'Haz tu prueba',
      // Asunto del correo que entrega Formspree.
      subject: 'Nueva solicitud — Análisis de Necesidades de Rendimiento',
      name: 'Nombre',
      namePh: 'Tu nombre',
      email: 'Correo',
      emailPh: 'tu@empresa.com',
      goal: '¿Qué buscas?',
      options: [
        'Rendimiento ejecutivo',
        'Rendimiento atlético y rehabilitación',
        'Recuperación de conmociones',
        'Aún no estoy seguro',
      ],
      message: 'Algo que quieras que Ben sepa',
      messagePh: 'Unas palabras sobre tus objetivos…',
      submit: 'Enviar mi solicitud',
      sending: 'Enviando…',
      ok: 'Gracias — tu solicitud está enviada. Si encajas, te contactaremos para reservar tu Análisis de Necesidades.',
      err: `Algo falló al enviar. Escribe directamente a ${site.email} y lo retomamos desde ahí.`,
      note: 'Tus datos se usan únicamente para organizar tu análisis. Sin listas, sin compartir.',
    },
    faqs: [
      {
        q: '¿Qué ocurre después de aplicar?',
        a: '<p>Recibirás respuesta con los siguientes pasos. Si parece encajar, reservamos el análisis virtual gratuito de 20 minutos; si no encaja, te lo diremos directamente en lugar de dejarte esperando.</p>',
      },
      {
        q: '¿El análisis es realmente gratuito?',
        a: '<p>Sí. Es una evaluación real y el plan que te llevas es tuyo, decidas lo que decidas después.</p>',
      },
      {
        q: '¿Necesito equipamiento o un espacio concreto para la llamada?',
        a: '<p>No, solo espacio suficiente en el suelo para ponerte de pie y moverte un poco, y una cámara que te vea. Sin equipamiento.</p>',
      },
      {
        q: '¿El análisis puede hacerse en español?',
        a: '<p>Sí. Indícalo en el formulario y la llamada se realizará en español.</p>',
      },
      {
        q: '¿Y si no soy ejecutivo?',
        a: '<p>El mismo análisis es el punto de entrada para atletas y para personas en recuperación de conmociones. Selecciona la opción que corresponda en el formulario.</p>',
      },
    ],
    related: [
      { route: 'programs', label: 'Precios', title: 'Programas y niveles de membresía' },
      { route: 'executive', label: 'Para ejecutivos', title: 'Coaching de rendimiento ejecutivo' },
      { route: 'faq', label: 'Preguntas', title: 'Preguntas frecuentes' },
      { route: 'contact', label: 'Contacto', title: 'Otras formas de contactar' },
    ],
  },

  /* ====================================================================== */
  contact: {
    seo: {
      title: 'Contactar a Ben Velazquez — Rehabilitación NYC',
      description:
        'Ponte en contacto con Ben Velazquez: coaching, programa de conmociones, conferencias y prensa. Nueva York, virtual, en inglés o español.',
    },
    hero: {
      kicker: 'Contacto',
      h1: 'Ponte en contacto.',
      lede: 'Para consultas de coaching, el programa de conmociones, conferencias, seminarios o prensa — así puedes contactar al equipo.',
      ctas: [APPLY_CTA],
    },
    answer: [
      `La vía más rápida para consultas de coaching es la solicitud del Análisis de Necesidades de Rendimiento gratuito. Para todo lo demás —el programa de conmociones, conferencias, seminarios, prensa o alianzas— escribe a ${site.email}.`,
      'Ben tiene su base en Nueva York y trabaja virtualmente en todo el mundo, en inglés o español.',
    ],
    facts: [
      { k: 'Consultas de coaching', v: '<a href="/es/aplicar/">Solicita un análisis gratuito</a>' },
      { k: 'Correo', v: `<a href="mailto:${site.email}">${site.email}</a>` },
      { k: 'Programa de conmociones', v: '<a href="/es/recuperacion-de-conmociones/">Recuperación con ejercicio</a>' },
      { k: 'Con base en', v: 'Nueva York, NY' },
      { k: 'Disponibilidad', v: 'Virtual mundial · presencial NYC' },
      { k: 'Idiomas', v: 'Inglés · Español' },
    ],
    faqs: [
      {
        q: '¿Cuál es la vía más rápida para contactar a Ben?',
        a: '<p>Para coaching, la <a href="/es/aplicar/">solicitud de análisis</a>: entra directamente en la cola de admisión. Para cualquier otra cosa, el correo es la vía más rápida.</p>',
      },
      {
        q: '¿Aceptas conferencias o seminarios?',
        a: `<p>Sí. Más de 1,000 profesionales se han formado en los seminarios de Ben. Escribe a <a href="mailto:${site.email}">${site.email}</a> con fechas, público y formato.</p>`,
      },
      {
        q: '¿Cómo pregunto por el programa de conmociones?',
        a: `<p>Escribe a <a href="mailto:${site.email}">${site.email}</a> e indica que tu consulta es sobre el programa de conmociones.</p>`,
      },
      {
        q: '¿Trabajas con clientes fuera de Estados Unidos?',
        a: '<p>Sí. El coaching virtual está disponible en todo el mundo, en inglés o español.</p>',
      },
    ],
    related: [
      { route: 'apply', label: 'Coaching', title: 'Reserva tu análisis gratuito' },
      { route: 'concussion', label: 'Conmociones', title: 'Recuperación con base en el ejercicio' },
      { route: 'about', label: 'Trayectoria', title: 'Sobre Ben Velazquez' },
      { route: 'faq', label: 'Preguntas', title: 'Preguntas frecuentes' },
    ],
  },

  /* ====================================================================== */
  podcast: {
    seo: {
      title: 'El Podcast de Ben Velazquez — Rendimiento y Longevidad',
      description:
        'Conversaciones sobre rendimiento, recuperación y longevidad con quienes viven en la cima — presentado por el especialista de Nueva York Ben Velazquez.',
    },
    hero: {
      kicker: 'Podcast',
      h1: 'El Podcast de Ben Velazquez.',
      lede: 'Conversaciones sobre rendimiento, recuperación y longevidad con quienes viven en la cima.',
      ctas: [
        { href: site.links.podcast, label: 'Escuchar ahora' },
        { route: 'insights', label: 'Leer los insights', ghost: true },
      ],
    },
    note: 'Mantente atento — los episodios están en camino.',
    answer: [
      'El Podcast de Ben Velazquez presenta conversaciones sobre rendimiento, recuperación y longevidad con atletas, profesionales y ejecutivos que operan al más alto nivel.',
      'Lo presenta Ben Velazquez, especialista en rehabilitación de alto rendimiento en Nueva York con más de 20 años trabajando con atletas de la NFL, la NHL y la MLB.',
    ],
    faqs: [
      {
        q: '¿De qué trata el podcast?',
        a: '<p>De rendimiento, recuperación y longevidad: las decisiones prácticas que mantienen a la gente operando a alto nivel durante décadas y no solo temporadas.</p>',
      },
      {
        q: '¿Dónde puedo escucharlo?',
        a: '<p>Los episodios y los enlaces a plataformas se publican aquí a medida que salen.</p>',
      },
      {
        q: '¿Cómo puedo proponer un invitado o participar?',
        a: `<p>Escribe a <a href="mailto:${site.email}">${site.email}</a> con una nota breve sobre el tema y por qué encaja.</p>`,
      },
    ],
    related: [
      { route: 'insights', label: 'Lectura', title: 'Insights semanales' },
      { route: 'about', label: 'Trayectoria', title: 'Sobre Ben Velazquez' },
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'apply', label: 'Empieza aquí', title: 'Reserva tu análisis gratuito' },
    ],
  },

  /* ====================================================================== */
  whatIUse: {
    seo: {
      title: 'Lo Que Uso — Recuperación y Enfoque | Ben Velazquez',
      description:
        'Los productos que Ben Velazquez realmente usa: energía limpia, recuperación y herramientas sin fármacos que recomienda a las personas que entrena.',
    },
    hero: {
      kicker: 'Lo que uso',
      h1: 'Los productos que de verdad uso.',
      lede: 'Una lista breve de cosas que uso yo mismo y recomiendo a quienes entreno. Te he conseguido acceso directo.',
      ctas: [],
    },
    answer: [
      'Esta página lista los productos que Ben Velazquez usa personalmente y recomienda a sus clientes: las bolsitas nootrópicas sin nicotina GTG Energy, la crema de recuperación 27:17 Recovery y los wearables vibrotáctiles sin fármacos Super Patch.',
      'Se trata de relaciones de afiliación: Ben puede recibir una comisión por las compras hechas a través de estos enlaces, sin costo adicional para ti. Los productos están listados porque los usa, no por la comisión.',
    ],
    partners: [
      {
        logo: 'gtg',
        mark: 'GTG',
        name: 'GTG Energy™',
        tag: 'Enfoque y energía',
        cat: 'Bolsitas nootrópicas sin nicotina · enfoque limpio, sin bajón',
        quote:
          '«Predico la energía limpia por encima de estimulantes que suben y bajan de golpe. GTG es justo eso: enfoque nítido, sin nicotina y sin nervios. Es lo que llevo encima en los días largos con clientes.»',
        cta: 'Comprar GTG Energy',
        href: site.links.gtg,
      },
      {
        logo: 'p2717',
        mark: '27:17',
        name: '27:17 Recovery',
        tag: 'Vuelve pronto',
        soldOut: true,
        cat: 'Crema de recuperación · péptido de cobre, árnica, MSM · apta para antidopaje',
        quote:
          '«La recuperación no es descanso: es rendimiento. 27:17 es el tópico en el que confío para ayudar al cuerpo a reconstruirse entre sesiones, y es lo bastante limpio para atletas con control antidopaje. Un básico de mi kit de recuperación.»',
        cta: 'Avísame cuando vuelva',
        href: site.links.p2717,
        ghost: true,
      },
      {
        logo: 'sp',
        mark: 'SP',
        name: 'Super Patch',
        tag: 'Sin fármacos',
        cat: 'Wearables vibrotáctiles sin fármacos · energía, enfoque, sueño y recuperación',
        quote:
          '«Las herramientas sin fármacos que de verdad hacen algo son raras. He notado la diferencia con Super Patch para la energía y el enfoque en días largos: sin estimulantes y sin nada que dé positivo en un control. Una forma fácil de mantener a mis atletas y clientes a punto.»',
        cta: 'Comprar Super Patch',
        href: site.links.superpatch,
      },
    ],
    disclosure:
      'Aviso: puedo recibir una comisión por las compras hechas a través de estos enlaces, sin costo adicional para ti. Solo listo productos que uso yo mismo.',
    faqs: [
      {
        q: '¿Recibes una comisión por estos productos?',
        a: '<p>Sí, por algunos, sin costo adicional para ti. Cada producto listado es uno que Ben usa él mismo: la comisión no determina qué aparece aquí. Consulta la <a href="/es/divulgacion-de-afiliados/">divulgación de afiliados completa</a>.</p>',
      },
      {
        q: '¿Son seguros estos productos para atletas con control antidopaje?',
        a: '<p>27:17 Recovery está formulado para ser apto en controles antidopaje, y Super Patch es un wearable vibrotáctil sin fármacos, sin nada que detectar. Las bolsitas GTG Energy no contienen nicotina. Los atletas sujetos a controles deben verificar siempre cualquier producto contra la lista vigente de su federación antes de usarlo.</p>',
      },
      {
        q: '¿Los suplementos forman parte de tus programas?',
        a: '<p>No. La programación se construye sobre evaluación, descompresión y entrenamiento. Estas son herramientas que algunos clientes encuentran útiles, no un componente del método.</p>',
      },
      {
        q: '¿Los miembros tienen acceso a estos productos?',
        a: '<p>Los miembros de Core y Concierge tienen acceso de miembro a los productos de socios como parte de su membresía.</p>',
      },
    ],
    related: [
      { route: 'disclosure', label: 'Legal', title: 'Divulgación de afiliados completa' },
      { route: 'method', label: 'El método', title: 'Evaluar, descomprimir, construir para durar' },
      { route: 'programs', label: 'Precios', title: 'Programas y niveles de membresía' },
      { route: 'insights', label: 'Lectura', title: 'Insights semanales' },
    ],
  },

  /* ====================================================================== */
  privacy: {
    seo: {
      title: 'Política de Privacidad | Ben Velazquez',
      description:
        'Cómo benvelazquez.com recopila, usa y protege tu información. Qué guardamos, qué nunca hacemos y cómo eliminar tus datos.',
    },
    hero: { kicker: 'Legal', h1: 'Política de privacidad', lede: 'Última actualización: julio de 2026.', ctas: [] },
    body: `<p>Este sitio es operado por Ben Velazquez. Esta política explica qué información se recopila, por qué, y qué puedes hacer al respecto. Está escrita para leerse, no para sobrevivirla.</p>
<h2>Qué se recopila</h2>
<p>La única información que se recopila es la que escribes en el formulario de solicitud o de contacto: tu nombre, tu correo electrónico, la opción que seleccionas y el mensaje que redactes. No se solicita ni se almacena nada más.</p>
<h2>Para qué se usa</h2>
<p>Únicamente para responder a tu consulta y, cuando corresponda, organizar tu Análisis de Necesidades de Rendimiento. Tus datos no se venden, alquilan ni comparten con terceros con fines de marketing. Enviar el formulario no te añade a ninguna lista de correo.</p>
<h2>Analítica y seguimiento</h2>
<p>Este sitio no usa cookies publicitarias, ni píxeles de seguimiento de terceros, ni perfilado entre sitios. La plataforma de alojamiento puede recopilar estadísticas de tráfico agregadas y anónimas con fines operativos; no te identifican.</p>
<h2>Contenido incrustado de terceros</h2>
<p>Los videos de este sitio se cargan tras una portada con clic para reproducir. YouTube no recibe datos tuyos a menos que pulses reproducir de forma activa. Los enlaces a productos de socios llevan a sitios externos con sus propias políticas.</p>
<h2>Conservación de datos</h2>
<p>Los datos de una consulta se conservan solo el tiempo necesario para atenderla y gestionar cualquier colaboración resultante.</p>
<h2>Tus derechos</h2>
<p>Puedes preguntar qué información se guarda sobre ti, pedir que se corrija o pedir que se elimine, en cualquier momento. Escribe a ${site.email} y se tramitará.</p>
<h2>Cambios</h2>
<p>Si esta política cambia de forma sustancial, la fecha del encabezado cambiará con ella.</p>
<h2>Contacto</h2>
<p>Preguntas sobre privacidad: ${site.email}.</p>`,
  },

  terms: {
    seo: {
      title: 'Términos de Uso | Ben Velazquez',
      description:
        'Términos de uso de benvelazquez.com, incluido el aviso médico y de salud aplicable a todo el contenido de este sitio.',
    },
    hero: { kicker: 'Legal', h1: 'Términos de uso', lede: 'Última actualización: julio de 2026.', ctas: [] },
    body: `<h2>Aviso médico y de salud</h2>
<p>El contenido de este sitio se ofrece con fines informativos y educativos generales. No es consejo médico y no crea una relación profesional–paciente. No sustituye la evaluación, el diagnóstico ni el tratamiento por parte de un profesional sanitario cualificado.</p>
<p>Consulta siempre a un médico antes de comenzar, modificar o interrumpir cualquier programa de ejercicio, rehabilitación o nutrición, especialmente si tienes una lesión, una condición diagnosticada o estás en recuperación de una conmoción cerebral.</p>
<p><strong>La conmoción cerebral es una condición médica.</strong> Nada en este sitio sustituye la evaluación, el diagnóstico ni el alta médica. Si tras un golpe en la cabeza presentas dolor de cabeza que empeora, vómitos repetidos, convulsiones, debilidad o entumecimiento, o confusión o somnolencia crecientes, busca atención de urgencia de inmediato.</p>
<h2>Sin garantía de resultados</h2>
<p>Los testimonios de este sitio describen la experiencia de las personas nombradas que los facilitaron. Los resultados individuales varían según el historial de entrenamiento, la adherencia, el estado médico y muchos otros factores. Nada aquí promete un resultado concreto.</p>
<h2>Uso de este sitio</h2>
<p>Puedes leer, compartir y enlazar este sitio libremente. El contenido, los textos y el diseño son propiedad de Ben Velazquez y no pueden reproducirse comercialmente sin autorización.</p>
<h2>Enlaces externos</h2>
<p>Los enlaces a sitios de terceros, incluidos productos de socios, se ofrecen por comodidad. Esos sitios se rigen por sus propios términos y políticas y no están bajo el control de este sitio.</p>
<h2>Relaciones de afiliación</h2>
<p>Algunos enlaces salientes a productos son enlaces de afiliado. Consulta la <a href="/es/divulgacion-de-afiliados/">divulgación de afiliados</a>.</p>
<h2>Precios</h2>
<p>Los precios mostrados en este sitio son los vigentes en el momento de su publicación y pueden cambiar. Los términos aplicables a cualquier colaboración son los confirmados por escrito en el momento de la contratación.</p>
<h2>Contacto</h2>
<p>Preguntas sobre estos términos: ${site.email}.</p>`,
  },

  disclosure: {
    seo: {
      title: 'Divulgación de Afiliados | Ben Velazquez',
      description:
        'Divulgación completa de las relaciones de afiliación en benvelazquez.com: qué enlaces generan comisión y cómo se eligen los productos.',
    },
    hero: { kicker: 'Legal', h1: 'Divulgación de afiliados', lede: 'Última actualización: julio de 2026.', ctas: [] },
    body: `<p>Algunos enlaces de este sitio —principalmente en la página <a href="/es/lo-que-uso/">Lo que uso</a>— son enlaces de afiliado. Si compras a través de uno, puedo recibir una comisión. A ti no te cuesta nada extra.</p>
<h2>Cómo se listan los productos</h2>
<p>Un producto aparece en este sitio porque lo uso yo mismo y lo recomiendo a quienes entreno. La relación comercial sigue a la recomendación; no la crea. Si dejo de usar algo, sale de la página.</p>
<h2>Relaciones actuales</h2>
<ul>
<li><strong>GTG Energy™</strong> — bolsitas nootrópicas sin nicotina. Relación de afiliación.</li>
<li><strong>27:17 Recovery</strong> — crema de recuperación. Relación de afiliación.</li>
<li><strong>Super Patch</strong> — wearables vibrotáctiles sin fármacos. Relación de afiliación.</li>
</ul>
<h2>Qué no se ve afectado</h2>
<p>Ninguna recomendación de coaching, diseño de programa ni hallazgo de evaluación está influido por una relación comercial. Los suplementos y productos no son un componente del método; son herramientas que algunos clientes encuentran útiles.</p>
<h2>Atletas sujetos a control antidopaje</h2>
<p>Si compites bajo normativa antidopaje, verifica cualquier producto contra la lista vigente de tu federación antes de usarlo, con independencia de cómo se describa aquí o en cualquier otro sitio. La responsabilidad por lo que hay en tu cuerpo es siempre tuya.</p>
<h2>Preguntas</h2>
<p>Escribe a ${site.email}.</p>`,
  },

  /* ====================================================================== */
  notFound: {
    seo: {
      title: 'Página no encontrada | Ben Velazquez',
      description: 'Esa página no existe. Aquí están los lugares más útiles a los que ir: programas, el método, coaching ejecutivo y los insights semanales.',
    },
    hero: {
      kicker: 'Error 404',
      h1: 'Esa página no existe.',
      lede: 'El enlace puede ser antiguo o la dirección estar ligeramente mal. Aquí es donde va la mayoría.',
      ctas: [{ route: 'home', label: 'Volver al inicio' }, APPLY_CTA],
    },
    related: [
      { route: 'executive', label: 'Para ejecutivos', title: 'Coaching de rendimiento ejecutivo' },
      { route: 'athletes', label: 'Para atletas', title: 'Rehabilitación de rendimiento' },
      { route: 'programs', label: 'Precios', title: 'Programas y niveles de membresía' },
      { route: 'insights', label: 'Lectura', title: 'Insights semanales' },
    ],
  },
};

/** Shared credential copy, reused on home and about. */
export const credentialsCopy = {
  bookTag: 'Autor publicado',
  bookBody:
    'Coautor colaborador sobre la ciencia de la fascia — la base del trabajo que hago con cada cliente.',
  bookCta: 'Consigue el libro →',
  credsTag: 'Credenciales',
  creds: [
    'Soma-Terapeuta licenciado (fisioterapia de rendimiento)',
    'Especialista certificado en fuerza y acondicionamiento (CSCS)',
    'Especialista en ejercicio ACSM',
    'Nutricionista de rendimiento deportivo ISSA',
    'Posturología estudiada con el Dr. Bernard Bricot',
    'Miembro — NSCA · ACSM · ISSA',
  ],
  recogTag: 'Reconocido en',
  recogDoc: 'Being: Mariano (FOX Sports)',
};
