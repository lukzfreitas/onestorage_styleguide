import Input from "./Input";

interface ValueInput {
  key: string;
  label: string;
  type: string;
  value: string;
  pattern: string;
}

interface RowFormProps {
  col1: ValueInput;
  onChangeCol1?: Function;
  col2?: ValueInput;
  onChangeCol2?: Function;
}

const RowForm = (props: RowFormProps) => {
  return (
    <div className="row">
      <div className="col-sm">
        <Input
          key={props.col1.key}
          label={props.col1.label}
          type={props.col1.type}
          value={props.col1.value}
          pattern={props.col1.pattern}
          onChange={(value: any) => props.onChangeCol1(value)}
        />
      </div>
      <div className="col-sm">
        {props.col2 ? (
          <Input
            key={props.col2.key}
            label={props.col2.label}
            type={props.col2.type}
            value={props.col2.value}
            pattern={props.col2.pattern}
            onChange={(value: any) => props.onChangeCol2(value)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default RowForm;
