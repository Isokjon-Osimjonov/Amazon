import React, { useState } from "react";
import "./Header.css";
import { HiOutlineLocationMarker, HiMenu } from "react-icons/hi";
import { FiSearch, FiChevronDown, FiShoppingCart } from "react-icons/fi";

const Header = ( {func}) => {
  const [serachbarActive, setSerachbarActive] = useState(false);
  const [languageActive, setLanguageActive] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img
            className="logo_image"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt=""
          />
        </div>
        <div className="header_delivery">
          <p>Delivery</p>
          <h3>
            <HiOutlineLocationMarker />
            Uzbekistan
          </h3>
        </div>
        <div
          className="header_searchbar"
          style={
            serachbarActive
              ? {
                  boxShadow: "0px 0px 0px 3px #ff9900"
                }
              : null
          }
        >
          <select className="serachbar_select">
            <option value="all">All departments</option>
            <option value="art&crafts">Arts & Crafts</option>
            <option value="automotive">Automotive</option>
            <option value="baby">Baby</option>
          </select>
          <input
            type="text"
            className="searchbar_input"
            onClick={() => setSerachbarActive(true)}
          />
          <button className="searchbar_button">
            {" "}
            <FiSearch />
          </button>
        </div>
        {serachbarActive && (
          <div className="fade" onClick={() => setSerachbarActive(false)}></div>
        )}
        {languageActive && (
          <div
            className="fade"
            onMouseOver={() => setLanguageActive(false)}
          ></div>
        )}
        <div
          className="header_language"
          onMouseOver={() => setLanguageActive(true)}
        >
          <img
            className="language_image"
            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
            alt=""
          />
          <FiChevronDown />

          <div className="language__select">
            <p>
              Change Language{" "}
              <a href="https://www.google.com" className="learn__more">
                Learn More
              </a>
            </p>

            <ul className="select__collection">
              <li className="collection__item">
                <label htmlFor="en">
                  <input type="radio" name="en" id="lang" />
                  English - EN
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="es">
                  <input type="radio" name="lang" id="es" />
                  Español - ES
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="lang">
                  <input type="radio" name="lang" id="lang" />
                  简体中文 - ZH
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="lang">
                  <input type="radio" name="lang" id="lang" />
                  Deutsch - DE
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="lang">
                  <input type="radio" name="lang" id="lang" />
                  Português - PT
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="lang">
                  <input type="radio" name="lang" id="lang" />
                  繁體中文 - ZN
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="lang">
                  <input type="radio" name="lang" id="lang" />
                  한국어 - KO
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="lang">
                  <input type="radio" name="lang" id="lang" />
                  עברית - HE
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="lang">
                  <input type="radio" name="lang" id="lang" />
                  العربية - AR
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="header_accountLists">
          <p>Hello, Sign in</p>
          <h3>
            Account & Lists
            <FiChevronDown />
          </h3>
        </div>
        <div className="header_orders">
          <p>Returns</p>
          <h3>& Orders</h3>
        </div>
        <div className="header_cart">
          <h4>
            <FiShoppingCart />
            Cart
          </h4>
        </div>
      </div>
      <div className="navbar">
        <ul className="nav_ul">
          <li  onClick={func}>
            <HiMenu />
            All
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
