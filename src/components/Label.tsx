import React, { FC } from "react";

export interface LabelProps {
  className?: string;
  children?: React.ReactNode;
}

const Label: FC<LabelProps> = ({ className = "", children }) => {
  return (
    <label
      className={`nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
