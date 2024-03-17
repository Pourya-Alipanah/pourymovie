import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from '../types/component-base.d';
import { LoadingBehavior } from '../types/loading-behavior.d';

export type ButtonShape = "default" | "wide" | "full" | "square" | "circle" ;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ComponentBase & LoadingBehavior & {
    isOutline?: boolean;
    isLink?: boolean;
    shape?: ButtonShape;
}

