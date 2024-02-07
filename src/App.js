import Fatora from "./Components/Fatora/Fatora";
import Header from "./Components/Header/Header";

import "./App.css"
import { useState } from "react";

export default function App() {
  const [data , setData] = useState([])
  
  
  function incri(type){
    
    let afterData = [...data];
    for(let i = 0 ; i < afterData.length ; i++){
            if(afterData[i].type === type){
              afterData[i].qnt++;
              setData(afterData);
            }
        }

  }


  function decri(type){
    
    let afterData = [...data];
    for(let i = 0 ; i < afterData.length ; i++){
            if(afterData[i].type === type && afterData[i].qnt > 0){
              afterData[i].qnt--;
              setData(afterData);
            }
        }
  }



  function sendData(type ,price){
    let afterData = [...data];
    let check = true;
    for(let i = 0 ; i < afterData.length ; i++){
      if(afterData[i].type === type){
        check = false;
      }
    }
    if(check){
      afterData.push({type:type , price : price ,qnt : 1})
      
      setData(afterData);

    }else{
         for(let i = 0 ; i < afterData.length ; i++){
            if(afterData[i].type === type){
              afterData[i].qnt++;
              setData(afterData);
            }
        }

    }
    
    
  
  }




  return (
    <div className="App">
      <Header sendData={sendData}/>
      <Fatora data = {data} decri = {decri} incri = {incri}/>
    </div>
  );
}


