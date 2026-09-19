const sampleListings = [
  {
    title: "Royal Palace Hotel",
    description: "Elegant hotel with spacious rooms and premium facilities.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "royal_palace_hotel",
    },
    price: 6500,
    location: "Agra",
    country: "India",
  },
  {
    title: "Forest Retreat",
    description: "Peaceful retreat surrounded by dense green forests and nature.",
    image: {
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
      filename: "forest_retreat",
    },
    price: 4200,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Sunset Beach Resort",
    description: "Relaxing resort with ocean views, private rooms and beautiful sunsets.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "sunset_beach_resort",
    },
    price: 8500,
    location: "Varkala",
    country: "India",
  },
  {
    title: "Himalayan Wooden Cabin",
    description: "Cozy wooden cabin with breathtaking mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
      filename: "himalayan_cabin",
    },
    price: 3800,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Lakefront Luxury Resort",
    description: "Luxury resort offering peaceful lake views and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      filename: "lakefront_resort",
    },
    price: 9200,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Royal Rajasthani Haveli",
    description: "Traditional haveli featuring beautiful architecture and royal interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      filename: "rajasthani_haveli",
    },
    price: 7200,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Modern City Apartment",
    description: "Stylish apartment located close to shopping centers and restaurants.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "modern_city_apartment",
    },
    price: 3200,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "Desert Camp",
    description: "Unique desert stay with comfortable tents and traditional local experiences.",
    image: {
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      filename: "desert_camp",
    },
    price: 4500,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Tea Garden Cottage",
    description: "Charming cottage surrounded by beautiful tea gardens and hills.",
    image: {
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
      filename: "tea_garden_cottage",
    },
    price: 3500,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Riverside Guest House",
    description: "Comfortable guest house located beside a peaceful river.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "riverside_guest_house",
    },
    price: 2800,
    location: "Haridwar",
    country: "India",
  },
  {
    title: "Goan Portuguese Villa",
    description: "Beautiful heritage villa combining Portuguese architecture with modern comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      filename: "goan_portuguese_villa",
    },
    price: 11000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Backwater Houseboat",
    description: "Stay on a traditional houseboat while enjoying peaceful backwater views.",
    image: {
      url:  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      filename: "backwater_houseboat",
    },
    price: 7500,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Snow Valley Lodge",
    description: "Warm and comfortable lodge surrounded by snowy mountain landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
      filename: "snow_valley_lodge",
    },
    price: 5600,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Tropical Garden Villa",
    description: "Private villa surrounded by tropical gardens and peaceful outdoor spaces.",
    image: {
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
      filename: "tropical_garden_villa",
    },
    price: 9800,
    location: "Kovalam",
    country: "India",
  },
  {
    title: "Heritage Courtyard Hotel",
    description: "Historic hotel with a beautiful courtyard and traditional interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      filename: "heritage_courtyard",
    },
    price: 6800,
    location: "Lucknow",
    country: "India",
  },
  {
    title: "Skyline Penthouse",
    description: "Premium penthouse with panoramic city views and a private terrace.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "skyline_penthouse",
    },
    price: 16000,
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "Countryside Farmhouse",
    description: "Relaxing farmhouse surrounded by open fields and peaceful countryside.",
    image: {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      filename: "countryside_farmhouse",
    },
    price: 4800,
    location: "Pune",
    country: "India",
  },
  {
    title: "Cliffside Ocean Villa",
    description: "Luxury villa built on a cliff overlooking the endless ocean.",
    image: {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      filename: "cliffside_ocean_villa",
    },
    price: 19000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Eiffel View Suite",
    description: "Elegant suite with easy access to Paris landmarks and restaurants.",
    image: {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      filename: "eiffel_view_suite",
    },
    price: 14500,
    location: "Paris",
    country: "France",
  },
  {
    title: "Alpine Ski Chalet",
    description: "Traditional alpine chalet perfect for a peaceful mountain vacation.",
    image: {
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
      filename: "alpine_ski_chalet",
    },
    price: 17500,
    location: "Interlaken",
    country: "Switzerland",
  },
  {
    title: "Santorini Sunset House",
    description: "Whitewashed holiday home overlooking the beautiful Aegean Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      filename: "santorini_sunset_house",
    },
    price: 15500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "New York Loft",
    description: "Modern industrial loft located near popular city attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1522083165195-3424ed129620",
      filename: "new_york_loft",
    },
    price: 13000,
    location: "New York",
    country: "USA",
  },
  {
    title: "Dubai Marina Apartment",
    description: "Modern apartment with stunning marina views and premium facilities.",
    image: {
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      filename: "dubai_marina_apartment",
    },
    price: 12500,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Bali Jungle Villa",
    description: "Private villa hidden among tropical greenery with a relaxing atmosphere.",
    image: {
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      filename: "bali_jungle_villa",
    },
    price: 10500,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "London Townhouse",
    description: "Elegant townhouse in a quiet neighborhood close to central London.",
    image: {
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      filename: "london_townhouse",
    },
    price: 11800,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Tokyo Capsule Stay",
    description: "Affordable and modern accommodation for travelers exploring Tokyo.",
    image: {
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      filename: "tokyo_capsule_stay",
    },
    price: 4200,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Venice Canal Apartment",
    description: "Charming apartment overlooking one of Venice's historic canals.",
    image: {
      url: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
      filename: "venice_canal_apartment",
    },
    price: 11200,
    location: "Venice",
    country: "Italy",
  },
  {
    title: "Sydney Harbour Villa",
    description: "Luxury villa offering beautiful views of Sydney Harbour and the city.",
    image: {
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d1",
      filename: "sydney_harbour_villa",
    },
    price: 18000,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Cape Town Mountain Lodge",
    description: "Comfortable lodge with spectacular mountain and coastal views.",
    image: {
      url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
      filename: "cape_town_lodge",
    },
    price: 8700,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Northern Lights Cabin",
    description: "Cozy glass cabin offering an unforgettable view of the Northern Lights.",
    image: {
      url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
      filename: "northern_lights_cabin",
    },
    price: 15000,
    location: "Reykjavik",
    country: "Iceland",
  },


];

module.exports={data:sampleListings};
console.log("success");