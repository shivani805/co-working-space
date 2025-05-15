import React from "react";
import "./Dashboard.css";
import { ReactComponent as SVGBanner } from "../../assets/svgs/coworkingvideo1.svg";
import { ReactComponent as SVGStar } from "../../assets/svgs/star.svg";
import workspaceImage from "../../assets/png/workspace.png";
import directionImage from "../../assets/png/direction.png";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="section1">
        <h1 className="header-text">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="price"> ₹199/-!/</span>
        </h1>
        <div>
          <SVGBanner />
        </div>
      </div>

      <div className="section2">
        <h1 className="">Why Choose us?</h1>
        <div className="flex">
          <div className="flex-nowrap">
            <SVGStar />
            <span>Community Events</span>
          </div>
          <div className="flex-nowrap">
            <SVGStar />
            <span>GYM facilities</span>
          </div>
          <div className="flex-nowrap">
            <SVGStar />
            <span>High-Speed wifi</span>
          </div>
          <div className="flex-nowrap">
            <SVGStar />
            <span>Cafe & Tea Bar</span>
          </div>
          <div className="flex-nowrap">
            <SVGStar />
            <span>Community Events</span>
          </div>
          <div className="flex-nowrap">
            <SVGStar />
            <span>GYM facilities</span>
          </div>
          <div className="flex-nowrap">
            <SVGStar />
            <span>High-Speed wifi</span>
          </div>
          <div className="flex-nowrap">
            <SVGStar />
            <span>Cafe & Tea Bar</span>
          </div>
        </div>
      </div>

      <div className="section3">
        <h1>Our Space Overview</h1>
        <div className="flex">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <div className="box-layout">
              <div className="flex-between">
                <h4 style={{ maxWidth: 200, margin: "0 0 13px 0" }}>
                  HSR Sector 6, Service Road
                </h4>
                <img
                  src={directionImage}
                  alt="workspace"
                  style={{ width: 44, height: 43 }}
                />
              </div>
              <img src={workspaceImage} alt="workspace" />
              <div className="price-details">
                <div className="">
                  <span className="pass">Day Pass</span>
                  <div className="pass-per-day">
                    ₹ 249<sub>/Day</sub>
                  </div>
                </div>
                <div className="">
                  <span className="pass">Bulk Pass</span>
                  <div className="pass-per-day">
                    ₹ 2490<sub>/10 Day</sub>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
