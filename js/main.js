(function () {

      const intro = document.getElementById("intro");
      const hero = document.getElementById("hero");
      const nav = document.getElementById("main-nav");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

      const revealTargets = document.querySelectorAll(".device-card, .printer-row, .reveal, .srv-card, .about-img-wrap, .about-content");
      const counters = document.querySelectorAll(".counter");
      let introDismissed = false;

      const formatCounter = (value, target) => {
        if (target >= 1000000) { const m = value / 1000000; return m.toFixed(m >= 0.1 ? 1 : 0) + "M+"; }
        if (target >= 1000) return Math.floor(value).toLocaleString() + "+";
        return Math.floor(value) + "+";
      };



      const dismissIntro = () => {
        if (!intro || introDismissed) return;
        introDismissed = true;
        intro.style.transition = "opacity 1s ease, transform 1s ease";
        intro.style.opacity = "0";
        intro.style.transform = "scale(1.04)";
        window.setTimeout(() => { intro.style.display = "none"; if (hero) hero.classList.add("visible"); }, 1000);
      };

      if (prefersReducedMotion) {
        if (intro) intro.style.display = "none";
        if (hero) hero.classList.add("visible");
        introDismissed = true;
      } else {
        window.setTimeout(dismissIntro, 3200);
        document.addEventListener("click", dismissIntro);
        document.addEventListener("keydown", dismissIntro);
      }

      window.addEventListener("scroll", () => { if (nav) nav.classList.toggle("scrolled", window.scrollY > 50); }, { passive: true });
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 50);

      if (prefersReducedMotion) {
        revealTargets.forEach((t) => t.classList.add("in-view"));
      } else {
        const ro = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }); }, { threshold: 0.12 });
        revealTargets.forEach((t) => ro.observe(t));
      }

      if (prefersReducedMotion) {
        counters.forEach((el) => { const t = Number(el.dataset.target || "0"); el.textContent = formatCounter(t, t); el.dataset.started = "true"; });
      } else {
        const co = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
            if (!entry.isIntersecting || el.dataset.started === "true") return;
            el.dataset.started = "true";
            const target = Number(el.dataset.target || "0");
            const startTime = performance.now();
            const animate = (now) => {
              const t = Math.min((now - startTime) / 1800, 1);
              const eased = 1 - Math.pow(1 - t, 4);
              el.textContent = formatCounter(target * eased, target);
              if (t < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          });
        }, { threshold: 0.3 });
        counters.forEach((c) => co.observe(c));
      }

      if (!isCoarsePointer && !prefersReducedMotion) {
        document.querySelectorAll(".device-card").forEach((card) => {
          let tiltRAF = 0, lastEvent = null;
          const paintTilt = () => {
            if (!lastEvent) { tiltRAF = 0; return; }
            const rect = card.getBoundingClientRect();
            const x = ((lastEvent.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((lastEvent.clientY - rect.top) / rect.height - 0.5) * 2;
            card.style.transform = "rotateY(" + (x * 12) + "deg) rotateX(" + (-y * 8) + "deg) scale(1.02)";
            tiltRAF = 0;
          };
          card.addEventListener("mousemove", (e) => { lastEvent = e; if (!tiltRAF) tiltRAF = requestAnimationFrame(paintTilt); }, { passive: true });
          card.addEventListener("mouseleave", () => { lastEvent = null; card.style.transform = ""; });
        });
      }

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;
          const target = document.querySelector(href);
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      // Mobile Menu Logic
      const mobileToggle = document.getElementById('mobile-menu-toggle');
      const mobileClose = document.getElementById('mobile-menu-close');
      const mobileDrawer = document.getElementById('mobile-drawer');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      
      const openDrawer = () => {
        if (!mobileDrawer) return;
        mobileDrawer.classList.remove('hidden');
        mobileDrawer.classList.add('flex');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => {
          mobileDrawer.classList.remove('opacity-0');
          mobileDrawer.classList.add('opacity-100');
        });
      };

      const closeDrawer = () => {
        if (!mobileDrawer) return;
        mobileDrawer.classList.remove('opacity-100');
        mobileDrawer.classList.add('opacity-0');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
          mobileDrawer.classList.add('hidden');
          mobileDrawer.classList.remove('flex');
        }, 300);
      };

      if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
      if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
      mobileLinks.forEach((link) => {
        link.addEventListener('click', closeDrawer);
      });

      // Carousel Logic
      const carousel = document.getElementById('services-carousel');
      if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        let currentSlide = 0;
        let autoplayInterval = null;

        const carouselTrack = document.getElementById('carousel-track');
        
        const goToSlide = (index) => {
          if (index < 0) index = slides.length - 1;
          if (index >= slides.length) index = 0;
          
          slides[currentSlide].classList.remove('active');
          dots[currentSlide].classList.remove('active');
          
          currentSlide = index;
          
          slides[currentSlide].classList.add('active');
          dots[currentSlide].classList.add('active');
          
          carousel.setAttribute('data-active', currentSlide);

          slides.forEach((slide, i) => {
            slide.querySelectorAll('.device-card').forEach((card) => {
              card.classList.toggle('in-view', i === currentSlide);
            });
          });
          
          if (carouselTrack) {
            const trackWidth = carouselTrack.offsetWidth;
            const slide = slides[currentSlide];
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            const targetX = (trackWidth / 2) - slideCenter;
            carouselTrack.style.transform = `translateX(${targetX}px)`;
          }
        };

        window.addEventListener('resize', () => goToSlide(currentSlide));


        const nextSlide = () => goToSlide(currentSlide + 1);
        const prevSlide = () => goToSlide(currentSlide - 1);

        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => goToSlide(index));
        });

        const startAutoplay = () => {
          if (!autoplayInterval) autoplayInterval = setInterval(nextSlide, 5000);
        };
        const stopAutoplay = () => {
          if (autoplayInterval) { clearInterval(autoplayInterval); autoplayInterval = null; }
        };

        // Initialize Limesharp carousel positioning
        // Use setTimeout to ensure DOM has rendered layout for correct offsets
        setTimeout(() => goToSlide(0), 50);

        startAutoplay();
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
      }

    })();