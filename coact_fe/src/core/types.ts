export interface TextInputProps {
  label: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  type: "text" | "tel" | "number" | "email";
  disabled?: boolean;
}
export interface SelectInputProps {
  label: string;
  selectedValue: string;
  placeholder: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
}

export interface TextAreaInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
}
