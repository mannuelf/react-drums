import React from "react";
import styled from "styled-components";

const Cord = styled.div`
  background: #222
    url("https://res.cloudinary.com/mannuel/image/upload/v1594126619/images/tasky_pattern/tasky_pattern.png")
    repeat;
  width: 15px;
  height: 120px;
  position: absolute;
  top: -120px;
  left: 8px;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
`;

const CordBase = styled.div`
  background-color: #2b2a2a;
  width: 30px;
  height: 20px;
  position: absolute;
  top: -23px;
  left: 20px;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
  border-radius: 3px 3px 0 0;
  border-bottom: 2px solid #000;
`;

const cable = () => {
  return (
    <>
      <CordBase>
        {" "}
        <Cord />
      </CordBase>
    </>
  );
};
export default cable;
