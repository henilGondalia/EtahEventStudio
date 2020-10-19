function init() {
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".page");
  const backgrouds = [
    `radial-gradient(#A7451B,#260E01)`,
    `radial-gradient(#4E4342,#161616)`,
    `radial-gradient(#3c4974,#0b1230)`,
  ];

  let current = 0;
  pages[current].style.cssText = "opacity: 1; pointer-events: all";

  slides.forEach((slide, index) => {
    slide.addEventListener("click", function () {
      changeDots(this);
      nextSlide(index);
    });
  });

  function changeDots(dot) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dot.classList.add("active");
  }

  function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector(".hero .model-left");
    const nextRight = nextPage.querySelector(".hero .model-right");
    const currentLeft = currentPage.querySelector(".hero .model-left");
    const currentRight = currentPage.querySelector(".hero .model-right");
    const nextText = nextPage.querySelector(".details");
    const portfolio = document.querySelector(".portfolio");

    const t1 = new TimelineMax();
    // TO remove ability of one event while other event is running
    // onStart: function(){
    //   slides.forEach(slide => {
    //     slide.getElementsByClassName.pointerEvents = "none";
    //   })
    // },
    // onComplete: function(){
    //   slides.forEach(slide => {
    //     slide.getElementsByClassName.pointerEvents = "all";
    //   })
    // }

    t1.fromTo(currentRight, 0.3, { y: "-10%" }, { y: "-100%" })
      .fromTo(currentLeft, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2")
      .to(portfolio, 0.3, { background: backgrouds[pageNumber] })
      .fromTo(
        currentPage,
        0.3,
        { opacity: 1, pointerEvents: "all" },
        { opacity: 0, pointerEvents: "none" }
      )
      .fromTo(
        nextPage,
        0.3,
        { opacity: 0, pointerEvents: "none" },
        { opacity: 1, pointerEvents: "all" },
        "-=0.3"
      )
      .fromTo(nextRight, 0.3, { y: "-100%" }, { y: "-10%" }, "-=0.6")
      .fromTo(nextLeft, 0.3, { y: "-100%" }, { y: "10%" }, "-=0.2")
      .set(nextLeft, { clearProps: "all" })
      .set(nextRight, { clearProps: "all" });

    current = pageNumber;
  }

  const hamberger = document.querySelector(".menu");
  const logo = document.querySelectorAll(".logo path");
  const hambergerLines = document.querySelectorAll(".menu line");
  const navOpen = document.querySelector(".nav-open");
  const contact = document.querySelector(".contact");
  const social = document.querySelector(".social");

  const tl = new TimelineMax({ paused: true, reversed: true });
  tl.to(navOpen, 0.5, { y: 0 })
    .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.1")
    .fromTo(social, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.5")
    .fromTo(logo, 0.2, { fill: "white" }, { fill: "black" }, "-=1")
    .fromTo(
      hambergerLines,
      0.2,
      { stroke: "white" },
      { stroke: "black" },
      "-=1"
    );

  hamberger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
}
init();
