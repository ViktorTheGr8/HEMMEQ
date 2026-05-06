(function () {
  var ACCESS_KEY = "hemmeq_access_granted";
  if (sessionStorage.getItem(ACCESS_KEY) === "true") {
    return;
  }

  var file = window.location.pathname.split("/").pop() || "index.html";
  if (file === "login.html") {
    return;
  }

  window.location.replace("login.html?next=" + encodeURIComponent(file));
})();
