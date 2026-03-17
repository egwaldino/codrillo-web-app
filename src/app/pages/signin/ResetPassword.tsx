import {
  Button,
  Fieldset,
  HStack,
  Image,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png";
import ImageLogin from "@/assets/ImageLogin.png";

export function ResetPassword() {
  return (
    <HStack w={"full"} h={"90vh"} align={"center"} justify={"space-between"}>
      <VStack align={"start"} w={"xs"} ml={60} gap={10}>
        <Image src={LogotipoCodrillo} alt="Codrillo Logotipo" w={200} />
        <Fieldset.Root size="lg" color={"#9ACA38"}>
          <Stack gap={5}>
            <Fieldset.Legend
              color={"#9ACA38"}
              fontSize={"2rem"}
              fontWeight={"bold"}
            >
              Redefinir Senha
            </Fieldset.Legend>
            <Fieldset.HelperText color={"#929292"}>
              A senha foi redefinida com sucesso. Clica em confirmar para
              definir uma nova senha
            </Fieldset.HelperText>
          </Stack>

          <HStack justify={"space-between"}>
            <Link w={64} textDecor={"none"} href="/setnewpassword">
              <Button
                w={"full"}
                fontWeight={"bold"}
                bgColor={"#9ACA38"}
                color={"#1c1c1c"}
                type="submit"
              >
                Confirmar
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
