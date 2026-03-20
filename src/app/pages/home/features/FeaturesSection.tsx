import {
  Icon,
  Text,
  Flex,
  Stack,
  HStack,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { featuresData } from "./featuresData";
import type { JSX } from "react";

export function FeaturesSection(): JSX.Element {
  return (
    <HStack px={"4rem"} w="full" justify={"center"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {featuresData.map((card) => (
          <VStack
            key={card.id}
            _hover={{
              transform: "translateY(-1px) scale(1.02)",
              boxShadow: "0 10px 25px rgba(154, 202, 56, 0.25)",
              borderColor: "#9ACA38",
              borderRadius: "4xl",
            }}
            gap={3}
            w={"full"}
            h={"14rem"}
            rounded={"2xl"}
            align={"stretch"}
            justify={"center"}
            bgColor={"#2c2c2c"}
            transition="all 0.2s ease"
          >
            <Stack>
              <VStack p={5} gap={3} rounded={"2xl"} bgColor={"#2c2c2c"}>
                <Flex
                  py={3}
                  px={3.5}
                  rounded={"2xl"}
                  bgColor={"#9ACA38/40"}
                >
                  <Icon as={card.icon} boxSize={6} color={"#9ACA38"} />
                </Flex>
                <Heading size="md" color={"#9ACA38"}>
                  {card.title}
                </Heading>
                <Text px={14} fontSize={14} textAlign="center" color="gray.300">
                  {card.description}
                </Text>
              </VStack>
            </Stack>
          </VStack>
        ))}
      </SimpleGrid>
    </HStack>
  );
}
