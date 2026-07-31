/**
 * Weekly Insights — the editorial layer.
 *
 * Each entry becomes a fully indexed article page in both languages, an
 * entry in the insights index, an item in the RSS feed and a section of
 * llms-full.txt. To publish a new one, add an object to the TOP of this
 * array and run `npm run build`.
 *
 * Every post carries: an answer-first summary (`answer`), long-form `body`,
 * and its own `faqs` — so each article is independently competitive in
 * search and independently quotable by answer engines.
 */

export const insights = [
  {
    slug: { en: 'treat-your-career-like-a-sport', es: 'trata-tu-carrera-como-un-deporte' },
    date: '2026-07-07',
    updated: '2026-07-07',
    tag: { en: 'Longevity', es: 'Longevidad' },
    title: {
      en: 'Treat your career like a sport',
      es: 'Trata tu carrera como un deporte',
    },
    summary: {
      en: 'Elite athletes periodise, recover and protect the body that earns them a living. Executives rarely do — and pay for it in their fifties. Here is how to apply an athlete’s training calendar to a career.',
      es: 'Los atletas de élite periodizan, se recuperan y cuidan el cuerpo que les da de comer. Los ejecutivos rara vez lo hacen, y lo pagan a los cincuenta. Así se aplica el calendario de un atleta a una carrera.',
    },
    /* Meta description — deliberately shorter than `summary`, which is the card excerpt. */
    meta: {
      en: 'Elite athletes periodise, recover and protect the body that earns them a living. How to apply an athlete’s training calendar to a 30-year career.',
      es: 'Los atletas de élite periodizan y se recuperan a propósito. Cómo aplicar el calendario de entrenamiento de un atleta a una carrera de 30 años.',
    },
    answer: {
      en: [
        'Professional athletes never train at maximum intensity year-round. They divide the year into phases — build, compete, recover — because the body adapts during recovery, not during effort. Most executives run one single phase, at full intensity, for thirty years.',
        'Applying an athlete’s calendar to a career means three things: planning deliberate low-intensity periods, treating sleep and mobility as scheduled work rather than leftovers, and measuring capacity in decades rather than quarters.',
      ],
      es: [
        'Los atletas profesionales nunca entrenan a máxima intensidad todo el año. Dividen el año en fases —construcción, competencia, recuperación— porque el cuerpo se adapta durante la recuperación, no durante el esfuerzo. La mayoría de los ejecutivos vive una sola fase, a máxima intensidad, durante treinta años.',
        'Aplicar el calendario de un atleta a una carrera significa tres cosas: planificar períodos deliberados de baja intensidad, tratar el sueño y la movilidad como trabajo agendado y no como sobras, y medir la capacidad en décadas en lugar de trimestres.',
      ],
    },
    body: {
      en: `<p>I have spent twenty years around people whose bodies are their livelihood. The thing that surprises executives most, when they first sit down with me, is how little of a professional athlete's year is spent at full effort.</p>
<h2>Nobody competes for twelve months</h2>
<p>An NHL centre does not skate at playoff intensity in July. A starting pitcher does not throw max-effort bullpens in January. The calendar is divided deliberately: an off-season where structure is rebuilt, a pre-season where capacity is raised, an in-season where the work shifts almost entirely to maintenance and recovery, and a genuine break at the end.</p>
<p>That structure is not indulgence. It is the mechanism. Adaptation happens in the recovery window, not in the session. Remove the recovery window and you remove the adaptation — you are left with accumulated fatigue that looks like effort and produces nothing.</p>
<h2>The executive runs one phase for thirty years</h2>
<p>Now look at how a senior professional actually operates. Every quarter is a competition phase. There is no off-season, no deload, no planned trough. Travel is constant, sleep is the variable that gets sacrificed first, and training — if it happens — is squeezed into whatever thirty minutes survives the calendar.</p>
<p>The body does not care that this is normal for the industry. It responds the same way an athlete's body responds to a season with no rest: the tissue quality degrades, the movement options narrow, and eventually something that had been quietly compensating for years gives out. Usually a lower back. Often a neck. Rarely a surprise, in hindsight.</p>
<h2>What periodising a career actually looks like</h2>
<h3>1. Build low-intensity blocks into the year on purpose</h3>
<p>Not holidays where you answer email from a different time zone — actual reduced-load periods. Two or three weeks, two or three times a year, where the training volume drops, the travel is deliberately thinner and the body gets a window to consolidate. Athletes call this a deload. It is the least glamorous and most reliably effective thing on this page.</p>
<h3>2. Schedule recovery as work, not as reward</h3>
<p>Sleep, decompression and mobility are not what you do once the important things are finished. For a professional athlete they <em>are</em> the important things — the session is simply the stimulus. If mobility work only happens when the day goes well, it will happen four times a month, and four times a month changes nothing.</p>
<h3>3. Measure in decades</h3>
<p>The right question is not "can I sustain this quarter." Anyone can sustain a quarter. The question is whether the way you are training, travelling and sleeping right now is something you could run for another twenty years and still be sharp, mobile and pain-free at the end of it. If the honest answer is no, the plan is not a plan. It is a countdown.</p>
<h2>The trade nobody wants to hear</h2>
<p>Periodising a career means accepting slightly less output in some months in exchange for a much longer runway. Every athlete I have worked with has made that trade, most of them reluctantly, and none of them regret it. The ones who refused it are the ones whose careers ended early — not because they were not talented, but because the body stopped cooperating before the ambition did.</p>
<p>Your career is longer than a playing career. The case for treating it like one is stronger, not weaker.</p>`,
      es: `<p>He pasado veinte años rodeado de personas cuyo cuerpo es su medio de vida. Lo que más sorprende a los ejecutivos, cuando se sientan conmigo por primera vez, es lo poco que un atleta profesional pasa realmente a máximo esfuerzo.</p>
<h2>Nadie compite doce meses</h2>
<p>Un centro de la NHL no patina con intensidad de playoffs en julio. Un pitcher abridor no lanza bullpens al máximo en enero. El calendario se divide de forma deliberada: una pretemporada donde se reconstruye la estructura, una fase donde se eleva la capacidad, una temporada donde el trabajo pasa casi por completo al mantenimiento y la recuperación, y un descanso real al final.</p>
<p>Esa estructura no es un lujo. Es el mecanismo. La adaptación ocurre en la ventana de recuperación, no en la sesión. Si eliminas la ventana de recuperación, eliminas la adaptación: te queda fatiga acumulada que parece esfuerzo y no produce nada.</p>
<h2>El ejecutivo vive una sola fase durante treinta años</h2>
<p>Ahora mira cómo funciona realmente un profesional sénior. Cada trimestre es una fase de competencia. No hay pretemporada, no hay descarga, no hay valle planificado. Los viajes son constantes, el sueño es la primera variable que se sacrifica y el entrenamiento —si ocurre— se comprime en los treinta minutos que sobreviven a la agenda.</p>
<p>Al cuerpo no le importa que esto sea normal en el sector. Responde igual que el cuerpo de un atleta ante una temporada sin descanso: la calidad del tejido se degrada, las opciones de movimiento se estrechan y, con el tiempo, algo que llevaba años compensando en silencio cede. Normalmente una zona lumbar. A menudo un cuello. Rara vez una sorpresa, visto en retrospectiva.</p>
<h2>Cómo se ve realmente periodizar una carrera</h2>
<h3>1. Integra bloques de baja intensidad en el año, a propósito</h3>
<p>No vacaciones en las que respondes correos desde otro huso horario, sino períodos reales de carga reducida. Dos o tres semanas, dos o tres veces al año, donde el volumen de entrenamiento baja, los viajes son deliberadamente más ligeros y el cuerpo recibe una ventana para consolidar. Los atletas lo llaman descarga. Es lo menos glamuroso y lo más fiable de esta página.</p>
<h3>2. Agenda la recuperación como trabajo, no como premio</h3>
<p>El sueño, la descompresión y la movilidad no son lo que haces cuando terminas lo importante. Para un atleta profesional <em>son</em> lo importante: la sesión es solo el estímulo. Si el trabajo de movilidad solo ocurre cuando el día sale bien, ocurrirá cuatro veces al mes, y cuatro veces al mes no cambia nada.</p>
<h3>3. Mide en décadas</h3>
<p>La pregunta correcta no es «¿puedo sostener este trimestre?». Cualquiera sostiene un trimestre. La pregunta es si la forma en que entrenas, viajas y duermes ahora mismo es algo que podrías mantener otros veinte años y seguir lúcido, móvil y sin dolor al final. Si la respuesta honesta es no, el plan no es un plan. Es una cuenta atrás.</p>
<h2>El intercambio que nadie quiere oír</h2>
<p>Periodizar una carrera significa aceptar algo menos de producción en algunos meses a cambio de una pista de aterrizaje mucho más larga. Todos los atletas con los que he trabajado han hecho ese intercambio, la mayoría a regañadientes, y ninguno se arrepiente. Los que lo rechazaron son aquellos cuya carrera terminó pronto: no por falta de talento, sino porque el cuerpo dejó de cooperar antes que la ambición.</p>
<p>Tu carrera es más larga que una carrera deportiva. El argumento para tratarla como tal es más fuerte, no más débil.</p>`,
    },
    faqs: {
      en: [
        {
          q: 'What does “periodisation” mean for someone who isn’t an athlete?',
          a: '<p>Periodisation means deliberately varying training load and recovery across the year instead of holding one constant intensity. For a non-athlete it usually looks like three or four training blocks a year with different emphases, separated by planned lower-load weeks — and travel-heavy months treated as reduced-load months by design rather than by accident.</p>',
        },
        {
          q: 'How many low-intensity weeks should I plan per year?',
          a: '<p>A reasonable starting point is one reduced-load week every six to eight weeks, plus two longer periods of two to three weeks. The precise number depends on your training history, travel volume and sleep quality, which is what a needs analysis establishes.</p>',
        },
        {
          q: 'Isn’t training less going to make me lose progress?',
          a: '<p>No. Adaptation is consolidated during recovery, not during the session. Reduced-load weeks preserve the training you have already done and let the body express it. Athletes lose far more to accumulated fatigue and injury than they ever lose to a planned deload.</p>',
        },
      ],
      es: [
        {
          q: '¿Qué significa «periodización» para alguien que no es atleta?',
          a: '<p>Periodizar significa variar de forma deliberada la carga de entrenamiento y la recuperación a lo largo del año, en lugar de mantener una intensidad constante. Para quien no es atleta suele traducirse en tres o cuatro bloques de entrenamiento al año con énfasis distintos, separados por semanas de carga reducida planificadas, y meses de mucho viaje tratados como meses de carga reducida por diseño y no por accidente.</p>',
        },
        {
          q: '¿Cuántas semanas de baja intensidad debo planificar al año?',
          a: '<p>Un punto de partida razonable es una semana de carga reducida cada seis u ocho semanas, más dos períodos más largos de dos o tres semanas. El número exacto depende de tu historial de entrenamiento, del volumen de viajes y de la calidad del sueño, que es justo lo que establece un análisis de necesidades.</p>',
        },
        {
          q: '¿Entrenar menos no me hará perder progreso?',
          a: '<p>No. La adaptación se consolida durante la recuperación, no durante la sesión. Las semanas de carga reducida preservan el entrenamiento que ya hiciste y permiten que el cuerpo lo exprese. Los atletas pierden mucho más por fatiga acumulada y lesiones que por una descarga planificada.</p>',
        },
      ],
    },
  },

  {
    slug: { en: 'travel-recovery-routine', es: 'rutina-de-recuperacion-para-viajes' },
    date: '2026-06-30',
    updated: '2026-06-30',
    tag: { en: 'Travel', es: 'Viajes' },
    title: {
      en: 'The road doesn’t have to wreck your body',
      es: 'El viaje no tiene por qué destrozarte el cuerpo',
    },
    summary: {
      en: 'A long flight is hours in the worst posture you own, followed by a bed that isn’t yours. You can’t skip the travel — but ten focused minutes on landing undoes most of the damage before it settles in.',
      es: 'Un vuelo largo son horas en la peor postura que tienes, seguidas de una cama que no es la tuya. No puedes evitar viajar, pero diez minutos enfocados al aterrizar deshacen casi todo el daño antes de que se instale.',
    },
    /* Meta description — deliberately shorter than `summary`, which is the card excerpt. */
    meta: {
      en: 'A long flight is hours in the worst posture you own. Ten focused minutes on landing undoes most of the damage before it settles in. Here’s the routine.',
      es: 'Un vuelo largo son horas en la peor postura que tienes. Diez minutos al aterrizar deshacen casi todo el daño antes de que se instale. Esta es la rutina.',
    },
    answer: {
      en: [
        'Long-haul travel compresses the spine, shortens the hip flexors and holds the neck in flexion for hours at a time. The damage is not the flight itself — it is that most people go straight from the seat to a desk without ever interrupting the position.',
        'A ten-minute routine on landing — spinal decompression, hip opening, and a few minutes of walking before you sit again — reverses the majority of it. Done consistently, it is the difference between arriving functional and arriving stiff.',
      ],
      es: [
        'Los vuelos largos comprimen la columna, acortan los flexores de la cadera y mantienen el cuello en flexión durante horas. El daño no es el vuelo en sí: es que la mayoría pasa del asiento al escritorio sin interrumpir nunca la posición.',
        'Una rutina de diez minutos al aterrizar —descompresión de la columna, apertura de cadera y unos minutos caminando antes de volver a sentarte— revierte la mayor parte. Hecha con constancia, es la diferencia entre llegar funcional y llegar rígido.',
      ],
    },
    body: {
      en: `<p>The athletes I work with fly more than almost anyone. Eighty-two-game seasons, back-to-backs in different time zones, charter flights that land at three in the morning. They have solved the travel problem out of necessity, and the solution transfers directly to anyone whose calendar looks like an airline schedule.</p>
<h2>What a long flight actually does</h2>
<p>Six hours in an economy or even a business seat is six hours of axial compression through a spine that has no opportunity to unload. The hips sit in flexion the entire time, which progressively shortens the flexors and tips the pelvis. The head sits forward of the shoulders — over a laptop, a book or a seat-back screen — which loads the cervical spine at several times the weight of the head itself.</p>
<p>None of that is catastrophic on its own. The body tolerates a lot. The problem is what happens next: you land, you get into a car, you go to a hotel, and then you sit down at a desk. The position is never interrupted. What was six hours becomes fourteen, and the tissue starts to accept that shape as the default.</p>
<h2>The ten minutes that matter</h2>
<p>The intervention is not complicated, and it is not a workout. It is a deliberate interruption.</p>
<h3>Decompress the spine</h3>
<p>The single highest-value thing you can do after a flight is create space where the flight created compression. ELDOA postures are built precisely for this — each one targets a specific vertebral segment and creates space in it through your own muscular tension. Three or four minutes, on a hotel floor, no equipment.</p>
<h3>Open the hips</h3>
<p>Hours of flexion need an active counter, not a passive stretch you hold while looking at your phone. Loaded, controlled hip extension work reminds the body that the position exists and restores the range you just spent six hours giving away.</p>
<h3>Walk before you sit again</h3>
<p>Ten minutes on your feet before the first meeting or the first hotel-desk session. Not exercise — circulation, and a reset of the postural pattern before it hardens.</p>
<h2>Do it on landing, not tomorrow</h2>
<p>Timing matters more than duration. Ten minutes within an hour of landing is worth substantially more than forty minutes the following afternoon, because you are interrupting the pattern before the tissue adapts to it. The best travellers I know treat it like customs: an unavoidable step between the plane and the rest of the trip.</p>
<h2>The version that survives a real schedule</h2>
<p>Any routine that requires equipment, a gym, or thirty free minutes will not survive a real travel week. That is why the programme I write for travelling clients fits in a hotel room, needs nothing but floor space, and takes ten minutes. A routine you actually do at forty percent quality beats a perfect one you skip.</p>`,
      es: `<p>Los atletas con los que trabajo vuelan más que casi nadie. Temporadas de ochenta y dos partidos, dobles jornadas en husos horarios distintos, vuelos chárter que aterrizan a las tres de la madrugada. Han resuelto el problema del viaje por necesidad, y la solución se traslada directamente a cualquiera cuya agenda parezca un horario de aerolínea.</p>
<h2>Qué hace realmente un vuelo largo</h2>
<p>Seis horas en un asiento de turista, o incluso de business, son seis horas de compresión axial sobre una columna que no tiene ocasión de descargar. Las caderas permanecen en flexión todo el tiempo, lo que acorta progresivamente los flexores e inclina la pelvis. La cabeza queda por delante de los hombros —sobre un portátil, un libro o una pantalla— lo que carga la columna cervical con varias veces el peso de la propia cabeza.</p>
<p>Nada de eso es catastrófico por sí solo. El cuerpo tolera mucho. El problema es lo que viene después: aterrizas, subes a un coche, vas a un hotel y te sientas en un escritorio. La posición nunca se interrumpe. Lo que eran seis horas se convierte en catorce, y el tejido empieza a aceptar esa forma como la predeterminada.</p>
<h2>Los diez minutos que importan</h2>
<p>La intervención no es complicada, y no es un entrenamiento. Es una interrupción deliberada.</p>
<h3>Descomprime la columna</h3>
<p>Lo más valioso que puedes hacer tras un vuelo es crear espacio donde el vuelo creó compresión. Las posturas ELDOA están construidas exactamente para esto: cada una apunta a un segmento vertebral concreto y crea espacio en él mediante tu propia tensión muscular. Tres o cuatro minutos, en el suelo de un hotel, sin material.</p>
<h3>Abre las caderas</h3>
<p>Horas de flexión necesitan un contrapeso activo, no un estiramiento pasivo que sostienes mientras miras el móvil. El trabajo de extensión de cadera, cargado y controlado, le recuerda al cuerpo que esa posición existe y recupera el rango que acabas de ceder durante seis horas.</p>
<h3>Camina antes de volver a sentarte</h3>
<p>Diez minutos de pie antes de la primera reunión o de la primera sesión en el escritorio del hotel. No es ejercicio: es circulación y un reinicio del patrón postural antes de que se endurezca.</p>
<h2>Hazlo al aterrizar, no mañana</h2>
<p>El momento importa más que la duración. Diez minutos dentro de la hora siguiente al aterrizaje valen bastante más que cuarenta minutos la tarde siguiente, porque estás interrumpiendo el patrón antes de que el tejido se adapte a él. Los que mejor viajan lo tratan como la aduana: un paso inevitable entre el avión y el resto del viaje.</p>
<h2>La versión que sobrevive a una agenda real</h2>
<p>Cualquier rutina que exija material, un gimnasio o treinta minutos libres no sobrevivirá a una semana real de viajes. Por eso el programa que escribo para clientes que viajan cabe en una habitación de hotel, no necesita más que espacio en el suelo y dura diez minutos. Una rutina que de verdad haces al cuarenta por ciento de calidad gana a una perfecta que te saltas.</p>`,
    },
    faqs: {
      en: [
        {
          q: 'What should I do on the plane itself?',
          a: '<p>Stand up and walk once an hour if the flight allows it, keep the screen at eye level rather than in your lap, and avoid sleeping with the neck unsupported and rotated. These reduce the load, but they do not replace the routine on landing.</p>',
        },
        {
          q: 'Does the routine need any equipment?',
          a: '<p>No. The travel routine I write for clients requires only floor space. That is deliberate — anything requiring a gym or props does not survive a real travel schedule.</p>',
        },
        {
          q: 'How soon after landing should I do it?',
          a: '<p>Within about an hour, before you sit down again. Interrupting the pattern early is worth more than doing a longer session the next day.</p>',
        },
      ],
      es: [
        {
          q: '¿Qué debo hacer durante el vuelo?',
          a: '<p>Levántate y camina una vez por hora si el vuelo lo permite, mantén la pantalla a la altura de los ojos en lugar de en el regazo y evita dormir con el cuello sin apoyo y rotado. Esto reduce la carga, pero no sustituye la rutina al aterrizar.</p>',
        },
        {
          q: '¿La rutina necesita material?',
          a: '<p>No. La rutina de viaje que escribo para mis clientes solo requiere espacio en el suelo. Es deliberado: cualquier cosa que exija gimnasio o accesorios no sobrevive a una agenda real de viajes.</p>',
        },
        {
          q: '¿Cuánto tiempo después de aterrizar debo hacerla?',
          a: '<p>Dentro de la primera hora, antes de volver a sentarte. Interrumpir el patrón pronto vale más que hacer una sesión más larga al día siguiente.</p>',
        },
      ],
    },
  },

  {
    slug: { en: 'recovery-is-a-skill', es: 'la-recuperacion-es-una-habilidad' },
    date: '2026-06-23',
    updated: '2026-06-23',
    tag: { en: 'Recovery', es: 'Recuperación' },
    title: {
      en: 'Recovery isn’t rest. It’s a skill.',
      es: 'La recuperación no es descanso. Es una habilidad.',
    },
    summary: {
      en: 'The executives who last aren’t the ones who train hardest — they’re the ones who recover on purpose. Recovery is a trainable skill with inputs you can control, not a reward for finishing the work.',
      es: 'Los ejecutivos que duran no son los que entrenan más fuerte, sino los que se recuperan a propósito. La recuperación es una habilidad entrenable con variables que puedes controlar, no un premio por terminar el trabajo.',
    },
    /* Meta description — deliberately shorter than `summary`, which is the card excerpt. */
    meta: {
      en: 'Recovery is not the absence of work. It is a trainable skill with four inputs you control: sleep, breathing, tissue quality and parasympathetic tone.',
      es: 'La recuperación no es ausencia de trabajo. Es una habilidad entrenable con cuatro variables: sueño, respiración, calidad del tejido y tono parasimpático.',
    },
    answer: {
      en: [
        'Recovery is not the absence of work. It is an active, trainable process with specific inputs: sleep architecture, breathing mechanics, tissue quality and parasympathetic tone. Each of those can be improved deliberately, and each of them decays if left to chance.',
        'Treating recovery as a skill means scheduling it, measuring it and progressing it the same way you would progress a lift — rather than assuming it happens automatically whenever you stop.',
      ],
      es: [
        'La recuperación no es la ausencia de trabajo. Es un proceso activo y entrenable con variables concretas: arquitectura del sueño, mecánica respiratoria, calidad del tejido y tono parasimpático. Cada una puede mejorarse de forma deliberada, y cada una se degrada si se deja al azar.',
        'Tratar la recuperación como una habilidad significa agendarla, medirla y progresarla igual que progresarías un levantamiento, en lugar de asumir que ocurre sola cuando te detienes.',
      ],
    },
    body: {
      en: `<p>Ask most people what recovery is and they will describe an absence — not training, not working, sitting down. That definition is why so many capable, disciplined people are chronically under-recovered. They are waiting for recovery to happen to them.</p>
<h2>Recovery has inputs</h2>
<p>In a professional environment, recovery is managed as actively as training. There are four inputs I work on with every client, and none of them is passive.</p>
<h3>Sleep architecture, not sleep hours</h3>
<p>Eight hours of fragmented, late, alcohol-affected sleep is not eight hours of recovery. What matters is consistency of timing, the depth of the first two cycles, and the conditions — temperature, darkness, the two hours before bed. Fixing the schedule usually produces a bigger change than adding an hour.</p>
<h3>Breathing mechanics</h3>
<p>People under sustained pressure default to shallow, upper-chest breathing, which keeps the nervous system in a low-grade sympathetic state all day. Restoring diaphragmatic mechanics is genuinely trainable, takes a few minutes a day, and changes how quickly the body downshifts after stress.</p>
<h3>Tissue quality</h3>
<p>Fascia responds to what you repeatedly ask of it. Sitting for eleven hours a day is a request, and the body honours it. Decompression work and myofascial stretching are how you make a competing request — which is why ELDOA sits at the centre of the recovery work I prescribe.</p>
<h3>Parasympathetic tone</h3>
<p>The ability to move from high output into genuine rest is trainable. People who never practise it stay half-activated through the evening, sleep poorly, and start the next day with a deficit that compounds.</p>
<h2>Why the hardest workers recover worst</h2>
<p>There is a pattern I see constantly. The people with the most discipline apply all of it to output and none of it to recovery, because recovery feels like the opposite of discipline. So the training is excellent, the diet is excellent, and the body is still falling apart — because the one variable that consolidates all the others was never given a slot in the calendar.</p>
<p>The fix is not to work less. It is to move recovery from the category of "reward" into the category of "work". Something that appears in the calendar, has a defined protocol, and does not get cancelled when the week gets difficult.</p>
<h2>The debt metaphor is literal</h2>
<p>The body genuinely does keep a ledger. Under-recovery shows up first as stiffness and poor sleep, then as a nagging injury that will not resolve, then as the thing that takes you out for three months. By the time it is a diagnosis, it has usually been an unpaid debt for years.</p>
<p>Build it in, or the body collects with interest.</p>`,
      es: `<p>Pregunta a la mayoría qué es la recuperación y describirán una ausencia: no entrenar, no trabajar, sentarse. Esa definición es la razón por la que tanta gente capaz y disciplinada está crónicamente mal recuperada. Están esperando a que la recuperación les ocurra.</p>
<h2>La recuperación tiene variables</h2>
<p>En un entorno profesional, la recuperación se gestiona con la misma actividad que el entrenamiento. Hay cuatro variables que trabajo con cada cliente, y ninguna es pasiva.</p>
<h3>Arquitectura del sueño, no horas de sueño</h3>
<p>Ocho horas de sueño fragmentado, tardío y afectado por el alcohol no son ocho horas de recuperación. Lo que importa es la consistencia del horario, la profundidad de los dos primeros ciclos y las condiciones: temperatura, oscuridad y las dos horas previas a acostarse. Arreglar el horario suele producir un cambio mayor que añadir una hora.</p>
<h3>Mecánica respiratoria</h3>
<p>Las personas bajo presión sostenida respiran de forma superficial y alta, lo que mantiene el sistema nervioso en un estado simpático de bajo grado todo el día. Restaurar la mecánica diafragmática es genuinamente entrenable, lleva unos minutos al día y cambia la velocidad con la que el cuerpo baja de revoluciones tras el estrés.</p>
<h3>Calidad del tejido</h3>
<p>La fascia responde a lo que le pides de forma repetida. Estar sentado once horas al día es una petición, y el cuerpo la atiende. El trabajo de descompresión y el estiramiento miofascial son la forma de hacer una petición contraria, y por eso ELDOA está en el centro del trabajo de recuperación que prescribo.</p>
<h3>Tono parasimpático</h3>
<p>La capacidad de pasar de alto rendimiento a descanso real es entrenable. Quien nunca la practica se queda medio activado toda la tarde, duerme mal y empieza el día siguiente con un déficit que se acumula.</p>
<h2>Por qué los más trabajadores se recuperan peor</h2>
<p>Hay un patrón que veo constantemente. Las personas con más disciplina la aplican toda a la producción y ninguna a la recuperación, porque recuperarse se siente como lo contrario de la disciplina. Así que el entrenamiento es excelente, la dieta es excelente, y el cuerpo sigue rompiéndose, porque la única variable que consolida todas las demás nunca tuvo un hueco en el calendario.</p>
<p>La solución no es trabajar menos. Es mover la recuperación de la categoría «premio» a la categoría «trabajo». Algo que aparece en la agenda, tiene un protocolo definido y no se cancela cuando la semana se complica.</p>
<h2>La metáfora de la deuda es literal</h2>
<p>El cuerpo lleva una contabilidad real. La falta de recuperación aparece primero como rigidez y mal sueño, después como una lesión persistente que no termina de resolverse, y después como aquello que te deja fuera tres meses. Cuando ya es un diagnóstico, normalmente lleva años siendo una deuda impagada.</p>
<p>Intégrala, o el cuerpo la cobrará con intereses.</p>`,
    },
    faqs: {
      en: [
        {
          q: 'How much time does a real recovery practice take?',
          a: '<p>For most clients, ten to fifteen minutes a day of structured work — decompression, breathing and mobility — plus a consistent sleep schedule. The consistency matters far more than the duration of any single session.</p>',
        },
        {
          q: 'Are recovery wearables worth using?',
          a: '<p>They are useful for spotting trends — particularly sleep timing and resting heart rate drift. They are much less useful as a daily verdict. Treat the weekly trend as signal and the daily score as noise.</p>',
        },
        {
          q: 'What is the single highest-value change?',
          a: '<p>A consistent sleep and wake time, seven days a week. It is unglamorous, it is free, and it improves nearly every other recovery variable downstream.</p>',
        },
      ],
      es: [
        {
          q: '¿Cuánto tiempo requiere una práctica real de recuperación?',
          a: '<p>Para la mayoría de mis clientes, entre diez y quince minutos diarios de trabajo estructurado —descompresión, respiración y movilidad— más un horario de sueño constante. La constancia importa mucho más que la duración de cualquier sesión aislada.</p>',
        },
        {
          q: '¿Merecen la pena los wearables de recuperación?',
          a: '<p>Son útiles para detectar tendencias, sobre todo el horario de sueño y la deriva de la frecuencia cardíaca en reposo. Son mucho menos útiles como veredicto diario. Trata la tendencia semanal como señal y la puntuación diaria como ruido.</p>',
        },
        {
          q: '¿Cuál es el cambio de mayor valor?',
          a: '<p>Un horario constante para acostarse y levantarse, los siete días de la semana. No es glamuroso, es gratis y mejora casi todas las demás variables de recuperación.</p>',
        },
      ],
    },
  },

  {
    slug: { en: 'your-chair-is-undoing-your-training', es: 'tu-silla-deshace-tu-entrenamiento' },
    date: '2026-06-16',
    updated: '2026-06-16',
    tag: { en: 'Posture', es: 'Postura' },
    title: {
      en: 'Your chair is undoing your training',
      es: 'Tu silla está deshaciendo tu entrenamiento',
    },
    summary: {
      en: 'Eleven hours a day folded over a screen teaches the body one shape. One workout cannot outvote eleven hours — but a ninety-minute reset can.',
      es: 'Once horas al día encorvado frente a una pantalla le enseñan al cuerpo una sola forma. Un entrenamiento no puede con once horas, pero un reinicio cada noventa minutos sí.',
    },
    /* Meta description — deliberately shorter than `summary`, which is the card excerpt. */
    meta: {
      en: 'Eleven hours a day folded over a screen teaches the body one shape. One workout can’t outvote eleven hours — but a ninety-minute reset can.',
      es: 'Once horas al día encorvado frente a una pantalla enseñan al cuerpo una sola forma. Un entrenamiento no puede con once horas; un reinicio cada 90 min sí.',
    },
    answer: {
      en: [
        'The body adapts to whatever position it spends the most time in. A one-hour training session cannot outweigh eleven hours of sitting, because duration — not intensity — drives postural adaptation.',
        'The effective intervention is frequency, not volume: a short spinal decompression and hip-opening reset every ninety minutes during the working day changes the input the body is actually responding to.',
      ],
      es: [
        'El cuerpo se adapta a la posición en la que pasa más tiempo. Una sesión de entrenamiento de una hora no puede con once horas sentado, porque lo que impulsa la adaptación postural es la duración, no la intensidad.',
        'La intervención eficaz es la frecuencia, no el volumen: un breve reinicio de descompresión de la columna y apertura de cadera cada noventa minutos durante la jornada cambia el estímulo al que el cuerpo realmente responde.',
      ],
    },
    body: {
      en: `<p>This is the most common conversation I have with executive clients, and it usually starts with frustration: "I train five days a week and my back still hurts." It almost always does. The training is not the problem, and more of it is not the answer.</p>
<h2>Duration beats intensity for posture</h2>
<p>Tissue adapts to sustained input. An hour of well-programmed training is a strong signal, but eleven hours of thoracic flexion, forward head position and hip flexion is a much longer one. The body is not confused about which instruction to follow — it follows the one you repeat all day.</p>
<p>This is why postural pain so rarely responds to "train harder". You are trying to outvote eleven hours with one, and the arithmetic does not work.</p>
<h2>What eleven hours of sitting actually produces</h2>
<ul>
<li><strong>Compression through the lumbar spine</strong> — seated loading exceeds standing loading, and the discs have no unloading window.</li>
<li><strong>Shortened hip flexors and a tilted pelvis</strong> — which then changes how you stand, walk and lift, long after you leave the chair.</li>
<li><strong>Forward head carriage</strong> — every inch forward multiplies the effective load on the cervical spine and the muscles holding it there.</li>
<li><strong>Reduced fascial glide</strong> — connective tissue that is not taken through range becomes less able to move, which is what "stiff" actually means.</li>
</ul>
<h2>The ninety-minute rule</h2>
<p>The fix is frequency. Every ninety minutes, interrupt the shape:</p>
<ol>
<li><strong>Stand and decompress.</strong> Sixty to ninety seconds of a targeted decompression posture creates space where sitting created compression.</li>
<li><strong>Open the hips.</strong> Active extension, not a passive stretch — the body needs to be reminded the range exists under control.</li>
<li><strong>Reset the head and shoulders.</strong> Ten seconds of drawing the head back over the shoulders, repeated often, does more than one long session of it.</li>
</ol>
<p>Total cost: about two minutes, five or six times a day. That is not a training programme, and it is not meant to be. It is an interruption — the thing that stops eleven hours from being eleven uninterrupted hours.</p>
<h2>Small resets beat big corrections</h2>
<p>By the time a postural problem is painful enough to schedule an appointment for, it has usually been developing for years, and unwinding it takes months. The people who never get there are not the ones with the best training programme. They are the ones who never let the position accumulate in the first place.</p>
<p>Your chair is a training stimulus whether you intend it or not. The only question is whether anything is competing with it.</p>`,
      es: `<p>Esta es la conversación más frecuente que tengo con clientes ejecutivos, y suele empezar con frustración: «entreno cinco días a la semana y la espalda me sigue doliendo». Casi siempre es así. El entrenamiento no es el problema, y más entrenamiento no es la solución.</p>
<h2>Para la postura, la duración gana a la intensidad</h2>
<p>El tejido se adapta al estímulo sostenido. Una hora de entrenamiento bien programado es una señal fuerte, pero once horas de flexión torácica, cabeza adelantada y flexión de cadera son una señal mucho más larga. El cuerpo no está confundido sobre qué instrucción seguir: sigue la que repites todo el día.</p>
<p>Por eso el dolor postural rara vez responde a «entrena más fuerte». Estás intentando ganarle a once horas con una, y la aritmética no funciona.</p>
<h2>Qué produce realmente estar once horas sentado</h2>
<ul>
<li><strong>Compresión en la columna lumbar</strong>: la carga sentado supera a la de estar de pie, y los discos no tienen ventana de descarga.</li>
<li><strong>Flexores de cadera acortados y pelvis inclinada</strong>: lo que cambia cómo te pones de pie, caminas y levantas peso mucho después de dejar la silla.</li>
<li><strong>Cabeza adelantada</strong>: cada centímetro hacia delante multiplica la carga efectiva sobre la columna cervical y sobre los músculos que la sostienen.</li>
<li><strong>Menor deslizamiento fascial</strong>: el tejido conectivo que no recorre su rango pierde capacidad de moverse, que es lo que significa realmente «rigidez».</li>
</ul>
<h2>La regla de los noventa minutos</h2>
<p>La solución es la frecuencia. Cada noventa minutos, interrumpe la forma:</p>
<ol>
<li><strong>Levántate y descomprime.</strong> De sesenta a noventa segundos de una postura de descompresión dirigida crean espacio donde estar sentado creó compresión.</li>
<li><strong>Abre las caderas.</strong> Extensión activa, no un estiramiento pasivo: hay que recordarle al cuerpo que ese rango existe bajo control.</li>
<li><strong>Reajusta cabeza y hombros.</strong> Diez segundos llevando la cabeza atrás sobre los hombros, repetidos a menudo, hacen más que una sola sesión larga.</li>
</ol>
<p>Coste total: unos dos minutos, cinco o seis veces al día. No es un programa de entrenamiento, ni pretende serlo. Es una interrupción: lo que impide que once horas sean once horas ininterrumpidas.</p>
<h2>Los pequeños reinicios ganan a las grandes correcciones</h2>
<p>Cuando un problema postural duele lo suficiente como para pedir cita, normalmente lleva años desarrollándose, y deshacerlo lleva meses. Quienes nunca llegan ahí no son los que tienen el mejor programa de entrenamiento. Son los que nunca dejaron que la posición se acumulara.</p>
<p>Tu silla es un estímulo de entrenamiento, lo pretendas o no. La única pregunta es si algo está compitiendo con ella.</p>`,
    },
    faqs: {
      en: [
        {
          q: 'Does a standing desk solve this?',
          a: '<p>Partially. A standing desk removes some spinal compression, but standing still for eleven hours is also a single sustained position. Alternating is better than either extreme, and neither replaces the ninety-minute reset.</p>',
        },
        {
          q: 'Will a better chair fix my back?',
          a: '<p>A well-set-up chair reduces the load, but no chair changes the fact that one position held for eleven hours is the dominant input. Equipment helps at the margins; frequency of interruption is what actually moves the needle.</p>',
        },
        {
          q: 'How long before the resets make a difference?',
          a: '<p>Most people notice less end-of-day stiffness within one to two weeks. Structural change — how you stand and move by default — takes longer, typically two to three months of consistent practice.</p>',
        },
      ],
      es: [
        {
          q: '¿Un escritorio de pie resuelve esto?',
          a: '<p>Parcialmente. Un escritorio de pie elimina parte de la compresión de la columna, pero estar de pie inmóvil once horas también es una única posición sostenida. Alternar es mejor que cualquiera de los extremos, y ninguno sustituye al reinicio cada noventa minutos.</p>',
        },
        {
          q: '¿Una silla mejor me arreglará la espalda?',
          a: '<p>Una silla bien ajustada reduce la carga, pero ninguna silla cambia el hecho de que una sola posición mantenida once horas es el estímulo dominante. El equipamiento ayuda en los márgenes; lo que de verdad marca la diferencia es la frecuencia de interrupción.</p>',
        },
        {
          q: '¿Cuánto tardan los reinicios en notarse?',
          a: '<p>La mayoría nota menos rigidez al final del día en una o dos semanas. El cambio estructural —cómo te pones de pie y te mueves por defecto— tarda más, normalmente de dos a tres meses de práctica constante.</p>',
        },
      ],
    },
  },
];
