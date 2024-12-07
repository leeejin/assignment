import { ComponentProps } from "react";
import { Link } from "react-router-dom";

type ButtonProps =
  | ({ to?: undefined } & ComponentProps<"button">)
  | ({ to: string } & ComponentProps<typeof Link>);

const Button = ({ children, ...props }: ButtonProps) => {
  if (props.to) return <Link {...props}>{children}</Link>;
  else if (typeof props.to === "undefined")
    return <button {...props}>{children}</button>;
};

export default Button;
