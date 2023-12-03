import React from "react";
import HomeScreen from "../../components/homeScreen/homeScreen";


export default function Home({params}) {
  return(
    <HomeScreen id={params.account_id}/>
  )
}
