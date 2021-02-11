import React from "react";
import "./styles.css";
import gmcngineLogo from "../../../images/gmcngineLogo.png";
import { FC } from "react";

type Props = {
  pageOrientation: "landscape" | "portrait";
};

const BannerFooter: FC<Props> = ({ pageOrientation }) => {
  const headerWidth = pageOrientation === "landscape" ? "11in" : "8.5in";

  return (
    <div className="banner-footer-container" style={{ width: headerWidth }}>
      <div className="banner-footer-phone-number-wrapper">
        <h3 className="banner-footer-ncmec-number">
          CALL: 1-800-843-5678 (1-800-THE-LOST)
        </h3>
        <h4 className="banner-footer-agency-number">
          Lompoc Police Department (California) 1-805-736-2341
        </h4>
      </div>
      <div className="banner-footer-gmcngine-logo">
        <img src={gmcngineLogo} width={105} />
      </div>
    </div>
  );
};

export default BannerFooter;
