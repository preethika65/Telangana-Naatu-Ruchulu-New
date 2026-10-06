import { useState } from "react";
import {
  MapPin,
  Phone,
  ShoppingBag,
  Star,
  Clock,
  Plus,
  Minus,
} from "lucide-react";
import "./App.css";

type Dish = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const GST_RATE = 0.05;

const restaurantInfo = {
  name: "Telangana Naatu Ruchulu",
  phone: "919966681345",
  mapsUrl:
    "https://www.google.com/maps/place/TELANGANA+NAATU+RUCHULU/@17.3383507,78.3131962,17z/data=!4m15!1m8!3m7!1s0x3bcb9500568e4dab:0xaa2b55c82bf2ee1b!2sTELANGANA+NAATU+RUCHULU!8m2!3d17.3383456!4d78.3157765!10e9!16s%2Fg%2F11wj83s2rs!3m5!1s0x3bcb9500568e4dab:0xaa2b55c82bf2ee1b!8m2!3d17.3383456!4d78.3157765!16s%2Fg%2F11wj83s2rs?entry=ttu",
};

const dishes: Dish[] = [
  // Chicken Curries
  { id: 1, name: "Chicken Mughlai", category: "Chicken Curries", price: 449 },
  { id: 2, name: "Chicken Hyderabadi", category: "Chicken Curries", price: 449 },
  { id: 3, name: "Kadhai Chicken", category: "Chicken Curries", price: 449 },
  { id: 4, name: "Chicken Chatpata", category: "Chicken Curries", price: 449 },
  { id: 5, name: "Punjabi Chicken Bone", category: "Chicken Curries", price: 449 },
  { id: 6, name: "Chicken Tikka Masala", category: "Chicken Curries", price: 449 },
  { id: 7, name: "Chicken Kalimirch", category: "Chicken Curries", price: 449 },
  { id: 8, name: "Chicken Kolhapuri", category: "Chicken Curries", price: 449 },
  { id: 9, name: "Chicken Butter Masala", category: "Chicken Curries", price: 449 },
  { id: 10, name: "Afgani Chicken", category: "Chicken Curries", price: 449 },
  { id: 11, name: "Chicken Curry", category: "Chicken Curries", price: 449 },

  // Mutton Curries
  { id: 12, name: "Kadhai Mutton", category: "Mutton Curries", price: 549 },
  { id: 13, name: "Achhari Mutton", category: "Mutton Curries", price: 549 },
  { id: 14, name: "Dum Ka Mutton", category: "Mutton Curries", price: 549 },
  { id: 15, name: "Mutton Rogan Josh", category: "Mutton Curries", price: 549 },
  { id: 16, name: "Mutton Kalimirchi", category: "Mutton Curries", price: 549 },
  { id: 17, name: "Mutton Masala", category: "Mutton Curries", price: 549 },

  // Fish & Prawns
  { id: 18, name: "Prawns Curry", category: "Fish & Prawns", price: 549 },
  { id: 19, name: "Prawns Masala", category: "Fish & Prawns", price: 549 },
  { id: 20, name: "Fish Curry", category: "Fish & Prawns", price: 499 },

  // Biryani
  { id: 21, name: "Prawns Biryani", category: "Biryani", price: 499 },
  { id: 22, name: "Naatu Kodi Fry Piece Biryani", category: "Biryani", price: 499 },
  { id: 23, name: "Mutton Biryani Full", category: "Biryani", price: 549 },
  { id: 24, name: "Fish Biryani", category: "Biryani", price: 449 },
  { id: 25, name: "Mutton Fry Piece Biryani", category: "Biryani", price: 549 },
  { id: 26, name: "Chicken Family Pack Biryani", category: "Biryani", price: 899 },
  { id: 27, name: "Egg Biryani", category: "Biryani", price: 399 },
  { id: 28, name: "Mutton Biryani Single", category: "Biryani", price: 319 },
  { id: 29, name: "Chicken Fry Piece Biryani", category: "Biryani", price: 499 },
  { id: 30, name: "Chicken 65 Biryani", category: "Biryani", price: 499 },
  { id: 31, name: "Mutton Family Pack Biryani", category: "Biryani", price: 999 },
  { id: 32, name: "Chicken Biryani Single", category: "Biryani", price: 289 },
  { id: 33, name: "Mutton Biryani Jumbo", category: "Biryani", price: 1299 },
  { id: 34, name: "Chicken Biryani Full", category: "Biryani", price: 499 },
  { id: 35, name: "Chicken Biryani Jumbo", category: "Biryani", price: 1199 },
  { id: 36, name: "Mutton Kheema Biryani", category: "Biryani", price: 499 },

  // Fried Rice - Veg
  { id: 37, name: "Veg Hong Kong Fried Rice", category: "Fried Rice", price: 259 },
  { id: 38, name: "Mix Veg Fried Rice", category: "Fried Rice", price: 269 },
  { id: 39, name: "Veg Fried Rice", category: "Fried Rice", price: 249 },
  { id: 40, name: "Veg Schezwan Fried Rice", category: "Fried Rice", price: 259 },

  // Veg Biryani
  { id: 41, name: "Paneer Biryani", category: "Veg Biryani", price: 399 },
  { id: 42, name: "Mushroom Biryani", category: "Veg Biryani", price: 399 },
  { id: 43, name: "Kaju Paneer Biryani", category: "Veg Biryani", price: 449 },
  { id: 44, name: "Veg Biryani Single", category: "Veg Biryani", price: 249 },
  { id: 45, name: "Veg Biryani Full", category: "Veg Biryani", price: 399 },
  { id: 46, name: "Veg Biryani Family Pack", category: "Veg Biryani", price: 749 },
  { id: 47, name: "Kaju Biryani", category: "Veg Biryani", price: 439 },

  // Non Veg Starters
  { id: 48, name: "Apollo Fish", category: "Non-Veg Starters", price: 449 },
  { id: 49, name: "Pepper Prawns", category: "Non-Veg Starters", price: 499 },
  { id: 50, name: "Chicken Drumstick", category: "Non-Veg Starters", price: 449 },
  { id: 51, name: "Pepper Chicken", category: "Non-Veg Starters", price: 449 },
  { id: 52, name: "Chicken 65", category: "Non-Veg Starters", price: 449 },
  { id: 53, name: "Dragon Chicken", category: "Non-Veg Starters", price: 449 },
  { id: 54, name: "Crispy Chicken", category: "Non-Veg Starters", price: 449 },
  { id: 55, name: "Chilly Mutton", category: "Non-Veg Starters", price: 549 },
  { id: 56, name: "Chilly Chicken", category: "Non-Veg Starters", price: 449 },
  { id: 57, name: "Chilly Fish", category: "Non-Veg Starters", price: 449 },
  { id: 58, name: "Loose Prawns", category: "Non-Veg Starters", price: 499 },
  { id: 59, name: "Chicken Majestic", category: "Non-Veg Starters", price: 449 },
  { id: 60, name: "Chicken Lollipop", category: "Non-Veg Starters", price: 449 },

  // Veg Starters
  { id: 61, name: "Chilly Mushroom", category: "Veg Starters", price: 389 },
  { id: 62, name: "Chilly Baby Corn", category: "Veg Starters", price: 389 },
  { id: 63, name: "Veg Manchurian", category: "Veg Starters", price: 389 },
  { id: 64, name: "Dragon Paneer", category: "Veg Starters", price: 389 },
  { id: 65, name: "Chilly Paneer", category: "Veg Starters", price: 389 },
  { id: 66, name: "Crispy Corn", category: "Veg Starters", price: 349 },
  { id: 67, name: "French Fries (Salt-Peri Peri)", category: "Veg Starters", price: 219 },

  // Take Away
  { id: 68, name: "Mutton Haleem TAKE AWAY", category: "Take Away", price: 250 },

  // Mocktails & Drinks
  { id: 69, name: "Black Current Mojito", category: "Mocktails & Drinks", price: 199 },
  { id: 70, name: "Water Melon, Pine Apple", category: "Mocktails & Drinks", price: 199 },
  { id: 71, name: "Blue Lagon", category: "Mocktails & Drinks", price: 199 },
  { id: 72, name: "Strawberry Mojito", category: "Mocktails & Drinks", price: 199 },
  { id: 73, name: "Fresh Lime Soda", category: "Mocktails & Drinks", price: 199 },
  { id: 74, name: "Pina Colada", category: "Mocktails & Drinks", price: 199 },
  { id: 75, name: "Fresh Juice", category: "Mocktails & Drinks", price: 199 },
  { id: 76, name: "Spicy Orange", category: "Mocktails & Drinks", price: 199 },
  { id: 77, name: "Sunrised Mocktail", category: "Mocktails & Drinks", price: 199 },
  { id: 78, name: "Water Melon Mojito", category: "Mocktails & Drinks", price: 199 },
  { id: 79, name: "Jawa Plum Mojito", category: "Mocktails & Drinks", price: 199 },
  { id: 80, name: "Guava Marine", category: "Mocktails & Drinks", price: 199 },
  { id: 81, name: "Virgin Mojito", category: "Mocktails & Drinks", price: 199 },
  { id: 82, name: "Kiwi Delight", category: "Mocktails & Drinks", price: 199 },

  // Tandoori & Kebabs
  { id: 83, name: "Tandoori Chicken", category: "Tandoori & Kebabs", price: 449 },
  { id: 84, name: "Chicken Malai Kabab", category: "Tandoori & Kebabs", price: 449 },
  { id: 85, name: "Chicken Reshmi Kabab", category: "Tandoori & Kebabs", price: 449 },
  { id: 86, name: "Lasuni Kebab", category: "Tandoori & Kebabs", price: 449 },
  { id: 87, name: "Chicken Tikka", category: "Tandoori & Kebabs", price: 449 },
  { id: 88, name: "Tangdi Kabab", category: "Tandoori & Kebabs", price: 249 },
  { id: 89, name: "Chicken Hariyali Kebab", category: "Tandoori & Kebabs", price: 449 },
  { id: 90, name: "Achari Fish Tikka", category: "Tandoori & Kebabs", price: 499 },
  { id: 91, name: "Fish Tikka", category: "Tandoori & Kebabs", price: 499 },
  { id: 92, name: "Angara Kebab", category: "Tandoori & Kebabs", price: 449 },
  { id: 93, name: "Kalmi Kabab", category: "Tandoori & Kebabs", price: 449 },

  // Soups
  { id: 94, name: "Cream Of Tomato Soup", category: "Soups", price: 199 },
  { id: 95, name: "Veg Lemon Coriender Soup", category: "Soups", price: 199 },
  { id: 96, name: "Veg Hot & Sour Soup", category: "Soups", price: 199 },
  { id: 97, name: "Veg Clear Soup", category: "Soups", price: 199 },
  { id: 98, name: "Veg Manchow Soup", category: "Soups", price: 199 },
  { id: 99, name: "Veg Sweet Corn Soup", category: "Soups", price: 199 },

  // Noodles
  { id: 100, name: "Chicken Schezwan Noodles", category: "Noodles", price: 309 },
  { id: 101, name: "Mix Non-Veg Noodles", category: "Noodles", price: 349 },
  { id: 102, name: "Chicken Soft Noodles", category: "Noodles", price: 299 },
  { id: 103, name: "Veg Hakka Noodles", category: "Noodles", price: 249 },
  { id: 104, name: "Veg Soft Noodles", category: "Noodles", price: 249 },
  { id: 105, name: "Veg Schezwan Noodles", category: "Noodles", price: 259 },

  // Non Veg Fried Rice
  { id: 106, name: "Mix Non-Veg Fried Rice (Chef Special)", category: "Fried Rice", price: 349 },
  { id: 107, name: "Egg Fried Rice", category: "Fried Rice", price: 259 },
  { id: 108, name: "Chicken Hong Kong Fried Rice", category: "Fried Rice", price: 319 },
  { id: 109, name: "Chicken Fried Rice", category: "Fried Rice", price: 299 },
  { id: 110, name: "Chicken Schezwan Fried Rice", category: "Fried Rice", price: 309 },

  // Veg Kebabs
  { id: 111, name: "Paneer Tikka", category: "Veg Kebabs", price: 299 },
  { id: 112, name: "Paneer Achari Tikka", category: "Veg Kebabs", price: 299 },
  { id: 113, name: "Hara Bhara Kabab", category: "Veg Kebabs", price: 299 },
  { id: 114, name: "Tandoori Mushroom", category: "Veg Kebabs", price: 299 },
  { id: 115, name: "Hariyali Paneer Tikka", category: "Veg Kebabs", price: 299 },

  // Desserts
  { id: 116, name: "Double Ka Meetha", category: "Desserts", price: 199 },
  { id: 117, name: "Khadhu Ka Kheer", category: "Desserts", price: 199 },
  { id: 118, name: "ARABIAN DELIGHT", category: "Desserts", price: 209 },
  { id: 119, name: "Gulab Jamun", category: "Desserts", price: 199 },
  { id: 120, name: "Apricot Delight", category: "Desserts", price: 199 },

  // Indian Breads
  { id: 121, name: "Plain Naan", category: "Indian Breads", price: 49 },
  { id: 122, name: "Masala Kulcha", category: "Indian Breads", price: 69 },
  { id: 123, name: "Lachha Paratha", category: "Indian Breads", price: 69 },
  { id: 124, name: "Garlic Naan", category: "Indian Breads", price: 69 },
  { id: 125, name: "Butter Naan", category: "Indian Breads", price: 65 },
  { id: 126, name: "Tandoori Roti", category: "Indian Breads", price: 49 },
  { id: 127, name: "Butter Roti", category: "Indian Breads", price: 55 },
  { id: 128, name: "Aloo Paratha", category: "Indian Breads", price: 69 },
  { id: 129, name: "Rumali Roti", category: "Indian Breads", price: 49 },

  // Rice & Dal
  { id: 130, name: "Yellow Dal Fry", category: "Rice & Dal", price: 199 },
  { id: 131, name: "Yellow Dal Tadka", category: "Rice & Dal", price: 199 },
  { id: 132, name: "Steam Rice", category: "Rice & Dal", price: 149 },
  { id: 133, name: "Jeera Rice", category: "Rice & Dal", price: 189 },
  { id: 134, name: "Dal Khichdi", category: "Rice & Dal", price: 299 },
  { id: 135, name: "Curd Rice", category: "Rice & Dal", price: 189 },
  { id: 136, name: "Ragi Sangati", category: "Rice & Dal", price: 149 },
  { id: 137, name: "Bagara Rice", category: "Rice & Dal", price: 189 },
  { id: 138, name: "Sambar Rice", category: "Rice & Dal", price: 299 },

  // Telangana Specials
  { id: 139, name: "Bheja", category: "Telangana Specials", price: 319 },
  { id: 140, name: "Talakai Kura", category: "Telangana Specials", price: 419 },
  { id: 141, name: "Gurda Kapura", category: "Telangana Specials", price: 420 },
  { id: 142, name: "Kodi Kura", category: "Telangana Specials", price: 420 },
  { id: 143, name: "Mutton Kheema", category: "Telangana Specials", price: 519 },
  { id: 144, name: "Telanaga Mamsam", category: "Telangana Specials", price: 519 },
  { id: 145, name: "Liver Fry", category: "Telangana Specials", price: 420 },
  { id: 146, name: "Naatu Kodi", category: "Telangana Specials", price: 499 },
  { id: 147, name: "Bokkala Charu", category: "Telangana Specials", price: 420 },
  { id: 148, name: "Paya", category: "Telangana Specials", price: 349 },
  { id: 149, name: "Boti", category: "Telangana Specials", price: 420 },

  // Egg
  { id: 150, name: "Chilly Egg", category: "Egg", price: 349 },
  { id: 151, name: "Boiled Egg", category: "Egg", price: 149 },
  { id: 152, name: "Masala Omlet", category: "Egg", price: 149 },
  { id: 153, name: "Egg Masala", category: "Egg", price: 349 },
  { id: 154, name: "Egg Bhurjee", category: "Egg", price: 149 },

  // Veg Main Course
  { id: 155, name: "Kadhai Mushroom", category: "Veg Main Course", price: 399 },
  { id: 156, name: "Methi Chaman", category: "Veg Main Course", price: 399 },
  { id: 157, name: "Kadhai Veg", category: "Veg Main Course", price: 399 },
  { id: 158, name: "Veg Dopiyaza", category: "Veg Main Course", price: 399 },
  { id: 159, name: "Paneer Hyderabadi", category: "Veg Main Course", price: 399 },
  { id: 160, name: "Paneer Butter Masala", category: "Veg Main Course", price: 399 },
  { id: 161, name: "Palak Paneer", category: "Veg Main Course", price: 399 },
  { id: 162, name: "Kadhai Paneer", category: "Veg Main Course", price: 399 },
  { id: 163, name: "Sahi Paneer", category: "Veg Main Course", price: 399 },
  { id: 164, name: "Paneer Dopiyaza", category: "Veg Main Course", price: 399 },

  // Salad, Raita & Papad
  { id: 165, name: "Masala Papad Roast", category: "Salad, Raita & Papad", price: 69 },
  { id: 166, name: "Green Salad", category: "Salad, Raita & Papad", price: 149 },
  { id: 167, name: "Plain Curd", category: "Salad, Raita & Papad", price: 99 },
  { id: 168, name: "Mix Raita", category: "Salad, Raita & Papad", price: 99 },
  { id: 169, name: "Masala Papad Fry", category: "Salad, Raita & Papad", price: 69 },
  { id: 170, name: "Roasted Papad", category: "Salad, Raita & Papad", price: 59 },
];

const categories = [
  "All",
  ...Array.from(new Set(dishes.map((dish) => dish.category))),
];

function App() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllItems, setShowAllItems] = useState(false);

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory =
      selectedCategory === "All" ||
      dish.category === selectedCategory;

    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const visibleDishes = showAllItems
    ? filteredDishes
    : filteredDishes.slice(0, 12);

  const changeQuantity = (id: number, amount: number) => {
    setCart((current) => {
      const newCart = { ...current };
      const newQuantity = (newCart[id] || 0) + amount;

      if (newQuantity <= 0) {
        delete newCart[id];
      } else {
        newCart[id] = newQuantity;
      }

      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  const subtotal = dishes.reduce(
    (sum, dish) => sum + dish.price * (cart[dish.id] || 0),
    0
  );

  const gstAmount = subtotal * GST_RATE;
  const totalPrice = subtotal + gstAmount;

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-circle">TNR</div>

          <div>
            <h2>Telangana Naatu Ruchulu</h2>
            <p>Authentic Telangana Flavours</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="cart-button"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingBag size={20} />
          Cart

          {totalItems > 0 && (
            <span>{totalItems}</span>
          )}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="small-title">
            WELCOME TO
          </p>

          <h1>
            Telangana
            <br />
            <span>Naatu Ruchulu</span>
          </h1>

          <p className="hero-text">
            Experience the authentic taste of Telangana with
            traditional recipes, rich spices and unforgettable
            flavours.
          </p>

          <div className="hero-buttons">

            <a
              href="#menu"
              className="primary-button"
            >
              Explore Menu
            </a>

            <a
              href={restaurantInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <MapPin size={18} />
              Get Directions
            </a>

          </div>

          <a
            href={`tel:${restaurantInfo.phone}`}
            className="reserve-button"
          >
            <Phone size={18} />
            Call to Reserve Table
          </a>

          <div className="hero-info">

            <div>
              <MapPin size={18} />
              Moinabad, Hyderabad
            </div>

            <div>
              <Clock size={18} />
              Open until 11:30 PM
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        className="about"
        id="about"
      >

        <p className="section-label">
          OUR STORY
        </p>

        <h2>
          Authentic Telangana Taste
        </h2>

        <p>
          At Telangana Naatu Ruchulu, we bring the
          traditional flavours of Telangana to your
          table. From spicy mutton dishes to delicious
          biryanis and authentic Naatu Kodi, every dish
          is prepared with carefully selected ingredients
          and traditional cooking methods.
        </p>

        <div className="rating">
          <Star
            fill="currentColor"
            size={20}
          />

          <strong>
            4.5
          </strong>

          <span>
            Customer Favourite
          </span>
        </div>

      </section>

      {/* MENU */}
      <section
        id="menu"
        className="menu-section"
      >

        <div className="section-heading">

          <p className="section-label">
            OUR MENU
          </p>

          <h2>
            Choose Your Favourite
          </h2>

          <p>
            Traditional Telangana dishes made fresh
            for you.
          </p>

        </div>

        {/* SEARCH */}
        <div className="menu-search">

          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowAllItems(true);
            }}
          />

        </div>

        {/* CATEGORIES */}
        <div className="category-list">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => {
                setSelectedCategory(category);
                setShowAllItems(false);
              }}
            >
              {category}
            </button>

          ))}

        </div>

        {/* MENU ITEMS */}
        <div className="menu-grid">

          {visibleDishes.map((dish) => (

            <div
              className="menu-card"
              key={dish.id}
            >

              <div className="menu-card-content">

                <p className="menu-category">
                  {dish.category}
                </p>

                <h3>
                  {dish.name}
                </h3>

                <div className="menu-card-bottom">

                  <p className="price">
                    ₹{dish.price}
                  </p>

                  {(cart[dish.id] || 0) === 0 ? (

                    <button
                      className="add-button"
                      onClick={() =>
                        changeQuantity(
                          dish.id,
                          1
                        )
                      }
                    >
                      Add
                    </button>

                  ) : (

                    <div className="quantity-control">

                      <button
                        onClick={() =>
                          changeQuantity(
                            dish.id,
                            -1
                          )
                        }
                      >
                        <Minus size={15} />
                      </button>

                      <strong>
                        {cart[dish.id]}
                      </strong>

                      <button
                        onClick={() =>
                          changeQuantity(
                            dish.id,
                            1
                          )
                        }
                      >
                        <Plus size={15} />
                      </button>

                    </div>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* NO RESULTS */}
        {visibleDishes.length === 0 && (

          <div className="no-results">

            <h3>
              No dishes found
            </h3>

            <p>
              Try another dish or category.
            </p>

          </div>

        )}

        {/* VIEW MORE */}
        {filteredDishes.length > 12 && (

          <div className="view-more-container">

            <button
              className="view-more-button"
              onClick={() =>
                setShowAllItems(
                  !showAllItems
                )
              }
            >
              {showAllItems
                ? "Show Less"
                : `View More (${filteredDishes.length - 12} more)`}
            </button>

          </div>

        )}

      </section>

      {/* CART PANEL */}
      {cartOpen && (

        <div className="cart-overlay">

          <div className="cart-panel">

            <div className="cart-header">

              <div>

                <p className="section-label">
                  YOUR ORDER
                </p>

                <h2>
                  Your Cart
                </h2>

              </div>

              <button
                className="close-cart"
                onClick={() =>
                  setCartOpen(false)
                }
              >
                ×
              </button>

            </div>

            {totalItems === 0 ? (

              <div className="empty-cart">

                <ShoppingBag size={45} />

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Add some delicious
                  Telangana dishes!
                </p>

                <button
                  className="primary-button"
                  onClick={() =>
                    setCartOpen(false)
                  }
                >
                  Browse Menu
                </button>

              </div>

            ) : (

              <>

                {/* CART ITEMS */}
                <div className="cart-items">

                  {dishes
                    .filter(
                      (dish) =>
                        cart[dish.id]
                    )
                    .map((dish) => (

                      <div
                        className="cart-item"
                        key={dish.id}
                      >

                        <div>

                          <h3>
                            {dish.name}
                          </h3>

                          <p>
                            ₹{dish.price} ×{" "}
                            {cart[dish.id]}
                          </p>

                        </div>

                        <div className="quantity-control">

                          <button
                            onClick={() =>
                              changeQuantity(
                                dish.id,
                                -1
                              )
                            }
                          >
                            <Minus size={15} />
                          </button>

                          <strong>
                            {cart[dish.id]}
                          </strong>

                          <button
                            onClick={() =>
                              changeQuantity(
                                dish.id,
                                1
                              )
                            }
                          >
                            <Plus size={15} />
                          </button>

                        </div>

                      </div>

                    ))}

                </div>

                {/* BILL */}
                <div className="cart-total-section">

                  <div className="price-breakdown">

                    <div>
                      <span>
                        Subtotal
                      </span>

                      <strong>
                        ₹{subtotal.toFixed(2)}
                      </strong>
                    </div>

                    <div>
                      <span>
                        GST (5%)
                      </span>

                      <strong>
                        ₹{gstAmount.toFixed(2)}
                      </strong>
                    </div>

                    <div className="final-total">

                      <span>
                        Total
                      </span>

                      <strong>
                        ₹{totalPrice.toFixed(2)}
                      </strong>

                    </div>

                  </div>

                </div>

                {/* CUSTOMER DETAILS */}
                <div className="customer-details">

                  <h3>
                    Dine-In Order
                  </h3>

                  <p>
                    Enter your details before
                    sending the order.
                  </p>

                  <label>
                    Customer Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) =>
                      setCustomerName(
                        e.target.value
                      )
                    }
                  />

                  <label>
                    Table Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter table number"
                    value={tableNumber}
                    onChange={(e) =>
                      setTableNumber(
                        e.target.value
                      )
                    }
                  />

                  <button
                    className="whatsapp-button"
                    disabled={
                      customerName.trim() === "" ||
                      tableNumber.trim() === ""
                    }
                    onClick={() => {

                      const orderLines =
                        dishes
                          .filter(
                            (dish) =>
                              cart[dish.id]
                          )
                          .map(
                            (dish) =>
                              `• ${dish.name} × ${cart[dish.id]} — ₹${
                                dish.price *
                                cart[dish.id]
                              }`
                          )
                          .join("\n");

                      const message = `
Hello Telangana Naatu Ruchulu!

I would like to place a Dine-In order.

Customer Name: ${customerName}
Table Number: ${tableNumber}

Order:
${orderLines}

Subtotal: ₹${subtotal.toFixed(2)}
GST (5%): ₹${gstAmount.toFixed(2)}
Total: ₹${totalPrice.toFixed(2)}

Please prepare my order.
                      `.trim();

                      const whatsappNumber =
                        "919966681345";

                      const whatsappUrl =
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          message
                        )}`;

                      window.open(
                        whatsappUrl,
                        "_blank"
                      );

                    }}
                  >
                    Order on WhatsApp
                  </button>

                </div>

              </>

            )}

          </div>

        </div>

      )}

      {/* CONTACT */}
      <section
        className="contact"
        id="contact"
      >

        <p className="section-label">
          VISIT US
        </p>

        <h2>
          Come Taste Telangana
        </h2>

        <div className="contact-grid">

          <div>

            <MapPin />

            <h3>
              Location
            </h3>

            <p>
              Himayat Sagar Road,
              <br />
              Moinabad, Hyderabad
            </p>

          </div>

          <div>

            <Phone />

            <h3>
              Call Us
            </h3>

            <p>
              +91 99666 81345
            </p>

          </div>

          <div>

            <Clock />

            <h3>
              Opening Hours
            </h3>

            <p>
              Every day
            </p>

            <p>
              11:00 AM – 11:30 PM
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <h2>
          Telangana Naatu Ruchulu
        </h2>

        <p>
          Authentic Telangana Food • Moinabad
        </p>

        <p>
          © 2026 Telangana Naatu Ruchulu
        </p>

      </footer>

    </div>
  );
}

export default App;