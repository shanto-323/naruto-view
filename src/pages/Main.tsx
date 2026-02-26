import {
    Box,
    Text,
    HStack,
    Link,
    Container,
    Grid,
    Heading,
    Image,
    VStack,
    Center
} from "@chakra-ui/react";
import type { JsonContent } from "../model/Model"
import Marquee from "../components/Marquee";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function Main({ content }: JsonContent) {
    return (
        <Box minH="100vh" bg="app.bg" color="app.text" py={10}>
            <Container>
                <Topbar content={content} />

                <Grid
                    templateColumns={{ base: "1fr", lg: "1fr 1.6fr" }}
                    gap={16}
                    alignItems="center"
                    mb={20}
                >
                    <Box
                        bg="app.heroBg"
                        p={8}
                        borderRadius="2xl"
                        textAlign="center"
                        border="1px solid"
                        borderColor="app.heroBorder"
                        boxShadow="2xl"
                        transition="all 0.3s"
                        _hover={{ boxShadow: "dark-lg" }}
                    >
                        <Center mb={6}>
                            <Box
                                borderRadius="full"
                                border="3px solid"
                                borderColor="app.heroBorder"
                                p={1}
                            >
                                <Image
                                    alt="Shanto"
                                    src={content.hero.image.profile}
                                    boxSize="180px"
                                    borderRadius="full"
                                    objectFit="cover"
                                    loading="lazy"
                                />
                            </Box>
                        </Center>

                        <VStack spacing={2} mb={6}>
                            <Heading
                                as="h1"
                                fontSize="2xl"
                                fontWeight="bold"
                                color="app.heroHeading"
                            >
                                {content.hero.name}
                            </Heading>
                            <Text fontSize="sm" color="app.muted">
                                {content.hero.title}
                            </Text>
                        </VStack>

                        <Box
                            h="1px"
                            bg="app.heroBorder"
                            mb={6}
                            mx={4}
                        />

                        <HStack justify="center" spacing={3}>
                            {Object.entries(content.social).map(([key, value]) => (
                                <Box
                                    key={key}
                                    p={2}
                                    borderRadius="lg"
                                    bg="app.socialBg"
                                    _hover={{
                                        bg: "app.socialHover",
                                        transform: "translateY(-2px)"
                                    }}
                                    transition="all 0.2s"
                                >
                                    <Link href={key}>
                                        <Image
                                            src={value as string}
                                            alt={key}
                                            boxSize="28px"
                                            objectFit="contain"
                                        />
                                    </Link>
                                </Box>
                            ))}
                        </HStack>
                    </Box>

                    <Box>
                        <Box
                            w="40px"
                            h="3px"
                            bgGradient="linear(to-r, tokyoNight.blue, tokyoNight.purple)"
                            borderRadius="full"
                            mb={6}
                        />
                        {content.hero.short.split("\n\n").map((p: string, i: number) => (
                            <Text
                                key={i}
                                fontSize="lg"
                                lineHeight={1.8}
                                color="app.heroText"
                                mb={6}
                                maxW="65ch"
                            >
                                {p}
                            </Text>
                        ))}
                    </Box>
                </Grid>

                <Marquee content={content} />
                <Footer content={content} />
            </Container>
        </Box>
    );
}