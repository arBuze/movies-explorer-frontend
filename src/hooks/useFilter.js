import { useState, useEffect } from "react";

export default function useFilter(isShown, cards) {
  const [cardsShown, setCardsShown] = useState([]);

  useEffect(() => {
    if (isShown) {
      const filteredCards = cards.filter((item) => (item.duration <= 40))
      setCardsShown(filteredCards);
    }
  }, [isShown, cards])

  return cardsShown;
}
