import {
  Dialog,
  Portal,
  Box,
  Text,
  HStack,
  VStack,
  IconButton,
  CodeBlock,
  createShikiAdapter,
  Button,
} from "@chakra-ui/react";

import type { Snippet } from "./snippetsData";

type CodePreviewModalProps = {
  open: boolean;
  onClose: () => void;
  snippet: Snippet | null;
};

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

export function CodePreviewModal({
  open,
  onClose,
  snippet,
}: CodePreviewModalProps) {
  if (!snippet) return null;

  return (
    <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop
          bg="transparent"
          shadow={"none"}
          backdropFilter="blur(0.4px)"
        />

        <Dialog.Positioner>
          <Dialog.Content
            minW="full"
            minH="full"
            rounded="2xl"
            bg="#1c1c1c"
            boxShadow="none"
            color="white"
            p={12}
            px={52}
          >
            {/* HEADER */}
            <Dialog.Header p={0} mb={4}>
              <VStack align="start" gap={2} w="full">
                <HStack justify="space-between" w="full">
                  <Dialog.Title fontSize="2xl" color="#9ACA38">
                    {snippet.title}
                  </Dialog.Title>

                  <HStack>
                    {/* ⭐ Favorito (opcional) 
                    <IconButton
                      aria-label="favoritar"
                      size="sm"
                      variant="ghost"
                    >
                      ⭐
                    </IconButton>
                    */}
                    <Dialog.CloseTrigger m={10} asChild>
                      <IconButton aria-label="fechar" size="sm" variant="ghost">
                        ✕
                      </IconButton>
                    </Dialog.CloseTrigger>
                  </HStack>
                </HStack>

                <Text color="gray.400" fontSize="sm">
                  {snippet.description}
                </Text>

                {/* META INFO */}
                <HStack gap={3} fontSize="xs" color="gray.500">
                  <Text>2h atrás</Text>
                  <Text>•</Text>
                  <Text>Você</Text>

                  <Box
                    bg="#9ACA38"
                    color="#1c1c1c"
                    px={3}
                    py={0.5}
                    rounded="lg"
                    fontWeight="bold"
                  >
                    {snippet.language}
                  </Box>
                </HStack>
              </VStack>
            </Dialog.Header>

            {/* CODE BLOCK */}
            <Dialog.Body p={0}>
              <Box
                border="1px solid #9ACA38"
                rounded="xl"
                overflow="hidden"
                position="relative"
              >
                <CodeBlock.AdapterProvider value={shikiAdapter}>
                  <CodeBlock.Root
                    code={snippet.code}
                    language={snippet.language}
                    bg="#1e1e1e"
                    p={4}
                  >
                    <CodeBlock.CopyTrigger asChild>
                      <Button
                        fontWeight={"semibold"}
                                              fontSize={12}
                                              h={8}
                        position="absolute"
                        top={2}
                        right={2}
                        zIndex={1}
                        bg="#9ACA38"
                        rounded={"lg"}
                        color="#1c1c1c"
                        _hover={{
                          transform: "scale(1.05)",
                          boxShadow: "0 5px 15px rgba(154, 202, 56, 0.4)",
                        }}
                        transition="all 0.2s ease"
                      >
                        Copiar
                        <CodeBlock.CopyIndicator />
                      </Button>
                    </CodeBlock.CopyTrigger>
                    <CodeBlock.Content>
                      <CodeBlock.Code>
                        <CodeBlock.CodeText />
                      </CodeBlock.Code>
                    </CodeBlock.Content>
                  </CodeBlock.Root>
                </CodeBlock.AdapterProvider>
              </Box>

              {/* TAGS (opcional)
              <VStack align="start" mt={4}>
                <Text fontSize="sm" color="gray.400">
                  Tags
                </Text>

                <HStack>
                  <Box px={3} py={1} bg="#2c2c2c" rounded="full">
                    React
                  </Box>
                  <Box px={3} py={1} bg="#2c2c2c" rounded="full">
                    Hooks
                  </Box>
                  <Box px={3} py={1} bg="#2c2c2c" rounded="full">
                    Performance
                  </Box>
                </HStack>
                          </VStack> 
              */}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
