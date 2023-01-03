import { useState } from "react";

interface InputProps {
  key: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange?: Function;
  pattern?: string;
}

const Input = ({
  label = null,
  value = null,
  onChange = () => {},
  placeholder = "",
  type = "text",
  ...props
}: InputProps) => {
  const [text, setText] = useState(value);

  const handleChangeValue = (event: any) => {
    // const value = handleMask(event.target.value);
    setText(value);
    onChange(value);
  };

  const handleMask = (value: string) => {    
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value;
  }

  return (
    <section className="form-group">
      {label ? <label htmlFor={props.key}>{label}</label> : null}
      <input
        pattern={props.pattern}
        type={type}
        className="form-control"
        id={props.key}
        placeholder={placeholder}
        value={text}
        onChange={(e) => handleChangeValue(e)}        
      />
    </section>
  );
};

export default Input;
