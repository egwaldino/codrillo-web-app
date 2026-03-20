import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

import LogotipoCodrillo from "@/assets/LogotipoCodrillo.png";
import { CreateSnippetModal } from "./CreateSnippetModal";
import { snippetsData, type Snippet } from "@/app/pages/home/snippets/snippetsData";

type HeaderProps = {
  onSearchChange: (value: string) => void;
  onSelectSnippet: (title: string | null) => void;
  onCreateSnippet: React.Dispatch<React.SetStateAction<Snippet[]>>;
};

export function Header({ onSearchChange, onSelectSnippet, onCreateSnippet }: HeaderProps) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const suggestions = search
    ? snippetsData
        .filter((snippet) =>
          snippet.title.toLowerCase().includes(search.toLowerCase()),
        )
        .slice(0, 5)
    : [];

  const handleChange = (value: string) => {
    setSearch(value);
    onSearchChange(value);
    if (value === "") { 
      onSelectSnippet(null);
    }
    setIsOpen(true);
  };

  const handleSelect = (value: string) => {
    setSearch(value);
    onSearchChange(value);
    setIsOpen(false);
  };

  return (
    <HStack w="100%" py={5} px={10} justify="space-between">
      {/* LOGO */}
      <Link
        href="/home"
        transition="0.2s"
        _focus={{ outline: "none" }}
        _hover={{ transform: "translateY(-2px)" }}
      >
        <Image src={LogotipoCodrillo} alt="Codrillo Logotipo" w={200} />
      </Link>

      {/* SEARCH */}
      <Box position="relative" w="md">
        <InputGroup startElement={<LuSearch />}>
          <Input
            value={search}
            type="text"
            placeholder="Buscar Snippets..."
            onChange={(e) => handleChange(e.target.value)}
            onBlur={() => {
              setTimeout(() => setIsOpen(false), 150);
            }}
            onFocus={() => {
              if (search) setIsOpen(true);
            }}
          />
        </InputGroup>

        {/* DROPDOWN */}
        {isOpen && suggestions.length > 0 && (
          <VStack
            position="absolute"
            top="100%"
            left={0}
            w="full"
            bg="#2c2c2c"
            borderRadius="md"
            mt={2}
            align="stretch"
            gap={0}
            zIndex={10}
            overflow="hidden"
            boxShadow="lg"
          >
            {suggestions.map((item) => (
              <Box
                key={item.id}
                px={4}
                py={2}
                cursor="pointer"
                _hover={{ bg: "#3a3a3a" }}
                onClick={() => {
                  handleSelect(item.title)
                  onSelectSnippet(item.title);
                }}
              >
                <Text fontSize="sm" color="white">
                  {item.title}
                </Text>
              </Box>
            ))}
          </VStack>
        )}
      </Box>

      {/* BUTTON */}
      <CreateSnippetModal onCreateSnippet={onCreateSnippet}>
        <Button
          w={36}
          h={10}
          gap={2}
          size="xs"
          rounded="xl"
          bg="#9ACA38"
          color="#1c1c1c"
          variant="outline"
          fontWeight="semibold"
          borderColor="#9ACA38"
          _hover={{
            transform: "translateY(-1px) scale(1.02)",
            boxShadow: "0 10px 25px rgba(154, 202, 56, 0.25)",
            borderColor: "#9ACA38",
          }}
          transition="all 0.2s ease"
        >
          <FiPlus />
          Criar Snippets
        </Button>
      </CreateSnippetModal>
    </HStack>
  );
}
