import React from "react";
import styled from "@emotion/styled";

const Container = styled.div(() => ({
  margin: "25px",
}));

const StyledCard = styled.div(() => ({
  overflow: "hidden",
  transition: "200ms ease-in",
  width: "300px",
  height: "400px",
  background: "linearGradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",
  border: "0.5px solid black",
  borderBottomLeftRadius: "0px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "25px",
  borderTopLeftRadius: "25px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  ":hover": {
    transform: "scale(1.02)",
  },
}));

function PeopleList({ children }) {
  return (
    <Container>
      <StyledCard>{children}</StyledCard>
    </Container>
  );
}

export default PeopleList;
