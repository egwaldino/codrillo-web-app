import { HStack, Link, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <HStack
        pt={5}
        mt={10}
        mb={10}
        px={32}
            w={"full"}
            justify={"space-between"}
        >
            <Text color="#929292" fontSize={12}>@ 2025 Codrillo. Seus snippets, sua agilidade. Desenvolvimento & Design UX/UI by Egwaldino Cassuente</Text>
            <HStack fontSize={14} fontWeight={"bold"} gap={10}>
                <Link color={"#9ACA38"}>Sobre</Link>
                <Link color={"#9ACA38"}>Documentação</Link>
                <Link color={"#9ACA38"}>Suporte</Link>
            </HStack>
        </HStack>
    )
}