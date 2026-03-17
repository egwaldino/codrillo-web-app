import {
  VStack,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { CodeBlock, createShikiAdapter } from "@chakra-ui/react";
import { snippetsData } from "./snippetsData";
import { type JSX } from "react";

const shikiAdapter = createShikiAdapter({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    });
  },
  theme: "github-dark",
});

export function SnippetsSection(): JSX.Element {
  return (
    <>
      <HStack px="12" w={"full"} justify={"space-between"}>
        <Flex justify={"start"} flexDir={"column"}>
          <Text color={"#9ACA38"}>Snippets Recentes</Text>
          <Text fontSize={12} color={"#929292"}>
            Seus códigos mais usados e recentes
          </Text>
        </Flex>
        <Button
          w={28}
          type="submit"
          color={"#9ACA38"}
          fontWeight={"bold"}
          rounded={"xl"}
          bgColor={"#1c1c1c"}
          borderWidth={"1px"}
          borderColor={"#9ACA38"}
          alignSelf="flex-start"
        >
          Ver todos
        </Button>
      </HStack>

      <HStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {snippetsData.map((card) => (
            <VStack key={card.id}>
              <Stack>
                <VStack
                  w={"21rem"}
                  p={5}
                  rounded={"2xl"}
                  bgColor={"#2c2c2c"}
                  align={"stretch"}
                  gap={3}
                >
                  <VStack align="start" gap={1}>
                    <Heading size="md" color="#9ACA38">
                      {card.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.400">
                      {card.description}
                    </Text>
                  </VStack>

                  <CodeBlock.AdapterProvider value={shikiAdapter}>
                    <CodeBlock.Root
                      rounded="xl"
                      paddingX={2}
                      paddingY={4}
                      code={card.code}
                      bg="#3A3A3A/62"
                      boxShadow="inset 0 0 0 1px #636463"
                      language={card.language}
                      position="relative"
                    >
                      <CodeBlock.CopyTrigger asChild>
                        <IconButton
                          color={"#9ACA38"}
                          bgColor={"transparent"}
                          size="xs"
                          position="absolute"
                          top={2}
                          right={2}
                          zIndex={1}
                        >
                          <CodeBlock.CopyIndicator />
                        </IconButton>
                      </CodeBlock.CopyTrigger>
                      <CodeBlock.Content
                        pt={0}
                        pl={0}
                        maxW="20.5rem"
                        maxH="110px"
                      >
                        <CodeBlock.Code>
                          <CodeBlock.CodeText />
                        </CodeBlock.Code>
                      </CodeBlock.Content>
                    </CodeBlock.Root>
                  </CodeBlock.AdapterProvider>
                </VStack>
              </Stack>
            </VStack>
          ))}
        </SimpleGrid>
      </HStack>
    </>
  );
}
