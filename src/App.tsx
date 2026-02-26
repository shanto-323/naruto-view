import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, Spinner, Center } from '@chakra-ui/react';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { theme } from "./theme";
import Resume from "./pages/Resume"

export default function App() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/content.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load content.json:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      ) : error || !content ? (
        <NotFound />
      ) : (
        <Routes>
          {['/', '/me', '/home'].map((path) => (
            <Route key={path} path={path} element={<Main content={content} />} />
          ))}
          <Route path="/about" element={<About content={content} />} />
          <Route path="/resume" element={<Resume content={content}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </ChakraProvider>
  );
}