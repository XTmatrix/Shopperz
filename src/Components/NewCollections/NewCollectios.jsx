import React from "react";
import "./NewCollections.css";
import new_collections from "../Assets/new_collections";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item) => {
          return <Items key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
