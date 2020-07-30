import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "bill",
      url: "https://img.caixin.com/2020-07-11/1594434224795356.jpg",
    },
    {
      name: "jessica",

      url:
        "https://vignette.wikia.nocookie.net/disney/images/1/1c/Jessica_Chastain.jpg/revision/latest?cb=20190827205115",
    },
  ]);
  //const people = [];

  return (
    <div>
      <h1>TidnerCards</h1>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
