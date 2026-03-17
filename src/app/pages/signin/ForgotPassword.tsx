import {
  Button,
  Field,
  Fieldset,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png";
import ImageLogin from "@/assets/ImageLogin.png";
import { useForgotPassword } from "./_hooks-signin/page";

export function ForgotPassword() {
  const { form, setForm, handleForgotPassword } = useForgotPassword();
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
              Esqueceu a senha?
            </Fieldset.Legend>
            <Fieldset.HelperText color={"#929292"}>
              Por favor digite o seu email para redefinir a sua senha
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Digite o seu e-mail"
                _placeholder={{ color: "#929292/30" }}
              />
            </Field.Root>
          </Fieldset.Content>
          <HStack justify={"space-between"}>
            <Link textDecor={"none"} href="/signin">
              <Button
                w={40}
                color={"#9ACA38"}
                fontWeight={"bold"}
                bgColor={"#444444"}
                type="submit"
              >
                Voltar
              </Button>
            </Link>
            <Link textDecor={"none"}>
              <Button
                w={40}
                fontWeight={"bold"}
                bgColor={"#9ACA38"}
                color={"#1c1c1c"}
                type="submit"
                onClick={handleForgotPassword}
              >
                Redefinir
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
