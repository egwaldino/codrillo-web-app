import { useRef, useState } from "react";
import { snippetsData } from "../snippets/snippetsData";
import { createShikiAdapter } from "@chakra-ui/react";


export function useHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [snippets, setSnippets] = useState(snippetsData);
  const [selectedSnippetTitle, setSelectedSnippetTitle] = useState<
    string | null
  >(null);
  const snippetsRef = useRef<HTMLDivElement | null>(null);

  const filteredSnippets = searchQuery
    ? snippets.filter(
        (snippet) =>
          snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          snippet.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : snippets;

  const visibleSnippets = selectedSnippetTitle
    ? snippets.filter((s) =>
        s.title.toLowerCase().includes(selectedSnippetTitle.toLowerCase()),
      )
    : filteredSnippets;

  return {
    snippets,
    snippetsRef,
    setSnippets,
    searchQuery,
    setSearchQuery,
    visibleSnippets,
    filteredSnippets,
    selectedSnippetTitle,
    setSelectedSnippetTitle,
  };
}


export function useShikiAdapter() { 
    const shikiAdapter = createShikiAdapter({
      async load() {
        const { createHighlighter } = await import("shiki");
        return createHighlighter({
          langs: ["tsx", "scss", "html", "bash", "json"],
          themes: ["github-dark"],
        });
      },
      theme: "github-dark",
    });

    return shikiAdapter;
}