import { Text, Flex, Heading, Icon, Button } from "@chakra-ui/react";
import { heroData } from "./heroData";
import type { JSX } from "react";
import { SeeExample } from "./SeeExample";
import { CreateSnippetModal } from "@/components/CreateSnippetModal";
import { IoCodeSlash } from "react-icons/io5";

export function HeroSection(): JSX.Element {
  return (
    <>
      <Flex
        mt={10}
        align={"center"}
        justify={"center"}
        gap={2}
        bgColor={"#9ACA38/40"}
        p={1}
        rounded={"2xl"}
        borderWidth={"1px"}
        borderColor={"#9ACA38"}
      >
        <Icon as={heroData.badge.icon} color="#9ACA38" />
        <Text fontSize={13} color="#9ACA38">
          {heroData.badge.text}
        </Text>
      </Flex>

      <Flex flexDir={"column"} align={"center"} gap={10}>
        <Heading
          color={"#9ACA38"}
          fontSize={82}
          fontWeight={"light"}
          textAlign={"center"}
          lineHeight={1}
        >
          {heroData.title}
        </Heading>
        <Text w={"md"} color={"#929292"} textAlign={"center"}>
          {heroData.description}
        </Text>

        <Flex gap={5}>
          <CreateSnippetModal>
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
