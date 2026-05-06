(function () {
  var ACCESS_KEY = "hemmeq_access_granted";
  var ACCESS_PASSWORD = "007";

  var params = new URLSearchParams(window.location.search);
  var nextPage = params.get("next") || "index.html";

  if (sessionStorage.getItem(ACCESS_KEY) === "true") {
    window.location.replace(nextPage);
    return;
  }

  var form = document.getElementById("loginForm");
  var password = document.getElementById("password");
  var error = document.getElementById("error");

  if (!form || !password || !error) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (password.value.trim() === ACCESS_PASSWORD) {
      sessionStorage.setItem(ACCESS_KEY, "true");
      window.location.replace(nextPage);
      return;
    }
    error.textContent = "Falsches Passwort. Bitte erneut versuchen.";
  });
})();
