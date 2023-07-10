import { Box, Center, Input, Select, Text } from "@chakra-ui/react";
import React from "react";


const MIN_RANGE_NUM = 30;

export const Home: React.FC = () => {
  const [inputArr, setInputArr] =  React.useState(() => Array.from(Array(MIN_RANGE_NUM).keys()));

  const selectHandler = (e) => {
    debugger;
    const selectedRange = Number(e.target.value) || MIN_RANGE_NUM ;
    setInputArr(() => Array.from(Array(selectedRange).keys()))
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
              <option value={40}>Kollekvium</option>
              <option value={50}>Final</option>
            </Select>
          </Box>
        </Box>
      </Center>

      <Box marginTop="1em">
        {inputArr.map((item) => (
          <Center key={item+'test'}>
            <Input width="60rem" value={item+1} />
          </Center>
        ))}
      </Box>
    </>
  );
};
