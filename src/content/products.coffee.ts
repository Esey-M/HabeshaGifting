import type { Product } from "./types";

/**
 * Coffee, ceremony and traditional home products.
 *
 * Note the deliberate absence of prices, star ratings and stock status: those
 * come from live data or not at all. `budget` is an editorial band we stand
 * behind, not a scraped figure.
 */
export const coffeeProducts: Product[] = [
  {
    slug: "traditional-clay-jebena-coffee-pot",
    title: "Traditional Clay Jebena Coffee Pot",
    tag: "Coffee Ceremony",
    summary:
      "The handmade clay pot at the centre of the buna ceremony, in the classic round-bellied shape with a long neck and straw lid.",
    bestFor: "Mom · Grandma · A first ceremony set",
    budget: "under-50",
    affiliateUrl: null,
    art: { hue: 22, motif: "vessel" },
    updated: "2026-08-14",
    tags: ["coffee", "jebena", "ceremony", "ethiopian", "eritrean", "traditional", "kitchen"],
    placements: [
      { category: "coffee-traditional-gifts", subcategory: "jebena-coffee-pots" },
    ],
    guide: {
      heading: "The Traditional Clay Jebena: What to Know Before You Buy One",
      standfirst:
        "A clay jebena is the most recognisable gift you can give a Habesha household — and the one most likely to be bought wrongly. Here is how to choose the right one.",
      why: [
        "Clay is the traditional material for a reason: it holds heat evenly and slowly, which is exactly what you want when coffee sits on low heat through three rounds of a ceremony. Ceramic and metal versions heat faster and cool faster, and experienced hosts notice.",
        "The shape does real work. The wide belly gives grounds room to settle below the neck, so when the pot is tipped the coffee pours comparatively clear without a filter. That is not decoration — it is the whole design.",
        "As a gift it is unusually safe. Almost every Habesha household either wants one, has an ageing one, or has broken one recently. Unlike jewellery or clothing there is no sizing, no taste mismatch, and no wrong answer.",
      ],
      whoFor: [
        "Someone setting up their first home or their first ceremony set",
        "A mother or grandmother whose current jebena is chipped and who will never replace it herself",
        "Newlyweds, where the pot will be used in front of guests for decades",
        "Anyone who has recently moved abroad and is rebuilding a kitchen from nothing",
      ],
      whyGift: [
        "It is used in front of other people, so it carries your name every time it comes out",
        "It is genuinely consumable — clay pots crack, and replacements are always welcome",
        "It works as a centrepiece even when it is not in use, which matters in a small kitchen",
      ],
      considerations: [
        "Check whether the listing is stovetop-safe. Many decorative jebenas are display pieces only and will crack on direct heat — this is the single most common mistake buyers make.",
        "Unglazed clay must be cured before first use, usually by boiling water in it once or twice and discarding it. If your recipient will not do this, a glazed or ceramic version is more forgiving.",
        "Ask, discreetly, what size they need. A pot sized for two people is a frustrating gift for someone who hosts twelve.",
        "Clay is heavy and brittle. If it is being posted internationally, packaging quality matters more than the pot itself.",
      ],
      pros: [
        "Traditional material with the best heat behaviour",
        "Doubles as a display piece",
        "No sizing or taste risk compared with clothing or jewellery",
        "Naturally filters grounds through its shape",
      ],
      cons: [
        "Fragile in transit and in a busy kitchen",
        "Unglazed versions need curing before first use",
        "Not all versions tolerate direct stovetop heat",
        "Heavier than ceramic or metal alternatives",
      ],
      alternatives: [
        "ceramic-jebena-modern-design",
        "coffee-ceremony-starter-set",
        "adey-abeba-23-piece-coffee-set",
      ],
    },
  },
  {
    slug: "ceramic-jebena-modern-design",
    title: "Modern Ceramic Jebena",
    tag: "Coffee Ceremony",
    summary:
      "The traditional silhouette in glazed ceramic — easier to clean, less fragile, and comfortable on a modern stovetop.",
    bestFor: "First apartments · Anyone nervous about clay",
    budget: "under-50",
    affiliateUrl: null,
    art: { hue: 30, motif: "vessel" },
    updated: "2026-08-14",
    tags: ["coffee", "jebena", "ceremony", "modern", "kitchen", "housewarming"],
    placements: [
      { category: "coffee-traditional-gifts", subcategory: "jebena-coffee-pots" },
      { category: "gifts-for-him", subcategory: "son" },
    ],
    guide: {
      heading: "The Modern Ceramic Jebena: A Practical Alternative to Clay",
      standfirst:
        "Glazed ceramic gives up a little tradition for a lot of convenience. For a first apartment or a nervous host, that is usually the right trade.",
      why: [
        "The glaze is the point. Unglazed clay absorbs oils and needs curing and careful washing; a glazed interior rinses clean, does not hold flavours between uses, and survives a dishwasher-adjacent household.",
        "Ceramic tolerates modern kitchens better. Clay wants a low, even flame; ceramic copes more gracefully with an electric coil or a glass-top hob, which is what most people in the diaspora actually have.",
        "It keeps the silhouette. The round belly and long neck still read instantly as a jebena on a shelf, so the cultural signal survives the material change.",
      ],
      whoFor: [
        "Students and first-apartment households where breakage is likely",
        "Anyone with an induction or glass-top hob where clay is risky",
        "Someone who wants a second, everyday jebena and keeps clay for guests",
        "Gift-givers posting internationally who want better odds of arrival",
      ],
      whyGift: [
        "Lower maintenance than clay, so it gets used rather than admired",
        "Easier to ship without damage",
        "Reads as thoughtful and modern rather than souvenir-ish",
      ],
      considerations: [
        "Purists will prefer clay, and some will say so out loud. If your recipient is the household's ceremony host, buy clay.",
        "Confirm the listing states it is stovetop-safe rather than decorative — this applies to ceramic just as much as to clay.",
        "Thermal shock still breaks ceramic. It cannot go from a hot hob to a cold sink.",
        "Check the neck width; a very narrow neck is difficult to clean without a bottle brush.",
      ],
      pros: [
        "Glazed interior is easy to clean and does not need curing",
        "More forgiving on modern hobs",
        "Ships more reliably than clay",
        "Keeps the traditional shape",
      ],
      cons: [
        "Less traditional, which matters to some recipients",
        "Heat retention is not as even as clay",
        "Still breakable under thermal shock",
      ],
      alternatives: ["traditional-clay-jebena-coffee-pot", "adey-abeba-23-piece-coffee-set"],
    },
  },
  {
    slug: "wooden-coffee-tray-rekbot",
    title: "Handcrafted Wooden Coffee Tray",
    tag: "Coffee Ceremony",
    summary:
      "A carved wooden serving tray sized for a jebena and a full set of cups, usually with a raised rim.",
    bestFor: "Wedding · Anniversary · The host who has everything else",
    budget: "under-100",
    affiliateUrl: null,
    art: { hue: 35, motif: "arch" },
    updated: "2026-07-30",
    tags: ["coffee", "tray", "rekbot", "wood", "wedding", "handcrafted"],
    placements: [
      { category: "coffee-traditional-gifts", subcategory: "coffee-trays" },
      { category: "ethiopian-eritrean-gifts", subcategory: "home-decor" },
    ],
    guide: {
      heading: "The Coffee Tray: The Piece Most People Forget to Buy",
      standfirst:
        "Everyone buys the jebena and the cups. The tray is what turns them into a service — and it is usually the last thing anyone owns.",
      why: [
        "A tray is what makes the ceremony portable. Coffee is brewed in one place and served in another, often to a room full of people, and carrying a hot pot and twelve cups without one is genuinely awkward.",
        "It is the piece with the longest life. Cups break and clay cracks, but a solid wooden tray outlasts everything else in the set — which is why it works as a wedding or anniversary gift specifically.",
        "It solves the 'they already have everything' problem. Households that host constantly usually have a full ceremony set and a mismatched kitchen tray standing in for the real thing.",
      ],
      whoFor: [
        "A couple setting up a home together",
        "The household host who owns every other piece already",
        "Anyone whose current tray is a plastic stand-in",
        "A milestone anniversary where permanence is the message",
      ],
      whyGift: [
        "Rarely bought for oneself, so it is genuinely unmet",
        "Visible to every guest, every time",
        "Ages well rather than wearing out",
      ],
      considerations: [
        "Measure before buying. The tray must take the jebena, a rekbot or cup stand, and the cups — an undersized tray is decorative only.",
        "A raised rim matters more than carving. It is what stops cups sliding when the tray is carried.",
        "Check the finish is food-safe and how it should be cleaned; many carved trays cannot be submerged.",
        "Solid wood warps in very dry or very humid homes. Look for a note on the wood type and finish.",
      ],
      pros: [
        "Long-lived and often heirloom-quality",
        "Fills a real gap in most ceremony sets",
        "Handsome enough to leave out permanently",
      ],
      cons: [
        "Heavier and pricier than the cups it carries",
        "Sizing must be matched to their existing jebena",
        "Hand-wash only in most cases",
      ],
      alternatives: [
        "adey-abeba-23-piece-coffee-set",
        "woven-mesob-inspired-basket",
        "coffee-ceremony-starter-set",
      ],
    },
  },
  {
    slug: "coffee-ceremony-starter-set",
    title: "Complete Coffee Ceremony Starter Set",
    tag: "Coffee Ceremony",
    summary:
      "Jebena, cups, tray and stand bundled together — the whole ceremony in one box, for someone starting from nothing.",
    bestFor: "Wedding · Graduation · A first home abroad",
    budget: "100-plus",
    affiliateUrl: null,
    art: { hue: 20, motif: "rays" },
    updated: "2026-08-28",
    tags: ["coffee", "ceremony", "set", "wedding", "gift set", "starter"],
    placements: [
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-him", subcategory: "son" },
    ],
    guide: {
      heading: "Is a Complete Coffee Ceremony Set Worth It?",
      standfirst:
        "Bundled sets trade some quality per piece for coherence and convenience. For the right recipient that is a good deal — for the wrong one it is a shelf of duplicates.",
      why: [
        "For someone starting from zero, coherence beats individual quality. A set that matches out of the box saves them assembling four purchases from four sellers, and everything is sized to work together — which is precisely where piecemeal buying goes wrong.",
        "It removes the guesswork about what a ceremony needs. People who grew up watching the ceremony but never bought the equipment often do not know a stand and a tray are separate objects.",
        "As a group gift it is unusually easy. Several people can contribute to one substantial present rather than arriving with three overlapping ones.",
      ],
      whoFor: [
        "Newlyweds setting up a first household",
        "A graduate moving into their own place",
        "Anyone who has recently emigrated and left their set behind",
        "Group gifting, where a larger single present makes sense",
      ],
      whyGift: [
        "Complete and immediately usable — nothing else to buy",
        "Presents well as a single substantial gift",
        "Ideal for pooling contributions from several givers",
      ],
      considerations: [
        "Sets are only worth it if they own nothing. For a household that already has a jebena, buy the missing piece instead — usually the tray.",
        "Bundled jebenas are sometimes the decorative kind. Verify stovetop suitability separately, because bundle listings tend to describe the set rather than each piece.",
        "Component quality is uneven in cheaper bundles; the cups are often the weak point.",
        "These are heavy boxes. Shipping cost and damage risk both rise.",
      ],
      pros: [
        "Everything matches and fits together",
        "Excellent for someone starting from nothing",
        "Natural group gift",
      ],
      cons: [
        "Wasteful if they already own part of a set",
        "Component quality varies within the bundle",
        "Bulky and more fragile in transit",
      ],
      alternatives: [
        "traditional-clay-jebena-coffee-pot",
        "wooden-coffee-tray-rekbot",
        "adey-abeba-23-piece-coffee-set",
      ],
    },
  },
  {
    slug: "ethiopian-incense-burner-set",
    title: "Incense Burner & Frankincense Set",
    tag: "Traditional",
    summary:
      "A clay or metal burner with etan — the frankincense resin burned during coffee and on holidays.",
    bestFor: "Grandma · Housewarming · Anyone homesick",
    budget: "under-25",
    affiliateUrl: null,
    art: { hue: 300, motif: "vessel" },
    updated: "2026-08-02",
    tags: ["incense", "etan", "frankincense", "traditional", "home", "ceremony"],
    placements: [
      { category: "coffee-traditional-gifts", subcategory: "incense-traditional" },
    ],
    guide: {
      heading: "Incense and Etan: The Smallest Gift With the Strongest Memory",
      standfirst:
        "Smell is the sense most tied to memory, which is why a few dollars of frankincense often outperforms a far more expensive gift.",
      why: [
        "Etan is inseparable from the coffee ceremony and from holidays. Lighting it is the signal that something is beginning — guests are arriving, or a feast day has started.",
        "It is one of the few gifts that recreates a place rather than representing one. For someone far from home, that is a materially different experience from looking at a decorative object.",
        "It is inexpensive enough to give freely and consumable enough to give repeatedly, which makes it a good default gift when you are visiting someone.",
      ],
      whoFor: [
        "Grandparents and parents who burned incense at home",
        "Anyone recently moved abroad or living far from family",
        "A housewarming, where the first burning marks the new home",
        "Someone who already hosts coffee ceremonies without incense",
      ],
      whyGift: [
        "Emotionally resonant far beyond its cost",
        "Consumable, so it is never a duplicate",
        "Small and light — the easiest thing on this site to post",
      ],
      considerations: [
        "Charcoal-lit burners produce real smoke and heat. In a rented flat with a sensitive smoke alarm, an electric burner is the safer choice.",
        "Resin quality varies enormously. Look for pale, solid pieces rather than dust and fragments.",
        "Some listings substitute generic frankincense for Ethiopian or Eritrean etan. They smell different; check the origin if it matters to the recipient.",
        "Never leave burning charcoal unattended, and mention that if you are gifting to an older relative or a household with young children.",
      ],
      pros: [
        "Inexpensive and highly evocative",
        "Consumable — always welcome again",
        "Easy and cheap to ship",
      ],
      cons: [
        "Smoke and open charcoal are impractical in some homes",
        "Resin quality is inconsistent between sellers",
        "Origin is often vaguely described",
      ],
      alternatives: [
        "coffee-ceremony-starter-set",
        "woven-mesob-inspired-basket",
        "traditional-clay-jebena-coffee-pot",
      ],
    },
  },
  {
    slug: "woven-mesob-inspired-basket",
    title: "Woven Mesob-Inspired Basket",
    tag: "Home Décor",
    summary:
      "Handwoven straw in the conical mesob silhouette, used as a table, a serving surface or simply as a striking object in a room.",
    bestFor: "Housewarming · Wedding · Cultural home décor",
    budget: "100-plus",
    affiliateUrl: null,
    art: { hue: 38, motif: "basket" },
    updated: "2026-07-11",
    tags: ["mesob", "basket", "home decor", "handwoven", "traditional", "housewarming"],
    placements: [
      { category: "coffee-traditional-gifts", subcategory: "traditional-home-decor" },
      { category: "ethiopian-eritrean-gifts", subcategory: "home-decor" },
    ],
    guide: {
      heading: "The Mesob as a Gift: Beautiful, Bulky, and Worth Thinking About",
      standfirst:
        "A woven mesob is the most visually striking object in this catalogue. It is also the one most likely to be admired, photographed, and then have nowhere to live.",
      why: [
        "It is genuinely handmade, and it looks it. The coiled straw work takes days, and the irregularity that comes with hand-weaving is exactly what makes it read as craft rather than décor bought in bulk.",
        "It has an actual function. A full-size mesob is a communal table — injera is laid directly on it and everyone eats from the same surface, which is the physical expression of how Habesha meals work.",
        "Smaller decorative versions carry the same visual language without demanding floor space, which is why they have become a common wall or shelf piece in diaspora homes.",
      ],
      whoFor: [
        "A couple furnishing a home with room for a statement piece",
        "Anyone whose home is otherwise decorated but not culturally marked",
        "A family that eats communally and wants the real thing rather than a symbol",
        "Someone who hosts often and enjoys presenting food properly",
      ],
      whyGift: [
        "Immediately impressive — it is the piece guests ask about",
        "Handmade provenance rather than mass production",
        "Works decoratively even when unused",
      ],
      considerations: [
        "Size is everything. A full-size mesob occupies as much floor space as a small table; measure the room before buying, not after.",
        "Straw is vulnerable to damp and to direct sunlight, which fades the dyes. It suits a dry, shaded corner.",
        "Full-size pieces are expensive to ship and arrive crushed more often than they should. Check the seller's packaging reputation.",
        "If it will be used for food, ask how it can be cleaned — most cannot be washed, only brushed.",
      ],
      pros: [
        "Genuine handcraft with real cultural function",
        "Visually distinctive in any room",
        "Available in decorative sizes for small homes",
      ],
      cons: [
        "Large versions need serious space",
        "Expensive and awkward to ship",
        "Sensitive to damp, sunlight and spills",
      ],
      alternatives: [
        "wooden-coffee-tray-rekbot",
        "ethiopian-incense-burner-set",
        "habesha-textile-wall-hanging",
      ],
    },
  },
  {
    slug: "habesha-textile-wall-hanging",
    title: "Habesha Textile Wall Hanging",
    tag: "Home Décor",
    summary:
      "Handwoven cotton with a tibeb border, framed or hung as a textile piece rather than worn.",
    bestFor: "Housewarming · Anniversary · A blank wall",
    budget: "under-100",
    affiliateUrl: null,
    art: { hue: 350, motif: "weave" },
    updated: "2026-08-08",
    tags: ["textile", "tibeb", "wall art", "home decor", "handwoven", "ethiopian", "eritrean"],
    placements: [
      { category: "ethiopian-eritrean-gifts", subcategory: "home-decor" },
      { category: "coffee-traditional-gifts", subcategory: "traditional-home-decor" },
    ],
    guide: {
      heading: "Textile Wall Art: Cultural Décor Without the Clichés",
      standfirst:
        "Hanging a woven piece is the most restrained way to make a home read as Habesha — no flags, no maps, no souvenirs.",
      why: [
        "The tibeb border is the design. The coloured woven band that edges a netela or kemis is a genuine craft tradition with regional variation, and isolating it as wall art puts the actual artistry in the frame rather than a national symbol.",
        "Textiles solve a room problem that prints cannot. They absorb sound, add texture, and read as warm in a way flat framed art does not — which matters in the hard-surfaced rented flats most people live in.",
        "It is culturally legible without being explanatory. A guest who knows will recognise the weave immediately; one who does not simply sees a beautiful textile. That is the right register for a home.",
      ],
      whoFor: [
        "Anyone in a new or sparsely decorated home",
        "Someone who wants cultural décor but dislikes overt symbols",
        "A couple marking an anniversary with something for the shared space",
        "Second-generation households connecting a modern interior to family heritage",
      ],
      whyGift: [
        "Displayed permanently, so it is remembered",
        "Restrained rather than kitsch",
        "Handwoven pieces carry real provenance",
      ],
      considerations: [
        "Ask whether it arrives framed or as loose cloth. Framing a large textile properly is a significant additional cost.",
        "Handwoven cotton fades in direct sunlight — it needs a wall that does not get afternoon sun.",
        "Weave quality varies enormously between machine and hand production. Hand-woven pieces show slight irregularity; perfectly uniform borders are usually printed.",
        "Confirm the dimensions against a real wall. Textiles photograph without scale and often arrive smaller than expected.",
      ],
      pros: [
        "Subtle, elegant cultural signal",
        "Adds warmth and texture to a room",
        "Genuine craft when hand-woven",
      ],
      cons: [
        "Framing may be an extra cost",
        "Fades in sunlight",
        "Scale is hard to judge from listings",
      ],
      alternatives: [
        "woven-mesob-inspired-basket",
        "pashmina-shawl-wrap",
        "amharic-family-name-print",
      ],
    },
  },
];
