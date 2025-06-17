import { FunctionComponent, HTMLInputTypeAttribute } from "react";

type InputProps = {
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
};

const Input: FunctionComponent<InputProps> = ({
  id,
  name,
  type,
  label,
  pattern,
  placeholder,
  required,
}) => {
  return (
    <div className="flex flex-col gap-y-1.5 text-sm">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <div>
        <input
          className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA] bg-white"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
