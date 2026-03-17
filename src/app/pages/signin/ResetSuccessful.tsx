import {
  Button,
  Fieldset,
  HStack,
  Image,
  Stack,
  VStack,
  Link,
} from "@chakra-ui/react";
import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png";
import ImageLogin from "@/assets/ImageLogin.png";

export function ResetSuccessful() {
  return (
    <HStack w={"full"} h={"90vh"} align={"center"} justify={"space-between"}>
      <VStack align={"start"} w={"sm"} ml={60} gap={10}>
        <Image src={LogotipoCodrillo} alt="Codrillo Logotipo" w={200} />
        <Fieldset.Root size="lg" color={"#9ACA38"}>
          <Stack gap={5}>
            <Fieldset.Legend
              color={"#9ACA38"}
              fontSize={"2rem"}
              fontWeight={"bold"}
            >
              Redefinida com Sucesso
            </Fieldset.Legend>
            <Fieldset.HelperText color={"#929292"}>
              Parabéns! A sua senha foi redefinida com sucesso. Clica para
              continuar com o login
            </Fieldset.HelperText>
          </Stack>

          <HStack justify={"space-between"}>
            <Link w={96} href="/signin">
              <Button
                w={"full"}
                fontWeight={"bold"}
                bgColor={"#9ACA38"}
                color={"#1c1c1c"}
                type="submit"
              >
                Fazer Login
              </Button>
            </Link>
          </HStack>
        </Fieldset.Root>
      </VStack>

      <VStack w={600} justify={"center"}>
        <Image src={ImageLogin} alt="Codrillo Logotipo" r={0} />
      </VStack>
    </HStack>
  );
}
