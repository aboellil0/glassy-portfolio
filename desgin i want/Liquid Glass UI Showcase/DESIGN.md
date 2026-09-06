---
name: Liquid Onyx
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393d'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343439'
  on-surface: '#e3e2e7'
  on-surface-variant: '#c5c6ca'
  inverse-surface: '#e3e2e7'
  inverse-on-surface: '#2f3035'
  outline: '#8f9194'
  outline-variant: '#44474a'
  surface-tint: '#c5c6c9'
  primary: '#ffffff'
  on-primary: '#2e3133'
  primary-container: '#e1e2e5'
  on-primary-container: '#626567'
  inverse-primary: '#5c5f61'
  secondary: '#c0c6d7'
  on-secondary: '#2a313e'
  secondary-container: '#404755'
  on-secondary-container: '#aeb5c6'
  tertiary: '#ffffff'
  on-tertiary: '#002681'
  tertiary-container: '#dce1ff'
  on-tertiary-container: '#345ad4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e2e5'
  primary-fixed-dim: '#c5c6c9'
  on-primary-fixed: '#191c1e'
  on-primary-fixed-variant: '#44474a'
  secondary-fixed: '#dce2f4'
  secondary-fixed-dim: '#c0c6d7'
  on-secondary-fixed: '#151c28'
  on-secondary-fixed-variant: '#404755'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b4'
  background: '#121317'
  on-background: '#e3e2e7'
  surface-variant: '#343439'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3rem
---

## Brand & Style
This design system embodies futuristic tactile minimalism and hyper-refined glassmorphism, inspired by high-end liquid optics, smooth optical lenses, and luminous frosted crystal floating in deep obsidian space. It projects an aura of precision, quiet luxury, and cutting-edge craft.

The aesthetic marries ultra-deep dark canvases with milky, semi-translucent glass membranes. Surfaces are not simply transparent overlays; they feature multi-layered specular reflections, diffuse edge glows, and heavy refractive backdrops (`backdrop-filter: blur(28px)` to `blur(40px)`). The emotional resonance is calm, frictionless, tactile, and premium, designed for spatial computing, luxury fintech, media interfaces, and next-generation creative tools.

## Colors
The palette balances pitch-dark nocturnal foundations with luminous, ethereal frosts and surgical silver accents.

- **Foundational Dark:** `#0D0E12` forms the void canvas, accompanied by `#14161D` for baseline surface elevation.
- **Glass Surfaces:** Glass containers utilize variable opacities of crisp silver-white (`rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.22)`) combined with milky saturation boosts. Active pill elements and selected states step forward with translucent milky fills (`rgba(240, 242, 248, 0.65)` to `rgba(255, 255, 255, 0.85)`), transforming dark interfaces into high-contrast optical buttons.
- **Specular Rim & Frost Edge:** Dual-tier edge highlights utilize outer perimeter strokes of `rgba(255, 255, 255, 0.18)` and interior top-lit specular strokes of `rgba(255, 255, 255, 0.45)`.
- **Text & Glyphs:** Primary text floating over dark substrates shines in crisp `#F5F6F9`. When resting over illuminated or milky frosted pills (such as the active state in the reference), text and glyphs invert to deep charcoal `#16181F` for supreme optical legibility.
- **Accent:** Electric blue `#3E63DD` is reserved strictly for high-priority telemetry, focus halos, and dynamic status indicators.

## Typography
Plus Jakarta Sans is selected for its contemporary geometry, clear aperture structures, and softened terminals that mirror the curved physical contours of the glass forms. 

Headlines feature tight tracking (`-0.02em` to `-0.03em`) to anchor weight and authority against diffuse glass backgrounds. Interactive labels leverage medium to semi-bold weights with slight tracking adjustments to maintain pinpoint clarity when placed inside frosted lenses or under heavy background blurs.

## Layout & Spacing
The layout adheres to an 8-point harmonic rhythm. Because glassmorphic panels rely on physical dimensionality and translucent spillover, breathing room around floating cards is vital to prevent visual vibration and blur collision.

- **Responsive Grid:** A 12-column fluid grid system on desktop (1200px max container width, 24px gutters, 48px outer margins) condenses to an 8-column layout on tablet (16px gutters, 32px margins) and a single-column stack on mobile (16px gutters, 20px margins).
- **Surface Nesting:** Containers establish internal paddings of `1.25rem` to `1.5rem`, ensuring nested floating action pills have at minimum `0.5rem` clearance from card boundary glows.

## Elevation & Depth
Depth is created through optical physics rather than traditional cast drop shadows. Light emanates from internal refraction and environmental ambient halos.

- **Base Canvas:** The deepest matte layer (`#0D0E12`) absorbs light, acting as the negative space anchor.
- **Glass Substrate (Level 1):** Floating menus and cards utilize a multi-stop gradient background:
  `linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.08) 100%)`
  accompanied by `backdrop-filter: blur(32px) saturate(180%)`.
- **Ambient Diffusion Border:** Outer perimeter boundary has an ethereal halo shadow:
  `box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.18), 0 12px 36px -4px rgba(0, 0, 0, 0.7), 0 0 32px 2px rgba(255, 255, 255, 0.12)`.
- **Specular Lip (Level 2 Floating Pill):** Elements lifted above the glass card (such as selected rows and actions) employ:
  `background: linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(200, 206, 218, 0.65) 100%)`, 
  `box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.35)`.
- **Active State:** Tactile depression decreases the blur radius slightly (`blur(20px)`) and tightens the outer specular perimeter.

## Shapes
Shapes are defined by organic curvature and ergonomic continuous squircle forms. Sharp corners are forbidden.

- **Containers & Glass Panels:** Large parent containers apply generous radii (`1.75rem` to `2rem`) giving them the visual presence of polished pebbles or smooth optical lenses.
- **Action Buttons & Items:** Interactive elements nested inside panels utilize full pill curvature (`roundedness: 3`, using `border-radius: 9999px` or a minimum of `1rem`).
- **Internal Elements:** Micro-badges, indicators, and chips mirror this continuous fluidity, reinforcing a unified tactile language.

## Components

### Buttons & Action Pills
- **Primary / Active Glass Pill:** As highlighted in the reference artifact, the primary selection is rendered as a milky, hyper-frosted floating capsule. Fill: `linear-gradient(180deg, rgba(255, 255, 255, 0.78) 0%, rgba(220, 226, 238, 0.62) 100%)`. Inset top highlight: `1px solid rgba(255, 255, 255, 0.9)`. Text and icon color: Deep charcoal `#14161D`.
- **Ghost / Idle Row Action:** Transparent fill, shifting to `rgba(255, 255, 255, 0.08)` on hover. Text and icon color: Silver mist `#B0B7C6` resting, transitioning to pure white `#FFFFFF` on hover.

### Floating Menus & Context Cards
- Rounded rectangular frame (`border-radius: 28px`) with `backdrop-filter: blur(36px)`.
- Encased in a soft perimeter glow (`rgba(255, 255, 255, 0.14)` border with `0 0 24px rgba(255, 255, 255, 0.08)` outer bloom).
- Stacked menu items feature `8px` vertical spacing with `6px` internal padding, enabling the pill active state to glide smoothly between options.

### Inputs & Search Bars
- Recessed frosted field using `rgba(0, 0, 0, 0.35)` background with an inset shadow (`inset 0 2px 4px rgba(0, 0, 0, 0.4)`).
- Rimmed by a subtle `rgba(255, 255, 255, 0.1)` outline that brightens to `rgba(255, 255, 255, 0.35)` with an ambient white diffusion on focus.
- Placeholder text in `#687082`, typing text in `#FFFFFF`.

### Chips & Badges
- Pill-shaped miniature indicators featuring translucent fills (`rgba(255, 255, 255, 0.06)`).
- Edge highlight: `1px solid rgba(255, 255, 255, 0.15)`.
- Font size: `11px` (`label-sm`), uppercase with `0.04em` letter spacing for micro-precision.

### Checkboxes & Radio Controls
- Circular or soft-cornered glass shells.
- Unchecked: Inset border `rgba(255, 255, 255, 0.25)` over dark backdrop.
- Checked: Milky white flood fill (`rgba(255, 255, 255, 0.9)`) housing a deep onyx checkmark or inner dot.

### Modals & Dialogs
- Suspended over an ultra-deep blurred veil (`rgba(5, 6, 8, 0.7)` with `backdrop-filter: blur(16px)`).
- Card utilizes maximum glass depth with dual ambient glows to separate completely from underlying dashboard content.