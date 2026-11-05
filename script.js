// Mobile menu
var sidebar = document.getElementById("sidebar");
var btn = document.querySelector(".menu-btn");
if (sidebar && btn) {
  btn.addEventListener("click", function () {
    var open = sidebar.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
}

// Contact form: opens the visitor's email app with the message filled in
var form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var body = d.get("message") + "\n\nFrom: " + d.get("first") + " " + d.get("last") +
      "\nEmail: " + d.get("email") + (d.get("phone") ? "\nPhone: " + d.get("phone") : "");
    var subject = "Portfolio message from " + d.get("first") + " " + d.get("last");
    window.location.href = "mailto:daiyaanhoffman81@gmail.com?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    document.getElementById("form-note").textContent = "Opening your email app. If nothing opens, email me directly at daiyaanhoffman81@gmail.com.";
  });
}
