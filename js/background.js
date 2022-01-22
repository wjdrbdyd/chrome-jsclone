const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// img Element 생성 후 이미지태그 body태그뒤에 붙이기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);
