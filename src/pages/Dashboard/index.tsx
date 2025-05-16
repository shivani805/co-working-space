import React, { JSX } from "react";
import "./Dashboard.css";
import { ReactComponent as SVGBanner } from "../../assets/svgs/coworkingvideo1.svg";
import { ReactComponent as SVGStar } from "../../assets/svgs/star.svg";
import { ReactComponent as SVGGYM } from "../../assets/svgs/gym.svg";
import { ReactComponent as SVGRupee } from "../../assets/svgs/rupee.svg";
import { ReactComponent as SVGQuick } from "../../assets/svgs/quick.svg";
import { ReactComponent as SVGLounge } from "../../assets/svgs/lounge.svg";
import { ReactComponent as SVGSport } from "../../assets/svgs/sport.svg";
import { ReactComponent as SVGTea } from "../../assets/svgs/tea.svg";
import { ReactComponent as SVGWifi } from "../../assets/svgs/wifi.svg";
import directionImage from "../../assets/png/direction.png";
import googlePlayImage from "../../assets/png/googleplay.png";
import appleStoreImage from "../../assets/png/applestore.png";
import appImage from "../../assets/png/appImage.png";
import { useWorkspace } from "context/workspaceContext";

type WhyChooseUsItem = {
  text: string;
  icon: JSX.Element;
};

const Dashboard: React.FC = () => {
  const { workspaceData, loading } = useWorkspace();

  const whyChooseUsData: WhyChooseUsItem[] = [
    {
      text: "Community Events",
      icon: <SVGStar />,
    },
    { text: "GYM facilities", icon: <SVGGYM /> },
    { text: "High-Speed wifi", icon: <SVGWifi /> },
    { text: "Cafe & Tea Bar", icon: <SVGTea /> },
    { text: "Affordable", icon: <SVGRupee /> },
    { text: "Comfort Lounges", icon: <SVGLounge /> },
    { text: "Quick Booking", icon: <SVGQuick /> },
    { text: "Sports Area", icon: <SVGSport /> },
  ];

  return (
    <div className="dashboard-container">
      {/* section 1 */}
      <div className="section1-image-container">
        <div className="section1-container">
          <h1 className="header-text">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="price"> ₹199/-!/</span>
          </h1>
          <div className="">
            <SVGBanner className="svg-banner" />
          </div>
        </div>
      </div>
      <div className="center-container">
        {/* section 2 */}
        <div className="section2">
          <h1 className="">Why Choose us?</h1>
          <div className="flex-start">
            {whyChooseUsData.map((data) => (
              <div className="flex-nowrap">
                <div>{data.icon}</div>
                <div style={{ textWrap: "nowrap" }}>{data.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* section 3 */}
        <div className="section3">
          <h1>
            Our Spaces <span className="hidden">Overview</span>
          </h1>
          {loading ? (
            <div>Loading....</div>
          ) : (
            <div className="flex-start">
              {workspaceData?.map((data, index: number) => (
                <div className="box-layout" key={index}>
                  <div className="flex-between">
                    <h4 className="medium-text">{data.name}</h4>
                    <a
                      href={data.google_maps_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={directionImage}
                        alt="workspace"
                        style={{ width: 44, height: 43, cursor: "pointer" }}
                      />
                    </a>
                  </div>
                  <img src={`/${data.images[0]}`} alt="workspace" />
                  {data?.is_day_pass_enabled && (
                    <div className="price-details">
                      <button className="day-pass">
                        <span className="pass">Day Pass</span>
                        <div className="pass-per-day">
                          ₹ {data.day_pass_price}
                          <sub>/Day</sub>
                        </div>
                      </button>
                      <button className="bulk-pass">
                        <div className="absolute">
                          {data.day_pass_discounts_percentage[10]?.value}%
                          discount
                        </div>
                        <span className="pass">Bulk Pass</span>
                        <div className="pass-per-day">
                          ₹ {data.day_pass_price * 10}
                          <sub>/10 Days</sub>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="section4">
          <h1>Download our app now</h1>
          <div className="download-view">
            <img src={appImage} alt="phone" className="absolute-position" />
            <div className="download-text">
              <p>
                Boost your productivity with the BHIVE Workspace app. Elevate
                your workspace, collaborate efficiently, and unlock exclusive
                perks.
              </p>
              <div className="download-image">
                <img src={googlePlayImage} alt="google" />
                <img src={appleStoreImage} alt="apple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
