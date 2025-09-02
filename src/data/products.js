import demo from "../assets/img/hero.jpg";

const products = {
  'home-garden': [
    { id: 1, name: 'Bamboo Plant Pots', price: 24.99, image: demo, description: 'Beautiful bamboo plant pots perfect for indoor plants. Made from sustainable bamboo fiber.' },
    { id: 2, name: 'Solar Garden Lights', price: 39.99, emoji: '💡', description: 'Energy-efficient solar-powered garden lights that automatically turn on at dusk.' },
    { id: 3, name: 'Compost Bin', price: 89.99, emoji: '♻️', description: 'Large capacity compost bin made from recycled materials. Perfect for organic waste.' },
    { id: 4, name: 'Rain Water Collector', price: 129.99, emoji: '🌧️', description: 'Eco-friendly rain water collection system for garden irrigation.' }
  ],

  'personal-care': [
    { id: 5, name: 'Organic Shampoo Bar', price: 12.99, emoji: '🧴', description: 'Zero-waste shampoo bar made with organic ingredients. Plastic-free packaging.' },
    { id: 6, name: 'Bamboo Toothbrush Set', price: 19.99, emoji: '🪥', description: 'Set of 4 biodegradable bamboo toothbrushes with soft bristles.' },
    { id: 7, name: 'Natural Face Cream', price: 34.99, emoji: '🧴', description: 'Organic face moisturizer with natural ingredients. Suitable for all skin types.' },
    { id: 8, name: 'Essential Oil Set', price: 49.99, emoji: '🌿', description: 'Collection of 6 pure essential oils for aromatherapy and wellness.' }
  ],

  'kitchen': [
    { id: 9, name: 'Stainless Steel Straws', price: 15.99, emoji: '🥤', description: 'Reusable stainless steel straws with cleaning brush. Say no to plastic!' },
    { id: 10, name: 'Beeswax Food Wraps', price: 22.99, emoji: '🍯', description: 'Natural beeswax wraps to replace plastic wrap. Reusable and biodegradable.' },
    { id: 11, name: 'Bamboo Cutting Board', price: 45.99, emoji: '🔪', description: 'Large bamboo cutting board with antimicrobial properties. Knife-friendly surface.' },
    { id: 12, name: 'Glass Storage Containers', price: 59.99, emoji: '🥛', description: 'Set of 6 glass containers with bamboo lids. Perfect for food storage.' }
  ],

  'clothing': [
    { id: 13, name: 'Organic Cotton T-Shirt', price: 29.99, emoji: '👕', description: 'Soft organic cotton t-shirt made from sustainably grown cotton. Available in multiple colors.' },
    { id: 14, name: 'Hemp Tote Bag', price: 18.99, emoji: '👜', description: 'Durable hemp tote bag perfect for shopping. Strong and eco-friendly.' },
    { id: 15, name: 'Recycled Wool Sweater', price: 79.99, emoji: '🧥', description: 'Cozy sweater made from recycled wool. Warm and sustainable fashion choice.' },
    { id: 16, name: 'Cork Wallet', price: 35.99, emoji: '👛', description: 'Stylish wallet made from sustainable cork leather. Water-resistant and durable.' }
  ],

  // ✅ New categories with multiple items
  'tshirts': [
    { id: 17, name: 'Oversized T-Shirt', price: 25.99, emoji: '👕', description: 'Trendy oversized cotton tee for casual wear.' },
    { id: 18, name: 'Graphic Tee', price: 22.49, emoji: '👕', description: 'Cool printed graphic tee, soft cotton material.' },
    { id: 19, name: 'Plain White Tee', price: 19.99, emoji: '👕', description: 'Classic white cotton tee, must-have wardrobe essential.' },
    { id: 20, name: 'Striped T-Shirt', price: 27.99, emoji: '👕', description: 'Stylish striped t-shirt with slim fit design.' }
  ],

  'shirts': [
    { id: 21, name: 'Linen Shirt', price: 49.99, emoji: '👔', description: 'Breathable linen shirt perfect for summer outings.' },
    { id: 22, name: 'Formal White Shirt', price: 39.99, emoji: '👔', description: 'Classic white formal shirt for office or events.' },
    { id: 23, name: 'Checked Casual Shirt', price: 29.99, emoji: '👔', description: 'Casual checkered cotton shirt with modern fit.' },
    { id: 24, name: 'Denim Shirt', price: 54.99, emoji: '👔', description: 'Trendy denim shirt that works as a jacket too.' }
  ],

  'jeans': [
    { id: 25, name: 'Slim Fit Jeans', price: 59.99, emoji: '👖', description: 'Comfortable slim-fit jeans with stretch fabric.' },
    { id: 26, name: 'Regular Fit Jeans', price: 49.99, emoji: '👖', description: 'Classic straight-cut denim for daily wear.' },
    { id: 27, name: 'Ripped Jeans', price: 64.99, emoji: '👖', description: 'Trendy ripped jeans for a bold, stylish look.' },
    { id: 28, name: 'Black Denim Jeans', price: 69.99, emoji: '👖', description: 'Premium black jeans suitable for casual and party wear.' }
  ],

  'footwear': [
    { id: 29, name: 'White Sneakers', price: 74.99, emoji: '👟', description: 'Trendy white sneakers that go with any outfit.' },
    { id: 30, name: 'Running Shoes', price: 89.99, emoji: '👟', description: 'Lightweight and durable running shoes with extra cushioning.' },
    { id: 31, name: 'Leather Sandals', price: 45.99, emoji: '👟', description: 'Handcrafted leather sandals with a natural feel.' },
    { id: 32, name: 'High-Top Sneakers', price: 95.99, emoji: '👟', description: 'Stylish high-top sneakers for a bold streetwear look.' }
  ]
};

export default products;
