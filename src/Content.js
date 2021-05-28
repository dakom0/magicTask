import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Content.css";
import BackgroundVid from "./ylgazc7lig_1920x900.mp4";
import FlipMove from "react-flip-move";
import Card from "./Card";

const Content = ({ cardSetToFetch }) => {
  const [cards, setCards] = useState([]);

  const [releaseDate, setReleaseDate] = useState("");

  useEffect(() => {
    if (cardSetToFetch !== "") {
      async function getSet() {
        const res = await axios.get(
          `https://api.magicthegathering.io/v1/cards?set=${cardSetToFetch}`
        );
        const data = res.data;
        setCards(data.cards);
        console.log(data.cards);
        return data;
      }

      getSet();

      async function getReleaseDate() {
        const res = await axios.get(
          `https://api.magicthegathering.io/v1/sets/${cardSetToFetch}`
        );
        const data = res.data;

        setReleaseDate(data.set.releaseDate);
      }

      getReleaseDate();
    }
  }, [cardSetToFetch]);

  return (
    <div className="content">
      <div className="fullScreenDiv">
        <video
          className="background"
          src={BackgroundVid}
          muted
          autoPlay
          loop
          alt={"Magic The Gathering"}
        />
      </div>
      <div className="cards">
        <FlipMove className="cardPool">
          {cards.map((card) => {
            return <Card card={card} releaseDate={releaseDate} key={card.id} />;
          })}
        </FlipMove>{" "}
      </div>
    </div>
  );
};

export default Content;
