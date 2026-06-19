# Naeem Documentation Website

<img src="media/logo.webp" alt="Naeem Documentation Logo" width="120" />

A modern, high-performance, and mobile-first multi-page website designed for **Naeem Documentation**, a premier printing, large format plotting, and legal documentation service provider in Shah Faisal Colony, Karachi, Pakistan. 

This repository contains the complete source code for the site, featuring a premium glassmorphic visual aesthetic, hover-sensitive dropdown navigation, optimized loading performance, and direct WhatsApp customer query routing.

---

## 🚀 Key Features

* **Multi-Page Architecture:** Divided into distinct pages including Home, About, Contact, Services Hub, and 34 specific service category sub-pages (e.g., A4/A3 Photocopy, PVC Cards, Notarized Copies).
* **Mobile-First Responsive Layouts:** Optimized for all screen sizes, starting with responsive grid and typography structures for mobile viewports, upgrading seamlessly to flex and grid distributions at larger viewport breakpoints.
* **Semantic Pure CSS Dropdown:** Desktop header navigation includes a top-down hoverable glassmorphic menu showing all 7 services. On mobile, this expands into nested sub-lists inside a responsive navigation drawer.
* **Full-Card Click Interactions:** Grid boxes across the entire website act as responsive links to detail pages, not just the text link.
* **Premium Responsive Grid Layout:** Custom-built native CSS grid with square 1:1 ratio service preview images, matching card aspect ratios, and full-bleed image presentation with zero blank borders or gaps.
* **Homepage Contact Section Upgrade:** Integrated map wrapped in a card frame aligning symmetrically with the text column heights dynamically on desktop.
* **Production-Optimized Loading Payload:**
  * **96.5% Image Optimization:** All layout images in `media/` are optimized and converted to `.webp` format, lowering visual asset payload from ~37.4MB to ~1.3MB for near-instant rendering.
  * **Tailwind CSS CDN Removal:** Replaced Tailwind CSS compile-on-load CDNs with a custom, lightweight CSS grid/flex system in `style.css` to prevent layout shifts and eliminate extra script downloads.
* **Interactive Visual Enhancements:**
  * **Viewport Scroll Reveal & Stagger Animations:** Applied elegant scroll-reveal animations across all category and subservice subpages using lightweight browser `IntersectionObserver`, featuring staggered delays for grid items and photo previews.
  * **Interactive Services Carousel:** Interactive sliding showcase of flagship services with indicators and fluid animations.
  * **Live Services Ticker:** Seamlessly scrolling brand announcement bar for secondary offers.
  * **Viewport Scroll Counters:** Stats section counters dynamically animate upwards once scrolled into view.
* **WhatsApp Quick-Routing CTA:** Floating widgets and category-specific links pre-fill WhatsApp messages with custom service interest notes.

---

## 🛠️ Tech Stack

* **HTML5:** Clean, search-engine friendly semantic structure.
* **Vanilla CSS (3):** Styled with modern CSS variables, fluid responsive grids, glassmorphism filters (`backdrop-filter: blur(16px)`), custom hover states, and keyframe animations in `style.css`.
* **Vanilla JavaScript (ES6):** Handles active menu drawers, slideshow navigation, statistical counters, and menu toggles in `main.js`.
* **Google Fonts:** Outfit, Space Mono, Bebas Neue.

---

## 📂 Project Directory Structure

```text
Naeem-Documentation/
├── index.html                 # Main Homepage
├── about.html                 # About Us Page
├── contact.html               # Contact & Location Map Page
├── services.html              # Comprehensive Services Hub Page
├── css/
│   └── style.css              # Custom Stylesheet (Variables, Dropdowns, Grids)
├── js/
│   └── main.js                # Core JS logic (Ticker, counters, mobile menu)
├── media/
│   ├── favicon.svg            # Browser tab icon
│   ├── logo.webp              # Brand identity mark
│   └── *.webp                 # Compressed service showcase WebP images
└── services/                  # Category-specific Service Sub-Pages
    ├── black-and-white.html
    ├── color-printing.html
    ├── plotter-printing.html
    ├── legal-documentation.html
    ├── identity-services.html
    ├── finishing-services.html
    ├── additional-services.html
    ├── black-and-white/       # Detailed subservice HTML files
    ├── color-printing/
    ├── plotter-printing/
    ├── legal-documentation/
    ├── identity-services/
    ├── finishing-services/
    └── additional-services/
```

---

## ⚙️ Architecture & Design Decisions

### Tailwind Removal & Custom CSS Architecture
To maximize load speeds and remove dependency on runtime script compilations, Tailwind CSS class styles were converted to native CSS rules inside `css/style.css`. Lightweight selectors (e.g. `.btn-inquire`, `.btn-quote`, `.srv-card`) utilize CSS custom variables to handle consistent theme token overrides (`--gold`, `--navy`, `--navy2`, etc.).

### Clickable Card Box Overlay Pattern
Instead of wrapping complex card layouts inside `<a>` anchors (which is semantically noisy), an absolute-positioned overlay `::after` pseudo-element is bound to the `.srv-link` selector. Setting the link element to `position: static` forces the context node to resolve to the parent `.srv-card` (which is `position: relative`). This spreads the clickable link across the entire card boundary while keeping the text and layout flow in place.

### Full-Bleed 1:1 Media Cards
Card images stretch cleanly to the outer borders using negative horizontal and vertical margins matching the parent card's padding boundaries (`margin: -2.5rem -2rem 1.5rem -2rem` on desktop). Overriding `width: 100%` ensures the image uses its full border-box layout width (`calc(100% + 4rem)`).

---

## 💻 Local Setup & Development

To view the website locally, run a static file server in the project directory:

```bash
# Serve locally using node serve
npx serve

# Or using python's built-in server
python -m http.server 3000
```

Open `http://localhost:3000` in your web browser.

---

## 📞 Contact Information

**Naeem Documentation**
* **Address:** Plot No. 3/31-A, Near Red Oven Restaurant, Shah Faisal Colony No. 3, Karachi-75230, Pakistan
* **Phone:** [+92 315 8157721](tel:+923158157721)
* **Email:** [naeemdocumentation@gmail.com](mailto:naeemdocumentation@gmail.com)
* **WhatsApp:** Direct contact via floating widget
* **Hours:** Monday to Sunday, 09:00 AM - 02:00 AM

---

## 📄 License

The website and content belong to [**Naeem Documentation**](https://naeemdocumentation.com).
The codebase and repository are maintained by [**Abdul Hayy Khan**](https://www.linkedin.com/in/abdulhayykhan/).

---

**Built with ❤️ by [**Abdul Hayy Khan**](https://www.linkedin.com/in/abdulhayykhan/)**
