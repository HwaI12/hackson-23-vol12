import { useRouter } from "next/navigation";
import React from "react";
import HomeScreen from "../../components/homeScreen/homeScreen";

export default function Home() {
  const router = useRouter();
  const { account_id } = router.query;
    console.log(account_id);
  return(
    <HomeScreen/>
  )
}
