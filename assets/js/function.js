function navbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navigation__container") {
      x.className += " responsive";
    } else {
      x.className = "navigation__container";
    }
  }