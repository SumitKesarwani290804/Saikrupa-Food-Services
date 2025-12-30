import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Get-in-touch.css";
import OurMembers from "./Our-member";
import Footer from "../components/footer";
import FloatingContact from "./Floating-contact";

function GetInTouch() {
    return (
        <>
            <Navbar />

            {/* CONTACT SECTION */}
            <div className="container my-5 contact-hover">
                <div className="row shadow rounded overflow-hidden">

                    {/* LEFT SIDE */}
                    <div className="col-lg-6 p-5 bg-light contact-left">
                        <h2 className="fw-bold mb-3">Get in Touch</h2>
                        <p className="text-muted mb-4">
                            We’re always ready to help and answer your business queries.
                        </p>

                        <p className="mb-2">📍 Near Saraswat Bank, Antop hill-400037</p>
                        <p className="mb-2">📧 saikrupafoodservices2024@gmail.com</p>
                        <p className="mb-2">📞 +91 72086 51335</p>
                        <p className="mb-2">🕒 Mon – Sun : 5PM – 11PM</p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-6 p-5 bg-white contact-right">
                        <h4 className="fw-bold mb-4">Place Your Enquiry</h4>

                        <form className="form-animate">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Drop a Message"
                                ></textarea>
                            </div>

                            <button className="btn btn-primary w-100 btn-animate">
                                Ask a Question
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <OurMembers />
            <Footer />
            <FloatingContact />
        </>
    );
}

export default GetInTouch;
