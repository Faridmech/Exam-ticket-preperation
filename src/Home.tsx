import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const MIN_RANGE_NUM = 30;

export const Home: React.FC = () => {
  const [inputArr, setInputArr] = React.useState(() =>
    Array.from(Array(MIN_RANGE_NUM).keys())
  );
  const selectHandler = (e) => {
    const selectedRange = Number(e.target.value) || MIN_RANGE_NUM;
    setInputArr(() => Array.from(Array(selectedRange).keys()));
  };

  const [, setQuestionArray] = useState<{ value: string; id: number }[]>([]);

  const [inputText, setInputText] = useState<string>("");

  const listHandeler = () => {
    if (inputText.trim()) {
      setQuestionArray((prev) => [
        ...prev,
        {
          value: inputText,
          id: prev.length ? (prev.at(-1)?.id ?? 0) + 1 : 0,
        },
      ]);
      console.log();
    }
  };

  return (
    <>
      <Center>
        <Box marginTop="4rem" display="flex">
          <Box>
            <Text fontSize="1.7rem">Zəhmət olmasa imtahan növün seçin</Text>
          </Box>
          <Box marginLeft="1rem" width="10rem">
            <Select onChange={selectHandler} placeholder="Seçi....">
              <option value={30}>Kollekvium</option>
              <option value={50}>Final</option>
            </Select>
          </Box>
        </Box>
      </Center>

      <FormControl>
        <Center>
          <Box marginTop="1em">
            {inputArr.map((item) => (
              <InputGroup key={item + "test"}>
                <InputLeftAddon
                  children={item + 1} 
                  width="3rem"
                  background="transparent"
                  border="none"
                />
                <Input
                  onChange={(e) => setInputText(e.target.value)}
                  width="75rem"
                  variant="flushed"
                  type="text"
                  paddingLeft="0.5rem"
                  overflow="hidden"
                  
                />
              </InputGroup>
            ))}
          </Box>
        </Center>

        <Center>
          <Button
            onClick={listHandeler}
            width="50rem"
            marginTop="3rem"
            marginBottom="3rem"
          >
            Submit
          </Button>
        </Center>
      </FormControl>
    </>
  );
};
