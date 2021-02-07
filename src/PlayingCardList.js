import React from "react";
// import uuid from "uuid";
// import axios from "axios";
import PlayingCard from "./PlayingCard";
import { useAxios } from "./hooks";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const url = "https://deckofcardsapi.com/api/deck/new/draw/";
  const [cards, addCard] = useAxios(url);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
