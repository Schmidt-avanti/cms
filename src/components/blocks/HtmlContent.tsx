'use client';

import React, { useEffect } from 'react';

interface HtmlContentProps {
  title?: string;
  htmlContent: string;
  customCss?: string;
  customJs?: string;
}

export const HtmlContentBlock: React.FC<HtmlContentProps> = ({
  title,
  htmlContent,
  customCss,
  customJs,
}) => {
  // Handle JavaScript execution on client side only to prevent hydration issues
  useEffect(() => {
    if (customJs && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.innerHTML = customJs;
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [customJs]);

  return (
    <div className="html-content-block">
      {title && <h2 className="sr-only">{title}</h2>}
      
      {customCss && (
        <style dangerouslySetInnerHTML={{ __html: customCss }} />
      )}
      
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};
