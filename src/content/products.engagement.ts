import type { Product } from "./types";

/**
 * Engagement batch — the first products placed in the Engagement listing.
 *
 * The occasion has a constraint no other listing has: anything bought now
 * competes with a wedding list that does not exist yet. All three guides are
 * written around that problem rather than around the objects themselves.
 *
 * As everywhere else, this is category buying advice, not a hands-on review.
 * Specifications quoted here (sizes, materials, page counts) come from the
 * listings; nothing claims finish, durability or feel that we cannot observe.
 * `budget` is our own editorial band, never a price.
 */
export const engagementProducts: Product[] = [
  {
    slug: "crochet-engagement-toast",
    title: "Crocheted “Little Toast” Engagement Keepsake",
    tag: "Keepsake",
    summary:
      "A palm-sized crocheted slice of toast carrying a congratulations pun — bought to replace the engagement card rather than to sit alongside it.",
    bestFor: "Newly engaged couple · Engagement party · Instead of a card",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FP1RH4T1?linkCode=ll2&tag=mesmerdesign-20&linkId=de8c9a61da3f45e5c1a44a44e93c8cbb&language=en_US",
    art: { hue: 22, motif: "rays" },
    updated: "2026-09-16",
    tags: ["keepsake", "crochet", "handmade", "engagement", "card-alternative", "desk", "budget"],
    placements: [
      { category: "gifts-by-occasion", subcategory: "engagement" },
      { category: "gifts-by-occasion", subcategory: "celebration" },
      { category: "gifts-for-her", subcategory: "friend" },
    ],
    guide: {
      heading: "The Engagement Card Nobody Throws Away",
      standfirst:
        "An engagement announcement usually gets a card and a message. One of those lasts about a week. This is what happens when you spend the card money on something that stays on a desk instead.",
      why: [
        "Engagement gifts have a problem the rest of the calendar does not: the couple is about to be given a great many objects on purpose. Buy anything substantial now and it competes with a wedding list that has not been written yet — the same serving dish, the same frame, the same set of glasses, arriving a year early and without the registry to stop the duplication. A small keepsake sidesteps the whole question by not pretending to be a household gift at all.",
        "It is bought as a replacement for the card, not an addition to it. The default is a card plus a gift, and the card is in the recycling by the end of the month. The listing gives this at roughly 3.3 inches tall in cotton yarn, standing on two small feet, which is card-sized money spent on something that survives the clear-up after the party.",
        "The pun carries the congratulations, which is the part most people find hard. “A little toast to your engagement” says the warm thing on your behalf, so you are not stuck composing three sentences you do not mean in a card you do not want to buy. That is a different job from a joke gift given for its own sake — here the joke is the message.",
      ],
      whoFor: [
        "An engagement party where you will be one guest among many",
        "A couple who have not set a date, so wedding gifts are premature",
        "Someone who keeps small things on a desk or a shelf",
        "A long-distance congratulations — it posts in a padded envelope",
      ],
      whyGift: [
        "Marks the news without competing with the wedding list",
        "Costs about what a card and a gift bag cost, and outlives both",
        "Small and light enough to send abroad without thinking about it",
      ],
      considerations: [
        "Read the dimensions rather than the photograph. The listing gives it as roughly 2.8 x 2.2 x 3.3 inches, and small crocheted items are almost always shot in isolation against a plain background, which makes them look shelf-sized. This is desk-scale. If you are expecting a mantelpiece object you will be disappointed when it arrives.",
        "Handmade crochet varies from unit to unit. Stitch tension and the exact set of the face differ between pieces, which is the nature of the category rather than a fault — but it does mean the one that arrives will not match the listing photograph exactly. Do not buy it for somebody who expects factory uniformity.",
        "Cotton yarn collects dust and is awkward to clean properly. A kitchen shelf near a hob is the wrong home for it, and so is anywhere it will be handled constantly.",
        "If the couple are minimalists, or are about to move in together, think twice. A small object with a joke on it is exactly the sort of thing that goes into the charity bag during a move. A good bottle and a handwritten note does the same job and leaves no residue.",
        "It is not a toy, whatever it looks like. Small crocheted parts and a household with a baby or a determined pet are a poor combination.",
        "If you are close family and the gift is meant to be the gift, this is not enough on its own. It is a card substitute, so pair it with something else rather than letting it stand alone.",
      ],
      pros: [
        "Acknowledges the engagement without touching the wedding list",
        "Outlasts the card it is bought instead of",
        "Stands unaided, so it needs no frame, hook or shelf fitting",
        "Light and small enough to post cheaply",
      ],
      cons: [
        "Genuinely small — desk-scale rather than a shelf statement",
        "Handmade variation means yours will differ from the photograph",
        "A joke object is the first thing to go in a house move",
        "Cotton yarn holds dust and does not clean easily",
      ],
      alternatives: [
        "crochet-teapot-keepsake",
        "romantic-keepsake-gift",
        "cast-iron-proposal-sculpture",
      ],
    },
  },
  {
    slug: "boho-wedding-planner-book",
    title: "Boho Wedding Planner & Organiser Book",
    tag: "Stationery",
    summary:
      "A tabbed, ring-bound planner with pockets for the paper wedding planning generates — the rare engagement gift with a job to do in the first fortnight.",
    bestFor: "Newly engaged couple · Bride or groom planning it themselves · A long engagement",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0BN22SN6V?linkCode=ll2&tag=mesmerdesign-20&linkId=82e7dcc1af2778a0c4bed826d792bfec&language=en_US",
    art: { hue: 12, motif: "arch" },
    updated: "2026-09-16",
    tags: ["stationery", "planner", "wedding", "engagement", "organizer", "journal", "practical"],
    placements: [
      { category: "gifts-by-occasion", subcategory: "engagement" },
      { category: "gifts-by-occasion", subcategory: "wedding" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-for-her", subcategory: "sister" },
    ],
    guide: {
      heading: "The Engagement Gift That Gets Used the Week After the Proposal",
      standfirst:
        "Most engagement gifts are really for the married couple they will be in a year. A planner is for the fortnight they are actually in, which is the fortnight you are buying in.",
      why: [
        "An engagement gift arrives at the one moment a couple has a concrete, unglamorous problem: they have just acquired a project with a hundred moving parts and nowhere to keep them. Venue quotes, guest counts, deposit dates, three florists who all said something slightly different. Almost nothing else in the category answers a need that exists the same week. The listing describes 132 pages with tabbed sections for the wedding vision, budget, guest list, vendors and the day itself, which is a reasonable map of where the mess actually accumulates.",
        "Paper still beats a shared spreadsheet for the parts of planning that happen away from a desk. It goes to appointments, it gets written in during a tasting, and it absorbs the physical debris a phone cannot — business cards, fabric swatches, torn-out pages. The listing specifies pockets for exactly that, which is the detail that separates a planner from a notebook with headings printed in it.",
        "It ends the year as a record rather than a deleted file. A folder of vendor cards, cake notes and the budget as it really went is the kind of thing couples keep and re-read; nobody has ever re-read the wedding spreadsheet. At 9 x 11 inches with a ring binding, it is built to be kept rather than filled and binned.",
      ],
      whoFor: [
        "A couple planning the wedding themselves rather than hiring a planner",
        "A long engagement with a real budget that needs tracking",
        "Somebody who thinks on paper and loses things in apps",
        "A group gift — it anchors a “from all of us” basket well",
      ],
      whyGift: [
        "Useful within days, which almost no engagement gift is",
        "Handles the cards, swatches and quotes that planning generates",
        "Keeps its value as a record of the year once the wedding is over",
      ],
      considerations: [
        "Check they have not already bought one. A planner is among the first things people buy themselves in the week after a proposal, and it is the single likeliest duplicate in this category. Ask a sibling or whoever is standing up with them before you order.",
        "It is a large book — 9 x 11 inches. That is deliberate and it is why there is room to write, but it does not live in a handbag. If they want something to carry to every appointment without thinking about it, this is the wrong size and a pocket notebook is the right one.",
        "The pampas-and-florals boho cover is a strongly specific look, and it is on the outside of something they will carry for a year. If their taste runs modern, minimal or anything else, the design will grate long before the pages run out.",
        "Structured planners assume a fairly conventional wedding shape. A small civil ceremony, a destination wedding, or a Habesha wedding running across several days with a melse and a telosh will leave some sections untouched and others badly short of space. Say that when you hand it over, so they feel free to use it loosely rather than feeling they are planning the wedding wrong.",
        "Wire binding is the usual failure point on any planner carried for a year. Spirals catch on bag linings and deform, after which pages stop turning cleanly. A tote or a sleeve is a sensible thing to give alongside it.",
        "If the couple have not set a date, or are not sure they want a large wedding at all, a planner can read as pressure rather than a present. Hold it until they have started planning and give something else now.",
      ],
      pros: [
        "Immediately useful in the weeks after the proposal",
        "Tabs and pockets match how planning actually piles up",
        "Large pages leave room to write properly",
        "Becomes a keepsake record once the wedding is done",
      ],
      cons: [
        "Many couples buy themselves one first — a real duplicate risk",
        "Too large to carry casually",
        "A strongly styled cover they are stuck with for a year",
        "Its structure assumes a conventional single-day wedding",
      ],
      alternatives: [
        "lockable-diary-journal",
        "crochet-engagement-toast",
        "cast-iron-proposal-sculpture",
      ],
    },
  },
  {
    slug: "cast-iron-proposal-sculpture",
    title: "Cast Iron Proposal Couple Sculpture",
    tag: "Home Décor",
    summary:
      "A heavy black silhouette of the proposal itself — one of the few engagement gifts about the moment that has already happened rather than the wedding to come.",
    bestFor: "Newly engaged couple · A first shared home · A sixth (iron) anniversary",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0BNHPD6NC?linkCode=ll2&tag=mesmerdesign-20&linkId=ed9410c14b43ab485a22533f8594b813&language=en_US",
    art: { hue: 8, motif: "vessel" },
    updated: "2026-09-16",
    tags: ["home decor", "sculpture", "cast iron", "engagement", "anniversary", "couple", "keepsake"],
    placements: [
      { category: "gifts-by-occasion", subcategory: "engagement" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
      { category: "gifts-by-occasion", subcategory: "wedding" },
      { category: "gifts-for-her", subcategory: "wife-partner" },
    ],
    guide: {
      heading: "A Gift About the Proposal, Not the Wedding",
      standfirst:
        "Nearly everything bought for a newly engaged couple is quietly about the wedding — the planning, the list, the day. This marks the evening that has already happened.",
      why: [
        "It commemorates the proposal specifically, which very little else in the category does. Engagement gifts drift towards wedding preparation almost by gravity: planners, monogrammed things, homewares that are really registry items bought early. A sculpture of two figures at the moment of the question is about a night the couple already had, and in ten years that is the part they will still be telling people about.",
        "Weight is the entire argument for cast iron here. The listing gives it as roughly 1.8 pounds and 7.3 inches tall on a felt base. Small decorative objects usually give themselves away the moment they are picked up, because they are light; a dense one does not, and for something meant to read as permanent that matters more than any styling decision. Iron is also the traditional sixth-anniversary material, so the same object arrives with a second occasion already attached to it.",
        "A plain silhouette is unusually taste-tolerant for figurative decor. Romantic figures fail when they have faces, expressions and painted detail — that is the short road to saccharine, and it is why so much of this category looks like a wedding-fair stall. Reduced to an outline in matte black, it reads graphic rather than sentimental, which is what lets it survive in a room that was not decorated around it.",
      ],
      whoFor: [
        "A couple setting up a first shared home",
        "Somebody who would rather have one considered object than a set of small ones",
        "A sixth anniversary, where iron is the traditional material",
        "Interiors that run industrial, farmhouse or otherwise unfussy",
      ],
      whyGift: [
        "Marks the proposal rather than the wedding admin",
        "Heavy enough to read as a keepsake instead of an ornament",
        "Does second duty as an iron-anniversary gift years later",
      ],
      considerations: [
        "Figurative romantic decor is the most taste-dependent thing on this page. Some couples put a proposal sculpture on a shelf happily and some would find it mortifying on display to guests. If you cannot picture it in their actual living room, this is a guess, and there are safer guesses.",
        "Confirm which sculpture you are ordering. This brand sells several couple pieces under near-identical titles, differing in pose, size and arrangement, so check the variant on screen shows the kneeling proposal and not a dancing or embracing pair. Similar listings are exactly how people end up describing one gift and unwrapping another.",
        "Bare cast iron rusts wherever it is damp. A bathroom shelf, a conservatory or a windowsill that runs with condensation in winter will mark it, and once iron has started it does not stop on its own.",
        "The weight that makes it feel substantial also makes it worth a thought in a house with a toddler or an enthusiastic cat. Just under two pounds of iron on an open shelf is not a small falling object.",
        "It depicts one particular proposal — a man kneeling to a woman. That is the design, not an option, and it will not suit every couple you might want to buy for. Worth half a minute's thought before ordering rather than after.",
        "If you are posting it abroad, price the postage before you commit. A dense iron object can cost more to send than it cost to buy, and this is the item on this page where that is most likely to bite.",
      ],
      pros: [
        "Commemorates the proposal itself, which little else does",
        "Dense cast iron feels like a keepsake, not an ornament",
        "Silhouette styling avoids the saccharine trap of romantic figures",
        "Felt base and real weight keep it where it is put",
      ],
      cons: [
        "Figurative romantic decor is deeply taste-dependent",
        "Bare iron will rust if it is kept anywhere damp",
        "Depicts one specific proposal scene that will not fit every couple",
        "Heavy enough to be worth thinking about around children and pets",
      ],
      alternatives: [
        "romantic-keepsake-gift",
        "custom-family-photo-frame",
        "boho-wedding-planner-book",
      ],
    },
  },
];
