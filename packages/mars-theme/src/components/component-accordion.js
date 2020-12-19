import React, { useState, useRef } from "react";
import { connect, styled } from "frontity";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <AccordionContainer className={`${setActive}`}>
      <AccordionSelector
        className={`accordion ${setActive}`}
        onClick={toggleAccordion}
      >
        <AccordionIndicator className={`${setActive}`} >
          {setActive? "-" : "+"}
        </AccordionIndicator>
        
        <AccordionTitle>{props.title}</AccordionTitle>
      </AccordionSelector>

        <Content
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
    </AccordionContainer>
  );
}

export default Accordion;

const Content = styled.div``;

const AccordionIndicator = styled.div`
  width: 75px;
  min-width: 75px;
  height: 75px;
  border-radius: 100px;
  background: white;
  box-shadow: 0px 25px 30px 5px #0000001a;
  font-size: 50px;
  font-family: 'Rubik';
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #707070;
`;

const AccordionTitle = styled.p`
  padding: 40px;
  font-size: 24px;
  color: #314452;
  font-weight: 300;
`;

const AccordionContainer = styled.div`
  
    & > ${Content} {
        display: none;
    }
    &.active > ${Content} {
        display: block;
        border-bottom: 1px solid #ccc;
        padding-bottom: 40px;
        padding-top: 40px;
    }
`;

const AccordionSelector = styled.button`
cursor: pointer;
  font-family: 'Rubik';
    background: none;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:focus {
      outline: none;
    }
  &.active {
    border-bottom: none;
  }
`;


