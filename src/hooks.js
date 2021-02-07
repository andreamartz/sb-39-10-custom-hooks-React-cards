import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

// define useFlip
const useFlip = (initialState = true) => {
  const [isFacingUp, setIsFacingUp] = useState(initialState);

  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };

  return [isFacingUp, flipCard];
}

/**
 * define useAxios:
 *   * get data (a card) from an API
 *   * use the data to update state (the cards)
 */ 
const useAxios = (baseUrl) => {
  const [cards, setCards] = useState([]);
  
  // after the first render (and whenever url changes), get data from API and add to cards
  const addCard = async (ending='') => {
    try {
      const res = await axios.get(`${baseUrl}${ending}`);
      setCards(cards => [...cards, { ...res.data, id: uuid() }]);

    } catch (err) {
      console.log(err);
    }
  }

  return [cards, addCard];
}

export { useFlip, useAxios };