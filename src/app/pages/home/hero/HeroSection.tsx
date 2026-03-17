import { Text, Flex, Heading, Button, Icon } from "@chakra-ui/react";
import { heroData } from "./heroData";
import type { JSX } from "react";

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
          {heroData.buttons.map((button, index) => (
            <Button
              key={index}
              w={28}
              type="submit"
              color={button.variant === "primary" ? "#1c1c1c" : "#9ACA38"}
              fontWeight={"bold"}
              rounded={"xl"}
              bgColor={button.variant === "primary" ? "#9ACA38" : "#1c1c1c"}
              borderWidth={button.variant === "secondary" ? "1px" : undefined}
              borderColor={
                button.variant === "secondary" ? "#9ACA38" : undefined
              }
              alignSelf="flex-start"
            >
              {button.icon && <Icon as={button.icon} />}
              {button.text}
            </Button>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
