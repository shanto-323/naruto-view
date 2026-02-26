import { Box, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Box textAlign="center" py={20} px={6}>
            <Image
                src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
                alt="404 Animation"
                maxW="300px"
                mx="auto"
                mb={8}
                borderRadius="lg"
                loading='lazy'
            />

            <Button as={Link} to="/" colorScheme="blue" size="lg">
                Go Home
            </Button>
        </Box>
    );
}