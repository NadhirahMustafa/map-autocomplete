import React from "react";
import { footer } from "../constants/message.constant";
import "../styles/Styles.scss";

const Footer: React.FC = () => {

  return (
    <div className="footer--padding-top">
        <div className="footer--background">{footer.footer}</div>
      </div>
  );
};

export default Footer;