let image = document.querySelector(".image");
let name = document.querySelector(".name");
let price = document.querySelector(".price");
let create = document.querySelector(".create");
create.addEventListener("click", () => {
  if (!name.value.trim() || !image.value.trim() || !price.value.trim()) {
    alert("false");
    return;
  }
  let objFoods = {
    foodName: name.value,
    foodImage: image.value,
    foodPrice: price.value,
    id: Date.now(),
  };
  let data = JSON.parse(localStorage.getItem("foods")) || [];
  data.push(objFoods);
  localStorage.setItem("foods", JSON.stringify(data));
  image.value = "";
  name.value = "";
  price.value = "";
});
