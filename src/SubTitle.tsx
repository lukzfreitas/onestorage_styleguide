interface TitleProps {
  label: string;
}

const SubTitle = (props: TitleProps) => {
  return <div className="h4 text-muted">{props.label}</div>;
};

export default SubTitle;
