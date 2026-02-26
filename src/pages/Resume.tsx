import { Box} from '@chakra-ui/react';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

export default function ResumeButton({ content }: any) {
    return (
        <Box minH="100vh" bg="app.bg" color="app.text" py={10}>
            <Topbar content={content} />
            <Box flex="1">
                <iframe
                    src={content.hero.resume.file}
                    width="100%"
                    height="100%"
                    style={{ border: 'none', minHeight: '100vh' }}
                    title={content.hero.resume.name}
                />
            </Box>
            <Footer content={content} />
        </Box>
    );
}