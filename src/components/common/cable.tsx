import React from "react";
import styled from "styled-components";

const Cord = styled.div`
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%236f6f6f' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
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
