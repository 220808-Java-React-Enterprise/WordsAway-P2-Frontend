import React from "react";

export interface BottomBannerProps {
  name: string;
}

const BottomBanner = ({ name }: BottomBannerProps) => {
  return <div className="banner botbanner">{name}</div>;
};

export default BottomBanner;
