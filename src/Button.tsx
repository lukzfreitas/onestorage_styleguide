interface ButtonProps {
  key: string;
  title: string;
  type: "button" | "submit" | "reset";
  style: "primary" | "link" | "danger";
}

const Button = ({
  type = "button",
  style = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      key={props.key}
      type={type}
      className={
        style === "primary"
          ? "btn btn-primary m-1"
          : style === "link"
          ? "btn btn-link m-1"
          : "btn btn-danger m-1"
      }
    >
      {props.title}
    </button>
  );
};

export default Button;
