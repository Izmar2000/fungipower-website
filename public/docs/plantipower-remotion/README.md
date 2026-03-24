# PlantiPower ALL12 — Remotion Animaties

5 scenes, elk 1080×1080px, 30fps, 4 seconden.

## Installeren

```bash
cd plantipower-remotion
npm install
npm start
```

Dan opent Remotion Studio in je browser. Je ziet alle 5 composities.

## Renderen naar MP4

Losse scenes:
```bash
npm run render:silicium
npm run render:fosfor
npm run render:molybdeen
npm run render:zink
npm run render:ionen
```

Alles tegelijk:
```bash
npm run render:all
```

Output staat in de `out/` map.

## Scenes

| Scene | Animatie | Duur |
|-------|----------|------|
| Silicium | Komkommer vult zich van 48% → 94% | 4s |
| Fosfor | Wortelnetwerk groeit uit | 4s |
| Molybdeen | Blad kleurt van lichtgroen → diepgroen | 4s |
| Zink | Plantencel vult zich langzaam | 4s |
| Ionen | Na/Cl botsen op membraan, tellers dalen | 5s |

## Aanpassen

Alle kleuren en teksten zitten in `src/shared.ts` en bovenaan elke scene file.
Timing aanpassen: de `progress(frame, start, end)` calls in elke scene.

## Vereisten

- Node.js 18+
- npm of yarn
