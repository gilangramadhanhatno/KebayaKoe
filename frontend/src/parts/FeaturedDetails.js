import React from "react";

export default function FeaturedDetails({ data }) {
  return (
    <section className="container">
      <div className="row featured">
        <div className="col">
          <div className="featured-img">
            <img src={data.imageUrl} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}