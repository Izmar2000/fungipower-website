# FungiPower Design Basis 

Dit document beschrijft de vaste design-keuzes voor de FungiPower website. Dit kan dienen als stijlgids / baseline voor toekomstige updates en als naslagwerk.

## Hero Sectie & Header (De "Basis")

Deze elementen zijn definitief en moeten als de FungiPower 'Signature Style' worden beschouwd:

### 1. De "Golden Vitality" Achtergrond
- **Gradient**: `linear-gradient(135deg, #F58220 0%, #D71920 100%)`.
- **Mycelium Netwerk (SVG)**: Ligt áchter in de overige elementen (`z-0`) met pulse-animaties.
- **Transparantie Header (Sticky)**: De header-balk met navigatie begint **100% transparant** (background: `none`). Hierdoor is het mycelium-netwerk zichtbaar ín en áchter het logo en menu. Pas wanneer je scrollt, krijgt de header een vaste oranje achtergrond (`shadow-2xl` plus een vergelijkbaar gradient: `#F58220` naar `#D71920`) om leesbaarheid te waarborgen ten opzichte van latere witte secties.

### 2. Header & Logo
- **Logo Size (Belangrijk)**: Het logo is standaard fors bij het laden (`h-16 md:h-20 lg:h-24`) en bevindt zich links. Zodra ge-scrollt wordt, springt het naadloos naar een meer compacte variant (`h-10 md:h-14 lg:h-16`) zodat het geen kostbare content overlap in de weg staat.
- **Linkerkant / Padding**: Pas op met `padding`. Een vaste padding (zoals de `pt-40` op `over-ons`) is altijd nodig op andere pagina's, zodat de titel zich niet verstopt achter de grote "zwevende" menubalk. 

### 3. Glassmorphism Panel (Rechterkant Hero)
- Dit blok (met de "+14%" testresultaten) met foto's op de Home page is transparant "glass": (`bg-white/5 backdrop-blur-md` met een flinterdunne transparante border `border-white/10`).
- Gevolg: Je kijkt letterlijk dóór het informatiescherm heen, en het organische mycelium leeft en klopt op de achtergrond rustig verder. Alle cijfers/titels hierin zijn puur wit om scherp af te steken.

## Typografie en Kleuren
Zie ook `index.css` en `tailwind.config.ts`.
- **Hoofdlettertype**: Inter (varieërend van `font-medium` tot loeiharde `font-black` koppen in `uppercase`).
- **Accent Kleuren**:
  - Primary (Innovation Orange): `hsl(24, 100%, 50%)` => `#F58220`
  - Deep Red/Brown (Gradient Ends): `#D71920` (Vaak verweven via Tailwind's `from- via- to-` strings)
  - Achtergronden secties: Secondary Deep Anthracite (`hsl(210, 15%, 10%)`), puur wit (`bg-card` e.d.)
  - Footer: Oranje gradient achtergrond met white en gouden/gele hover effects (`#FFD166`). Geen grijze vlakken.

## Component Architectuur Update (V1.2)
- De basis setup gebruikt layout structuur via `src/app/layout.tsx`. De `Header` zit expliciet verwerkt buiten individuele paginas om sticky scrollgedrag (transparant -> solid) vlekkeloos te laten lopen.
- Nep testimonials (Karel v.d. Meer e.d.) en generieke placeholder data is vanaf nu permanent ge-banned.

*(Laatst geüpdatet: 25 februari 2026 door Antigravity)*
