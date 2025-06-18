import React, { PropsWithChildren } from "react";
import Button from "./Button";

export const DialogSuccessIcon: React.FC = () => (
  <div className="w-12 h-12">
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="48" height="48" rx="24" fill="#E0F2FE" />
      <rect x="4" y="4" width="48" height="48" rx="24" stroke="#F0F9FF" strokeWidth="8" />
      <path d="M38 27.08V28C37.9988 30.1564 37.3005 32.2547 36.0093 33.9818C34.7182 35.709 32.9033 36.9725 30.8354 37.5839C28.7674 38.1953 26.5573 38.1219 24.5345 37.3746C22.5117 36.6273 20.7847 35.2461 19.611 33.4371C18.4373 31.628 17.8798 29.4881 18.0217 27.3363C18.1636 25.1846 18.9972 23.1363 20.3983 21.4971C21.7994 19.8578 23.6928 18.7154 25.7962 18.2401C27.8996 17.7649 30.1003 17.9823 32.07 18.86M38 20L28 30.01L25 27.01" stroke="#0086C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Dialog = ({ children, onClose, isOpen }: PropsWithChildren<DialogProps>) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#101828B2] flex justify-center items-center">
      <div className="grow max-w-100 bg-white rounded-xl overflow-hidden p-6">
        {children}
        <Button className="w-full mt-8" type="button" onClick={onClose} label="Confirmar" />
      </div>
    </div>
  );
};

Dialog.SuccessIcon = DialogSuccessIcon;

export default Dialog;
