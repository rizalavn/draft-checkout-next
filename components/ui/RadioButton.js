import cn from "classnames";
import styles from "./RadioButton.module.scss";

const RadioButton = ({
  className,
  name,
  label,
  value,
  checked,
  onChange = () => null,
  ...rest
}) => {
  const classNames = cn(styles.root, className);

  const handleOnChange = (e) => {
    onChange(e);
  };

  return (
    <div className={classNames} data-checked={checked}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => handleOnChange(e)}
        {...rest}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

export default RadioButton;
