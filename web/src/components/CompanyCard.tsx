import React from 'react';

import { Company } from '../types';

import './CompanyCard.css';

function CompanyCard({ name, logoUrl, coins }: Company) {
  return (
    <div className="CompanyCard">
      <div className="CompanyLogo">
        <img src={logoUrl} alt={name} />
      </div>
      <div className="CompanyDetails">
        <div className="CompanyName">{name}</div>
        <div className="CompanyCoins">
          {coins.map((coin) => (
            <div key={coin} className="CompanyCoin">
              {coin}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
