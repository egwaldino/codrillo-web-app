import {
  VStack,
  Stack,
  Icon,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { featuresData } from "./featuresData";
import type { JSX } from "react";

export function FeaturesSection(): JSX.Element {
  return (
    <HStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {featuresData.map((card) => (
          <VStack
            key={card.id}
            transition="0.2s"
            _hover={{ transform: "translateY(-4px)" }}
          >
            <Stack>
              <VStack
                w={"21rem"}
                h={"12rem"}
                p={5}
                rounded={"2xl"}
                bgColor={"#2c2c2c"}
                gap={3}
              >
                <Flex
                  rounded={"2xl"}
                  py={3}
                  px={3.5}
                  bgColor={"#9ACA38/40"}
                  justify={"center"}
                  align={"center"}
                >
                  <Icon as={card.icon} boxSize={6} color={"#9ACA38"} />
                </Flex>
                <Heading size="md" color={"#9ACA38"}>
                  {card.title}
                </Heading>
                <Text textAlign="center" color="gray.300">
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
