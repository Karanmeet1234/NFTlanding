import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    {
      title: "NFT",
      data: ["OpenSea", "Maker", "Learn"],
    },
    {
      title: "Contact",
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook  href="data:image/png;base64,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"/>,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 NFT</span>
        <span>Launching August 2022</span>
      </div>
    </footer>
  );
}