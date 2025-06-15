
import React, { useState } from 'react';
import { WysiwygEditor } from '@/components/WysiwygEditor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [editorContent, setEditorContent] = useState(`
    <h1>Welcome to our Professional WYSIWYG Editor</h1>
    <p>Hello <strong>{{userName}}</strong>, this is a demonstration of our advanced editor capabilities.</p>
    <p>Today's date is: <em>{{date}}</em></p>
    <h2>Features Include:</h2>
    <ul>
      <li>Rich text formatting with custom toolbar</li>
      <li>Image upload with cropping capabilities</li>
      <li>Dynamic variable insertion</li>
      <li>HTML preview and raw editing</li>
      <li>Professional styling and responsive design</li>
    </ul>
    <blockquote>
      "This editor provides everything you need for professional content creation."
    </blockquote>
    <p style="text-align: center;">Try uploading an image or inserting variables!</p>
  `);

  const sampleVariables = [
    { key: 'userName', label: 'User Name', value: 'John Doe' },
    { key: 'date', label: 'Current Date', value: new Date().toLocaleDateString() },
    { key: 'companyName', label: 'Company', value: 'Acme Corp' },
    { key: 'email', label: 'Email', value: 'john@example.com' },
    { key: 'phone', label: 'Phone', value: '+1 (555) 123-4567' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Professional WYSIWYG Editor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A feature-rich text editor built with React, offering advanced text formatting, 
            image handling, dynamic variables, and seamless HTML preview capabilities.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="secondary">Image Upload & Cropping</Badge>
            <Badge variant="secondary">Dynamic Variables</Badge>
            <Badge variant="secondary">HTML Preview</Badge>
            <Badge variant="secondary">Custom Toolbar</Badge>
            <Badge variant="secondary">Rich Text Formatting</Badge>
            <Badge variant="secondary">Responsive Design</Badge>
          </div>
        </div>

        {/* Main Editor */}
        <WysiwygEditor
          value={editorContent}
          onChange={setEditorContent}
          placeholder="Start creating your content..."
          height="500px"
          variables={sampleVariables}
        />

        {/* Features Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 Rich Text Formatting
              </CardTitle>
              <CardDescription>
                Complete text styling with bold, italic, underline, colors, fonts, and alignment options.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📷 Image Management
              </CardTitle>
              <CardDescription>
                Upload images with built-in cropping tool and drag-and-drop positioning within the editor.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔧 Custom Toolbar
              </CardTitle>
              <CardDescription>
                Modular toolbar design allowing easy addition or removal of formatting features.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📝 HTML Editing
              </CardTitle>
              <CardDescription>
                Switch between visual editor and raw HTML input with live preview capabilities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏷️ Dynamic Variables
              </CardTitle>
              <CardDescription>
                Insert placeholder variables that can be replaced with dynamic content during rendering.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📱 Responsive Design
              </CardTitle>
              <CardDescription>
                Fully responsive interface that works seamlessly across desktop, tablet, and mobile devices.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Usage Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
            <CardDescription>
              Get started with the editor using these simple steps:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">✏️ Text Editing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use the toolbar for formatting options</li>
                  <li>• Select text to see contextual formatting</li>
                  <li>• Switch between editor, preview, and HTML modes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🖼️ Images</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Click "Upload Image" to add pictures</li>
                  <li>• Use the cropper to adjust image dimensions</li>
                  <li>• Drag images within the editor to reposition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🏷️ Variables</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Click "Variables" to insert placeholders</li>
                  <li>• Use predefined or create custom variables</li>
                  <li>• Preview shows variables replaced with values</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">👁️ Preview</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Switch to "Preview" tab to see final output</li>
                  <li>• Use "HTML" tab for raw code editing</li>
                  <li>• All changes are reflected in real-time</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
