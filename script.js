// dog image
const dogImage = document.getElementById("dog-img");
// dog button
const dogBtn = document.getElementById("dog-btn");

// event listener for randomize button
dogBtn.addEventListener("click", getDogImages);

function getDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      dogImage.innerHTML = `<img src="${data.message}"/>`;
      console.log("success");
    });
}
