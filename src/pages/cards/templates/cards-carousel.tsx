import React, { useState } from 'react';



import FreezeIcon from 'icons/Freeze card.svg';
import SpendLimit from 'icons/Set spend limit.svg';
import AddGpay from 'icons/GPay.svg';
import ReplaceCard from 'icons/Replace card.svg';
import CancelCard from 'icons/Deactivate card.svg';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { CarouselContainer, StyledAction,CardContainer } from '../style';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card, { CardProps } from 'components/card';

interface CarouselProps {
  cards: CardProps[];
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

const Carousel: React.FC<CarouselProps> = ({ cards, setCards }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const freezed = cards[currentImageIndex]?.freezed;

  const handleFreeze = () => {
    setCards((cards: any[]) => {
      return cards.map((card, id) => {
        if (id === currentImageIndex) {
          return { ...card, freezed: !card.freezed };
        }
        return { ...card };
      });
    });
  };

  return (
    <CarouselContainer >
      <div>
        <CardContainer>
          <ResponsiveCarousel showArrows={false} swipeable={true} showStatus={false} onChange={(index)=>{
            setCurrentImageIndex(index);
          }}>
            {cards.map((image) => (
              <Card key={image.id} {...image} />
            ))}
          </ResponsiveCarousel>
        </CardContainer>
      </div>
      <StyledAction key={cards[currentImageIndex]?.id}>
        <button onClick={() => handleFreeze()}>
          <img src={FreezeIcon} alt={freezed ? 'unfreeze':'freeze'} />
          <div> {freezed ? 'Unfreeze card' : 'Freeze card'}</div>
        </button>
        <button disabled={freezed}>
          <img src={SpendLimit} alt={'spend limit'} />
          <div>Set spend limit</div>
        </button>
        <button disabled={freezed}>
          <img src={AddGpay} alt={'gpay logo'} />
          <div>Add to GPay</div>
        </button>
        <button disabled={freezed}>
          <img src={ReplaceCard} alt={'replace card'} />
          <div>Replace card</div>
        </button>
        <button disabled={freezed}>
          <img src={CancelCard} alt={'cancel card'} />
          <div>Cancel card</div>
        </button>
      </StyledAction>
    </CarouselContainer>
  );
};

export default Carousel;
