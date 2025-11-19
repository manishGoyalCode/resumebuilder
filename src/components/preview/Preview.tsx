import React, { useRef, useEffect, useState } from 'react';
import { ResumePreview } from './ResumePreview';

export const Preview: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const parentWidth = containerRef.current.parentElement?.clientWidth || 0;
                // A4 width is 210mm approx 794px at 96dpi
                // Add some padding (e.g. 64px total)
                const availableWidth = parentWidth - 64;
                const baseWidth = 794; // 210mm in pixels

                const newScale = Math.min(availableWidth / baseWidth, 1);
                setScale(newScale);
            }
        };

        window.addEventListener('resize', updateScale);
        updateScale();

        return () => window.removeEventListener('resize', updateScale);
    }, []);

    return (
        <div id="preview-scaler" ref={containerRef} style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            transition: 'transform 0.2s'
        }}>
            <div id="preview-wrapper" style={{
                boxShadow: 'var(--shadow-lg)',
                width: '210mm',
                minHeight: '297mm',
                background: 'white'
            }}>
                <ResumePreview />
            </div>
        </div>
    );
};
