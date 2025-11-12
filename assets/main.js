document.addEventListener("DOMContentLoaded", () => {
	const yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());

	// Handle locked portfolio cards
	document.querySelectorAll("[data-lock='true']").forEach((el) => {
		el.addEventListener("click", (e) => {
			e.preventDefault();
			const password = el.getAttribute("data-password") || "";
			const target = el.getAttribute("data-target") || "#";
			const input = window.prompt("This case study is private. Enter password:");
			if (input === null) return;
			if (input === password) {
				window.location.href = target;
			} else {
				window.alert("Incorrect password.");
			}
		});
	});

	// Hamburger menu toggle
	const hamburger = document.querySelector(".hamburger");
	const mobileNav = document.querySelector(".mobile-nav");
	
	if (hamburger && mobileNav) {
		hamburger.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			hamburger.classList.toggle("active");
			mobileNav.classList.toggle("active");
			document.body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : "";
		});

		// Close menu when clicking a link
		const navLinks = document.querySelectorAll(".mobile-nav .nav-link");
		navLinks.forEach(link => {
			link.addEventListener("click", () => {
				hamburger.classList.remove("active");
				mobileNav.classList.remove("active");
				document.body.style.overflow = "";
			});
		});

		// Close menu when clicking outside
		mobileNav.addEventListener("click", (e) => {
			if (e.target === mobileNav) {
				hamburger.classList.remove("active");
				mobileNav.classList.remove("active");
				document.body.style.overflow = "";
			}
		});
	}

	// Google Analytics event tracking
	
	// Track clicks on brand/name (header) -> click_about
	document.querySelectorAll(".brand").forEach(el => {
		el.addEventListener("click", () => {
			if (typeof gtag !== 'undefined') {
				gtag('event', 'click_about', {
					'event_category': 'navigation',
					'event_label': 'brand_header'
				});
			}
		});
	});

	// Track clicks on "About" links in header/footer -> click_about
	document.querySelectorAll('a[href="index.html"], a[href="../index.html"]').forEach(el => {
		// Only track if it's a nav-link or footer link, not the brand
		if (el.classList.contains('nav-link') || el.closest('.footer-links')) {
			el.addEventListener("click", () => {
				if (typeof gtag !== 'undefined') {
					gtag('event', 'click_about', {
						'event_category': 'navigation',
						'event_label': el.closest('.footer-links') ? 'footer' : 'header'
					});
				}
			});
		}
	});

	// Track clicks on "Portfolio" links -> click_portfolio
	document.querySelectorAll('a[href="portfolio.html"], a[href="../portfolio.html"]').forEach(el => {
		el.addEventListener("click", () => {
			if (typeof gtag !== 'undefined') {
				gtag('event', 'click_portfolio', {
					'event_category': 'navigation',
					'event_label': el.closest('.footer-links') ? 'footer' : 
								   el.closest('.about-buttons') ? 'index_button' : 'header'
				});
			}
		});
	});

	// Track clicks on "Resume" links -> click_resume
	document.querySelectorAll('a[href="resume.html"], a[href="../resume.html"]').forEach(el => {
		el.addEventListener("click", () => {
			if (typeof gtag !== 'undefined') {
				gtag('event', 'click_resume', {
					'event_category': 'navigation',
					'event_label': el.closest('.footer-links') ? 'footer' : 
								   el.closest('.about-buttons') ? 'index_button' : 'header'
				});
			}
		});
	});

	// Track clicks on "Download Resume" button -> download_resume
	document.querySelectorAll('a[href*="resume.pdf"]').forEach(el => {
		el.addEventListener("click", () => {
			if (typeof gtag !== 'undefined') {
				gtag('event', 'download_resume', {
					'event_category': 'download',
					'event_label': 'resume_pdf'
				});
			}
		});
	});

	// Track clicks on LinkedIn -> click_linkedin
	document.querySelectorAll('a[href*="linkedin.com"]').forEach(el => {
		el.addEventListener("click", () => {
			if (typeof gtag !== 'undefined') {
				gtag('event', 'click_linkedin', {
					'event_category': 'external_link',
					'event_label': 'linkedin'
				});
			}
		});
	});

	// Track clicks on Blog -> click_blog
	document.querySelectorAll('a[href*="substack.com"]').forEach(el => {
		el.addEventListener("click", () => {
			if (typeof gtag !== 'undefined') {
				gtag('event', 'click_blog', {
					'event_category': 'external_link',
					'event_label': 'blog'
				});
			}
		});
	});

	// Track clicks on Startup/Hans -> click_hans
	document.querySelectorAll('a[href*="withhans.com"]').forEach(el => {
		el.addEventListener("click", () => {
			if (typeof gtag !== 'undefined') {
				gtag('event', 'click_hans', {
					'event_category': 'external_link',
					'event_label': 'startup'
				});
			}
		});
	});
});


