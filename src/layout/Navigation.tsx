import { Link } from "react-router-dom";

import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { NAVS } from "./const";
import { useIsActiveRoute } from "./hooks";


export const Navigations: React.FC = () => {
  const { checkIsActive } = useIsActiveRoute();

  return (
    <>
      <HStack
        zIndex={2}
        w="100%"
        justify="center"
        spacing="20px"
        borderRadius="5px"
        p="10px"
        bg="blackAlpha.100"
        mt="15px"
        pos="sticky"
        top="5px"
      >
        {NAVS.map((nav) => {
          const isActive = checkIsActive(nav.to);
          return (
            <Link style={{cursor: 'pointer'}} key={nav.to} to={nav.to}  >
              <VStack
                spacing="0"
                transition="0.2s ease-in"
                color={isActive ? "blue.400" : "black"}
              >
                
                <Text
                  textUnderlineOffset={5}
                  transition="0.05s ease-in"
                  textDecoration={isActive ? "underline" : "unset"}
                >
                  {nav.name}
                </Text>
              </VStack>
            </Link>
          );
        })}
      </HStack>
      
    </>
  );
};
