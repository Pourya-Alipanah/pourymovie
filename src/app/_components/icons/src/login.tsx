import BaseIcon from "../base-icon";
import { SvgIcon as SvgIconProps } from "../icon.d";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeMiterlimit="10" d="M11,22V3c0-1.105,0.896-2,2-2h34c1.104,0,2,0.895,2,2v44c0,1.104-0.896,2-2,2H13c-1.104,0-2-0.896-2-2V28"/><polyline strokeMiterlimit="10" points="22.054,14.11 32.943,25 22.053,35.89 "/><line strokeMiterlimit="10" x1="1" y1="25" x2="32.416" y2="25"/>
    </BaseIcon>
  );
}