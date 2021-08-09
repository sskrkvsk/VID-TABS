const about = document.querySelector(".about");

const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  // console.log(e); - "e" stand for Event. In our case MouseEvent
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// i DID it actually. But that code under is pretty shit

// buttons.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     const btnId = e.currentTarget.dataset.id;
//     if (btnId === "history") {
//       aboutContent[2].classList.remove("active");
//       aboutContent[1].classList.remove("active");
//       aboutContent[0].classList.add("active");

//       buttons[2].classList.remove("active");
//       buttons[1].classList.remove("active");
//       buttons[0].classList.add("active");
//     } else if (btnId === "vision") {
//       aboutContent[2].classList.remove("active");
//       aboutContent[0].classList.remove("active");
//       aboutContent[1].classList.add("active");

//       buttons[2].classList.remove("active");
//       buttons[0].classList.remove("active");
//       buttons[1].classList.add("active");
//     } else if (btnId === "goals") {
//       aboutContent[1].classList.remove("active");
//       aboutContent[0].classList.remove("active");
//       aboutContent[2].classList.add("active");

//       buttons[0].classList.remove("active");
//       buttons[1].classList.remove("active");
//       buttons[2].classList.add("active");
//     }
//   });
// });
