import React from "react";
import "../styles/Our-member.css";
import Member1 from "../assets/My Image .jpeg"

function OurMembers() {
    return (
        <div className="container my-5">
            <h2 className="text-center fw-bold mb-2 members-title">
                Our Team Member
            </h2>

            {/* LOADING STYLE LINE */}
            <div className="members-loader"></div>

            <div className="row g-4 mt-4">

                {/* MEMBER 1 */}
                <div className="col-lg-3 col-md-6">
                    <div className="member-card text-center">
                        <img
                            src={Member1}
                            alt="Member"
                            className="member-img"
                        />
                        <h5 className="mt-3 mb-1">Rahul Sharma</h5>
                        <p className="text-muted mb-1">Founder</p>
                        <p className="small mb-0">📧 rahul@email.com</p>
                        <p className="small">📞 98765 43210</p>
                    </div>
                </div>

                {/* MEMBER 2 */}
                <div className="col-lg-3 col-md-6">
                    <div className="member-card text-center">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Member"
                            className="member-img"
                        />
                        <h5 className="mt-3 mb-1">Amit Verma</h5>
                        <p className="text-muted mb-1">Manager</p>
                        <p className="small mb-0">📧 amit@email.com</p>
                        <p className="small">📞 91234 56789</p>
                    </div>
                </div>

                {/* MEMBER 3 */}
                <div className="col-lg-3 col-md-6">
                    <div className="member-card text-center">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Member"
                            className="member-img"
                        />
                        <h5 className="mt-3 mb-1">Suresh Patel</h5>
                        <p className="text-muted mb-1">Chef</p>
                        <p className="small mb-0">📧 suresh@email.com</p>
                        <p className="small">📞 99887 66554</p>
                    </div>
                </div>

                {/* MEMBER 4 */}
                <div className="col-lg-3 col-md-6">
                    <div className="member-card text-center">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Member"
                            className="member-img"
                        />
                        <h5 className="mt-3 mb-1">Kunal Singh</h5>
                        <p className="text-muted mb-1">Support</p>
                        <p className="small mb-0">📧 kunal@email.com</p>
                        <p className="small">📞 90123 45678</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurMembers;
