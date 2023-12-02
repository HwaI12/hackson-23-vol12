// ホーム画面(現在はログインが入っている)
import Login from "../components/login/login";
export default async function Home() {
  // const res = await getResponse("/api/13");
  // console.log(res);

  return (
    <>
    <Login />
    </>
  )
}
