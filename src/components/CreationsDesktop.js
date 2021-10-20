import React, { useState } from "react";
import desktopdata from "../creations-desktop";
const CreationsDesktop = () => {
  const [cards, setCards] = useState(desktopdata);
  return (
    <section className="creations-desktop">
      <div className="title">
        <h2>Our creations</h2>
        <div className="btn-container">
          <button className="btn">See All</button>
        </div>
      </div>
      <section>
        {cards.map(card => {
          const { id, image, title } = card;
          return (
            <article key={id}>
              <div>
                <img src={image} alt={image} />
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default CreationsDesktop;
