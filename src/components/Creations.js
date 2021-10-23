import React, { useState } from "react";
const Creations = () => {
  const [cards, setCards] = useState([
  {
    id: 1,
    image: "../images/mobile/image-deep-earth.jpg",
    title: "Deep earth",
  },
  {
    id: 2,
    image: "../images/mobile/image-night-arcade.jpg",
    title: "Night arcade",
  },
  {
    id: 3,
    image: "../images/mobile/image-soccer-team.jpg",
    title: "Soccer team VR",
  },
  {
    id: 4,
    image: "../images/mobile/image-grid.jpg",
    title: "The grid",
  },
  {
    id: 5,
    image: "../images/mobile/image-from-above.jpg",
    title: "From up above VR",
  },
  {
    id: 6,
    image: "../images/mobile/image-pocket-borealis.jpg",
    title: "Pocket borealis",
  },
  {
    id: 7,
    image: "../images/mobile/image-curiosity.jpg",
    title: "The curiosity",
  },
  {
    id: 8,
    image: "../images/mobile/image-fisheye.jpg",
    title: "Make it fisheye",
  }
]);
  return (
    <section className="creations-mobile">
      <h2>Our creations</h2>
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
      <div className="btn-container">
        <button className="btn">See All</button>
      </div>
    </section>
  );
};

export default Creations;
