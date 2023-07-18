import React, { useState, createContext, useContext } from "react";

const MIN_RANGE_NUM = 30;
const useStore = () => {
  const [inputText, setInputText] = useState<{ [key in string]: string }>({});
  const [questionArray, setQuestionArray] = useState({});

  const [inputArr, setInputArr] = React.useState(() =>
    Array.from(Array(MIN_RANGE_NUM).keys())
  );

  const selectHandler = (e) => {
    const selectedRange = Number(e.target.value) || MIN_RANGE_NUM;
    setInputArr(() => Array.from(Array(selectedRange).keys()));
  };

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
