import {
    Box,
    Text,
    HStack,
    VStack,
} from "@chakra-ui/react";
import type { JsonContent } from "../model/Model"

export default function Footer({ content }: JsonContent) {
    return (
        <Box textAlign="center" py={10} borderTop="1px solid" borderColor="app.heroBorder">
            <VStack spacing={2}>
                <HStack spacing={4} justify="center" fontSize="xs" color="app.muted">
                    <Text>{content.footer.copyright} • © {new Date().getFullYear()}</Text>
                    <Text color="tokyoNight.border">|</Text>
                    <Text>{content.footer.version}</Text>
                    <Text color="tokyoNight.border">|</Text>
                    <Text>Updated: {content.footer["last-updated"]}</Text>
                </HStack>
            </VStack>
        </Box>
    )
}
