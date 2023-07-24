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
import { randomFromInterwal } from "./generateRandomBetweenTwo";
import { generatePdf } from "./utils";

export const Tickets: React.FC = () => {
  const { inputArr, questionArray } = useFuad();

  let questionNumber = Array(inputArr.length / 10).fill(null);

  const getTickets = () => {
    return Array(30)
      .fill(null)
      .map((_, index) => {
        return {
          id: index,
          questions: questionNumber.map((_) => {
            const question = questionArray[randomFromInterwal()];
            return question === undefined ? "" : question;
          }),
        };
      });
  };
  
  
  const handleExportPDF = () => {

    const data = getTickets(); // Get the data to export
    
    const transformedData = data.map((item, index) => ({
      id: index,
      questions:  "ferb" // Rename the 'text' property to 'question' to match the headers
    }));


    const headers = [
      { label: "Bilet", key: "id" },
      { label: "Suallar", key: "questions" },
    ]; // Define headers for the PDF table

    const filename = "tickets.pdf"; // Set the desired filename for the exported PDF

    // Call the utility function to generate and export the PDF
    generatePdf({ data: transformedData, headers, filename });
  };


  return (
    <>
      <Box marginTop="3rem">
        {getTickets().map((bilet, index) => (
          <Box
            key={index}
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
                {bilet.questions.map((question, i) => (
                  <Table
                    key={i}
                    variant="striped"
                    colorScheme="teal"
                    marginTop="0.6rem"
                  >
                    <Tbody>
                      <Tr>
                        <Td width="2rem">{i + 1}</Td>
                        <Td>{question.value}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                ))}
              </TableContainer>
            </Center>
          </Box>
        ))}
      </Box>
      <button onClick={handleExportPDF}>Export as PDF</button>
    </>
  );
};
