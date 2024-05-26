export interface CardDetails {
  name: string;
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}

export const getCardsApi = () => {
  return new Promise((resolve, reject) => {
    const mockData = JSON.parse(localStorage.getItem('mockData') ?? "{}");
    resolve(mockData);
  });
};

export const addCardApi = ({
  name,
  cardNumber,
  cvv,
  expiryDate,
}: CardDetails) => {
  const cardData = {
    id: `${Math.floor(Math.random() * 100) + 1}_${name}`,
    name,
    cardNumber,
    cvv,
    expiryDate,
  };

  localStorage.setItem(
    'mockData',
    JSON.stringify([
      { ...cardData },
      ...JSON.parse(localStorage.getItem('mockData') ?? ''),
    ])
  );
  return Promise.resolve(true);
};
