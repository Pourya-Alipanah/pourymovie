import React from "react";
import { LoadingProps } from "./loading.types";
import classNames from "classnames";
import { Size } from "../types/size.types";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  className,
  type,
  variant,
  size = "normal",
}) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`loading-${variant}`]: variant },
    { [sizeClasses[size]]: size }
  );
  return <span className={classes} />;
};
