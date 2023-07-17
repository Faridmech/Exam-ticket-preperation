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

  const [inputText, setInputText] = useState<{ [key in string]: string }>({});

  const onChangeInputHandler = (name: string, value: string) => {
    setInputText((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log("inputText", inputText);

  
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
                  
                  name={`${item}`}
                  id={`${item}`}
                  onChange={(e) => {
                    onChangeInputHandler(e.target.name, e.target.value);
                  }}
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
          <Button width="50rem" marginTop="3rem" marginBottom="3rem">
            Submit
          </Button>
        </Center>
      </FormControl>
    </>
  );
};
