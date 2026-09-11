import type { Product } from "./types";

/**
 * Retailer-linked gift recommendations for a husband or long-term partner.
 *
 * Same rules as the rest of the linked catalogue: the editorial content is
 * category buying advice — how to choose this kind of gift and what goes wrong
 * — not a hands-on review. We hold no unit of any of these items, so nothing
 * here claims durability, finish or fit that cannot be read off the listing,
 * and no prices or ratings appear.
 *
 * `budget` is our own editorial estimate of what the category typically costs.
 */
export const husbandProducts: Product[] = [
  {
    slug: "slim-rfid-leather-wallet",
    title: "Slim Leather Wallet with Money Clip",
    tag: "Accessories",
    summary:
      "A thin bifold that holds around a dozen cards and a clip of notes — the replacement for the wallet he has been carrying since university.",
    bestFor: "Husband · Graduation · A wallet held together by habit",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B09M3Y8QZY?linkCode=ll2&tag=mesmerdesign-20&linkId=306f414f1c354b5bfb9843cbbbdd6244&language=en_US",
    image: "/img/products/slim-rfid-leather-wallet",
    art: { hue: 30, motif: "arch" },
    updated: "2026-09-07",
    tags: ["wallet", "leather", "accessories", "everyday carry", "husband", "graduation", "practical"],
    placements: [
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-for-him", subcategory: "dad" },
      { category: "gifts-by-occasion", subcategory: "graduation" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Replacing a Wallet Nobody Asked You to Replace",
      standfirst:
        "Wallets are among the few objects men keep until they physically disintegrate. That is exactly why they make a good gift, and exactly why you have to think about how it will land.",
      why: [
        "Nobody replaces a working wallet. It holds together, it has the cards in the order he expects, and buying a new one never reaches the top of anyone's list. That inertia is the whole opportunity: a gift is the only realistic way most men end up with a better one.",
        "Slim is a genuine functional improvement, not just a style. A thick bifold in a back pocket is uncomfortable to sit on, wears out trouser seams, and is the reason a lot of people carry their wallet in a jacket they then leave somewhere. Cutting the bulk fixes a small daily irritation he has stopped registering.",
        "A money clip earns its place in a way that is easy to miss. Cash still matters — for a taxi, for church, for sending money home with someone travelling, for the places that are card-only in theory and cash-first in practice. A clip keeps notes accessible without the fold that makes a wallet fat.",
      ],
      whoFor: [
        "A husband whose wallet is visibly finished and who has not noticed",
        "Someone who carries too many cards and complains about sitting on them",
        "A graduate starting a job, where the student wallet no longer fits the setting",
        "Anyone who has switched to carrying a phone and needs far less wallet than before",
      ],
      whyGift: [
        "Replaces something nobody replaces themselves",
        "Fixes a small physical annoyance he has stopped noticing",
        "Modest price for an object used every single day",
      ],
      considerations: [
        "Be honest about the RFID claim, because the marketing is louder than the risk. Contactless cards generate a one-time code for each transaction and cardholders are generally not liable for fraudulent charges, so wireless skimming is a much smaller real-world problem than these listings imply. Buy this because it is slim and well made; treat the shielding as a bonus rather than the reason.",
        "Count his cards before you buy. A wallet rated for eleven cards is comfortable with eight and unpleasant with fourteen — if he carries a bank card, two credit cards, a driving licence, a transit card, a work pass and three loyalty cards, measure that against the stated capacity.",
        "Check whether the leather is genuine, top-grain or bonded. Bonded leather is offcuts glued together and it delaminates within a year or two; the term appears in listings at this price constantly and is easy to skim past.",
        "Some men are genuinely attached to a battered wallet, and a few will not switch no matter how much better the new one is. If his has sentimental history, this is a gift that may sit in a drawer.",
      ],
      pros: [
        "Slim enough to sit on comfortably",
        "Money clip keeps cash usable without bulk",
        "Used every day, indefinitely",
        "Low cost for a daily-carry upgrade",
      ],
      cons: [
        "RFID protection is marketed harder than it is needed",
        "Slim wallets force a cull of cards",
        "Bonded leather at this price is common and short-lived",
        "Some people simply will not give up an old wallet",
      ],
      alternatives: [
        "mens-classic-dress-watch",
        "rotating-cologne-organizer",
        "foldable-wireless-charging-station",
      ],
    },
  },
  {
    slug: "portable-tire-inflator",
    title: "Portable Cordless Tire Inflator",
    tag: "Practical",
    summary:
      "A cordless 150 PSI pump with a digital gauge and auto shut-off — the gift that lives in a boot for years and then matters enormously for ten minutes.",
    bestFor: "Husband · Dad · Anyone who drives an older car",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0CS3B7MD8?linkCode=ll2&tag=mesmerdesign-20&linkId=68f93a8403b337116b8f40695f13b2c1&language=en_US",
    image: "/img/products/portable-tire-inflator",
    art: { hue: 235, motif: "rays" },
    updated: "2026-09-07",
    tags: ["car", "tools", "practical", "inflator", "husband", "dad", "driving", "safety"],
    placements: [
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-for-him", subcategory: "dad" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "The Boot Gift: Useless Fifty-One Weeks a Year",
      standfirst:
        "Most gifts are judged on how often they get used. This one should be judged on what happens the one time it is needed, which is a completely different standard.",
      why: [
        "Underinflated tyres are close to universal and almost nobody checks. Pressure drops steadily on its own, faster in cold weather, and the consequences are worse fuel economy, longer braking distances and tyres that wear out early. A pump in the boot turns a task requiring a trip to a petrol station into a five-minute job on the driveway.",
        "Cordless is the specification that decides whether it gets used. A 12V inflator that runs off the cigarette lighter means starting the car, unwinding a cable and threading it out of a window. A battery unit you simply carry to the wheel removes every step between noticing a soft tyre and fixing it.",
        "It covers more than car tyres. Bicycles, motorbikes, footballs, an air mattress before guests arrive — a household that owns one finds uses for it, which is what stops it becoming a thing in a cupboard.",
      ],
      whoFor: [
        "A husband or father who drives an older car",
        "Anyone with a long commute or who drives family around",
        "A household with bicycles as well as a car",
        "Someone who has had a slow puncture and dealt with it badly",
      ],
      whyGift: [
        "Genuinely a safety item, not just a convenience",
        "Cordless means it actually gets used",
        "Useful across cars, bikes and everything inflatable",
      ],
      considerations: [
        "Gauge accuracy varies at this price, and an inflator that reads a few PSI off will consistently over- or under-inflate. It is worth checking it once against a forecourt gauge or a separate pressure gauge, then remembering the offset.",
        "Read the battery runtime as tyres inflated, not as minutes. Topping up four tyres by a few PSI is a very different job from inflating one flat tyre from nothing, and the headline figures usually describe the easy case.",
        "It will not fix a puncture. An inflator gets a soft tyre to a safe pressure so the car can reach a garage — it is not a repair, and a tyre that goes down again within the hour needs a professional rather than another top-up.",
        "Charge it occasionally even if unused. A cordless tool that has sat in a cold boot for eight months is frequently flat at the exact moment it is wanted, which defeats the entire purpose.",
      ],
      pros: [
        "Cordless, so there is no setup friction",
        "Digital gauge with auto shut-off at a target pressure",
        "Works on bikes, balls and airbeds too",
        "Built-in light matters at the roadside",
      ],
      cons: [
        "Needs periodic charging while in storage",
        "Gauge accuracy at this price is variable",
        "Not a puncture repair",
        "Slow to inflate a fully flat tyre",
      ],
      alternatives: [
        "slim-rfid-leather-wallet",
        "foldable-wireless-charging-station",
        "cordless-hair-clipper-kit",
      ],
    },
  },
  {
    slug: "foldable-wireless-charging-station",
    title: "Foldable 3-in-1 Wireless Charging Station",
    tag: "Tech",
    summary:
      "A folding magnetic stand that charges a phone, watch and earbuds at once — worth it if he owns all three, and pointless if he does not.",
    bestFor: "Husband · Travel · An Apple household",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0DK4VM1SX?linkCode=ll2&tag=mesmerdesign-20&linkId=799a961c182a8b9387fbe6c516526051&language=en_US",
    image: "/img/products/foldable-wireless-charging-station",
    art: { hue: 250, motif: "arch" },
    updated: "2026-09-07",
    tags: ["tech", "charger", "wireless", "travel", "husband", "desk", "magsafe"],
    placements: [
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-for-him", subcategory: "son" },
      { category: "gifts-for-him", subcategory: "teen-boy" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "The 3-in-1 Charger: Excellent, or Entirely Wasted",
      standfirst:
        "This is the rare gift with a binary outcome. Check one thing before ordering and it is genuinely excellent; skip that check and two thirds of it is decoration.",
      why: [
        "It removes cables from a nightstand, which is a real daily irritation. Three devices means three cables, three plugs and a tangle nobody enjoys reaching into in the dark. One stand with three positions replaces all of that with putting things down.",
        "Magnetic alignment is what makes wireless charging reliable rather than annoying. Flat wireless pads fail quietly overnight when a phone slides half an inch off centre; a magnetic mount snaps into the right position and stays there, which is the difference between waking to a charged phone and waking to a dead one.",
        "Folding makes it a travel object as well as a desk one. A charger that collapses flat into a bag means one item covers a hotel nightstand instead of three cables, and travel is where the tangle is most annoying.",
      ],
      whoFor: [
        "A husband who owns an iPhone, an Apple Watch and AirPods",
        "Someone who travels for work and packs a bundle of cables every time",
        "A cluttered nightstand or a shared desk",
        "Anyone who has woken up to a phone that did not charge",
      ],
      whyGift: [
        "Replaces three cables with one object",
        "Magnetic mounting makes charging reliable",
        "Folds flat for travel as well as home use",
      ],
      considerations: [
        "Confirm he owns all three devices, and that the phone is a magnetic-compatible iPhone. This is the check that decides everything: on an Android phone, or an older iPhone without magnets, the stand will not align and the watch position is useless without an Apple Watch. Two thirds of the product would be wasted.",
        "Check whether a power adapter is included. Stations in this category very often ship with a cable and no plug, and a charger that cannot be plugged in on the day it is opened is a poor unwrapping.",
        "Wireless charging is slower than a cable and always will be, because some energy is lost as heat. This is a convenience upgrade for overnight charging, not a speed upgrade for a phone that is flat an hour before you leave.",
        "Third-party watch chargers are not all equal — some charge an Apple Watch at a slower rate than the official puck. Overnight this makes no practical difference; for a quick top-up before an evening out it does.",
      ],
      pros: [
        "One object replaces three cables",
        "Magnetic alignment charges reliably overnight",
        "Folds flat for a bag",
        "Tidies a nightstand permanently",
      ],
      cons: [
        "Only makes sense in an all-Apple household",
        "Power adapter is often not included",
        "Slower than charging by cable",
        "Watch charging may be slower than the official charger",
      ],
      alternatives: [
        "slim-rfid-leather-wallet",
        "portable-tire-inflator",
        "mens-classic-dress-watch",
      ],
    },
  },
  {
    slug: "mens-arch-support-slippers",
    title: "Men's Arch Support House Slippers",
    tag: "Comfort",
    summary:
      "Memory foam clogs with an actual moulded footbed and a rubber sole — structure being the thing almost no slipper has and the thing that makes them wearable all day.",
    bestFor: "Husband · Dad · Working from home",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B09BVKH8MC?linkCode=ll2&tag=mesmerdesign-20&linkId=644710fb786dd5961f384d244030dc21&language=en_US",
    image: "/img/products/mens-arch-support-slippers",
    art: { hue: 20, motif: "weave" },
    updated: "2026-09-07",
    tags: ["slippers", "comfort", "arch support", "house shoes", "husband", "dad", "christmas"],
    placements: [
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "dad" },
      { category: "gifts-for-him", subcategory: "grandpa" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Arch Support: The One Word That Separates Slippers From Foot-Shaped Bags",
      standfirst:
        "Nearly every slipper sold is a soft flat envelope with no structure whatsoever. That is fine for ten minutes and actively uncomfortable for a whole day at home, which is how slippers are now actually worn.",
      why: [
        "Working from home changed what a slipper has to do. A shoe worn for the twenty steps between a bed and a kettle needs nothing; footwear worn for eight or ten hours a day needs the same support any other shoe would. Most slippers were designed for the first job and are still being bought for the second.",
        "A flat sole is what makes feet ache on hard floors. Tile, laminate and concrete give nothing back, and standing on them in an unstructured slipper is close to standing barefoot. A moulded footbed with a raised arch is doing the work a good insole does in a proper shoe.",
        "Men wear one pair of slippers into the ground and then keep going. It is genuinely common for a pair to be a decade old, flattened to cardboard, held together by habit — and equally common for the owner to have no idea they are the reason his feet hurt in the evening.",
      ],
      whoFor: [
        "A husband who works from home and is on his feet indoors all day",
        "Anyone with tiled or laminate floors, which is most flats",
        "Someone who has mentioned aching feet or wears orthotic insoles in his shoes",
        "A father or grandfather whose current pair is visibly finished",
      ],
      whyGift: [
        "Worn more hours a day than any other footwear he owns",
        "Structure, which almost no slipper actually has",
        "He will never buy replacements himself",
      ],
      considerations: [
        "Order his normal shoe size and check the seller's chart rather than assuming. Slipper sizing is frequently sold in single sizes or in pairs of sizes, and a clog-style slipper that is too large slides off at the heel while one too small defeats the footbed entirely.",
        "A moulded footbed feels wrong for the first few days if he has only ever worn flat slippers. That is normal and it settles, but it is worth saying so, because the usual reaction to unfamiliar arch support is to assume the shoe is faulty.",
        "Check the sole is genuinely rubber and rated for outdoor steps if he takes the bins out. A soft indoor sole wears through quickly on concrete and tracks grit back inside.",
        "Wool-like and plush uppers are warm by design. In a heated flat, or for someone whose feet run hot, a lined winter slipper can be too much for year-round wear.",
      ],
      pros: [
        "Real arch support rather than a flat bag",
        "Rubber sole grips on tile and laminate",
        "Suited to being worn all day, not just briefly",
        "Inexpensive for something worn constantly",
      ],
      cons: [
        "Moulded footbeds take a few days to get used to",
        "Warm lining is too much in a heated home",
        "Clog styles slide at the heel if sized too large",
      ],
      alternatives: [
        "memory-foam-house-slippers",
        "mens-spa-gift-set",
        "corded-heated-neck-massager",
      ],
    },
  },
  {
    slug: "rotating-cologne-organizer",
    title: "Rotating Wooden Cologne Organizer",
    tag: "Home",
    summary:
      "A wooden carousel for a fragrance collection — the version that solves the problem a static shelf creates, which is that the back row is never chosen.",
    bestFor: "Husband · Anniversary · A collection worth displaying",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0F18ZM7JL?linkCode=ll2&tag=mesmerdesign-20&linkId=10e6703f83160e0cb5cf499329d8b0bd&language=en_US",
    image: "/img/products/rotating-cologne-organizer",
    art: { hue: 35, motif: "vessel" },
    updated: "2026-09-07",
    tags: ["organizer", "cologne", "wooden", "rotating", "display", "husband", "anniversary"],
    placements: [
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-for-him", subcategory: "dad" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
    ],
    guide: {
      heading: "Why a Carousel Beats a Shelf for a Collection You Actually Choose From",
      standfirst:
        "Any stand gets the bottles off the counter. A rotating one solves a subtler problem: on a fixed shelf, whatever ends up at the back stops existing.",
      why: [
        "Rotation gives every bottle a front row. On a tiered shelf the bottles at the back are hidden behind the ones in front, and what is hidden does not get picked — a collection quietly shrinks to whatever is easiest to reach. A carousel means one turn brings the whole collection to the front, which is the difference between owning eight fragrances and wearing three.",
        "Wood is the right material for something that turns. A rotating base takes load and friction that acrylic handles badly over time, and a solid wooden carousel loaded with heavy glass bottles stays stable in a way a light plastic one does not.",
        "It reframes the bottles as a collection rather than clutter. Displayed deliberately on a dresser, a fragrance collection reads as an interest he has; lined up on a bathroom windowsill it reads as things he has not put away. Same objects, different signal.",
      ],
      whoFor: [
        "A husband with more bottles than he can see at once",
        "Someone who owns several and always reaches for the same two",
        "A dresser or wardrobe top where the collection can be displayed properly",
        "An anniversary or birthday where you want something specific to an interest of his",
      ],
      whyGift: [
        "Makes the whole collection visible and usable",
        "Wooden and weighted rather than light plastic",
        "Takes no view on his taste in fragrance",
      ],
      considerations: [
        "Check the height clearance between tiers against his tallest bottle. Fragrance bottles vary enormously in height, and a carousel sized for squat 50ml bottles will not take a tall 200ml one — which is usually the expensive one he most wants displayed.",
        "Weight and stability matter more on something that spins. Loaded unevenly, a light carousel can tip when turned; look for a weighted or wide base if the collection includes heavy glass.",
        "Wood and spilled alcohol do not mix well. Fragrance is mostly alcohol and it will mark an untreated or lightly finished wooden surface, so a sealed finish is worth confirming.",
        "Count the capacity against what he owns now and what he is likely to own in two years. Someone actively collecting outgrows a small carousel quickly, and this is not a thing anyone wants two of.",
      ],
      pros: [
        "Every bottle reachable with one turn",
        "Wooden base is stable under heavy glass",
        "Displays a collection rather than storing it",
      ],
      cons: [
        "Tier height limits which bottles fit",
        "Can tip if loaded unevenly",
        "Wood marks if fragrance is spilled on it",
      ],
      alternatives: ["cologne-organizer-stand", "mens-spa-gift-set", "slim-rfid-leather-wallet"],
    },
  },
  {
    slug: "corded-heated-neck-massager",
    title: "Corded Heated Neck Massager",
    tag: "Wellness",
    summary:
      "A neck-focused kneading massager with heat and an automatic shut-off — the smaller, simpler counterpart to a full-body unit.",
    bestFor: "Husband · Desk work · Evening use",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B07WJSY2G8?linkCode=ll2&tag=mesmerdesign-20&linkId=855dbe1bfee57c731a46dda7abaa5ec3&language=en_US",
    image: "/img/products/corded-heated-neck-massager",
    art: { hue: 185, motif: "vessel" },
    updated: "2026-09-07",
    tags: ["massager", "neck", "wellness", "heated", "desk", "husband", "office"],
    placements: [
      { category: "gifts-for-him", subcategory: "husband-partner" },
      { category: "gifts-for-him", subcategory: "boyfriend" },
      { category: "gifts-for-him", subcategory: "brother" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Auto Shut-Off: The Feature That Matters Most and Is Advertised Least",
      standfirst:
        "Every massager in this category kneads and heats. The specification worth checking is the one that decides what happens when the person using it falls asleep.",
      why: [
        "People fall asleep using these, and that is the whole argument for a timer. A heated device left running against the neck of someone who has dozed off on the sofa is the failure mode this category actually has, and an automatic cut-off after a fixed period removes it entirely. It is rarely the headline feature and it is the one worth insisting on.",
        "A neck-focused unit is simpler to live with than a full-body one. Fewer nodes, less bulk, lighter to hold in place — it does one thing, which means it comes out of the drawer more readily than a larger machine that feels like a project to set up.",
        "Corded is a real trade-off rather than a defect. Mains power means consistent intensity that does not fade as a battery drains, and no charging to remember. It also means it lives wherever there is a socket, which for most people is the sofa or a desk — and that is where it would be used anyway.",
      ],
      whoFor: [
        "A husband at a desk or a wheel all day who mentions his neck",
        "Someone who would use it in the evening in one habitual spot",
        "A household where more than one person will borrow it",
        "Anyone who finds a large full-body unit more machine than they want",
      ],
      whyGift: [
        "Targets the most commonly complained-about area",
        "Automatic cut-off makes it safe to doze off with",
        "Small enough to be used casually rather than deliberately",
      ],
      considerations: [
        "It is corded, so it belongs to a socket. Fine on a sofa or at a desk; not usable in a car or anywhere without mains power, whatever the marketing photographs suggest about travel.",
        "Start on the lowest setting, over clothing. Deep kneading nodes are stronger than first-time users expect, and an unpleasant first use is how someone decides they dislike the entire category.",
        "As with anything sold against pain, treat the therapeutic language as marketing. An existing neck or spinal condition, a recent injury or persistent pain is a question for a doctor, not for a product listing.",
        "The nodes are meant for the muscle either side of the spine, not the spine itself. Positioned directly on the vertebrae it is uncomfortable and does nothing useful.",
      ],
      pros: [
        "Automatic shut-off if he falls asleep",
        "Consistent intensity from mains power",
        "Smaller and less involved than a full-body unit",
        "Heat makes it something people return to",
      ],
      cons: [
        "Tied to a socket — not portable",
        "Neck and shoulders only",
        "Default intensity is strong for a beginner",
        "Listings overclaim on pain relief",
      ],
      alternatives: [
        "neck-and-shoulder-massager-heated",
        "shiatsu-foot-massager-heated",
        "mens-arch-support-slippers",
      ],
    },
  },
];
