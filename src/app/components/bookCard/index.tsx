import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from "../responsive";
 
const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pr-6
    md:pl-6
  `};
`;

const ItemContainer = styled.div`
  ${tw`
    flex
    relative
    cursor-pointer
  `};
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-700
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    select-none
  `};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 3.5em;
  left: 0;

  ${({ offset }: any) => offset && css`
    left: -6em;
  `};
` as any;

export function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    setReturnCalendarOpen(false);
  }

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    setStartCalendarOpen(false);
  }

  return <CardContainer>
    <ItemContainer onClick={toggleStartDateCalendar}>
      <Icon>
        <FontAwesomeIcon icon={ faCalendarAlt } />
      </Icon>
      <Name>Pick Up Date</Name>
      <SmallIcon>
        <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown } />
      </SmallIcon>
      {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate} />}
    </ItemContainer>
    <LineSeperator/>
    <ItemContainer onClick={toggleReturnDateCalendar}>
      <Icon>
        <FontAwesomeIcon icon={ faCalendarAlt } />
      </Icon>
      <Name>Return Date</Name>
      <SmallIcon>
        <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown } />
      </SmallIcon>
      {isReturnCalendarOpen && <DateCalendar offset value={returnDate} onChange={setReturnDate} />}
    </ItemContainer>
    <Marginer direction="horizontal" margin="2em" />
    <Button text="Book Your Ride" />
  </CardContainer>
}