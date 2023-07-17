import React, { useState, createContext, useContext } from "react";

const useStore = () => {
  const [inputText, setInputText] = useState<{ [key in string]: string }>({});
  const [questionArray, setQuestionArray] = useState({});

  const onChangeInputHandler = (name: string, value: string) => {
    setInputText((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = () => {
    setQuestionArray(() => {
      return inputText;
    });
  };
  console.log(questionArray)
  return {
    inputText,
    questionArray,
    onChangeInputHandler,
    onSubmit,
  };
};



const StoreContext = createContext<any>({});

export const StoreContextProvider = ({ children }) => {
  const value = useStore()
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
};

export const useFuad = () => useContext(StoreContext)

