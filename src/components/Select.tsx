import clsx from "@/utils/clsx";

type SelectProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};

const Select: React.FC<SelectProps> = ({ id, name, label, value, options, onChange, placeholder, disabled }) => (
  <div className="flex flex-col gap-y-1.5 text-sm grow">
    <label htmlFor={id}>{label}</label>
    <div>
      <select
        className={clsx(
          "w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]",
          disabled && "bg-[#F5F5F5] text-[#A4A7AE] cursor-not-allowed"
        )}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  </div>
);

export default Select;
