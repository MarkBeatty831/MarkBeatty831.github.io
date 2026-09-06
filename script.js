/* Portfolio behavior: footer year + mobile menu close on navigation. */

document.addEventListener('DOMContentLoaded', function () {

  // Keep the copyright year current without editing HTML each January.
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // On mobile the menu is a CSS checkbox toggle; close it after a jump.
  var toggle = document.getElementById('nav-toggle');
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (toggle) toggle.checked = false;
    });
  });

});
