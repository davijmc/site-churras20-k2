# Design System — Churrasco 20 Anos República K2

## Aesthetic Direction
**"Império da Montanha & Brasa"** — Superfícies profundas em Preto Obsidiana e Vermelho Bonina Imperial emolduradas por filetes duplos em Ouro Real, silhuetas topográficas/angulares do pico K2 e tipografia epigráfica (`Cinzel`) combinada à clareza contemporânea (`Archivo`).

## Color Palette (OKLCH)
- `--bg-obsidian`: `oklch(0.14 0.02 18)` (`#0E0809`) — Fundo principal carvão/brasa noturna.
- `--bg-obsidian-raised`: `oklch(0.18 0.03 18)` (`#180D10`) — Superfície elevada escura.
- `--bg-bonina`: `oklch(0.32 0.13 20)` (`#6B0F1A`) — Vermelho Bonina Imperial (cor principal K2).
- `--bg-bonina-deep`: `oklch(0.24 0.10 20)` (`#4A0911`) — Vermelho Bonina profundo para painéis.
- `--gold-imperial`: `oklch(0.83 0.17 85)` (`#F5C518`) — Amarelo/Ouro Imperial (cor secundária K2).
- `--gold-royal`: `oklch(0.74 0.14 82)` (`#D4AF37`) — Ouro clássico para filetes e molduras.
- `--ember-glow`: `oklch(0.65 0.20 42)` (`#E85D1A`) — Brilho quente de brasa viva.
- `--text-ivory`: `oklch(0.96 0.01 85)` (`#F9F5EB`) — Texto principal marfim claro.
- `--text-warm`: `oklch(0.85 0.03 75)` (`#DECBB6`) — Texto secundário de alto contraste.

## Typography
- **Display / Headings:** `Cinzel` (600, 700, 800), letter-spacing `0.02em` a `0.05em`, `text-wrap: balance`.
- **Body / UI:** `Archivo` (400, 500, 600, 700), `max-width: 65ch`, `text-wrap: pretty`.
- **Numbers:** Números arábicos padrão (`20`, `2006`, `2026`, `14/11`, `12h`), `font-variant-numeric: tabular-nums` no contador regressivo.

## Layout & Ornamentation
- Molduras heráldicas com filetes duplos (`border: 1px solid`) e cantoneiras geométricas inspiradas no escudo da K2.
- Divisores em SVG reproduzindo a crista angular da montanha K2 (8.611m).
- Sem cantos excessivamente arredondados (`border-radius: 4px` máximo em painéis), sem textos em gradiente e sem sombras difusas combinadas com bordas.

