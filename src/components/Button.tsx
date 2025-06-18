import { FunctionComponent } from "react";
import Spinner from "./Spinner";
import clsx from "@/utils/clsx";

type ButtonProps = {
  label?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const baseClasses =
  "bg-[#0086C9] text-white py-2 px-3.5 rounded-lg h-min flex justify-center items-center";
const enabledClasses = "cursor-pointer";
const disabledClasses = "cursor-not-allowed opacity-50";

const Button: FunctionComponent<ButtonProps> = ({ label, isLoading, type = "button", onClick, className }) => {

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (onClick && !isLoading) {
      onClick();
    }
  }

  return (
    <button
      className={clsx(
        baseClasses,
        isLoading ? disabledClasses : enabledClasses,
        className
      )}
      aria-label={label ? label : "Button"}
      onClick={onClick && handleClick}
      type={type}
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
