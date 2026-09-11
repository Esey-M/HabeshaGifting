import type { Product } from "./types";

/**
 * Retailer-linked gift recommendations for a boyfriend, husband or brother.
 *
 * Same rules as the rest of the linked catalogue: the editorial content is
 * category buying advice — how to choose this kind of gift and what goes wrong
 * — not a hands-on review. We hold no unit of any of these items, so nothing
 * here claims durability, finish or fit that cannot be read off the listing,
 * and no prices or ratings appear.
 *
 * `budget` is our own editorial estimate of what the category typically costs.
 */
export const boyfriendProducts: Product[] = [
  {
    slug: "cordless-hair-clipper-kit",
    title: "Cordless Hair Clipper & Trimmer Kit",
    tag: "Grooming",
    summary:
      "A barber-grade clipper with a fade blade and a separate T-blade trimmer — the gift for anyone who has ever struggled to find a barber who can cut their hair properly.",
    bestFor: "Boyfriend · Brother · Anyone between barbers",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0B3DCVS7Y?linkCode=ll2&tag=mesmerdesign-20&linkId=6ae0c88b5b6fbd193b423695a17376be&language=en_US",
    image: "/img/products/cordless-hair-clipper-kit",
    art: { hue: 210, motif: "rays" },
    updated: "2026-09-07",
    tags: ["grooming", "clippers", "trimmer", "barber", "boyfriend", "brother", "practical"],
    placements: [
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-for-him", subcategory: "dad" },
      { category: "gifts-for-him", subcategory: "teen-boy" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Clippers: The Gift That Solves a Problem Most People Have Given Up On",
      standfirst:
        "Finding a barber who can actually cut your hair is a running problem in the diaspora, and one most men solve by tolerating a bad cut every few weeks. A decent clipper is the gift that quietly ends it.",
      why: [
        "Hair texture is the whole issue, and it is not a small one. Move to a new city — or a smaller one — and the barber who understands your hair may be a forty-minute drive away, or may not exist. The men in that position either travel for a haircut, accept a poor one, or learn to do it themselves, and this is the gift that makes the third option possible.",
        "The fade blade is the specification that matters. A standard clipper cuts bluntly and leaves a line; a blade designed to taper is what makes the gradual blend possible at home. If the recipient wears any kind of fade, a clipper without that capability is a clipper that gets used once.",
        "Two tools in one kit covers two different jobs. The clipper takes bulk length off; the T-blade trimmer does the edge-up — the hairline, the neck, the beard border. Those are separate operations with separate tools, and a kit that includes both is the difference between a haircut and a haircut that looks finished.",
      ],
      whoFor: [
        "Anyone who has moved somewhere without a barber who knows their hair",
        "A boyfriend or brother who already cuts his own hair on a cheap clipper",
        "Someone who maintains a fade between barber visits and needs the edges kept sharp",
        "A student or a young man for whom a fortnightly haircut is a real expense",
      ],
      whyGift: [
        "Pays for itself against barber visits within a few cuts",
        "Solves a genuinely common diaspora problem",
        "Used every week or two, indefinitely",
      ],
      considerations: [
        "This gift misses badly for some people, and it is worth being honest about who. For plenty of men the barbershop is the social event, not the haircut — an hour of conversation in a room full of people from home. Giving that person clippers reads as a suggestion to stop going.",
        "Check the stated runtime and whether it can be used while charging. A cordless clipper that dies partway through a cut is worse than a corded one, and being able to plug in mid-cut is the feature that rescues it.",
        "Blades need oiling, and almost nobody is told this. A few drops on the blade after each use is the difference between a clipper that stays sharp for years and one that starts pulling hair within months — worth passing on when you hand it over.",
        "Look at what guard sizes are included and whether they are numbered clearly. A kit with a poor range of guards, or guards that are hard to tell apart, is frustrating in exactly the moment you cannot stop and check.",
      ],
      pros: [
        "Fade-capable blade rather than a blunt-cutting one",
        "Clipper and T-blade trimmer cover both jobs",
        "Cordless, so it is usable at a mirror rather than a socket",
        "Replaces a recurring cost",
      ],
      cons: [
        "Wrong gift for someone who values the barbershop itself",
        "Needs regular oiling to stay sharp",
        "A first self-cut rarely goes well — there is a learning curve",
        "Cordless runtime varies and is easy to overestimate",
      ],
      alternatives: ["mens-spa-gift-set", "cologne-organizer-stand", "mens-classic-dress-watch"],
    },
  },
  {
    slug: "mens-classic-dress-watch",
    title: "Classic Stainless Steel Dress Watch",
    tag: "Accessories",
    summary:
      "A big-dial dress watch with a date and decorative skeleton work — bought as jewellery rather than as a way of telling the time, which is the honest framing.",
    bestFor: "Boyfriend · Graduation · A first proper watch",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0DRNNS8M2?linkCode=ll2&tag=mesmerdesign-20&linkId=2390278b7ad181ba96b334b5d3339980&language=en_US",
    image: "/img/products/mens-classic-dress-watch",
    art: { hue: 45, motif: "rays" },
    updated: "2026-09-07",
    tags: ["watch", "accessories", "dress watch", "boyfriend", "graduation", "anniversary", "formal"],
    placements: [
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-by-occasion", subcategory: "graduation" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
    ],
    guide: {
      heading: "Buying a Watch for Someone Who Already Owns a Phone",
      standfirst:
        "Nobody has needed a wristwatch to know the time for fifteen years. Once you accept that, choosing one gets much easier, because you are shopping for jewellery and can judge it on those terms.",
      why: [
        "A dress watch is the one piece of jewellery most men will actually wear. Chains and rings are a bigger commitment and a stronger statement; a watch is socially neutral, which makes it the safe entry point if you want to give him something to wear and are not sure how far he will go.",
        "It does specific work at specific events. A wedding, a graduation, a funeral, a first day in a job that expects a jacket — these are the occasions where a bare wrist is noticed and a watch quietly finishes the outfit. That is a narrow use, but it recurs for the rest of his life.",
        "At this end of the market you are buying appearance, and there is nothing wrong with that as long as you know it. A well-proportioned steel watch with a clean dial reads correctly across a room, and across a room is where a watch is actually seen.",
      ],
      whoFor: [
        "A boyfriend who owns no jewellery and would wear exactly one piece",
        "A graduate starting a job where a jacket is expected",
        "Someone whose only watch is a fitness tracker and who needs a second one for occasions",
        "A first watch, where an expensive mistake would be worse than a modest one",
      ],
      whyGift: [
        "The most wearable piece of jewellery for most men",
        "Earns its place at the events that keep recurring",
        "Low enough risk for a first attempt at his taste",
      ],
      considerations: [
        "Check the case diameter against his wrist, not against the photograph. Big-dial watches are photographed on large wrists; a 44mm case on a slim wrist looks like a borrowed watch. If he owns one already, measure it — anything within a few millimetres will sit right.",
        "Understand what the complications are and are not. A skeleton window or a moon-phase dial on a quartz watch is a decorative panel rather than a working mechanism driven by the movement — that is normal at this price, and it is worth knowing so you can describe it accurately rather than overselling it.",
        "\"Water resistant\" is not a swimming rating. Unless the listing states a specific depth rating, treat it as splash-proof: fine in rain, not fine in a shower or a pool. This is the single most common way an inexpensive watch is killed.",
        "Metal bracelets almost always need links removed to fit. That is a five-minute job for a jeweller and an irritating one at home — factor in that he may need to take it somewhere before he can wear it.",
      ],
      pros: [
        "Wearable jewellery for someone who wears none",
        "Suits formal occasions that keep coming round",
        "Steel bracelet and clean dial read well at a distance",
        "Modest outlay for a first watch",
      ],
      cons: [
        "Decorative dial features are not working mechanisms",
        "Large cases do not suit every wrist",
        "Bracelet will likely need sizing before wear",
        "Water resistance at this level is limited",
      ],
      alternatives: [
        "cologne-organizer-stand",
        "cordless-hair-clipper-kit",
        "slim-rfid-leather-wallet",
      ],
    },
  },
  {
    slug: "cologne-organizer-stand",
    title: "Cologne & Grooming Organizer Stand",
    tag: "Home",
    summary:
      "A tiered stand for bottles that currently live in a row at the back of a counter — the gift for someone whose collection has outgrown the shelf it started on.",
    bestFor: "Boyfriend · Housewarming · A growing collection",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0GHNTMBD9?linkCode=ll2&tag=mesmerdesign-20&linkId=52afcfec3433a6b3d47f08c543bcf317&language=en_US",
    image: "/img/products/cologne-organizer-stand",
    art: { hue: 25, motif: "arch" },
    updated: "2026-09-07",
    tags: ["organizer", "cologne", "grooming", "storage", "home", "boyfriend", "housewarming"],
    placements: [
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "housewarming" },
    ],
    guide: {
      heading: "The Gift That Acknowledges an Interest He Already Has",
      standfirst:
        "Buying someone a bottle of cologne is a guess about his taste. Buying him somewhere to put the bottles he already chose is not a guess at all, which is why it is the safer gift of the two.",
      why: [
        "It works because it takes no view on his taste. Fragrance is the most personal thing you can buy for someone and the easiest to get wrong. A stand sidesteps the entire problem: it says you noticed he cares about this, without you having to be right about which scent he likes.",
        "A collection displayed is a collection used. Bottles pushed to the back of a cupboard get forgotten and eventually go off unopened; bottles at eye level in a row get chosen between in the morning. If he owns more than three, this changes his actual routine rather than just tidying it.",
        "It reads as a considered gift for very little money. Most inexpensive gifts announce their price. A stand that solves a visible daily clutter problem in his own space reads as attention paid, which is a different currency.",
      ],
      whoFor: [
        "A boyfriend who owns several bottles and keeps them in a row on a windowsill",
        "Someone who has just moved into their own place and is furnishing the details",
        "Anyone with a grooming routine and no dedicated space for it",
        "A small gift given alongside a larger one, or a modest occasion",
      ],
      whyGift: [
        "Requires no guess about his taste in fragrance",
        "Changes a daily routine rather than sitting on a shelf",
        "Reads as attention rather than as expenditure",
      ],
      considerations: [
        "A bathroom counter is the worst place in the house for fragrance. Heat, steam and daylight all degrade it, and a bathroom delivers all three — if the stand is going in there, it is worth mentioning that a bedroom dresser will make his bottles last considerably longer.",
        "Measure the shelf depth against his actual bottles. Cologne bottles are wide and heavy compared with most things a small stand is designed for, and a tier too shallow to hold a 100ml bottle safely is worse than no stand.",
        "Check the material honestly. Acrylic scratches and clouds; thin metal bends; coated wood marks where a wet bottle is set down. At this price something will compromise, and it is better to know which.",
        "Count the tiers against the collection. A stand built for ten bottles looks sparse holding three, and a stand built for four is immediately outgrown by someone actively collecting.",
      ],
      pros: [
        "No risk of getting his taste wrong",
        "Makes an existing collection usable",
        "Inexpensive but specific",
      ],
      cons: [
        "Only makes sense if he already owns several bottles",
        "Bathroom placement is bad for the fragrance itself",
        "Materials at this price mark and scratch",
      ],
      alternatives: ["mens-spa-gift-set", "mens-classic-dress-watch", "cordless-hair-clipper-kit"],
    },
  },
  {
    slug: "mens-spa-gift-set",
    title: "Men's Bath & Grooming Gift Set",
    tag: "Gift Sets",
    summary:
      "A boxed multi-piece bath set in a neutral aquatic scent — bought less for the contents than for the permission it gives him to use them.",
    bestFor: "Boyfriend · Friend · Christmas",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0CG9D1KWV?linkCode=ll2&tag=mesmerdesign-20&linkId=80b635efbdb7f2f6abffdcb3607e3a77&language=en_US",
    image: "/img/products/mens-spa-gift-set",
    art: { hue: 195, motif: "basket" },
    updated: "2026-09-07",
    tags: ["gift set", "spa", "grooming", "bath", "boyfriend", "friend", "christmas", "boxed"],
    placements: [
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-for-him", subcategory: "friend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Grooming Sets for Men Who Would Never Buy One",
      standfirst:
        "The contents of these boxes are not the point. The point is that a great many men will happily use good bath products and will not, under any circumstances, walk into a shop and buy them.",
      why: [
        "A gift removes the decision. Whatever the reason — it feels indulgent, it feels unmasculine, it simply never occurs to him — a large number of men use whatever bar of soap is in the house until it runs out. Receiving a set as a gift bypasses the purchase entirely, which is the only barrier that ever existed.",
        "A boxed set makes it legible as a present. Individual bottles handed over look like a comment on his hygiene. The same products presented as a set read as a treat, which is the same objects doing completely different social work.",
        "An aquatic or fresh scent is the safest possible default. Where women's sets commit hard to florals and sweetness, men's sets in this style tend toward clean and neutral — which means the odds of the scent being actively disliked are much lower than in the equivalent gift for a woman.",
      ],
      whoFor: [
        "A boyfriend whose bathroom contains one bottle of shower gel and nothing else",
        "A friend, where a personal gift needs to stay light and unloaded",
        "Christmas or a birthday where you want something presentable at a modest price",
        "Someone who has quietly started taking more care and would be encouraged by it",
      ],
      whyGift: [
        "Removes the barrier of having to buy it himself",
        "Presents as a treat rather than as a hint",
        "Neutral scent profile is unlikely to offend",
      ],
      considerations: [
        "Be alert to how it lands. Grooming and bath products given to the wrong person, or at the wrong moment, can be received as a comment rather than a kindness. With a boyfriend that is usually fine; with a colleague or a new friend it is a genuine risk.",
        "Check the piece count against the sizes. Twelve pieces at this price means twelve small pieces, so buy it for the presentation and the variety rather than expecting months of supply.",
        "Skin sensitivity matters here as much as anywhere. Heavily fragranced washes are a common trigger for eczema and for irritation after shaving — if he has ever mentioned either, this is the wrong category.",
        "Look at whether the box is the presentation or just packaging. Some sets arrive gift-ready and some arrive in a plain carton needing wrapping, and the listing photograph does not always distinguish.",
      ],
      pros: [
        "Gets used by people who would never buy it",
        "Neutral scent is a low-risk choice",
        "Presents generously for a modest price",
      ],
      cons: [
        "Can read as a hint if the relationship is wrong",
        "Individual pieces are small",
        "Fragranced products are a problem for sensitive skin",
      ],
      alternatives: [
        "cologne-organizer-stand",
        "cordless-hair-clipper-kit",
        "bath-and-body-gift-set",
      ],
    },
  },
  {
    slug: "portable-push-up-board",
    title: "Foldable Push-Up Board",
    tag: "Fitness",
    summary:
      "A colour-coded press-up board with handles that folds flat under a bed — home training equipment for a flat with no room for home training equipment.",
    bestFor: "Boyfriend · Brother · Training at home",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0B73XM8ZB?linkCode=ll2&tag=mesmerdesign-20&linkId=0a3ce910bd92667fd698a7c2c7615ddb&language=en_US",
    image: "/img/products/portable-push-up-board",
    art: { hue: 220, motif: "weave" },
    updated: "2026-09-07",
    tags: ["fitness", "home gym", "training", "portable", "boyfriend", "brother", "budget"],
    placements: [
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Fitness Gifts: One Rule, and It Is Not About the Equipment",
      standfirst:
        "Exercise equipment is among the most useful gifts you can give and among the easiest to get catastrophically wrong. The difference has nothing to do with the product.",
      why: [
        "Storage is why home equipment fails, not motivation. Most people who stop using something they bought stopped because it lived in a cupboard and getting it out was a decision. A board that folds flat and slides under a bed or behind a door removes that decision, which matters far more than any feature on the box.",
        "The colour-coded positions do real work for a beginner. Hand placement changes which muscles a press-up loads, and most people never learn that. A board that marks the positions turns one exercise into a structured routine without anyone having to research anything.",
        "Handles change the movement itself. Gripping a handle rather than pressing flat palms into the floor lets the wrist stay neutral, which is the difference between training regularly and stopping because your wrists hurt — a common and rarely anticipated reason people abandon press-ups.",
      ],
      whoFor: [
        "Someone who already trains and has mentioned wanting to do more at home",
        "A boyfriend or brother in a flat with no space for equipment",
        "Anyone who travels for work and loses their routine every trip",
        "A beginner who wants structure rather than just a floor",
      ],
      whyGift: [
        "Stores flat, which is why it keeps getting used",
        "Adds structure to an exercise he already knows",
        "Handles make the movement kinder on the wrists",
      ],
      considerations: [
        "The rule: only give this to someone who has already told you they want it. Fitness equipment given unprompted can read as a comment on the recipient's body, however warmly it is meant, and no amount of good intention undoes that reading. If he has mentioned training, it is a great gift; if he has not, choose something else.",
        "Check the weight rating and the footprint before ordering. These boards vary a good deal in how much they will take and how far apart the handle positions sit, and a board that flexes underneath you is unusable.",
        "It trains the upper body and very little else. Sold as a complete home gym it will disappoint; understood as a good press-up station it is exactly what it claims.",
        "Handles and floors do not always agree. On hard flooring the base can slide, so a mat underneath is worth mentioning when you hand it over.",
      ],
      pros: [
        "Folds flat and stores anywhere",
        "Marked positions give a beginner structure",
        "Handles reduce wrist strain",
        "Cheap compared with any other equipment",
      ],
      cons: [
        "A risky gift unless he has asked for it",
        "Upper body only, despite the marketing",
        "Can slide on hard floors",
      ],
      alternatives: ["cordless-hair-clipper-kit", "mens-spa-gift-set", "mens-classic-dress-watch"],
    },
  },
];
