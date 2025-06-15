
import React, { useMemo } from 'react';
import { Card } from '@/components/ui/card';

interface HtmlPreviewProps {
  content: string;
  variables?: { key: string; label: string; value: string }[];
  height?: string;
}

export const HtmlPreview: React.FC<HtmlPreviewProps> = ({
  content,
  variables = [],
  height = '400px'
}) => {
  const processedContent = useMemo(() => {
    let processed = content;
    
    // Replace variables with their values
    variables.forEach(variable => {
      const regex = new RegExp(`{{${variable.key}}}`, 'g');
      processed = processed.replace(regex, variable.value);
    });
    
    return processed;
  }, [content, variables]);

  return (
    <Card className="border rounded-md overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b">
        <h4 className="text-sm font-medium text-gray-700">Preview</h4>
      </div>
      <div 
        className="p-4 overflow-auto prose prose-sm max-w-none"
        style={{ height }}
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    </Card>
  );
};
