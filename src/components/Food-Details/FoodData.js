const foodData = [
  // ---------------- Wafer Paav ----------------
  {
    id: 1,
    name: "Classic Wafer Paav",
    price: 60,
    image: "/images/wafer-paav.jpg",
    description: "Crispy wafer paav with fresh chutney and masala",
    category: "wafer-paav",
    available: true,
    prepTime: "15 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Butter", price: 10 }
    ]
  },
  {
    id: 2,
    name: "Mayonnaise Wafer Paav",
    price: 65,
    image: "/images/wafer-paav.jpg",
    description: "Wafer paav with creamy mayonnaise twist",
    category: "wafer-paav",
    available: true,
    prepTime: "15 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Butter", price: 10 }
    ]
  },
  {
    id: 3,
    name: "Schezwan Wafer Paav",
    price: 70,
    image: "/images/wafer-paav.jpg",
    description: "Spicy schezwan flavored wafer paav",
    category: "wafer-paav",
    available: true,
    prepTime: "15 mins",
    options: [
      { label: "Extra Schezwan Sauce", price: 15 },
      { label: "Butter", price: 10 }
    ]
  },
  {
    id: 4,
    name: "Tandoori Wafer Paav",
    price: 80,
    image: "/images/wafer-paav.jpg",
    description: "Smoky tandoori wafer paav",
    category: "wafer-paav",
    available: true,
    prepTime: "20 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Butter", price: 10 }
    ]
  },
  {
    id: 5,
    name: "Peri-Peri Wafer Paav",
    price: 85,
    image: "/images/wafer-paav.jpg",
    description: "Spicy, tangy peri-peri wafer paav",
    category: "wafer-paav",
    available: true,
    prepTime: "20 mins",
    options: [
      { label: "Extra Peri-Peri Sauce", price: 15 },
      { label: "Cheese", price: 20 }
    ]
  },
  {
    id: 6,
    name: "Cheese Wafer Paav",
    price: 90,
    image: "/images/wafer-paav.jpg",
    description: "Cheesy wafer paav for cheese lovers",
    category: "cheese-wafer",
    available: true,
    prepTime: "20 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Butter", price: 10 }
    ]
  },
  {
    id: 7,
    name: "Cheese Mayo Wafer Paav",
    price: 95,
    image: "/images/wafer-paav.jpg",
    description: "Double creamy wafer paav with cheese and mayo",
    category: "cheese-wafer",
    available: true,
    prepTime: "20 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Extra Mayo", price: 10 }
    ]
  },
  {
    id: 8,
    name: "Cheese Tandoori Wafer Paav",
    price: 100,
    image: "/images/wafer-paav.jpg",
    description: "Cheese meets smoky tandoori flavors",
    category: "cheese-wafer",
    available: true,
    prepTime: "25 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Butter", price: 10 }
    ]
  },
  {
    id: 9,
    name: "Cheese Peri-Peri Wafer Paav",
    price: 100,
    image: "/images/wafer-paav.jpg",
    description: "Cheesy, spicy & irresistible wafer paav",
    category: "cheese-wafer",
    available: true,
    prepTime: "25 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Extra Peri-Peri Sauce", price: 15 }
    ]
  },
  {
    id: 10,
    name: "Saikrupa Special Wafer Paav",
    price: 110,
    image: "/images/wafer-paav.jpg",
    description: "Our signature crowd favourite ⭐",
    category: "wafer-paav",
    available: true,
    prepTime: "25 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Butter", price: 10 },
      { label: "Extra Special Sauce", price: 25 }
    ]
  },

  // ---------------- Pizza ----------------
  {
    id: 11,
    name: "Small Bread Pizza",
    price: 120,
    image: "/images/pizza.jpg",
    description: "Mini size, full pizza taste",
    category: "pizza",
    available: true,
    prepTime: "20 mins",
    options: [
      { label: "Extra Cheese", price: 30 },
      { label: "Add Jalapenos", price: 20 }
    ]
  },
  {
    id: 12,
    name: "Classic Pizza",
    price: 130,
    image: "/images/pizza.jpg",
    description: "Classic flavours done right",
    category: "pizza",
    available: true,
    prepTime: "25 mins",
    options: [
      { label: "Extra Cheese", price: 30 },
      { label: "Add Olives", price: 20 }
    ]
  },
  {
    id: 13,
    name: "Mayonnaise Pizza",
    price: 140,
    image: "/images/pizza.jpg",
    description: "Creamy layer of deliciousness",
    category: "pizza",
    available: true,
    prepTime: "25 mins",
    options: [
      { label: "Extra Cheese", price: 30 },
      { label: "Add Mayo", price: 15 }
    ]
  },
  {
    id: 14,
    name: "Schezwan Pizza",
    price: 145,
    image: "/images/pizza.jpg",
    description: "Spicy desi pizza twist",
    category: "pizza",
    available: true,
    prepTime: "25 mins",
    options: [
      { label: "Extra Schezwan Sauce", price: 20 },
      { label: "Extra Cheese", price: 30 }
    ]
  },
  {
    id: 15,
    name: "Tandoori Pizza",
    price: 160,
    image: "/images/pizza.jpg",
    description: "Smoky, bold & flavourful",
    category: "pizza",
    available: true,
    prepTime: "30 mins",
    options: [
      { label: "Extra Cheese", price: 30 },
      { label: "Add Jalapenos", price: 20 }
    ]
  },
  {
    id: 16,
    name: "Peri-Peri Pizza",
    price: 160,
    image: "/images/pizza.jpg",
    description: "Fiery peri-peri punch",
    category: "pizza",
    available: true,
    prepTime: "30 mins",
    options: [
      { label: "Extra Cheese", price: 30 },
      { label: "Extra Peri-Peri Sauce", price: 20 }
    ]
  },
  {
    id: 17,
    name: "Extra Cheese Loaded Pizza",
    price: 170,
    image: "/images/pizza.jpg",
    description: "Loaded with extra cheese love",
    category: "pizza",
    available: true,
    prepTime: "30 mins",
    options: [
      { label: "Extra Cheese", price: 30 },
      { label: "Add Olives", price: 20 }
    ]
  },
  {
    id: 18,
    name: "Saikrupa Special Pizza",
    price: 180,
    image: "/images/pizza.jpg",
    description: "House special, extra delicious 🍕",
    category: "pizza",
    available: true,
    prepTime: "30 mins",
    options: [
      { label: "Extra Cheese", price: 30 },
      { label: "Add Jalapenos", price: 20 },
      { label: "Extra Special Sauce", price: 25 }
    ]
  },

  // ---------------- Sandwich ----------------
  {
    id: 19,
    name: "Classic Sandwich",
    price: 80,
    image: "/images/sandwich.jpg",
    description: "Simple, fresh & filling",
    category: "sandwich",
    available: true,
    prepTime: "10 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Add Mayo", price: 10 }
    ]
  },
  {
    id: 20,
    name: "Mayonnaise Sandwich",
    price: 85,
    image: "/images/sandwich.jpg",
    description: "Smooth, creamy & tasty",
    category: "sandwich",
    available: true,
    prepTime: "10 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Add Mayo", price: 10 }
    ]
  },
  {
    id: 21,
    name: "Schezwan Sandwich",
    price: 90,
    image: "/images/sandwich.jpg",
    description: "Spicy street-style sandwich",
    category: "sandwich",
    available: true,
    prepTime: "12 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Add Mayo", price: 10 }
    ]
  },
  {
    id: 22,
    name: "Tandoori Sandwich",
    price: 100,
    image: "/images/sandwich.jpg",
    description: "Grilled with smoky spices",
    category: "sandwich",
    available: true,
    prepTime: "12 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Add Mayo", price: 10 }
    ]
  },
  {
    id: 23,
    name: "Peri-Peri Sandwich",
    price: 105,
    image: "/images/sandwich.jpg",
    description: "Bold peri-peri flavour kick",
    category: "sandwich",
    available: true,
    prepTime: "12 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Extra Peri-Peri Sauce", price: 15 }
    ]
  },
  {
    id: 24,
    name: "Cheese Sandwich",
    price: 110,
    image: "/images/sandwich.jpg",
    description: "Melty cheese goodness inside",
    category: "sandwich",
    available: true,
    prepTime: "12 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Add Mayo", price: 10 }
    ]
  },
  {
    id: 25,
    name: "Saikrupa Special Sandwich",
    price: 120,
    image: "/images/sandwich.jpg",
    description: "Perfectly grilled house special 🥪",
    category: "sandwich",
    available: true,
    prepTime: "15 mins",
    options: [
      { label: "Extra Cheese", price: 20 },
      { label: "Extra Special Sauce", price: 25 }
    ]
  }
];

export default foodData;
