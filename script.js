const targetDivs = document.querySelectorAll("#info");
const targetButtons = document.querySelectorAll("#bnt");

for (let j = 0; j < targetDivs.length; j++) {
  targetDivs[j].classList.add("disabled");
};
targetDivs[0].classList.remove("disabled");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

for (let i = 0; i < targetButtons.length; i++) {
  targetButtons[i].addEventListener("click", () => {
    for (let j = 0; j < targetDivs.length; j++) {
      targetDivs[j].classList.add("disabled");
      targetButtons[j].classList.remove("current");
    };
    targetDivs[i].classList.remove("disabled");
    targetButtons[i].classList.add("current");
  })
};

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}