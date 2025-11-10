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
});


