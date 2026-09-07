import type { Product } from "./types";

/**
 * Retailer-linked gift recommendations for a mother or grandmother.
 *
 * Same rules as the rest of the linked catalogue: the editorial content is
 * category buying advice — how to choose this kind of gift and what goes wrong
 * — not a hands-on review. We hold no unit of any of these items, so nothing
 * here claims durability, finish or fit that cannot be read off the listing,
 * and no prices or ratings appear.
 *
 * Two entries here are health-adjacent. We describe what the category does and
 * what the listings claim, and we do not repeat therapeutic claims as though
 * they were established. Nothing on this site is medical advice.
 *
 * `budget` is our own editorial estimate of what the category typically costs.
 */
export const momProducts: Product[] = [
  {
    slug: "wifi-digital-photo-frame",
    title: "10-Inch WiFi Digital Picture Frame",
    tag: "Photo Gifts",
    summary:
      "A frame you can send photos to from another country — the one gift on this list that is really about the distance between you and her.",
    bestFor: "Mom · Grandma · Family living abroad",
    budget: "under-100",
    affiliateUrl:
      "https://www.amazon.com/dp/B0D8JDPKKS?linkCode=ll2&tag=mesmerdesign-20&linkId=b9bd90173c81222cc2b93c7910fe69fc&language=en_US",
    art: { hue: 200, motif: "arch" },
    updated: "2026-09-07",
    tags: ["photo frame", "digital", "wifi", "family", "mom", "grandma", "diaspora", "christmas"],
    placements: [
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-for-her", subcategory: "grandma" },
      { category: "personalized-gifts", subcategory: "photo-gifts" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "WiFi Photo Frames: The Diaspora Gift That Keeps Giving After You Leave",
      standfirst:
        "A printed photo is a gift you give once. A connected frame is a gift that arrives again every time somebody in the family takes a picture, which is a fundamentally different thing to buy.",
      why: [
        "The point is the sending, not the screen. Anyone can put a photograph in a frame. A WiFi frame means that a cousin in Toronto, a sister in Frankfurt and you can all push a picture to a shelf in her living room the same afternoon — grandchildren, a graduation, a wedding — without her having to operate anything at all.",
        "It converts one gift into a standing arrangement. Most gifts are finished the moment they are opened. This one keeps producing, and it produces most reliably in exactly the households where the family is spread across three countries and nobody visits often enough.",
        "It removes the technology burden from the recipient and puts it on you. She does not need a smartphone, an account or any interest in apps. Everyone else does the sending; her only job is to look at it. That asymmetry is the entire reason this category exists.",
      ],
      whoFor: [
        "A mother or grandmother whose children and grandchildren live in other countries",
        "Someone who keeps printed photos out on display already — this is the same instinct, updated",
        "A household where you can set it up in person, or talk someone through it",
        "Anyone who says she does not want anything and then asks for photographs of the grandchildren",
      ],
      whyGift: [
        "Keeps delivering long after the occasion it was given for",
        "Requires nothing of her technically",
        "Lets the whole family contribute to one gift",
      ],
      considerations: [
        "Set it up before you give it. Connect it to her WiFi, load fifty photos, and invite the family to the album while it is still in your hands. A frame handed over empty, with the setup left as homework, is a frame that ends up in a cupboard.",
        "Check whether the cloud service is free permanently or free for a period. Some frames in this category are sold cheaply and monetised later through a subscription for storage or video, and that is the detail worth finding before you buy rather than after.",
        "Confirm it works on her WiFi, not just on yours. Older routers and 5GHz-only networks are a common failure point, and some frames support only 2.4GHz — worth knowing what she actually has at home.",
        "Think about where it will sit. These need mains power, so a shelf with no socket nearby means a visible cable across the room, which is the usual reason a frame gets moved somewhere less good.",
      ],
      pros: [
        "The whole family can send photos to it",
        "Nothing for the recipient to learn or operate",
        "Keeps working as a gift for years",
        "Touchscreen and auto-rotate handle portrait and landscape shots",
      ],
      cons: [
        "Needs setting up by someone confident with WiFi",
        "Requires mains power wherever it sits",
        "Some services in this category charge later for storage",
        "Depends on the family actually sending photos",
      ],
      alternatives: [
        "custom-family-photo-frame",
        "painted-wooden-jewelry-armoire",
        "crochet-rose-keepsake",
      ],
    },
  },
  {
    slug: "painted-wooden-jewelry-armoire",
    title: "Painted Wooden Jewelry Armoire",
    tag: "Home",
    summary:
      "A multi-layer wooden jewellery cabinet with a lock and a velvet lining — closer to a piece of furniture than to a box, and bought for a collection that has outgrown a dish.",
    bestFor: "Mom · Grandma · A lifetime of jewellery",
    budget: "under-100",
    affiliateUrl:
      "https://www.amazon.com/dp/B0C6LVFQPY?linkCode=ll2&tag=mesmerdesign-20&linkId=59984b572bd94d222f095f45eff0323b&language=en_US",
    art: { hue: 30, motif: "arch" },
    updated: "2026-09-07",
    tags: ["jewelry box", "armoire", "wooden", "storage", "keepsake", "mom", "grandma", "lock"],
    placements: [
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-for-her", subcategory: "grandma" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
    ],
    guide: {
      heading: "When a Jewellery Box Should Be Furniture",
      standfirst:
        "A small organiser tidies a drawer. A wooden armoire with a lock is bought for a different situation entirely — one where the jewellery has accumulated over decades and some of it genuinely matters.",
      why: [
        "Volume is the reason to go up a tier. A mother's jewellery is rarely a curated ten pieces; it is gold from her own wedding, gifts from her children, things inherited and things she no longer wears but will never give away. Multi-layer storage exists because that collection does not fit in a travel case, and splitting it across three containers is exactly the problem you are trying to solve.",
        "The lock is not decorative in a busy house. Where grandchildren visit, where a cleaner comes, or where a household simply has a lot of people moving through it, a lock is the difference between keeping real gold on a dresser and keeping it hidden at the back of a wardrobe where she cannot enjoy it.",
        "Velvet lining is a functional specification rather than a luxury one. Soft gold and plated pieces scratch against bare wood and against each other; a lined interior with separate slots is what stops a box from slowly damaging the collection it holds.",
      ],
      whoFor: [
        "A mother or grandmother with decades of accumulated jewellery",
        "Someone storing real gold who currently keeps it hidden rather than accessible",
        "A household with children or regular visitors, where a lock earns its place",
        "Anyone whose jewellery currently lives across a dish, a drawer and an old box",
      ],
      whyGift: [
        "Sized for a real collection rather than a handful of pieces",
        "Lockable, so valuable pieces can live somewhere reachable",
        "Reads as a considered object in its own right, not just storage",
      ],
      considerations: [
        "Measure the dresser first. Armoire-style boxes are substantially larger than the photographs suggest, and they need clearance above to open the lid as well as footprint below.",
        "Match the layout to the collection. Long chains need hooks or a hanging section rather than compartments; a box built mostly for rings and studs will not fix a necklace problem no matter how many layers it has.",
        "A lock on a wooden box is a deterrent, not security. It stops casual access and curious hands; it is not a safe, and anything genuinely valuable deserves a considered decision rather than a small brass catch.",
        "Painted and antique-finish boxes are a strong decorative statement. Look at it as furniture and ask whether it suits her room, because unlike a small case it cannot be tucked out of sight.",
      ],
      pros: [
        "Holds a full collection rather than a selection",
        "Lockable for pieces that would otherwise stay hidden",
        "Lined interior protects soft metals",
        "Substantial enough to present as a significant gift",
      ],
      cons: [
        "Takes real space on a dresser",
        "The lock is a deterrent rather than security",
        "Decorative finish will not suit every room",
        "Heavier and more awkward to post than a small case",
      ],
      alternatives: [
        "jewelry-organizer-box",
        "wifi-digital-photo-frame",
        "engraved-wooden-keepsake-box",
      ],
    },
  },
  {
    slug: "shiatsu-foot-massager-heated",
    title: "Heated Shiatsu Foot Massager",
    tag: "Wellness",
    summary:
      "A kneading foot massager with heat and a remote — the gift for a mother who has spent thirty years on her feet and will not spend money on herself.",
    bestFor: "Mom · Dad · Someone on their feet all day",
    budget: "100-plus",
    affiliateUrl:
      "https://www.amazon.com/dp/B0DM265BQ4?linkCode=ll2&tag=mesmerdesign-20&linkId=78c9eb01a48faee2200e1fc9b379e9a6&language=en_US",
    art: { hue: 190, motif: "vessel" },
    updated: "2026-09-07",
    tags: ["massager", "foot", "wellness", "heated", "comfort", "mom", "dad", "grandma"],
    placements: [
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-for-her", subcategory: "grandma" },
      { category: "gifts-for-him", subcategory: "dad" },
      { category: "gifts-for-him", subcategory: "grandpa" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Foot Massagers: A Good Gift and a Category Full of Overclaiming",
      standfirst:
        "This is one of the few gifts that directly answers a complaint you have actually heard. It is also a category where the listings promise a great deal more than a machine can reasonably deliver, and separating those two things is the whole job.",
      why: [
        "It targets a specific, stated problem. Most gifts are guesses about what someone might enjoy. If she stands all day — nursing, hairdressing, retail, catering, or simply running a household that never stops — sore feet are not a hypothesis, and a gift aimed squarely at them lands differently from another candle.",
        "It is the kind of thing people will not buy themselves. A machine that exists purely for fifteen minutes of comfort in the evening sits exactly in the category a certain generation of Habesha mother considers an indulgence and refuses to spend money on. That is precisely what makes it a good gift rather than a good purchase.",
        "Heat plus kneading is the combination that gets used. Vibration-only units are the ones that end up in a cupboard; the reason to look for kneading rollers and a heat function is that together they produce a sensation people voluntarily come back to.",
      ],
      whoFor: [
        "A parent who is on their feet for work and says so",
        "Someone who would never spend this on themselves",
        "A household with room to leave it out — it gets used if it is visible",
        "An older recipient who finds reaching their own feet difficult",
      ],
      whyGift: [
        "Answers a complaint you have genuinely heard",
        "Firmly in the category people will not buy for themselves",
        "Used repeatedly rather than admired once",
      ],
      considerations: [
        "Treat the health claims in these listings as marketing rather than medicine. Devices in this category are routinely advertised against plantar fasciitis and neuropathy; that is the seller's framing, not an established clinical result, and we are not in a position to evaluate it. If she is being treated for anything affecting her feet, the honest answer is to ask her doctor first.",
        "Heat and reduced sensation are a genuinely bad combination. Anyone with diabetes, neuropathy or any loss of feeling in the feet can be burned without noticing it — this is the one caution in this guide worth acting on rather than noting.",
        "Check the maximum foot size against reality. These units have a fixed opening, and a machine that pinches is a machine that gets used once. The listing states a maximum size; take it seriously.",
        "They are bulky and heavy. Before buying, picture where it will actually live — one that has to be lifted out of a cupboard every time will be used for a fortnight and then not at all.",
      ],
      pros: [
        "Addresses a real and repeated complaint",
        "Heat and kneading together get genuine use",
        "Remote control avoids bending down to adjust it",
        "Clearly an indulgence, which is the point",
      ],
      cons: [
        "Large, heavy and needs somewhere to live",
        "Fixed foot opening does not suit every size",
        "Listings overclaim on therapeutic benefit",
        "Not suitable without medical advice where sensation is reduced",
      ],
      alternatives: [
        "neck-and-shoulder-massager-heated",
        "memory-foam-house-slippers",
        "get-well-self-care-basket",
      ],
    },
  },
  {
    slug: "neck-and-shoulder-massager-heated",
    title: "Heated Neck & Back Massager",
    tag: "Wellness",
    summary:
      "A kneading massager with heat for the neck, shoulders and back — the same argument as the foot massager, aimed at where most people actually carry it.",
    bestFor: "Mom · Dad · Desk work and heavy lifting",
    budget: "under-100",
    affiliateUrl:
      "https://www.amazon.com/dp/B0GXZBV5Y7?linkCode=ll2&tag=mesmerdesign-20&linkId=57c8457508e51798e0b3dc83792917e4&language=en_US",
    art: { hue: 210, motif: "weave" },
    updated: "2026-09-07",
    tags: ["massager", "neck", "shoulder", "wellness", "heated", "mom", "dad", "grandma"],
    placements: [
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-for-her", subcategory: "grandma" },
      { category: "gifts-for-him", subcategory: "dad" },
      { category: "gifts-for-him", subcategory: "grandpa" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Neck Massagers: Why the Strap Design Decides Whether It Gets Used",
      standfirst:
        "Everything in this category kneads and most of it heats. The variable that actually determines whether the thing lives on the sofa or in a drawer is how you hold it in place.",
      why: [
        "The neck and shoulders are where nearly everyone reports tension, which makes this the most broadly applicable gift in the wellness aisle. Desk work, driving, carrying children, lifting at work — the causes differ and the complaint is the same.",
        "The handle straps are the whole design. A unit you drape over the shoulders and pull down by the handles lets the user set the pressure themselves, second by second. That is why this shape has outlasted the rigid pillow-style units: the recipient controls the intensity rather than enduring it.",
        "Heat is what makes it pleasant rather than merely effective. Kneading alone reads as clinical; warmth is the part that turns it into something someone chooses to do in the evening, which is what determines whether a gift like this gets a second use.",
      ],
      whoFor: [
        "A parent who mentions their neck or shoulders",
        "Someone at a desk all day, or driving all day",
        "An older recipient who cannot comfortably reach their own shoulders",
        "A household where more than one person will use it — these get shared",
      ],
      whyGift: [
        "Aimed at the most commonly reported area of tension",
        "The user sets their own pressure through the straps",
        "Genuinely gets shared around a household",
      ],
      considerations: [
        "Check whether it is mains-powered or battery. This one is explicitly not cordless, which is fine on a sofa and useless in a car — the listing states it plainly and it is easy to skim past.",
        "Deep-kneading units are stronger than most people expect. Start on the lowest setting over clothing rather than bare skin; a first use at full intensity is how someone decides they dislike the whole category.",
        "As with any device sold against pain, treat the therapeutic language in the listing as marketing. If there is an existing neck or spinal problem, a diagnosis, or recent injury, that is a question for a doctor rather than for a product page.",
        "Look at where the nodes sit relative to the neck itself. These are designed for the muscle either side of the spine, not the spine, and using one directly on the vertebrae is uncomfortable at best.",
      ],
      pros: [
        "Targets the most commonly complained-about area",
        "Pressure is controlled by the user, not fixed",
        "Heat makes it something people return to",
        "Works across the shoulders, back and legs",
      ],
      cons: [
        "Corded, so it is tied to a socket",
        "Default intensity is strong for a first-time user",
        "Bulky to store neatly",
        "Listings overclaim on pain relief",
      ],
      alternatives: [
        "shiatsu-foot-massager-heated",
        "memory-foam-house-slippers",
        "get-well-self-care-basket",
      ],
    },
  },
  {
    slug: "memory-foam-house-slippers",
    title: "Memory Foam House Slippers",
    tag: "Comfort",
    summary:
      "Closed-back knit slippers with a memory foam footbed and a proper rubber sole — the small gift most likely to be worn every day until it wears out.",
    bestFor: "Mom · Grandma · Cold floors",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FJLYTLTJ?linkCode=ll2&tag=mesmerdesign-20&linkId=93e0e350d947e23bb3465f14b89b0d20&language=en_US",
    art: { hue: 20, motif: "weave" },
    updated: "2026-09-07",
    tags: ["slippers", "comfort", "house shoes", "memory foam", "mom", "grandma", "christmas", "winter"],
    placements: [
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-for-her", subcategory: "grandma" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Slippers: Three Details That Decide Whether They Get Worn",
      standfirst:
        "Slippers are the most given and least considered gift on any list. The difference between a pair worn daily for two years and a pair worn twice comes down to three things, none of which are on the front of the listing.",
      why: [
        "A closed back changes what they are for. Backless slippers have to be gripped with the toes on every step, which is why they stay by the bed. A closed heel makes them house shoes — worn from the kitchen to the door to the garden and back — and that is a completely different amount of use.",
        "A real rubber sole is what makes them safe on hard floors. Tiled and laminate floors are common in the homes this gift goes to, and a soft fabric sole on tile is genuinely slippery. For an older recipient this stops being a comfort question and becomes the main reason to choose one pair over another.",
        "Memory foam solves the specific complaint of standing on a hard floor. In a kitchen where somebody spends a long time cooking — which is most of the kitchens this gift is going into — the cushioning is doing real work rather than being a marketing word.",
      ],
      whoFor: [
        "A mother or grandmother in a house with tiled or laminate floors",
        "Someone who spends hours standing in a kitchen",
        "An older recipient where grip on hard floors matters",
        "Anyone whose current slippers have flattened to cardboard and who has not noticed",
      ],
      whyGift: [
        "Worn every day rather than kept for occasions",
        "Solves a real complaint about cold, hard floors",
        "Inexpensive enough to give alongside something larger",
      ],
      considerations: [
        "Sizing is the whole risk, and these listings often label in EU sizes with a US range in brackets. Find a pair of her shoes, read the size off the inside, and match against the seller's own chart rather than assuming.",
        "If in doubt, size up rather than down. Slippers worn with socks need the room, and a slightly loose slipper is wearable where a tight one is not.",
        "Check the sole is rated for outdoor use if she will step outside to a bin or a garden. An indoor-only sole wears through fast on concrete and brings the grit back inside.",
        "Memory foam compresses permanently over time. Expect a year or two of real cushioning rather than indefinite support — which is fine at this price, but worth knowing they are a consumable.",
      ],
      pros: [
        "Closed back makes them genuinely wearable house shoes",
        "Non-slip sole matters on tile and laminate",
        "Cushioned for standing rather than just for warmth",
        "Low cost for something used daily",
      ],
      cons: [
        "Sizing on these listings is easy to get wrong",
        "Memory foam flattens over time",
        "Knit uppers pick up marks and are hard to clean",
      ],
      alternatives: [
        "fleece-sherpa-pajama-set",
        "shiatsu-foot-massager-heated",
        "long-nightgown-three-pack",
      ],
    },
  },
  {
    slug: "get-well-self-care-basket",
    title: "Self-Care & Get Well Gift Basket",
    tag: "Gift Sets",
    summary:
      "A boxed care package for someone recovering, grieving or simply worn down — the gift you send when the occasion is not a celebration.",
    bestFor: "Mom · Sister · After surgery or bad news",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FQTVY3JK?linkCode=ll2&tag=mesmerdesign-20&linkId=5f39fb92a0f16b43057fc14420b6303e&language=en_US",
    art: { hue: 150, motif: "basket" },
    updated: "2026-09-07",
    tags: ["gift set", "care package", "get well", "self care", "mom", "sister", "friend", "recovery"],
    placements: [
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Care Packages: What to Send When There Is Nothing to Celebrate",
      standfirst:
        "Every other gift on this site is for a good day. This category exists for the other kind, and the rules for choosing well are almost the opposite of the usual ones.",
      why: [
        "The message is the gift; the contents are the delivery mechanism. What a care package actually communicates is that somebody thought about her on a day when nothing was happening. That is why a modest box sent at the right moment outperforms an expensive one sent late.",
        "A prepared box removes the paralysis. Most people send nothing at all after bad news, not from indifference but because they cannot decide what is appropriate. Something assembled, boxed and shippable in one order is what converts the intention into an actual parcel — and for a Habesha family spread across several countries, that gap between meaning to and doing it is where most of these gifts die.",
        "Small comforts are the correct register. Recovery and grief are boring as much as they are hard: long afternoons, disrupted sleep, nothing to look forward to. Tea, warmth, something pleasant on the skin — these are not trivial choices, they are the right scale for the situation.",
      ],
      whoFor: [
        "A mother recovering from surgery or an illness",
        "A sister or friend after a loss, where you cannot be there in person",
        "Someone in the middle of a long stretch of caring for somebody else",
        "Any moment where you want to send something and cannot think what",
      ],
      whyGift: [
        "Arrives at a moment when almost nothing else does",
        "Ready to send without needing to be assembled",
        "Comfort-scaled rather than celebratory",
      ],
      considerations: [
        "Write the note yourself. A gift company's printed card is the one element of this that should not be outsourced, and a handwritten line included in the parcel is what the recipient will actually keep.",
        "Heavy fragrance is the wrong call for someone in treatment. Nausea is a common side effect of a great deal of medication, and a strongly scented candle or lotion can be genuinely unpleasant rather than soothing — check whether the contents are lightly scented or unscented.",
        "Check the contents list for anything she cannot have. Teas, edible items and skincare all carry restrictions after certain surgeries and during certain treatments; if you are unsure, a box with fewer consumables is the safer pick.",
        "Send it directly to her address, and time it deliberately. The week after everyone else's flowers have arrived and been thrown away is often when it lands hardest.",
      ],
      pros: [
        "Ready to send in one order",
        "Appropriate register for a difficult moment",
        "Presented as a complete package rather than assembled items",
      ],
      cons: [
        "Contents are fixed — some items may not suit",
        "Scented products are risky during treatment",
        "The generic card needs replacing with your own words",
      ],
      alternatives: [
        "thinking-of-you-gift-box",
        "bath-and-body-gift-set",
        "memory-foam-house-slippers",
      ],
    },
  },
  {
    slug: "sunflower-led-night-light",
    title: "Sunflower LED Night Light",
    tag: "Home",
    summary:
      "A small rechargeable flower light with stepless dimming — bought for a bedside rather than a dining table, and for the walk to the kitchen at 3am.",
    bestFor: "Mom · Grandma · A bedside with no socket",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FMJTYNJL?linkCode=ll2&tag=mesmerdesign-20&linkId=936ebb905bb224ce366761f82d743780&language=en_US",
    art: { hue: 44, motif: "rays" },
    updated: "2026-09-07",
    tags: ["night light", "lamp", "rechargeable", "bedside", "home", "mom", "grandma", "dimmable"],
    placements: [
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-for-her", subcategory: "grandma" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "celebration" },
    ],
    guide: {
      heading: "Night Lights: Why Stepless Dimming Is the Specification That Matters",
      standfirst:
        "A bedside light has one difficult job: to be bright enough to find your slippers and dim enough not to wake you up properly. Almost everything else about it is decoration.",
      why: [
        "Stepless dimming means she can find the level that works rather than choosing between three the manufacturer picked. Fixed brightness steps are the reason most bedside lights are either uselessly dim or fully waking, and a continuous dial is the difference between a light that stays on the nightstand and one that gets moved to a shelf.",
        "Warm light at night is the setting people actually want. A cool white LED at 3am is unpleasant and hard to settle after; the reason to look for adjustable colour temperature is so it can sit at the warm end where it belongs, whatever it does during the day.",
        "Rechargeable means it can be carried. A night light that unplugs and comes with you down a dark hallway is doing something a plug-in one cannot — which matters more, not less, for an older recipient in an unfamiliar or badly lit house.",
      ],
      whoFor: [
        "A mother or grandmother whose bedside has no convenient socket",
        "Someone who gets up in the night and would rather not turn on the main light",
        "A guest room, where a soft light is more welcoming than an overhead",
        "Anyone who likes a small pretty thing on a windowsill",
      ],
      whyGift: [
        "Solves a small, nightly, real problem",
        "Portable, so it goes where it is needed",
        "Inexpensive enough to send as a small gesture",
      ],
      considerations: [
        "It is a night light, not a reading lamp. At its brightest it is still ambient light, and buying it as a bedside reading light will disappoint everyone involved.",
        "Check the charging cable type and include one if she does not have that kind. A light that needs a cable nobody in the house owns is a light that gets charged once.",
        "Touch controls are easy in daylight and less obvious in the dark. If the recipient is elderly or has limited dexterity, a physical switch is often the kinder design.",
        "Battery life claims are usually quoted at the lowest brightness. Read the specification for the figure at full output before deciding how often it needs charging.",
      ],
      pros: [
        "Continuous dimming rather than fixed steps",
        "Rechargeable and portable",
        "Warm setting suits night use",
        "Small and inexpensive",
      ],
      cons: [
        "Not bright enough to read by",
        "Touch controls are fiddly in the dark",
        "Needs recharging",
      ],
      alternatives: [
        "sunflower-cordless-table-lamp",
        "crystal-lamp-star-projector",
        "memory-foam-house-slippers",
      ],
    },
  },
  {
    slug: "crochet-rose-keepsake",
    title: "Hand-Crocheted Rose Keepsake",
    tag: "Keepsake",
    summary:
      "A small crocheted rose with a message — the thing you post when you are in another country and a phone call is not quite enough.",
    bestFor: "Mom · Grandma · Long distance",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0GL1ZY5X1?linkCode=ll2&tag=mesmerdesign-20&linkId=d40f2445dd6c59d499466356cc64a682&language=en_US",
    art: { hue: 348, motif: "weave" },
    updated: "2026-09-07",
    tags: ["keepsake", "crochet", "flowers", "long distance", "mom", "grandma", "budget", "handmade"],
    placements: [
      { category: "gifts-for-her", subcategory: "mom" },
      { category: "gifts-for-her", subcategory: "grandma" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Small Gifts Across Long Distances",
      standfirst:
        "When your mother is in Addis or Asmara and you are not, the constraint on a gift is not budget. It is weight, customs, fragility and the fact that flowers do not survive a week in a postal system.",
      why: [
        "Distance changes what a good gift is. Nothing perishable, nothing heavy, nothing that arrives broken, nothing that attracts a customs charge she then has to pay at the door. A small textile object satisfies every one of those constraints at once, which is a shorter list than it sounds.",
        "It is meant to be kept in view rather than used. The point of an object like this is that it sits on a shelf and is visible daily — the gift is the reminder, and a small permanent thing does that job better than something consumed and forgotten.",
        "The message is the product. These are sold with a written sentiment attached, and for children who find it difficult to say those words directly — which, in a great many Habesha families, is most of them — an object that says it on your behalf is doing real work.",
      ],
      whoFor: [
        "A mother or grandmother in another country",
        "Anyone sending something small where cut flowers are impossible",
        "A child or grandchild giving from a limited budget",
        "A small addition to a larger gift, or a gesture between occasions",
      ],
      whyGift: [
        "Posts cheaply and arrives intact",
        "Never wilts, unlike cut flowers",
        "Carries a written sentiment for you",
      ],
      considerations: [
        "Check the dimensions before you imagine it. These photograph filling the frame and are usually much smaller in the hand — find the measurement in the specification and hold it against a ruler.",
        "Confirm what actually ships: the flower alone, a box, a card, the display packaging. The staged photograph often includes props that are not part of the order.",
        "Handmade items vary. What arrives will not match the photograph exactly, which is either the appeal or the disappointment depending entirely on what was expected.",
        "If you are shipping internationally rather than within the US, check delivery times and any duty before ordering — the item is cheap, and a surprise charge on the doorstep undoes the whole gesture.",
      ],
      pros: [
        "Light, cheap to post and hard to damage",
        "Permanent, unlike cut flowers",
        "Carries an explicit message",
      ],
      cons: [
        "Small — check the measurements",
        "Not substantial enough to stand alone at a major occasion",
        "Handmade variation from the photograph",
      ],
      alternatives: [
        "crochet-tulip-keepsake",
        "wifi-digital-photo-frame",
        "get-well-self-care-basket",
      ],
    },
  },
];
