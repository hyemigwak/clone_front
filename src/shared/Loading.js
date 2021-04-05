import React from "react";
import loading from "./loading.gif";
import styled from "styled-components";

const Loading = () => {
  return (
    <div style={{ width: "1024px", margin: "auto 0", textAlign: "center" }}>
      <LoadingImg src={loading} />
      <LoadingText>Loading....</LoadingText>
    </div>
  );
};

const LoadingImg = styled.img``;
const LoadingText = styled.h1`
  font-size: 36px;
`;

export default Loading;
