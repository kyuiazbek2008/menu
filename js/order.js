let my_men = document.querySelector(".my-men");
console.log(my_men);
readorder();
function readorder() {
  let data = JSON.parse(localStorage.getItem("order"));
  data.forEach((item, indx) => {
    let men = document.createElement("div");
    men.classList.add("men");
    let cup = document.createElement("div");
    cup.classList.add("cup");
    let cup_img = document.createElement("div");
    cup_img.classList.add("cup-img");
    let img = document.createElement("img");
    img.classList.add("img1");
    img.src = item.foodImage;
    let cup_text = document.createElement("div");
    cup_text.classList.add("cup-text");
    let h1 = document.createElement("h1");
    h1.innerText = item.foodName;
    let p_price = document.createElement("p");
    p_price.innerText = `$${item.foodPrice}`;
    let cup_btn = document.createElement("div");
    cup_btn.classList.add("cup-btn");
    let button = document.createElement("button");
    button.innerText = "delete order";
    let cup_btn_math = document.createElement("div");
    cup_btn_math.classList.add("cup-btn-math");
    let h3 = document.createElement("h3");
    h3.innerText = "-";
    let p = document.createElement("p");
    p.innerText = "0";
    let h4 = document.createElement("h4");
    h4.innerText = "+";
    men.append(cup);
    cup.append(cup_img, cup_btn);
    cup_img.append(img, cup_text);
    cup_text.append(h1, p_price);
    cup_btn.append(button, cup_btn_math);
    cup_btn_math.append(h3, p, h4);
    my_men.append(men);
    button.addEventListener("click", () => {
      deletefood(indx);
    });
  });
}
function deletefood(id) {
  let data = JSON.parse(localStorage.getItem("order")) || [];
  data = data.filter((item, index) => item.index !== id);
  localStorage.setItem("order", JSON.stringify(data));
  men.style.display = "none";
  readorder();
}
