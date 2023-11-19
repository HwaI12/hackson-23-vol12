import Sample from "./components/sample";
import { getResponse } from "../scripts/response";

export default async function Home() {
  const res = await getResponse("/api/13");
  console.log(res);

  return (
    <>
      <h1>Home</h1>
      <Sample text="props_text">
        {"Sample compornent"}
      </Sample>
    </>
  )
}
