
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Plus, Hash } from 'lucide-react';

interface Variable {
  key: string;
  label: string;
  value: string;
}

interface VariableInsertProps {
  variables: Variable[];
  onInsert: (variableKey: string) => void;
}

export const VariableInsert: React.FC<VariableInsertProps> = ({
  variables,
  onInsert
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customVariable, setCustomVariable] = useState('');

  const handleInsertPredefined = (variableKey: string) => {
    onInsert(variableKey);
    setIsOpen(false);
  };

  const handleInsertCustom = () => {
    if (customVariable.trim()) {
      onInsert(customVariable.trim());
      setCustomVariable('');
      setIsOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInsertCustom();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Hash className="w-4 h-4 mr-2" />
          Variables
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Insert Variable</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {variables.length > 0 && (
            <div>
              <Label className="text-sm font-medium">Predefined Variables</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {variables.map((variable) => (
                  <Badge
                    key={variable.key}
                    variant="secondary"
                    className="cursor-pointer hover:bg-blue-100 hover:text-blue-800 transition-colors"
                    onClick={() => handleInsertPredefined(variable.key)}
                  >
                    {variable.label}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="custom-variable" className="text-sm font-medium">
              Custom Variable
            </Label>
            <div className="flex gap-2">
              <Input
                id="custom-variable"
                placeholder="Enter variable name"
                value={customVariable}
                onChange={(e) => setCustomVariable(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleInsertCustom}
                disabled={!customVariable.trim()}
                size="sm"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Variables will be inserted as {`{{variableName}}`}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
