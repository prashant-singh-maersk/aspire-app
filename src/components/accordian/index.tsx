import React, { useState, ReactNode } from "react";

import Arrow from "./../../icons/down-arrow.svg";

import { StyledAccordion } from "./styled";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpenDefaultState?: boolean;
  icon?: any;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpenDefaultState = false,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefaultState);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledAccordion isOpen={isOpen}>
      <button className="accordion-title" onClick={toggleAccordion}>
        <span className="flex">
          <span>{icon}</span>
          <span>{title}</span>
        </span>
        <img className="accordion-arrow" src={Arrow} alt="arrow" />
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </StyledAccordion>
  );
};

export default Accordion;
