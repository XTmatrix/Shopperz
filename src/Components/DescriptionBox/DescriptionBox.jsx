import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="nav-box">Description</div>
        <div className="nav-box fade">Reviews (122)</div>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ut
          repudiandae perferendis illum itaque vero natus? Eius similique, ab
          ducimus expedita delectus minima amet tempora molestias suscipit hic
          ipsam, sapiente veritatis dolore nesciunt cupiditate perspiciatis est
          sunt modi ea aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          ducimus sit, magni architecto exercitationem cum porro sint provident,
          voluptatibus impedit repellendus sapiente officiis id quos. Dolor cum
          ipsum asperiores qui! Nihil, voluptates.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
