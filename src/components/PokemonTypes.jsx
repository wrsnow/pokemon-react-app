import React from "react";

export default function RenderPokeTypes(props) {
  console.log(props);
  return (
    <>
      <img src={props.url} alt={"type" + props.name} title={props.name} />
    </>
  );
}
