var link = document.querySelector(".btn-map");
var close = document.querySelector(".modal-content-close");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var mail = popup.querySelector("[name=mail]");
var other = popup.querySelector("[name=other]");
var storagelogin = localStorage.getItem("login");
var storagemail = localStorage.getItem("mail");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  if (storagelogin) {
    login.value = storagelogin;
    if (storagemail) {
      mail.value = storagemail;
      other.focus();
    }
    else {
      mail.focus();
    }
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !mail.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
    localStorage.setItem("mail", mail.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});
