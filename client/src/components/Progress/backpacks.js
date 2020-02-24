import React from "react";
import styled from "styled-components";
import { Backpack } from "react-kawaii";

const BackPackDiv = styled.div` 
&&& {
  color: #FFD882;
  margin: 2em;
  display: flex;
}
`
const BackPackItem = styled(Backpack) `
padding: 1em;
`




export function OneBackPack() {
  return <BackPackItem size={100} mood="excited" />;
}

export function TwoBackPack() {
  return (
    <BackPackDiv>
      <BackPackItem size={100} mood="happy" />
      <BackPackItem size={100} mood="happy" />
    </BackPackDiv>
  );
}

export function ThreeBackPack() {
  return (
    <BackPackDiv>
      <BackPackItem size={100} mood="sad" />
      <BackPackItem size={100} mood="sad" />
      <BackPackItem size={100} mood="sad" />
    </BackPackDiv>
  );
}

export function FourBackPack() {
  return (
    <BackPackDiv>
      <BackPackItem size={100} mood="sad" />
      <BackPackItem size={100} mood="sad" />
      <BackPackItem size={100} mood="sad" />
      <BackPackItem size={100} mood="sad" />
    </BackPackDiv>
  );
}

export function FiveBackPack() {
  return (
    <BackPackDiv>
      <BackPackItem size={100} mood="ko" />
      <BackPackItem size={100} mood="ko" />
      <BackPackItem size={100} mood="ko" />
      <BackPackItem size={100} mood="ko" />
      <BackPackItem size={100} mood="ko" />
    </BackPackDiv>
  );
}