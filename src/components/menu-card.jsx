import React, { useState } from "react";
import "../styles/menu-card.css";

function MenuCards() {
    const [activeCategory, setActiveCategory] = useState("wafer-paav");

    const menuItems = {
        "wafer-paav": [
            {
                id: 1,
                name: "Classic Wafer Paav",
                price: 40,
                description: "Crispy wafer with spiced potato filling",
                image: "https://images.unsplash.com/photo-1585238341710-4b4e6cefc647?w=400&h=400&fit=crop"
            },
            {
                id: 2,
                name: "Spicy Wafer Paav",
                price: 45,
                description: "Extra spice kick with green chutney",
                image:
                    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
            },
            {
                id: 3,
                name: "Mint Wafer Paav",
                price: 50,
                description: "Fresh mint and coriander blend",
                image:
                    "https://images.unsplash.com/photo-1612874742237-415ae6ac6551?w=400&h=400&fit=crop",
            },
            {
                id: 4,
                name: "Paneer Wafer Paav",
                price: 60,
                description: "Cottage cheese with herbs",
                image:
                    "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop",
            },
        ],

        "cheese-wafer": [
            {
                id: 5,
                name: "Mozzarella Cheese Wafer",
                price: 70,
                description: "Melted cheese with crispy wafer",
                image:
                    "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=400&fit=crop",
            },
            {
                id: 6,
                name: "Cheddar Cheese Wafer",
                price: 75,
                description: "Rich cheddar with spices",
                image:
                    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
            },
            {
                id: 7,
                name: "Double Cheese Wafer",
                price: 85,
                description: "Double cheese goodness",
                image:
                    "https://images.unsplash.com/photo-1585238341710-4b4e6cefc647?w=400&h=400&fit=crop",
            },
            {
                id: 8,
                name: "Cheese & Tomato Wafer",
                price: 80,
                description: "Cheese with fresh tomato layers",
                image:
                    "https://images.unsplash.com/photo-1612874742237-415ae6ac6551?w=400&h=400&fit=crop",
            },
        ],

        pizza: [
            {
                id: 9,
                name: "Margherita Pizza",
                price: 150,
                description: "Fresh mozzarella, basil, tomato sauce",
                image:
                    "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop",
            },
            {
                id: 10,
                name: "Paneer Tikka Pizza",
                price: 180,
                description: "Spiced paneer chunks",
                image:
                    "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=400&fit=crop",
            },
            {
                id: 11,
                name: "Loaded Veggie Pizza",
                price: 170,
                description: "Bell peppers, onions, mushrooms",
                image:
                    "https://images.unsplash.com/photo-1585238341710-4b4e6cefc647?w=400&h=400&fit=crop",
            },
            {
                id: 12,
                name: "BBQ Chickpea Pizza",
                price: 190,
                description: "Spiced chickpeas with BBQ sauce",
                image:
                    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
            },
        ],

        sandwich: [
            {
                id: 13,
                name: "Veggie Delite Sandwich",
                price: 60,
                description: "Mixed vegetables with mayo",
                image:
                    "https://images.unsplash.com/photo-1511689915661-18d3d14f6d15?w=400&h=400&fit=crop",
            },
            {
                id: 14,
                name: "Paneer Grilled Sandwich",
                price: 80,
                description: "Grilled paneer with herbs",
                image:
                    "https://images.unsplash.com/photo-1589301522481-1e9e00ea2ea2?w=400&h=400&fit=crop",
            },
            {
                id: 15,
                name: "Tandoori Sandwich",
                price: 90,
                description: "Tandoori spiced preparations",
                image:
                    "https://images.unsplash.com/photo-1528735602780-cf178f45ac51?w=400&h=400&fit=crop",
            },
            {
                id: 16,
                name: "Cheese & Tomato Sandwich",
                price: 75,
                description: "Melted cheese with fresh tomato",
                image:
                    "https://images.unsplash.com/photo-1553909092-d5b604d0c90d?w=400&h=400&fit=crop",
            },
        ],
    };

    const categories = [
        { id: "wafer-paav", label: "Wafer Paav" },
        { id: "cheese-wafer", label: "Cheese Wafer Paav" },
        { id: "pizza", label: "Pizza" },
        { id: "sandwich", label: "Sandwich" },
    ];

    return (
        <section className="menu-cards-section">
            <div className="container">
                <div className="menu-cards-header">
                    <h2 className="menu-cards-title">Our Menu</h2>
                    <p className="menu-cards-subtitle">
                        Discover our delicious offerings
                    </p>
                    <div className="title-underline"></div>
                </div>


                <div className="category-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`category-btn ${activeCategory === cat.id ? "active" : ""
                                }`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>


                <div className="menu-items-grid">
                    {menuItems[activeCategory].map((item) => (
                        <div key={item.id} className="menu-card">
                            <div className="menu-card-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="menu-card-image"
                                />
                            </div>

                            <div className="menu-card-content">
                                <h3 className="menu-item-name">{item.name}</h3>
                                <p className="menu-item-description">{item.description}</p>

                                <div className="menu-item-footer">
                                    <span className="menu-item-price">₹{item.price}</span>
                                </div>

                                <button className="order-now-btn">Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MenuCards;

