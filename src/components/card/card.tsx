import React, { useState } from "react";

import { CardContainer } from "./style";
import Eye from "icons/remove_red_eye-24px-1.svg";
import BankLogo from "icons/Aspire Logo-1.svg"
import VisaLogo from "icons/Visa Logo.svg";

interface CardProps {
  name?: string;
  id?: string | number;
  bank?: string;
  bankLogo?: string;
  type?: string; // visa or mastercard etc
  typeLogo?: string;
  maskedNumber?: string;
  maskedCvv?: string;
  color?: string;
  thru?: string;
  unMaskedNumber?: string; // unmasked values should come from api
  unMaskedCvv?: string; // unmasked values should come from api
  freezed?: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  bankLogo,
  typeLogo,
  thru,
  maskedNumber,
  maskedCvv,
  unMaskedNumber,
  unMaskedCvv,
  freezed = false,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <CardContainer freezed={freezed}>
      <div className="show-hide-btn">
        <label htmlFor="showNumber">
          <img
            src={Eye}
            alt="show-hide"
          />
          <button
            name="showNumber"
            id="showNumber"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Card Number" : "Show Card Number"}
          </button>
        </label>
      </div>
      <div className="credit-card">
        <p className="bank-logo">
          <img src={BankLogo} alt="logo" />
        </p>
        <div className="card-holder">{name}</div>
        <div className="card-number">
          {showDetails ? (
            <div className="unmasked">
              {unMaskedNumber?.split(" ")?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          ) : (
            <div className="masked">
              {maskedNumber?.split(" ")?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          )}
        </div>
        <div className="thru-and-cvv">
          <span className="thru">Thru: {thru}</span>
          <span>
            CVV:{" "}
            <span className="masked-cvv">
              {showDetails ? unMaskedCvv : maskedCvv}
            </span>
          </span>
        </div>
        <p className="bank-logo">
          <img src={VisaLogo} alt="logo" />
        </p>
      </div>
    </CardContainer>
  );
};

export default Card;
