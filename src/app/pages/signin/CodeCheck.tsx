import {
  Button,
  Fieldset,
  HStack,
  Image,
  Link,
  PinInput,
  Stack,
  VStack,
} from "@chakra-ui/react";
import ImageLogin from "@/assets/ImageLogin.png";
import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png";
import { useCodeCheck } from "./_hooks-signin/page";

export function CodeCheck() {
  const { code, setCode, handleCodeCheck } = useCodeCheck();
  return (
    <HStack w={"full"} h={"90vh"} align={"center"} justify={"space-between"}>
      <VStack w={"xs"} ml={60} gap={10}>
        <Image src={LogotipoCodrillo} alt="Codrillo Logotipo" w={200} />
        <Fieldset.Root size="lg" color={"#9ACA38"}>
          <Stack gap={5}>
            <Fieldset.Legend
              color={"#9ACA38"}
              fontSize={"2rem"}
              fontWeight={"bold"}
            >
              Verifique o seu email
            </Fieldset.Legend>
            <Fieldset.HelperText color={"#929292"}>
              Enviamos o link de redefinição, digite o código de 5 dígitos
              mencionado no email
            </Fieldset.HelperText>
          </Stack>

          <PinInput.Root
            value={code}
            onValueChange={(details) => setCode(details.value)}
            size="xl"
          >
            <PinInput.HiddenInput />
            <PinInput.Control gap={22}>
              <PinInput.Input index={0} />
              <PinInput.Input index={1} />
              <PinInput.Input index={2} />
              <PinInput.Input index={3} />
              <PinInput.Input index={4} />
            </PinInput.Control>
          </PinInput.Root>

          <HStack justify={"space-between"}>
            <Link textDecor={"none"} href="/forgotpassword">
              <Button
                w={40}
                color={"#9ACA38"}
                fontWeight={"bold"}
                bgColor={"#444444"}
              >
                Voltar
              </Button>
            </Link>
            <Button
              w={40}
              fontWeight={"bold"}
              bgColor={"#9ACA38"}
              color={"#1c1c1c"}
              type="submit"
              onClick={handleCodeCheck}
            >
              Verificar Código
            </Button>
          </HStack>
          <Fieldset.HelperText textAlign={"center"} color={"#929292"}>
            Ainda não recebeu o email?{" "}
            <Link color={"#9ACA38"} textDecor={"underline"}>
              Reenviar email
            </Link>
          </Fieldset.HelperText>
        </Fieldset.Root>
      </VStack>

      <VStack w={600} justify={"center"}>
        <Image src={ImageLogin} alt="Codrillo Logotipo" r={0} />
      </VStack>
    </HStack>
  );
}
