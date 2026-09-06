We are building HabeshaGifting.com from scratch.

The root project is currently empty / we are starting from a clean project.

I want you to build a production-quality, modern editorial gift discovery website for the global Habesha community.

IMPORTANT:
Do not build this as a generic Amazon affiliate website.

The website should feel like a trusted gift discovery brand where people come to find thoughtful gifts, explore recommendations, read useful product guides, and then optionally purchase through affiliate links.

==================================================
BRAND
==================================================

Brand name:
HabeshaGifting.com

Primary brand color:
#740504

Use #740504 as the main brand/accent color throughout the design system.

The color should be used tastefully for:
- buttons
- links where appropriate
- headings/accent elements
- active navigation
- small decorative elements
- badges
- important CTAs

Do NOT make the entire website dark red.

Pair the brand color with an elegant neutral palette:
- warm/off-white backgrounds
- soft cream
- charcoal/dark text
- subtle borders
- muted secondary text

The overall visual identity should feel:
- premium
- warm
- elegant
- editorial
- modern
- culturally respectful
- trustworthy
- welcoming

Do NOT make it look:
- like Amazon
- like a dropshipping store
- like a generic affiliate site
- like a generic WordPress blog
- overly corporate
- overly stereotypical or cliché

Use subtle cultural inspiration rather than excessive cultural decoration.

==================================================
CORE WEBSITE CONCEPT
==================================================

The core user journey is:

HOMEPAGE
↓
MAIN GIFT CATEGORY
↓
SUBCATEGORY / RECIPIENT / OCCASION
↓
PRODUCT RECOMMENDATIONS
↓
PRODUCT GUIDE / ARTICLE
↓
BUY ON AMAZON

The website should make this journey extremely intuitive.

For example:

Homepage
→ ❤️ Gifts for Her
→ Mom
→ Product recommendations
→ "Ethiopian Coffee Set" product card
→ Full product guide
→ Buy on Amazon

Another example:

Homepage
→ 🎁 Gifts by Occasion
→ Wedding
→ Wedding gift recommendations
→ Product guide
→ Buy on Amazon

==================================================
HOMEPAGE STRUCTURE
==================================================

The homepage should be centered around the main gift categories.

Create a strong editorial hero at the top.

Hero:

Headline:
"Thoughtful Gifts for the Habesha in Your Life"

Supporting text:
"Discover meaningful gift ideas for Habesha family, friends and every special occasion."

Primary CTA:
"Explore Gift Ideas"

Then create a section called:

"Find the Perfect Gift"

This is the main navigation/discovery area of the homepage.

Display beautiful category cards.

Initial main categories:

🎁 Gifts by Occasion
❤️ Gifts for Her
👔 Gifts for Him
🇪🇷🇪🇹 Ethiopian & Eritrean Gifts
☕ Coffee & Traditional Gifts
✨ Personalized Gifts

Each category must be a large visual card containing:

- image
- icon or subtle visual indicator
- category title
- short description
- arrow / "Explore" action

Example:

❤️ Gifts for Her

"Thoughtful gift ideas for moms, wives, sisters, daughters, friends and more."

The entire card should be clickable.

Do not duplicate categories.

==================================================
CATEGORY NAVIGATION
==================================================

When a user clicks:

❤️ Gifts for Her

they should NOT immediately see hundreds of products.

Instead, show a beautiful intermediate category page.

Example:

# Gifts for Her

"Find something meaningful for the women in your life."

Then show recipient cards.

Recipient categories:

👩 Mom
💍 Wife / Partner
❤️ Girlfriend
👭 Sister
👧 Daughter
👩 Friend
🎓 Teen Girl
🧒 Young Girl
👵 Grandma

Each should be a card with:
- image
- title
- short description
- number of guides/products if available later
- arrow

The architecture must make it easy to add more recipient types later.

==================================================
GIFTS FOR HIM
==================================================

Create the same concept for:

👔 Gifts for Him

Possible recipient cards:

👨 Dad
💍 Husband / Partner
❤️ Boyfriend
👬 Brother
👦 Son
👨 Friend
🎓 Teen Boy
🧒 Young Boy
👴 Grandpa

Again, use cards rather than a huge list.

==================================================
GIFTS BY OCCASION
==================================================

When a user clicks:

🎁 Gifts by Occasion

show cards for:

💒 Wedding
💍 Engagement
🎂 Birthday
🎓 Graduation
👶 New Baby
🏠 Housewarming
❤️ Anniversary
🎄 Christmas / Holidays
☕ Coffee Ceremony
🎉 Celebration

Make this architecture expandable.

==================================================
ETHIOPIAN & ERITREAN GIFTS
==================================================

Create:

🇪🇷🇪🇹 Ethiopian & Eritrean Gifts

This is a broad category.

Do NOT make the entire website exclusively Ethiopian or exclusively Eritrean.

"Habesha" is the umbrella brand.

Within this section, allow content around:

- Ethiopian-inspired gifts
- Eritrean-inspired gifts
- shared cultural gifts
- traditional-inspired gifts
- cultural home décor
- jewelry
- clothing/accessories
- coffee ceremony
- celebration gifts

We should be able to create specific articles targeting Ethiopian searches and Eritrean searches while keeping the overall brand Habesha.

==================================================
COFFEE & TRADITIONAL GIFTS
==================================================

Create:

☕ Coffee & Traditional Gifts

Possible subcategories:

- Jebena / Coffee Pots
- Coffee Cups
- Coffee Trays
- Coffee Ceremony Accessories
- Incense & Traditional Accessories
- Traditional-Inspired Home Décor
- Cultural Gifts

==================================================
PERSONALIZED GIFTS
==================================================

Create:

✨ Personalized Gifts

Possible subcategories:

- Personalized Jewelry
- Custom Mugs
- Photo Gifts
- Personalized Home Décor
- Custom Clothing
- Engraved Gifts

==================================================
PRODUCT RECOMMENDATION PAGES
==================================================

After a user selects a specific subcategory, they should see a product recommendation/listing page.

For example:

Gifts for Her
→ Mom

Page:

# Best Gifts for Mom

Then display product recommendation cards.

Each product card should contain:

1. Product image
2. Product category/tag
3. Product title
4. Short useful description
5. "Best for" information where appropriate
6. Price/budget information when real data is available
7. Two separate actions:

Primary:
"Read Full Guide →"

Secondary:
"Buy on Amazon →"

The first action goes to our own product/article page.

The second action goes to the external affiliate destination.

IMPORTANT:

Do NOT invent:
- Amazon prices
- Amazon ratings
- reviews
- availability
- product specifications

For now use realistic placeholder product data and clearly structure the system so real data can be added later.

==================================================
PRODUCT DETAIL / GUIDE PAGES
==================================================

Every important recommended product should have its own useful editorial guide page.

Example:

/gift-guides/best-coffee-set-for-habesha-mom/

or an appropriate scalable URL structure.

The product guide page should include:

- product title
- large product image
- short summary
- why we recommend it
- who it is best for
- what makes it a good gift
- important considerations
- pros
- cons
- alternatives
- related products
- related gift guides
- affiliate disclosure
- prominent "Buy on Amazon" CTA

The article should NOT simply repeat an Amazon product description.

It should provide original editorial value.

==================================================
PRODUCT CARD DESIGN
==================================================

Create a reusable ProductCard component.

It should visually resemble a premium editorial recommendation card.

Structure:

[ LARGE PRODUCT IMAGE ]

CATEGORY / TAG

Product Name

Short description explaining why this is worth considering.

Optional:
Best for: Mom / Wedding / Coffee lover

Optional:
Budget: Under $50

--------------------------------

Read Full Guide →       Buy on Amazon →

The two actions must be visually distinct.

"Read Full Guide" should keep users on HabeshaGifting.com.

"Buy on Amazon" should clearly indicate that the user is leaving the site.

Do not make the Amazon button misleading.

The component must support affiliate URLs later.

==================================================
IMPORTANT CONTENT ARCHITECTURE
==================================================

Build the site so content can scale to hundreds or thousands of recommendations.

We need reusable structures for:

Category
↓
Subcategory
↓
Product recommendations
↓
Product guide/article

Do not hardcode every page separately.

Create reusable components and data/content models.

The architecture should eventually support:

- categories
- subcategories
- articles
- products
- product tags
- occasions
- recipients
- budgets
- affiliate URLs
- related products
- related articles

==================================================
DESIGN INSPIRATION
==================================================

The screenshot I provided is a visual reference for the type of editorial card layout I like.

I like the general idea of:

- large product/category imagery
- rounded cards
- elegant off-white background
- thin subtle borders
- strong typography
- generous spacing
- small uppercase category labels
- short descriptions
- clear CTAs

Do NOT copy the screenshot's branding, text, products, colors or exact design.

Use it only as inspiration for the visual quality and card-based editorial layout.

Our design must feel original and specifically branded for HabeshaGifting.com.

==================================================
HEADER
==================================================

Create a polished responsive header.

Desktop navigation:

Gifts
Occasions
For Her
For Him
Ethiopian & Eritrean
Coffee & Traditional
Gift Guides

Include:
- HabeshaGifting logo/wordmark
- search icon/input
- responsive mobile menu

Keep the header elegant and uncluttered.

==================================================
SEARCH
==================================================

The site will eventually need search.

Create a scalable search architecture.

Users should eventually be able to search:

"gift for mom"
"Habesha wedding gift"
"Ethiopian gift"
"Eritrean gift"
"coffee gift"
"gift under $50"

For the initial implementation, create the UI and architecture without overengineering the search backend.

==================================================
FOOTER
==================================================

Create a professional footer with:

- HabeshaGifting.com
- About
- Contact
- Gift categories
- Gift guides
- Privacy Policy
- Terms
- Affiliate Disclosure

Include a newsletter signup area.

==================================================
SEO
==================================================

This is a content-driven website, so SEO is extremely important.

Build with:

- clean URLs
- semantic HTML
- correct heading hierarchy
- metadata
- canonical URLs
- Open Graph metadata
- sitemap
- robots.txt
- structured data where appropriate
- breadcrumbs
- article schema
- category pages
- internal linking architecture

Do not keyword stuff.

The goal is to create genuinely useful content.

==================================================
TECH STACK
==================================================

Start from the empty project.

Use:

- Next.js
- TypeScript
- modern React
- a professional styling solution
- reusable components

Choose appropriate current stable dependencies.

Prioritize:
- SEO
- performance
- accessibility
- maintainability
- scalability

==================================================
IMPLEMENTATION WORKFLOW
==================================================

Do NOT try to build the entire website in one step.

Implement in stages.

STAGE 1:
Project foundation, architecture, design system, global layout, header and footer.

STAGE 2:
Homepage and main category cards.

STAGE 3:
Category pages and subcategory/recipient cards.

STAGE 4:
Product recommendation cards and product listing pages.

STAGE 5:
Product guide/article pages.

STAGE 6:
Search, filters and discovery UX.

STAGE 7:
SEO, structured data, performance and accessibility audit.

STAGE 8:
Final polish and production readiness.

For THIS instruction, begin with Stage 1 and Stage 2 only.

Before coding, briefly explain your proposed architecture.

Then implement it.

After implementation:

1. Run the development/build checks.
2. Fix TypeScript errors.
3. Fix lint errors.
4. Make sure the project builds successfully.
5. Tell me exactly what you created.
6. Tell me how to run it locally.

Do not proceed to Stage 3 until I give you permission.