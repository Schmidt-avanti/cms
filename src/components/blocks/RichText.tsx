import React from 'react';

interface RichTextProps {
  content: any; // Lexical editor state
}

export const RichTextBlock: React.FC<RichTextProps> = ({ content }) => {
  // Simple fallback rendering for rich text content
  const renderContent = () => {
    if (typeof content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    
    if (content?.root?.children) {
      return (
        <div>
          {content.root.children.map((child: any, index: number) => (
            <div key={index}>
              {child.children?.map((textNode: any, textIndex: number) => (
                <span key={textIndex}>{textNode.text || ''}</span>
              ))}
            </div>
          ))}
        </div>
      );
    }
    
    return <div>Rich text content</div>;
  };

  return (
    <div className="rich-text-block">
      {renderContent()}
    </div>
  );
};
