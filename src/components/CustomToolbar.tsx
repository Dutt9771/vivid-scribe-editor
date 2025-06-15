
import React from 'react';

export const CustomToolbar: React.FC = () => {
  return (
    <div id="toolbar" className="border border-gray-300 rounded-t-md bg-gray-50 p-2">
      <div className="flex flex-wrap gap-1 items-center">
        {/* Font and Size */}
        <select className="ql-font border rounded px-2 py-1 text-sm">
          <option value="">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
        </select>
        
        <select className="ql-size border rounded px-2 py-1 text-sm">
          <option value="small">Small</option>
          <option value="">Normal</option>
          <option value="large">Large</option>
          <option value="huge">Huge</option>
        </select>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Headers */}
        <select className="ql-header border rounded px-2 py-1 text-sm">
          <option value="">Normal</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Basic Formatting */}
        <button className="ql-bold p-1 rounded hover:bg-gray-200" title="Bold">
          <strong>B</strong>
        </button>
        <button className="ql-italic p-1 rounded hover:bg-gray-200" title="Italic">
          <em>I</em>
        </button>
        <button className="ql-underline p-1 rounded hover:bg-gray-200" title="Underline">
          <u>U</u>
        </button>
        <button className="ql-strike p-1 rounded hover:bg-gray-200" title="Strikethrough">
          <s>S</s>
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Script */}
        <button className="ql-script p-1 rounded hover:bg-gray-200" value="sub" title="Subscript">
          X₂
        </button>
        <button className="ql-script p-1 rounded hover:bg-gray-200" value="super" title="Superscript">
          X²
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Colors */}
        <select className="ql-color border rounded px-2 py-1 text-sm" title="Text Color">
          <option value="#000000"></option>
          <option value="#e60000"></option>
          <option value="#ff9900"></option>
          <option value="#ffff00"></option>
          <option value="#008a00"></option>
          <option value="#0066cc"></option>
          <option value="#9933ff"></option>
        </select>
        
        <select className="ql-background border rounded px-2 py-1 text-sm" title="Background Color">
          <option value="#ffffff"></option>
          <option value="#e60000"></option>
          <option value="#ff9900"></option>
          <option value="#ffff00"></option>
          <option value="#008a00"></option>
          <option value="#0066cc"></option>
          <option value="#9933ff"></option>
        </select>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Alignment */}
        <select className="ql-align border rounded px-2 py-1 text-sm">
          <option value="">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Lists */}
        <button className="ql-list p-1 rounded hover:bg-gray-200" value="ordered" title="Numbered List">
          1.
        </button>
        <button className="ql-list p-1 rounded hover:bg-gray-200" value="bullet" title="Bullet List">
          •
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Indent */}
        <button className="ql-indent p-1 rounded hover:bg-gray-200" value="-1" title="Decrease Indent">
          ←
        </button>
        <button className="ql-indent p-1 rounded hover:bg-gray-200" value="+1" title="Increase Indent">
          →
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Insert */}
        <button className="ql-link p-1 rounded hover:bg-gray-200" title="Link">
          🔗
        </button>
        <button className="ql-image p-1 rounded hover:bg-gray-200" title="Image">
          🖼️
        </button>
        <button className="ql-blockquote p-1 rounded hover:bg-gray-200" title="Blockquote">
          ""
        </button>
        <button className="ql-code-block p-1 rounded hover:bg-gray-200" title="Code Block">
          &lt;/&gt;
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Clean */}
        <button className="ql-clean p-1 rounded hover:bg-gray-200" title="Remove Formatting">
          🧹
        </button>
      </div>
    </div>
  );
};
