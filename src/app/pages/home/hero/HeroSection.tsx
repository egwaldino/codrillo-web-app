import type { JSX } from "react";
import { heroData } from "./heroData";
import { SeeExample } from "./SeeExample";
import { IoCodeSlash } from "react-icons/io5";
import { CreateSnippetModal } from "@/components/CreateSnippetModal";
import { Text, Flex, Heading, Icon, Button } from "@chakra-ui/react";

import type { Snippet } from "../snippets/snippetsData";

type HeroSectionProps = {
  onCreateSnippet: React.Dispatch<React.SetStateAction<Snippet[]>>;
};

export function HeroSection({
  onCreateSnippet,
}: HeroSectionProps): JSX.Element {
  return (
    <>
      <Flex
        p={1}
        mt={10}
        gap={2}
        rounded={"2xl"}
        align={"center"}
        justify={"center"}
        borderWidth={"1px"}
        bgColor={"#9ACA38/40"}
        borderColor={"#9ACA38"}
      >
        <Icon as={heroData.badge.icon} color="#9ACA38" />
        <Text fontSize={13} color="#9ACA38">
          {heroData.badge.text}
        </Text>
      </Flex>

      <Flex px={20} flexDir={"column"} align={"center"} gap={10}>
        <Heading
          fontSize={82}
          lineHeight={1}
          color={"#9ACA38"}
          textAlign={"center"}
          fontWeight={"light"}
        >
          {heroData.title}
        </Heading>
        <Text w={"lg"} color={"#929292"} textAlign={"center"}>
          {heroData.description}
        </Text>

        <Flex gap={5}>
          <CreateSnippetModal onCreateSnippet={onCreateSnippet}>
            <Button
              w={36}
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
              <IoCodeSlash />
              Começar agora
            </Button>
          </CreateSnippetModal>
          <SeeExample />
        </Flex>
      </Flex>
    </>
  );
}
