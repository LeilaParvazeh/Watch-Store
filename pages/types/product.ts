type Products={
    id:number,
    name:string,
    brand:string,
    price:number,
    image:string,
    description:string
}


export const products : Products[]= [
    {
      id:1,
      name: "Rolex Submariner",
      brand: "rolex",
      price: 1200,
      image: "/Rolex Submariner-1.png",
      description: "A legendary luxury dive watch known for its durability and classic design.",
    },
    {
      id: 2,
      name: "Rolex Datejust",
      brand: "rolex",
      price: 980,
      image: "/Rolex Datejust.png",
      description: "An iconic Rolex model with timeless style and an elegant date window.",
    },
    {
      id: 3,
      name: "Rolex Explorer",
      brand: "rolex",
      price: 1500,
      image: "/Rolex Explorer-1.png",
      description: "Designed for adventure with exceptional robustness and minimalist elegance.",
    },
    {
      id: 4,
      name: "Casio G-Shock GA-2100",
      brand: "casio",
      price: 180,
      image: "/Casio G-Shock GA-2100.png",
      description: "A shock-resistant watch with a slim design and excellent durability.",
    },
    {
      id: 5,
      name: "Casio Edifice EFV-100",
      brand: "casio",
      price: 260,
      image: "/Casio Edifice EFV-100.png",
      description: "A sporty yet elegant watch with precise quartz movement and metal casing.",
    },
    {
      id: 6,
      name: "Casio Vintage A168",
      brand: "casio",
      price: 90,
      image: "/Casio Vintage A168.png",
      description: "Classic retro digital watch featuring LED backlight and stainless steel band.",
    },
    {
      id: 7,
      name: "Omega Seamaster",
      brand: "omega",
      price: 1100,
      image: "/Omega Seamaster.png",
      description: "A premium diving watch with exceptional accuracy and ocean-inspired design.",
    },
    {
      id: 8,
      name: "Omega Speedmaster",
      brand: "omega",
      price: 1400,
      image: "/Omega Speedmaster-1.png",
      description: "The legendary Moonwatch used by NASA, combining precision and history.",
    },
    {
      id: 9,
      name: "Omega Constellation",
      brand: "omega",
      price: 1250,
      image: "/Omega Constellation.png",
      description: "Elegant luxury watch with signature star emblem and high-end craftsmanship.",
    },
    {
      id: 10,
      name: "Tissot PRX",
      brand: "tissot",
      price: 450,
      image: "/Tissot PRX.png",
      description: "A modern classic with an integrated bracelet and sleek minimalist design.",
    },
    {
      id: 11,
      name: "Tissot Gentleman",
      brand: "tissot",
      price: 520,
      image: "/Tissot Gentleman.png",
      description: "Versatile Swiss watch combining elegance, comfort, and precision.",
    },
    {
      id: 12,
      name: "Tissot Le Locle",
      brand: "tissot",
      price: 600,
      image: "/Tissot Le Locle.png",
      description: "A sophisticated automatic watch inspired by Tissot’s heritage city.",
    },
    {
      id: 13,
      name: "Seiko Presage",
      brand: "seiko",
      price: 380,
      image: "/Seiko Presage.png",
      description: "A refined watch featuring Japanese craftsmanship and elegant dial textures.",
    },
    {
      id: 14,
      name: "Seiko Prospex Diver",
      brand: "seiko",
      price: 700,
      image: "/Seiko Prospex Diver.png",
      description: "Professional-grade diving watch built for durability and underwater precision.",
    },
    {
      id: 15,
      name: "Seiko 5 Automatic",
      brand: "seiko",
      price: 320,
      image: "/Seiko 5 Automatic.png",
      description: "Reliable automatic watch offering durability and everyday practicality.",
    },
    {
      id: 16,
      name: "Apple Watch Series 9",
      brand: "apple",
      price: 900,
      image: "/Apple Watch Series 9-2.png",
      description: "Advanced smartwatch with powerful performance and modern health features.",
    },
    {
      id: 17,
      name: "Apple Watch Ultra",
      brand: "apple",
      price: 1200,
      image: "/Apple Watch Ultra-1.png",
      description: "A rugged smartwatch built for extreme sports, endurance, and long battery life.",
  
    },
    {
      id: 18,
      name: "Apple Watch SE",
      brand: "apple",
      price: 400,
      image: "/Apple Watch SE.png",
      description: "Affordable Apple Watch offering essential features with a sleek design.",
    },
    {
      id: 19,
      name: "Citizen Eco-Drive",
      brand: "citizen",
      price: 350,
      image: "/Citizen Eco-Drive.png",
      description: "Solar-powered watch requiring no battery change, eco-friendly and reliable.",
    },
    {
      id: 20,
      name: "Citizen Promaster",
      brand: "citizen",
      price: 650,
      image: "/Citizen Promaster.png",
      description: "High-performance adventure watch designed for divers and outdoor explorers.",
    },
  ]




  type Reviews={
    id:number,
    name:string,
    img:string,
    comment:string,
    rating:number
  }


  export const reviews : Reviews[] =[
    {id:1,name:'James Anderson',img:'/james.jpg',comment:'Amazing qulity watch.it looks even better than the photos!',rating:5},
    {id:2,name:'Emily Carte',img:'/image(4).png',comment:'Fast delivery and great packaging.Totaly satisfied.',rating:4},
    {id:3,name:'Michael Thompson',img:'/michael.jpeg',comment:'Very good prices compared to other stores.Highly recommended.',rating:5},
    {id:4,name:'Sophia Williams',img:'/sophia.png',comment:'Customer support was very helpful and professional.',rating:5},
    {id:5,name:'Daniel Raberts',img:'/Daniel.png',comment:'The watch feels premium and the build qulity is excellent.',rating:4},
    {id:6,name:'Olivia Brown',img:'/olivia.png',comment:'smooth shopping experience and great variety of brands.',rating:5},
  ]
  

  type PriceRange={
    label:string,
    min:number | null,
    max:number | null,
  }

 export const priceRanges:PriceRange[] = [
    { label: "All Prices", min: null, max: null },
    { label: "Under $300", min: 0, max: 300 },
    { label: "$300 - $600", min: 300, max: 600 },
    { label: "$600 - $1000", min: 600, max: 1000 },
    { label: "$1000+", min: 1000, max: null },
  ]