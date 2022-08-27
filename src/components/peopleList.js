import React from "react";
import styled from "@emotion/styled";
import { motion, usePresence } from "framer-motion";

const Container = styled.div(() => ({
  margin: "25px",
}));

const StyledCard = styled.div(() => ({
  overflow: "hidden",
  transition: "200ms ease-in",
  width: "300px",
  height: "300px",
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
  //   background: "red",
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

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

function PeopleList({ children }) {
  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: "out",
    style: {
      position: isPresent ? "static" : "absolute",
    },
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scaleY: 1, opacity: 1 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition,
  };

  return (
    <motion.div {...animations}>
      <Container>
        <StyledCard>{children}</StyledCard>
      </Container>
    </motion.div>
  );
}

export default PeopleList;
