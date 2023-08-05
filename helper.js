document.querySelectorAll("ul a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const menu = document.querySelector("ul");
    const checkbox = document.querySelector('input[type="checkbox"');
    event.preventDefault();
    checkbox.checked = false;

    window.location.href = link.getAttribute("href");
  });
});
