interface TextAreaProps {
  label: string;
  value?: any;
}

const TextArea = ({ value = "", ...props }: TextAreaProps) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <textarea className="form-control" rows={3}>
        {value}
      </textarea>
    </div>
  );
};

export default TextArea;
