
import React, { useState, useRef, useCallback, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CustomToolbar } from './CustomToolbar';
import { ImageCropper } from './ImageCropper';
import { HtmlPreview } from './HtmlPreview';
import { VariableInsert } from './VariableInsert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Code, Image, Type } from 'lucide-react';

interface WysiwygEditorProps {
  value?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  height?: string;
  variables?: { key: string; label: string; value: string }[];
}

export const WysiwygEditor: React.FC<WysiwygEditorProps> = ({
  value = '',
  onChange,
  placeholder = 'Start writing...',
  height = '400px',
  variables = []
}) => {
  const [content, setContent] = useState(value);
  const [showImageCropper, setShowImageCropper] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'html'>('editor');
  const quillRef = useRef<ReactQuill>(null);

  const handleContentChange = useCallback((newContent: string) => {
    setContent(newContent);
    onChange?.(newContent);
  }, [onChange]);

  const handleImageUpload = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setSelectedImage(file);
        setShowImageCropper(true);
      }
    };
    input.click();
  }, []);

  const handleCroppedImage = useCallback((croppedImageUrl: string) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection();
      const index = range ? range.index : quill.getLength();
      
      quill.insertEmbed(index, 'image', croppedImageUrl);
      quill.setSelection(index + 1, 0);
    }
    setShowImageCropper(false);
    setSelectedImage(null);
  }, []);

  const handleVariableInsert = useCallback((variable: string) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection();
      const index = range ? range.index : quill.getLength();
      
      quill.insertText(index, `{{${variable}}}`, { background: '#e3f2fd', color: '#1976d2' });
      quill.setSelection(index + variable.length + 4, 0);
    }
  }, []);

  const modules = useMemo(() => ({
    toolbar: {
      container: '#toolbar',
      handlers: {
        image: handleImageUpload,
      }
    },
    clipboard: {
      matchVisual: false,
    }
  }), [handleImageUpload]);

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'align', 'color', 'background',
    'script', 'code-block'
  ];

  return (
    <Card className="w-full">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">WYSIWYG Editor</h3>
          <div className="flex gap-2">
            <VariableInsert 
              variables={variables} 
              onInsert={handleVariableInsert} 
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleImageUpload}
            >
              <Image className="w-4 h-4 mr-2" />
              Upload Image
            </Button>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="editor" className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              Editor
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="html" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              HTML
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor" className="mt-4">
            <CustomToolbar />
            <div style={{ height }}>
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={content}
                onChange={handleContentChange}
                placeholder={placeholder}
                modules={modules}
                formats={formats}
                style={{ height: 'calc(100% - 42px)' }}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="preview" className="mt-4">
            <HtmlPreview content={content} variables={variables} height={height} />
          </TabsContent>
          
          <TabsContent value="html" className="mt-4">
            <div className="border rounded-md">
              <textarea
                value={content}
                onChange={(e) => handleContentChange(e.target.value)}
                className="w-full p-4 font-mono text-sm resize-none border-0 focus:outline-none"
                style={{ height }}
                placeholder="Enter HTML content..."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {showImageCropper && selectedImage && (
        <ImageCropper
          image={selectedImage}
          onCrop={handleCroppedImage}
          onCancel={() => {
            setShowImageCropper(false);
            setSelectedImage(null);
          }}
        />
      )}
    </Card>
  );
};
