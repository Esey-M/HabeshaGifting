import type { BudgetMeta, Category } from "./types";

export const budgets: BudgetMeta[] = [
  { id: "under-25", label: "Under $25", rank: 1 },
  { id: "under-50", label: "Under $50", rank: 2 },
  { id: "under-100", label: "Under $100", rank: 3 },
  { id: "100-plus", label: "$100 and up", rank: 4 },
];

export const categories: Category[] = [
  {
    slug: "gifts-by-occasion",
    title: "Gifts by Occasion",
    icon: "🎁",
    tagline: "Weddings, birthdays, graduations and every moment worth marking.",
    heading: "Gifts by Occasion",
    intro:
      "Some gifts are chosen for a person, others for a moment. Start with the occasion and we will point you toward gifts that fit the weight of the day — from a first mekses to a fiftieth birthday.",
    childLabel: "Occasions",
    art: { hue: 0, motif: "rays" },
    inNav: false,
    image: "/img/categories/gifts-by-occasion",
    subcategories: [
      {
        slug: "wedding",
        title: "Wedding",
        icon: "💒",
        tagline: "Gifts for the couple, the melse, and the home they are starting.",
        heading: "Habesha Wedding Gift Ideas",
        intro:
          "A Habesha wedding is rarely one event, and a good gift acknowledges that. These ideas suit the couple's new home, the coffee they will serve guests for years, and the keepsakes they will still have at their tenth anniversary.",
        art: { hue: 12, motif: "arch" },
      },
      {
        slug: "engagement",
        title: "Engagement",
        icon: "💍",
        tagline: "Marking the promise before the celebration.",
        heading: "Engagement Gift Ideas",
        intro:
          "Engagement gifts sit in a lovely in-between place: personal enough to celebrate the couple, restrained enough that you are not pre-empting the wedding list.",
        art: { hue: 18, motif: "cross" },
      },
      {
        slug: "birthday",
        title: "Birthday",
        icon: "🎂",
        tagline: "Personal gifts that land better than a gift card.",
        heading: "Birthday Gift Ideas",
        intro:
          "The best birthday gifts show you were paying attention the rest of the year. These lean personal, useful, or beautiful — ideally two of the three.",
        art: { hue: 30, motif: "rays" },
      },
      {
        slug: "graduation",
        title: "Graduation",
        icon: "🎓",
        tagline: "For the milestone the whole family claims a share of.",
        heading: "Graduation Gift Ideas",
        intro:
          "A graduation gift often marks a first apartment as much as a degree. These ideas balance celebration with things that genuinely help someone start out.",
        art: { hue: 42, motif: "arch" },
      },
      {
        slug: "new-baby",
        title: "New Baby",
        icon: "👶",
        tagline: "For the new arrival and the parents keeping them fed.",
        heading: "New Baby Gift Ideas",
        intro:
          "New-parent gifts split neatly into two kinds: something for the baby, and something that makes the parents' week easier. The best gift baskets do both.",
        art: { hue: 54, motif: "basket" },
      },
      {
        slug: "housewarming",
        title: "Housewarming",
        icon: "🏠",
        tagline: "Gifts that make a new place feel like theirs.",
        heading: "Housewarming Gift Ideas",
        intro:
          "A housewarming gift should survive the unpacking and still be in use a year later. Think of the first thing they will want to show a guest.",
        art: { hue: 8, motif: "vessel" },
      },
      {
        slug: "anniversary",
        title: "Anniversary",
        icon: "❤️",
        tagline: "Marking the years, quietly or loudly.",
        heading: "Anniversary Gift Ideas",
        intro:
          "Anniversary gifts reward specificity. A date, a place, a phrase in Amharic or Tigrinya turns an ordinary object into something only the two of them can read.",
        art: { hue: 355, motif: "cross" },
      },
      {
        slug: "christmas-holidays",
        title: "Christmas & Holidays",
        icon: "🎄",
        tagline: "Genna, Fasika, Meskel and the December rush.",
        heading: "Holiday Gift Ideas",
        intro:
          "Between Genna in January, Fasika in spring and the December holidays, there is always a season coming. These ideas travel well and suit gifting in quantity.",
        art: { hue: 140, motif: "rays" },
      },
      {
        slug: "coffee-ceremony",
        title: "Coffee Ceremony",
        icon: "☕",
        tagline: "For hosts who pour for everyone else.",
        heading: "Coffee Ceremony Gift Ideas",
        intro:
          "The buna ceremony is a gift-giving occasion in its own right. These are gifts for the person who runs it — and gifts that let someone start their own.",
        art: { hue: 24, motif: "vessel" },
      },
      {
        slug: "celebration",
        title: "Celebration",
        icon: "🎉",
        tagline: "New jobs, citizenship, recoveries and good news.",
        heading: "Celebration Gift Ideas",
        intro:
          "Not every milestone has a category. For new citizenship, a new job, or simply good news worth marking, these gifts strike a celebratory note without being fussy.",
        art: { hue: 300, motif: "rays" },
      },
    ],
  },
  {
    slug: "gifts-for-her",
    title: "Gifts for Her",
    icon: "❤️",
    tagline: "Thoughtful gift ideas for moms, wives, sisters, daughters, friends and more.",
    heading: "Gifts for Her",
    intro: "Find something meaningful for the women in your life.",
    childLabel: "Recipients",
    art: { hue: 350, motif: "weave" },
    inNav: true,
    image: "/img/categories/gifts-for-her",
    subcategories: [
      {
        slug: "mom",
        title: "Mom",
        icon: "👩",
        tagline: "For the woman who already has everything she needs and gave away the rest.",
        heading: "Best Gifts for Mom",
        intro:
          "Gifts for a Habesha mother are a particular challenge: she will insist she does not need anything, then use the right gift every single day. These lean toward things she would never buy for herself.",
        image: "/img/gifts-for-her/mom",
        art: { hue: 352, motif: "vessel" },
      },
      {
        slug: "wife-partner",
        title: "Wife / Partner",
        icon: "💍",
        tagline: "Personal gifts for the person who knows your whole story.",
        heading: "Gifts for Your Wife or Partner",
        intro:
          "The bar is higher here, and it is not about price. These ideas favour the personal and the lasting over the grand gesture.",
        image: "/img/gifts-for-her/wife-partner",
        art: { hue: 345, motif: "cross" },
      },
      {
        slug: "girlfriend",
        title: "Girlfriend",
        icon: "❤️",
        tagline: "Thoughtful without being overwhelming.",
        heading: "Gifts for Your Girlfriend",
        intro:
          "Early-relationship gifting is a calibration problem. These ideas read as considered rather than heavy — beautiful objects, small luxuries, nothing that implies a mortgage.",
        image: "/img/gifts-for-her/girlfriend",
        art: { hue: 340, motif: "weave" },
      },
      {
        slug: "sister",
        title: "Sister",
        icon: "👭",
        tagline: "For the one who will tell you exactly what she thinks of it.",
        heading: "Gifts for Your Sister",
        intro:
          "Sisters are the most honest recipients you will ever have, which makes them the most rewarding. These ideas suit a wide range of ages and styles.",
        image: "/img/gifts-for-her/sister",
        art: { hue: 330, motif: "weave" },
      },
      {
        slug: "daughter",
        title: "Daughter",
        icon: "👧",
        tagline: "Gifts that connect her to where the family comes from.",
        heading: "Gifts for Your Daughter",
        intro:
          "Many of these are gifts with a second life as heirlooms — jewellery, keepsakes and cultural pieces that mean more the older she gets.",
        image: "/img/gifts-for-her/daughter",
        art: { hue: 20, motif: "cross" },
      },
      {
        slug: "friend",
        title: "Friend",
        icon: "👩",
        tagline: "For the friend who is basically family.",
        heading: "Gifts for a Friend",
        intro:
          "Friend gifts should be warm and low-pressure. These work for a birthday, a thank-you, or turning up at her place without a reason.",
        image: "/img/gifts-for-her/friend",
        art: { hue: 15, motif: "basket" },
      },
      {
        slug: "teen-girl",
        title: "Teen Girl",
        icon: "🎓",
        tagline: "Cultural gifts that a teenager will actually use.",
        heading: "Gifts for Teen Girls",
        intro:
          "The trick with teenagers is choosing something cultural that does not feel like homework. These lean modern — jewellery, personalised pieces and things she can wear or show a friend.",
        image: "/img/gifts-for-her/teen-girl",
        art: { hue: 320, motif: "rays" },
      },
      {
        slug: "young-girl",
        title: "Young Girl",
        icon: "🧒",
        tagline: "Playful gifts with a thread back to home.",
        heading: "Gifts for Young Girls",
        intro:
          "For younger children, the best cultural gifts are the ones that get handled: books, colour, music and things that survive being loved hard.",
        image: "/img/gifts-for-her/young-girl",
        art: { hue: 35, motif: "basket" },
      },
      {
        slug: "grandma",
        title: "Grandma",
        icon: "👵",
        tagline: "For Emaye, who deserves the good version.",
        heading: "Gifts for Grandma",
        intro:
          "Gifts for a grandmother work best when they are comfortable, useful and unmistakably chosen for her. Photographs and coffee do a lot of work here.",
        image: "/img/gifts-for-her/grandma",
        art: { hue: 10, motif: "vessel" },
      },
    ],
  },
  {
    slug: "gifts-for-him",
    title: "Gifts for Him",
    icon: "👔",
    tagline: "Gift ideas for dads, husbands, brothers, sons, friends and more.",
    heading: "Gifts for Him",
    intro: "Find something he will actually use, for the men in your life.",
    childLabel: "Recipients",
    art: { hue: 200, motif: "arch" },
    inNav: true,
    image: "/img/categories/gifts-for-him",
    subcategories: [
      {
        slug: "dad",
        title: "Dad",
        icon: "👨",
        tagline: "For the man who says he does not want anything.",
        heading: "Best Gifts for Dad",
        intro:
          "He will say not to spend money on him. Buy him the good coffee equipment anyway — these are gifts that quietly upgrade something he does every day.",
        image: "/img/gifts-for-him/dad",
        art: { hue: 205, motif: "vessel" },
      },
      {
        slug: "husband-partner",
        title: "Husband / Partner",
        icon: "💍",
        tagline: "Personal gifts that are not another tie.",
        heading: "Gifts for Your Husband or Partner",
        intro:
          "These favour things with some permanence — leather, wood, engraving — over novelty that ends up in a drawer.",
        image: "/img/gifts-for-him/husband-partner",
        art: { hue: 210, motif: "cross" },
      },
      {
        slug: "boyfriend",
        title: "Boyfriend",
        icon: "❤️",
        tagline: "Considered, not overwhelming.",
        heading: "Gifts for Your Boyfriend",
        intro:
          "Good early-relationship gifts are specific to him rather than expensive. These ideas suit birthdays, anniversaries and holidays alike.",
        image: "/img/gifts-for-him/boyfriend",
        art: { hue: 215, motif: "weave" },
      },
      {
        slug: "brother",
        title: "Brother",
        icon: "👬",
        tagline: "For the one who will roast you for the wrapping.",
        heading: "Gifts for Your Brother",
        intro:
          "Brothers are forgiving recipients but hard to surprise. These ideas skew practical, cultural, or funny enough to earn a photo in the family group chat.",
        image: "/img/gifts-for-him/brother",
        art: { hue: 220, motif: "rays" },
      },
      {
        slug: "son",
        title: "Son",
        icon: "👦",
        tagline: "Gifts that carry the culture forward.",
        heading: "Gifts for Your Son",
        intro:
          "Whether he is eight or twenty-eight, these are gifts with a thread back to home — keepsakes, cultural pieces and things worth keeping.",
        image: "/img/gifts-for-him/son",
        art: { hue: 195, motif: "cross" },
      },
      {
        slug: "friend",
        title: "Friend",
        icon: "👨",
        tagline: "Easy gifts for the friend you owe one.",
        heading: "Gifts for a Friend",
        intro:
          "Low-stakes, high-warmth gifting: coffee, good-looking desk objects, and things that are pleasant to receive without obligating anybody.",
        image: "/img/gifts-for-him/friend",
        art: { hue: 190, motif: "basket" },
      },
      {
        slug: "teen-boy",
        title: "Teen Boy",
        icon: "🎓",
        tagline: "Cultural gifts that pass the teenage test.",
        heading: "Gifts for Teen Boys",
        intro:
          "Aim for things he can wear, use, or put in his room without editing. Subtle cultural design beats anything that looks like a souvenir.",
        image: "/img/gifts-for-him/teen-boy",
        art: { hue: 225, motif: "rays" },
      },
      {
        slug: "young-boy",
        title: "Young Boy",
        icon: "🧒",
        tagline: "Gifts that survive being played with.",
        heading: "Gifts for Young Boys",
        intro:
          "For younger kids, choose the cultural gifts that invite handling — books, music, football and colour.",
        image: "/img/gifts-for-him/young-boy",
        art: { hue: 185, motif: "basket" },
      },
      {
        slug: "grandpa",
        title: "Grandpa",
        icon: "👴",
        tagline: "For Ababa, and the stories he tells over coffee.",
        heading: "Gifts for Grandpa",
        intro:
          "Comfort, coffee and photographs. Gifts for grandfathers work best when they are easy to use and clearly chosen with him in mind.",
        image: "/img/gifts-for-him/grandpa",
        art: { hue: 200, motif: "vessel" },
      },
    ],
  },
  {
    slug: "ethiopian-eritrean-gifts",
    title: "Ethiopian & Eritrean Gifts",
    icon: "🇪🇹",
    tagline: "Cultural gifts rooted in both traditions, under one Habesha roof.",
    heading: "Ethiopian & Eritrean Gifts",
    intro:
      "Habesha is the umbrella here, not a flattening. Some gifts are distinctly Ethiopian, some distinctly Eritrean, and many belong to both. We label them honestly rather than blurring the difference.",
    childLabel: "Collections",
    art: { hue: 100, motif: "weave" },
    inNav: false,
    image: "/img/categories/ethiopian-eritrean-gifts",
    subcategories: [
      {
        slug: "ethiopian-inspired",
        title: "Ethiopian-Inspired Gifts",
        icon: "🇪🇹",
        tagline: "Gifts drawing on Ethiopian craft, script and design.",
        heading: "Ethiopian Gift Ideas",
        intro:
          "From Amharic script jewellery to habesha kemis-inspired textiles, these gifts draw specifically on Ethiopian craft traditions.",
        art: { hue: 95, motif: "cross" },
      },
      {
        slug: "eritrean-inspired",
        title: "Eritrean-Inspired Gifts",
        icon: "🇪🇷",
        tagline: "Gifts drawing on Eritrean craft, script and design.",
        heading: "Eritrean Gift Ideas",
        intro:
          "Tigrinya script pieces, Asmara-inspired design and Eritrean craft traditions — gifts that are specifically Eritrean rather than generically Habesha.",
        art: { hue: 210, motif: "arch" },
      },
      {
        slug: "shared-cultural",
        title: "Shared Cultural Gifts",
        icon: "🤝",
        tagline: "Traditions both communities claim, gladly.",
        heading: "Shared Habesha Cultural Gifts",
        intro:
          "Coffee, incense, injera, netela and the language of hospitality belong to both traditions. These gifts sit comfortably with anyone Habesha.",
        art: { hue: 40, motif: "weave" },
      },
      {
        slug: "home-decor",
        title: "Cultural Home Décor",
        icon: "🏡",
        tagline: "Pieces that make a home read as Habesha.",
        heading: "Habesha Home Décor Gifts",
        intro:
          "Woven baskets, textile wall pieces and handcrafted objects that bring warmth and provenance into a room.",
        art: { hue: 30, motif: "basket" },
      },
      {
        slug: "jewelry",
        title: "Jewelry",
        icon: "💎",
        tagline: "Crosses, script pendants and filigree-inspired pieces.",
        heading: "Habesha Jewelry Gifts",
        intro:
          "Jewellery is the most-given cultural gift for good reason: it is personal, wearable daily, and often kept for decades.",
        art: { hue: 45, motif: "cross" },
      },
      {
        slug: "clothing-accessories",
        title: "Clothing & Accessories",
        icon: "🧣",
        tagline: "Netela, scarves and modern cultural wear.",
        heading: "Habesha Clothing & Accessory Gifts",
        intro:
          "Traditional-inspired clothing is a generous gift and a tricky one to size. These ideas favour scarves, shawls and accessories that fit everybody.",
        art: { hue: 350, motif: "weave" },
      },
    ],
  },
  {
    slug: "coffee-traditional-gifts",
    title: "Coffee & Traditional Gifts",
    icon: "☕",
    tagline: "Jebena, cups, trays and everything the buna ceremony needs.",
    heading: "Coffee & Traditional Gifts",
    intro:
      "Coffee is the centre of Habesha hospitality, and it makes for gifts that get used constantly. This is the section for anyone building — or upgrading — a coffee ceremony set.",
    childLabel: "Collections",
    art: { hue: 25, motif: "vessel" },
    inNav: false,
    image: "/img/categories/coffee-traditional-gifts",
    subcategories: [
      {
        slug: "jebena-coffee-pots",
        title: "Jebena & Coffee Pots",
        icon: "🫖",
        tagline: "The centrepiece of the ceremony.",
        heading: "Jebena & Coffee Pot Gifts",
        intro:
          "The jebena is the single most recognisable object in a Habesha kitchen. Choosing one is mostly a question of clay versus ceramic, and stovetop versus display.",
        art: { hue: 22, motif: "vessel" },
      },
      {
        slug: "coffee-cups",
        title: "Coffee Cups",
        icon: "☕",
        tagline: "Sini sets, handleless and decorated.",
        heading: "Habesha Coffee Cup Gifts",
        intro:
          "Sini cups are small, handleless and usually sold in sets of six or twelve. They break, which makes them a genuinely welcome gift.",
        art: { hue: 28, motif: "rays" },
      },
      {
        slug: "coffee-trays",
        title: "Coffee Trays",
        icon: "🪵",
        tagline: "The rekbot that holds the whole service.",
        heading: "Coffee Tray Gifts",
        intro:
          "A good tray turns a set of cups into a ceremony. Look for a rim, a stable base and a size that matches the jebena they already own.",
        art: { hue: 35, motif: "arch" },
      },
      {
        slug: "ceremony-accessories",
        title: "Ceremony Accessories",
        icon: "🔥",
        tagline: "Roasting pans, mukecha, stands and warmers.",
        heading: "Coffee Ceremony Accessory Gifts",
        intro:
          "The supporting cast: roasting pans, grinders, jebena stands and the small pieces that make a ceremony run smoothly.",
        art: { hue: 18, motif: "rays" },
      },
      {
        slug: "incense-traditional",
        title: "Incense & Traditional",
        icon: "🕯️",
        tagline: "Etan, frankincense and burners.",
        heading: "Incense & Traditional Gifts",
        intro:
          "Incense is inseparable from the coffee ceremony and from home in general. A burner plus good etan is one of the most reliable gifts on this site.",
        art: { hue: 300, motif: "vessel" },
      },
      {
        slug: "traditional-home-decor",
        title: "Traditional Home Décor",
        icon: "🧺",
        tagline: "Mesob-inspired pieces and woven work.",
        heading: "Traditional Home Décor Gifts",
        intro:
          "Woven baskets and traditional-inspired décor bring texture and provenance to a room without shouting about it.",
        art: { hue: 38, motif: "basket" },
      },
    ],
  },
  {
    slug: "personalized-gifts",
    title: "Personalized Gifts",
    icon: "✨",
    tagline: "Names in Amharic and Tigrinya, dates, photos and engraving.",
    heading: "Personalized Gifts",
    intro:
      "Personalisation is where a good gift becomes a kept one. A name in Ge'ez script, a wedding date, or a family photograph turns an ordinary object into something specific to one person.",
    childLabel: "Collections",
    art: { hue: 280, motif: "cross" },
    inNav: false,
    image: "/img/categories/personalized-gifts",
    subcategories: [
      {
        slug: "personalized-jewelry",
        title: "Personalized Jewelry",
        icon: "📿",
        tagline: "Names and dates in Amharic or Tigrinya script.",
        heading: "Personalized Jewelry Gifts",
        intro:
          "Script pendants are the most requested personalised gift we see. Get the spelling checked by a native reader before you order — engraving is not reversible.",
        art: { hue: 285, motif: "cross" },
      },
      {
        slug: "custom-mugs",
        title: "Custom Mugs",
        icon: "🍵",
        tagline: "Everyday objects with something personal on them.",
        heading: "Custom Mug Gifts",
        intro:
          "A mug is a low-risk personalised gift: inexpensive, used daily, and forgiving if the recipient's taste is a mystery to you.",
        art: { hue: 200, motif: "vessel" },
      },
      {
        slug: "photo-gifts",
        title: "Photo Gifts",
        icon: "🖼️",
        tagline: "Family photographs, printed properly.",
        heading: "Photo Gift Ideas",
        intro:
          "For families spread across continents, a well-made photo gift carries more weight than almost anything else in this catalogue.",
        art: { hue: 15, motif: "arch" },
      },
      {
        slug: "personalized-home-decor",
        title: "Personalized Home Décor",
        icon: "🪧",
        tagline: "Family names, blessings and house signs.",
        heading: "Personalized Home Décor Gifts",
        intro:
          "Custom signs and prints work especially well as housewarming and wedding gifts, where the recipients are actively building a space.",
        art: { hue: 25, motif: "arch" },
      },
      {
        slug: "custom-clothing",
        title: "Custom Clothing",
        icon: "👕",
        tagline: "Script, slogans and family-event wear.",
        heading: "Custom Clothing Gifts",
        intro:
          "Custom clothing shines for group occasions — family reunions, weddings, graduations — where everyone wearing the same thing is the point.",
        art: { hue: 340, motif: "weave" },
      },
      {
        slug: "engraved-gifts",
        title: "Engraved Gifts",
        icon: "🔖",
        tagline: "Wood, metal and glass with a permanent mark.",
        heading: "Engraved Gift Ideas",
        intro:
          "Engraving suits milestone gifts: anniversaries, retirements and graduations, where permanence is the message.",
        art: { hue: 210, motif: "cross" },
      },
    ],
  },
];
