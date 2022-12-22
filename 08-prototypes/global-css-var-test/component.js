const titleElement = document.querySelector(".title");

if (window.innerWidth < 500) {
  titleElement.innerText = "Mobile 0-499px";
} else if (window.innerWidth < 900) {
  titleElement.innerText = "Tablet 500-899px";
} else {
  titleElement.innerText = "Desktop 900px+";
}

function changeTitle() {
  if (window.innerWidth < 500) {
    titleElement.innerText = "Mobile 0-499px";
  } else if (window.innerWidth < 900) {
    titleElement.innerText = "Tablet 500-899px";
  } else {
    titleElement.innerText = "Desktop 900px+";
  }
}

window.addEventListener("resize", changeTitle);