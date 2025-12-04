# Landing Page Integration Guide

## Quick Start Instructions

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Access the admin panel:**
   - Go to http://localhost:3000/admin
   - Create an admin user if you haven't already
   - Log in

3. **Create your landing page:**
   - Go to Collections > Pages
   - Click "Create New"
   - Title: "Avanti Landing Page"
   - Slug: "home" (or "landing")

4. **Add content blocks in this order:**

## Section 1: Navigation Header
**Block Type:** HTML Content
**Title:** Navigation Header

```html
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: rgb(23, 43, 82);">
  <div class="container">
    <a class="navbar-brand tooltip-info d-flex align-items-center" href="#" data-tooltip="avanti erhält den Preis „Business Innovator 2025" 🏆">
      <img src="/public/Group-172.svg" alt="avanti logo" style="max-height: 30px; width: auto; margin-right: 15px;">
      <img src="/public/DIIND_BusinessInnovator_Siegel_avanti.cx GmbH.png" alt="Business Innovator Siegel" height="100" style="max-height: 40px; width: auto;">
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item"><a class="nav-link text-white" href="#about">Über uns</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#services">Leistungen</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="preise.html">Preise</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#contactSection">Kontakt</a></li>
        <li class="nav-item">
          <a class="btn text-white ms-2" href="tel:+49(0)30/814892-121" style="background-color: #e67e22; border-radius: 25px; padding: 8px 20px; font-weight: 600;">
            +49 (0)30 / 814 892-121
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Section 2: Hero Section
**Block Type:** Avanti Hero (use the structured block)
- Title: "Für kleinere und mittlere Unternehmen"
- Subtitle: "Wir entlasten Sie bei Ihrem Kundenservice"
- Description: "avanti übernimmt alle Routineaufgaben bei Ihrer telefonischen und schriftlichen Kundenbetreuung. Menschlich, effizient, professionell. So können Sie sich auf das Wesentliche konzentrieren: die Entwicklung Ihres Geschäfts."
- CTA Text: "Erstgespräch anfragen"
- CTA URL: "#contactSection"
- Upload your hero image

## Section 3: Logo Marquee
**Block Type:** Logo Marquee (use the structured block)
- Upload your client logos

## Section 4: Testimonials
**Block Type:** Testimonials Grid (use the structured block)
- Add your three testimonials with images

## Section 5: About Section
**Block Type:** About Section (use the structured block)
- Configure with your content

## Section 6: Services Grid
**Block Type:** Services Grid (use the structured block)
- Add your 8 service items

## Section 7: Additional Services
**Block Type:** HTML Content
**Title:** Additional Services

```html
<section class="bg-main py-5">
  <div class="custom-container">
    <div class="text-center mb-4">
      <h2 class="text-white fw-bold mb-0 animate">Weitere Serviceleistungen</h2>
      <span class="orangeU mx-auto animate delay-100"></span>
    </div>
    <div class="row py-5">
      <div class="col-lg-3 p-0"></div>
      <div class="col-lg-6 p-0">
        <div class="row p-0">
          <div class="col-lg-3 col-sm-6 pt-lg-0 pt-3">
            <div class="iconContainer d-flex flex-column align-items-center animate zoom-in delay-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="hero-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#43bede" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p class="text-white text-center pt-3">24h-Notfall-Hotline</p>
            </div>
          </div>
          <!-- Add other service icons here -->
        </div>
      </div>
    </div>
  </div>
</section>
```

## Section 8: Video Section
**Block Type:** HTML Content
**Title:** Video Section

```html
<section class="bg-white py-5">
  <div class="custom-container text-center">
    <h1 class="fw-bold mb-0">Wie funktioniert avanti?</h1>
    <div class="pb-4">
      <p class="mb-0">Für mehr Information Video ansehen</p>
      <span class="orangeU mx-auto"></span>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <div class="ratio ratio-16x9 position-relative videoContainer">
          <video class="otherVideo" src="/avanti-explainer-video.mp4" type="video/mp4" poster="/Dr.-Christoph-Baumga.png" preload="none"></video>
          <img type="button" src="/cover-button.svg" alt="Video abspielen" class="playBtn position-absolute top-50 start-50 translate-middle" style="width: 3.5rem; height: 3.5rem;">
        </div>
      </div>
    </div>
  </div>
</section>
```

## Section 9: Platform Section
**Block Type:** HTML Content
**Title:** Platform Section

```html
<section class="bg-white py-4" id="platform-section">
  <div class="custom-container py-5 bg-white">
    <div class="row align-items-center" id="platform-row">
      <div class="col-lg-6 col-12" id="platform-text">
        <div class="testimonial-card">
          <div class="pb-5">
            <h1 class="fw-bold mb-0 animate fade-in">Die avanti-<br>Kundenservice-Plattform</h1>
            <span class="orangeU animate delay-100"></span>
          </div>  
          <p class="animate fade-in delay-200">Ihre Kundinnen und Kunden sollen schnell, kompetent und freundlich betreut werden. Dafür setzen wir die avanti-Kundenservice-Plattform ein.</p>
          <p class="animate fade-in delay-300">Die avanti-Kundenservice-Plattform unterstützt durch eine integrierte Wissensdatenbank, die Ihre Vorgaben enthält.</p>
        </div>
      </div>
      <div class="col-lg-6 col-12 text-center">
        <img src="/public/App_img.png" alt="" class="img-fluid rounded-4 animate slide-in-right delay-200 mb-3">
        <img src="/public/app_img2.png" alt="" class="img-fluid rounded-4 animate slide-in-right delay-200">
      </div>
    </div>
  </div>
</section>
```

## Section 10: Industries Section
**Block Type:** HTML Content
**Title:** Industries Section

```html
<section class="section-padding industries-section">
  <div class="container">
    <div class="row mb-4">
      <div class="col-12 mb-4 text-center">
        <div class="industries-header">
          <div class="eyebrow text-white fw-semibold">Unsere Branchen</div>
          <h2 class="industries-title industries-title--only text-white">avanti unterstützt kleinere und mittlere <span class="line-break">Unternehmen</span></h2>
        </div>
      </div>
    </div>
    <div class="row industries-grid">
      <div class="col-12 col-lg-4">
        <div class="d-flex align-items-start gap-3 mb-4">
          <span class="material-symbols-outlined ind-icon" aria-hidden="true">home_work</span>
          <span class="ind-label">Haus & Immobilien‑Verwaltungen</span>
        </div>
        <!-- Add other industry items -->
      </div>
    </div>
  </div>
</section>
```

## Section 11: Contact Section
**Block Type:** Contact Section (use the structured block)
- Configure with your contact form and information

## Section 12: Footer
**Block Type:** HTML Content
**Title:** Footer

```html
<footer class="site-footer">
  <div class="custom-container d-flex justify-content-between test-footer">
    <div>
      <img class="footerLogo" src="/Group-172.svg" alt="">
      <div class="d-flex mt-4 gap-4 socail-media-logos">
        <a href="https://www.facebook.com/share/1EaS9DqqDt/?mibextid=wwXIfr" target="_blank">
          <img src="/Path-117.svg" alt="">
        </a>
        <a href="https://www.instagram.com/avanti.cx?igsh=OTR2aWo5ZGVvMm1i" target="_blank">
          <img src="/Group-23.svg" alt="">
        </a>
        <a href="https://de.linkedin.com/company/avanti-cx" target="_blank">
          <img src="/Group-22.svg" alt="">
        </a>
      </div>
    </div>
    <div class="d-flex flex-row gap-4 flex-wrap test-footer-col">
      <div class="footer-col-1">
        <h3 class="footer-title mb-0">Kontakt</h3>
        <span class="orangeU"></span>
        <p class="py-3">avanti.cx GmbH Singerstraße 109<BR>10179 Berlin</p>
        <a class="text-white d-block py-3" href="tel:+49 (0)30 / 814 892-121">+49 (0)30 / 814 892-121</a>
        <a class="text-white d-block" href="mailto:info@avanti.cx">info@avanti.cx</a>
      </div>
      <div class="footer-col-2 d-flex flex-column gap-1">
        <h3 class="footer-title mb-0">Rechtliches</h3>
        <span class="orangeU"></span>
        <a class="py-3" href="impressum.html">Impressum</a>
        <a class="" href="datenschutz.html">Datenschutz</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="blue-line">
      <p class="footer-text py-3 bg-main">&copy; 2025 avanti – Ihr Service-Partner für zufriedene Kunden. All Rights Reserved.</p>
    </div>
  </div>
</footer>
```

## Important Notes:

1. **Upload your images** to Collections > Media first, then reference them in the blocks
2. **Test each section** as you add it
3. **Use structured blocks** where possible for better content management
4. **Add HTML blocks** for complex sections that don't fit the structured blocks

## Next Steps:

1. Start the dev server: `npm run dev`
2. Go to http://localhost:3000/admin
3. Create the page and add blocks one by one
4. Test at http://localhost:3000/home (or your chosen slug)
5. Upload your images and assets to the Media collection
6. Adjust styling as needed in the CSS files

Your landing page will be fully integrated and manageable through the Payload CMS admin interface!
