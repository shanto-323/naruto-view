import {
    Box,
    Text,
    HStack,
    VStack,
    Link,
    Container,
    Heading,
    Image,
    Badge,
    Grid,
    Flex,
    Icon,
    Button
} from "@chakra-ui/react";

import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaLinkedin,
} from 'react-icons/fa';
import { useState } from 'react';

import type { JsonContent } from "../model/Model"
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import CertificateViewer from "../components/CertificateViewer";
import useTextFile from "../hooks/useTextFile";

export default function SinglePage({ content }: JsonContent) {
    const [certUrl, setCertUrl] = useState<string | null>(null);

    return (
        <Box minH="100vh" bg="app.bg" color="app.text" py={10}>
            <Container maxW="container.xl">
                <Topbar content={content} />

                {/* ── HERO ── */}
                <Box w="100%" px={{ base: 4, lg: 0 }} mb={16}>
                    <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 3, lg: 6 }} alignItems="start">
                        <Box flexShrink={0}>
                            <Image
                                src={content.hero.image.profile}
                                alt={content.hero.name}
                                w={{ base: "100px", md: "140px", lg: "180px", xl: "220px" }}
                                height="auto"
                                objectFit="cover"
                                objectPosition="top center"
                                border="3px solid"
                                borderColor="tokyoNight.textComment"
                                borderRadius="lg"
                            />
                        </Box>
                        <Box flex="1" minW="0" textAlign="left">
                            <Heading
                                as="h1"
                                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                fontWeight="bold"
                                lineHeight={1.1}
                                mb={2}
                                color="app.heroHeading"
                                noOfLines={1}
                            >
                                {content.hero.name}
                            </Heading>
                            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium" color="app.muted" mb={6}>
                                {content.hero.title}
                            </Text>
                            <VStack align="start" spacing={2} fontSize={{ base: "sm", md: "md" }} mb={5}>
                                <HStack spacing={2}>
                                    <Icon as={FaMapMarkerAlt} color="app.muted" />
                                    <Text color="app.heroText">{content.hero.location}</Text>
                                </HStack>
                                <HStack spacing={2}>
                                    <Icon as={FaPhone} color="app.muted" />
                                    <Text color="app.heroText">{content.hero.phone}</Text>
                                </HStack>
                                <HStack spacing={2}>
                                    <Icon as={FaEnvelope} color="app.muted" />
                                    <Link href={`mailto:${content.hero.email}`} color="app.hover">{content.hero.email}</Link>
                                </HStack>
                                <HStack spacing={2}>
                                    <Icon as={FaLinkedin} color="app.hover" />
                                    <Link href={content.hero.linkedin} isExternal color="app.hover">
                                        {content.hero.linkedin.replace("https://", "")}
                                    </Link>
                                </HStack>
                            </VStack>
                        </Box>
                    </Flex>
                </Box>

                {/* ── ABOUT ── */}
                <Box mb={20}>
                    <Heading as="h2" fontSize="2xl" fontWeight="bold" color="app.heroHeading" mb={4}>
                        About
                    </Heading>
                    <Text
                        fontSize="lg"
                        lineHeight={1.8}
                        color="app.heroText"
                        whiteSpace="pre-wrap"
                    >
                        {useTextFile(content.hero.long)}
                    </Text>
                </Box>

                {/* ── SKILLS ── */}
                <Box mb={20}>
                    <Heading as="h2" fontSize="2xl" fontWeight="bold" color="app.heroHeading" mb={8}>
                        Skills
                    </Heading>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }} gap={6}>
                        {content.hero.skills.map((skill: { category: string; brief: string; items: string[] }, index: number) => (
                            <Box key={index} p={5} borderRadius="lg" border="1px solid" borderColor="app.heroBorder" bg="app.heroBg">
                                <Heading as="h3" fontSize="sm" fontWeight="semibold" color="app.hover" mb={2} letterSpacing="wide" textTransform="uppercase">
                                    {skill.category}
                                </Heading>
                                <Text fontSize="sm" color="app.muted" mb={4} lineHeight={1.7}>
                                    {skill.brief}
                                </Text>
                                <Flex wrap="wrap" gap={2}>
                                    {skill.items.map((item: string, i: number) => (
                                        <Badge key={i} px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="medium" bg="app.socialBg" color="app.heroText" border="1px solid" borderColor="app.heroBorder">
                                            {item}
                                        </Badge>
                                    ))}
                                </Flex>
                            </Box>
                        ))}
                    </Grid>
                </Box>

                {/* ── EDUCATION ── */}
                <Box mb={20}>
                    <Heading as="h2" fontSize="2xl" mb={10} color="app.heroHeading">
                        Education
                    </Heading>
                    <VStack spacing={6} align="stretch">
                        {content.education.map((edu: any, index: number) => (
                            <Box key={index} p={6} borderRadius="xl" border="1px solid" borderColor="app.heroBorder" bg="app.heroBg">
                                <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
                                    <HStack spacing={4} align="top">
                                        <VStack align="start" spacing={1}>
                                            <Text fontWeight="bold" fontSize="xl" color="app.heroHeading">{edu.institution}</Text>
                                            <Text color="app.muted" fontSize="sm">{edu.degree}</Text>
                                        </VStack>
                                        <Text color="app.muted" fontSize="sm">{edu.location}</Text>
                                    </HStack>
                                    <HStack spacing={8} align="center">
                                        <VStack align="start" spacing={1}>
                                            <Text fontSize="sm" color="app.muted">
                                                Roll: <Text as="span" fontWeight="medium" color="app.text">{edu.verify.roll || "N/A"}</Text>
                                            </Text>
                                            <Text fontSize="sm" color="app.muted">
                                                Registration: <Text as="span" fontWeight="medium" color="app.text">{edu.verify.registration || "N/A"}</Text>
                                            </Text>
                                        </VStack>
                                        <VStack spacing={2}>
                                            <Link href={edu.website} isExternal w="full">
                                                <Button size="sm" variant="outline" w="full" color="tokyoNight.blue" borderColor="tokyoNight.blue" _hover={{ bg: "tokyoNight.selection" }}>
                                                    Institute Info
                                                </Button>
                                            </Link>
                                            {/* Certificate — opens floating viewer, disabled if empty */}
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                w="full"
                                                color="tokyoNight.green"
                                                borderColor="tokyoNight.green"
                                                _hover={{ bg: "tokyoNight.bgPopup" }}
                                                isDisabled={!edu.verify.certificate}
                                                onClick={() => setCertUrl(edu.verify.certificate)}
                                            >
                                                Certificate
                                            </Button>
                                        </VStack>
                                    </HStack>
                                </Flex>
                            </Box>
                        ))}
                    </VStack>

                    {/* Floating certificate viewer — place outside the map but inside the Box */}
                    <CertificateViewer src={certUrl} onClose={() => setCertUrl(null)} />
                </Box>

                <Footer content={content} />
            </Container>
        </Box>
    );
}