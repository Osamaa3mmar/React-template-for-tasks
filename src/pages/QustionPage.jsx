import { useEffect, useState } from "react";
import Headder from "../Components/Headder";
import Info from "../Components/Info";
import QustionCard from "../Components/QustionCard";

export default function QustionPage() {
    const [timee,setTime]=useState(15)
    
    if(timee==0){
        
        setTime(15);
    }
    console.log(timee)
    
    useEffect(()=>{
        // timer();
        const timer=setInterval(()=>{
        setTime(prev=>prev-1);

    },1000)
    },[])
  return (
    <div className=" rounded-md py-[30px] px-[20px] gap-6 bg-[#ffffff] flex flex-col w-[700px] items-center justify-center">
      <Headder/>
      <Info time={timee}/>
      <QustionCard question={"السؤال هون "}/>
    </div>
  )
}
