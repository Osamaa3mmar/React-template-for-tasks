import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CurrentUserContext=createContext();





export const CurrentUserContextProvider=({children})=>{
  
    return (
        <CurrentUserContext.Provider value={{}}>
        {children}

        </CurrentUserContext.Provider>
    )
}

//بنحوط الكومبوننت ب 
//<CurrentUserContextProvider>   (myComponent/page)           <CurrentUserContextProvider/>
export default CurrentUserContextProvider;