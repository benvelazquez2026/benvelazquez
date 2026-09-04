/**
 * English page copy.
 *
 * One entry per route key. Each page carries:
 *   seo     — title (<=60 chars) and meta description (<=158 chars)
 *   hero    — kicker, h1, lede, CTAs
 *   answer  — answer-first paragraphs (the AEO block, marked speakable)
 *   facts   — optional at-a-glance definition list
 *   faqs    — visible accordion, mirrored into FAQPage schema
 *   related — internal link cluster
 *   cta     — closing conversion band
 *
 * Keep the Spanish file (content.es.js) structurally identical.
 */

import { site } from './site.js';

const APPLY_CTA = { route: 'apply', label: 'Book your free analysis' };
const PROGRAMS_CTA = { route: 'programs', label: 'See the programs', ghost: true };

export const content = {
  /* ====================================================================== */
  home: {
    seo: {
      title: 'Ben Velazquez | Performance Rehabilitation & ELDOA, NYC',
      description:
        'Performance rehabilitation, ELDOA and strength coaching in NYC. Trusted by NFL, NHL and MLB athletes — now taking a limited number of executive clients.',
    },
    hero: {
      kicker: 'NYC · Performance Rehabilitation',
      h1: 'The coach the world’s best athletes <span class="signal">fly in to see.</span>',
      lede: 'Award-winning performance rehabilitation and a recognised expert in concussion exercise solutions — now taking a limited number of executive clients.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
    stats: [
      { num: '20+', lbl: 'Years working with elite performers' },
      { num: 'NFL · NHL · MLB', lbl: 'Pro athletes across leagues' },
      { num: '1,000+', lbl: 'Professionals trained through his seminars' },
    ],
    proofLabel: 'Trusted by elite performers',
    answer: [
      'Ben Velazquez is a New York City performance rehabilitation specialist and strength coach with more than 20 years working with elite performers, including athletes across the NFL, NHL and MLB. He is a co-contributing author of <em>Fascia: Clinical Applications for Health and Human Performance</em>, a licensed Soma-Therapist and a Certified Strength &amp; Conditioning Specialist.',
      'He works with three groups: professional and developing athletes, time-poor executives, and people recovering from concussion. Every engagement begins with a free 20-minute Performance Needs Analysis, and work is delivered virtually worldwide or in person in New York City, in English or Spanish.',
    ],
    philosophy: {
      kicker: 'Philosophy',
      heading: 'Sport is sport! Sport is not health!',
      body: `<p>I repeat that mantra every time an athlete walks through the door.</p>
<p>My job as their strength coach is, above all, to bring a healthy athlete onto the field.</p>
<p>First, correct what isn’t right. Tune the engine. Structural balance is the priority.</p>
<p>Only then do we shift gears and focus on the qualities they need to raise their performance.</p>
<p>The line between therapist and strength coach has always been blurred. Today more than ever!</p>
<p>The challenge with every athlete is knowing how to combine the right dose of science, experience, and art into preparation built just for them.</p>
<p><span class="hl">That… is my specialty.</span></p>
<p>My passion has always been to empower my athletes! To give them the key tools that keep them on the field. To lower the risk of injury and make them better athletes.</p>
<p>With every rep, every set, and every drop of sweat… together we push to get better.</p>
<p><span class="hl">The weight room is our laboratory — it’s where we do the work that lets us thrive!</span></p>`,
    },
    results: { kicker: '01 — Results', heading: 'The people who can train with anyone train with Ben.' },
    inAction: {
      kicker: 'In action',
      heading: 'Inside the work.',
      lede: 'A look at the training itself — starting with sessions alongside Connor McDavid.',
    },
    who: {
      kicker: '02 — Who I work with',
      heading: 'Three kinds of people. One standard of care.',
      lede: 'The same methods that keep professional athletes at the top now work for the leaders who run the rest of the world.',
      cards: [
        {
          idx: 'A',
          feature: true,
          tag: 'Now open',
          heading: 'Executives',
          body: 'Sustained energy through brutal schedules. Freedom from the back and neck pain of desks and plane seats. Resilience, longevity, and the edge of training the way the pros do.',
          route: 'executive',
          link: 'Executive performance →',
        },
        {
          idx: 'B',
          heading: 'Athletes',
          body: 'Recover faster, move better, and extend your career. Performance rehabilitation and injury prevention built around how your body actually works.',
          route: 'athletes',
          link: 'Athletic performance →',
        },
        {
          idx: 'C',
          heading: 'Concussion recovery',
          body: 'Exercise-based concussion solutions from the onset of injury. A holistic, team-based approach focused not just on return — but on keeping you there.',
          route: 'concussion',
          link: 'The concussion program →',
        },
      ],
    },
    programs: {
      kicker: '03 — Programs',
      heading: 'Start where you are. Access scales with commitment.',
      lede: 'A clear path from a self-guided start to direct, private work. The top tiers are intentionally limited.',
      note: 'Every place on the team begins with a free Performance Needs Analysis.',
    },
    method: {
      kicker: '04 — Method',
      heading: 'Most training breaks the body down. This builds it back up.',
      steps: [
        {
          n: '01',
          h: 'Assess, don’t guess',
          p: 'Every program starts from how your body actually moves, loads, and recovers — measured, not assumed.',
        },
        {
          n: '02',
          h: 'ELDOA &amp; fascial work',
          p: 'Targeted self-normalising postures that decompress the spine and joints — the daily practice elite athletes swear by.',
        },
        {
          n: '03',
          h: 'Built to last',
          p: 'Recovery and preparation treated as one system, so performance holds up under real-world stress and travel.',
        },
      ],
      vlabel: 'Performance · measured',
      vbig: 'Precision over intensity.',
    },
    credentials: {
      kicker: 'Credentials & recognition',
      heading: 'Credentialed. Published. Trusted at the top.',
      lede: 'Award-winning and nationally recognised — grounded in the science, not just the reps.',
    },
    analysis: {
      kicker: 'Free · By application',
      heading: 'Try out for a place on the Executive Team.',
      lede: 'Every place on the team starts the same way: a free 20-minute virtual Performance Needs Analysis. I find what’s holding your body back — and you leave with a clear plan to fix it, whether or not you join the team.',
      rows: [
        { n: '01', b: 'The analysis', t: 'A focused 20-minute virtual assessment of how you move, load, and recover.' },
        {
          n: '02',
          b: 'Your takeaway',
          t: 'A personalised snapshot: the two or three things most limiting you, and where to start. Yours to keep.',
        },
        { n: '03', b: 'The tryout', t: 'If it’s a fit, you’re offered one of a limited number of positions on the roster.' },
      ],
      spots: `Roster spots open this month: ${site.roster.openSpots}`,
      cta: 'Apply for your tryout',
    },
    insights: {
      kicker: 'Weekly insights',
      heading: 'Notes from the field.',
      lede: 'Short, practical thoughts on performance, recovery, and longevity — a new one most weeks.',
      all: 'All insights →',
    },
    faqs: [
      {
        q: 'Who is Ben Velazquez?',
        a: '<p>Ben Velazquez is a performance rehabilitation specialist and strength coach based in New York City, with more than 20 years working with elite performers. He has worked with athletes across the NFL, NHL and MLB, is a co-contributing author of <em>Fascia: Clinical Applications for Health and Human Performance</em>, and is a recognised expert in exercise-based concussion solutions.</p>',
      },
      {
        q: 'Who does Ben work with?',
        a: '<p>Three groups: professional and developing athletes, executives with demanding travel and desk schedules, and people recovering from concussion. The assessment-first method is the same for all three; only the programming changes.</p>',
      },
      {
        q: 'Does Ben work with clients remotely?',
        a: '<p>Yes. Most executive work is delivered virtually and travels with the client. In-person work in New York City is available through the Concierge track, which begins with a full-day in-person Performance Day.</p>',
      },
      {
        q: 'How do I start working with Ben?',
        a: `<p>Every engagement begins with a free 20-minute virtual Performance Needs Analysis. You leave with a personalised snapshot of the two or three things most limiting you and where to start — whether or not you go on to work together. <a href="/apply/">Apply for your analysis</a>.</p>`,
      },
      {
        q: 'What languages does Ben coach in?',
        a: '<p>English and Spanish. Sessions, programming and written materials are available in either language.</p>',
      },
      {
        q: 'What does it cost to work with Ben?',
        a: `<p>There are three tiers. The Executive Reset is a self-guided program at $${site.pricing.resetDisplay} one-time. Core Executive Performance is $${site.pricing.core.toLocaleString('en-US')}/month on a quarterly commitment. Concierge Private Performance is $${site.pricing.concierge.toLocaleString('en-US')}/month by application, limited to ${site.roster.conciergeSeats} positions, and begins with a required Performance Day from $${site.pricing.performanceDay.toLocaleString('en-US')}. Full detail is on the <a href="/programs/">programs page</a>.</p>`,
      },
    ],
    related: [
      { route: 'executive', label: 'For executives', title: 'Executive performance coaching' },
      { route: 'eldoa', label: 'The practice', title: 'What ELDOA is and how it works' },
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'about', label: 'Background', title: 'About Ben Velazquez' },
    ],
    cta: {
      kicker: 'The tryout',
      heading: 'Every place on the team starts with a free analysis.',
      body: 'Twenty minutes, virtual, no cost. You leave with a plan you can use — whether or not we work together.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  executive: {
    seo: {
      title: 'Executive Performance Coaching in NYC | Ben Velazquez',
      description:
        'Private performance coaching for time-poor executives: ELDOA, decompression and strength programming that travels with you. NYC and virtual worldwide.',
    },
    hero: {
      kicker: 'Now open · Limited roster',
      h1: 'Train the way the pros do — around a schedule that doesn’t stop.',
      lede: 'Sustained energy through brutal weeks. Freedom from the back and neck pain of desks and plane seats. The same performance rehabilitation that keeps professional athletes on the field, built for the way you actually live.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
    answer: [
      'Executive performance coaching with Ben Velazquez is a private, assessment-led program for senior professionals who travel constantly and sit for most of the day. It combines ELDOA spinal decompression, fascial work and strength programming into a routine that fits a hotel room and a fifteen-minute gap.',
      'Core membership is $2,300 per month on a quarterly commitment and includes four virtual sessions, custom programming refreshed monthly, bounded async access with a 24-hour weekday response, and quarterly reassessment. Every place begins with a free 20-minute Performance Needs Analysis.',
    ],
    facts: [
      { k: 'Format', v: 'Virtual worldwide · in person in NYC' },
      { k: 'Core investment', v: '$2,300 / month' },
      { k: 'Commitment', v: 'Quarterly' },
      { k: 'Entry point', v: 'Free 20-min needs analysis' },
      { k: 'Languages', v: 'English · Spanish' },
      { k: 'Concierge roster', v: '7 positions, by application' },
    ],
    problem: {
      kicker: 'The problem',
      heading: 'One hour of training cannot outvote eleven hours in a chair.',
      body: `<p>Most senior professionals are not under-trained. They are under-recovered and over-compressed. Eleven hours a day folded over a screen, a hundred flights a year, and sleep treated as the variable that gives way first.</p>
<p>The body adapts to whatever position it holds longest. That is why postural pain so rarely responds to training harder — you are trying to outvote eleven hours with one, and the arithmetic does not work.</p>
<p>The answer is not more volume. It is precision: identifying the two or three restrictions actually limiting you, then interrupting the pattern often enough that the body stops treating a chair as its default shape.</p>`,
    },
    outcomes: {
      kicker: 'What changes',
      heading: 'What executives actually come to me for.',
      cards: [
        {
          idx: '01',
          heading: 'Back and neck pain that stops recurring',
          body: 'Decompression work that addresses the specific segment involved, rather than general stretching that never quite lands.',
        },
        {
          idx: '02',
          heading: 'Energy that survives the week',
          body: 'Recovery treated as scheduled work — sleep architecture, breathing mechanics and tissue quality, not just harder sessions.',
        },
        {
          idx: '03',
          heading: 'A routine that travels',
          body: 'Programming designed for a hotel room and a carry-on. If it needs a gym you will not do it, so it doesn’t.',
        },
        {
          idx: '04',
          heading: 'Range you keep',
          body: 'Mobility built through active, loaded work so it holds under stress — rather than passive stretching that resets by Tuesday.',
        },
        {
          idx: '05',
          heading: 'A body that lasts the career',
          body: 'Periodised across the year the way an athlete’s is, so capacity is measured in decades rather than quarters.',
        },
        {
          idx: '06',
          heading: 'Access to a vetted network',
          body: 'Coordinated referrals to nutrition, physiotherapy and medical professionals I actually work with.',
        },
      ],
    },
    how: {
      kicker: 'How it runs',
      heading: 'What a month on the team looks like.',
      steps: [
        {
          n: '01',
          h: 'Full needs analysis',
          p: 'A deep movement and postural assessment establishes the baseline — how you move, load and recover, measured rather than assumed.',
        },
        {
          n: '02',
          h: 'Four virtual sessions',
          p: 'Programming, ELDOA and rehabilitation coaching, scheduled around your week rather than a fixed slot.',
        },
        {
          n: '03',
          h: 'Programming that travels',
          p: 'A custom program refreshed monthly, written for the equipment you will actually have.',
        },
        {
          n: '04',
          h: 'Bounded async access',
          p: 'Voice and text form checks between sessions, with a 24-hour weekday response. Bounded on purpose — it is what makes it sustainable.',
        },
        {
          n: '05',
          h: 'Quarterly reassessment',
          p: 'The same measurements, repeated. Progress is reviewed against the baseline, and the next quarter is planned from the result.',
        },
      ],
    },
    faqs: [
      {
        q: 'How much time does this actually take each week?',
        a: '<p>Most Core members spend three to four hours a week in total, including sessions. The daily decompression and mobility work is ten to fifteen minutes and is designed to fit into gaps rather than require a dedicated block.</p>',
      },
      {
        q: 'I travel constantly. Does that make this unworkable?',
        a: '<p>The opposite — travel-heavy schedules are the case this program was built for. Programming is written to work in a hotel room with no equipment, and the sessions are virtual, so the work moves with you.</p>',
      },
      {
        q: 'Do I need to be fit already?',
        a: '<p>No. The starting point is whatever your assessment shows. A large share of executive clients begin with significant restrictions and long gaps since they last trained consistently.</p>',
      },
      {
        q: 'What is the difference between Core and Concierge?',
        a: '<p>Core is virtual, four sessions a month, at $2,300/month. Concierge combines in-person and virtual with 8–12 touchpoints a month, priority scheduling and direct on-call access within agreed hours, at $6,500/month plus travel at cost. Concierge is by application only, capped at 7 positions, and begins with a required in-person Performance Day from $3,000.</p>',
      },
      {
        q: 'Is there a minimum commitment?',
        a: '<p>Core runs on a quarterly commitment. That is deliberate: structural change is measured in months, and a shorter cycle would not give the work enough time to show up in the reassessment.</p>',
      },
      {
        q: 'Can I work with Ben in Spanish?',
        a: '<p>Yes. Sessions, programming and written materials are available in English or Spanish.</p>',
      },
      {
        q: 'Do I work directly with Ben, or with a member of his team?',
        a: '<p>Directly with Ben. That is why the roster is capped — the Concierge track is limited to seven positions, and Core intake is deliberately small.</p>',
      },
    ],
    related: [
      { route: 'programs', label: 'Pricing', title: 'Programs and membership tiers' },
      { route: 'eldoa', label: 'The practice', title: 'What ELDOA is and how it works' },
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'apply', label: 'Start here', title: 'Book your free needs analysis' },
    ],
    cta: {
      kicker: 'Limited roster',
      heading: 'Try out for a place on the Executive Team.',
      body: `A free 20-minute virtual analysis. You leave with a plan you can use, whether or not you join. ${site.roster.openSpots} spots open this month.`,
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  athletes: {
    seo: {
      title: 'Performance Rehabilitation for Athletes | Ben Velazquez',
      description:
        'Performance rehabilitation, injury prevention and return-to-play programming for pro and developing athletes. NFL, NHL and MLB experience. NYC and virtual.',
    },
    hero: {
      kicker: 'Athletes · Professional & developing',
      h1: 'Recover faster, move better, extend the career.',
      lede: 'Performance rehabilitation and injury prevention built around how your body actually works — the approach that has kept athletes across the NFL, NHL and MLB on the field.',
      ctas: [{ route: 'apply', label: 'Start your assessment' }, PROGRAMS_CTA],
    },
    answer: [
      'Performance rehabilitation is the work that sits between physiotherapy and strength and conditioning: restoring structural balance and tissue quality first, then building the qualities a sport actually demands. It is what keeps an athlete available rather than merely cleared.',
      'Ben Velazquez has spent more than 20 years doing this with athletes across the NFL, NHL and MLB. Every program begins with a movement and postural assessment, uses ELDOA and fascial work to address what the assessment finds, and only then progresses to performance qualities.',
    ],
    facts: [
      { k: 'Leagues', v: 'NFL · NHL · MLB' },
      { k: 'Experience', v: '20+ years with elite performers' },
      { k: 'Core practice', v: 'ELDOA · fascial work · strength' },
      { k: 'Format', v: 'In person in NYC · virtual worldwide' },
      { k: 'Also serves', v: 'Developing and collegiate athletes' },
      { k: 'Languages', v: 'English · Spanish' },
    ],
    problem: {
      kicker: 'The gap',
      heading: 'Cleared to play is not the same as ready to play.',
      body: `<p>Rehabilitation usually ends when the pain does. That is the moment most athletes get handed back to a strength programme — with the compensation patterns that caused the injury still fully intact.</p>
<p>The line between therapist and strength coach has always been blurred. Today more than ever. The athletes who stay available are the ones whose structural work and performance work are not two separate conversations.</p>
<p>So the order matters. First, correct what isn’t right. Tune the engine. Structural balance is the priority. Only then do we shift gears and focus on the qualities needed to raise performance.</p>`,
    },
    outcomes: {
      kicker: 'The work',
      heading: 'What athletes work on with Ben.',
      cards: [
        {
          idx: '01',
          heading: 'Return to play, properly',
          body: 'Bridging the gap between discharge from therapy and full competitive load, so the pattern that caused the injury does not survive the comeback.',
        },
        {
          idx: '02',
          heading: 'Injury risk reduction',
          body: 'Identifying and correcting the structural imbalances that predict the next injury, before it happens.',
        },
        {
          idx: '03',
          heading: 'In-season durability',
          body: 'Maintenance and decompression work that holds up across a full season of travel and congested schedules.',
        },
        {
          idx: '04',
          heading: 'Off-season rebuilds',
          body: 'The window where structure is genuinely rebuilt rather than maintained — the highest-leverage block of the year.',
        },
        {
          idx: '05',
          heading: 'Career extension',
          body: 'The training decisions that determine whether the last four years of a career are productive or lost to management.',
        },
        {
          idx: '06',
          heading: 'Concussion protocols',
          body: 'Exercise-based concussion solutions from the onset of injury, coordinated with your medical team.',
        },
      ],
    },
    faqs: [
      {
        q: 'What is performance rehabilitation?',
        a: '<p>Performance rehabilitation is the stage between clinical rehabilitation and sport performance training. It restores structural balance, tissue quality and movement options first, then rebuilds strength, power and sport-specific capacity on top of a body that can express them safely.</p>',
      },
      {
        q: 'Do you work with athletes who are not professionals?',
        a: '<p>Yes. Developing, collegiate and masters athletes work with the same assessment-first method. What changes is the programming and the volume, not the standard of care.</p>',
      },
      {
        q: 'Can this work alongside my team’s strength staff?',
        a: '<p>Yes, and it usually does. The work is designed to complement a team programme rather than compete with it, and I coordinate with team staff where the athlete wants that.</p>',
      },
      {
        q: 'Do you replace my physiotherapist?',
        a: '<p>No. Performance rehabilitation sits alongside clinical care, not in place of it. I also coordinate access to a vetted network of physiotherapy, nutrition and medical professionals when a client needs it.</p>',
      },
      {
        q: 'How long before an athlete sees change?',
        a: '<p>Movement quality and symptom changes are often noticeable within two to three weeks. Structural change — the kind that shows up on reassessment and holds under load — is typically a two to three month timeframe.</p>',
      },
      {
        q: 'Is the work available remotely?',
        a: '<p>Yes. Virtual programming and coaching is available worldwide, which is how most in-season work is delivered. In-person work is available in New York City.</p>',
      },
    ],
    related: [
      { route: 'eldoa', label: 'The practice', title: 'What ELDOA is and how it works' },
      { route: 'concussion', label: 'Concussion', title: 'Exercise-based concussion recovery' },
      { route: 'results', label: 'Proof', title: 'What athletes say about the work' },
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
    ],
    cta: {
      kicker: 'Start here',
      heading: 'Every program starts with an assessment.',
      body: 'A free 20-minute virtual analysis of how you move, load and recover — and a clear plan for what to address first.',
      ctas: [{ route: 'apply', label: 'Start your assessment' }, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  concussion: {
    seo: {
      title: 'Exercise-Based Concussion Recovery | Ben Velazquez',
      description:
        'Exercise-based concussion solutions from the onset of injury with Ben Velazquez, NYC. A team focused not just on return, but on keeping you there.',
    },
    hero: {
      kicker: 'Concussion recovery · NYC',
      h1: 'Exercise-based concussion solutions, from the onset of injury.',
      lede: 'A holistic, team-based approach to concussion recovery — focused not just on getting you back, but on keeping you there.',
      ctas: [{ route: 'apply', label: 'Learn about the program' }, { route: 'contact', label: 'Get in touch', ghost: true }],
    },
    answer: [
      'Exercise-based concussion recovery uses carefully progressed, sub-symptom-threshold physical activity as an active part of recovery, rather than treating extended complete rest as the default. It is delivered as part of a coordinated team that includes medical oversight.',
      'Ben Velazquez is a recognised expert in concussion exercise solutions and leads the program himself. Tim Fleiszer, Executive Director of Concussion Legacy Foundation Canada, has worked with Ben for more than 15 years, including with military personnel through the Operation Brain Health program.',
    ],
    facts: [
      { k: 'Delivered by', v: 'Ben Velazquez' },
      { k: 'Approach', v: 'Exercise-based, from onset' },
      { k: 'Model', v: 'Holistic, multi-disciplinary team' },
      { k: 'Populations', v: 'Athletes · military · general' },
      { k: 'Contact', v: `<a href="mailto:${site.email}">${site.email}</a>` },
      { k: 'Languages', v: 'English · Spanish' },
    ],
    medical: {
      heading: 'An important note on medical care',
      body: `<p>Concussion is a medical condition. Nothing on this page is medical advice, and this program does not replace assessment, diagnosis or clearance by a qualified physician.</p>
<p>Exercise-based concussion work is delivered as one part of a coordinated team, alongside your medical providers — not instead of them. If you have sustained a head injury, see a physician first. If you are experiencing worsening headache, repeated vomiting, seizures, weakness or numbness, increasing confusion or drowsiness, seek emergency care immediately.</p>`,
    },
    approach: {
      kicker: 'The approach',
      heading: 'Why exercise, and why early.',
      body: `<p>The old default for concussion was complete rest until symptoms resolved. Practice has moved on considerably. Carefully dosed, sub-symptom-threshold activity, introduced under supervision and progressed on evidence rather than on a calendar, is now a central part of how concussion is managed.</p>
<p>The word doing the work there is <em>dosed</em>. Too much provokes symptoms and sets recovery back; too little leaves someone deconditioned, isolated and often worse off psychologically. Getting the dose right, and adjusting it continuously, is the entire skill.</p>
<p>That is why this is delivered as a team rather than as a single practitioner. Medical oversight, exercise progression, and the return-to-work or return-to-play decision are three different competencies, and a recovery goes wrong most often at the seams between them.</p>`,
    },
    faqs: [
      {
        q: 'What is exercise-based concussion recovery?',
        a: '<p>It is an approach that uses carefully progressed physical activity, kept below the threshold that provokes symptoms, as an active component of concussion recovery. Progression is based on the individual’s response and is supervised, rather than following a fixed calendar.</p>',
      },
      {
        q: 'Does this replace seeing a doctor?',
        a: '<p>No. Concussion is a medical condition requiring assessment, diagnosis and clearance by a qualified physician. This program is delivered alongside medical care as part of a coordinated team, never in place of it.</p>',
      },
      {
        q: 'When can exercise start after a concussion?',
        a: '<p>That is a medical decision, made case by case with your physician. Current practice generally favours introducing light, controlled activity earlier than the older complete-rest model allowed, but the specific timing depends on the individual and their clinical picture.</p>',
      },
      {
        q: 'Who is the program for?',
        a: '<p>Athletes at every level, military personnel — Ben has worked with military personnel through Operation Brain Health with Concussion Legacy Foundation Canada — and anyone recovering from a concussion who wants a structured, supervised return.</p>',
      },
      {
        q: 'Who delivers the concussion program?',
        a: `<p>Ben Velazquez leads the program directly. He is a recognised expert in exercise-based concussion solutions and coordinates a multi-disciplinary team around each case — working alongside your physician, and drawing on his vetted network of physiotherapy and medical professionals where a recovery needs it. You can reach him at <a href="mailto:${site.email}">${site.email}</a>.</p>`,
      },
      {
        q: 'What does “not just return — but keeping you there” mean?',
        a: '<p>Returning once is the easier half. The harder half is reducing the likelihood of a repeat injury and managing the load that follows a return, which is where a structured programme matters most.</p>',
      },
    ],
    related: [
      { route: 'athletes', label: 'Athletes', title: 'Performance rehabilitation for athletes' },
      { route: 'about', label: 'Background', title: 'About Ben Velazquez' },
      { route: 'results', label: 'Proof', title: 'Endorsements and testimonials' },
      { route: 'contact', label: 'Contact', title: 'Get in touch with the team' },
    ],
    cta: {
      kicker: 'Work with Ben',
      heading: 'Talk to the team about a structured recovery.',
      body: 'Tell us about the injury and where you are in recovery, and we will explain how the program works alongside your medical care.',
      ctas: [{ route: 'contact', label: 'Contact the team' }, { route: 'apply', label: 'Book an analysis', ghost: true }],
    },
  },

  /* ====================================================================== */
  eldoa: {
    seo: {
      title: 'ELDOA in NYC — What It Is and How It Works | Ben Velazquez',
      description:
        'ELDOA is a system of self-normalising postures that create space in one spinal segment. What it is, what it does, who it helps, and how to learn it properly.',
    },
    hero: {
      kicker: 'The practice',
      h1: 'ELDOA: the daily practice elite athletes swear by.',
      lede: 'A system of precise, self-administered postures that decompress one specific spinal segment at a time — using nothing but your own muscular tension.',
      ctas: [APPLY_CTA, { route: 'method', label: 'See the method', ghost: true }],
    },
    answer: [
      'ELDOA (Étirements Longitudinaux avec Décoaptation Ostéo-Articulaire) is a system of self-administered postures designed to create space in one specific joint or spinal segment. Each posture uses the practitioner’s own muscular tension and fascial lines to decoapt a targeted level — most commonly a vertebral segment such as L5–S1.',
      'It is not general stretching. Every posture targets a named segment, is held for about a minute in a precise position, and is chosen based on what an assessment found. Practised consistently, athletes report reduced compression-related pain, improved range of motion and better recovery between sessions.',
    ],
    facts: [
      { k: 'Full name', v: 'Étirements Longitudinaux avec Décoaptation Ostéo-Articulaire' },
      { k: 'Translation', v: 'Longitudinal stretches with joint decoaptation' },
      { k: 'Typical hold', v: 'About 60 seconds per posture' },
      { k: 'Equipment', v: 'None — floor space only' },
      { k: 'Targets', v: 'One named segment at a time' },
      { k: 'Best for', v: 'Compression, stiffness, travel, desk posture' },
    ],
    explainer: {
      kicker: 'How it works',
      heading: 'One segment at a time, using your own tension.',
      body: `<p>Most stretching is regional. You stretch "the hamstrings" or "the lower back", and the range you gain distributes itself across whichever segments were already the most mobile — usually not the ones that needed it.</p>
<p>ELDOA inverts that. Each posture is constructed so that the fascial chains above and below a chosen segment are put under tension simultaneously, creating a decoaptation — space — at that one level. The position is precise, the tension is generated by you rather than applied by a therapist, and the hold is typically around a minute.</p>
<h3>Why the specificity matters</h3>
<p>If an assessment shows the restriction is at L5–S1, general lumbar mobility work will mostly move the levels that already move. Targeting the segment that is actually restricted is the difference between feeling looser for an hour and changing something that holds.</p>
<h3>Why it belongs to the fascial conversation</h3>
<p>Fascia is continuous. It responds to what you repeatedly ask of it — which is why eleven hours a day in a chair is a genuine training stimulus, and why a counter-stimulus has to be equally specific. My contribution to <em>Fascia: Clinical Applications for Health and Human Performance</em> comes directly out of this work.</p>
<h3>Why athletes stay with it</h3>
<p>It requires no equipment, fits in a hotel room, takes ten to fifteen minutes, and can be done daily without adding meaningful recovery cost. For an athlete inside a congested season, that combination is rare.</p>`,
    },
    who: {
      kicker: 'Who it helps',
      heading: 'Who ELDOA is for.',
      cards: [
        {
          idx: '01',
          heading: 'Athletes in congested seasons',
          body: 'Daily decompression that offsets accumulated compressive load without adding to the recovery bill.',
        },
        {
          idx: '02',
          heading: 'Desk-bound professionals',
          body: 'A direct counter to the specific segments that eleven hours of sitting loads most.',
        },
        {
          idx: '03',
          heading: 'Frequent flyers',
          body: 'Ten minutes on a hotel floor after landing, reversing hours of axial compression before it settles.',
        },
        {
          idx: '04',
          heading: 'People with recurring back or neck pain',
          body: 'Where the restriction is compression-related and localised, targeting the segment beats general mobility work.',
        },
      ],
    },
    faqs: [
      {
        q: 'What does ELDOA stand for?',
        a: '<p>ELDOA is a French acronym: Étirements Longitudinaux avec Décoaptation Ostéo-Articulaire — longitudinal stretches with osteo-articular decoaptation. In practice, it means creating space in a specific joint or spinal segment using your own muscular tension.</p>',
      },
      {
        q: 'How is ELDOA different from yoga or normal stretching?',
        a: '<p>Specificity and intent. Yoga and general stretching work on regions and often distribute range to whichever segments already move well. Each ELDOA posture is engineered to decoapt one named segment, held in a precise position for about a minute, and selected based on assessment findings rather than on how a region feels.</p>',
      },
      {
        q: 'How long does an ELDOA session take?',
        a: '<p>A daily practice is usually ten to fifteen minutes — a handful of postures at roughly a minute each. The prescription depends on what your assessment shows.</p>',
      },
      {
        q: 'How often should I practise ELDOA?',
        a: '<p>Daily practice is where the results come from. Because it does not add meaningful recovery cost, it can be done every day, including in-season and on travel days.</p>',
      },
      {
        q: 'Do I need equipment or a gym?',
        a: '<p>No. Floor space is enough, which is precisely why it survives a real travel schedule.</p>',
      },
      {
        q: 'Can I learn ELDOA from videos?',
        a: '<p>You can learn the shapes from video, but the value is in precision and in choosing the right postures for your restrictions. Coaching matters more here than in most mobility work, because a posture held slightly wrong targets a different segment than the one you intended.</p>',
      },
      {
        q: 'How long before I feel a difference?',
        a: '<p>Many people notice reduced end-of-day stiffness within one to two weeks. Structural change that holds under load typically takes two to three months of consistent daily practice.</p>',
      },
      {
        q: 'Where can I learn ELDOA in New York City?',
        a: '<p>ELDOA is a core part of every program I write, for athletes and executives alike, delivered in person in NYC or virtually. Every engagement starts with a free 20-minute Performance Needs Analysis, which is what determines which postures you actually need.</p>',
      },
    ],
    related: [
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'executive', label: 'For executives', title: 'Executive performance coaching' },
      { route: 'athletes', label: 'For athletes', title: 'Performance rehabilitation' },
      { route: 'apply', label: 'Start here', title: 'Book your free needs analysis' },
    ],
    cta: {
      kicker: 'Learn it properly',
      heading: 'The right postures depend on what your assessment finds.',
      body: 'A free 20-minute analysis identifies the segments actually limiting you — and which ELDOA postures are worth your ten minutes a day.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  method: {
    seo: {
      title: 'The Method: Assess, Decompress, Build to Last',
      description:
        'Most training breaks the body down. This builds it back up. The three-part method behind 20+ years of performance rehabilitation with elite athletes.',
    },
    hero: {
      kicker: 'The method',
      h1: 'Most training breaks the body down. This builds it back up.',
      lede: 'Three principles, applied in order, whether you are a professional athlete in a congested season or an executive on your fourth flight of the week.',
      ctas: [APPLY_CTA, { route: 'eldoa', label: 'What is ELDOA?', ghost: true }],
    },
    answer: [
      'The method has three stages, applied strictly in order. First, assess — every program starts from measured data on how your body moves, loads and recovers, not from assumption. Second, decompress — ELDOA and fascial work address the specific restrictions the assessment found. Third, build — strength and performance qualities are added on top of a structure that can express them.',
      'The order is the point. Adding load to an unbalanced structure makes the imbalance stronger. Structural balance comes first; performance qualities come second.',
    ],
    steps: {
      kicker: 'In practice',
      heading: 'Three stages, in order.',
      list: [
        {
          n: '01',
          h: 'Assess, don’t guess',
          p: 'A deep movement and postural assessment establishes what is actually restricted, which side compensates, and how you recover. Two people with identical symptoms routinely need opposite programs — which is why nothing starts before this.',
        },
        {
          n: '02',
          h: 'ELDOA &amp; fascial work',
          p: 'Targeted self-normalising postures that decompress a named spinal segment or joint, chosen from what the assessment found. This is the daily practice: ten to fifteen minutes, no equipment, done anywhere.',
        },
        {
          n: '03',
          h: 'Built to last',
          p: 'Strength, power and capacity, programmed onto a structure that can now express them — with recovery and preparation treated as one system rather than two.',
        },
      ],
    },
    principles: {
      kicker: 'The principles behind it',
      heading: 'Why it is built this way.',
      cards: [
        {
          idx: '01',
          heading: 'Sport is sport. Sport is not health.',
          body: 'Competing and being healthy are different objectives. The job of a strength coach is to bring a healthy athlete onto the field first — performance is what you build on top of that.',
        },
        {
          idx: '02',
          heading: 'Precision over intensity',
          body: 'The limiting factor is almost never effort. It is knowing which two or three things to work on. Intensity applied to the wrong target just entrenches the problem faster.',
        },
        {
          idx: '03',
          heading: 'Duration beats intensity for posture',
          body: 'Tissue adapts to sustained input. Eleven hours of sitting outweighs one hour of training, which is why frequency of interruption matters more than session volume.',
        },
        {
          idx: '04',
          heading: 'Recovery is a skill, not a reward',
          body: 'Sleep architecture, breathing mechanics, tissue quality and parasympathetic tone are all trainable inputs. Left to chance, all four decay.',
        },
        {
          idx: '05',
          heading: 'Science, experience and art',
          body: 'The challenge with every athlete is combining the right dose of all three into preparation built just for them. That is the part no protocol delivers on its own.',
        },
        {
          idx: '06',
          heading: 'Measure, then measure again',
          body: 'Quarterly reassessment against the original baseline. If a program is working it shows up in the same measurements that started it.',
        },
      ],
    },
    faqs: [
      {
        q: 'What happens in the assessment?',
        a: '<p>A structured evaluation of how you move, how you load, and how you recover — posture, range of motion, movement patterns, compensations and training and injury history. It produces the baseline that everything else is measured against.</p>',
      },
      {
        q: 'Why does the order matter so much?',
        a: '<p>Because loading an unbalanced structure reinforces the imbalance. Strength added on top of a compensation pattern makes the compensation stronger and more durable, which is how a minor restriction becomes an injury.</p>',
      },
      {
        q: 'Is this physiotherapy?',
        a: '<p>No. Performance rehabilitation sits between clinical rehabilitation and performance training, and works alongside clinical care rather than replacing it. Where a client needs medical or physiotherapy input, I coordinate access to a vetted network.</p>',
      },
      {
        q: 'How is progress measured?',
        a: '<p>Through quarterly reassessment using the same measurements taken at baseline, plus the practical markers that matter to the client — pain frequency, energy through the week, and what they can do without consequence.</p>',
      },
      {
        q: 'Does the same method apply to executives and athletes?',
        a: '<p>Yes — the method is identical. The assessment findings, the programming and the volume differ completely, but the order of operations does not.</p>',
      },
    ],
    related: [
      { route: 'eldoa', label: 'The practice', title: 'What ELDOA is and how it works' },
      { route: 'about', label: 'Background', title: 'About Ben Velazquez' },
      { route: 'programs', label: 'Pricing', title: 'Programs and membership tiers' },
      { route: 'apply', label: 'Start here', title: 'Book your free needs analysis' },
    ],
    cta: {
      kicker: 'Stage one',
      heading: 'It starts with the assessment. That part is free.',
      body: 'Twenty minutes, virtual. You leave with the two or three things most limiting you and where to start.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  about: {
    seo: {
      title: 'About Ben Velazquez — NYC Performance Rehab Specialist',
      description:
        'Performance rehabilitation specialist and strength coach in NYC. 20+ years with NFL, NHL and MLB athletes, fascia author and concussion exercise expert.',
    },
    hero: {
      kicker: 'About',
      h1: 'Twenty years in the room where careers are protected.',
      lede: 'Performance rehabilitation specialist, posturologist, strength coach, published author on fascia, and a recognised expert in exercise-based concussion solutions — based in New York City, working in English and Spanish.',
      ctas: [APPLY_CTA, { route: 'method', label: 'The method', ghost: true }],
    },
    answer: [
      'Ben Velazquez is a New York City performance rehabilitation specialist, posturologist and strength coach with more than 20 years working with elite performers. He has worked with athletes across the NFL, NHL and MLB, has trained over 1,000 professionals through his seminars, and is a co-contributing author of <em>Fascia: Clinical Applications for Health and Human Performance</em>.',
      'He is a licensed Soma-Therapist, a Certified Strength &amp; Conditioning Specialist (CSCS), an ACSM Exercise Specialist and an ISSA Sports Performance Nutritionist, and a member of the NSCA, ACSM and ISSA. He coaches in English and Spanish, virtually worldwide and in person in New York City.',
    ],
    facts: [
      { k: 'Based in', v: 'New York City' },
      { k: 'Experience', v: '20+ years with elite performers' },
      { k: 'Leagues', v: 'NFL · NHL · MLB' },
      { k: 'Seminars', v: '1,000+ professionals trained' },
      { k: 'Published', v: 'Fascia (co-contributing author)' },
      { k: 'Languages', v: 'English · Spanish' },
    ],
    bio: {
      kicker: 'Background',
      heading: 'How the work took this shape.',
      body: `<p>I have spent my career in the space where two professions overlap and neither quite owns the ground. The therapist finishes when the pain stops. The strength coach starts when the athlete is cleared. In between sits the work that actually determines whether someone stays available — and for a long time, almost nobody was doing it deliberately.</p>
<p>That gap is where I built my practice. Assess first. Correct what isn’t right. Only then load it.</p>
<h2>The athletes</h2>
<p>Over twenty years that approach has taken me into weight rooms with athletes across the NFL, NHL and MLB — Christian McCaffrey, Derek Carr, Connor McDavid, Max Domi, Jesús Luzardo among them — and into the documentary <em>Being: Mariano</em> with Mariano Rivera. The sports differ enormously. The order of operations does not.</p>
<h2>The science</h2>
<p>Fascia is the throughline. It is continuous, it adapts to whatever you repeatedly ask of it, and it explains why localised, specific work outperforms general mobility training for most of the problems people actually bring me. That work led to my contribution to <em>Fascia: Clinical Applications for Health and Human Performance</em>, and it is why ELDOA sits at the centre of nearly every program I write.</p>
<h2>Concussion</h2>
<p>I work on exercise-based concussion solutions from the onset of injury. Tim Fleiszer, Executive Director of Concussion Legacy Foundation Canada, and I have worked together for more than 15 years, including with military personnel through the Operation Brain Health program.</p>
<h2>Teaching</h2>
<p>More than a thousand professionals have come through my seminars. Teaching sharpens the work: you cannot hand-wave a principle to a room of practitioners who will apply it on Monday.</p>
<h2>Executives</h2>
<p>The methods that keep a professional athlete on the field turn out to transfer almost directly to people who sit for eleven hours and fly a hundred times a year. Same compression, same compensation patterns, less recovery time and far less support. That is why the Executive Team exists, and why the roster is small.</p>`,
    },
    credentials: {
      kicker: 'Credentials & recognition',
      heading: 'Credentialed. Published. Trusted at the top.',
      lede: 'Award-winning and nationally recognised — grounded in the science, not just the reps.',
    },
    faqs: [
      {
        q: 'What are Ben Velazquez’s qualifications?',
        a: '<p>Licensed Soma-Therapist (Performance Physical Therapy), Certified Strength &amp; Conditioning Specialist (CSCS), ACSM Exercise Specialist and ISSA Sports Performance Nutritionist. He studied posturology under Dr. Bernard Bricot, is a member of the NSCA, ACSM and ISSA, and a co-contributing author of <em>Fascia: Clinical Applications for Health and Human Performance</em>.</p>',
      },
      {
        q: 'Which professional athletes has Ben worked with?',
        a: '<p>Athletes across the NFL, NHL and MLB, including Christian McCaffrey, Derek Carr, Connor McDavid, Max Domi and Jesús Luzardo. He also appeared in the FOX Sports documentary <em>Being: Mariano</em> with Mariano Rivera.</p>',
      },
      {
        q: 'Where is Ben Velazquez based?',
        a: '<p>New York City. In-person work is available in NYC, and virtual coaching is available worldwide.</p>',
      },
      {
        q: 'What book has Ben contributed to?',
        a: `<p>He is a co-contributing author of <em>Fascia: Clinical Applications for Health and Human Performance</em>, on the science of fascia — the foundation of the work he does with every client. <a href="${site.links.book}" target="_blank" rel="noopener">The book is available here</a>.</p>`,
      },
      {
        q: 'Does Ben speak Spanish?',
        a: '<p>Yes. All coaching, programming and written material is available in English or Spanish.</p>',
      },
      {
        q: 'What is Ben’s training philosophy?',
        a: '<p>“Sport is sport! Sport is not health!” The job of a strength coach is to bring a healthy athlete onto the field first. Correct what isn’t right, achieve structural balance, and only then build the qualities that raise performance.</p>',
      },
    ],
    related: [
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'results', label: 'Proof', title: 'Testimonials and endorsements' },
      { route: 'podcast', label: 'Listen', title: 'The Ben Velazquez Podcast' },
      { route: 'contact', label: 'Contact', title: 'Get in touch' },
    ],
    cta: {
      kicker: 'Work together',
      heading: 'Every engagement starts the same way.',
      body: 'A free 20-minute virtual Performance Needs Analysis — and a plan you keep, whether or not we work together.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  programs: {
    seo: {
      title: 'Programs & Pricing — Executive Team | Ben Velazquez',
      description:
        'Three ways to work with Ben Velazquez: the $297 Executive Reset, Core Executive Performance at $2,300/mo, and Concierge Private Performance by application.',
    },
    hero: {
      kicker: 'Programs',
      h1: 'Start where you are. Access scales with commitment.',
      lede: 'A clear path from a self-guided start to direct, private work. The top tiers are intentionally limited — and every place begins with a free Performance Needs Analysis.',
      ctas: [APPLY_CTA],
    },
    answer: [
      'There are three ways to work with Ben Velazquez. The Executive Reset is a self-guided ELDOA and mobility program at $297 one-time. Core Executive Performance is $2,300 per month on a quarterly commitment, with four virtual sessions, custom programming and bounded async access. Concierge Private Performance is $6,500 per month plus travel at cost, by application only, capped at 7 positions.',
      'The Concierge track requires an in-person Performance Day first — a full-day evaluation and consultation from $3,000, one-time. Regardless of tier, every place on the team starts with a free 20-minute virtual Performance Needs Analysis.',
    ],
    tiers: [
      {
        step: 'Entry',
        name: 'The Executive Reset',
        price: `$${site.pricing.resetDisplay} <small>one-time</small>`,
        desc: 'Self-guided ELDOA and mobility program built for desk-bound, travel-heavy professionals. Start in minutes.',
        features: [
          'Self-guided ELDOA and mobility sequences',
          'Built for hotel rooms and small spaces — no equipment',
          'Ten to fifteen minutes a day',
          'Yours to keep, permanently',
        ],
        cta: 'Get instant access',
        href: site.links.executiveReset,
        ghost: true,
      },
      {
        step: 'Core',
        name: 'Executive Performance',
        badge: 'Most chosen',
        featured: true,
        price: `$${site.pricing.core.toLocaleString('en-US')} <small>/ month</small>`,
        desc: 'The right touchpoints and real access — built for the time-poor executive.',
        features: [
          'Full Performance Needs Analysis + deep movement and postural assessment',
          '4 virtual sessions / month — programming plus ELDOA and rehab coaching',
          'Custom program design, refreshed monthly, that travels with you',
          'Bounded async access — voice/text form checks, 24h weekday response',
          'Quarterly re-assessment and progress review',
          'Coordinated access to Ben’s vetted network — nutrition, physio, medical',
          'Member access to partner products',
        ],
        cta: 'Apply',
        route: 'apply',
        fine: 'Quarterly commitment. Best for executives who want outcomes and access, not session volume.',
      },
      {
        step: 'Concierge',
        name: 'Private Performance',
        price: `$${site.pricing.concierge.toLocaleString('en-US')} <small>/ month</small>`,
        desc: 'Maximum access. In-person and virtual combined — the closest thing to how pros are supported.',
        features: [
          'Everything in Core',
          'In-person and virtual, combined',
          'Up to 8–12 touchpoints / month, priority scheduling',
          'Custom program design, adjusted in real time as your week changes',
          'Deeper integration with recovery, sleep and energy',
          'Direct on-call access, within agreed hours',
        ],
        cta: 'Request to apply',
        route: 'apply',
        ghost: true,
        fine: `By application · ${site.roster.conciergeSeats} positions. Requires the Performance Day (from $${site.pricing.performanceDay.toLocaleString(
          'en-US',
        )}, one-time). Travel billed at cost when on-site: flights (business on 3h+), ground transport and hotel.`,
      },
    ],
    prereq: {
      kicker: 'Required prerequisite',
      heading: 'The Performance Day',
      body: `<p>Every Concierge place begins with a full-day, in-person evaluation and consultation — from $${site.pricing.performanceDay.toLocaleString(
        'en-US',
      )}, one-time.</p>
<p>A full day is what it takes to see how a body actually behaves rather than how it presents in a twenty-minute window: movement under fatigue, how you load in the afternoon versus the morning, and the patterns that only appear once you stop performing for the assessment.</p>`,
    },
    note: 'Every place on the team begins with a free Performance Needs Analysis.',
    faqs: [
      {
        q: 'How much does it cost to work with Ben Velazquez?',
        a: `<p>The Executive Reset is $${site.pricing.resetDisplay} one-time. Core Executive Performance is $${site.pricing.core.toLocaleString(
          'en-US',
        )} per month on a quarterly commitment. Concierge Private Performance is $${site.pricing.concierge.toLocaleString(
          'en-US',
        )} per month plus travel at cost, and requires a one-time Performance Day from $${site.pricing.performanceDay.toLocaleString(
          'en-US',
        )}.</p>`,
      },
      {
        q: 'What is included in the free Performance Needs Analysis?',
        a: '<p>A focused 20-minute virtual assessment of how you move, load and recover, and a personalised snapshot of the two or three things most limiting you and where to start. It is genuinely free and yours to keep whether or not you go on to work together.</p>',
      },
      {
        q: 'Why is the Concierge roster capped at 7?',
        a: '<p>Because it involves in-person work, real-time programming changes and direct on-call access within agreed hours. Beyond seven positions, the level of access that defines the tier stops being deliverable.</p>',
      },
      {
        q: 'What does “bounded async access” mean?',
        a: '<p>Between sessions you can send voice or text form checks and questions, with a 24-hour response on weekdays. It is bounded rather than unlimited on purpose — that is what keeps the response time real.</p>',
      },
      {
        q: 'Is travel included in the Concierge price?',
        a: '<p>No. When on-site work is required, travel is billed at cost: flights (business class on journeys over three hours), ground transport and hotel.</p>',
      },
      {
        q: 'Can I switch tiers later?',
        a: '<p>Yes. Many members start on Core and move to Concierge when a season or a schedule demands more access. Moving to Concierge requires the Performance Day if you have not already done one.</p>',
      },
      {
        q: 'Do you offer one-off sessions?',
        a: '<p>Not routinely. Structural change is measured in months, and a single session cannot deliver it. The Executive Reset exists as a genuine self-guided starting point for people who are not ready for a monthly commitment.</p>',
      },
    ],
    related: [
      { route: 'executive', label: 'For executives', title: 'What executive coaching involves' },
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'faq', label: 'Questions', title: 'Frequently asked questions' },
      { route: 'apply', label: 'Start here', title: 'Book your free needs analysis' },
    ],
    cta: {
      kicker: 'The way in',
      heading: 'Every tier starts with the same free analysis.',
      body: `Twenty minutes, virtual, no cost, no obligation. ${site.roster.openSpots} roster spots open this month.`,
      ctas: [APPLY_CTA],
    },
  },

  /* ====================================================================== */
  results: {
    seo: {
      title: 'Results & Testimonials — NFL, NHL, MLB | Ben Velazquez',
      description:
        'What professional athletes and the Concussion Legacy Foundation say about working with Ben Velazquez. Testimonials from the NFL, NHL and MLB.',
    },
    hero: {
      kicker: '01 — Results',
      h1: 'The people who can train with anyone train with Ben.',
      lede: 'Athletes across the NFL, NHL and MLB, and the leadership of Concussion Legacy Foundation Canada, in their own words.',
      ctas: [APPLY_CTA, { route: 'athletes', label: 'For athletes', ghost: true }],
    },
    answer: [
      'Ben Velazquez has worked with athletes across the NFL, NHL and MLB for more than 20 years, including Christian McCaffrey, Derek Carr, Connor McDavid, Max Domi and Jesús Luzardo. Tim Fleiszer, Executive Director of Concussion Legacy Foundation Canada, has worked with him for over 15 years.',
      'The testimonials below are supplied by the named individuals. They describe reduced injury recurrence, improved daily physical condition and the value of a consistent ELDOA practice.',
    ],
    inAction: {
      kicker: 'In action',
      heading: 'Inside the work.',
      lede: 'A look at the training itself — starting with sessions alongside Connor McDavid.',
    },
    faqs: [
      {
        q: 'Which professional athletes has Ben Velazquez worked with?',
        a: '<p>Athletes across the NFL, NHL and MLB, including Christian McCaffrey, Derek Carr, Connor McDavid, Max Domi and Jesús Luzardo. He also appeared in the FOX Sports documentary <em>Being: Mariano</em> with Mariano Rivera.</p>',
      },
      {
        q: 'Are these testimonials verified?',
        a: '<p>Yes — every testimonial on this site is attributed to a named individual who supplied it. No aggregate ratings or anonymous reviews are used anywhere on the site.</p>',
      },
      {
        q: 'Do results with professional athletes transfer to non-athletes?',
        a: '<p>The method transfers; the programming does not. The assessment-first order of operations is identical, but the volume, intensity and exercise selection for an executive look nothing like those for a professional athlete in-season.</p>',
      },
      {
        q: 'Can I speak to a current client?',
        a: '<p>Where a client has agreed to it, introductions can sometimes be arranged after a needs analysis. Client confidentiality means this is never assumed.</p>',
      },
    ],
    related: [
      { route: 'athletes', label: 'For athletes', title: 'Performance rehabilitation' },
      { route: 'about', label: 'Background', title: 'About Ben Velazquez' },
      { route: 'concussion', label: 'Concussion', title: 'Exercise-based concussion recovery' },
      { route: 'apply', label: 'Start here', title: 'Book your free needs analysis' },
    ],
    cta: {
      kicker: 'The tryout',
      heading: 'The same standard of care, whatever you do for a living.',
      body: 'A free 20-minute virtual analysis, and a plan you keep whether or not we work together.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  insights: {
    seo: {
      title: 'Weekly Insights on Performance & Longevity | Ben Velazquez',
      description:
        'Short, practical writing on performance, recovery, posture and longevity from a coach who has spent 20+ years with elite athletes. A new insight most weeks.',
    },
    hero: {
      kicker: 'Weekly insights',
      h1: 'Notes from the field.',
      lede: 'Short, practical thoughts on performance, recovery, and longevity — a new one most weeks.',
      ctas: [APPLY_CTA],
    },
    answer: [
      'Weekly Insights is a short-form series on performance, recovery, posture and longevity, written from twenty years of work with professional athletes and executives. Each piece takes a single practical question and answers it directly.',
      'New insights are published most weeks and are available in English and Spanish, with an RSS feed for both.',
    ],
    faqs: [
      {
        q: 'How often are new insights published?',
        a: '<p>Most weeks. Each one is a short, self-contained piece on a single practical question.</p>',
      },
      {
        q: 'Is there an RSS feed?',
        a: '<p>Yes — <a href="/feed.xml">/feed.xml</a> for English and <a href="/es/feed.xml">/es/feed.xml</a> for Spanish.</p>',
      },
      {
        q: 'Are the insights available in Spanish?',
        a: '<p>Yes. Every insight is published in both English and Spanish.</p>',
      },
    ],
    related: [
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'eldoa', label: 'The practice', title: 'What ELDOA is and how it works' },
      { route: 'podcast', label: 'Listen', title: 'The Ben Velazquez Podcast' },
      { route: 'apply', label: 'Start here', title: 'Book your free needs analysis' },
    ],
    cta: {
      kicker: 'Put it into practice',
      heading: 'Reading about it only goes so far.',
      body: 'A free 20-minute analysis tells you which of these actually apply to your body, and in what order.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  faq: {
    seo: {
      title: 'Frequently Asked Questions | Ben Velazquez',
      description:
        'Answers on programs, pricing, ELDOA, remote coaching, concussion recovery and how to start working with Ben Velazquez in NYC or virtually.',
    },
    hero: {
      kicker: 'Questions',
      h1: 'Everything people ask before they start.',
      lede: 'Programs, pricing, the method, remote work and how the free Performance Needs Analysis actually runs.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
    answer: [
      'This page collects the questions asked most often about working with Ben Velazquez: what performance rehabilitation is, what ELDOA involves, how much the programs cost, whether the work can be done remotely, and how to start.',
      'Every engagement begins with a free 20-minute virtual Performance Needs Analysis, available in English or Spanish.',
    ],
    groups: [
      {
        heading: 'Working together',
        faqs: [
          {
            q: 'How do I start working with Ben Velazquez?',
            a: '<p>Every engagement begins with a free 20-minute virtual Performance Needs Analysis. You leave with a personalised snapshot of the two or three things most limiting you and where to start, whether or not you go on to work together. <a href="/apply/">Apply here</a>.</p>',
          },
          {
            q: 'Is the Performance Needs Analysis really free?',
            a: '<p>Yes. It is a genuine 20-minute assessment, and the takeaway plan is yours to keep regardless of whether you join the team.</p>',
          },
          {
            q: 'Do I work directly with Ben?',
            a: '<p>Yes. That is why the roster is capped — Concierge is limited to 7 positions and Core intake is deliberately small.</p>',
          },
          {
            q: 'Can the work be done remotely?',
            a: '<p>Yes. Most executive work is virtual and travels with the client. In-person work is available in New York City, and is a required part of the Concierge track.</p>',
          },
          {
            q: 'What languages do you work in?',
            a: '<p>English and Spanish — sessions, programming and written materials in either.</p>',
          },
          {
            q: 'Who is this not for?',
            a: '<p>Anyone looking for session volume rather than outcomes, or for a quick fix. Structural change is measured in months, which is why Core runs on a quarterly commitment.</p>',
          },
        ],
      },
      {
        heading: 'Programs and pricing',
        faqs: [
          {
            q: 'What do the programs cost?',
            a: `<p>The Executive Reset is $${site.pricing.resetDisplay} one-time. Core Executive Performance is $${site.pricing.core.toLocaleString(
              'en-US',
            )}/month on a quarterly commitment. Concierge Private Performance is $${site.pricing.concierge.toLocaleString(
              'en-US',
            )}/month plus travel at cost, by application, capped at ${site.roster.conciergeSeats} positions, and requires a one-time Performance Day from $${site.pricing.performanceDay.toLocaleString(
              'en-US',
            )}. See the <a href="/programs/">programs page</a>.</p>`,
          },
          {
            q: 'What is the Performance Day?',
            a: `<p>A full-day, in-person evaluation and consultation, from $${site.pricing.performanceDay.toLocaleString(
              'en-US',
            )} one-time. It is a required prerequisite for the Concierge track.</p>`,
          },
          {
            q: 'Is there a minimum commitment?',
            a: '<p>Core runs quarterly. Structural change takes months to show up in a reassessment, and a shorter cycle would not give the work a fair test.</p>',
          },
          {
            q: 'How many sessions do I get?',
            a: '<p>Core includes four virtual sessions a month. Concierge includes up to 8–12 touchpoints a month, combining in-person and virtual work with priority scheduling.</p>',
          },
        ],
      },
      {
        heading: 'The method',
        faqs: [
          {
            q: 'What is performance rehabilitation?',
            a: '<p>The stage between clinical rehabilitation and performance training. It restores structural balance, tissue quality and movement options first, then rebuilds strength and sport-specific capacity on a body that can express them safely.</p>',
          },
          {
            q: 'What is ELDOA?',
            a: '<p>ELDOA — Étirements Longitudinaux avec Décoaptation Ostéo-Articulaire — is a system of self-administered postures that create space in one specific joint or spinal segment using your own muscular tension. <a href="/eldoa/">Full explanation here</a>.</p>',
          },
          {
            q: 'Is this physiotherapy?',
            a: '<p>No. It works alongside clinical care rather than replacing it. Where clients need medical or physiotherapy input, access to a vetted network is coordinated.</p>',
          },
          {
            q: 'How long until I see results?',
            a: '<p>Reduced stiffness and improved daily movement are commonly noticed within two to three weeks. Structural change that holds under load is typically a two to three month timeframe.</p>',
          },
          {
            q: 'Do I need to be fit to start?',
            a: '<p>No. The starting point is whatever the assessment shows. Many executive clients begin with significant restrictions and long gaps since training consistently.</p>',
          },
        ],
      },
      {
        heading: 'Concussion recovery',
        faqs: [
          {
            q: 'What is exercise-based concussion recovery?',
            a: '<p>An approach using carefully progressed, sub-symptom-threshold activity as an active part of recovery, supervised and progressed on individual response rather than a fixed calendar. <a href="/concussion-recovery/">More here</a>.</p>',
          },
          {
            q: 'Does the concussion program replace medical care?',
            a: '<p>No. Concussion is a medical condition requiring physician assessment, diagnosis and clearance. The program is delivered alongside medical care as part of a coordinated team.</p>',
          },
        ],
      },
    ],
    related: [
      { route: 'programs', label: 'Pricing', title: 'Programs and membership tiers' },
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'eldoa', label: 'The practice', title: 'What ELDOA is and how it works' },
      { route: 'apply', label: 'Start here', title: 'Book your free needs analysis' },
    ],
    cta: {
      kicker: 'Still deciding?',
      heading: 'The analysis answers more than a page can.',
      body: 'Twenty minutes, virtual, free. You leave with a plan you can use either way.',
      ctas: [APPLY_CTA, PROGRAMS_CTA],
    },
  },

  /* ====================================================================== */
  apply: {
    seo: {
      title: 'Apply — Free Performance Needs Analysis | Ben Velazquez',
      description:
        'Apply for a free 20-minute virtual Performance Needs Analysis. Leave with a personalised plan you keep, whether or not you join the Executive Team.',
    },
    hero: {
      kicker: 'Free · By application',
      h1: 'Try out for a place on the Executive Team.',
      lede: 'Every place on the team starts the same way: a free 20-minute virtual Performance Needs Analysis. I find what’s holding your body back — and you leave with a clear plan to fix it, whether or not you join the team.',
      ctas: [],
    },
    answer: [
      'The Performance Needs Analysis is a free, 20-minute virtual assessment of how you move, load and recover. You leave with a personalised snapshot of the two or three things most limiting you and where to start — yours to keep whether or not you go on to work together.',
      `If it is a fit, you are offered one of a limited number of roster positions. ${site.roster.openSpots} spots are open this month. Available in English or Spanish.`,
    ],
    steps: [
      { n: '01', b: 'The analysis', t: 'A focused 20-minute virtual assessment of how you move, load, and recover.' },
      {
        n: '02',
        b: 'Your takeaway',
        t: 'A personalised snapshot: the two or three things most limiting you, and where to start. Yours to keep.',
      },
      { n: '03', b: 'The tryout', t: 'If it’s a fit, you’re offered one of a limited number of positions on the roster.' },
    ],
    list: [
      { b: 'It’s a real assessment.', t: 'You leave with a plan you can use, even if we don’t work together.' },
      { b: 'Built around your life.', t: 'Virtual, in-person, or both — in English or Spanish.' },
      { b: 'Limited roster.', t: 'I take on only a small number of executives at a time.' },
    ],
    form: {
      heading: 'Apply for your tryout',
      // Subject line on the email Formspree delivers.
      subject: 'New application — Performance Needs Analysis',
      name: 'Name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@company.com',
      goal: 'What are you looking for?',
      options: [
        'Executive performance',
        'Athletic performance & rehab',
        'Concussion recovery',
        'Not sure yet',
      ],
      message: 'Anything you’d like Ben to know',
      messagePh: 'A few words about your goals…',
      submit: 'Apply for my tryout',
      sending: 'Sending…',
      ok: 'Thank you — your tryout request is in. If it’s a fit, we’ll reach out to book your Performance Needs Analysis.',
      err: `Something went wrong sending that. Please email ${site.email} directly and we’ll pick it up from there.`,
      note: 'Your details are used only to arrange your analysis. No list, no sharing.',
    },
    faqs: [
      {
        q: 'What happens after I apply?',
        a: '<p>You will hear back with next steps. If it looks like a fit, we book the free 20-minute virtual analysis; if it is not, you will be told directly rather than left waiting.</p>',
      },
      {
        q: 'Is the analysis really free?',
        a: '<p>Yes. It is a genuine assessment and the takeaway plan is yours to keep regardless of what you decide afterwards.</p>',
      },
      {
        q: 'Do I need equipment or a particular space for the call?',
        a: '<p>No — just enough floor space to stand and move a little, and a camera that can see you. No equipment needed.</p>',
      },
      {
        q: 'Can the analysis be done in Spanish?',
        a: '<p>Yes. Just note it in the form and the call will be conducted in Spanish.</p>',
      },
      {
        q: 'What if I’m not an executive?',
        a: '<p>The same analysis is the entry point for athletes and for people recovering from concussion. Select the option that fits in the form.</p>',
      },
    ],
    related: [
      { route: 'programs', label: 'Pricing', title: 'Programs and membership tiers' },
      { route: 'executive', label: 'For executives', title: 'Executive performance coaching' },
      { route: 'faq', label: 'Questions', title: 'Frequently asked questions' },
      { route: 'contact', label: 'Contact', title: 'Other ways to get in touch' },
    ],
  },

  /* ====================================================================== */
  contact: {
    seo: {
      title: 'Contact Ben Velazquez — NYC Performance Rehabilitation',
      description:
        'Get in touch with Ben Velazquez — coaching, the concussion program, speaking and media. New York City, virtual worldwide, in English or Spanish.',
    },
    hero: {
      kicker: 'Contact',
      h1: 'Get in touch.',
      lede: 'For coaching enquiries, the concussion program, speaking, seminars or media — here is how to reach the team.',
      ctas: [APPLY_CTA],
    },
    answer: [
      `The fastest route for coaching enquiries is the free Performance Needs Analysis application. For everything else — the concussion program, speaking, seminars, media or partnerships — email ${site.email}.`,
      'Ben is based in New York City and works virtually worldwide, in English or Spanish.',
    ],
    facts: [
      { k: 'Coaching enquiries', v: '<a href="/apply/">Apply for a free analysis</a>' },
      { k: 'Email', v: `<a href="mailto:${site.email}">${site.email}</a>` },
      { k: 'Concussion program', v: '<a href="/concussion-recovery/">Exercise-based recovery</a>' },
      { k: 'Based in', v: 'New York City, NY' },
      { k: 'Availability', v: 'Virtual worldwide · in person NYC' },
      { k: 'Languages', v: 'English · Spanish' },
    ],
    faqs: [
      {
        q: 'What is the fastest way to reach Ben?',
        a: '<p>For coaching, the <a href="/apply/">analysis application</a> — it goes straight into the intake queue. For anything else, email is the fastest route.</p>',
      },
      {
        q: 'Do you take speaking or seminar bookings?',
        a: `<p>Yes. More than 1,000 professionals have been trained through Ben’s seminars. Email <a href="mailto:${site.email}">${site.email}</a> with dates, audience and format.</p>`,
      },
      {
        q: 'How do I ask about the concussion program?',
        a: `<p>Email <a href="mailto:${site.email}">${site.email}</a> and note that your enquiry is about the concussion program.</p>`,
      },
      {
        q: 'Do you work with clients outside the United States?',
        a: '<p>Yes. Virtual coaching is available worldwide, in English or Spanish.</p>',
      },
    ],
    related: [
      { route: 'apply', label: 'Coaching', title: 'Book your free needs analysis' },
      { route: 'concussion', label: 'Concussion', title: 'Exercise-based concussion recovery' },
      { route: 'about', label: 'Background', title: 'About Ben Velazquez' },
      { route: 'faq', label: 'Questions', title: 'Frequently asked questions' },
    ],
  },

  /* ====================================================================== */
  podcast: {
    seo: {
      title: 'The Ben Velazquez Podcast — Performance & Longevity',
      description:
        'Conversations on performance, recovery and longevity with the people who live at the top — hosted by NYC performance rehabilitation specialist Ben Velazquez.',
    },
    hero: {
      kicker: 'Podcast',
      h1: 'The Ben Velazquez Podcast.',
      lede: 'Conversations on performance, recovery, and longevity with the people who live at the top.',
      ctas: [{ href: site.links.podcast, label: 'Listen now' }, { route: 'insights', label: 'Read the insights', ghost: true }],
    },
    answer: [
      'The Ben Velazquez Podcast features conversations on performance, recovery and longevity with athletes, practitioners and executives operating at the highest level.',
      'It is hosted by Ben Velazquez, a New York City performance rehabilitation specialist with more than 20 years working with athletes across the NFL, NHL and MLB.',
    ],
    faqs: [
      {
        q: 'What is the podcast about?',
        a: '<p>Performance, recovery and longevity — the practical decisions that keep people operating at a high level over decades rather than seasons.</p>',
      },
      {
        q: 'Where can I listen?',
        a: '<p>Episodes and platform links are published here as they are released.</p>',
      },
      {
        q: 'How can I suggest a guest or appear on the show?',
        a: `<p>Email <a href="mailto:${site.email}">${site.email}</a> with a short note on the topic and why it fits.</p>`,
      },
    ],
    related: [
      { route: 'insights', label: 'Reading', title: 'Weekly insights' },
      { route: 'about', label: 'Background', title: 'About Ben Velazquez' },
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'apply', label: 'Start here', title: 'Book your free needs analysis' },
    ],
  },

  /* ====================================================================== */
  whatIUse: {
    seo: {
      title: 'What I Use — Recovery & Focus Tools | Ben Velazquez',
      description:
        'The products Ben Velazquez actually reaches for: clean energy, recovery and drug-free performance tools he uses himself and recommends to those he trains.',
    },
    hero: {
      kicker: 'What I use',
      h1: 'The products I actually reach for.',
      lede: 'A short list of things I use myself and recommend to the people I train. I’ve arranged access for you directly.',
      ctas: [],
    },
    answer: [
      'This page lists the products Ben Velazquez personally uses and recommends to clients: GTG Energy nicotine-free nootropic pouches, 27:17 Recovery performance cream, and Super Patch drug-free vibrotactile wearables.',
      'These are affiliate relationships: Ben may earn a commission on purchases made through these links, at no extra cost to you. Products are listed because he uses them, not because of the commission.',
    ],
    partners: [
      {
        logo: 'gtg',
        mark: 'GTG',
        name: 'GTG Energy™',
        tag: 'Focus & energy',
        cat: 'Nicotine-free nootropic pouches · clean focus, no crash',
        quote:
          '“I preach clean energy over stimulants that spike and crash. GTG is exactly that — sharp focus without nicotine, without the jitters. It’s what I keep on me for long days with clients.”',
        cta: 'Shop GTG Energy',
        href: site.links.gtg,
      },
      {
        logo: 'p2717',
        mark: '27:17',
        name: '27:17 Recovery',
        tag: 'Back soon',
        soldOut: true,
        cat: 'Performance recovery cream · copper peptide, arnica, MSM · drug-test safe',
        quote:
          '“Recovery isn’t rest — it’s performance. 27:17 is the topical I trust to help the body rebuild between sessions, and it’s clean enough for drug-tested athletes. A staple in my recovery toolkit.”',
        cta: 'Get notified when it’s back',
        href: site.links.p2717,
        ghost: true,
      },
      {
        logo: 'sp',
        mark: 'SP',
        name: 'Super Patch',
        tag: 'Drug-free tech',
        cat: 'Drug-free vibrotactile wearables · energy, focus, sleep & recovery',
        quote:
          '“Drug-free tools that actually do something are rare. I’ve felt the difference with Super Patch for energy and focus on long days — no stimulants, nothing that shows up on a test. An easy way to keep my athletes and clients dialed in.”',
        cta: 'Shop Super Patch',
        href: site.links.superpatch,
      },
    ],
    disclosure:
      'Disclosure: I may earn a commission on purchases made through these links, at no extra cost to you. I only list products I use myself.',
    faqs: [
      {
        q: 'Do you earn a commission on these products?',
        a: '<p>Yes, on some of them, at no extra cost to you. Every product listed is one Ben uses himself — the commission does not determine what appears here. See the <a href="/affiliate-disclosure/">full affiliate disclosure</a>.</p>',
      },
      {
        q: 'Are these products safe for drug-tested athletes?',
        a: '<p>27:17 Recovery is formulated to be drug-test safe, and Super Patch is a drug-free vibrotactile wearable with nothing to test for. GTG Energy pouches are nicotine-free. Athletes subject to testing should always verify any product against their own governing body’s current list before use.</p>',
      },
      {
        q: 'Are supplements part of your programs?',
        a: '<p>No. Programming is built on assessment, decompression and training. These are tools some clients find useful, not a component of the method.</p>',
      },
      {
        q: 'Do members get access to these products?',
        a: '<p>Core and Concierge members get member access to partner products as part of their membership.</p>',
      },
    ],
    related: [
      { route: 'disclosure', label: 'Legal', title: 'Full affiliate disclosure' },
      { route: 'method', label: 'The method', title: 'Assess, decompress, build to last' },
      { route: 'programs', label: 'Pricing', title: 'Programs and membership tiers' },
      { route: 'insights', label: 'Reading', title: 'Weekly insights' },
    ],
  },

  /* ====================================================================== */
  privacy: {
    seo: {
      title: 'Privacy Policy | Ben Velazquez',
      description:
        'How benvelazquez.com collects, uses and protects your information. What we store, what we never do, and how to have your data removed.',
    },
    hero: { kicker: 'Legal', h1: 'Privacy policy', lede: 'Last updated: July 2026.', ctas: [] },
    body: `<p>This site is operated by Ben Velazquez. This policy explains what information is collected, why, and what you can do about it. It is written to be read, not to be survived.</p>
<h2>What is collected</h2>
<p>The only information collected is what you type into the application or contact form: your name, your email address, the option you select, and any message you write. Nothing else is requested and nothing else is stored.</p>
<h2>What it is used for</h2>
<p>Solely to respond to your enquiry and, where relevant, to arrange your Performance Needs Analysis. Your details are not sold, rented, or shared with third parties for marketing. You are not added to a mailing list by submitting the form.</p>
<h2>Analytics and tracking</h2>
<p>This site uses no advertising cookies, no third-party tracking pixels and no cross-site profiling. Aggregate, anonymous traffic statistics may be collected by the hosting platform for operational purposes; these do not identify you.</p>
<h2>Third-party embeds</h2>
<p>Videos on this site are loaded behind a click-to-play facade. YouTube receives no data from you unless you actively press play. Links to partner products are external sites with their own policies.</p>
<h2>Data retention</h2>
<p>Enquiry details are retained only as long as needed to handle your enquiry and any resulting engagement.</p>
<h2>Your rights</h2>
<p>You can ask what is held about you, ask for it to be corrected, or ask for it to be deleted, at any time. Email ${site.email} and it will be actioned.</p>
<h2>Changes</h2>
<p>If this policy changes materially, the date at the top of this page will change with it.</p>
<h2>Contact</h2>
<p>Questions about privacy: ${site.email}.</p>`,
  },

  terms: {
    seo: {
      title: 'Terms of Use | Ben Velazquez',
      description:
        'Terms of use for benvelazquez.com, including the health and medical disclaimer that applies to all content on this site.',
    },
    hero: { kicker: 'Legal', h1: 'Terms of use', lede: 'Last updated: July 2026.', ctas: [] },
    body: `<h2>Health and medical disclaimer</h2>
<p>The content on this site is provided for general information and education. It is not medical advice, and it does not create a practitioner–patient relationship. It is not a substitute for assessment, diagnosis or treatment by a qualified healthcare professional.</p>
<p>Always consult a physician before beginning, changing or stopping any exercise, rehabilitation or nutrition program — particularly if you have an existing injury, a diagnosed condition, or are recovering from a concussion.</p>
<p><strong>Concussion is a medical condition.</strong> Nothing on this site replaces physician assessment, diagnosis or clearance. If you are experiencing worsening headache, repeated vomiting, seizures, weakness or numbness, increasing confusion or drowsiness after a head injury, seek emergency care immediately.</p>
<h2>No guarantee of results</h2>
<p>Testimonials on this site describe the experience of the named individuals who provided them. Individual results vary with training history, adherence, medical status and many other factors. Nothing here is a promise of a particular outcome.</p>
<h2>Use of this site</h2>
<p>You may read, share and link to this site freely. Content, copy and design are the property of Ben Velazquez and may not be reproduced commercially without permission.</p>
<h2>External links</h2>
<p>Links to third-party sites, including partner products, are provided for convenience. Those sites are governed by their own terms and policies, and are not controlled by this site.</p>
<h2>Affiliate relationships</h2>
<p>Some outbound product links are affiliate links. See the <a href="/affiliate-disclosure/">affiliate disclosure</a>.</p>
<h2>Pricing</h2>
<p>Prices shown on this site are current at the time of publication and may change. The terms that apply to any engagement are those confirmed in writing at the time of booking.</p>
<h2>Contact</h2>
<p>Questions about these terms: ${site.email}.</p>`,
  },

  disclosure: {
    seo: {
      title: 'Affiliate Disclosure | Ben Velazquez',
      description:
        'Full disclosure of affiliate relationships on benvelazquez.com — which links earn a commission, and how products are chosen.',
    },
    hero: { kicker: 'Legal', h1: 'Affiliate disclosure', lede: 'Last updated: July 2026.', ctas: [] },
    body: `<p>Some links on this site — principally on the <a href="/what-i-use/">What I use</a> page — are affiliate links. If you buy through one, I may earn a commission. It costs you nothing extra.</p>
<h2>How products get listed</h2>
<p>A product appears on this site because I use it myself and recommend it to the people I train. The commercial relationship follows the recommendation; it does not create it. If I stop using something, it comes off the page.</p>
<h2>Current relationships</h2>
<ul>
<li><strong>GTG Energy™</strong> — nicotine-free nootropic pouches. Affiliate relationship.</li>
<li><strong>27:17 Recovery</strong> — performance recovery cream. Affiliate relationship.</li>
<li><strong>Super Patch</strong> — drug-free vibrotactile wearables. Affiliate relationship.</li>
</ul>
<h2>What is not affected</h2>
<p>No coaching recommendation, program design or assessment finding is influenced by a commercial relationship. Supplements and products are not a component of the method; they are tools some clients find useful.</p>
<h2>Athletes subject to testing</h2>
<p>If you compete under anti-doping rules, verify any product against your governing body's current list before use, regardless of how it is described here or elsewhere. The responsibility for what is in your body is always yours.</p>
<h2>Questions</h2>
<p>Email ${site.email}.</p>`,
  },

  /* ====================================================================== */
  notFound: {
    seo: {
      title: 'Page not found | Ben Velazquez',
      description: 'That page does not exist. Here are the most useful places to go instead — programs, the method, executive coaching and the weekly insights.',
    },
    hero: {
      kicker: 'Error 404',
      h1: 'That page doesn’t exist.',
      lede: 'The link may be old, or the address slightly off. Here is where most people are heading.',
      ctas: [{ route: 'home', label: 'Back to the home page' }, APPLY_CTA],
    },
    related: [
      { route: 'executive', label: 'For executives', title: 'Executive performance coaching' },
      { route: 'athletes', label: 'For athletes', title: 'Performance rehabilitation' },
      { route: 'programs', label: 'Pricing', title: 'Programs and membership tiers' },
      { route: 'insights', label: 'Reading', title: 'Weekly insights' },
    ],
  },
};

/** Shared credential copy, reused on home and about. */
export const credentialsCopy = {
  bookTag: 'Published author',
  bookBody:
    'Co-contributing author on the science of fascia — the foundation of the work I do with every client.',
  bookCta: 'Get the book →',
  credsTag: 'Credentials',
  creds: [
    'Licensed Soma-Therapist (Performance Physical Therapy)',
    'Certified Strength & Conditioning Specialist (CSCS)',
    'ACSM Exercise Specialist',
    'ISSA Sports Performance Nutritionist',
    'Studied posturology under Dr. Bernard Bricot',
    'Member — NSCA · ACSM · ISSA',
  ],
  recogTag: 'Recognised in',
  recogDoc: 'Being: Mariano (FOX Sports)',
};
