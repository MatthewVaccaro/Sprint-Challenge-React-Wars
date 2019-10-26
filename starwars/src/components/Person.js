import React from "react";
import styled from "styled-components";

const Highlight = styled.span`
  font-weight: bold;
  color: blue;
`;

const MasterDiv = styled.div`
  background: white;
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
  width: 205px;
  box-shadow: 0px 10px 5px rgba(51, 51, 51, 0.09);
`;

function Person(props) {
  return (
    <MasterDiv className="cardContainer">
      <div className="mainContent">
        <h1>{props.dataPassed.name}</h1>
        <h3>
          {" "}
          <Highlight>Gender:</Highlight> {props.dataPassed.gender}
        </h3>
      </div>
      <div className="secondaryContent">
        <h3>
          <Highlight>Height:</Highlight>
          {props.dataPassed.height}
        </h3>
        <h3>
          <Highlight>Hair Color:</Highlight>
          {props.dataPassed.hair_color}
        </h3>
        <h3>
          <Highlight>Eye Color:</Highlight> {props.dataPassed.eye_color}
        </h3>
      </div>
    </MasterDiv>
  );
}

export default Person;
