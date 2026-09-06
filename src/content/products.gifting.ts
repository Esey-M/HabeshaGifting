import type { Product } from "./types";

/**
 * Retailer-linked gift recommendations, first batch.
 *
 * These carry live Amazon Associates URLs. As everywhere else on the site, the
 * editorial content is category buying advice — how to choose this kind of gift
 * and what goes wrong — not a hands-on product review. We hold no unit of any
 * of these items, so nothing here claims durability, finish or fit that we
 * cannot observe from the listing itself, and no prices or ratings appear.
 *
 * `budget` is our own editorial estimate of what the category typically costs.
 */
export const giftingProducts: Product[] = [
  {
    slug: "eritrean-ethiopian-silver-necklace-earring-set",
    title: "Habesha Silver Necklace & Earring Set",
    tag: "Jewelry",
    summary:
      "A matched necklace and earring set in traditional Ethiopian and Eritrean styling — the safest way to give cultural jewellery without guessing at one piece.",
    bestFor: "Girlfriend · Anniversary · A first cultural gift",
    budget: "under-100",
    affiliateUrl:
      "https://www.amazon.com/dp/B0DHGFPTGK?linkCode=ll2&tag=mesmerdesign-20&linkId=80b9ef0532b385df54fbd8206724aaf4&language=en_US",
    art: { hue: 45, motif: "cross" },
    updated: "2026-09-06",
    tags: ["jewelry", "necklace", "earrings", "silver", "eritrean", "ethiopian", "set", "girlfriend"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "ethiopian-eritrean-gifts", subcategory: "jewelry" },
      { category: "ethiopian-eritrean-gifts", subcategory: "eritrean-inspired" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
    ],
    guide: {
      heading: "Matched Jewellery Sets: The Low-Risk Way to Give Cultural Jewellery",
      standfirst:
        "A necklace on its own has to be exactly right. A matched set gives her two ways to wear your gift, which quietly lowers the stakes on both.",
      why: [
        "A set solves the single-piece problem. Buy one necklace and it either suits her neckline, her other jewellery and her daily style, or it sits in a drawer. A set gives her the option of wearing the earrings alone on days the necklace is too much — and earrings are far more forgiving of personal taste than anything worn at the throat.",
        "Traditional Habesha silverwork reads as jewellery first and heritage second, which is exactly the right order for a gift to a girlfriend. It is culturally specific without being a statement she has to explain at work.",
        "Sets photograph and present better than a single piece. Opening a box with two matched items feels considered in a way a single small pendant does not, without costing proportionally more.",
      ],
      whoFor: [
        "A girlfriend or partner where you want something cultural but not heavy",
        "Anyone who already wears silver rather than gold day to day",
        "An anniversary or milestone where a set suits the occasion better than one piece",
        "Someone building a cultural jewellery collection from nothing",
      ],
      whyGift: [
        "Two pieces means two chances to hit her actual taste",
        "Presents generously without a large jump in price",
        "Culturally specific without demanding she wear a statement",
      ],
      considerations: [
        "Check the metal description carefully. Sterling silver, silver-plated and silver-tone are three very different things at three very different lifespans, and listings use the words loosely.",
        "Confirm the earring fitting type. Posts, hooks and clips are not interchangeable, and pierced-only fittings are useless to someone without pierced ears.",
        "Look at the chain length in the specification rather than the photograph. Necklaces photograph at flattering lengths that bear no relation to the number in the listing.",
        "If she has a nickel sensitivity, verify the alloy is stated as nickel-free — plated jewellery is a common cause of reactions.",
      ],
      pros: [
        "Two coordinated pieces rather than one",
        "Culturally specific styling",
        "Earrings are more taste-forgiving than a necklace",
        "Presents well as a single boxed gift",
      ],
      cons: [
        "Plated metal wears through with daily use",
        "Earring fittings may not suit every recipient",
        "Matched sets can look dated worn together — she may only ever wear them apart",
      ],
      alternatives: ["amharic-name-necklace", "ethiopian-cross-pendant", "gold-plated-rosary-necklace"],
    },
  },
  {
    slug: "initial-letter-pendant-necklace",
    title: "Initial Letter Pendant Necklace",
    tag: "Personalized Jewelry",
    summary:
      "A fine chain with a single initial pendant — the least risky personalised gift there is, because there is no spelling to get wrong.",
    bestFor: "Girlfriend · Under $25 · Early relationship",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.nl/dp/B0CHVRPT6B?linkCode=ll2&tag=mesmerdesign-20&linkId=b0acf720e2387bc73ce8997499cd9341",
    art: { hue: 330, motif: "cross" },
    updated: "2026-09-06",
    tags: ["jewelry", "necklace", "initial", "personalized", "budget", "girlfriend", "valentine"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "personalized-gifts", subcategory: "personalized-jewelry" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Initial Necklaces: Personalised Without the Spelling Risk",
      standfirst:
        "Every other personalised gift on this site comes with a warning about getting the spelling checked. A single letter is the one that cannot go wrong.",
      why: [
        "One character removes the entire failure mode. Name jewellery in Ge'ez script is the most requested personalised gift we cover and the one most often ruined by a transliteration error that cannot be refunded. An initial sidesteps that completely — there is nothing to mistranslate.",
        "It reads as personal without being weighty. For an early relationship, a full name engraved on jewellery can land as more serious than intended; an initial is affectionate and deniable in a way that suits the first year.",
        "Fine initial pendants layer. If she already wears a chain, this sits with it rather than competing, which makes it far more likely to be worn than a statement piece.",
      ],
      whoFor: [
        "A new or early relationship where a grand gesture would be too much",
        "Anyone whose name is regularly misspelled and who would rather avoid it entirely",
        "Someone who already layers fine chains",
        "A first jewellery gift where you do not yet know her taste",
      ],
      whyGift: [
        "Personalised with no spelling or translation risk",
        "Modest price, personal effect",
        "Layers with jewellery she already owns",
      ],
      considerations: [
        "Decide whose initial it is before ordering. Her own is safe; yours is a much bigger statement than the price of the gift suggests.",
        "Check the metal. At this price it is almost certainly plated, which means visible wear within a year or two of daily use — fine for a gift, worth knowing.",
        "Fine chains at the low end snap. Look for a stated chain thickness and reviews mentioning durability rather than only appearance.",
        "Confirm the clasp type. A very small spring-ring clasp is genuinely difficult to fasten one-handed.",
      ],
      pros: [
        "No spelling or translation risk",
        "Inexpensive",
        "Layers with existing jewellery",
        "Reads affectionate rather than heavy",
      ],
      cons: [
        "Plating wears at this price point",
        "Fine chains are fragile",
        "Less distinctive than script or cultural pieces",
      ],
      alternatives: ["amharic-name-necklace", "personalized-steel-pendant-necklace", "tigrinya-script-bracelet"],
    },
  },
  {
    slug: "personalized-steel-pendant-necklace",
    title: "Personalized Stainless Steel Pendant Necklace",
    tag: "Personalized Jewelry",
    summary:
      "A custom pendant in stainless steel rather than plated brass — the material choice that decides whether it survives daily wear.",
    bestFor: "Girlfriend · Everyday wear · Sensitive skin",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.nl/dp/B0CQ6WS1HT?linkCode=ll2&tag=mesmerdesign-20&linkId=9d0094663b5eee6c015a18a7697ff9dd",
    art: { hue: 210, motif: "cross" },
    updated: "2026-09-06",
    tags: ["jewelry", "necklace", "personalized", "stainless steel", "engraved", "girlfriend", "budget"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "personalized-gifts", subcategory: "personalized-jewelry" },
      { category: "personalized-gifts", subcategory: "engraved-gifts" },
    ],
    guide: {
      heading: "Why Stainless Steel Is the Right Metal for Everyday Personalised Jewellery",
      standfirst:
        "Most inexpensive personalised jewellery is plated, and plating is why so much of it ends up in a drawer within two years. Steel is the unglamorous fix.",
      why: [
        "Plating is a coating; steel is the material all the way through. A plated pendant worn daily wears at the edges and the back first, and once the base metal shows there is no repairing it. Stainless steel simply does not have that failure mode, which is why it outlasts pieces that cost several times more.",
        "It suits people who react to jewellery. Nickel in plated alloys is the usual culprit behind green skin and irritation; surgical-grade stainless steel is a common choice precisely because it avoids that for most wearers.",
        "It tolerates real life. Showers, swimming, hand cream, sweat — the things that destroy plated pieces are largely irrelevant to steel, so it is the right choice for something she will genuinely wear every day rather than save.",
      ],
      whoFor: [
        "Anyone who wears one necklace daily rather than rotating jewellery",
        "Someone who has reacted to cheap jewellery before",
        "Active recipients who will not take it off to shower or exercise",
        "A gift meant to last, at a modest budget",
      ],
      whyGift: [
        "Personalised and genuinely durable, which is a rare combination at this price",
        "Low reaction risk for sensitive skin",
        "No special care required",
      ],
      considerations: [
        "Verify the engraving method. Laser-etched marks on steel last; printed or shallow-stamped marks on a coated surface do not.",
        "Confirm the spelling in writing and ask for a proof image before production. Personalised pieces are almost always non-returnable, whatever the metal.",
        "Steel is heavier than plated brass at the same size. If she prefers barely-there jewellery, choose a smaller pendant.",
        "Steel cannot be resized or repaired the way silver can. A broken steel chain is replaced, not mended.",
      ],
      pros: [
        "Does not wear through like plating",
        "Low irritation risk",
        "Survives daily wear, water and exercise",
        "Inexpensive for what it is",
      ],
      cons: [
        "Heavier than plated pieces",
        "Cannot be resized or repaired",
        "Personalised items are non-returnable if the spelling is wrong",
      ],
      alternatives: ["initial-letter-pendant-necklace", "amharic-name-necklace", "tigrinya-script-bracelet"],
    },
  },
  {
    slug: "bath-and-body-gift-set",
    title: "Bath & Body Gift Set",
    tag: "Gift Sets",
    summary:
      "A boxed set of bath products — the reliable option when you want to give something generous without needing to know her taste precisely.",
    bestFor: "Girlfriend · Birthday · When you are unsure",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.nl/dp/B0CST1F23L?linkCode=ll2&tag=mesmerdesign-20&linkId=0c22cbb51ee5a52865ea2b155dd34a3e",
    art: { hue: 300, motif: "basket" },
    updated: "2026-09-06",
    tags: ["gift set", "bath", "body", "pamper", "girlfriend", "birthday", "boxed"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "celebration" },
    ],
    guide: {
      heading: "The Bath Set: An Honest Look at the Default Gift",
      standfirst:
        "It is the gift people reach for when they are stuck, which is exactly why it is worth being clear-eyed about when it works and when it does not.",
      why: [
        "It is consumable, and consumables cannot be duplicates. Unlike jewellery or décor, there is no risk she already owns it and no obligation to display it forever. It gets used and it goes away, which is a genuine feature.",
        "A boxed set presents well. Presentation is doing real work with this gift — the same products bought loose would read as an afterthought, while the box makes it a considered object to open.",
        "It suits the early stage of a relationship, where something scented and pleasant is welcome but anything more personal would be presumptuous.",
      ],
      whoFor: [
        "A new relationship where you do not yet know her taste in much",
        "A birthday where you want something generous but low-risk",
        "Someone who genuinely enjoys long baths — this is worth checking",
        "Pairing with a smaller, more personal gift to round out a present",
      ],
      whyGift: [
        "Consumable, so never a duplicate",
        "Presents generously for the price",
        "Very low risk of being actively wrong",
      ],
      considerations: [
        "Fragrance is personal and this is a scented gift. If she is sensitive to strong scents, or wears a signature perfume she does not want competing with, this is the wrong choice.",
        "Check for a bath. A bath set given to someone with only a shower is a well-meant gift with nowhere to go.",
        "Look at the ingredient list if she has sensitive skin or eczema. Heavily fragranced products are a common trigger.",
        "Be honest that this is the safe option. If you have been together a while, a safe gift can read as a lack of thought — consider pairing it with something specific to her.",
      ],
      pros: [
        "Consumable and never a duplicate",
        "Looks generous for the price",
        "Almost impossible to get badly wrong",
      ],
      cons: [
        "Can read as low-effort in an established relationship",
        "Fragrance may not suit her",
        "Useless to someone without a bath",
      ],
      alternatives: ["thinking-of-you-gift-box", "pashmina-shawl-wrap", "jewelry-organizer-box"],
    },
  },
  {
    slug: "gold-plated-rosary-necklace",
    title: "Gold-Plated Rosary Necklace",
    tag: "Jewelry",
    summary:
      "A rosary-style chain necklace with a devotional pendant — a faith gift rather than a fashion one, and worth treating as such.",
    bestFor: "Girlfriend · Orthodox households · Christmas",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0CCBRMZJ4?linkCode=ll2&tag=mesmerdesign-20&linkId=885fe756830f281687b4ea8206c34b50&language=en_US",
    art: { hue: 40, motif: "cross" },
    updated: "2026-09-06",
    tags: ["jewelry", "rosary", "necklace", "faith", "orthodox", "gold", "christmas"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "ethiopian-eritrean-gifts", subcategory: "jewelry" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Devotional Jewellery as a Gift: Get the Intent Right First",
      standfirst:
        "A rosary necklace is a beautiful object and a religious one. Which of those two things you are giving matters more than anything else in this guide.",
      why: [
        "For a practising recipient it carries weight no ordinary necklace does. In Orthodox households devotional jewellery is worn daily and often kept for decades, so it sits closer to an heirloom than an accessory.",
        "The rosary chain format is visually distinctive — beaded links rather than a plain chain — which means it reads as intentional even to someone who does not recognise the devotional element.",
        "Gold-tone devotional pieces suit holiday gifting particularly well. Genna and Fasika are the natural moments for this gift, and it will be worn to church rather than put away.",
      ],
      whoFor: [
        "A girlfriend or partner from a practising Orthodox or Catholic family",
        "Someone who already wears a cross or devotional piece daily",
        "Christmas, Genna or Fasika gifting",
        "A family where faith is an active part of daily life",
      ],
      whyGift: [
        "Meaningful rather than decorative",
        "Frequently kept and worn for years",
        "Distinctive design even to a secular eye",
      ],
      considerations: [
        "Do not give devotional jewellery to someone who is not religious. It is not a neutral fashion piece, and it can land as a statement about her beliefs that you did not intend.",
        "Denomination matters. A Catholic rosary and an Ethiopian Orthodox cross are not interchangeable, and giving the wrong tradition is noticeable to anyone who cares about it.",
        "Gold plating over a base metal wears, particularly on a beaded chain where links rub constantly. Treat this as a piece that will need replacing, not an heirloom, unless the listing states solid metal.",
        "A rosary is a prayer object as well as a necklace. Some recipients will consider wearing one as jewellery inappropriate — worth knowing which camp she is in.",
      ],
      pros: [
        "Genuine meaning for a practising recipient",
        "Visually distinctive beaded chain",
        "Natural fit for holiday gifting",
      ],
      cons: [
        "Entirely wrong for a non-religious recipient",
        "Plating wears quickly on a beaded chain",
        "Denominational mismatch is easy to get wrong",
      ],
      alternatives: ["ethiopian-cross-pendant", "eritrean-ethiopian-silver-necklace-earring-set", "amharic-name-necklace"],
    },
  },
  {
    slug: "thinking-of-you-gift-box",
    title: "Thinking of You Gift Box",
    tag: "Gift Sets",
    summary:
      "A curated care package of small comforts — built for the moments when the message matters more than the objects.",
    bestFor: "Girlfriend · Long distance · A hard week",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FPM4YWDM?linkCode=ll2&tag=mesmerdesign-20&linkId=f280010098c9c3822f94f971a8ae446f&language=en_US",
    art: { hue: 350, motif: "basket" },
    updated: "2026-09-06",
    tags: ["gift set", "care package", "girlfriend", "birthday", "long distance", "comfort"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "celebration" },
    ],
    guide: {
      heading: "Care Packages: When the Timing Is the Gift",
      standfirst:
        "This is one of the few gifts where the occasion is not a birthday. Sent in a bad week, an ordinary box of small comforts does more than an expensive present would.",
      why: [
        "It works precisely because it is unprompted. A gift on a birthday is expected; a box arriving during exam season, after a hard shift, or in a stretch of long distance carries a message that no scheduled present can.",
        "Multiple small items beat one large one for this purpose. Unpacking several things extends the moment, and it raises the odds that at least one item is genuinely welcome.",
        "For couples separated by distance — which describes a great many Habesha relationships across continents — a physical box is the one thing a phone cannot do. That is the entire value proposition here.",
      ],
      whoFor: [
        "Long-distance relationships, where physical presence is the missing thing",
        "Someone going through exams, a hard job stretch, or illness",
        "A girlfriend who has said she is fine and is clearly not",
        "Any moment you want to mark that is not on a calendar",
      ],
      whyGift: [
        "The timing does more work than the contents",
        "Several small items extend the moment of opening",
        "Physical delivery matters when you cannot be there",
      ],
      considerations: [
        "Check what is actually inside before ordering. Curated boxes vary enormously in whether the contents are genuinely nice or simply numerous.",
        "Look for food or scented items if she has allergies or sensitivities — these boxes commonly include both, and contents lists are often vague.",
        "Add a written note. A pre-packed box without a message from you is a parcel; with one, it is a gift. This is the single highest-value thing you can do here.",
        "Confirm delivery timing if it is meant to land on a specific day. The timing is the gift, and a box that arrives a week late has lost most of its point.",
      ],
      pros: [
        "Works on any occasion, or none",
        "Especially strong for long distance",
        "Several items raise the odds of a hit",
      ],
      cons: [
        "Contents quality varies widely between sellers",
        "Impersonal without a handwritten note",
        "Possible allergens are often poorly listed",
      ],
      alternatives: ["bath-and-body-gift-set", "pashmina-shawl-wrap", "crystal-lamp-star-projector"],
    },
  },
  {
    slug: "pashmina-shawl-wrap",
    title: "Pashmina Shawl Wrap",
    tag: "Accessories",
    summary:
      "A large soft wrap that works over an evening dress, in a cold church, or on a plane — and needs no sizing.",
    bestFor: "Girlfriend · Holidays · Anyone who is always cold",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0C6TDJC1P?linkCode=ll2&tag=mesmerdesign-20&linkId=33f6aca8231a6d81b9c6ea4ba04bbeea&language=en_US",
    art: { hue: 340, motif: "weave" },
    updated: "2026-09-06",
    tags: ["scarf", "shawl", "pashmina", "wrap", "accessories", "girlfriend", "winter"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "ethiopian-eritrean-gifts", subcategory: "clothing-accessories" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "The Shawl: Clothing You Can Give Without Knowing Her Size",
      standfirst:
        "Almost every clothing gift fails on sizing. A wrap is the exception, which is why it is the most reliable garment on this site after the netela.",
      why: [
        "There is no size to get wrong. A wrap is draped rather than fitted, which removes the single biggest reason clothing gifts get returned — and the reason we steer people away from giving dresses.",
        "It solves a real recurring problem. Cold churches, over-air-conditioned offices, long flights and evening events all call for something to put over the shoulders, and most people own one that is tired rather than one they like.",
        "It works alongside traditional dress rather than competing with it. A plain wrap in a good colour sits comfortably over both a habesha kemis and an ordinary work outfit, which is more than most accessories manage.",
      ],
      whoFor: [
        "Anyone who is reliably cold in restaurants, offices and churches",
        "A girlfriend who travels and needs something for flights",
        "Someone attending weddings and events who needs evening cover",
        "Winter and holiday gifting",
      ],
      whyGift: [
        "No sizing risk whatsoever",
        "Genuinely used rather than stored",
        "Works with both traditional and everyday clothing",
      ],
      considerations: [
        "Read the fibre content, not the product name. 'Pashmina' is used loosely as a style description; many wraps sold under that name are viscose or acrylic, which feel and wear differently from wool or cashmere.",
        "Check the dimensions. A wrap that is too narrow will not stay on the shoulders, which defeats the purpose entirely.",
        "Colour is the main taste risk here. A neutral — cream, charcoal, camel — is far safer than a strong shade if you are unsure.",
        "Confirm the care instructions. A dry-clean-only wrap is a burden on someone who will not dry-clean anything.",
      ],
      pros: [
        "One size suits everyone",
        "Used constantly rather than saved",
        "Pairs with traditional and modern dress",
        "Easy and cheap to post",
      ],
      cons: [
        "Fibre content is often misrepresented by the product name",
        "Colour choice carries real taste risk",
        "Cheaper synthetics pill quickly",
      ],
      alternatives: ["netela-traditional-scarf", "habesha-textile-wall-hanging", "bath-and-body-gift-set"],
    },
  },
  {
    slug: "jewelry-organizer-box",
    title: "Jewelry Organizer Box",
    tag: "Home",
    summary:
      "A compartmented case for necklaces, rings and earrings — the gift for someone whose jewellery lives in a tangle on a dresser.",
    bestFor: "Girlfriend · Anyone with jewellery and nowhere to put it",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0FQMK936Q?linkCode=ll2&tag=mesmerdesign-20&linkId=efd85824662e8cbf764c92fbce40ef9d&language=en_US",
    art: { hue: 25, motif: "arch" },
    updated: "2026-09-06",
    tags: ["jewelry box", "organizer", "storage", "home", "girlfriend", "practical"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "housewarming" },
    ],
    guide: {
      heading: "The Jewellery Box: A Practical Gift That Gets Used Every Day",
      standfirst:
        "It is not romantic, and that is rather the point. This is the gift that solves a small daily irritation she has stopped noticing.",
      why: [
        "Tangled chains are a genuine daily annoyance. Necklaces stored loose knot together, earrings lose their partners, and rings end up in three different dishes. A compartmented box fixes all of that at once, every morning, indefinitely.",
        "It pairs with jewellery you have already given. If you have bought her a necklace before, this is the natural follow-up — it says you noticed she had nowhere good to keep it, which is a more specific observation than buying another pendant.",
        "Unlike most practical gifts, it sits on a dresser in plain view. That makes it a visible daily reminder in a way a useful kitchen object never is.",
      ],
      whoFor: [
        "Anyone whose jewellery currently lives in a dish, a drawer or a tangle",
        "A girlfriend you have previously given jewellery to",
        "Someone who has just moved and is setting up a bedroom",
        "Frequent travellers, if the case is compact enough to pack",
      ],
      whyGift: [
        "Solves a real, repeated daily irritation",
        "Used every morning, in plain sight",
        "Complements jewellery she already owns",
      ],
      considerations: [
        "Match the layout to what she actually owns. A box built for rings is little use to someone with fifteen necklaces and two rings.",
        "Check the necklace storage specifically. Hooks or a hanging section are what prevent tangling; a box of open compartments does not solve the problem you are buying it to solve.",
        "Look at the lining. Unlined or rough interiors scratch soft metals and stones over time.",
        "Consider whether she travels. A large dresser box and a compact travel case are different products, and the listing photographs rarely make the scale obvious.",
      ],
      pros: [
        "Fixes a genuine everyday annoyance",
        "Visible and used daily",
        "Natural follow-up to a jewellery gift",
      ],
      cons: [
        "Unromantic on its own — best paired with something else",
        "Layout may not match her collection",
        "Scale is hard to judge from listing photographs",
      ],
      alternatives: ["engraved-wooden-keepsake-box", "bath-and-body-gift-set", "initial-letter-pendant-necklace"],
    },
  },
  {
    slug: "crystal-lamp-star-projector",
    title: "Crystal Lamp & Star Projector",
    tag: "Home",
    summary:
      "A small bedside lamp that throws patterned light across a room — an atmosphere gift rather than a functional one.",
    bestFor: "Girlfriend · Birthday · A bedroom that needs softening",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0DG92NWYG?linkCode=ll2&tag=mesmerdesign-20&linkId=371cf3243bee0c6cd50bf40e3a3ed9b9&language=en_US",
    art: { hue: 280, motif: "rays" },
    updated: "2026-09-06",
    tags: ["lamp", "projector", "lighting", "home", "girlfriend", "bedroom", "atmosphere"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "housewarming" },
    ],
    guide: {
      heading: "Atmosphere Lighting: A Gift for the Room, Not the Person",
      standfirst:
        "This is a mood gift. It succeeds or fails on whether she is the sort of person who cares how a room feels at eleven at night.",
      why: [
        "Rented flats have bad lighting, universally. A single harsh ceiling bulb is the default in most rentals, and a small warm light source changes how a room feels far more cheaply than furniture does.",
        "It is a gift with an evening use, which is unusual. Most objects are used in daylight and forgotten; this one is only ever noticed at the end of the day, which gives it a distinct emotional register.",
        "For a girlfriend, it lands in the space between practical and romantic — softer than a kitchen gadget, less loaded than jewellery.",
      ],
      whoFor: [
        "Someone in a rented flat with poor overhead lighting",
        "A girlfriend who has decorated her space deliberately",
        "Anyone who reads or unwinds in bed",
        "A housewarming for a first apartment",
      ],
      whyGift: [
        "Changes how a room feels for very little money",
        "Used in the evening, when gifts are rarely noticed",
        "Sits between practical and romantic",
      ],
      considerations: [
        "Check the plug type and voltage against where she lives. This is the most common way an electrical gift fails, and it is entirely avoidable — it matters especially if you are shipping between the US and Europe.",
        "Projected-light effects are divisive. Some people find them lovely; others find them distracting and never switch them on. If she is the second sort, buy a plain lamp instead.",
        "Look for a brightness or warmth control. A single fixed setting that is too bright makes the whole thing useless for its intended purpose.",
        "Confirm whether it is mains, USB or battery powered — battery models need constant replacing and tend to get abandoned.",
      ],
      pros: [
        "Meaningfully improves a badly lit room",
        "Inexpensive for its visual impact",
        "Used in the evening rather than forgotten",
      ],
      cons: [
        "Projection effects are a matter of taste",
        "Plug and voltage mismatches across regions",
        "Fixed-brightness models are often too bright",
      ],
      alternatives: ["thinking-of-you-gift-box", "jewelry-organizer-box", "romantic-keepsake-gift"],
    },
  },
  {
    slug: "romantic-keepsake-gift",
    title: "Romantic Keepsake Gift",
    tag: "Keepsakes",
    summary:
      "A small boxed keepsake made for anniversaries and Valentine's — the kind of gift that is entirely about the gesture.",
    bestFor: "Girlfriend · Anniversary · Valentine's Day",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0BN7NZ6NB?linkCode=ll2&tag=mesmerdesign-20&linkId=ab09363fac033ac39125d36b58803cbc&language=en_US",
    art: { hue: 345, motif: "cross" },
    updated: "2026-09-06",
    tags: ["keepsake", "romantic", "anniversary", "valentine", "girlfriend", "boxed"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
      { category: "gifts-by-occasion", subcategory: "celebration" },
    ],
    guide: {
      heading: "Keepsake Gifts: What They Are Actually For",
      standfirst:
        "A keepsake has no function. Judging it as an object misses the point — it is a way of saying something out loud that some people find easier to hand over than to speak.",
      why: [
        "The absence of a use is the feature. A practical gift says you noticed a problem; a keepsake says you were thinking about her for no reason at all, which is a different and sometimes harder message to send.",
        "It suits occasions that are explicitly about the relationship. On an anniversary or Valentine's Day, a useful object can feel oddly beside the point, while something purely sentimental is exactly on theme.",
        "Small boxed keepsakes travel and post well, which matters for couples separated by distance more often than not.",
      ],
      whoFor: [
        "An anniversary or Valentine's Day, where sentiment is the occasion",
        "Someone who keeps cards, tickets and photographs",
        "A partner who finds it easier to receive feeling than to discuss it",
        "Long-distance couples needing something physical to send",
      ],
      whyGift: [
        "Says something a practical gift cannot",
        "Suits relationship-focused occasions specifically",
        "Small, postable and easy to keep",
      ],
      considerations: [
        "Know your recipient. Some people treasure sentimental objects; others quietly regard them as clutter, and this gift lands very differently between those two.",
        "Sentimental gifts age with the relationship. Consider whether you would both want it on a shelf in five years, because that is how long these things sit around.",
        "If it carries printed wording, read it carefully. Overwrought phrasing is common and hard to live with on display.",
        "This works best alongside something else, not alone. A keepsake plus a small practical gift covers both registers.",
      ],
      pros: [
        "Purely emotional, which suits romantic occasions",
        "Easy to post",
        "Inexpensive relative to its impact",
      ],
      cons: [
        "Falls flat with recipients who dislike sentimental objects",
        "No practical use at all",
        "Printed wording is often overdone",
      ],
      alternatives: ["initial-letter-pendant-necklace", "thinking-of-you-gift-box", "crystal-lamp-star-projector"],
    },
  },
  {
    slug: "ysl-libre-eau-de-parfum",
    title: "Yves Saint Laurent Libre Eau de Parfum",
    tag: "Fragrance",
    summary:
      "A sharp lavender-and-orange-blossom designer scent — bold, widely recognised, and not remotely subtle.",
    bestFor: "Girlfriend · Someone who already wears designer fragrance",
    budget: "100-plus",
    affiliateUrl:
      "https://www.amazon.nl/dp/B0DF2X6JR3?linkCode=ll2&tag=mesmerdesign-20&linkId=11997d0163caed3feb6dbded830caa2d",
    art: { hue: 320, motif: "rays" },
    updated: "2026-09-06",
    tags: ["perfume", "fragrance", "designer", "ysl", "girlfriend", "luxury"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
    ],
    guide: {
      heading: "Buying Perfume for Someone Else: Read This First",
      standfirst:
        "Fragrance is the highest-risk gift in this entire catalogue. It is also, when it lands, among the most personal. Here is how to shift the odds.",
      why: [
        "A designer fragrance is unambiguously a luxury gift. There is no confusion about what it cost or that it was chosen deliberately, which is part of why it works for anniversaries and significant birthdays.",
        "Libre sits at the loud end of the spectrum — a lavender and orange blossom structure with real sharpness to it. That is a genuine style, not a flaw, but it means it suits someone who wants to be noticed rather than someone who wears scent quietly.",
        "It is widely enough worn that she may well have encountered it already, which is useful: unlike an obscure niche scent, there is a decent chance she has an opinion you can discover before buying.",
      ],
      whoFor: [
        "Someone who already wears designer fragrance and talks about it",
        "A recipient whose current bottle you have seen running low",
        "Anyone who likes bold, projecting scents rather than skin-close ones",
        "A significant birthday or anniversary where the gesture should be visible",
      ],
      whyGift: [
        "Unmistakably a luxury gift",
        "Consumable, so a replacement bottle is always usable",
        "Distinctive enough to be memorable",
      ],
      considerations: [
        "Perfume smells different on different people. Skin chemistry genuinely changes how a fragrance develops, so a scent you loved on someone else may not work on her at all.",
        "Do not buy blind. The single best thing you can do is find out what she currently wears — photograph the bottle on her dresser — and either replace it or choose something in the same family.",
        "Check the concentration. Eau de Parfum, Eau de Toilette and Parfum are different strengths of the same name and priced accordingly; listings are easy to misread.",
        "Counterfeits are common in fragrance. Buy from the retailer directly rather than a third-party seller with no history, and be suspicious of unusually low prices.",
        "If she wears one signature scent and has for years, a new fragrance is a harder gift than it looks. Many people do not want to be moved off theirs.",
      ],
      pros: [
        "Clearly a luxury gift",
        "Consumable and replaceable",
        "Bold and memorable",
      ],
      cons: [
        "High risk if you have not confirmed her taste",
        "Smells different on different skin",
        "Too loud for anyone who prefers quiet scents",
        "Counterfeit risk from third-party sellers",
      ],
      alternatives: ["carolina-herrera-very-good-girl", "lancome-la-vie-est-belle-gift-set", "viktor-rolf-flowerbomb"],
    },
  },
  {
    slug: "carolina-herrera-very-good-girl",
    title: "Carolina Herrera Very Good Girl Eau de Parfum",
    tag: "Fragrance",
    summary:
      "A sweet red-berry and rose fragrance in a distinctive stiletto bottle — as much an object as a scent.",
    bestFor: "Girlfriend · Birthday · Someone who likes sweet scents",
    budget: "100-plus",
    affiliateUrl:
      "https://www.amazon.nl/dp/B09VT8ZDMM?linkCode=ll2&tag=mesmerdesign-20&linkId=3b4884dbcd419e976721ddacd3aad2bf",
    art: { hue: 350, motif: "rays" },
    updated: "2026-09-06",
    tags: ["perfume", "fragrance", "designer", "carolina herrera", "girlfriend", "sweet"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "The Bottle Is Part of the Gift",
      standfirst:
        "Very Good Girl is bought as often for the stiletto bottle as for what is inside it — and for a gift, that is a more reasonable basis than it sounds.",
      why: [
        "Perfume bottles sit out on display, unlike almost everything else you consume. A sculptural bottle stays visible on a dresser for a year or more, which means the design is doing real work long after the novelty of the scent has worn off.",
        "The scent itself sits firmly in the sweet, fruity-floral camp — red berries over rose. That is a well-defined lane: people who like sweet fragrances tend to like this a great deal, and people who don't, don't.",
        "It is a strong choice for a younger recipient or a first designer fragrance, because it is approachable rather than challenging.",
      ],
      whoFor: [
        "Someone who already gravitates to sweet or fruity scents",
        "A first designer fragrance for a younger recipient",
        "Anyone who keeps and displays nice bottles",
        "A birthday where you want visible impact",
      ],
      whyGift: [
        "The bottle is a display object in its own right",
        "Approachable rather than difficult",
        "Consumable and replaceable",
      ],
      considerations: [
        "Sweet fragrances are strongly polarising. If she wears fresh, woody or citrus scents, this is not a near miss — it is the opposite end of the spectrum.",
        "Confirm the concentration and size. The same name is sold in several strengths and volumes at very different prices.",
        "The bottle shape is distinctive to the point of being a statement. Some recipients find it fun; others find it too much to leave on a dresser.",
        "Buy from the retailer directly. Fragrance counterfeits are widespread and a suspiciously cheap listing usually is one.",
      ],
      pros: [
        "Memorable bottle that stays on display",
        "Approachable, crowd-pleasing scent profile",
        "Strong choice for a first designer fragrance",
      ],
      cons: [
        "Sweet scents divide opinion sharply",
        "Bottle design is a statement in itself",
        "Counterfeit risk from unknown sellers",
      ],
      alternatives: ["ysl-libre-eau-de-parfum", "viktor-rolf-flowerbomb", "lancome-la-vie-est-belle-gift-set"],
    },
  },
  {
    slug: "lancome-la-vie-est-belle-gift-set",
    title: "Lancôme La Vie Est Belle Gift Set",
    tag: "Fragrance",
    summary:
      "A boxed set pairing the fragrance with a matching body product — more to open, and a gentler way to introduce a scent.",
    bestFor: "Girlfriend · Christmas · When one bottle feels thin",
    budget: "100-plus",
    affiliateUrl:
      "https://www.amazon.nl/dp/B0BBGNYJWB?linkCode=ll2&tag=mesmerdesign-20&linkId=8da56220134ab3bc862210699e2758f1",
    art: { hue: 300, motif: "basket" },
    updated: "2026-09-06",
    tags: ["perfume", "fragrance", "gift set", "lancome", "girlfriend", "christmas", "luxury"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "Fragrance Gift Sets: Why the Extra Pieces Matter",
      standfirst:
        "A set costs more than a bottle and is usually the better gift anyway — for reasons that have little to do with the extra product.",
      why: [
        "Layering makes a fragrance last. A matching body lotion or shower product under the perfume genuinely extends how long the scent holds on skin, which is the most common complaint people have about their own fragrance.",
        "A set gives her a way in if the scent is new to her. She can use the body product on days she is not sure, rather than committing to a full spray of something unfamiliar — which lowers the risk of your gift going unused.",
        "Boxed sets present far better than a single bottle. For Christmas in particular, where a gift is opened in front of family, the difference in how it looks matters more than it should.",
      ],
      whoFor: [
        "Christmas and holiday gifting, where presentation is public",
        "Someone who already likes this fragrance and would use more of it",
        "Anyone who complains their perfume fades by lunchtime",
        "A recipient new to the scent who needs a gentle introduction",
      ],
      whyGift: [
        "Layering genuinely improves how long the scent lasts",
        "More to open, which suits public gift-giving",
        "Lower risk than a single unfamiliar bottle",
      ],
      considerations: [
        "Check the bottle size in the set. Gift sets frequently pair a smaller fragrance bottle with the extras, so compare the millilitres rather than assuming it matches the standalone.",
        "La Vie Est Belle is a sweet iris and praline scent. It is not a neutral choice — confirm she likes that register before buying the larger set.",
        "Seasonal sets are produced in limited runs. If she loves it, the exact set may not exist next year, though the standalone fragrance will.",
        "As with any fragrance, buy from the retailer directly rather than an unknown third-party seller.",
      ],
      pros: [
        "Layering extends the scent noticeably",
        "Presents very well when opened",
        "Easier introduction to an unfamiliar fragrance",
      ],
      cons: [
        "Fragrance bottle is often smaller than the standalone",
        "Sweet gourmand profile is not universal",
        "Costs more than a bottle alone",
      ],
      alternatives: ["ysl-libre-eau-de-parfum", "viktor-rolf-flowerbomb", "bath-and-body-gift-set"],
    },
  },
  {
    slug: "viktor-rolf-flowerbomb",
    title: "Viktor & Rolf Flowerbomb Eau de Parfum",
    tag: "Fragrance",
    summary:
      "A dense, sweet floral that has been a bestseller for close to two decades — the safest guess if you have nothing to go on.",
    bestFor: "Girlfriend · Anniversary · A safe fragrance choice",
    budget: "100-plus",
    affiliateUrl:
      "https://www.amazon.nl/dp/B09HVG64NH?linkCode=ll2&tag=mesmerdesign-20&linkId=9b5e7b07868b14f9278f9bf2d8cebd0d",
    art: { hue: 310, motif: "rays" },
    updated: "2026-09-06",
    tags: ["perfume", "fragrance", "designer", "viktor rolf", "floral", "girlfriend", "luxury"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
    ],
    guide: {
      heading: "The Safest Fragrance to Buy Blind — and Why That Still Isn't Very Safe",
      standfirst:
        "If you genuinely have nothing to go on, longevity in the market is the only useful signal. Flowerbomb has more of it than almost anything else on the shelf.",
      why: [
        "It has sold consistently since 2005, which is the closest thing to evidence you can get without knowing her taste. Fragrances that stay in production for two decades do so because a very wide range of people keep buying them, and that broad appeal is precisely what you are betting on when buying blind.",
        "The profile is a dense sweet floral — jasmine and patchouli with a sugared quality. It is rich rather than fresh, which makes it better suited to evenings and cold weather than to a hot commute.",
        "Its ubiquity cuts both ways and you should know it: she may already own it, and she may consider it overexposed. Both are worth a quick check.",
      ],
      whoFor: [
        "A recipient whose fragrance taste you genuinely do not know",
        "Someone who likes rich, sweet florals",
        "Evening and cold-weather wear rather than daily office use",
        "An anniversary where you want a recognised, established choice",
      ],
      whyGift: [
        "Broadest appeal of the fragrances here",
        "Long-established rather than a passing release",
        "Instantly recognisable as a considered gift",
      ],
      considerations: [
        "Check she does not already own it. Its popularity is the reason to buy it and the reason she may have a bottle already.",
        "It is a heavy scent. In warm climates or a small office it can be overwhelming, and some people find it dated for exactly that reason.",
        "Popular fragrances are the most counterfeited. Buy from the retailer directly and treat a low price as a warning rather than a bargain.",
        "Even the safest blind choice is a guess. If you can find out what she wears, do that instead — every guide on this site would tell you the same.",
      ],
      pros: [
        "Broadest appeal of any fragrance here",
        "Two decades of continuous popularity",
        "Recognisable and clearly premium",
      ],
      cons: [
        "Heavy and unsuited to warm weather",
        "Popular enough that she may own it already",
        "Considered overexposed by some",
        "Heavily counterfeited",
      ],
      alternatives: ["ysl-libre-eau-de-parfum", "carolina-herrera-very-good-girl", "lancome-la-vie-est-belle-gift-set"],
    },
  },
];
