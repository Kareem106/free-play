# CYBERCORE DESIGN SYSTEM

This design system is inspired by high-contrast, tactical, and dystopian cyberpunk aesthetics. It features a dark UI foundation with toxic neon accents.

---

# TAILWIND CSS V4 THEME CONFIGURATION

Add the following block to your main CSS file. This configuration uses the CSS-variable-first approach introduced in Tailwind v4.

```css
@theme {
  /* --- Colors --- */
  /* Primary Neon Branding */
  --color-cyber-neon: #D1FF00;
  --color-cyber-neon-muted: #8BA300;

  /* Dark UI Foundations */
  --color-cyber-black: #05070A;      /* Sidebar & Header */
  --color-cyber-deep: #0D1117;       /* Main background */
  --color-cyber-card: #1A1F26;       /* Surface elements */
  --color-cyber-border: #2D343D;     /* Lines and Dividers */

  /* Typography & Accents */
  --color-cyber-text-muted: #94A3B8;  /* Description text */
  --color-cyber-accent: #5BC0BE;      /* Subtle UI highlights */

  /* --- Typography --- */
  /* Recommending Kanit (900 Italic) for the closest match to Neon Vanguard */
  --font-cyber: "Kanit", sans-serif;
  --font-display: "Michroma", sans-serif;

  /* --- Special Effects --- */
  --shadow-neon: 0 0 15px 2px rgba(209, 255, 0, 0.3);
}
```

---

# TYPOGRAPHY RECOMMENDATION

To achieve the Neon Vanguard look, use Google Fonts.

1. **Kanit (Weight 900 + Italic)**  
   The best all-rounder for heavy, aggressive tactical titles.

2. **Michroma**  
   Best for a squarish, techno-industrial feel (manually slant with italic).

3. **Russo One**  
   Great for a sci-fi, blocky aesthetic.

---

# USAGE EXAMPLE

```html
<h1 class="font-cyber font-black italic uppercase tracking-tighter text-5xl text-white">
  NEON <span class="text-cyber-neon">VANGUARD</span>
</h1>
```

---

# UI ELEMENTS REFERENCE

| Element | Suggested Utility Classes |
|---|---|
| Main Background | `bg-cyber-deep` |
| Sidebar/Nav | `bg-cyber-black border-r border-cyber-border` |
| Primary Button | `bg-cyber-neon text-cyber-black font-bold uppercase` |
| Secondary Button | `border border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10` |
| Body Text | `text-cyber-text-muted leading-relaxed` |
| Hero Glow | `bg-[radial-gradient(circle_at_center,_var(--color-cyber-card)_0%,_var(--color-cyber-deep)_100%)]` |

---

# VISUAL STYLING TIPS

- **Tight Tracking**  
  The reference UI uses very tight letter spacing. Always use `tracking-tighter` on display headings.

- **Neon Depth**  
  Don't just use the neon color for text. Use it for thin `1px` borders or subtle `shadow-neon` box shadows to create a glowing hardware interface feel.

- **Lowercase/Uppercase**  
  Use uppercase for tactical headers and lowercase for technical metadata or small labels to mimic common cyberpunk HUDs.