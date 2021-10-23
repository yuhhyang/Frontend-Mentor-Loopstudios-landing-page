import React, { useState } from "react";
const CreationsDesktop = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: "../images/desktop/image-deep-earth.jpg",
      title: "Deep earth",
    },
    {
      id: 2,
      image: "../images/desktop/image-night-arcade.jpg",
      title: "Night arcade",
    },
    {
      id: 3,
      image: "../images/desktop/image-soccer-team.jpg",
      title: "Soccer team VR",
    },
    {
      id: 4,
      image: "../images/desktop/image-grid.jpg",
      title: "The grid",
    },
    {
      id: 5,
      image: "../images/desktop/image-from-above.jpg",
      title: "From up above VR",
    },
    {
      id: 6,
      image: "../images/desktop/image-pocket-borealis.jpg",
      title: "Pocket borealis",
    },
    {
      id: 7,
      image: "../images/desktop/image-curiosity.jpg",
      title: "The curiosity",
    },
    {
      id: 8,
      image: "../images/desktop/image-fisheye.jpg",
      title: "Make it fisheye",
    }
  ]);
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
