button.onclick = () => {
  if (!document.documentElement.classList.contains("dark")) {
    console.log("Hello, world!");
    document.documentElement.classList.add("dark");
  } else document.documentElement.classList.remove("dark");
};

let moonLight = document.getElementById("moon-light");
let ListItems = document.getElementById("list");

moonLight.addEventListener("click", () => {
  ListItems.classList.toggle("hidden");
});
