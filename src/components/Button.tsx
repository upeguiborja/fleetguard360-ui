import { FunctionComponent } from "react";

type ButtonProps = {
  label?: string;
};

const Button: FunctionComponent<ButtonProps> = ({ label }) => {
  return (
    <button
      className="bg-[#0086C9] text-white py-2 px-3.5 w-full rounded-lg h-min"
      type="submit"
      aria-label={label ? label : "Button"}
    >
      {label}
    </button>
  );
};

export default Button;
