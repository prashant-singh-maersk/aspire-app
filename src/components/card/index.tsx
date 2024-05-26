import React, { useState } from 'react';

import { CardContainer } from './style';
import Eye from 'icons/remove_red_eye-24px-1.svg';
import BankLogo from 'icons/Aspire Logo-1.svg';
import VisaLogo from 'icons/Visa Logo.svg';

export interface CardProps {
  name?: string;
  id?: string | number;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  freezed?: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  expiryDate,
  cardNumber,
  cvv,
  freezed = false,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <CardContainer freezed={freezed}>
      <div className="show-hide-btn">
        <label htmlFor="showNumber">
          <img src={Eye} alt="show-hide" />
          <button
            name="showNumber"
            id="showNumber"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Card Number' : 'Show Card Number'}
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
            cardNumber?.split('').map((item,index)=> index !== 0 && index%4 === 0 ? ' ' + item  : item )
          ) : (
            <span>
              &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
              &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
            </span>
          )}
        </div>
        <div className="expiry-and-cvv">
          <span className="expiry">EXPIRY : {expiryDate}</span>
          <span>
            CVV :{' '}
            <span className="cvv">
              {showDetails ? cvv : <span>&#8226;&#8226;&#8226;</span>}
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
