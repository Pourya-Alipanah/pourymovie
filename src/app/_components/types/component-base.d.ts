import { Size } from "./size.d";
import { Variant } from "./variant.d";

export type ComponentBase ={
    isDisabled?: boolean;
    className?: string;
    variant?: Variant;
    size?: Size;
}