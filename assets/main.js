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
});


