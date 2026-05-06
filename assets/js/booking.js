(function () {
  var modal = document.getElementById("bookingModal");
  var openButton = document.getElementById("openBooking");
  var closeButton = document.getElementById("closeBooking");
  var bookingForm = document.getElementById("bookingForm");
  var bookingStatus = document.getElementById("bookingStatus");

  if (!modal || !openButton || !closeButton || !bookingForm || !bookingStatus) {
    return;
  }

  openButton.addEventListener("click", function () {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });

  closeButton.addEventListener("click", function () {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  });

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(bookingForm);
    var body =
      "Hallo HEMMEQ,%0D%0A%0D%0AIch mochte ein Erstgesprach buchen.%0D%0A" +
      "Name: " + encodeURIComponent(formData.get("name")) + "%0D%0A" +
      "E-Mail: " + encodeURIComponent(formData.get("email")) + "%0D%0A" +
      "Datum: " + encodeURIComponent(formData.get("date")) + "%0D%0A" +
      "Uhrzeit: " + encodeURIComponent(formData.get("time"));

    window.location.href = "mailto:viktor@hemmeq.com?subject=Terminanfrage%20HEMMEQ&body=" + body;
    bookingStatus.classList.add("visible");
  });
})();
