shopsData = [
  {
    name: "Gong Cha Plaza Singapura",
    brand: "Gong Cha",
    distance: 10,
    findOnGoogle: "Click here"
  },
  {
    name: "Gong Cha City Hall",
    brand: "Gong Cha",
    distance: 15,
    findOnGoogle: "Click here"
  },
  {
    name: "Tiger Sugar Chinatown",
    brand: "Tiger Sugar",
    distance: 15,
    findOnGoogle: "Click here"
  }
];

const shopSelected = document.querySelector("select").value;

function filterShop(shopSelected) {
  const shopsToDisplay = shopsData.filter(shop => shopSelected === shop.brand);
  const shopItem = document.createElement("li");
  for (let i = 0; i < shopsToDisplay.length; i++) {
    const span = document.createElement("span");
    const shopName = shopsToDisplay[i].name;
    const shopDist = shopsToDisplay[i].distance;
    const shopOnGoogle = shopsToDisplay[i].findOnGoogle;
  }
}
