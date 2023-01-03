interface TitleProps {
  label: string;
}

const Title = (props: TitleProps) => {
  return <div className="h2 text-muted">{props.label}</div>;
};

export default Title;
