const restaurantList = [
  {
    id: 1,
    name: "Jammu",
    cuisine: "Rajma Chawal",
    rating: 5.0,
    deliveryTime: "35 mins",
    price: "₹180",
    image: "https://i.ytimg.com/vi/CFmQPIIODZY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAq76St6nDhbnpVFLt0r725ON9QfA" // sweets
  },
  {
    id: 2,
    name: "Sharma",
    cuisine: "North Indian",
    rating: 3.2,
    deliveryTime: "30 mins",
    price: "₹220",
    image: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5vcnRoJTIwaW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" // north indian
  },
  {
    id: 3,
    name: "Bombay",
    cuisine: "Street Food",
    rating: 4.6,
    deliveryTime: "25 mins",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc" // chaat
  },
  {
    id: 4,
    name: "Spice Hub",
    cuisine: "Sweets",
    rating: 2.5,
    deliveryTime: "40 mins",
    price: "₹260",
    image: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D" // mughlai
  },
  {
    id: 5,
    name: "Masala",
    cuisine: "South Indian",
    rating: 3.0,
    deliveryTime: "28 mins",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" // dosa
  },
  {
    id: 6,
    name: "Shahi Paneer",
    cuisine: "North Indian",
    rating: 4.3,
    deliveryTime: "32 mins",
    price: "₹200",
    image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhaGklMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D"// curry
  },
  {
    id: 7,
    name: "Biryani Co",
    cuisine: "Biryani",
    rating: 4.6,
    deliveryTime: "38 mins",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" // biryani
  },
  {
    id: 8,
    name: "Tandoor",
    cuisine: "Tandoori",
    rating: 1.2,
    deliveryTime: "36 mins",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" // tandoori
  },
  {
    id: 9,
    name: "Urban",
    cuisine: "Thali",
    rating: 4.1,
    deliveryTime: "27 mins",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" // thali
  },
  {
    id: 10,
    name: "Chai",
    cuisine: "Snacks",
    rating: 4.7,
    deliveryTime: "20 mins",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b" // chai snacks
  },
  {
    id: 11,
    name: "South Hut",
    cuisine: "Dosa",
    rating: 3.4,
    deliveryTime: "29 mins",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc" // dosa
  },
  {
    id: 12,
    name: "Punjabi",
    cuisine: "Punjabi Food",
    rating: 4.3,
    deliveryTime: "34 mins",
    price: "₹230",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be" // punjabi
  },
   {
    id: 13,
    name: "Delhi Zaika",
    cuisine: "Mughlai",
    rating: 4.6,
    deliveryTime: "33 mins",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    id: 14,
    name: "Amritsar Haveli",
    cuisine: "Punjabi",
    rating: 4.5,
    deliveryTime: "37 mins",
    price: "₹300",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be"
  },
  {
    id: 15,
    name: "Street Junction",
    cuisine: "Chaat",
    rating: 4.8,
    deliveryTime: "22 mins",
    price: "₹110",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc"
  },
  {
    id: 16,
    name: "Dosa Point",
    cuisine: "South Indian",
    rating: 4.1,
    deliveryTime: "26 mins",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    id: 17,
    name: "Kolkata Rolls",
    cuisine: "Rolls",
    rating: 4.0,
    deliveryTime: "24 mins",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 18,
    name: "Lucknow Nawab",
    cuisine: "Awadhi",
    rating: 4.6,
    deliveryTime: "40 mins",
    price: "₹320",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be"
  },
  {
    id: 19,
    name: "Veg Express",
    cuisine: "Pure Veg",
    rating: 3.6,
    deliveryTime: "21 mins",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    id: 20,
    name: "Cafe Brew",
    cuisine: "Cafe",
    rating: 4.4,
    deliveryTime: "28 mins",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
   {
    id: 21,
    name: "Paneer Plaza",
    cuisine: "Paneer",
    rating: 4.8,
    deliveryTime: "31 mins",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 22,
    name: "Chaat Bazaar",
    cuisine: "Chaat",
    rating: 3.9,
    deliveryTime: "23 mins",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 23,
    name: "Idli Express",
    cuisine: "South Indian",
    rating: 4.1,
    deliveryTime: "26 mins",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 24,
    name: "Punjab Grill",
    cuisine: "Punjabi",
    rating: 4.5,
    deliveryTime: "36 mins",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 26,
    name: "Hyderabadi Dum",
    cuisine: "Biryani",
    rating: 4.7,
    deliveryTime: "42 mins",
    price: "₹320",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 27,
    name: "Veggie Delight",
    cuisine: "Healthy Food",
    rating: 4.8,
    deliveryTime: "20 mins",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 28,
    name: "Cafe Mocha",
    cuisine: "Cafe",
    rating: 4.4,
    deliveryTime: "29 mins",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=60"
  },
];


export default  restaurantList;
