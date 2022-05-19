import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [badImg,setBadImg] = useState('')
  const [goodImg,setGoodImg] = useState('')

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData,badImg,setBadImg,goodImg,setGoodImg } = useContext(StepperContext);

  return { userData, setUserData };
}
