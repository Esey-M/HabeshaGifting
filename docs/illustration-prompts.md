# Illustration prompts

All site artwork is generated manually in ChatGPT, then ingested with
`npm run artwork`. This file holds the prompt formulas so the visual identity
stays consistent as the catalogue grows.

**Always generate at 3:2 landscape (1536x1024).** The ingest script rejects
anything else rather than cropping it.

## The two tiers

| Tier | Subject | Where it renders |
|---|---|---|
| Category / recipient | Two people, a gift being given or received | Category and subcategory cards |
| Product | The recurring woman using or wearing one product | Product cards and guide-page heroes |

Category art is flatter and more graphic. Product art has come out more
rendered. If you want them to match, push product prompts toward *flat shapes,
less shading*.

## Shared style block

Paste into every prompt.

```
STYLE: Soft textured editorial illustration, 3:2 landscape. Flat shapes with
subtle paper-grain texture, gentle soft shading, delicate thin linework. Warm
muted palette only: cream #F5F0E8, warm off-white #FBF9F6, deep burgundy
#740504, terracotta rust, sage green, brass gold, warm browns, charcoal
#1C1917. Stylized adult Habesha (Ethiopian and Eritrean) characters with warm
brown skin, defined eyebrows and lashes, small noses, natural proportions,
genuine warm expressions — never grinning at the viewer. Contemporary diaspora
home: mid-century wood furniture, houseplants, shelves, woven baskets, abstract
framed art. Any traditional textile trim must be GEOMETRIC Ethiopian tibeb —
repeating diamonds, chevrons and crosses in burgundy and gold. Keep the top-left
corner calm and empty; keep key content inside the central 84%.
```

The top-left must stay empty because a circular emoji badge is overlaid there.

## Shared negatives

```
NO text, letters, Ge'ez or Amharic script, numbers, labels, gift tags, logos or
watermarks. No paisley, floral or sari-style borders. No kente, mudcloth, Maasai
beadwork or West African patterns. No flags. No safari or rural-poverty imagery.
No photorealism, no 3D render, no Disney or cartoon-network styling, no anime,
no chibi. Five fingers per hand.
```

The paisley line matters: image models default to South Asian sari borders when
asked for Ethiopian textile trim. Tibeb is **geometric**, never floral.

## The recurring woman

Used across all product illustrations. Generate the character sheet once, keep
the file, and attach it every time — never a previously generated scene, since
generating from a generated image compounds drift.

```
THE WOMAN — she must be identical to the attached character sheet:
Habesha woman, mid-twenties. Warm deep brown skin. Long dark brown-black curly
hair, half up in a soft bun with loose curls framing her face. Almond dark eyes,
softly defined brows, small straight nose, warm natural smile. Small gold hoop
earrings and one fine gold chain necklace. Cream linen dress with a narrow
geometric tibeb border in burgundy and gold at neckline and cuffs. Same face,
same hair, same dress, every time.
```

## Product prompt

Attach the character sheet, then paste the style block, the woman block, and:

```
THE PRODUCT — reproduce it EXACTLY as described/shown:
Same shape, same proportions, same colours, same materials, same details. Do not
redesign it, restyle it, simplify it, decorate it or substitute a similar item.
Render it in the illustration style, but the object itself must be recognisably
the same product. Draw it at correct real-world scale relative to her body.

SCENE: [ONE SENTENCE — what she is doing with it and how she feels]

COMPOSITION: She is centred or slightly right of centre. Keep the top-left
corner calm and empty. Keep all key content inside the central 84% of the frame.
The product must be clearly visible and unobstructed.

HANDS: Exactly one person. Exactly two hands, both hers, five fingers each,
clearly separated, never overlapping each other or merging with the product.
```

## Known failure modes

- **The product gets redesigned.** The most common failure by far — the model
  treats the reference as inspiration and invents its own version. Check every
  output against the real listing and re-roll rather than accept it.
- **Hands.** Gift-handover poses put three or four hands at the focal point and
  reliably produce extra limbs. Avoid the handover: show the moment *after*, or
  give one person a mug to hold. Two hands doing one unambiguous thing works.
- **Scale.** Jebenas come out lamp-sized, pendants coin-sized. State real
  dimensions if it goes wrong.
- **Small jewellery** loses all detail at card size. Ask for a closer crop.
- **Ge'ez script** always renders as garbled nonsense. Never ask for text, and
  keep engraving and script pendants deliberately out of focus.

## A note on product photos as input

Feeding a seller's Amazon photo in as a reference is legally murky — those
images are copyrighted, and the Associates agreement restricts product image
use. Describing the product in words instead produces an equally good
illustration with none of that exposure, and avoids implying the drawing is a
photograph of that exact listing. Guide captions already say illustrated
products are an artist's interpretation.
