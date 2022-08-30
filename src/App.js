import "./App.css";
import React, { useCallback, useState, useEffect } from "react";
import PeopleList from "./components/peopleList";
import Button from "./components/button";
import styled from "@emotion/styled";
import people from "./api/people.json";
import { motion } from "framer-motion";
import axios from "axios";

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
  color: "white",
  fontSize: "24px",
  textShadow: "1px 4px black",
}));

const ItemListContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Item = styled.p(() => ({
  fontStyle: "italic",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "gold",
  border: "0.5px solid black",
  borderRadius: "10px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  width: "200px",
  height: "50px",
}));

function App() {
  const initialState = people.people.map((people) => {
    return people;
  });

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3300/people").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleNextState = useCallback(() => {
    if (index !== initialState.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, [index, initialState]);

  return (
    <>
      <Button onClick={handleNextState}>{"Next State"}</Button>
      <Container>
        {initialState.map((person, i) => (
          <PeopleList key={i}>
            <TextBody>
              <ProductTitle>{person.name}</ProductTitle>
              <ItemListContainer>
                <motion.div
                  animate={{ y: index === 0 ? 0 : index === 1 ? 200 : 100 }}
                >
                  <Item>{person.State_1}</Item>
                </motion.div>
                <motion.div
                  animate={{ y: index === 0 ? 0 : index === 1 ? -50 : 100 }}
                >
                  <Item>{person.State_2}</Item>
                </motion.div>
                <motion.div
                  animate={{ y: index === 0 ? 0 : index === 1 ? -50 : -150 }}
                >
                  <Item>{person.State_3}</Item>
                </motion.div>
              </ItemListContainer>
            </TextBody>
          </PeopleList>
        ))}
      </Container>
    </>
  );
}

export default App;
