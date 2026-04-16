# Copilot Instructions — نور الهدى للسفر والسياحة

## Project Overview

- **Purpose:** Arabic promotional website for Noor Al-Huda Travel & Tourism Agency
- **Tech stack:** Static site — plain HTML, CSS, vanilla JS (no framework/bundler)
- **Language:** Arabic (RTL layout, `dir="rtl"` on `<html>`)
- **Font:** Google Fonts — Cairo (weights 400–900)

## Directory Structure

- `index.html` — Single-page site (nav, hero, about, services, why-us, vision, contact, footer)
- `style.css` — All styles; CSS custom properties in `:root`; responsive breakpoints at 900px & 768px
- `script.js` — Navbar scroll effect, mobile menu toggle, IntersectionObserver scroll-reveal

## Conventions

- All UI text is in Arabic; keep copy consistent with the agency's branding tone
- CSS uses `var(--primary)` / `var(--gold)` tokens — change palette via `:root` only
- Sections use `.section` base class; alternate backgrounds with `.section-alt`
- Cards/components animate in via `.fade-up` + IntersectionObserver (added in JS)
- Responsive: mobile-first menu with `.menu-toggle` / `.nav-links.open`

## Notes for AI Agents

- This is a static site — open `index.html` directly in a browser, no build step needed
- When adding content, maintain RTL direction and Arabic text
- Contact form is client-side only (shows alert); replace with real backend when ready
- Placeholder contact info (phone, email) needs real values from the client
