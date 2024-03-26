import { Size } from "./size.types";
import { Variant } from "./variant.types";

export type ComponentBase = {
  isDisabled?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
};
