import React, { FC } from "react";
import "./styles.css";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildPortraitBody from "./components/SingleChildPortraitBody";
import useCases from "../../shared/hooks/useCases";

type Props = {};

const SingleChildPortraitBanner: FC<Props> = () => {
  const { data, agency, qrCodeURL } = useCases();

  return (
    <div className="scp-container">
      <BannerHeader
        bannerColor="red"
        pageOrientation="portrait"
        qrCodeURL={qrCodeURL}
      />
      <SingleChildPortraitBody caseData={data} />
      <BannerFooter
        pageOrientation="portrait"
        agencyData={agency}
        caseData={data}
      />
    </div>
  );
};

export default SingleChildPortraitBanner;
