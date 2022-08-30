import React from "react";
import styled from "@emotion/styled";

const ButtonContainer = styled.div(() => ({
  width: "100vw",
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
}));

const ViewMoreButton = styled.button(() => ({
  width: "120px",
  height: "40px",
  backgroundColor: "gold",
  borderBottomLeftRadius: "0px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "15px",
  borderTopLeftRadius: "15px",
  margin: "20px 50px 0 0",
  cursor: "pointer",
  fontSize: "17px",
  border: "none",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  ":hover": {
    backgroundColor: "violet",
    transform: "scale(1.02)",
    border: "1px solid black",
  },
}));

function Button({ children, onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <ViewMoreButton>{children}</ViewMoreButton>
    </ButtonContainer>
  );
}

export default Button;
