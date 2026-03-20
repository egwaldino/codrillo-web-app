import { VStack } from "@chakra-ui/react";
import { useEffect, type JSX } from "react";
import { Header } from "@/components/Header";
import { useHome } from "./_hooks-home/page";
import { HeroSection } from "./hero/HeroSection";
import { FeaturesSection } from "./features/FeaturesSection";
import { SnippetsSection } from "./snippets/SnippetsSection";

export function Home(): JSX.Element {
  const {
    setSnippets,
    snippetsRef,
    searchQuery,
    setSearchQuery,
    visibleSnippets,
    selectedSnippetTitle,
    setSelectedSnippetTitle,
  } = useHome();

  useEffect(() => {
    if (!selectedSnippetTitle) return;

    const timer = setTimeout(() => {
      snippetsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [selectedSnippetTitle, snippetsRef]);

  return (
    <VStack w="full">
      <Header
        onCreateSnippet={setSnippets}
        onSearchChange={setSearchQuery}
        onSelectSnippet={setSelectedSnippetTitle}
      />
      <VStack w={"full"} gap={10}>
        <HeroSection onCreateSnippet={setSnippets} />
        <FeaturesSection />
        <SnippetsSection
          ref={snippetsRef}
          snippets={visibleSnippets}
          searchQuery={searchQuery}
          selectedSnippetTitle={selectedSnippetTitle}
        />
      </VStack>
    </VStack>
  );
}
