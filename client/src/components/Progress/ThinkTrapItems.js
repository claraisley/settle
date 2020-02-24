import React from "react";
import styled from "styled-components";
import { OneBackPack, TwoBackPack, ThreeBackPack, FourBackPack, FiveBackPack } from './backpacks'


const Value = styled.article`

`



export default function TrapItems(props) {

  const rounded = Object.entries(props.trapData).map((trap) => {
   return Math.round(trap[1])
  })
  

  const lookup = {
    0: "Catastrophizing",
    1: "Filtering",
    2: "Fortune-telling",
    3: "Mind-reading",
    4: "Black-and-white Thinking",
    5: "Over-generalization",
    6: "Should-statements"
  }

  const comps = [OneBackPack, TwoBackPack, ThreeBackPack, FourBackPack, FiveBackPack];

  const traps = rounded.map((trap, index) => {
    let Comp = comps[trap];
    return(
    <Value>
      <h1>{lookup[index]}</h1>
      <Comp/>
      </Value>)
  })

  return (
    <main>
      <article>
        <p>put legend here!</p>
        </article> 
      <article>
      {traps}
      </article>
    </main>
  )
}