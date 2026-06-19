# Naeem Documentation Website

<img src="media/logo.webp" alt="Naeem Documentation Logo" width="120" />

A modern, high-performance, and mobile-first multi-page website designed for **Naeem Documentation**, a premier printing, large format plotting, and legal documentation service provider in Shah Faisal Colony, Karachi, Pakistan. 

This repository contains the complete source code for the site, featuring a premium glassmorphic visual aesthetic, hover-sensitive dropdown navigation, optimized loading performance, and direct WhatsApp customer query routing.

---

## 🚀 Key Features

* **Multi-Page Architecture:** Divided into distinct pages including Home, About, Contact, Services Hub, and 35+ specific service category pages.
* **Semantic pure CSS Dropdown:** Desktop header navigation includes a top-down hoverable glassmorphic menu showing all 7 services. On mobile, this expands into nested sub-lists inside a responsive navigation drawer.
* **Production-Optimized Loading Payload:**
  * **96.5% Image Optimization:** All layout images in `media/` are optimized and converted to `.webp` format, lowering visual asset payload from ~37.4MB to ~1.3MB for near-instant rendering.
  * **Tailwind CSS CDN Removal:** Replaced Tailwind CSS compile-on-load CDNs with a custom, lightweight CSS grid/flex system in `style.css` to prevent layout shifts and eliminate extra script downloads.
* **Interactive Visual Enhancements:**
  * **Optimized Cursor Follower:** Features an interactive custom cursor that automatically pauses its rendering thread (`requestAnimationFrame` loop) when the cursor is stationary to eliminate idle CPU usage.
  * **Interactive Services Carousel:** Interactive sliding showcase of flagship services with indicators and fluid animations.
  * **Live Services Ticker:** Seamlessly scrolling brand announcement bar for secondary offers.
  * **Viewport Scroll Counters:** Stats section counters dynamically animate upwards once scrolled into view.
* **G-Maps Integration:** Styled and embedded location verification iframe on contact sections.
* **WhatsApp Quick-Routing CTA:** Floating widgets and category-specific links pre-fill WhatsApp messages with custom service interest notes.

---

## 🛠️ Tech Stack

* **HTML5:** Clean, search-engine friendly semantic structure.
* **Vanilla CSS (3):** Styled with modern CSS variables, fluid responsive grids, glassmorphism filters (`backdrop-filter: blur(16px)`), custom hover states, and keyframe animations in `style.css`.
* **Vanilla JavaScript (ES6):** Handles active menu drawers, slideshow navigation, statistical counters, and thottled rendering loops in `main.js`.
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
│   └── main.js                # Core JS logic (Ticker, counters, optimized cursor loop)
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

## 📄 License

The website and content belong to [**Naeem Documentation**](https://naeemdocumentation.com).
The codebase and repository are maintained by [**Abdul Hayy Khan**](https://www.linkedin.com/in/abdulhayykhan/).

---

**Made with ❤️ by [**Abdul Hayy Khan**](https://www.linkedin.com/in/abdulhayykhan/)**
