const sampleListings = [
  {
    title: "Cozy Apartment",
    description: "A comfortable apartment in the city center.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 2500,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Luxury Villa",
    description: "Spacious villa with a private swimming pool.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 15000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Mountain Cottage",
    description: "Peaceful cottage surrounded by mountains.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 3500,
    location: "Manali",
    country: "India",
  },
  {
    title: "Beach House",
    description: "Beautiful beach-facing house with stunning views.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 8000,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Studio Flat",
    description: "Affordable studio apartment for solo travelers.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 1800,
    location: "Bhopal",
    country: "India",
  },
  {
    title: "Farm Stay",
    description: "Experience village life with modern amenities.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 2800,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Lake View Cabin",
    description: "Wooden cabin overlooking a serene lake.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 4200,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Modern Penthouse",
    description: "Premium penthouse with a rooftop terrace.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 12000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Heritage Haveli",
    description: "Traditional haveli with authentic Rajasthani architecture.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 7000,
    location: "Jodhpur",
    country: "India",
  },
  {
    title: "Tree House",
    description: "Unique tree house in the middle of a lush forest.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 5000,
    location: "Wayanad",
    country: "India",
  },
  
  {
    title: "Luxury Beach Villa",
    description: "A stunning beachfront villa with private access to the ocean.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 18000,
    location: "Malibu",
    country: "USA",
  },
  {
    title: "Paris Apartment",
    description: "Modern apartment located near the Eiffel Tower.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 12000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Tokyo Studio",
    description: "Compact and stylish studio in the heart of Tokyo.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 8500,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Swiss Mountain Chalet",
    description: "Wooden chalet surrounded by breathtaking Alps.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 14000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Santorini Cave House",
    description: "Beautiful white cave house overlooking the sea.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 16000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Sydney Harbour Home",
    description: "Luxury home with amazing harbour views.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 17500,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Dubai Penthouse",
    description: "Premium penthouse in the heart of Downtown Dubai.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 22000,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Venice Canal House",
    description: "Traditional house with a private canal entrance.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 13500,
    location: "Venice",
    country: "Italy",
  },
  {
    title: "Bali Jungle Resort",
    description: "Relax in a luxurious jungle resort surrounded by nature.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 9800,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "London Loft",
    description: "Contemporary loft close to London's famous landmarks.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 11000,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Toronto Condo",
    description: "Modern condo with skyline views.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 9200,
    location: "Toronto",
    country: "Canada",
  },
  {
    title: "Rio Beach Apartment",
    description: "Cozy apartment just steps away from Copacabana Beach.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 7600,
    location: "Rio de Janeiro",
    country: "Brazil",
  },
  {
    title: "Cape Town Villa",
    description: "Luxury villa with stunning mountain views.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 10200,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Iceland Glass Cabin",
    description: "Watch the Northern Lights from your cozy cabin.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 15000,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Seoul Smart Home",
    description: "High-tech apartment in the center of Seoul.",
    image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 8900,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Amsterdam Canal Loft",
    description: "Elegant loft overlooking historic canals.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 11700,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Vienna Heritage Home",
    description: "Classic European home with elegant interiors.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 9500,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Bangkok Riverside Suite",
    description: "Luxury suite overlooking the Chao Phraya River.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 8100,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Auckland Ocean House",
    description: "Modern home with spectacular ocean views.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 12800,
    location: "Auckland",
    country: "New Zealand",
  },
  {
    title: "Cairo Desert Resort",
    description: "Luxury resort located near the Great Pyramids.",
   image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listing_1",
  },
    price: 9700,
    location: "Cairo",
    country: "Egypt",
  }

];

module.exports={data:sampleListings};
console.log("success");