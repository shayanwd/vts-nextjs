'use client';
import { useEffect } from 'react';

const Fresher = () => {
    useEffect(() => {
        const node = document.createElement('div');
        document.body.appendChild(node);

        return () => {
            if (document.body.contains(node)) {
                document.body.removeChild(node);
            }
        };
    }, []);

    return null;
};

export default Fresher;
