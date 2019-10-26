import React, { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person.js";
import styled from "styled-components";

//Styled Stuff
const Container = styled.div`
  width: 900px;
  display: flex;
  flex-flow: wrap;
`;

function PersonList() {
  //Data is held here
  const [data, setData] = useState([]);

  //Data calls happen here
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <Container>
      {data.map(cv => {
        return <Person dataPassed={cv} />;
      })}
    </Container>
  );
}

export default PersonList;
