import Child from "./child";

export default function Sample(props) {
  return (
    <>
      <h3>{props.children}</h3>
      <Child />
    </>
  )
}