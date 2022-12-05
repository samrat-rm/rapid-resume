import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import logoIcon from "./../../../resources/images/logo_icon.png";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Logo = (props) => {
  return <Image src={logoIcon} height={8} />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      className="container-fluid"
    >
      <Container as={Stack} maxW={"12xl"} py={10} className="container">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "6fr 1fr 1fr" }}
          spacing={8}
          columns={3}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>

            <Text fontSize={"md"}>
              RapidResume is a web appliction that accelarates the process of
              creating, designing and sharing resumes. This website is suitable
              for candidates and students who want to create an impact in their
              professional careers.
            </Text>

            <Text fontSize={"sm"}>© 2022 RapidResume. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <Text fontSize={"sm"}>Follow Us</Text>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={"flex-start"} flexDirection={"column"}>
            <ListHeader>Features</ListHeader>
            <Link href={"#"}>Limitless Themes</Link>
            <Link href={"#"}>Add your Video</Link>
            <Link href={"#"}>Resizable Fonts</Link>
            <Link href={"#"}>Re-order Sections</Link>
            <Link href={"#"}>Generate Sharable Links</Link>
          </Stack>
          <Stack align={"flex-start"} flexDirection={"column"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>FAQ</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
