import type { Product } from "./types";

/**
 * Retailer-linked gift recommendations for a daughter, weighted toward the
 * cultural and language gifts that overlap with the younger listings.
 *
 * Same rules as the rest of the linked catalogue: the editorial content is
 * category buying advice — how to choose this kind of gift and what goes wrong
 * — not a hands-on review. We hold no copy of any of these books and no unit of
 * the keepsake, so nothing here claims paper weight, binding or finish that
 * cannot be read off the listing, and no prices or ratings appear.
 *
 * Facts about the writing system itself — that the fidel is an abugida, that
 * Tigrinya and Amharic share a script and not a character inventory — are
 * properties of the language rather than of any one book, and are safe to state
 * plainly. Claims about what is inside a given book are hedged accordingly.
 *
 * `budget` is our own editorial estimate of what the category typically costs.
 */
export const daughterProducts: Product[] = [
  {
    slug: "crochet-bee-keepsake",
    title: "Hand-Crocheted Bee with Message Tag",
    tag: "Keepsake",
    summary:
      "A small crocheted bee sold with a printed message tag addressed to a daughter — a desk-sized object for a room she has only just moved into.",
    bestFor: "Daughter · Moving out · A small gesture",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FP219PXK?linkCode=ll2&tag=mesmerdesign-20&linkId=71cfe848dc6f7a684a313cf2aa543471&language=en_US",
    art: { hue: 45, motif: "weave" },
    updated: "2026-09-09",
    tags: ["keepsake", "crochet", "handmade", "daughter", "moving out", "desk", "budget"],
    placements: [
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-her", subcategory: "young-girl" },
      { category: "gifts-by-occasion", subcategory: "graduation" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "The Gift for the Room She Has Just Moved Into",
      standfirst:
        "Small crocheted keepsakes attract a lot of sentimental writing and very little useful thought. The narrower question is the one worth answering: what does an object like this actually do once it is sitting on a desk?",
      why: [
        "Its real job is to occupy a room that belongs to nobody yet. A first dorm room or a first flat is furnished with issued desks, a stranger's plates and a mattress with a history you would rather not know. A small object brought from home is one of very few things in that room with a past attached to it, and in the first few weeks it does far more work than its size suggests. The scale is the point — it has to earn a corner of a desk without becoming a decision about where to put it.",
        "The message tag is the part that lasts, and it is the part to read before ordering. You are not writing this sentiment; it is printed, fixed, and chosen by someone else. Where the wording happens to sound like you, the tag routinely outlives the toy — it ends up inside a book or pinned to a noticeboard long after the bee itself has been squashed into a suitcase. Where the wording is greeting-card filler, you have given a small yellow object and nothing else.",
        "It posts anywhere, which matters more for Habesha families than it would for most. Relatives are spread across countries and the practical gift is frequently the light, unbreakable, low-value one that will not attract a customs form or arrive in pieces. A crocheted toy is close to the ideal shape for that constraint.",
      ],
      whoFor: [
        "A daughter starting university or moving into her first place",
        "A younger daughter, who will treat it as a toy rather than an ornament",
        "Anyone you are posting to another country",
        "A small companion piece alongside a larger present",
      ],
      whyGift: [
        "Sized for a desk rather than a shelf that needs clearing first",
        "Carries a written message that tends to outlive the object",
        "Light and unbreakable, so it survives international post",
      ],
      considerations: [
        "\"Emotional support animal\" is marketing language and nothing more. Listings in this category lean on the phrase heavily; it carries no clinical meaning, confers no assistance-animal status and describes no property of the object. It is a soft toy with a nice tag, which is a perfectly good thing to be — just do not repeat the claim to the person you are giving it to.",
        "Read the exact tag wording before you order, because you cannot change it. Sellers here commonly run several different messages from a single listing page, and the phrase shown in the main photograph is not always the one attached to the variant selected in the dropdown.",
        "Check the measurements rather than the photograph. Handmade crochet items are consistently smaller in the hand than they look on screen, and the figure in the specification is the honest one.",
        "Handmade means every unit differs — stitch tension, the set of the face, the exact shade of yarn. That is either the charm of the thing or the complaint about it, depending entirely on what was expected.",
        "It is not enough to carry a major occasion alone. As the whole of an eighteenth birthday it will read as an afterthought; alongside something else it reads as the thoughtful half.",
      ],
      pros: [
        "The right size for a desk in an unfamiliar room",
        "The message tag is usually the part that gets kept",
        "Light, unbreakable and cheap to post internationally",
        "Inexpensive enough to send as an addition rather than the gift",
      ],
      cons: [
        "\"Emotional support\" framing is sales copy, not a property",
        "Handmade variation from the photograph is guaranteed",
        "Too small to stand alone at a significant occasion",
      ],
      alternatives: ["crochet-sister-doll", "habesha-coloring-book", "lockable-diary-journal"],
    },
  },
  {
    slug: "habesha-coloring-book",
    title: "Habesha Coloring Book",
    tag: "Books",
    summary:
      "Line drawings of traditional dress and daily life, printed to be coloured in — an hour of close attention to detail she would otherwise only ever glance at.",
    bestFor: "Daughter · Young girl · No language required",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0HFK1148B?linkCode=ll2&tag=mesmerdesign-20&linkId=d3dd073678bfdfedcbfd61e063cc2972&language=en_US",
    art: { hue: 330, motif: "rays" },
    updated: "2026-09-09",
    tags: ["books", "coloring", "kids", "habesha", "culture", "daughter", "budget"],
    placements: [
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-her", subcategory: "young-girl" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "ethiopian-eritrean-gifts", subcategory: "shared-cultural" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Colouring In Is How a Child Looks at Something Long Enough to Remember It",
      standfirst:
        "A child can walk past a netela a thousand times and still not be able to tell you what the border on it looks like. Hand her the same border as an outline to fill in and she will know it for the rest of her life. That is the entire argument for this kind of book.",
      why: [
        "Colouring forces sustained attention on detail in a way that looking never does. To colour the border of a habesha kemis you have to follow it, band by band, and decide where one shape ends and the next begins. Twenty minutes of that teaches a child more about how tibeb is actually constructed than a decade of seeing it worn by relatives at weddings, because seeing is passive and tracing is not.",
        "It puts her in the position of maker rather than spectator. Almost every cultural object in a diaspora home is something adults own and children are told to be careful around — the good coffee set, the woven basket, the framed cross. A colouring book is the rare cultural item that is hers to work on and allowed to be imperfect, and the finished page usually ends up on a fridge, which is a small but real act of claiming.",
        "It asks nothing of her language, and that removes the usual obstacle. Language books are the default cultural gift for a child and they carry an implicit test — a page she cannot read is a page that makes her feel behind. A colouring book has no reading level and no right answer, so it works equally for a daughter who is shy about her Amharic or Tigrinya and for one who has none at all.",
      ],
      whoFor: [
        "A child somewhere between four and eleven, depending on how fine the line work is",
        "An older daughter or a teenager who colours to switch off",
        "A family wanting a cultural gift with no language requirement attached",
        "Long flights, waiting rooms and Sunday afternoons",
      ],
      whyGift: [
        "Teaches the visual detail of dress and daily life by making her trace it",
        "Requires no Amharic or Tigrinya whatsoever",
        "Cheap, light, and genuinely used rather than displayed",
      ],
      considerations: [
        "Line weight decides the age, and listings almost never say so plainly. Thick, simple outlines suit a small child and bore a teenager; fine, dense detail is absorbing for an older reader and demoralising for a six-year-old. Judge from the sample images rather than from any age range printed on the cover.",
        "Check whether the pages are printed on one side only. Double-sided printing means felt tips bleed through and destroy the drawing on the reverse, which limits her to pencils — fine if you know in advance, annoying if you have also bought the markers.",
        "A paperback binding will not lie flat. Expect the spine to need breaking or weighting down, and expect the innermost part of each drawing to sit in the gutter. This is normal for the format rather than a defect.",
        "\"Habesha\" in a title tells you nothing about which traditions are inside. The umbrella covers Ethiopian and Eritrean dress, and a book may lean heavily one way. Look at the illustrations for the thing you actually want rather than trusting the word.",
        "Colouring books get used up. That is the nature of the format rather than a shortcoming, but it does mean this is a finite gift — and it is worth pairing with a decent set of pencils if you want it opened the same day rather than shelved.",
      ],
      pros: [
        "Builds real familiarity with cultural dress and its details",
        "Works with no reading ability in either language",
        "Wide usable age range, depending on the line work",
        "Inexpensive, light and easy to post",
      ],
      cons: [
        "Age suitability is hard to judge from a listing",
        "Double-sided pages rule out felt tips",
        "Finished once it is finished",
      ],
      alternatives: [
        "ethiopian-childrens-book-set",
        "learn-amharic-alphabet-46-days",
        "crochet-bee-keepsake",
      ],
    },
  },
  {
    slug: "learn-amharic-alphabet-46-days",
    title: "Learn the Amharic Alphabet in 46 Days",
    tag: "Language",
    summary:
      "A day-by-day workbook for the fidel — the wall almost every heritage learner hits, and the reason most of them quietly stop.",
    bestFor: "Daughter · Heritage learner · Teen and up",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0HF4S7ZMT?linkCode=ll2&tag=mesmerdesign-20&linkId=086d2cc47908acf0b7fc632e9706ac88&language=en_US",
    art: { hue: 95, motif: "arch" },
    updated: "2026-09-09",
    tags: ["books", "language", "amharic", "fidel", "learning", "daughter", "heritage"],
    placements: [
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-him", subcategory: "son" },
      { category: "gifts-for-him", subcategory: "teen-boy" },
      { category: "ethiopian-eritrean-gifts", subcategory: "ethiopian-inspired" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Why the Fidel Defeats People, and What a 46-Day Plan Fixes",
      standfirst:
        "Nearly every second-generation Habesha adult can speak some Amharic and read none of it. The reason is arithmetic, and once you have seen the arithmetic the case for a structured workbook makes itself.",
      why: [
        "The fidel is not an alphabet of twenty-six letters, and approaching it as one is where people come unstuck. It is an abugida: thirty-three base consonant shapes, each written in seven forms according to the vowel that follows, which is more than two hundred characters before the labiovelar extras are counted. Presented as a single wall chart — which is how most people meet it, pinned up in a relative's kitchen — it looks unlearnable, and the reasonable response to something unlearnable is to stop looking at it.",
        "Taken one base letter at a time, the wall turns into a staircase. The seven forms of a letter are systematic modifications of a single shape rather than seven unrelated symbols, so what is actually being memorised is thirty-three shapes and a set of rules. A day-per-letter plan is that insight converted into a schedule, and the number of days on the cover of a book like this is essentially the base inventory plus review days.",
        "Reading the script is the thing that unlocks everything else. A learner who can sound out the fidel can read a menu, a church programme, a wedding invitation and a message from her grandmother — and can use every other Amharic resource in existence, none of which are written in transliteration. Without it she is dependent on somebody else's romanisation for life. That leverage is why this is the highest-value cultural gift on this page, despite being one of the cheapest.",
      ],
      whoFor: [
        "A daughter who speaks or half-speaks Amharic and cannot read a word of it",
        "A teenager or an adult — this is not a picture book for small children",
        "Anyone who has bounced off a fidel wall chart before",
        "A learner who responds to structure and would never build her own",
      ],
      whyGift: [
        "Attacks the exact point at which heritage learners give up",
        "Turns an intimidating chart into a sequence that can be finished",
        "Unlocks every other Amharic resource once completed",
      ],
      considerations: [
        "This teaches the script, not the language. She will finish able to sound out words correctly and still not know what many of them mean, which is the right order to learn in but the wrong expectation to leave unspoken. A gift labelled \"learn Amharic\" that turns out to be a handwriting workbook can land as a disappointment purely through mismatched framing.",
        "Several fidel characters are pronounced identically — ሀ, ሐ and ኀ; ሰ and ሠ; ጸ and ፀ. This makes no difference to reading and a great deal of difference to spelling. No workbook can resolve it, and it is worth her knowing that it is a quirk of the script rather than a failure of hers.",
        "A workbook is written in, which makes it a single-user object. That is fine for one child and a problem for three; buy per learner rather than per household.",
        "Forty-six days is a real commitment, and a gift that asks for daily work is a genuine risk. It lands well with someone who has already said she wants to learn, and badly as a hint. Be honest with yourself about which one you are doing before you order it.",
        "For an Eritrean family, buy the Tigrinya edition instead. The two languages share the script but not the same live character inventory, and handing a Tigrinya speaker an Amharic workbook is a small but real misstep.",
      ],
      pros: [
        "Breaks the fidel into a sequence that can actually be completed",
        "Provides structure for someone who would not organise her own study",
        "The one skill that unlocks all other Amharic material",
        "Suits teenagers and adults equally well",
      ],
      cons: [
        "Teaches the script only — no vocabulary, no grammar",
        "Requires daily effort, which not every recipient wants from a gift",
        "Written in, so it cannot be handed on to a sibling",
      ],
      alternatives: [
        "amharic-word-search-puzzles",
        "master-tigrinya-alphabet-43-days",
        "habesha-coloring-book",
      ],
    },
  },
  {
    slug: "amharic-word-search-puzzles",
    title: "2000 Amharic Words Word Search Puzzles",
    tag: "Language",
    summary:
      "A hundred themed word searches in Ge'ez script, each word given with its English meaning — fidel drilling in a form nobody resents doing.",
    bestFor: "Daughter · Heritage learner · Practice without drilling",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0HBY1BF9S?linkCode=ll2&tag=mesmerdesign-20&linkId=e362cfcda2fe71ab65d0b04f13fc389b&language=en_US",
    art: { hue: 110, motif: "rays" },
    updated: "2026-09-09",
    tags: ["books", "language", "amharic", "puzzles", "vocabulary", "daughter", "heritage"],
    placements: [
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-him", subcategory: "son" },
      { category: "gifts-for-him", subcategory: "teen-boy" },
      { category: "ethiopian-eritrean-gifts", subcategory: "ethiopian-inspired" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Word Searches Are Character Recognition Training, Whether They Feel Like It or Not",
      standfirst:
        "The mechanism here is genuinely sound and almost nobody bothers to explain it: finding a word in a grid requires comparing it character by character, and that comparison is precisely the skill that reading the fidel demands.",
      why: [
        "Searching a grid forces the slow, deliberate scanning that builds recognition. Hunting for a word makes skimming impossible — each character has to be checked against the target, rejected, and the eye moved on. Repeat that a few thousand times and the shapes stop being worked out and start simply being read. It is the same drilling a workbook asks for, arriving in a form that does not feel like being set homework.",
        "Effort is what fixes memory, and a puzzle extracts effort willingly. Reading a chart passively feels productive and largely is not; active recall is what sticks. The advantage of the puzzle format is not that it is more efficient per minute but that the minutes actually happen — a puzzle book gets opened on the evenings when a textbook stays shut, and consistency beats intensity over a year.",
        "Pairing every word with its English meaning is what makes this vocabulary practice rather than shape-matching. The listing specifies that each word is given with its meaning across a hundred themed puzzles, on themes that are the practical ones — greetings, numbers, colours, family, the body, food and drink, days and months. Without the glosses she would be pattern-hunting; with them she is learning words.",
      ],
      whoFor: [
        "A daughter who has learned the fidel and now needs mileage on it",
        "A heritage learner who grew up hearing Amharic and never learned to read it",
        "Anyone who has abandoned a textbook and would not abandon a puzzle",
        "A teenager who will do this and would not do a workbook",
      ],
      whyGift: [
        "Practice she will actually do rather than intend to do",
        "Builds vocabulary and script recognition in the same session",
        "Sits alongside whatever else she is using without conflicting with it",
      ],
      considerations: [
        "She needs to recognise most of the fidel already or this becomes miserable. Somebody starting from zero will spend ten minutes locating a single word and abandon the book. Give the alphabet workbook first and this one second — in that order they work well together; reversed, the second one never gets opened.",
        "It teaches words, not grammar or speech. She will finish with a large stock of nouns and no way to build a sentence out of them. That is a perfectly good thing for a puzzle book to be, provided nobody is expecting conversation as the outcome.",
        "It is written in, so it belongs to one person. Two learners in a house means two copies, and this is the most common miscalculation people make when buying language material for a family.",
        "The listing describes a large-format book of around a hundred pages with generous grids and a full answer key. That format is comfortable to work on at a table and awkward to carry — this is a kitchen-table book rather than a handbag one.",
        "For an Eritrean family, buy the Tigrinya edition of the same idea. The scripts overlap substantially; the everyday vocabulary does not, and the wrong book teaches the wrong language.",
      ],
      pros: [
        "Trains exactly the scanning that reading the fidel requires",
        "English meanings alongside, so it builds genuine vocabulary",
        "Low-pressure enough to be picked up voluntarily",
        "Answer key included, so a stuck puzzle does not end the habit",
      ],
      cons: [
        "Needs existing fidel recognition to be enjoyable",
        "Vocabulary only — no grammar and no speaking practice",
        "Large format and written in, so it is one person's copy",
      ],
      alternatives: [
        "learn-amharic-alphabet-46-days",
        "tigrinya-word-search-puzzles",
        "habesha-coloring-book",
      ],
    },
  },
  {
    slug: "master-tigrinya-alphabet-43-days",
    title: "Master the Tigrinya Alphabet in 43 Days",
    tag: "Language",
    summary:
      "The same day-by-day approach to the fidel, in Tigrinya — and Tigrinya material is scarce enough that this matters more than the Amharic equivalent does.",
    bestFor: "Daughter · Eritrean family · Heritage learner",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0GW6FT88H?linkCode=ll2&tag=mesmerdesign-20&linkId=3d68b87fc81406c041f7835bbea067cc&language=en_US",
    art: { hue: 205, motif: "arch" },
    updated: "2026-09-09",
    tags: ["books", "language", "tigrinya", "fidel", "learning", "eritrean", "daughter"],
    placements: [
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-him", subcategory: "son" },
      { category: "gifts-for-him", subcategory: "teen-boy" },
      { category: "ethiopian-eritrean-gifts", subcategory: "eritrean-inspired" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Tigrinya Material Is Scarce, Which Is the Whole Point",
      standfirst:
        "Anyone who has gone looking for Tigrinya learning resources knows the problem immediately: there is a reasonable shelf of Amharic material and very little sitting beside it. Scarcity is the strongest argument for this book.",
      why: [
        "Eritrean and Tigrayan families abroad are chronically underserved here, and that shortage shapes what happens to the language. Search for Amharic learning books and dozens come back; search for Tigrinya and the list runs out within a screen. What families do in response is predictable and unfortunate — they buy the Amharic book, because the Amharic book exists, and then discover it is not the language they were trying to pass on.",
        "The two languages share the Ge'ez script without sharing the same set of live characters, which is exactly why substituting one for the other does not work. Tigrinya uses letters that Amharic has effectively abandoned — ቐ is the obvious example — and the two differ in which characters are in active use. A learner working from an Amharic chart will be missing letters she needs and diligently drilling ones she will never write.",
        "The structural argument is the same one that applies to Amharic, and it is a good argument. The fidel is an abugida: a manageable inventory of base consonant shapes, each written in seven vowel forms, which means the apparently overwhelming two-hundred-plus characters are a much smaller set of shapes plus a rule for modifying them. A day-per-letter schedule turns that from a wall into a sequence, and the number on the cover is broadly the base inventory plus review.",
      ],
      whoFor: [
        "An Eritrean or Tigrayan family that has struggled to find anything at all",
        "A daughter who speaks Tigrinya and cannot read it",
        "A teenager or an adult, rather than a small child",
        "Anyone who has been making do with Amharic material for want of an alternative",
      ],
      whyGift: [
        "Fills a gap that is genuinely difficult to fill",
        "Correct for Tigrinya rather than an Amharic near-miss",
        "Structured enough to be finished rather than merely started",
      ],
      considerations: [
        "Check which language you are buying, every single time. This is the most common error in the category by a wide margin: the Amharic and Tigrinya editions of alphabet workbooks look near-identical in a search result, and arriving with the wrong one reads as carelessness about which family you were buying for.",
        "It teaches the script, not the language. She will read aloud accurately and will not necessarily understand what she has just read. That is the correct first step and a bad expectation to leave unstated.",
        "Forty-three days of daily work is a genuine ask of a recipient. As a gift it works for someone who has said she wants this; as an unrequested nudge it reads as homework with a bow on it, and it will sit unopened.",
        "A workbook is written in and cannot be passed to a younger sibling afterwards. Buy one per learner.",
        "Tigrinya has its own homophone problem in spelling, as Amharic does. Reading is unaffected; writing correctly takes longer than she will expect, and that is a property of the script rather than a sign she is doing badly.",
      ],
      pros: [
        "Addresses a real and persistent shortage of Tigrinya material",
        "Correct character inventory rather than an Amharic substitute",
        "Breaks the fidel into a finishable sequence",
        "Suits teenagers and adults",
      ],
      cons: [
        "Script only — no vocabulary and no grammar",
        "Demands daily effort across roughly six weeks",
        "Single-user workbook, so siblings need their own",
      ],
      alternatives: [
        "tigrinya-word-search-puzzles",
        "learn-amharic-alphabet-46-days",
        "habesha-coloring-book",
      ],
    },
  },
  {
    slug: "tigrinya-word-search-puzzles",
    title: "2000 Tigrinya Words Word Search Puzzles",
    tag: "Language",
    summary:
      "The Tigrinya companion to the Amharic word searches — the same character-by-character practice, in the language Eritrean families keep failing to find material for.",
    bestFor: "Daughter · Eritrean family · Practice without drilling",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0H3Z58GSH?linkCode=ll2&tag=mesmerdesign-20&linkId=92b85b35e467e2eb3d76293e04e2e623&language=en_US",
    art: { hue: 220, motif: "rays" },
    updated: "2026-09-09",
    tags: ["books", "language", "tigrinya", "puzzles", "vocabulary", "eritrean", "daughter"],
    placements: [
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-him", subcategory: "son" },
      { category: "gifts-for-him", subcategory: "teen-boy" },
      { category: "ethiopian-eritrean-gifts", subcategory: "eritrean-inspired" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "The Tigrinya Half of a Pair, and the Harder One to Find",
      standfirst:
        "Everything true of the Amharic word searches is true here. What differs is availability: Tigrinya puzzle books barely exist, and a learner who wants low-pressure practice in this language has almost nothing to choose between.",
      why: [
        "The mechanism is identical and it works. Finding a word in a grid means checking characters one at a time against a target, which is recognition training whether or not it feels like study. Do enough of it and the fidel stops being decoded character by character and starts being read at a glance — which is the entire difference between someone who can technically read Tigrinya and someone who does.",
        "What differs is the vocabulary, and that is not a small difference. Tigrinya and Amharic share a script and a great deal of history, and they remain separate languages with separate everyday words. A Tigrinya-speaking household drilling Amharic vocabulary is teaching its children a foreign language by accident, which happens constantly for the dull reason that the Amharic book is the one that turns up in the search results.",
        "It is the format most likely to survive contact with an actual teenager. A puzzle reads as a break rather than a task, and the practice that gets done beats the practice that is better in theory and never happens. For a daughter who has quietly stopped opening the textbook without ever announcing it, this is the version that keeps going.",
      ],
      whoFor: [
        "A daughter in an Eritrean or Tigrayan family who reads the script slowly",
        "Anyone who has learned the fidel and now needs volume rather than instruction",
        "A learner who finds textbooks a chore and puzzles a pastime",
        "Grandparents and grandchildren, who can work a page together",
      ],
      whyGift: [
        "Tigrinya practice material, which is genuinely hard to source",
        "Builds vocabulary and script fluency at the same time",
        "Low-pressure enough that it actually gets picked up",
      ],
      considerations: [
        "Confirm the language before ordering. The Amharic and Tigrinya editions of this kind of book sit side by side in search results with similar covers, and the wrong one arrives looking almost right — which is worse than arriving obviously wrong, because it may not be noticed until she opens it.",
        "Some fidel recognition is assumed. If she is still working the characters out, pair this with the Tigrinya alphabet workbook and give the workbook first; a puzzle book handed to a complete beginner is a puzzle book that gets closed.",
        "Vocabulary, not grammar. Expect a large stock of words and no sentences, and set expectations accordingly.",
        "Written in, so it belongs to one person. Buy per learner rather than per household.",
        "Answer keys matter more in this format than they sound. A puzzle she cannot finish and cannot check against anything is a puzzle that ends the habit — confirm one is included before ordering.",
      ],
      pros: [
        "Fills a real gap in Tigrinya practice material",
        "Trains character recognition through active searching",
        "Pleasant enough to be done voluntarily",
        "Pairs naturally with the Tigrinya alphabet workbook",
      ],
      cons: [
        "Assumes some existing fidel recognition",
        "Words only, with no grammar or conversation",
        "Easy to confuse with the Amharic edition when ordering",
      ],
      alternatives: [
        "master-tigrinya-alphabet-43-days",
        "amharic-word-search-puzzles",
        "habesha-coloring-book",
      ],
    },
  },
];
