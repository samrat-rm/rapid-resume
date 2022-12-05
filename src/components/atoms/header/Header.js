import jsCookies from "js-cookies";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";
// import updateUser
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Tooltip,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "./../../../resources/images/logo_icon.png";
import { useNavigate, Navigate } from "react-router-dom";

export default function Header({
    loginDetails,
    setLoginDetails,
    dashboardLink,
}) {
    const { isOpen, onToggle } = useDisclosure();
    const navigate = useNavigate();
    const logOut = () => {
        // const auth = getAuth();
        jsCookies.setItem("user", {});
        jsCookies.setItem("userLoginStatus", {});
        console.log("before");
        jsCookies.setItem(
            "loginData",
            JSON.stringify({
                username: "undefined",
                id: undefined,
                email: undefined,
                isLoggedin: false,
                isPremiumUser: false,
            })
        );
        console.log("after ");
        console.log(
            "data from Cookies after set",
            JSON.parse(jsCookies.getItem("loginData"))
        );
        setLoginDetails((prev) => ({
            ...prev,
            email: undefined,
            id: undefined,
            isLoggedin: false,
        }));
        signOut(auth)
            .then((data) => {
                console.log(data, "inside the signout");
            })
            .catch((error) => {
                alert(error);
            });
        navigate("/login");
    };

    return (
        <Box boxShadow={"sm"} className={"container"}>
            <Flex
                color={useColorModeValue("white", "gray.600")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={"center"}
            >
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: "center", md: "start" }}
                >
                    <Text
                        as="a"
                        textAlign={useBreakpointValue({
                            base: "center",
                            md: "left",
                        })}
                        fontFamily={"heading"}
                        color={useColorModeValue("white", "gray.800")}
                        href={"/"}
                    >
                        <Image src={logo} maxHeight="25px" maxWidth={"auto"} />
                    </Text>

                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                {loginDetails && loginDetails.isLoggedin ? (
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                    >
                        <Button
                            as={"a"}
                            fontSize={"sm"}
                            fontWeight={400}
                            variant={"link"}
                            color={"white"}
                            href={"/payments"}
                        >
                            Be Premium
                        </Button>

                        {!dashboardLink && (
                            <Button
                                as={"a"}
                                fontSize={"sm"}
                                fontWeight={400}
                                variant={"link"}
                                color={"white"}
                                href={"/dashboard/user/" + loginDetails.id}
                            >
                                Dashboard
                            </Button>
                        )}
                        <Tooltip
                            label={
                                loginDetails.isPremiumUser
                                    ? "Premium User"
                                    : "Normal User"
                            }
                            hasArrow
                            arrowSize={15}
                        >
                            <Button
                                as={"a"}
                                fontSize={"sm"}
                                fontWeight={400}
                                variant={"link"}
                                color={"white"}
                                href={"#"}
                            >
                                {loginDetails.email}
                            </Button>
                        </Tooltip>
                        <Button
                            display={{ base: "none", md: "inline-flex" }}
                            fontSize={"sm"}
                            fontWeight={400}
                            borderRadius={"50px"}
                            paddingLeft={"10"}
                            paddingRight={"10"}
                            color={"black"}
                            bg={"white"}
                            href={"#"}
                            _hover={{
                                bg: "white.100",
                            }}
                            onClick={(e) => logOut()}
                        >
                            Logout
                        </Button>
                    </Stack>
                ) : (
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                    >
                        <Button
                            as={"a"}
                            fontSize={"sm"}
                            fontWeight={400}
                            variant={"link"}
                            color={"white"}
                            href={"/signup"}
                        >
                            Sign Up
                        </Button>
                        <Button
                            as={"a"}
                            display={{ base: "none", md: "inline-flex" }}
                            fontSize={"sm"}
                            fontWeight={400}
                            borderRadius={"50px"}
                            paddingLeft={"10"}
                            paddingRight={"10"}
                            color={"black"}
                            bg={"white"}
                            href={"/login"}
                            _hover={{
                                bg: "white.100",
                            }}
                        >
                            Login
                        </Button>
                    </Stack>
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("white", "gray.200");
    const linkHoverColor = useColorModeValue("white", "gray.800");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? "#"}
                                fontSize={"sm"}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"pink.400"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: "Features",
        href: "/#features",
    },
    {
        label: "Pricing",
        href: "/#pricing",
    },
];
