import React from "react";
import {
  SelectInputProps,
  TextAreaInputProps,
  TextInputProps,
} from "../core/types";

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  selectedValue,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="flex flex-col w-full gap-[14px]">
      <label className="text-[#000000] text-[20px] font-[300]">{label}</label>
      <select
        className="border border-[#6f6f6f]  rounded-[10px] py-[18px] px-[30px] outline-none bg-input-bg text-normal-text-color"
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col w-full gap-[14px]">
      <label className="text-[#000000] text-[20px] font-[300]">{label}</label>
      <input
        type={type}
        className="border border-[#6f6f6f]  rounded-[10px] py-[18px] px-[30px] outline-none bg-input-bg text-normal-text-color"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col w-full gap-[14px]">
      <label className="text-[#000000] text-[20px] font-[300]">{label}</label>
      <textarea
        className="border border-[#6f6f6f]  rounded-[10px] py-[18px] px-[30px] outline-none bg-input-bg text-normal-text-color resize-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};
