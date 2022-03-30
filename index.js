const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

let currentIndex = 0

let image = document.querySelector(".image");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next")
let buttons = document.querySelectorAll(".bubble");

for (var i = 0; i < buttons.length; i++) {
   let index = i;
   buttons[i].addEventListener("click", function(e) {
      currentIndex = index;
      updateUI();
   });
}

previous.addEventListener("click", function(e) {
   currentIndex = currentIndex == 0 ? 5 : currentIndex - 1;
   updateUI();
});

next.addEventListener("click", function(e) {
   currentIndex = currentIndex == 5 ? 0 : currentIndex + 1;
   updateUI();
});

function updateUI() {
   image.setAttribute("src", images[currentIndex]);

   for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerText = i == currentIndex ? "^" : "O"
   }
}

updateUI();

