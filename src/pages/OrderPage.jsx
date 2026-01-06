import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import foodData from "../components/Food-Details/FoodData";
import "../styles/OrderPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useCart } from "../Context/Cart-context";


function OrderPage() {
    const { addToCart } = useCart();

    const { id } = useParams();
    const foodItem = foodData.find(item => item.id === parseInt(id));

    // ✅ Hooks always at top-level
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Reset options when foodItem changes
    useEffect(() => {
        setSelectedOptions([]);
        setQuantity(1);
    }, [foodItem]);

    // If food not found, show message
    if (!foodItem) return <p>Food not found!</p>;

    const basePrice = foodItem.price;
    const optionPrice = selectedOptions.reduce((acc, option) => acc + option.price, 0);
    const totalPrice = (basePrice + optionPrice) * quantity;

    const handleOptionChange = (option, checked) => {
        if (checked) setSelectedOptions([...selectedOptions, option]);
        else setSelectedOptions(selectedOptions.filter(o => o.label !== option.label));
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: foodItem.id,
            name: foodItem.name,
            image: foodItem.image,
            basePrice: foodItem.price,
            options: selectedOptions,
            quantity,
            totalPrice,
        };

        addToCart(cartItem);
        alert("Item added to cart 🛒");
    };

    return (
        <>
            <Navbar />
            <div className="order-page">
                <div className="order-container">
                    {/* Left: Food Image */}
                    <div className="order-image">
                        <img src={foodItem.image} alt={foodItem.name} />
                    </div>

                    {/* Right: Food Details */}
                    <div className="order-details">
                        <h1>{foodItem.name}</h1>
                        <p className="description">{foodItem.description}</p>
                        <p className="prep-time">Prep Time : {foodItem.prepTime}</p>
                        <p className="base-price">Price : ₹{foodItem.price}</p>

                        {foodItem.options.length > 0 && (
                            <div className="options">
                                <h3>Options:</h3>
                                {foodItem.options.map(option => (
                                    <label key={option.label}>
                                        <input
                                            type="checkbox"
                                            onChange={e => handleOptionChange(option, e.target.checked)}
                                        />
                                        {option.label} (+₹{option.price})
                                    </label>
                                ))}
                            </div>
                        )}

                        <div className="quantity">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)}>+</button>
                        </div>

                        {/* Total Price */}
                        <p className="total-price">Total: ₹{totalPrice}</p>

                        {/* Add to Cart */}
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default OrderPage;
