import appleGreenSmith from "../images/appleGreenSmith.png";
import avocadoHass from "../images/avocadoHass.jpg";
import carbonara from "../images/carbonara.jpg";
import chickenBreastFillets from "../images/chickenBreastFillets.jpg";
import margretta from "../images/margretta.jpg";
import pepperoniPizza from "../images/pepperoniPizza.jpg";
import salmonFillet from "../images/salmonFillet.jpg";
import vegetableStirFry from "../images/vegetableStirFry.jpg";
import caesarSalad from "../images/caesarSalad.jpg";
import chocolateCake from "../images/chocolateCake.jpg";

const foodItems = [
  {
    id: 1,
    name: "Chicken Breast Fillets",
    brand: "Hormel Black Label",
    price: 60.67,
    quantity: 1,
    total: 0,
    status: "",
    actions: "edit",
    img: chickenBreastFillets,
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    brand: "Chef's Delight",
    price: 12.99,
    quantity: 2,
    total: 0,
    status: "",
    actions: "edit",
    img: carbonara,
  },
  {
    id: 3,
    name: "Vegetable Stir-Fry",
    brand: "Organic Greens",
    price: 15.49,
    quantity: 3,
    total: 0,
    status: "",
    actions: "edit",
    img: vegetableStirFry,
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    brand: "Pizza Hut",
    price: 14.99,
    quantity: 1,
    total: 0,
    status: "",
    actions: "edit",
    img: pepperoniPizza,
  },
  {
    id: 5,
    name: "Salmon Fillet",
    brand: "FreshCatch Seafood",
    price: 18.75,
    quantity: 2,
    total: 0,
    status: "",
    actions: "edit",
    img: salmonFillet,
  },
  {
    name: "Caesar Salad",
    brand: "Salad Delights",
    price: 8.99,
    quantity: 1,
    total: 0,
    status: "",
    actions: "edit",
    img: caesarSalad,
  },
  {
    name: "Chocolate Cake",
    brand: "Sweet Delights Bakery",
    price: 22.5,
    quantity: 1,
    total: 0,
    status: "",
    actions: "edit",
    img: chocolateCake,
  },
  {
    name: "Apple Green Smith",
    brand: "Sushi Master",
    price: 28.99,
    quantity: 2,
    total: 0,
    status: "",
    actions: "edit",
    img: appleGreenSmith,
  },
  {
    name: "Avocado Hass",
    brand: "Smoky BBQ Grill",
    price: 19.99,
    quantity: 1,
    total: 0,
    status: "",
    actions: "edit",
    img: avocadoHass,
  },
  {
    name: "Margarita Cocktail",
    brand: "Cocktail Lounge",
    price: 9.75,
    quantity: 2,
    total: 0,
    status: "",
    actions: "edit",
    img: margretta,
  },
];

export default foodItems;

// You now have 10 food items in the array with working image URLs.
