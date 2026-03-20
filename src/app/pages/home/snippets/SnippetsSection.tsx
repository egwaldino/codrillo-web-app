import {
  Text,
  Flex,
  Stack,
  VStack,
  HStack,
  Button,
  Heading,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import { type Snippet } from "./snippetsData";
import { CodeBlock, createShikiAdapter } from "@chakra-ui/react";
import { CodePreviewModal } from "./CodePreviewModal";

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

type SnippetsSectionProps = {
  snippets: Snippet[];
  searchQuery: string;
  selectedSnippetTitle?: string | null;
};

export const SnippetsSection = forwardRef<HTMLDivElement, SnippetsSectionProps>(
  ({ snippets }, ref) => {
            const [selectedSnippet, setSelectedSnippet] = useState<Snippet | null>(null);
    return (
      <div ref={ref}>
        <HStack w={"full"} px={"3.6rem"} justify={"space-between"}>
          <Flex mb={6} justify={"start"} flexDir={"column"}>
            <Text color={"#9ACA38"}>Snippets Recentes</Text>
            <Text fontSize={12} color={"#929292"}>
              Seus códigos mais usados e recentes
            </Text>
          </Flex>
          <Button
            w={28}
            type="submit"
            rounded={"xl"}
            color={"#9ACA38"}
            fontWeight={"bold"}
            borderWidth={"1px"}
            bgColor={"#1c1c1c"}
            alignSelf="flex-start"
            borderColor={"#9ACA38"}
          >
            Ver todos
          </Button>
        </HStack>

        <HStack px={"4rem"} w="full" justify={"center"}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {snippets.map((snippet) => (
              <VStack key={snippet.id} w={"full"} h={"18rem"}>
                <Stack>
                  <VStack
                    p={5}
                    gap={3}
                    w={"full"}
                    rounded={"2xl"}
                    align={"stretch"}
                    bgColor={"#2c2c2c"}
                  >
                    <VStack align="start" gap={1}>
                      <Heading size="md" color="#9ACA38">
                        {snippet.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.400">
                        {snippet.description}
                      </Text>
                    </VStack>

                    <CodeBlock.AdapterProvider value={shikiAdapter}>
                      <CodeBlock.Root
                        rounded="xl"
                        bg="#3A3A3A/62"
                        position="relative"
                        code={snippet.code}
                        language={snippet.language}
                        maxLines={5}
                        boxShadow="inset 0 0 0 1px #636463"
                      >
                        <CodeBlock.CopyTrigger asChild>
                          <IconButton
                            top={2}
                            size="xs"
                            right={2}
                            zIndex={1}
                            position="absolute"
                            color={"#9ACA38"}
                            bgColor={"transparent"}
                          >
                            <CodeBlock.CopyIndicator />
                          </IconButton>
                        </CodeBlock.CopyTrigger>
                        <CodeBlock.Content h="12rem" w="100%">
                          <CodeBlock.Code>
                            <CodeBlock.CodeText />
                          </CodeBlock.Code>

                          <CodeBlock.Overlay
                            display="flex"
                            alignItems="flex-end"
                            justifyContent="flex-end"
                          >
                            <Button
                              h={5}
                              w={12}
                              gap={2}
                              rounded={"xl"}
                              bg="#415022/74"
                              color="#9ACA38"
                              variant="outline"
                              fontSize={"0.6em"}
                              fontWeight={"light"}
                              _hover={{
                                transform: "translateY(-0.5px) scale(1.02)",
                                boxShadow:
                                  "0 10px 25px rgba(154, 202, 56, 0.25)",
                                borderColor: "#9ACA38",
                              }}
                              transition="all 0.2s ease"
                              onClick={() => setSelectedSnippet(snippet)}
                            >
                              ver mais
                            </Button>
                          </CodeBlock.Overlay>
                        </CodeBlock.Content>
                      </CodeBlock.Root>

                      <CodePreviewModal
                        open={!!selectedSnippet}
                        onClose={() => setSelectedSnippet(null)}
                        snippet={selectedSnippet}
                      />
                    </CodeBlock.AdapterProvider>
                  </VStack>
                </Stack>
              </VStack>
            ))}
          </SimpleGrid>
        </HStack>
      </div>
    );
  },
);
