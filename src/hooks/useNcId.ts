import { useId } from "react";

export default function useNcId(pre = "nc"): string {
  const id = useId();
  return `${pre}_${id.replace(/:/g, "_")}`;
}
