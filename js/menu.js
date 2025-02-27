let list = document.querySelector(".section");
readfood();
function readfood() {
  list.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("foods")) || [];
  data.forEach((item, indx) => {
    let section_img = document.createElement("div");
    section_img.classList.add("section-img");
    let img = document.createElement("img");
    img.src = item.foodImage;
    let section_text = document.createElement("div");
    section_text.classList.add("section-text");
    let name = document.createElement("h2");
    name.innerText = item.foodName;
    let section_text_btn = document.createElement("div");
    section_text_btn.classList.add("section-text-btn");
    let price = document.createElement("span");
    price.innerText = `$${item.foodPrice}`;
    let button = document.createElement("button");
    button.innerText = "to order";
    section_img.append(img, section_text);
    section_text.append(name, section_text_btn);
    section_text_btn.append(price, button);
    list.append(section_img);

    button.addEventListener("click", () => {
      let data = JSON.parse(localStorage.getItem("order")) || [];
      data.push(item);
      localStorage.setItem("order", JSON.stringify(data));
    });
  });
}
