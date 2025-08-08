import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Sparkles } from 'lucide-react';
import { Template, TemplateField } from '@/lib/templates';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface DynamicFormProps {
  template: Template;
  onSubmit: (data: any) => void;
  initialData?: any;
}

export const DynamicForm = ({ template, onSubmit, initialData }: DynamicFormProps) => {
  const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });
  const { toast } = useToast();

  const renderField = (field: TemplateField) => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            {...register(field.id, { required: field.required })}
            placeholder={field.prompt}
            className="w-full"
          />
        );

      case 'textarea':
        return (
          <Textarea
            {...register(field.id, { required: field.required })}
            placeholder={field.prompt}
            className="w-full min-h-[100px]"
          />
        );

      case 'number':
        return (
          <Input
            type="number"
            {...register(field.id, { 
              required: field.required,
              min: field.min,
              max: field.max
            })}
            placeholder={field.prompt}
            className="w-full"
          />
        );

      case 'slider':
        return (
          <SliderField
            field={field}
            value={watch(field.id) || field.defaultValue || 5}
            onChange={(value) => setValue(field.id, value)}
          />
        );

      case 'boolean':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={field.id}
              {...register(field.id)}
            />
            <label htmlFor={field.id} className="text-sm font-medium">
              {field.prompt}
            </label>
          </div>
        );

      case 'select':
        return (
          <Select onValueChange={(value) => setValue(field.id, value)}>
            <SelectTrigger>
              <SelectValue placeholder={field.prompt} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'table':
        return <TableField field={field} control={control} />;

      default:
        return null;
    }
  };

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    toast({
      title: "Progress Saved! 🎉",
      description: "Your reflection has been recorded. Keep building that momentum!",
      duration: 3000,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <h1 className="text-3xl font-bold gradient-motivation bg-clip-text text-transparent">
            {template.title}
          </h1>
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {template.description}
        </p>
        {template.motivationalQuote && (
          <div className="card-glow rounded-lg p-4 bg-gradient-to-r from-primary/5 to-primary-glow/5 border border-primary/20">
            <p className="text-sm italic text-primary font-medium">
              "{template.motivationalQuote}"
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {template.fields.map((field) => (
          <Card key={field.id} className="card-glow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <span>{field.label}</span>
                {field.required && <span className="text-destructive">*</span>}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{field.prompt}</p>
            </CardHeader>
            <CardContent>
              {renderField(field)}
              {errors[field.id] && (
                <p className="text-sm text-destructive mt-2">This field is required</p>
              )}
            </CardContent>
          </Card>
        ))}

        <div className="flex justify-center pt-6">
          <Button
            type="submit"
            size="lg"
            className="button-glow px-8 py-3 text-lg font-semibold"
          >
            Complete Check-in ✨
          </Button>
        </div>
      </form>
    </div>
  );
};

// Slider Field Component
const SliderField = ({ field, value, onChange }: {
  field: TemplateField;
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{field.min || 1}</span>
        <span className="font-semibold text-lg text-primary">{value}</span>
        <span>{field.max || 10}</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        min={field.min || 1}
        max={field.max || 10}
        step={field.step || 1}
        className="w-full"
      />
    </div>
  );
};

// Table Field Component
const TableField = ({ field, control }: {
  field: TemplateField;
  control: any;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: field.id
  });

  return (
    <div className="space-y-4">
      {fields.map((item, index) => (
        <div key={item.id} className="flex items-center space-x-2 p-3 border border-border rounded-lg">
          {field.tableColumns?.map((column) => (
            <div key={column.key} className="flex-1">
              <label className="text-xs text-muted-foreground mb-1 block">
                {column.label}
              </label>
              {column.type === 'boolean' ? (
                <Checkbox {...control.register(`${field.id}.${index}.${column.key}`)} />
              ) : (
                <Input
                  type={column.type === 'number' ? 'number' : 'text'}
                  {...control.register(`${field.id}.${index}.${column.key}`)}
                  className="w-full"
                />
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => remove(index)}
            className="text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          const newRow: any = {};
          field.tableColumns?.forEach(col => {
            newRow[col.key] = col.type === 'boolean' ? false : '';
          });
          append(newRow);
        }}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Row
      </Button>
    </div>
  );
};