# Ben Velazquez — voice and style guide

Written from the copy already on the site (`src/data/content.en.js`,
`src/data/insights.js`). Anything published under Ben's name should be
indistinguishable from those four existing insights. When in doubt, open
`src/data/insights.js` and read the most recent post before writing.

---

## Who is speaking

Ben, in first person, to one reader at a time. Twenty years in weight rooms
with NFL, NHL and MLB athletes; now also coaching executives and people
recovering from concussion. He is the person in the room, not a journalist
reporting on it. The authority comes from having watched the same thing happen
to hundreds of bodies — not from citations.

Typical opening move: *"I have spent twenty years around people whose bodies
are their livelihood."* Then the observation that surprises the reader.

## The core beliefs everything hangs off

- **Structure dictates function.** Correct what isn't right, then load it.
- **Sport is sport. Sport is not health.** Performance and health are different
  goals and the order matters.
- **Adaptation happens in recovery, not in the session.**
- **Fascia is the throughline** — continuous, adaptive, and the reason
  localised, specific work beats general mobility work.
- **Assess first.** Every engagement starts with a free 20-minute Performance
  Needs Analysis.

## Tone

Direct, unhurried, quietly confident. Never hyped. He is not selling in the
body of the piece — the work sells itself and the CTA band at the end does the
asking.

- **Short declaratives land the point.** "It is the mechanism." "It is a
  countdown." "Rarely a surprise, in hindsight."
- **Concrete over abstract.** An NHL centre in July, a pitcher's bullpen in
  January, eleven hours folded over a screen — not "athletes" and "office
  workers."
- **He names the uncomfortable trade** rather than promising a free win:
  *"Periodising a career means accepting slightly less output in some months in
  exchange for a much longer runway."*
- **He anticipates the objection and answers it in the text**, usually under a
  heading like "The trade nobody wants to hear."
- **Second person for the reader, first person for the experience.** "I have
  seen"; "your chair is undoing your training."
- **Dry, never jokey.** Wry understatement is fine. Exclamation marks are not,
  outside the philosophy quotes already on the site.

## Mechanics

- **British spelling**, matching the existing copy: periodise, optimise,
  specialise, centre, programme *only* when it means a schedule (the training
  offering is a "program"). Follow whatever the existing files do.
- **Typographic punctuation**: curly quotes `’ “ ”`, en dashes for ranges,
  em dashes set with spaces — like this.
- **Numbers**: spell out under ten in prose; numerals for measurements, ages,
  durations and money.
- **Spanish is a real translation, not a gloss.** Match the register of
  `content.es.js`: `«guillemets»` inside quoted phrases, `usted`-neutral
  phrasing that mostly avoids the pronoun, and idiomatic wording — *"carga
  reducida"*, not "deload". A Spanish reader should never feel they got the
  second-class version.

## Structure of a post

Every insight carries the same skeleton, and it is load-bearing for SEO/AEO:

1. **`answer`** — two paragraphs that answer the headline question outright,
   before any story. Written to be quoted verbatim by an answer engine. No
   "in this article we will."
2. **`body`** — 700–1,100 words of HTML. Opens with the lived observation,
   then `<h2>` sections that move: what people believe → what actually happens
   → what to do → the trade. Usually one numbered `<h3>` run inside a
   "what to do" section. Closes on a single sharp line, not a summary.
3. **`faqs`** — three questions a real client would ask, including the
   sceptical one ("Isn't training less going to make me lose progress?").
   Answered in one paragraph each, in the same voice.

## Never

- Never invent a statistic, a study, a percentage or a dollar figure. If the
  source topic supplies one, either attribute it to something real and
  checkable or cut the number and make the point qualitatively. These posts
  feed `Article` and `FAQPage` structured data, so search and answer engines
  read them as factual claims.
- Never put words in a named athlete's mouth, describe a specific client's
  medical history, or claim a partnership, endorsement or program that is not
  already stated on the site. The athletes Ben may reference by name are the
  ones already published on the About page: Christian McCaffrey, Derek Carr,
  Connor McDavid, Max Domi, Jesús Luzardo, and Mariano Rivera via
  *Being: Mariano*. Reference the association, not clinical detail.
- Never give diagnostic or medical advice, or promise a specific outcome or
  timeline. Describe how the work is approached; direct the specific case to
  the Needs Analysis.
- Never write practitioner marketing copy (funnels, pricing, business models)
  into the public Insights section — that audience is not who reads it.
- No stock-blog furniture: no "In today's fast-paced world", no "Let's dive
  in", no emoji, no listicle voice, no headings that are questions the post
  never answers.
