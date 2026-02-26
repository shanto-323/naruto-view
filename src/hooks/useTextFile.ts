import { useState, useEffect } from 'react';

export default function useTextFile(filename: string): string {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (!filename) { setContent("not found"); return; }
        fetch(`/${filename}`)
            .then(res => { if (!res.ok) throw new Error(); return res.text(); })
            .then(text => setContent(text.trim()))
            .catch(() => setContent("not found"));
    }, [filename]);

    return content;
}