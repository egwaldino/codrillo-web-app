import ImageLogin from "@/assets/ImageLogin.png"
import { useSignIn } from "./_hooks-signin/page";
import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png"
import { PasswordInput } from "@/components/ui/password-input";
import { Button, Field, Fieldset, Flex, HStack, Image, Input, Link, Stack, VStack } from "@chakra-ui/react";


export function SignIn() {

    const { form, setForm, handleLogin, isEmailValid, isPasswordValid } = useSignIn()

    return (
        <HStack w={"full"} h={"90vh"} align={"center"} justify={"space-between"}>
            <VStack w={"xs"} ml={60} gap={10} >
                <Image
                    src={LogotipoCodrillo}
                    alt="Codrillo Logotipo"
                    w={200}
                />
                <Fieldset.Root size="lg" color={"#9ACA38"}>
                    <Stack gap={5}>
                        <Fieldset.Legend color={"#9ACA38"} fontSize={"2rem"} fontWeight={"bold"}>Acesse a Plataforma</Fieldset.Legend>
                        <Fieldset.HelperText color={"#929292"}>
                            Faça login para guardar os snippets de código mais usados hoje.
                        </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content>
                        <Field.Root invalid={form.email !== "" && !isEmailValid}>
                            <Field.Label>Email</Field.Label>
                            <Input
                                value={form.email}
                                onChange={e => (
                                    setForm({
                                        ...form,
                                        email: e.target.value
                                    })
                                )
                                }
                                name="email"
                                type="email"
                                placeholder="Digite o seu e-mail"
                                _placeholder={{ color: "#929292/30" }}
                            />
                            <Field.ErrorText>
                                Por favor, insira um email válido.
                            </Field.ErrorText>
                        </Field.Root>

                        <Field.Root invalid={form.password !== "" && !isPasswordValid}    >
                            <Flex w={"full"} justify={"space-between"}>
                                <Field.Label>Senha</Field.Label>
                                <Link href="/forgotpassword" color={"#9ACA38"} fontSize={"0.8rem"} fontWeight={"semibold"}>Esqueceu a senha?</Link>
                            </Flex>
                            <PasswordInput
                                value={form.password}
                                onChange={e => (
                                    setForm({
                                        ...form,
                                        password: e.target.value
                                    })
                                )}
                                color={"#929292"}
                                placeholder="Digite a sua senha"
                                _placeholder={{ color: "#929292/30" }}
                            />
                            <Field.ErrorText>
                                Por favor, insira uma senha válida.
                            </Field.ErrorText>
                        </Field.Root>
                    </Fieldset.Content>

                    <Button onClick={handleLogin} fontWeight={"bold"} bgColor={"#9ACA38"} color={"#1c1c1c"} w={"full"} type="submit" alignSelf="flex-start">
                        Entrar
                    </Button>

                    <Fieldset.HelperText color={"#929292"}>
                        Ainda não tem uma conta? <Link href="/signup" color={"#9ACA38"} fontWeight={"bold"}>Inscreva-se</Link>
                    </Fieldset.HelperText>
                </Fieldset.Root>
            </VStack>

            <VStack w={600} justify={"center"}>
                <Image
                    src={ImageLogin}
                    alt="Codrillo Logotipo"
                    r={0}
                />
            </VStack>
        </HStack>
    )
}