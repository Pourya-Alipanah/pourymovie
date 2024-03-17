import React from "react";
import { ButtonProps, ButtonShape } from "./button.d";
import classNames from "classnames";
import { Size } from "../types/size.d";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  default: "",
  wide: "btn-wide",
  full: "btn-full",
  square: "btn-square",
  circle: "btn-circle",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "درحال ارسال درخواست...",
  type = "button",
  isLink = false,
  className,
  children,
  ...restProps
}) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [sizeClasses[size]]: size },
    { [shapeClasses[shape]]: shape }
  );

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes}
      {...restProps}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};
