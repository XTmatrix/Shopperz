import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div>
        <input type="Email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
