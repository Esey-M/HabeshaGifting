import type { Product } from "./types";

/**
 * Retailer-linked gift recommendations for a sister, and for the younger
 * listings that overlap with it.
 *
 * Same rules as the rest of the linked catalogue: the editorial content is
 * category buying advice — how to choose this kind of gift and what goes wrong
 * — not a hands-on review. We hold no unit of any of these items, so nothing
 * here claims durability, finish or fit that cannot be read off the listing,
 * and no prices or ratings appear.
 *
 * `budget` is our own editorial estimate of what the category typically costs.
 */
export const sisterProducts: Product[] = [
  {
    slug: "satin-scrunchie-set",
    title: "Satin Scrunchie Set",
    tag: "Hair",
    summary:
      "Eight satin scrunchies instead of thin elastics — the cheapest thing on this site and, for textured hair, one of the most genuinely useful.",
    bestFor: "Sister · Teen · Natural and textured hair",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0F6ST3SRG?linkCode=ll2&tag=mesmerdesign-20&linkId=4d6ec26cf6afaac274f7261e6302e030&language=en_US",
    art: { hue: 320, motif: "weave" },
    updated: "2026-09-07",
    tags: ["hair", "scrunchies", "satin", "natural hair", "sister", "teen", "budget"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Why Satin and Not Cotton: The Friction Problem",
      standfirst:
        "This is a small gift with a real mechanism behind it. For anyone with curly, coily or chemically treated hair, the material touching it matters considerably more than the price suggests.",
      why: [
        "Friction is what breaks hair, and cotton creates a great deal of it. Cotton is absorbent and its fibres catch, so a cotton tie drags on the hair shaft and draws moisture out of it. Satin is smooth and non-absorbent, so hair slides against it instead of snagging — which is the entire reason satin bonnets, pillowcases and ties are standard in Habesha and wider Black haircare and largely unknown outside it.",
        "The thin elastic is the specific villain. A narrow band concentrates all its tension on a small section of hair and the metal crimp on many of them catches and snaps strands. A scrunchie spreads the same holding force over a much wider surface, which is why the damage difference is visible within weeks rather than years.",
        "It is a small gift that signals you actually know something about her routine. For a sister with natural hair, receiving satin rather than a generic accessory reads as attention paid — it is the difference between a gift chosen for her and a gift chosen for a woman.",
      ],
      whoFor: [
        "A sister with natural, curly or coily hair",
        "Anyone with relaxed, coloured or otherwise chemically treated hair",
        "A teenager working out her own hair routine",
        "Someone who wears a protective style and needs gentle ties",
      ],
      whyGift: [
        "Prevents a real and cumulative kind of damage",
        "Enough in a pack that losing them does not matter",
        "Shows you understand her hair rather than guessing",
      ],
      considerations: [
        "\"Satin\" describes the weave, not the fibre. Almost everything sold at this price is polyester satin rather than silk, and that is genuinely fine — the smoothness is what reduces friction. It is worth knowing so nobody thinks they are receiving silk.",
        "Check the band strength against her hair. Thick or long hair needs a firm scrunchie; a loose one slides out through the day and a very tight one defeats the point of switching away from elastics.",
        "Satin holds less firmly than elastic by design. For a gym session or anything vigorous she may still reach for something tighter, and that is a reasonable trade rather than a fault.",
        "They are washable but lose their stretch in hot water. Cold wash in a laundry bag is the difference between a set lasting a year and a set lasting a month.",
      ],
      pros: [
        "Real reduction in breakage and snagging",
        "Wide band spreads tension across the hair",
        "Multiple pieces, so losing one is fine",
        "Very inexpensive for something used daily",
      ],
      cons: [
        "Polyester satin rather than actual silk",
        "Holds less firmly than a tight elastic",
        "Loses stretch if washed warm",
      ],
      alternatives: ["chenille-knit-slippers", "rose-self-care-gift-box", "crochet-sister-doll"],
    },
  },
  {
    slug: "engraved-message-cuff-bracelet",
    title: "Engraved Message Cuff Bracelet",
    tag: "Personalized Jewelry",
    summary:
      "A surgical steel cuff engraved with a chosen message — no sizing to get wrong, no plating to wear off, and a sentiment you pick from a very long list.",
    bestFor: "Sister · Graduation · Sensitive skin",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FYXPPHZP?linkCode=ll2&tag=mesmerdesign-20&linkId=cab3171f1f4cfa32e3d961f5d0b8cc45&language=en_US",
    art: { hue: 210, motif: "arch" },
    updated: "2026-09-07",
    tags: ["jewelry", "bracelet", "engraved", "stainless steel", "sister", "graduation", "personalized"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "personalized-gifts", subcategory: "personalized-jewelry" },
      { category: "personalized-gifts", subcategory: "engraved-gifts" },
      { category: "gifts-by-occasion", subcategory: "graduation" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "The Cuff: Personalised Jewellery With No Sizing Risk",
      standfirst:
        "Rings need a size, bangles need a diameter, and both are how personalised jewellery gifts go wrong. An open cuff removes that failure mode entirely, which is most of its appeal.",
      why: [
        "An open cuff adjusts by hand. It is squeezed slightly to tighten or eased open to loosen, which means one object fits almost any wrist and nothing has to be measured, guessed or returned. For a gift being posted to another country that matters enormously.",
        "316L is solid steel rather than a coating, and that changes the lifespan completely. Surgical-grade stainless is the alloy used where skin contact is constant; it does not tarnish, it does not wear through to a base metal underneath, and it is the sensible choice for anyone who reacts to costume jewellery.",
        "Engraving on steel outlasts engraving on plate. On a plated piece the lettering is where the finish wears first, so the message fades exactly where it matters. Cut into solid steel it stays legible for as long as the bracelet exists.",
      ],
      whoFor: [
        "A sister you are posting a gift to and cannot size for",
        "Anyone whose skin reacts to plated or costume jewellery",
        "A graduation or milestone that suits a few words being said outright",
        "Someone who wears one simple piece rather than changing jewellery daily",
      ],
      whyGift: [
        "No size to get wrong",
        "Solid steel rather than plating with a finite life",
        "The message stays legible indefinitely",
      ],
      considerations: [
        "Choose the message carefully, because a long list is not an advantage. Listings in this category offer a hundred or more phrases, and a great many of them read like a greeting card. The ones that land are short, specific and sound like something you would actually say — if you would be embarrassed reading it aloud to her, pick another.",
        "Confirm exactly which message ships. These are sold as variants from one page, and it is easy to order the design in the photograph while a different phrase is selected in the dropdown.",
        "Cuffs can be adjusted, but not endlessly. Repeated opening and closing fatigues the metal, so it is worth telling her to size it once and leave it rather than taking it on and off by bending it each time.",
        "An engraved sentiment fixes what the piece is for. Unlike a plain bracelet she can wear anywhere without explanation, this one always says something — which is the point, and also a limit.",
      ],
      pros: [
        "Adjustable, so no sizing risk at all",
        "Solid surgical steel suits sensitive skin",
        "Engraving will not wear away",
        "Arrives gift-ready at a low price",
      ],
      cons: [
        "Many stock phrases read as generic",
        "Repeated bending weakens the cuff",
        "The message limits when she can wear it",
      ],
      alternatives: [
        "sister-birthstone-necklace",
        "personalized-steel-pendant-necklace",
        "dainty-cross-choker-necklace",
      ],
    },
  },
  {
    slug: "sister-birthstone-necklace",
    title: "Sister Birthstone Necklace",
    tag: "Personalized Jewelry",
    summary:
      "A birthstone pendant sold with a stated sister sentiment — the version of a personalised necklace where the message is the product rather than an addition.",
    bestFor: "Sister · Birthday · Saying it outright",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FCXVZXTM?linkCode=ll2&tag=mesmerdesign-20&linkId=ea03b5da7fa3a80dcbd96b0b8ec54e9a&language=en_US",
    art: { hue: 195, motif: "cross" },
    updated: "2026-09-07",
    tags: ["jewelry", "necklace", "birthstone", "sister", "personalized", "birthday", "christmas"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "personalized-gifts", subcategory: "personalized-jewelry" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Worded Jewellery: When Saying It Plainly Is the Right Call",
      standfirst:
        "Most jewellery lets the recipient decide what it means. This category does the opposite — it states the relationship outright, which is either exactly what you want or precisely what you do not.",
      why: [
        "Some things are easier written than said. Families vary enormously in how much affection gets spoken aloud, and in a great many Habesha households the answer is not much. A piece that carries the sentiment in writing does the saying for you, permanently and without a conversation.",
        "The birthstone anchors it to her specifically. A month is a fact rather than a matter of taste, so it personalises the piece with no risk of a spelling error or a bad guess — the same reason initial and birthstone jewellery works so reliably as a gift.",
        "A card gets read once; a necklace gets worn. The words on a birthday card are gone by February. The same words on something she puts on keep working, which is a strange but consistent advantage of this whole category.",
      ],
      whoFor: [
        "A sister you are close to but rarely say sentimental things to",
        "A milestone birthday where a plain gift would undersell the occasion",
        "Sisters separated by distance, where the object stands in for presence",
        "Someone who already wears delicate pendants",
      ],
      whyGift: [
        "Says the thing you find hard to say",
        "Birthstone personalises with no risk of error",
        "Worn repeatedly rather than read once",
      ],
      considerations: [
        "Confirm the month you have selected shows the stone you expect. These listings sell all twelve months from a single page and the variant naming in this category is frequently inconsistent, with titles mentioning several stones at once — check the dropdown rather than the title.",
        "Decide whose birthstone it is before ordering. Her own is the obvious choice; some people give their own instead as a keep-me-with-you gesture. Both are valid and they are completely different gifts, so choose deliberately.",
        "Stones at this price are lab-created or glass, and that is normal. It is worth knowing so nobody assumes a natural gem, and it is not a reason against — the colour is the point.",
        "Check the chain and clasp quality, since a worded pendant is usually worn constantly. A fine chain in a plated finish is where this kind of piece fails first.",
      ],
      pros: [
        "Carries the sentiment explicitly",
        "Birthstone personalisation cannot be misspelled",
        "Presents well boxed with the message included",
      ],
      cons: [
        "Variant naming across months is often inconsistent",
        "Stones are lab-created or glass at this price",
        "The stated sentiment makes it a specific rather than versatile piece",
      ],
      alternatives: [
        "engraved-message-cuff-bracelet",
        "initial-letter-pendant-necklace",
        "personalized-birthstone-ring",
      ],
    },
  },
  {
    slug: "leather-sling-crossbody-bag",
    title: "Leather Sling Crossbody Bag",
    tag: "Accessories",
    summary:
      "A small leather sling worn across the body — the most-used bag format there is, and the safest size to buy for somebody else.",
    bestFor: "Sister · Travel · Everyday carry",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0C68PPF5H?linkCode=ll2&tag=mesmerdesign-20&linkId=baa185ae31de2e03bd59be393966aa9c&language=en_US",
    image: "/img/products/leather-sling-crossbody-bag",
    art: { hue: 25, motif: "basket" },
    updated: "2026-09-07",
    tags: ["bag", "crossbody", "leather", "travel", "sister", "accessories", "everyday"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-for-her", subcategory: "wife-partner" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Buying a Bag for Someone Else: Go Small",
      standfirst:
        "A bag is one of the hardest things to choose for another person, because it has to match how she already lives. There is one rule that makes it survivable, and it is about size.",
      why: [
        "Small bags carry far less taste risk than large ones. A big handbag has to suit her whole routine — what she carries, what she wears it with, how she commutes — and if it does not, it is unusable. A small sling has one job, holds a phone, cards and keys, and slots into a life you do not have to fully understand.",
        "Crossbody is the format people reach for most. Hands free, weight on the body rather than one shoulder, and no risk of leaving it on a chair — it is the bag that gets used on school runs, on public transport, in a supermarket, and it is the reason this shape has taken over from the shoulder bag.",
        "Worn on the front, a sling is the sensible travel bag. It sits where she can see it, which is the simple and effective answer to pickpocketing in a crowded market, an airport or a bus — and it is far less conspicuous than anything sold explicitly as anti-theft.",
      ],
      whoFor: [
        "A sister who travels, commutes or has her hands full",
        "Someone whose current bag is far larger than her daily needs",
        "Anyone going somewhere crowded where a front-worn bag makes sense",
        "A first bag gift, where a small one is a much safer bet than a large one",
      ],
      whyGift: [
        "Small size sidesteps most taste risk",
        "The format that gets used most days",
        "Genuinely practical for travel",
      ],
      considerations: [
        "Check the strap length and whether it adjusts. A sling that is too short to cross the body defeats the whole point, and adjustability is the specification that decides whether it works on her frame and over a winter coat.",
        "Read whether it is genuine leather, split leather or PU. All three appear at similar prices in this category, and the wording is usually in the specification rather than the title.",
        "Colour is the biggest taste risk left once you have gone small. A neutral — black, tan, deep brown — is much safer than anything seasonal, however good it looks in the photograph.",
        "Measure the phone. Larger phones do not fit every small sling, and a bag that will not close over her actual phone is an immediate return.",
      ],
      pros: [
        "Hands-free and comfortable across the body",
        "Small size lowers the risk of a taste mismatch",
        "Sensible for travel and crowds",
        "Works over a coat if the strap adjusts",
      ],
      cons: [
        "Too small for anyone who carries a lot",
        "Leather grade varies at this price",
        "Colour choice is still a real gamble",
      ],
      alternatives: ["ceramic-lined-travel-mug", "oversized-open-cardigan", "pashmina-shawl-wrap"],
    },
  },
  {
    slug: "wireless-earbuds",
    title: "Wireless Bluetooth Earbuds",
    tag: "Tech",
    summary:
      "Compact wireless earbuds with a charging case — a reliable gift, provided you understand what the phrase \"noise cancelling\" means on a listing at this price.",
    bestFor: "Sister · Teen · Graduation",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FHWKYT89?linkCode=ll2&tag=mesmerdesign-20&linkId=3bcf09c252b9fbdde7551e0376d40b14&language=en_US",
    art: { hue: 250, motif: "rays" },
    updated: "2026-09-07",
    tags: ["earbuds", "tech", "bluetooth", "sister", "teen", "graduation", "budget"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-by-occasion", subcategory: "graduation" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "\"Noise Cancelling\" on Budget Earbuds Usually Means Something Else",
      standfirst:
        "This is the single most misleading phrase in cheap audio, and it is not quite a lie. It describes a real feature — just not the one most buyers assume they are getting.",
      why: [
        "There are two different technologies sharing one marketing phrase. Active noise cancellation quietens the world for the person wearing the earbuds. Environmental noise cancellation cleans up the microphone so the person on the other end of a call hears less background. Budget listings advertise the second using language that sounds like the first, and both are genuinely useful — they are simply not the same product.",
        "For calls, the microphone version is the one that matters anyway. Anyone taking calls walking down a street or in a busy house benefits far more from being heard clearly than from silence in their own ears, and this is where inexpensive earbuds genuinely deliver.",
        "Earbuds are close to universally welcome and easy to lose, which makes the low price a feature rather than a compromise. A pair that vanishes in a gym bag is an annoyance at this price and a disaster at ten times it.",
      ],
      whoFor: [
        "A sister or teenager who loses things and should not be given expensive ones",
        "Someone who takes a lot of calls on the move",
        "A student who needs a second pair for the gym or the library",
        "A graduation or birthday where a small tech gift fits the budget",
      ],
      whyGift: [
        "Nearly always used, whatever else she owns",
        "Cheap enough that losing them does not matter",
        "Genuinely good at the call-clarity job",
      ],
      considerations: [
        "If she specifically wants silence on a flight or a train, this is not that product — over-ear active cancellation is. Read \"noise cancelling\" here as call clarity unless the listing explicitly says ANC or hybrid active cancellation.",
        "Check the water rating if they are for exercise. A rating covering sweat and rain is the one that matters, and its absence is how earbuds die in a gym bag.",
        "Battery figures quote the buds and the case separately, then add them together. The number that matters day to day is the per-charge figure for the buds themselves.",
        "Fit decides sound quality far more than any specification. If the tips do not seal, bass disappears entirely — a set of spare tip sizes in the box is worth more than most of the numbers on the listing.",
      ],
      pros: [
        "Good call clarity in noisy places",
        "Charging case gives several days of use",
        "Low cost makes losing them survivable",
        "Small enough to carry constantly",
      ],
      cons: [
        "Not active noise cancellation for the listener",
        "Sound depends heavily on getting a good seal",
        "Battery numbers combine buds and case",
      ],
      alternatives: ["noise-cancelling-headphones", "nano-power-bank", "ceramic-lined-travel-mug"],
    },
  },
  {
    slug: "flame-effect-oil-diffuser",
    title: "Flame Effect Essential Oil Diffuser",
    tag: "Home",
    summary:
      "An ultrasonic diffuser with a flickering flame effect — scent and low light from something that never actually burns.",
    bestFor: "Sister · Housewarming · A rented flat",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FG4432L8?linkCode=ll2&tag=mesmerdesign-20&linkId=b35f167b50ba8b3657067bec374f1676&language=en_US",
    image: "/img/products/flame-effect-oil-diffuser",
    art: { hue: 15, motif: "rays" },
    updated: "2026-09-07",
    tags: ["diffuser", "aromatherapy", "home", "scent", "sister", "housewarming", "lighting"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-for-her", subcategory: "wife-partner" },
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-by-occasion", subcategory: "housewarming" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Diffuser, Candle or Incense: Three Different Objects",
      standfirst:
        "All three scent a room and only one of them does it without combustion. In a rented flat, a house with children, or anywhere a naked flame is a problem, that distinction is the whole decision.",
      why: [
        "An ultrasonic diffuser produces cool mist, not smoke. It vibrates water and oil into a fine vapour, so there is no flame, no soot and no smoke alarm — which makes it usable in bedrooms, in rentals with strict tenancy terms, and in houses where a lit candle is not something you would leave in a room.",
        "The flame effect is light rather than fire, and that is more useful than it sounds. It gives the flicker people actually want from a candle at the exact moment they cannot have one, and doubles as a soft night light with a timer.",
        "It is a very different proposition from etan. Frankincense burned on charcoal is a specific ritual with a specific smell and a specific place in the home, and nothing electric replaces it. A diffuser is for the ordinary evenings in between — worth being clear about, because they are not substitutes for one another.",
      ],
      whoFor: [
        "A sister in a rented flat where candles are not allowed",
        "A household with small children or pets, where an open flame is a worry",
        "Someone who wants a bedroom to smell of something without smoke",
        "A housewarming, where it works as both light and scent",
      ],
      whyGift: [
        "Scent and soft light with no flame",
        "Timer and remote mean it can be left running safely",
        "Suits rentals and bedrooms where candles cannot go",
      ],
      considerations: [
        "It needs cleaning or it stops working. Oil residue builds on the ceramic disc and output drops off within weeks — a wipe with a little vinegar every couple of weeks is the maintenance nobody mentions at the point of sale.",
        "Essential oils are not automatically safe around animals. Several common oils, tea tree among them, are genuinely toxic to cats in particular, and a diffuser running in a small room is a real exposure. If she has pets, this is worth raising rather than assuming.",
        "Check the tank size against how long she will want it running. A small tank at this size is a couple of hours of continuous use, not an evening, though most have an intermittent mode that stretches it considerably.",
        "Confirm whether any oils are included. Many diffusers ship empty, and a scent gift that arrives with nothing to put in it is an anticlimax.",
      ],
      pros: [
        "No flame, smoke or soot",
        "Doubles as a soft light with a timer",
        "Safe to run in a bedroom or a rental",
        "Remote control avoids getting up",
      ],
      cons: [
        "Needs regular descaling to keep working",
        "Some essential oils are hazardous to pets",
        "Small tank empties in a few hours",
        "Oils are often not included",
      ],
      alternatives: [
        "crystal-lamp-star-projector",
        "sunflower-led-night-light",
        "rose-self-care-gift-box",
      ],
    },
  },
  {
    slug: "oversized-open-cardigan",
    title: "Oversized Open-Front Cardigan",
    tag: "Clothing",
    summary:
      "A loose open-front knit with no closure and no waist — as close to risk-free as buying clothing for another adult gets.",
    bestFor: "Sister · Christmas · Layering",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0F8QFGG4R?linkCode=ll2&tag=mesmerdesign-20&linkId=e246c5673b1ee2ece5d855e18dccf7cd&language=en_US",
    image: "/img/products/oversized-open-cardigan",
    art: { hue: 30, motif: "weave" },
    updated: "2026-09-07",
    tags: ["clothing", "cardigan", "knitwear", "layering", "sister", "christmas", "cozy"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-for-her", subcategory: "wife-partner" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "The One Garment It Is Safe to Buy for Someone Else",
      standfirst:
        "Clothing is the highest-return category in gifting, and almost all of that is fit. An open-front oversized cardigan removes most of the ways fit can go wrong.",
      why: [
        "There is nothing on it that has to fit. No buttons to strain, no waist to sit in the right place, no closure at all — an open cardigan hangs, which means it works across a genuinely wide range of sizes and body shapes. Almost no other garment can say that.",
        "Oversized is the intended silhouette rather than a mistake. With most clothing, too big is a failure; here it is the design, so erring upward costs nothing and a slightly generous fit still looks the way the photograph does.",
        "A cardigan is worn over what she already owns, so it does not have to match anything. It layers over a dress, a t-shirt or pyjamas, which makes it useful from the day it arrives without needing anything else bought to go with it.",
      ],
      whoFor: [
        "A sister whose size you are not certain of",
        "Someone who is always cold indoors",
        "Anyone who wears the same three layers and could use a fourth",
        "Christmas, where knitwear suits the occasion",
      ],
      whyGift: [
        "Open front removes nearly all fit risk",
        "Layers over things she already owns",
        "Immediately useful without anything to match",
      ],
      considerations: [
        "\"One size\" is not one size. Where a listing offers a single size, read the actual garment measurements in centimetres — length and chest width across — rather than trusting the label, because the range these genuinely fit is narrower than the phrase suggests.",
        "Check the fibre content for how it will wear. Acrylic knits are warm and cheap and they pill at the underarms and cuffs within a season; a blend with wool or cotton holds up considerably better and the listing will say which.",
        "Sleeve length is where oversized garments most often fail. A generous body with sleeves that swallow the hands is the common complaint, so look for a stated sleeve measurement.",
        "Colour is the remaining taste risk. A neutral is much safer than a bold shade for someone whose wardrobe you have not studied.",
      ],
      pros: [
        "Almost no fit risk",
        "Layers over anything she owns",
        "Oversized cut is the intended look",
        "Warm without being bulky to store",
      ],
      cons: [
        "\"One size\" fits a narrower range than implied",
        "Acrylic knits pill quickly",
        "Sleeves often run long",
      ],
      alternatives: [
        "pashmina-shawl-wrap",
        "chenille-knit-slippers",
        "leather-sling-crossbody-bag",
      ],
    },
  },
  {
    slug: "ceramic-lined-travel-mug",
    title: "Ceramic-Lined Travel Mug",
    tag: "Coffee",
    summary:
      "An insulated travel mug lined with ceramic rather than bare steel — bought specifically to solve the metallic taste people complain about and rarely name.",
    bestFor: "Sister · Commuting · Coffee that tastes right",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FXYFK4PZ?linkCode=ll2&tag=mesmerdesign-20&linkId=48cd2cbc33ed39ea756c8b9dd699b459&language=en_US",
    art: { hue: 20, motif: "vessel" },
    updated: "2026-09-07",
    tags: ["coffee", "travel mug", "tumbler", "insulated", "sister", "commute", "ceramic"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-for-her", subcategory: "wife-partner" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "graduation" },
    ],
    guide: {
      heading: "Why Coffee Tastes Different in a Steel Tumbler",
      standfirst:
        "A great many people quietly dislike drinking coffee out of a metal flask and never work out why. The answer is the lining, and it is the only specification worth caring about here.",
      why: [
        "Bare stainless steel affects the taste, and the effect is worse with coffee than with water. Steel picks up and holds oils and aromas, and it contributes a faint metallic note of its own — which is why a flask that once held coffee makes tea taste odd for months afterwards. A ceramic lining is a neutral, non-porous barrier, so what she tastes is the coffee.",
        "It keeps the insulation without the compromise. The vacuum wall doing the heat retention is unchanged; the ceramic is a thin interior surface. She gets a drink that is still hot two hours later and does not taste of the container.",
        "A handle changes where it can be used. A handled mug is far easier to hold while doing something else and much less likely to be dropped, which suits a desk and a kitchen better than a smooth tumbler does — though it is worth checking against a car cupholder.",
      ],
      whoFor: [
        "A sister who commutes with coffee and has stopped enjoying it",
        "Anyone who has said flask coffee tastes wrong without knowing why",
        "Someone who alternates between coffee and tea in the same vessel",
        "A student or new graduate setting up a desk",
      ],
      whyGift: [
        "Fixes a specific complaint most people cannot articulate",
        "Insulation without the metallic taste",
        "Used every single morning",
      ],
      considerations: [
        "Ceramic linings chip if treated roughly. Dropping it, or scouring the inside with anything abrasive, damages the surface that is the entire reason for buying it — a soft brush and washing-up liquid is the correct care.",
        "\"Leak resistant\" is not \"leak proof\", and the difference matters if it goes in a bag with a laptop. Read the exact wording rather than assuming, and test it over a sink before trusting it.",
        "Check the base against her car's cupholder if she drives. A handled mug with a wide base is the classic gift that turns out not to fit the one place it was wanted.",
        "Most vacuum flasks are hand-wash only, and dishwashers are what kill the seal and the exterior finish. Worth saying when you hand it over.",
      ],
      pros: [
        "No metallic taste from the lining",
        "Full vacuum insulation retained",
        "Handle makes it easy to hold and hard to drop",
        "Works for tea without carrying coffee flavour over",
      ],
      cons: [
        "Ceramic lining chips if knocked or scoured",
        "Handled shape may not fit a cupholder",
        "Hand wash only in practice",
      ],
      alternatives: ["electric-mug-warmer", "leather-sling-crossbody-bag", "wireless-earbuds"],
    },
  },
  {
    slug: "chenille-knit-slippers",
    title: "Chenille Knit Memory Foam Slippers",
    tag: "Comfort",
    summary:
      "Knitted chenille slippers with a memory foam footbed — the version you can put through a washing machine, which is what decides how long slippers last.",
    bestFor: "Sister · Christmas · Slippers that get washed",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0CSFWXWZH?linkCode=ll2&tag=mesmerdesign-20&linkId=133950efa6c27abc3ab955623884aae0&language=en_US",
    art: { hue: 355, motif: "basket" },
    updated: "2026-09-07",
    tags: ["slippers", "chenille", "comfort", "washable", "sister", "christmas", "house shoes"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Slippers Are Thrown Away Because They Cannot Be Cleaned",
      standfirst:
        "Almost nobody retires a pair of slippers because they wore out. They are thrown away because they became unpleasant, and washability is the specification that decides which happens.",
      why: [
        "Slippers are worn on bare feet for hours a day and never cleaned. That is the actual lifecycle: six months of daily wear, a gradual decline nobody wants to discuss, and a bin. A pair that survives a cold machine wash resets that clock repeatedly, which is worth more than any amount of plush.",
        "A knitted chenille upper handles washing in a way a faux-fur lining does not. Long-pile linings mat and clump once wet and never recover their loft; a knit comes out of the machine looking much as it went in. If a pair is going to be washed, this is the construction that survives it.",
        "The memory foam is doing the comfort work regardless. The upper decides how they look and how they clean; the footbed decides how they feel, and a moulded foam layer is what makes an hour standing in a kitchen bearable on a hard floor.",
      ],
      whoFor: [
        "A sister who wears slippers constantly and replaces them constantly",
        "Anyone who would actually wash them if they could",
        "A household with hard floors, where slippers pick up everything",
        "Christmas, where a warm inexpensive gift suits the occasion",
      ],
      whyGift: [
        "Can be washed, so they last considerably longer",
        "Memory foam footbed for hard floors",
        "Cheap enough to give alongside something larger",
      ],
      considerations: [
        "Wash cold and air dry flat. A hot wash or a tumble dryer will shrink the knit and permanently compress the foam, which undoes the one advantage you bought them for.",
        "Check the sole before assuming they can go outside. Many knit slippers have a thin indoor sole that wears through quickly on concrete and is slippery on wet ground.",
        "Slipper sizing runs inconsistently and these are often sold in size pairs rather than single sizes. Read the seller's chart, and size up rather than down if she wears socks with them.",
        "Memory foam flattens with time regardless of washing. Expect a year or so of real cushioning — these are a consumable, which the low price reflects.",
      ],
      pros: [
        "Machine washable, unlike most plush slippers",
        "Knit keeps its appearance after washing",
        "Memory foam footbed for hard floors",
        "Very low cost",
      ],
      cons: [
        "Thin sole is not made for outdoor use",
        "Foam compresses over the year",
        "Sizing across brands is inconsistent",
      ],
      alternatives: [
        "memory-foam-house-slippers",
        "oversized-open-cardigan",
        "satin-scrunchie-set",
      ],
    },
  },
  {
    slug: "rose-self-care-gift-box",
    title: "Rose Self-Care Gift Box",
    tag: "Gift Sets",
    summary:
      "A boxed self-care set built around a rose theme — the standard answer when you want to give something and genuinely do not know what she wants.",
    bestFor: "Sister · Friend · Birthday",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0D2CBZGQG?linkCode=ll2&tag=mesmerdesign-20&linkId=5e73d18e2e5dd1ff3ac2156b1456118d&language=en_US",
    image: "/img/products/rose-self-care-gift-box",
    art: { hue: 345, motif: "basket" },
    updated: "2026-09-07",
    tags: ["gift set", "self care", "boxed", "sister", "friend", "birthday", "spa"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Why Gift Boxes Took Over, and the One Thing That Makes Them Land",
      standfirst:
        "A themed box is now the default gift for anyone whose taste you cannot confidently name. It is a genuinely reasonable answer to a real problem, and it has one predictable weakness.",
      why: [
        "It solves the problem that you cannot ask. Asking someone what they want removes the gift entirely, so most gifting is guesswork under time pressure. A curated box spreads that guess across several items in a coherent theme, which is a far better bet than one object chosen blind.",
        "Presentation is doing real work here rather than padding the price. A boxed set arrives looking considered, needs no wrapping, and can be posted directly — for a sister in another city or another country, that is often the difference between a gift arriving and a gift being intended.",
        "A theme gives it coherence a random assortment lacks. Everything pointing at one idea reads as a decision rather than a sweep of a shelf, and that is what separates a gift box from a hamper of unrelated objects.",
      ],
      whoFor: [
        "A sister or friend whose specific taste you cannot name",
        "A birthday you want to acknowledge properly without overreaching",
        "Someone at a distance, where posting a ready box is the practical route",
        "A relationship where a highly personal gift would be too much",
      ],
      whyGift: [
        "A reasonable bet when you genuinely do not know",
        "Arrives presented and ready to post",
        "Coherent theme rather than assorted items",
      ],
      considerations: [
        "The predictable weakness is that a box is anonymous, and the fix is cheap. Anyone could have sent it — so add the one thing nobody else could, which is a handwritten note. That single element is what turns a purchased set into a gift from you, and it costs nothing.",
        "Read the contents list rather than judging by the photograph. Boxes in this category vary enormously in what is inside for a similar price, and the styling shot is not an inventory.",
        "Rose-scented products are more polarising than they look. It is a strong, traditional scent that some people love and others find dated — a less certain choice than a neutral set.",
        "If she has sensitive skin, fragranced bath products are a common irritant. Worth checking before choosing anything scent-led.",
      ],
      pros: [
        "Sensible choice when her taste is unknown",
        "Presented and ready to send",
        "Several items means several chances to land",
      ],
      cons: [
        "Impersonal unless you add something of your own",
        "Rose is a divisive scent",
        "Contents vary widely between similarly priced boxes",
      ],
      alternatives: [
        "get-well-self-care-basket",
        "bath-and-body-gift-set",
        "spa-gift-set-25-piece",
      ],
    },
  },
  {
    slug: "crochet-sister-doll",
    title: "Handmade Crochet Doll with Card",
    tag: "Keepsake",
    summary:
      "A small crocheted doll sold with a forget-me-not card — a gift where the written card, not the object, is the part that gets kept.",
    bestFor: "Sister · A small gesture · Long distance",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FL6ZVHV5?linkCode=ll2&tag=mesmerdesign-20&linkId=32925a534cc906e52f23a60396d97159&language=en_US",
    art: { hue: 340, motif: "weave" },
    updated: "2026-09-07",
    tags: ["keepsake", "crochet", "handmade", "sister", "budget", "long distance", "card"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "When a Gift Comes With a Stated Meaning",
      standfirst:
        "Most small objects mean whatever the recipient decides. This category does something different — it arrives with its meaning already written down, and that changes what you are actually giving.",
      why: [
        "A named meaning removes the ambiguity that sinks small gifts. Hand someone a small crocheted object with nothing attached and it is a trinket; the same object presented as a forget-me-not, with the sentiment stated on a card, is unmistakably a message. The flower has carried that particular meaning for centuries, and borrowing it does the interpretive work for you.",
        "The card outlives the object more often than people expect. Ask anyone what they have kept from a gift like this and it is usually the written part — the object holds the shelf, and the card ends up in a drawer of things nobody throws away.",
        "Between sisters, small and explicit beats large and vague. A big gift raises the stakes and invites reciprocation; something small carrying a clear sentiment says the thing without turning it into an occasion.",
      ],
      whoFor: [
        "A sister you want to send something to for no particular reason",
        "Long distance, where light and unbreakable is the practical constraint",
        "A small piece alongside a larger gift, carrying the sentiment while the other carries the weight",
        "Someone who keeps cards and notes rather than throwing them out",
      ],
      whyGift: [
        "Arrives with its meaning already stated",
        "The card is kept long after the object is a fixture",
        "Cheap and light enough to post anywhere",
      ],
      considerations: [
        "Write on the card yourself if there is room, or enclose your own. A printed sentiment is the frame; your handwriting is what makes it hers rather than anyone's.",
        "Check the dimensions in the specification. Handmade items in this category photograph filling the frame and are consistently smaller in the hand than people expect.",
        "Confirm the card is actually included and what it says. It is the reason to choose this over any other small crocheted object, so it should not be an assumption.",
        "Handmade means variation from the photograph. That is the nature of it, and whether it reads as charm or as disappointment depends entirely on what was expected.",
      ],
      pros: [
        "Meaning is stated rather than left to guesswork",
        "Card tends to be kept indefinitely",
        "Very inexpensive and easy to post",
      ],
      cons: [
        "Small — check the measurements",
        "Printed sentiment is generic without your own words",
        "Too slight to stand alone at a major occasion",
      ],
      alternatives: ["crochet-tulip-keepsake", "crochet-rose-keepsake", "satin-scrunchie-set"],
    },
  },
  {
    slug: "lockable-diary-journal",
    title: "Lockable Diary with Keys",
    tag: "Stationery",
    summary:
      "A thick lined diary that locks — bought less for the security, which is nominal, than for what handing someone a lock actually says.",
    bestFor: "Younger sister · Teen · A first diary",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B09QX2S8FZ?linkCode=ll2&tag=mesmerdesign-20&linkId=3de80034cee136713c923b55939f4e3f&language=en_US",
    art: { hue: 280, motif: "arch" },
    updated: "2026-09-07",
    tags: ["journal", "diary", "stationery", "teen", "sister", "writing", "privacy"],
    placements: [
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-for-her", subcategory: "young-girl" },
      { category: "gifts-for-her", subcategory: "daughter" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "The Lock Is the Message, Not the Security",
      standfirst:
        "A small brass clasp will not stop anyone determined to read a diary. It was never going to. What it does is announce, from the person giving it, that her thoughts are her own — and in a full house that is not a small thing.",
      why: [
        "In a crowded family home, privacy is scarce and rarely granted explicitly. Shared bedrooms, siblings, relatives visiting for weeks — a lot of young people in Habesha households have very little space that is definitively theirs. A diary that locks is a small physical claim on some, and the fact that it comes from an older sister or a parent is what gives it authority.",
        "Writing things down is genuinely useful at that age, and it needs somewhere safe to happen. Nobody writes honestly in a notebook they think will be read. The lock is what makes the honesty possible, whether or not it would survive a determined attempt.",
        "It is a gift that treats a young person as a person. Most gifts to a younger sister are toys, clothes or sweets chosen by an adult. This one implicitly says she has an inner life worth protecting, which lands differently and tends to be remembered.",
      ],
      whoFor: [
        "A younger sister, particularly one sharing a room",
        "A teenager who reads a lot and would write if given the excuse",
        "A child at the age where a private space starts to matter",
        "Anyone in a house where nothing is really theirs alone",
      ],
      whyGift: [
        "Grants privacy rather than just providing paper",
        "Encourages a habit worth having",
        "Treats a young recipient as someone with an inner life",
      ],
      considerations: [
        "Be honest with yourself about the lock. These clasps are symbolic and open easily; if the situation is one where a diary genuinely would be read and that would be damaging, the lock is not a solution and the conversation is.",
        "Do not read it. This sounds obvious and it is the single most important thing about giving one — a diary that gets read once is never written in honestly again, and the gift becomes the opposite of what was intended.",
        "Check the page count and the paper. A thick diary lasts years; thin paper that shows ink through from the other side is the usual disappointment at this price.",
        "Two keys is standard and both get lost. Suggest one lives somewhere other than with the diary, or the lock becomes a permanent problem rather than a feature.",
      ],
      pros: [
        "Offers real privacy in a crowded home",
        "Encourages writing as a habit",
        "Substantial page count for the price",
        "Treats a young recipient seriously",
      ],
      cons: [
        "The lock is symbolic rather than secure",
        "Keys are easily lost",
        "Paper quality at this price is variable",
      ],
      alternatives: ["satin-scrunchie-set", "crochet-sister-doll", "wireless-earbuds"],
    },
  },
];
