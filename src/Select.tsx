interface SelectOption {
  value: any;
  label: string;
  selected: boolean;
}

export interface SelectProps {
  label: string;
  options: SelectOption[];
}

const Select = (props: SelectProps) => {
  return (
    <section className="form-group">
      <label>{props.label}</label>
      <select className="custom-select" id="inlineFormCustomSelectPref">
        {props.options.map((option, index) =>
          option.selected ? (
            <option key={index} selected>
              {option.label}
            </option>
          ) : (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          )
        )}
      </select>
    </section>
  );
};

export default Select;
