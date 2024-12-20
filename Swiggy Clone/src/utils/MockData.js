let resList = [
  {
    id: "154840",
    name: "Anand",
    cloudinaryImageId: "virdsxocivnjsi71vsys",
    locality: "J Road",
    areaName: "Bistupur",
    costForTwo: "₹299 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.6,
    veg: true,
    deliveryTime: 22,
    type: "South Indian",
    cost: 299,
  },
  {
    id: "124500",
    name: "Gopal Dosa",
    cloudinaryImageId: "uupjv2huavtgbym4rq3x",
    locality: "Jublee Park Gate",
    areaName: "Sakchi",
    costForTwo: "₹199 for two",
    cuisines: ["South Indian"],
    avgRating: 4.0,
    veg: true,
    deliveryTime: 15,
    cost: 199,
  },
  {
    id: "115931",
    name: "Dosa Hut",
    cloudinaryImageId: "vbzect1qd3hwa7bcvfrb",
    locality: "Aambagan Rd",
    areaName: "Ambagan",
    costForTwo: "₹199 for two",
    cuisines: ["South Indian", "Chinese", "Street Food"],
    avgRating: 3.8,
    veg: true,
    deliveryTime: 19,
    cost: 199,
  },
  {
    id: "109771",
    name: "Anandam",
    cloudinaryImageId: "p1h5hzoyiazrn2dy1z0j",
    locality: "New Sitaram Dera",
    areaName: "Bhalubasa",
    costForTwo: "₹199 for two",
    cuisines: ["South Indian", "North Indian"],
    avgRating: 4.5,
    deliveryTime: 19,
    cost: 199,
  },
  {
    id: "785270",
    name: "Barbeque Nation",
    cloudinaryImageId: "da9e6dc00745e08c060d2c7dc25e780c",
    locality: "Jamshedpur Sadar",
    areaName: "SINGHBHUM",
    costForTwo: "₹600 for two",
    cuisines: ["Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
    avgRating: 4.1,
    deliveryTime: 35,
    cost: 600,
  },
  {
    id: "801484",
    name: "Makhani Darbar",
    cloudinaryImageId: "c583da4b69d264ffe705e5918fad0e98",
    locality: "Bistupur",
    areaName: "Contractors Area",
    costForTwo: "₹500 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Beverages",
      "Desserts",
    ],
    avgRating: 3.8,
    deliveryTime: 35,
    cost: 500,
  },
  {
    id: "785268",
    name: "Dum Safar Biryani",
    cloudinaryImageId: "3cb695e25c8c351a51dbe19c7eaa438a",
    locality: "Jamshedpur Sadar",
    areaName: "SINGHBHUM",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Kebabs", "Tandoor", "Indian", "Desserts"],
    avgRating: 4.3,
    deliveryTime: 22,
    cost: 500,
  },
  {
    id: "387674",
    name: "Biggies Burger",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/815aed07-d7ef-4ec9-9baf-e872b85f79d8_387674.jpg",
    locality: "Outer Circle Road",
    areaName: "Bistupur",
    costForTwo: "₹300 for two",
    cuisines: ["Burgers", "Fast Food"],
    avgRating: 3.7,
    deliveryTime: 26,
    cost: 300,
  },
  {
    id: "637222",
    name: "Goila Butter Chicken",
    cloudinaryImageId: "5e19832da032dd69547565e27104706f",
    locality: "KALI MATI ROAD",
    areaName: "Sakchi",
    costForTwo: "₹600 for two",
    cuisines: ["North Indian", "Biryani", "Mughlai"],
    avgRating: 3.4,
    deliveryTime: 25,
    cost: 600,
  },
  {
    id: "174586",
    name: "Dasaprakash",
    cloudinaryImageId: "ntq6peev9i3kstdmvucj",
    areaName: "Bistupur",
    costForTwo: "₹299 for two",
    cuisines: [
      "South Indian",
      "North Indian",
      "Thalis",
      "Chinese",
      "Continental",
    ],
    avgRating: 3.6,
    veg: true,
    deliveryTime: 36,
    cost: 299,
  },
  {
    id: "522711",
    name: "Veg Meals by Lunchbox",
    cloudinaryImageId: "nsuzahfadmdypj7r70sd",
    locality: "Contractors Area",
    areaName: "Bistupur",
    costForTwo: "₹200 for two",
    cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
    avgRating: 4.4,
    deliveryTime: 30,
    cost: 200,
  },
  {
    id: "640342",
    name: "Faasos Signature Wraps & Rolls",
    cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
    locality: "Contractors Area",
    areaName: "Bistupur",
    costForTwo: "₹350 for two",
    cuisines: ["Fast Food", "Snacks", "North Indian", "Desserts", "Beverages"],
    avgRating: 4.3,
    deliveryTime: 30,
    cost: 350,
  },
  {
    id: "861618",
    name: "Pastas By Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/3065f36b-6cfa-4940-8efa-ec0adfe970d3_861618.JPG",
    locality: "Kalimati Road",
    areaName: "Sakchi",
    costForTwo: "₹400 for two",
    cuisines: ["Pastas"],
    avgRating: 3.7,
    deliveryTime: 35,
    cost: 400,
  },
  {
    id: "293915",
    name: "Subway",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/33591118-afa8-493c-ae5f-d53a359ed89b_293915.jpg",
    locality: "Contractors Area",
    areaName: "Bistupur",
    costForTwo: "₹350 for two",
    cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 4.4,
    deliveryTime: 35,
    cost: 350,
  },
  {
    id: "522710",
    name: "The Good Bowl",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/95a30ac3-9672-44ff-be7b-1b0ddda7858c_522710.jpg",
    locality: "Contractors Area",
    areaName: "Bistupur",
    costForTwo: "₹250 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Pastas",
      "Punjabi",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.5,
    deliveryTime: 35,
    cost: 250,
  },
  {
    id: "304303",
    name: "Cafe coffee day",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/19/c06c9d54-1e3d-4a6a-b534-cde4d462fb53_304303.JPG",
    locality: "Ambagan",
    areaName: "Sakchi",
    costForTwo: "₹400 for two",
    cuisines: [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Burgers",
      "Ice Cream",
      "Bakery",
      "Fast Food",
    ],
    avgRating: 4.4,
    deliveryTime: 32,
    cost: 400,
  },

  {
    id: "593264",
    name: "Domino's Pizza",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/61e58068-6363-4371-aadc-6fa4579789ee_593264.JPG",
    locality: "Lohar Line Road",
    areaName: "Golmuri",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    cost: 400,
    deliveryTime: 25,
  },
  {
    id: "546139",
    name: "Bikkgane Biryani",
    cloudinaryImageId: "56646c3f698b3c5ae53639c49a4725af",
    locality: "Thakur Bari Road",
    areaName: "Sakchi",
    costForTwo: "₹350 for two",
    cuisines: [
      "Biryani",
      "Hyderabadi",
      "Andhra",
      "South Indian",
      "North Indian",
      "Mughlai",
      "Kebabs",
    ],
    avgRating: 4.5,
    deliveryTime: 39,
    cost: 350,
  },
  {
    id: "449028",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/2107c9aa-4e57-4fe7-8fee-a429296e6b3b_449028.jpg",
    locality: "Kalimati Road",
    areaName: "Sakchi",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    deliveryTime: 39,
    cost: 350,
  },
  {
    id: "320227",
    name: "Kwality Walls Ice Cream and More",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/682f4b20-46b3-4085-b5ac-333022a55ca9_320227.JPG",
    locality: "Baridih",
    areaName: "Birsanagar",
    costForTwo: "₹300 for two",
    cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
    avgRating: 4.8,
    veg: true,
    deliveryTime: 39,
    cost: 300,
  },
  {
    id: "583219",
    name: "NIC Ice Creams",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/33cb4d25-cc0f-4177-ad52-b97525fb7c4f_583219.jpg",
    locality: "Near Mango Bridge",
    areaName: "Sakchi",
    costForTwo: "₹120 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.7,
    veg: true,
    deliveryTime: 17,
    cost: 120,
  },
  {
    id: "682276",
    name: "Ghousia Hotel",
    cloudinaryImageId: "f9ef5296f0fc6736eee76dd13a395659",
    locality: "Shalini Market",
    areaName: "Sakchi",
    costForTwo: "₹399 for two",
    cuisines: ["Chinese", "Fast Food", "Biryani"],
    avgRating: 4.3,
    deliveryTime: 37,
    cost: 399,
  },
  {
    id: "806077",
    name: "Champaran Meat House",
    cloudinaryImageId: "38bedc7d5e298ca6f67d12fac15e4849",
    locality: "Purbi Singhbhum",
    areaName: "Telco",
    costForTwo: "₹299 for two",
    cuisines: ["North Indian", "Bihari", "Indian"],
    avgRating: 3.9,
    deliveryTime: 23,
    cost: 299,
  },
  {
    id: "390901",
    name: "Delhi Darbar (Sakchi )",
    cloudinaryImageId: "yziuedxncvqfcolnm7to",
    locality: "Ambagan",
    areaName: "Sakchi",
    costForTwo: "₹399 for two",
    cuisines: ["Indian", "Biryani", "Tandoor", "Chinese", "rolls"],
    avgRating: 4.3,
    deliveryTime: 34,
    cost:399
  },
];

export default resList;
