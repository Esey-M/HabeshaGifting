import type { Product } from "./types";

/**
 * Retailer-linked gift recommendations for a friend.
 *
 * Same rules as the rest of the linked catalogue: the editorial content is
 * category buying advice — how to choose this kind of gift and what goes wrong
 * — not a hands-on review. We hold no unit of either item, so nothing here
 * claims durability, glaze quality or finish that cannot be read off the
 * listing, and no prices or ratings appear.
 *
 * Both entries share the Friend listing with items already placed there from
 * `products.sister`, so each is written against its nearest neighbour: the mug
 * set against `ceramic-lined-travel-mug` (desk versus commute) and the teapot
 * against `crochet-sister-doll` (targeted pun versus generic keepsake).
 *
 * `budget` is our own editorial estimate of what the category typically costs.
 */
export const friendProducts: Product[] = [
  {
    slug: "friendship-mug-gift-box",
    title: "Marble Friendship Mug Gift Box",
    tag: "Coffee",
    summary:
      "A gold-rimmed porcelain mug boxed with a lid, a spoon and a card — a gift where the packaging is doing as much of the work as the mug is.",
    bestFor: "Friend · Birthday · Arrives ready to give",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B085VYLRFQ?linkCode=ll2&tag=mesmerdesign-20&linkId=2acf785575328e8f63fe6ff515e48ffe&language=en_US",
    art: { hue: 340, motif: "vessel" },
    updated: "2026-09-09",
    tags: ["coffee", "mug", "porcelain", "gift box", "friend", "birthday", "budget"],
    placements: [
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "girlfriend" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
      { category: "gifts-by-occasion", subcategory: "celebration" },
    ],
    guide: {
      heading: "The Case for a Gift That Arrives Already Wrapped",
      standfirst:
        "Boxed mug sets get written off as filler. The property that actually matters is more mundane and more useful than the sentiment printed on the side: it needs nothing from you between the doorstep and the moment it is handed over.",
      why: [
        "The box is the feature, not the padding. A gift that arrives already boxed, with a lid and a spoon arranged and a card slot waiting, solves a genuinely annoying logistical problem — the friend you are posting to, the birthday you remembered two days late, the party you are going to straight from work. Anyone who has tried to gift-wrap a mug knows it is close to the worst-shaped object in gifting, and buying that problem pre-solved is worth more than the price difference suggests.",
        "Porcelain and stoneware are not the same material, and this is the one specification worth reading here. Porcelain is fired hotter and ends up denser and less porous, which means it chips less readily at the rim — the place mugs always fail — and it is lighter for its strength. None of that is visible in a photograph, so the listing text is the only place you will learn it.",
        "A mug is the highest-frequency object you can hand somebody. Jewellery gets worn on occasions and candles get saved for good; a mug is picked up every morning by a person who owns three and has a favourite. That frequency is the whole argument for the category, and it is also why the wording on the side matters far more than the money — she will read it several hundred times a year.",
      ],
      whoFor: [
        "A friend you are posting to, where wrapping is not an option",
        "Someone whose desk at work is where she actually drinks",
        "A birthday you have left slightly late",
        "An early gift in a friendship, where the register needs to stay light",
      ],
      whyGift: [
        "Arrives ready to hand over, card and all",
        "Used daily rather than saved for occasions",
        "Warm without creating any obligation to reciprocate",
      ],
      considerations: [
        "Read the slogan as though a colleague were reading it over her shoulder. A desk mug is a public object, and anything that would embarrass her in a meeting is a mug that quietly moves to the back of a cupboard. The difference between a gift that gets used and one that does not is frequently nothing more than the wording.",
        "Gold and metallic printing usually rules out the microwave, whatever the rest of the listing says. Metallic decoration arcs. Most people reheat coffee at some point in the morning, which makes this the single most useful thing to check before ordering.",
        "Treat \"dishwasher safe\" as a claim rather than a fact. It appears on nearly everything in this category and holds up unevenly — printed and decal decoration fades over repeated hot cycles in a way that fired-in glaze does not. Hand washing is the honest advice for anything decorated, and worth passing on with the gift.",
        "If she drinks her coffee on the move, this is the wrong mug entirely. An open desk mug and an insulated travel mug are different products for different lives; give a committed commuter a desk mug and it stays at home.",
        "Confirm what is actually in the box. Listings in this category are photographed with flowers, beans and props that do not ship, and the specification list rather than the styled image is the part to trust.",
      ],
      pros: [
        "Arrives boxed and ready to give, with a card included",
        "Used daily rather than kept for special occasions",
        "Porcelain is denser and more chip-resistant than stoneware",
        "Inexpensive enough to give without creating obligation",
      ],
      cons: [
        "Metallic printing usually means no microwave",
        "Decorated mugs fade in a dishwasher over time",
        "Wrong shape entirely for anyone who drinks on the move",
      ],
      alternatives: [
        "crochet-teapot-keepsake",
        "ceramic-lined-travel-mug",
        "rose-self-care-gift-box",
      ],
    },
  },
  {
    slug: "crochet-teapot-keepsake",
    title: "Hand-Crocheted Teapot with Pun Sign",
    tag: "Keepsake",
    summary:
      "A small crocheted teapot holding a \"best-tea\" sign — a gift built entirely around a pun, which is precisely why it works between adult friends.",
    bestFor: "Friend · Tea drinker · Desk decor",
    budget: "under-25",
    affiliateUrl:
      "https://www.amazon.com/dp/B0H2H6S545?linkCode=ll2&tag=mesmerdesign-20&linkId=a5f519068be87dcb3cdee87d9b580fd1&language=en_US",
    art: { hue: 15, motif: "weave" },
    updated: "2026-09-09",
    tags: ["keepsake", "crochet", "handmade", "friend", "tea", "desk", "budget"],
    placements: [
      { category: "gifts-for-her", subcategory: "friend" },
      { category: "gifts-for-her", subcategory: "sister" },
      { category: "gifts-for-her", subcategory: "teen-girl" },
      { category: "gifts-by-occasion", subcategory: "birthday" },
      { category: "gifts-by-occasion", subcategory: "celebration" },
      { category: "gifts-by-occasion", subcategory: "christmas-holidays" },
    ],
    guide: {
      heading: "Why a Pun Is the Correct Register for a Gift Between Adult Friends",
      standfirst:
        "Gifts between grown friends have a calibration problem that gifts within a family do not. Too generous reads as an obligation being created; too small reads as an afterthought. A joke object sidesteps the entire scale.",
      why: [
        "The pun is doing structural work rather than just being cute. Telling a friend outright that she matters to you is, for most adults, faintly unbearable in both directions — to say and to receive. Routing the same sentiment through a bad pun makes it sayable: she gets the message, nobody has to hold eye contact, and the object sits on a desk repeating it daily. It is the same mechanism as a card that makes someone laugh, except that a card is in a drawer within a month and this is not.",
        "It is targeted rather than generic, and the targeting is what separates a gift from a gesture. A crocheted animal says you bought her something small. A crocheted teapot says you know she drinks four cups a day and built the gift around that fact. The specificity costs nothing at all and accounts for essentially the whole difference in how it lands.",
        "Desk objects get seen more often than anything else you could give her. A friend you no longer live near is someone you see rarely and think about frequently; something small on her desk at work converts that into a daily reminder. It is a strange amount of leverage for an object this cheap, and it is the reason the category persists.",
      ],
      whoFor: [
        "A friend who genuinely drinks tea — the joke collapses without that",
        "Someone with a desk at work where it will actually sit",
        "A long-distance friendship, where small and postable is the practical option",
        "A birthday or thank-you that should stay light rather than weighty",
      ],
      whyGift: [
        "Says something sincere without either of you having to be sincere",
        "Built around her actual habit rather than generically nice",
        "Cheap, light and easy to post internationally",
      ],
      considerations: [
        "It only works on a tea drinker. This sounds too obvious to state and is by far the most common way the gift fails — handed to someone who drinks coffee it is a crocheted ornament carrying a joke she has no stake in.",
        "Check the dimensions against the photograph rather than trusting the image. Handmade crochet items are consistently smaller in the hand than they appear on screen, and the figure in the specification is the honest one.",
        "Confirm the sign ships and how it is attached. The pun is the entire gift here, so a listing where the sign turns out to be a styling prop rather than a component leaves you holding a plain crocheted teapot with nothing to say.",
        "Handmade means every unit varies — stitch tension, the exact shade of the yarn, the set of the spout. That is either the appeal of buying handmade or the complaint about it, depending entirely on what was expected.",
        "It is decorative yarn, not a teapot. Nobody expects otherwise, but yarn near a kitchen collects steam and grease, so a desk is a considerably better home for it than a shelf above a kettle.",
      ],
      pros: [
        "Carries real affection under cover of a joke",
        "Specific to a tea drinker rather than generically sentimental",
        "Small and light enough to post, or to add to a larger gift",
        "Lives in view rather than in a drawer",
      ],
      cons: [
        "Falls completely flat on anyone who does not drink tea",
        "Handmade variation from the listing photograph is guaranteed",
        "Purely decorative, and smaller than it photographs",
      ],
      alternatives: [
        "friendship-mug-gift-box",
        "crochet-sister-doll",
        "rose-self-care-gift-box",
      ],
    },
  },
];
