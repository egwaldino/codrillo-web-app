import {
  Button,
  Field,
  Fieldset,
  HStack,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png";
import ImageLogin from "@/assets/ImageLogin.png";
import { PasswordInput } from "@/components/ui/password-input";
import { useSetNewPassword } from "./_hooks-signin/page";

export function SetNewPassword() {
  const {
    form,
    setForm,
    passwordsMatch,
    isPasswordValid,
    handleSetNewPassword,
  } = useSetNewPassword();
  return (
    <HStack w={"full"} h={"90vh"} align={"center"} justify={"space-between"}>
      <VStack w={"20%"} ml={48} gap={10}>
        <Image src={LogotipoCodrillo} alt="Codrillo Logotipo" w={200} />
        <Fieldset.Root size="lg" color={"#9ACA38"}>
          <Stack gap={5} align={"start"}>
            <Fieldset.Legend
              color={"#9ACA38"}
              fontSize={"1.5rem"}
              fontWeight={"bold"}
            >
              Definir uma nova senha
            </Fieldset.Legend>
            <Fieldset.HelperText color={"#929292"}>
              Cria uma nova senha. Certifique - se de que seja diferente das
              anteriores por segurança{" "}
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root invalid={form.newPassword !== "" && !isPasswordValid}>
              <Field.Label color={"#9ACA38"}>Senha</Field.Label>
              <PasswordInput
                value={form.newPassword}
                onChange={(e) => {
                  setForm({
                    ...form,
                    newPassword: e.target.value,
                  });
                }}
                color={"#929292"}
                placeholder="Digite a nova senha"
                _placeholder={{ color: "#929292/30" }}
              />
              <Field.ErrorText>
                Mínimo recomendado: Pelo menos 8 caracteres, 1 letra e 1 número!
              </Field.ErrorText>
            </Field.Root>

            <Field.Root
              invalid={form.confirmPassword !== "" && !passwordsMatch}
            >
              <Field.Label>Confirmar Senha</Field.Label>
              <PasswordInput
                color={"#929292"}
                placeholder="Digite novamente a senha"
                _placeholder={{ color: "#929292/30" }}
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
              <Field.ErrorText>
                Certifique-se de que ambas as senhas são iguais
              </Field.ErrorText>
            </Field.Root>
          </Fieldset.Content>

          <Button
            fontWeight={"bold"}
            bgColor={"#9ACA38"}
            color={"#1c1c1c"}
            w={"full"}
            type="submit"
            alignSelf="flex-start"
            onClick={handleSetNewPassword}
          >
            Atualizar Senha
          </Button>
        </Fieldset.Root>
      </VStack>

      <VStack w={600} justify={"center"}>
        <Image src={ImageLogin} alt="Codrillo Logotipo" r={0} />
      </VStack>
    </HStack>
  );
}
