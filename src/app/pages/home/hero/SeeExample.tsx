import {
  Button,
  Dialog,
  Portal,
  CloseButton,
  AspectRatio,
} from "@chakra-ui/react";

export const SeeExample = () => {
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <Button
          w={32}
          h={10}
          size="xs"
          rounded={"xl"}
          variant="outline"
          color={"#9ACA38"}
          bgColor={"#1c1c1c"}
          fontWeight={"semibold"}
          borderColor={"#9ACA38"}
          _hover={{
            transform: "translateY(-1px) scale(1.02)",
            boxShadow: "0 10px 25px rgba(154, 202, 56, 0.25)",
            borderColor: "#9ACA38",
          }}
          transition="all 0.2s ease"
        >
          Ver exemplo
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW={{ base: "90%", md: "300px", lg: "600px" }}>
            <Dialog.Body pt="4">
              <Dialog.Title color={"#9ACA38"}>
                Como começar a criar Snippets{" "}
              </Dialog.Title>
              <Dialog.Description mb="4" color="gray.400">
                Esse video vai lhe ajudar a entender como criar seus primeiros
                Snippets de código e organizar sua biblioteca pessoal de códigos
                com o Codrillo.
              </Dialog.Description>
              <AspectRatio ratio={4 / 3} rounded="lg" overflow="hidden">
                <iframe
                  title="Como criar Snippets no Codrillo"
                  src="https://www.youtube.com/embed/GiPkAavNZQc?si=MTNHtSpSUZktLcxh"
                  allowFullScreen
                />
              </AspectRatio>
            </Dialog.Body>
            <Dialog.CloseTrigger top="2" insetEnd="2" asChild>
              <CloseButton color={"#9ACA38"} size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
