const elNewsDiv = document.querySelector(".news__list");
const elResult = document.querySelector(".news__result-num");

elResult.textContent = daryoPostlari.length;

for (let news of daryoPostlari) {
  

  const newLi = document.createElement("li");
  const newImg = document.createElement("img");
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h5");
  const newLanguage = document.createElement("p");
  const newYear = document.createElement("p");
  const newButton = document.createElement("a");

  newLi.setAttribute("class", "card mb-3");
  newLi.style.width = "18rem";
  newImg.classList.add("card-img-top");
  newImg.setAttribute("src", news.photo);
  newDiv.classList.add("card-body");
  newTitle.classList.add("card-title");
  newLanguage.classList.add("card-text");
  newYear.classList.add("card-text");
  newButton.setAttribute("class", "btn btn-danger");
  newButton.setAttribute("href", `https://daryo.uz/${news.daryoId}`);

  newTitle.textContent = news.title;
  newLanguage.textContent = news.date;
 
  newButton.textContent ="link";
  newImg.textContent = "photo"

  elNewsDiv.appendChild(newLi);
  newLi.appendChild(newImg);
  newLi.appendChild(newDiv);
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newLanguage);
  newDiv.appendChild(newYear);
  newDiv.appendChild(newButton);
}
