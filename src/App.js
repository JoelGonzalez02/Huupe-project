import "./App.css";
import React, { useState } from "react";
import PeopleList from "./components/peopleList";
import Button from "./components/button";
import styled from "@emotion/styled";
import people from "./api/people.json";
import { AnimatePresence } from "framer-motion";

const Container = styled.div(() => ({
  width: "100vw",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "repeat(3, 300px)",
  gridGap: "25px",
  justifyContent: "center",
  alignItems: "center",
}));

const TextBody = styled.div(() => ({
  width: "100%",
  textAlign: "center",
}));

const ProductTitle = styled.p(() => ({
  fontWeight: "bold",
}));

const ItemListContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "200px",
}));

const Item = styled.p(() => ({
  fontStyle: "italic",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "gold",
  border: "0.5px solid black",
  borderBottomLeftRadius: "0px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "15px",
  borderTopLeftRadius: "15px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  width: "200px",
  height: "100px",
}));

const initialState = people.people.map((people) => {
  return people;
});

function App() {
  const [state1, setState1] = useState(
    initialState.map((people) => people.State_1)
  );

  return (
    <>
      <Button onClick={() => {}}>{"Next State"}</Button>
      <Container>
        <AnimatePresence>
          {people.people.map((person, i) => (
            <PeopleList key={i}>
              <TextBody>
                <ProductTitle>{person.name}</ProductTitle>
              </TextBody>
              <ItemListContainer>
                <Item>{person.State_1}</Item>
                <Item>{person.State_2}</Item>
                <Item>{person.State_3}</Item>
              </ItemListContainer>
            </PeopleList>
          ))}
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;
