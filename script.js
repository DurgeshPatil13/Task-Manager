
const darkmode = document.querySelector(".darkmodebtn");

darkmode?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
    console.log("clicked");
});

