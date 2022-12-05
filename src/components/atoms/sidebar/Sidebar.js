import React, { useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

import {
  FiHome,
  FiEdit3,
  FiGrid,
  FiYoutube,
  FiType,
  FiLayout,
  FiMenu,
} from "react-icons/fi";
import Fonts from "../fonts/Fonts";
import "./sidebar.css";
import Headings from "../headings/Headings";
import Section from "../section/Section";
import ThemeGrid from "../themeGrid/ThemeGrid";
import Video from "../video/Video";

export function SidebarOpen({
  children,
  isPremiumUser,
  isSidebarOpen,
  setIsSidebarOpen,
  setVideoData,
  id,
  zIndex = 5,
  setFontSize,
  setFontName,
  setHeadingColor,
  setVisible,
  isVisible,
  setTheme,
  exportJson,
  createPDF,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LinkItemsFree = [
    {
      name: "Fonts",
      icon: FiType,
      data: <Fonts setFontSize={setFontSize} setFontName={setFontName} />,
    },
    {
      name: "Headings",
      icon: FiEdit3,
      data: <Headings setHeadingColor={setHeadingColor} />,
    },
    {
      name: "Sections",
      icon: FiGrid,
      data: <Section isVisible={isVisible} setVisible={setVisible} />,
    },
    // {
    //   name: "Section Order",
    //   icon: FiStar,
    //   data: "hello",
    // },
    {
      name: "Themes",
      icon: FiLayout,
      data: <ThemeGrid setTheme={setTheme} isPremiumUser={isPremiumUser} />,
    },
  ];

  const LinkItemsPremium = [
    {
      name: "Fonts",
      icon: FiType,
      data: <Fonts setFontSize={setFontSize} setFontName={setFontName} />,
    },
    {
      name: "Headings",
      icon: FiEdit3,
      data: <Headings setHeadingColor={setHeadingColor} />,
    },
    {
      name: "Sections",
      icon: FiGrid,
      data: <Section isVisible={isVisible} setVisible={setVisible} />,
    },
    // {
    //   name: "Section Order",
    //   icon: FiStar,
    //   data: "hello",
    // },

    {
      name: "Video Options",
      icon: FiYoutube,
      data: <Video setVideoData={setVideoData} id={ id}/>,
    },

    {
      name: "Themes",
      icon: FiLayout,
      data: <ThemeGrid setTheme={setTheme} isPremiumUser={isPremiumUser} />,
    },
  ];

  let LinkItems = isPremiumUser ? LinkItemsPremium : LinkItemsFree;

  return (
    <Box
      minH="0vh"
      marginTop={"50px"}
      position={"relative"}
      bg={useColorModeValue("gray.100", "gray.900")}
      className="boxthis"
      zIndex={zIndex}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        LinkItems={LinkItems}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            LinkItems={LinkItems}
            exportJson={exportJson}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

export default function Sidebar({
  children,
  isPremiumUser,
  id,
  setFontSize,
  setFontName,
  setHeadingColor,
  setVideoData,
  isVisible,
  setVisible,
  setTheme,
}) {
  let [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SidebarOpen
      isSidebarOpen={isSidebarOpen}
      id={id}
      setIsSidebarOpen={() => setIsSidebarOpen}
      setFontSize={setFontSize}
      setFontName={setFontName}
      setHeadingColor={setHeadingColor}
      setVideoData={setVideoData}
      isVisible={isVisible}
      setVisible={setVisible}
      setTheme={setTheme}
      isPremiumUser={isPremiumUser}
    />
  );
}

const SidebarContent = ({ onClose, LinkItems, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      borderTopRightRadius={"50px"}
      paddingStart={"2"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      minH={0}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" as={"u"}>
          Menu
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        {/* <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          onClick={() => rest.setIsSidebarOpen(!rest.isSidebarOpen)}
        >
          x
        </Text> */}
      </Flex>
      <Accordion allowToggle>
        {LinkItems.map((link, index) => (
          <AccordionItem border={"0px"} paddingTop={"5px"} key={index}>
            <h2>
              <AccordionButton
                _expanded={{ borderBottom: "2px", borderBottomColor: "Black" }}
              >
                <Icon as={link.icon} marginEnd={"10px"} />
                <Box flex="1" textAlign="left">
                  {link.name}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel color={"black"}>{link.data}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

const SidebarContentClose = ({
  onClose,
  isSidebarOpen,
  setIsSidebarOpen,
  LinkItems,
  ...rest
}) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      borderTopRightRadius={"50px"}
      paddingTop={"75vh"}
      marginTop="0px"
      w={{ base: 20, md: 10 }}
      sx={{ overflow: "hidden" }}
      pos="fixed"
      minH={0}
      h="full"
      onClick={() => setIsSidebarOpen(true)}
      {...rest}
    >
      <div
        // position={"fixed"}
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "top left",
          maxHeight: "80%",
          minWidth: "max-content",
        }}
        className="d-flex flex-row justify-content-around "
      >
        {LinkItems.map((link) => (
          //   <NavItem key={link.name} icon={link.icon}>

          <h2
            className="d-flex flex-row "
            key={link.name}
            style={{
              minWidth: "max-content",
              paddingInline: "15px",
              paddingTop: "8px",
              borderRight: "1px solid black",
              justifySelf: "stretch",
            }}
          >
            <Icon as={link.icon} marginEnd={"10px"} />
            <Box flex="1" textAlign="left">
              {link.name}
              {isSidebarOpen}
            </Box>
          </h2>

          //   </NavItem>
        ))}
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          style={{ transform: "rotate(90deg)" }}
          paddingInline="20px"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          X{isSidebarOpen}
        </Text>
      </div>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Menu
      </Text>
    </Flex>
  );
};
