import { forwardRef, InputHTMLAttributes, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, title, ...props }, ref) => {
    const id = useId();
    return (
      <>
        {title && <label htmlFor={id}>{title}</label>}

        <input id={id} defaultValue={value} ref={ref} {...props} />
      </>
    );
  }
);

export default Input;
