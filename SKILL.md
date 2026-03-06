# Skill: Figma to React + Tailwind Pixel-Perfect

## Objetivo
Converter designs do Figma em componentes React (Functional Components) utilizando Tailwind CSS, garantindo precisão total nos espaçamentos, cores e tipografia.

## Diretrizes Técnicas (React)
1. **Estrutura**: Usar componentes funcionais com JavaScript.
2. **Props**: Extrair variações do Figma (ex: Primary, Secondary) como props do componente.
3. **Imagens**: Usar a tag `<img>` com `object-cover` ou componentes `Next/Image` se aplicável.

## Diretrizes Tailwind CSS
1. **Precisão de Espaçamento (Gap/Padding/Margin)**:
   - Se o valor do Figma existir na escala Tailwind (ex: 16px = `p-4`), usa a classe padrão.
   - Se for um valor fora da escala (ex: 13px), usa valores arbitrários: `p-[13px]`.

2. **Tipografia Exata**:
   - `font-size`: `text-[Xpx]`
   - `line-height`: `leading-[Xpx]` ou `leading-[relative]`
   - `letter-spacing`: `tracking-[Xem]` (converter % do Figma para em).

3. **Cores e Opacidade**:
   - Usar `bg-[#HEX]`, `text-[#HEX]`. 
   - Para transparências: `bg-[#HEX]/[0.1]`.

4. **Auto-Layout para Flexbox**:
   - Figma "Auto Layout" Horizontal -> `flex flex-row`.
   - Figma "Auto Layout" Vertical -> `flex flex-col`.
   - Alinhamentos: `items-center`, `justify-between`, etc.

5. **Bordas e Sombras**:
   - `border-[Xpx]`, `rounded-[Xpx]`.
   - Sombras customizadas: `shadow-[0px_4px_10px_rgba(0,0,0,0.1)]`.
   - Fazer as sombras EXATAMENTE iguais às previstas no Figma. 

## Checklist de Entrega
- O componente é responsivo? (Utilizar prefixos `md:`, `lg:` se o design prever).
- Os estados de Hover/Active estão de acordo com o protótipo?
- O código está limpo e sem redundâncias de classes?