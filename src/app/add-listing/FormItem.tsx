import Label from "@/components/Label";
import React from "react";
import { FC } from "react";

export interface FormItemProps {
  className?: string;
  label?: string;
  desc?: string;
  children?: React.ReactNode;
}

const FormItem: FC<FormItemProps> = ({
  children,
  className = "",
  label,
  desc,
}) => {
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <div className="mt-1">{children}</div>
      {desc && (
        <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">
          {desc}
        </span>
      )}
    </div>
  );
};

export default FormItem;
