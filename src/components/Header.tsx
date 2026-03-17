import { Button, HStack, Image, Input, InputGroup } from "@chakra-ui/react";
import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png"
import { LuSearch } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";


export function Header() {
    return (
        <HStack w={"100%"} py={5} px={10} justify={"space-between"}>
             <Image
                src={LogotipoCodrillo}
                alt="Codrillo Logotipo"
                w={200}
            />

        <InputGroup w={"md"}  startElement={<LuSearch />}>
            <Input placeholder="Buscar Snippets..." />
        </InputGroup>

        <Button
            w={36}
            type="submit"
            color={"#1c1c1c"}
            fontWeight={"bold"}
            bgColor={"#9ACA38"}
            alignSelf="flex-start"
            rounded={"xl"}
        >
            <FiPlus />
            Criar Snippets
        </Button>

        </HStack>
    )
}