(() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu]");
  const nav = document.querySelector("[data-nav]");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const fallbackCopy = (value) => {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  };

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    const original = btn.textContent;
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-copy") || "";
      const done = () => {
        btn.textContent = "Copied";
        btn.classList.add("is-copied");
        window.setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("is-copied");
        }, 1600);
      };
      const write =
        navigator.clipboard && window.isSecureContext
          ? navigator.clipboard.writeText(value)
          : Promise.reject();
      const timeout = new Promise((_, reject) =>
        window.setTimeout(() => reject(new Error("clipboard-timeout")), 400)
      );
      Promise.race([write, timeout])
        .catch(() => fallbackCopy(value))
        .finally(done);
    });
  });
})();
