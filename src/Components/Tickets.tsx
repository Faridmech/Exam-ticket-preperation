import React from "react";
import { useFuad } from "Contex";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Center,
  Box,
} from "@chakra-ui/react";

export const Tickets: React.FC = () => {
  const { inputArr } = useFuad();

  let questionNumber = Array(inputArr.length / 10).fill(0);
  console.log(questionNumber);
  const ticketNumber = Array(30).fill(0);
  ticketNumber.map((i)=>{
    console.log(i)
  })
  //const { questionArray } = useFuad();
  //let keys = Object.keys(questionArray)
  //let value:string = Object.values(questionArray)

  return (
    <>
      <Box marginTop="3rem">
        {ticketNumber.map((curr, index) => (
          <Box
            marginTop="20px"
            border="2px solid black"
            borderRadius="15px"
            paddingBottom="10px"
          >
            <Center>
              <Box marginBottom="1rem">Bilet No: {index + 1} </Box>
            </Center>
            <Center>
              <TableContainer width="80rem">
                {questionNumber.map((currEl, i) => (
                  <Table
                    variant="striped"
                    colorScheme="teal"
                    marginTop="0.6rem"
                  >
                    <Tbody>
                      <Tr>
                        <Td width="2rem">{i + 1}</Td>
                        <Td>sual</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                ))}
              </TableContainer>
            </Center>
          </Box>
        ))}
      </Box>
    </>
  );
};
