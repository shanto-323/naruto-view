import { Box, Flex, Text, Image, Icon, Link, HStack } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    src: string | null;
    onClose: () => void;
}

export default function CertificateViewer({ src, onClose }: Props) {
    return (
        <AnimatePresence>
            {src && (
                <Box
                    as={motion.div}
                    position="fixed"
                    bottom={6}
                    right={6}
                    w={{ base: "90vw", md: "520px" }}
                    h={{ base: "60vh", md: "420px" }}
                    bg="app.heroBg"
                    border="1px solid"
                    borderColor="tokyoNight.border"
                    borderRadius="xl"
                    boxShadow="0 8px 32px rgba(0,0,0,0.5)"
                    zIndex={1000}
                    overflow="hidden"
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 60, scale: 0.95 }}
                    // @ts-ignore
                    transition={{ duration: 0.25 }}
                >
                    <Flex
                        px={4} py={2}
                        borderBottom="1px solid"
                        borderColor="tokyoNight.border"
                        justify="space-between"
                        align="center"
                    >
                        <Text fontSize="sm" color="app.muted">Certificate</Text>
                        <HStack spacing={3}>
                            <Link href={src} isExternal>
                                <Icon as={FaExternalLinkAlt} boxSize={3} color="app.muted" cursor="pointer" />
                            </Link>
                            <Icon as={FaTimes} boxSize={3} color="app.muted" cursor="pointer" onClick={onClose} />
                        </HStack>
                    </Flex>

                    <Image
                        src={src}
                        w="100%"
                        h="100%"
                        objectFit="contain"
                        p={3}
                    />
                </Box>
            )}
        </AnimatePresence>
    );
}