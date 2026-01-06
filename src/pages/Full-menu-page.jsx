/*import React from "react";
import "../styles/Full-menu-page.css";
import Navbar from "../components/Navbar";
import MyImage from '../assets/My Image .jpeg';
import Footer from "../components/footer";

function FullMenuPage() {
    const menuItems = [
        { id: 1, name: "Classic Wafer Paav", price: 20, slogan: "Simple, crispy & evergreen taste", image: MyImage },
        { id: 2, name: "Mayonnaise Wafer Paav", price: 25, slogan: "Creamy twist to a classic bite" },
        { id: 3, name: "Schezwan Wafer Paav", price: 25, slogan: "Spicy street-style flavour blast" },
        { id: 4, name: "Tandoori Wafer Paav", price: 45, slogan: "Smoky tandoori magic inside" },
        { id: 5, name: "Peri-Peri Wafer Paav", price: 45, slogan: "Hot, tangy & full of kick" },

        { id: 6, name: "Cheese Wafer Paav", price: 35, slogan: "Cheesy comfort in every bite" },
        { id: 7, name: "Cheese Mayo Wafer Paav", price: 40, slogan: "Double creaminess, double fun" },
        { id: 8, name: "Cheese Tandoori Wafer Paav", price: 50, slogan: "Cheese meets smoky tandoor" },
        { id: 9, name: "Cheese Peri-Peri Wafer Paav", price: 50, slogan: "Cheesy, spicy & irresistible" },
        { id: 10, name: "Saikrupa Special Wafer Paav", price: 55, special: true, slogan: "Our signature crowd favourite ⭐" },

        { id: 11, name: "Small Bread Pizza", price: 30, slogan: "Mini size, full pizza taste" },
        { id: 12, name: "Classic Pizza", price: 45, slogan: "Classic flavours done right" },
        { id: 13, name: "Mayonnaise Pizza", price: 55, slogan: "Creamy layer of deliciousness" },
        { id: 14, name: "Schezwan Pizza", price: 55, slogan: "Spicy desi pizza twist" },
        { id: 15, name: "Tandoori Pizza", price: 75, slogan: "Smoky, bold & flavourful" },
        { id: 16, name: "Peri-Peri Pizza", price: 75, slogan: "Fiery peri-peri punch" },
        { id: 17, name: "Extra Cheese Loaded Pizza", price: 75, slogan: "Loaded with extra cheese love" },
        { id: 18, name: "Saikrupa Special Pizza", price: 80, special: true, slogan: "House special, extra delicious 🍕" },

        { id: 19, name: "Classic Sandwich", price: 30, slogan: "Simple, fresh & filling" },
        { id: 20, name: "Mayonnaise Sandwich", price: 35, slogan: "Smooth, creamy & tasty" },
        { id: 21, name: "Schezwan Sandwich", price: 35, slogan: "Spicy street-style sandwich" },
        { id: 22, name: "Tandoori Sandwich", price: 40, slogan: "Grilled with smoky spices" },
        { id: 23, name: "Peri-Peri Sandwich", price: 40, slogan: "Bold peri-peri flavour kick" },
        { id: 24, name: "Cheese Sandwich", price: 45, slogan: "Melty cheese goodness inside" },
        { id: 25, name: "Saikrupa Special Sandwich", price: 55, special: true, slogan: "Perfectly grilled house special 🥪" },
    ];

    return (
        <>
            <Navbar />
            <section className="full-menu-section">
                <div className="container">
                    <div className="menu-header">
                        <h2>Full Menu</h2>
                        <p>Explore all our delicious items</p>
                    </div>

                    <div className="menu-grid">
                        {menuItems.map((item) => (
                            <div key={item.id} className="food-card">
                                <div className="food-image">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    {item.special && <span className="special-badge">★ Special</span>}
                                </div>

                                <div className="food-content">
                                    <h3>{item.name}</h3>
                                    <p className="food-slogan">{item.slogan}</p>
                                    <span className="price">₹{item.price}</span>
                                    <button className="order-btn-now">Order Now </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default FullMenuPage;*/

import React from "react";
import "../styles/Full-menu-page.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import foodData from "../components/Food-Details/FoodData";
import { useNavigate } from "react-router-dom";

function FullMenuPage() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <section className="full-menu-section">
                <div className="container">
                    <div className="menu-header">
                        <h2>Full Menu</h2>
                        <p>Explore all our delicious items</p>
                    </div>

                    <div className="menu-grid">
                        {foodData.map(item => (
                            <div key={item.id} className="food-card">
                                <div className="food-image">
                                    <img src={item.image} alt={item.name} />
                                    {item.special && <span className="special-badge">★ Special</span>}
                                </div>

                                <div className="food-content">
                                    <h3>{item.name}</h3>
                                    <p className="food-slogan">{item.description}</p>
                                    <span className="price">₹{item.price}</span>
                                    <button
                                        className="order-btn-now"
                                        onClick={() => navigate(`/Order-Page/${item.id}`)}
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default FullMenuPage;

