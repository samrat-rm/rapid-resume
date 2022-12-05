import React, { useState } from "react";
import jsCookies from "js-cookies";
import googleLogo from "../../../assets/google-logo.svg";
import {
    saveUser,
    findUser,
} from "../../../globals/config/firebaseStorage/userData";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { firebase, auth } from "../../../firebase.config"; // important don't remove
import { useNavigate, Link as RouteLink } from "react-router-dom";
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Image,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
    Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Blur from "../background/Blur";

const avatars = [
    {
        name: "Ryan Florence",
        url: "https://bit.ly/ryan-florence",
    },
    {
        name: "Segun Adebayo",
        url: "https://bit.ly/sage-adebayo",
    },
    {
        name: "Kent Dodds",
        url: "https://bit.ly/kent-c-dodds",
    },
    {
        name: "Prosper Otemuyiwa",
        url: "https://bit.ly/prosper-baba",
    },
    {
        name: "Christian Nwamba",
        url: "https://bit.ly/code-beast",
    },
];

export default function LoginComponent(props) {
    let [showPassword, setShowPassword] = useState();
    let [loginData, setLoginData] = useState({
        email: "dummy.login@gmail.com",
        password: ".ABC123abc",
    });
    let [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    function handleDataChange(event) {
        let { name, value } = event.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    }
    const navigate = useNavigate();

    function LoginUser() {
        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            .then((res) => {
                findUser(res.user.uid).then(async (resDB) => {
                    //console.log(resDB);

                    jsCookies.setItem("userLoginStatus", true);
                    jsCookies.setItem("user", res.user);
                    {
                        props.setContent(resDB.data);
                    }
                    var updatedLoginData = {
                        userName: resDB.email,
                        id: res.user.uid,
                        isLoggedin: true,
                        email: resDB.email,
                        isPremiumUser: resDB.premium,
                    };
                    props.setLoginDataProps(updatedLoginData);
                    console.log("updated login data", updatedLoginData);
                    jsCookies.setItem(
                        "loginData",
                        JSON.stringify(updatedLoginData)
                    );
                    console.log(
                        "data from Cookies after set",
                        JSON.parse(jsCookies.getItem("loginData"))
                    );
                });
                navigate(`/dashboard/user/${res.user.uid}`);
                // setTimeout(() => {
                //     console.log("updating....");
                //     updateUser(res.user.uid, { firstName: "here" });
                // }, 1000);
            })
            .catch((err) => console.log(err));
    }
    function signInWithGmail() {
        let provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                jsCookies.setItem("userLoginStatus", true);
                jsCookies.setItem("user", user);
                props.setLoginDataProps((prev) => ({
                    ...prev,
                    isLoggedin: true,
                    id: user.uid,
                }));

                findUser(result.user.uid).then(async (resDB) => {
                    //console.log(resDB);
                    user = await resDB;
                    {
                        (await resDB.data) &&
                            props.setContent(await resDB.data);
                    }
                    props.setLoginDataProps((prev) => ({
                        userName: user.email,
                        id: result.user.uid,
                        isLoggedin: true,
                        email: user.email,
                        isPremiumUser: user.isPremiumUser,
                    }));
                });
                //console.log("email is a test >>>", user);
                //console.log("LoginData is a test >>>", props.loginData);

                const { firstName, lastName } = userData;
                const { email } = user;

                navigate(`/dashboard/user/${user.uid}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //console.log(errorCode, "->", errorMessage);
            });
    }
    return (
        <Box position={"relative"}>
            <Container
                as={SimpleGrid}
                maxW={"7xl"}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}
            >
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{
                            base: "3xl",
                            sm: "4xl",
                            md: "5xl",
                            lg: "6xl",
                        }}
                    >
                        Students, Interns{" "}
                        <Text
                            as={"span"}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text"
                        >
                            &
                        </Text>{" "}
                        Experienced Professionals
                    </Heading>
                    <Stack direction={"row"} spacing={4} align={"center"}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={{ base: "md", md: "lg" }}
                                    position={"relative"}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: "full",
                                        height: "full",
                                        rounded: "full",
                                        transform: "scale(1.125)",
                                        bgGradient:
                                            "linear(to-bl, red.400,pink.400)",
                                        position: "absolute",
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text
                            fontFamily={"heading"}
                            fontSize={{ base: "4xl", md: "6xl" }}
                        >
                            +
                        </Text>
                        <Flex
                            align={"center"}
                            justify={"center"}
                            fontFamily={"heading"}
                            fontSize={{ base: "sm", md: "lg" }}
                            bg={"gray.800"}
                            color={"white"}
                            rounded={"full"}
                            width={useBreakpointValue({
                                base: "44px",
                                md: "60px",
                            })}
                            height={useBreakpointValue({
                                base: "44px",
                                md: "60px",
                            })}
                            position={"relative"}
                            _before={{
                                content: '""',
                                width: "full",
                                height: "full",
                                rounded: "full",
                                transform: "scale(1.125)",
                                bgGradient:
                                    "linear(to-bl, orange.400,yellow.400)",
                                position: "absolute",
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}
                        >
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={"gray.50"}
                    rounded={"xl"}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: "lg" }}
                >
                    <Stack spacing={4}>
                        <Heading
                            color={"gray.800"}
                            lineHeight={1.1}
                            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                        >
                            Log in your Account
                            <Text
                                as={"span"}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text"
                            >
                                !
                            </Text>
                        </Heading>
                        <Text
                            color={"gray.500"}
                            fontSize={{ base: "sm", sm: "md" }}
                        >
                            to enjoy all of our cool features
                        </Text>
                    </Stack>
                    <Box rounded={"lg"} p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    paddingX="6px"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleDataChange}
                                    type="email"
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>

                                <InputGroup>
                                    <Input
                                        name="password"
                                        paddingX="6px"
                                        value={loginData.password}
                                        onChange={handleDataChange}
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                    />
                                    <InputRightElement h={"full"}>
                                        <Button
                                            variant={"ghost"}
                                            onClick={() =>
                                                setShowPassword(
                                                    (showPassword) =>
                                                        !showPassword
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Link color={"blue.400"}>
                                        Forgot password?
                                    </Link>
                                </Stack>
                                <Button
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={LoginUser}
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                A new user?{" "}
                                <Link href="signup" color={"blue.400"}>
                                    Sign Up
                                </Link>
                            </Text>
                        </Stack>
                        <Stack spacing={10} pt={5}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"white"}
                                color={"blue.500"}
                                shadow="lg"
                                _hover={{
                                    shadow: "xl",
                                }}
                                marginBottom="15px"
                                border="2px"
                                borderColor="gray.200"
                                padding="6"
                            >
                                <Image
                                    src={googleLogo}
                                    alt="logo og google"
                                    mr="3"
                                />{" "}
                                Sign in with Google
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
