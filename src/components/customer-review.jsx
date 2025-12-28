import React, { useState, useEffect } from "react";
import "../styles/customer-review.css";

function CustomerReview() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      text: "Best wafer paav in town! Crispy, fresh and full of flavor.",
      role: "Regular Customer",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      text: "Amazing pizza and sandwiches. Fresh ingredients every time!",
      role: "Student",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      text: "Affordable price with excellent quality.",
      role: "Office Worker",
      rating: 4,
    },
    {
      id: 4,
      name: "Neha Desai",
      text: "Cheese wafer paav is my favorite here.",
      role: "Food Blogger",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getClass = (index) => {
    const total = testimonials.length;
    if (index === current) return "active";
    if (index === (current - 1 + total) % total) return "prev";
    if (index === (current + 1) % total) return "next";
    if (index === (current - 2 + total) % total) return "prev2";
    if (index === (current + 2) % total) return "next2";
    return "hidden";
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="title">What Our Customers Say</h2>

        <div className="testimonial-slider-wrapper">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-card ${getClass(index)}`}
            >
              <div className="card-inner">
                <p className="text">“{item.text}”</p>

                <div className="user-center">
                  <div className="photo-wrap">
                    <img
                      src="https://i.pravatar.cc/150"
                      alt={item.name}
                    />
                  </div>
                  <h4 className="name">{item.name}</h4>
                  <span className="role">{item.role}</span>
                </div>

                <div className="stars">
                  {"★".repeat(item.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReview;

