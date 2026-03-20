import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Textarea,
  VStack,
  Text,
  Button,
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react";
import type { Snippet } from "@/app/pages/home/snippets/snippetsData";
import { toaster } from "./ui/toaster";

type CreateSnippetModalProps = {
  children?: ReactNode;
  onCreateSnippet: React.Dispatch<React.SetStateAction<Snippet[]>>;
};

type FormData = {
  title: string;
  description: string;
  code: string;
  language: string;
};

export const CreateSnippetModal = ({
  children,
  onCreateSnippet,
}: CreateSnippetModalProps) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    onCreateSnippet((prev) => [
      {
        id: Date.now(),
        ...data,
      },
      ...prev,
    ]);
    reset();
    setOpen(false);

    toaster.create({
      title: "Snippet criado com sucesso!",
      description: "Seu snippet foi criado com sucesso.",
      duration: 6000,
      type: "success",
    });
  };

  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger onClick={() => setOpen(true)} asChild>{children}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color={"#9ACA38"}>Criar Snippet</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Dialog.Body>
                <form id="snippet-form" onSubmit={handleSubmit(onSubmit)}>
                  <VStack gap={3}>
                    <Input
                      placeholder="Título"
                      {...register("title", { required: true })}
                    />
                    {errors.title && (
                      <Text color="red.400">Título obrigatório</Text>
                    )}

                    <Input
                      placeholder="Descrição"
                      {...register("description")}
                    />

                    <select
                      {...register("language", { required: true })}
                      style={{
                        background: "#1c1c1c",
                        color: "#d4d4d4",
                        border: "1px solid #333",
                        borderRadius: "4px",
                        padding: "10px",
                        width: "100%",
                        height: "40px",
                      }}
                    >
                      <option value="tsx">React (TSX)</option>
                      <option value="html">HTML</option>
                      <option value="scss">SCSS</option>
                      <option value="bash">Bash</option>
                      <option value="json">JSON</option>
                    </select>

                    {errors.language && (
                      <Text color="red.400">Linguagem obrigatória</Text>
                    )}

                    <Textarea
                      placeholder="Código..."
                      {...register("code", { required: true })}
                      fontFamily="mono"
                      bg="#1e1e1e"
                      color="#d4d4d4"
                      border="1px solid #333"
                      _focus={{ borderColor: "#9ACA38" }}
                      minH="200px"
                    />
                    {errors.code && (
                      <Text color="red.400">Código obrigatório</Text>
                    )}
                  </VStack>
                </form>
              </Dialog.Body>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button
                  w={24}
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
                  Cancelar
                </Button>
              </Dialog.ActionTrigger>
              <Button
                type="submit"
                form="snippet-form"
                w={24}
                h={10}
                gap={2}
                size="xs"
                rounded={"xl"}
                bg="#9ACA38"
                color="#1c1c1c"
                variant="outline"
                fontWeight={"semibold"}
                borderColor={"#9ACA38"}
                _hover={{
                  transform: "translateY(-1px) scale(1.02)",
                  boxShadow: "0 10px 25px rgba(154, 202, 56, 0.25)",
                  borderColor: "#9ACA38",
                }}
                transition="all 0.2s ease"

              >
                Criar
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
