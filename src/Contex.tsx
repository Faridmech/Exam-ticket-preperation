import React, { useState, useEffect, createContext, useContext } from "react";

interface MyObject {
  id: string;
  value: string;
}

const MIN_RANGE_NUM = 30;


const useStore = () => {

  const [inputText, setInputText] = useState<MyObject[]>(()=>{
    const savedInputText = localStorage.getItem("inputText");
    return savedInputText ? JSON.parse(savedInputText) : [];
  });

  
  useEffect(() => {
    // Save data to local storage whenever the inputText changes
    localStorage.setItem("inputText", JSON.stringify(inputText));
  }, [inputText]);
  



  const [questionArray, setQuestionArray] = useState({});

  const [inputArr, setInputArr] = React.useState(() =>
    Array.from(Array(MIN_RANGE_NUM).keys())
  );

  const selectHandler = (e) => {
    const selectedRange = Number(e.target.value) || MIN_RANGE_NUM;
    setInputArr(() => Array.from(Array(selectedRange).keys()));
  };

  const onChangeInputHandler = (id: string, value: string) => {
    setInputText((prev) => {
      
      const existingIndex = prev?.findIndex((item) => item.id === id) ?? -1;

      if (existingIndex !== -1) {
        
        const updatedInputText = [...(prev ?? [])];
        updatedInputText[existingIndex] = { id, value };
        return updatedInputText;
      } else {
       
        return [...(prev ?? []), { id, value }];
      }
    });
  };

  const onSubmit = () => {
    setQuestionArray(() => {
      
      return inputText;
    });
  };

  return {
    inputText,
    inputArr,
    questionArray,
    onChangeInputHandler,
    onSubmit,
    selectHandler,
  };
};

const StoreContext = createContext<any>({});

export const StoreContextProvider = ({ children }) => {
  const value = useStore();
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useFuad = () => useContext(StoreContext);
