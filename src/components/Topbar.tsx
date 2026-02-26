import { HStack, Link, IconButton, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import type { JsonContent } from "../model/Model";

export default function Topbar({ content }: JsonContent) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack justify="center" spacing={10} mb={16} wrap="wrap">
            {content.topbar.map((item: any) => (
                <Tooltip
                    key={item.name}
                    label={item.tooltip}
                    openDelay={1000}
                    bg="app.socialBg"
                    color="app.heroHeading"
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="app.heroBorder"
                    fontSize="xs"
                >
                    <Link
                        href={item.path}
                        fontSize="lg"
                        fontWeight="medium"
                        color="app.muted"
                        _hover={{
                            color: "app.hover",
                            transform: "translateY(-2px)"
                        }}
                        transition="all 0.2s"
                    >
                        {item.name}
                    </Link>
                </Tooltip>
            ))}
            <Tooltip
                label="Toggle theme"
                openDelay={1000}
                bg="app.socialBg"
                color="app.heroHeading"
                borderRadius="xl"
                border="1px solid"
                borderColor="app.heroBorder"
                fontSize="xs"
            >
                <IconButton
                    aria-label="Toggle theme"
                    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    color="app.muted"
                    fontSize="lg"
                    _hover={{
                        color: "app.hover",
                        transform: "translateY(-2px)",
                        bg: "app.socialHover"
                    }}
                    _active={{ bg: "transparent" }}
                    transition="all 0.2s"
                />
            </Tooltip>
        </HStack>
    );
}