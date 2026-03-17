import ImageLogin from "@/assets/ImageLogin.png";
import { useSignUp } from "./_hooks-signup/page";
import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Button,
  Field,
  Fieldset,
  Flex,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";

export function SignUp() {
  const {
    form,
    setForm,
    isEmailValid,
    isPasswordValid,
    passwordsMatch,
    handleSubmit,
  } = useSignUp();

  return (
    <HStack w={"full"} h={"90vh"} align={"center"} justify={"space-between"}>
      <VStack w={"md"} ml={48} gap={10}>
        <Image src={LogotipoCodrillo} alt="Codrillo Logotipo" w={200} />
        <Fieldset.Root size="lg">
          <Stack gap={5} align={"center"}>
            <Fieldset.Legend
              color={"#9ACA38"}
              fontSize={"2rem"}
              fontWeight={"bold"}
            >
              Fazer Cadastro
            </Fieldset.Legend>
            <Fieldset.HelperText color={"#929292"}>
              Registre-se para começar a guardar seus snippets ainda hoje.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Flex gap={5}>
              <Field.Root>
                <Field.Label color={"#9ACA38"}>Nome</Field.Label>
                <Input
                  value={form.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      name: e.target.value,
                    });
                  }}
                  name="nome"
                  type="name"
                  placeholder="Ex: Egwaldino Cassuente"
                  _placeholder={{ color: "#929292/30" }}
                />
              </Field.Root>

              <Field.Root invalid={form.email !== "" && !isEmailValid}>
                <Field.Label color={"#9ACA38"}>Email</Field.Label>
                <Input
                  value={form.email}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      email: e.target.value,
                    });
                  }}
                  name="email"
                  type="email"
                  placeholder="Ex: seuemail@exemplo.com"
                  _placeholder={{ color: "#929292/30" }}
                />
                <Field.ErrorText>Use um email válido</Field.ErrorText>
              </Field.Root>
            </Flex>

            <Flex gap={5}>
              <Field.Root invalid={form.password !== "" && !isPasswordValid}>
                <Field.Label color={"#9ACA38"}>Senha</Field.Label>
                <PasswordInput
                  value={form.password}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      password: e.target.value,
                    });
                  }}
                  color={"#929292"}
                  placeholder="Nova Senha"
                  _placeholder={{ color: "#929292/30" }}
                />
                <Field.ErrorText>
                  Mínimo recomendado: Pelo menos 8 caracteres, 1 letra e 1
                  número!
                </Field.ErrorText>
              </Field.Root>

              <Field.Root
                invalid={form.confirmPassword !== "" && !passwordsMatch}
              >
                <Field.Label color={"#9ACA38"}>Confirmar Senha</Field.Label>
                <PasswordInput
                  value={form.confirmPassword}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      confirmPassword: e.target.value,
                    });
                  }}
                  color={"#929292"}
                  placeholder="Confirmar Senha"
                  _placeholder={{ color: "#929292/30" }}
                />
                <Field.ErrorText>
                  Certifique-se de que ambas as senhas são iguais
                </Field.ErrorText>
              </Field.Root>
            </Flex>
          </Fieldset.Content>

          <Button
            w={"full"}
            type="submit"
            color={"#1c1c1c"}
            fontWeight={"bold"}
            bgColor={"#9ACA38"}
            onClick={handleSubmit}
            alignSelf="flex-start"
            disabled={!passwordsMatch || !form.password}
          >
            Registar
          </Button>

          <Fieldset.HelperText color={"#929292"} textAlign={"center"}>
            Já tem uma conta?{" "}
            <Link href="/signin" color={"#9ACA38"} fontWeight={"bold"}>
              Entrar
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
