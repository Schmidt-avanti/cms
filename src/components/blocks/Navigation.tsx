'use client';

import React from 'react';
import Image from 'next/image';

interface MenuItem {
  label: string;
  url: string;
  id: string;
}

interface NavigationBlockProps {
  logo?: {
    url: string;
    alt: string;
  };
  awardBadge?: {
    url: string;
    alt: string;
  };
  tooltip?: string;
  menuItems: MenuItem[];
  phoneNumber?: string;
  phoneUrl?: string;
}

export const NavigationBlock: React.FC<NavigationBlockProps> = ({
  logo,
  awardBadge,
  tooltip,
  menuItems = [],
  phoneNumber,
  phoneUrl,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgb(23, 43, 82)' }}>
      <div className="container">
        <a className="navbar-brand tooltip-info d-flex align-items-center" href="#" data-tooltip={tooltip}>
          {logo && (
            <Image
              src={logo.url}
              alt={logo.alt}
              width={120}
              height={30}
              style={{ maxHeight: '30px', width: 'auto', marginRight: '15px' }}
            />
          )}
          {awardBadge && (
            <Image
              src={awardBadge.url}
              alt={awardBadge.alt}
              width={40}
              height={40}
              style={{ maxHeight: '40px', width: 'auto' }}
            />
          )}
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a className="nav-link text-white" href={item.url}>
                  {item.label}
                </a>
              </li>
            ))}
            {phoneNumber && phoneUrl && (
              <li className="nav-item">
                <a
                  className="btn text-white ms-2"
                  href={phoneUrl}
                  style={{
                    backgroundColor: '#e67e22',
                    borderRadius: '25px',
                    padding: '8px 20px',
                    fontWeight: '600',
                  }}
                >
                  {phoneNumber}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
