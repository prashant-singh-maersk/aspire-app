import { MOCK_CARD_CREATION_DATA } from "./constants";

export const getCardsApi = () => {
  // TODO: error handling
  return new Promise((resolve, reject) => {
    const mockData = JSON.parse(localStorage.getItem("mockData") ?? '');
    resolve(mockData);
  });
};

export const addCardApi = ({ name }: {name: string}) => {
  // randomly generate and save card data
  const randomIndex =
    Math.floor(Math.random() * MOCK_CARD_CREATION_DATA.length - 1) + 1;
  const randomCardDetails = MOCK_CARD_CREATION_DATA[randomIndex];
  const cardData = {
    id: `${Math.floor(Math.random() * 100) + 1}_${name}`,
    name,
    ...randomCardDetails,
  };

  // TODO: error handling
  localStorage.setItem(
    "mockData",
    JSON.stringify([
      { ...cardData },
      ...JSON.parse(localStorage.getItem("mockData") ?? ''),
    ])
  );
  return Promise.resolve(true); // for mock purpose , always returning true
};
