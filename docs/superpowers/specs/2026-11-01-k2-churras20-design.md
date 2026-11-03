# Especificação de Design: Site Oficial Churrasco 20 Anos — República K2

## 1. Visão Geral e Objetivo
Landing page comemorativa e informativa (vitrine/convite oficial) para o **Churrasco de 20 Anos da República K2** (2006–2026), sediada em Itajubá/MG.
- **Data do Evento:** 14/11/2026 (Sábado), a partir das 12h (meio-dia).
- **Local:** Recanto das Palmeiras ([Google Maps](https://www.google.com/maps/place/Recanto+das+Palmeiras+-+Four-Bedroom+House/@-22.4459991,-45.5045967,17z/data=!4m10!3m9!1s0x94cb7c6df91d06d7:0x5586f8da692b2b54!5m2!4m1!1i2!8m2!3d-22.4459991!4d-45.5020218!16s%2Fg%2F11yn24_f24!17BQ0FF?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D)).
- **Direção Visual:** "Império da Montanha & Brasa" — estética Imperial/Monarquia combinada à imponência da montanha K2 e ao fogo de chão do churrasco.
- **Regra Tipográfica Numérica:** Utilizar exclusivamente algarismos arábicos normais (`20 Anos`, `2006–2026`, `14/11`, `12h`), sem algarismos romanos.

## 2. Sistema Visual (OKLCH + Hex)
- **Paleta de Cores (Estratégia: Committed / Drenched):**
  - `--bg-obsidian`: `oklch(0.14 0.02 18)` (`#0E0809`) — Preto carvão/obsidiana profundo.
  - `--bg-bonina`: `oklch(0.32 0.13 20)` (`#6B0F1A`) — Vermelho Bonina Imperial (cor principal da K2).
  - `--bg-bonina-deep`: `oklch(0.24 0.10 20)` (`#4A0911`) — Bonina escuro para superfícies e painéis.
  - `--gold-imperial`: `oklch(0.83 0.17 85)` (`#F5C518`) — Amarelo/Ouro Imperial (cor secundária da K2).
  - `--gold-muted`: `oklch(0.72 0.12 82)` (`#C9A23F`) — Ouro velho para molduras heráldicas e filetes.
  - `--text-primary`: `oklch(0.96 0.01 85)` (`#F9F5EB`) — Branco marfim quente com contraste > 12:1.
  - `--text-secondary`: `oklch(0.84 0.03 75)` (`#D9CBB8`) — Texto de apoio com contraste > 7:1.
- **Tipografia:**
  - Display / Títulos: `Cinzel` (pesos 600, 700, 800) — inscrições imperiais clássicas.
  - Corpo / Interface: `Archivo` (pesos 400, 500, 600, 700) — leitura clara, moderna e forte.

## 3. Seções e Conteúdo
1. **Header & Hero ("20 Anos no Topo"):**
   - Navegação superior com escudo/marca K2 e links para História, Cardápio, Atrações e Local.
   - Destaque central com `imagens/Logo Churras.png`, título "Churrasco 20 Anos — República K2", selo `14 de Novembro • A partir das 12h`, contagem regressiva em tempo real até `2026-11-14T12:00:00-03:00` e partículas de brasa em `<canvas>`.
   - Divisor geométrico com a silhueta angular do pico da montanha K2 (8.611m).
2. **A Lenda & Irmandade (2006–2026):**
   - Seção banhada em Vermelho Bonina Imperial com moldura dupla dourada.
   - Narrativa conectando a montanha K2 ("o pico mais desafiador da Terra") aos 20 anos de tradição, irmandade e gerações da República K2 desde 2006.
   - Galeria/retrato emoldurado com `imagens/Moradores.jpg`.
3. **O Banquete Real (Cardápio Completo):**
   - **Cortes & Fogo de Chão:** Destaque principal para Costela de Chão, mais Picanha, Fraldinha, Picanha Suína, Panceta, Linguiça Toscana, Coração de Galinha e Tulipinha.
   - **Guarnições & Brasa:** Queijo Coalho, Abacaxi, Batata Doce, Milho, Pimentão, Pão Francês, Berinjela, Abobrinha, Cogumelo, Alho, Maionese, Creme de Cebola, Arroz e Vinagrete.
   - **Carta de Drinks:** Sex on the Beach, Gin com Tônica, Gin Tropical, Batida (Cachaça/Vodka, leite condensado, fruta, gelo) e Caipirinha/Caipiroska, exibindo todos os ingredientes de `cardapio.txt`.
4. **Atrações & Festividades:**
   - Arte oficial `imagens/Pura Levada e Tales.jpeg` em destaque ao lado da programação:
     - **Pagode Pura Levada** (Pagode)
     - **Tales** (MPB, Rock & Sertanejo)
     - **Bingo — Show de Prêmios**
5. **O Domínio Real (Localização):**
   - Apresentação visual do **Recanto das Palmeiras** com `imagens/FotoSitio.png`, mapa interativo incorporado e botão direto para abrir a rota no Google Maps.
6. **Rodapé Imperial:**
   - Brasão K2, resumo da data/hora/local e assinatura comemorativa `República K2 • 20 Anos de História (2006–2026)`.

