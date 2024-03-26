import BaseIcon from "../base-icon";
import { SvgIcon as SvgIconProps } from "../icon.d";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20.25 4.5H6.75C4.26472 4.5 2.25 6.51472 2.25 9V20.25C2.25 22.7353 4.26472 24.75 6.75 24.75H20.25C22.7353 24.75 24.75 22.7353 24.75 20.25V9C24.75 6.51472 22.7353 4.5 20.25 4.5Z"/><path d="M9 2.25V6.75M18 2.25V6.75M2.25 11.25H24.75"/>
    </BaseIcon>
  );
}