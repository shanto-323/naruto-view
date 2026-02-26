import {
    Box,
    Image
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { JsonContent } from "../model/Model"

export default function Marquee({ content }: JsonContent) {
    return (
        <Box
            position="relative"
            overflow="hidden"
            w="full"
            mx="auto"
            my={20}
        >
            <motion.div
                initial={{ x: 0 }}
                animate={{
                    x: ["0%", "-100%"],
                    transition: {
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }
                }}
                style={{
                    display: "flex",
                    gap: "5rem",
                    padding: "2rem 0",
                }}
            >
                {[...Array(8)].flatMap((_, copyIdx) =>
                    Object.entries(content.marquee).map(([key, value], idx) => {
                        const uniqueIdx = copyIdx * content.marquee.length + idx;
                        return (
                            <motion.div
                                key={`${key}-${uniqueIdx}`}
                                whileHover={{ scale: 1.2 }}
                                style={{ flexShrink: 0 }}
                            >
                                <Image
                                    src={value as string}
                                    alt={key}
                                    boxSize="80px"
                                    objectFit="contain"
                                    opacity={0.7}
                                    filter="grayscale(30%)"
                                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                                    _hover={{
                                        opacity: 1,
                                        filter: "grayscale(0%) brightness(1.1)",
                                        transform: "translateY(-5px)"
                                    }}
                                />
                            </motion.div>
                        );
                    })
                )}
            </motion.div>

            <Box
                position="absolute"
                insetY={0}
                left={0}
                w="200px"
                bgGradient="linear(to-r, app.bg 0%, transparent 100%)"
                pointerEvents="none"
            />
            <Box
                position="absolute"
                insetY={0}
                right={0}
                w="200px"
                bgGradient="linear(to-l, app.bg 0%, transparent 100%)"
                pointerEvents="none"
            />

            <Box
                position="absolute"
                top="50%"
                left="25%"
                w="200px"
                h="200px"
                bg="radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)"
                pointerEvents="none"
                opacity={0.3}
                transform="translate(-50%, -50%)"
                borderRadius="full"
                filter="blur(20px)"
            />
            <Box
                position="absolute"
                top="50%"
                right="25%"
                w="200px"
                h="200px"
                bg="radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)"
                pointerEvents="none"
                opacity={0.3}
                transform="translate(50%, -50%)"
                borderRadius="full"
                filter="blur(20px)"
            />
        </Box>
    )
}