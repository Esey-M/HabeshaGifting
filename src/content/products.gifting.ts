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
    slug: "habesha-cross-necklace-earring-set",
    title: "Habesha Cross Necklace & Earring Set",
    tag: "Jewelry",
    summary:
      "A matched necklace and earring set in traditional Ethiopian and Eritrean styling — the safest way to give cultural jewellery without guessing at one piece.",
    bestFor: "Girlfriend · Anniversary · A first cultural gift",
    budget: "under-100",
    affiliateUrl:
      "https://www.amazon.com/dp/B0DHGFPTGK?linkCode=ll2&tag=mesmerdesign-20&linkId=80b9ef0532b385df54fbd8206724aaf4&language=en_US",
    image: "/img/products/habesha-cross-necklace-earring-set",
    art: { hue: 45, motif: "cross" },
    updated: "2026-09-06",
    tags: ["jewelry", "necklace", "earrings", "cross", "eritrean", "ethiopian", "set", "girlfriend"],
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
        "Traditional Habesha cross work reads as jewellery first and heritage second, which is exactly the right order for a gift to a girlfriend. It is culturally specific without being a statement she has to explain at work.",
        "Sets photograph and present better than a single piece. Opening a box with two matched items feels considered in a way a single small pendant does not, without costing proportionally more.",
      ],
      whoFor: [
        "A girlfriend or partner where you want something cultural but not heavy",
        "Anyone who wears one metal consistently — check which before you order",
        "An anniversary or milestone where a set suits the occasion better than one piece",
        "Someone building a cultural jewellery collection from nothing",
      ],
      whyGift: [
        "Two pieces means two chances to hit her actual taste",
        "Presents generously without a large jump in price",
        "Culturally specific without demanding she wear a statement",
      ],
      considerations: [
        "Check the metal and the colour variant. Listings like this often sell gold-tone and silver-tone versions under one page, and sterling, plated and tone are three different things at three different lifespans. Confirm which variant you are actually adding to the basket.",
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
      alternatives: [
        "personalized-steel-pendant-necklace",
        "ethiopian-cross-necklace-gold-filled",
        "gold-plated-rosary-necklace",
      ],
    },
  },
  {
    slug: "initial-letter-pendant-necklace",
    title: "Initial & Birthstone Pendant Necklace",
    tag: "Personalized Jewelry",
    summary:
      "An initial pendant paired with a birthstone — personalised twice over, and still with no spelling that can go wrong.",
    bestFor: "Girlfriend · Under $25 · Early relationship",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0GRLB4RNR?linkCode=ll2&tag=mesmerdesign-20&linkId=1f2db89e74a112fa5e1a5c2f80f7674f&language=en_US",
    image: "/img/products/initial-letter-pendant-necklace",
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
        "The birthstone adds a second layer of personalisation that also cannot be misspelled. A month is a fact rather than a spelling, so between the letter and the stone you get two personal signals with zero translation risk.",
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
        "Check the birthstone is her month, not yours, unless you specifically intend otherwise. It is an easy detail to get backwards when ordering quickly.",
        "Stones at this price are simulated or lab-created rather than mined. That is entirely fine, but the listing should say so plainly.",
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
        "Simulated stones rather than mined",
        "Less distinctive than script or cultural pieces",
      ],
      alternatives: [
        "personalized-birthstone-ring",
        "personalized-steel-pendant-necklace",
        "dainty-cross-choker-necklace",
      ],
    },
  },
  {
    slug: "personalized-steel-pendant-necklace",
    title: "Silver Initial Necklace with Heart Pendant",
    tag: "Personalized Jewelry",
    summary:
      "An initial and a small heart in stainless steel rather than plated brass — the version built to survive being worn every single day.",
    bestFor: "Girlfriend · Everyday wear · Sensitive skin",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0H2V55L5V?linkCode=ll2&tag=mesmerdesign-20&linkId=ddb198bab4aa4198536045a714046306&language=en_US",
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
        "If you are weighing this against a birthstone version, the split is decorative versus durable: a plated birthstone piece is prettier in the box, a steel one is still being worn in three years.",
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
      alternatives: [
        "initial-letter-pendant-necklace",
        "personalized-birthstone-ring",
        "dainty-cross-choker-necklace",
      ],
    },
  },
  {
    slug: "bath-and-body-gift-set",
    title: "Luxury Spa Gift Basket",
    tag: "Gift Sets",
    summary:
      "A presented basket of bath and body products — the reliable option when you want to give something generous without needing to know her taste precisely.",
    bestFor: "Girlfriend · Birthday · When you are unsure",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B08JSXNGZT?linkCode=ll2&tag=mesmerdesign-20&linkId=8549781a5ac96b27e2efc05dc0b9fd7e&language=en_US",
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
        "The presentation is doing real work here. The same products bought loose would read as an afterthought; arranged in a basket they become a considered object to hand over, which is most of what you are paying for.",
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
        "Baskets are bulky to post. If this is going any distance, check the packaging rather than assuming it survives the journey arranged as photographed.",
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
      alternatives: [
        "ethiopian-cross-necklace-gold-filled",
        "habesha-cross-necklace-earring-set",
        "personalized-steel-pendant-necklace",
      ],
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
      alternatives: [
        "bath-and-body-gift-set",
        "pashmina-shawl-wrap",
        "crystal-lamp-star-projector",
      ],
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
      alternatives: [
        "habesha-textile-wall-hanging",
        "bath-and-body-gift-set",
        "fleece-sherpa-pajama-set",
      ],
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
      alternatives: [
        "painted-wooden-jewelry-armoire",
        "bath-and-body-gift-set",
        "initial-letter-pendant-necklace",
      ],
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
      alternatives: [
        "initial-letter-pendant-necklace",
        "thinking-of-you-gift-box",
        "crystal-lamp-star-projector",
      ],
    },
  },
  {
    slug: "r540-extrait-de-parfum",
    title: "R540 Extrait de Parfum (Unisex)",
    tag: "Fragrance",
    summary:
      "A unisex extrait in the sweet amber-woody style made famous by a much more expensive house — high concentration, modest price.",
    bestFor: "Girlfriend · Someone curious about fragrance · Sharing",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0H5136Q21?linkCode=ll2&tag=mesmerdesign-20&linkId=826e3a6367537639e74e85129e521afa&language=en_US",
    art: { hue: 350, motif: "rays" },
    updated: "2026-09-06",
    tags: ["perfume", "fragrance", "extrait", "unisex", "girlfriend", "affordable", "amber"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "anniversary" },
    ],
    guide: {
      heading: "Extrait, Unisex, and 'Inspired By': What Those Three Words Actually Mean",
      standfirst:
        "This category confuses more gift-buyers than any other in fragrance. Understanding the three terms on the label tells you almost everything about whether it will suit her.",
      why: [
        "Extrait is the strongest concentration on the shelf. Eau de Toilette, Eau de Parfum and Extrait de Parfum describe how much perfume oil is in the bottle, in ascending order — which means an extrait needs one or two sprays where an EDT needs six, and it lasts considerably longer on skin.",
        "Unisex is a genuine category, not a compromise. Amber and woody structures do not read as strongly gendered, so a unisex fragrance is a reasonable gift for someone whose taste you are unsure of — and it can be shared, which some couples like a great deal.",
        "Fragrances built in the style of a famous expensive one are a legitimate way into the category. They let someone find out whether they actually like a scent profile before spending several hundred on the original, and for a gift that removes most of the financial risk from a guess.",
      ],
      whoFor: [
        "Someone curious about fragrance but not yet committed to an expensive bottle",
        "A recipient who likes sweet, warm, amber-woody scents",
        "A couple happy to share a bottle",
        "Anyone who has admired a scent in this family without wanting to pay designer prices",
      ],
      whyGift: [
        "High concentration means it lasts, so the bottle goes further",
        "Low enough risk to give as a guess",
        "Unisex, so it works if your read on her taste is wrong",
      ],
      considerations: [
        "Apply extrait sparingly. Someone used to spraying an Eau de Toilette six times will badly over-apply this, and it is worth saying so when you hand it over.",
        "Inspired-by fragrances are not the original. They approximate the opening well and usually diverge as they dry down, so treat this as a scent in its own right rather than a substitute nobody will notice.",
        "Sweet amber scents are heavy. They suit evenings and cold weather far better than a warm office.",
        "Buy from a seller with real history. Fragrance is the most counterfeited category on any marketplace, and this end of it especially so.",
      ],
      pros: [
        "Strongest concentration, so it lasts",
        "Fraction of designer pricing",
        "Unisex profile is forgiving of a wrong guess",
        "Low financial risk for an unproven scent",
      ],
      cons: [
        "Diverges from the fragrance it references as it dries down",
        "Very easy to over-apply",
        "Too heavy for warm weather or close offices",
        "Quality varies sharply between sellers",
      ],
      alternatives: ["spa-gift-set-25-piece", "bath-and-body-gift-set", "romantic-keepsake-gift"],
    },
  },
  {
    slug: "spa-gift-set-25-piece",
    title: "25-Piece Spa Gift Set",
    tag: "Gift Sets",
    summary:
      "A large multi-piece spa set — bought for the scale of the unboxing as much as for the products inside it.",
    bestFor: "Girlfriend · Birthday · A gift that should look big",
    budget: "under-50",
    affiliateUrl:
      "https://www.amazon.com/dp/B0DBH681YG?linkCode=ll2&tag=mesmerdesign-20&linkId=99edd75cd5b6ca101588a30890f34eed&language=en_US",
    art: { hue: 300, motif: "basket" },
    updated: "2026-09-06",
    tags: ["gift set", "spa", "bath", "multi-piece", "girlfriend", "birthday", "presentation"],
    placements: [
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "celebration" },
    ],
    guide: {
      heading: "Big Multi-Piece Sets: What You Are Really Buying",
      standfirst:
        "A twenty-five piece set is not twenty-five times better than a one-piece gift. It is a different kind of gift, and it is worth being clear about which kind you want.",
      why: [
        "You are buying the moment of opening. A large set delivers visible generosity immediately — it fills a table, it takes time to unpack, and it photographs well. For a birthday opened in front of other people, that is a real and legitimate thing to want.",
        "Volume also spreads the risk. With that many items, she does not have to like all of them; three or four hits is a successful gift, where a single product either lands or does not.",
        "It suits recipients you do not know deeply yet. Where a single carefully chosen object requires knowing her taste, a broad set works by covering ground instead.",
      ],
      whoFor: [
        "A birthday opened in front of family or friends",
        "Someone you want to give something visibly generous to",
        "A newer relationship where you are still learning her taste",
        "Anyone who genuinely enjoys bath and skincare products",
      ],
      whyGift: [
        "Immediate visible generosity",
        "Several items means several chances to hit",
        "Works without knowing her taste precisely",
      ],
      considerations: [
        "Count quality, not pieces. Twenty-five items at this price means each one is small; a set of five good products is often the better gift and it is worth deciding which you actually want.",
        "Check the fragrance. Large sets are usually built around one scent throughout, so if it does not suit her, very little of the set is salvageable.",
        "Read the ingredients if she has sensitive skin or eczema. Heavily fragranced bath products are a common trigger and these sets are heavily fragranced by design.",
        "These boxes are bulky and heavy. Factor that in if it is being posted rather than handed over.",
      ],
      pros: [
        "Looks generous the moment it is opened",
        "Spreads risk across many items",
        "Good for a newer relationship",
      ],
      cons: [
        "Individual pieces are small at this price",
        "One scent throughout — a miss affects the whole set",
        "Bulky and expensive to post",
        "Can read as quantity over thought",
      ],
      alternatives: [
        "bath-and-body-gift-set",
        "thinking-of-you-gift-box",
        "r540-extrait-de-parfum",
      ],
    },
  },
];
