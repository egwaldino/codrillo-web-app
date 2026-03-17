import { Header } from "@/components/Header";
import { VStack } from "@chakra-ui/react";
import { HeroSection } from "./hero/HeroSection";
import { FeaturesSection } from "./features/FeaturesSection";
import { SnippetsSection } from "./snippets/SnippetsSection";

export function Home() {
  return (
    <VStack>
      <Header />
      <VStack w={"6xl"} gap={10}>
        <HeroSection />
        <FeaturesSection />
        <SnippetsSection />
      </VStack>
    </VStack>
  );
}
