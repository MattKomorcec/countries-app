import React from "react";
import "./map.css";

interface IProps {
  latLng: number[];
}

const Map: React.FC<IProps> = ({ latLng }) => {
  return (
    <div className="map-container">
      <iframe
        width="425"
        height="150"
        scrolling="no"
        title="Countries app"
        src={`https://maps.google.ch/maps?f=q&source=s_q&hl=en&ie=UTF8&t=m&ll=${latLng.join(
          ","
        )}&output=embed&z=7`}
      ></iframe>
    </div>
  );
};

export default Map;
