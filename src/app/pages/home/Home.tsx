import { Header } from "@/components/Header";
import { VStack } from "@chakra-ui/react";
import { HeroSection } from "./hero/HeroSection";
import { FeaturesSection } from "./features/FeaturesSection";
import { SnippetsSection } from "./snippets/SnippetsSection";
import { useState, useRef, useEffect, type JSX } from "react";

export function Home(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSnippetTitle, setSelectedSnippetTitle] = useState<string | null>(
    null,
  );
  const snippetsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedSnippetTitle) return;

    const timer = setTimeout(() => {
      snippetsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [selectedSnippetTitle]);

  return (
    <VStack>
      <Header
        onSearchChange={setSearchQuery}
        onSelectSnippet={setSelectedSnippetTitle}
      />
      <VStack w={"6xl"} gap={10}>
        <HeroSection />
        <FeaturesSection />
        <SnippetsSection
          ref={snippetsRef}
          searchQuery={searchQuery}
          selectedSnippetTitle={selectedSnippetTitle}
        />
      </VStack>
    </VStack>
  );
}
