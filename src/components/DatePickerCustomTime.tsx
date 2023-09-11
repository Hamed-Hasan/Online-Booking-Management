import React, { FC } from "react";

interface Props {
  value?: string;
  onChange?: (e: string) => void;
}

const DatePickerCustomTime: FC<Props> = ({ onChange, value }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={{ border: "solid 1px pink" }}
      />
    </div>
  );
};

export default DatePickerCustomTime;
