import { ChangeEvent, InputHTMLAttributes } from "react";
import { Overwrite } from "../../utils/overwrite";
import styles from "./inputcomponent.module.css";


type InputComponentProps = Overwrite<
  InputHTMLAttributes<HTMLInputElement>,
  {
    onChange: (value: string) => void;
    value?: string;
    label?: string
  }
>;


const InputComponent = ({ onChange, label, ...rest }: InputComponentProps) => {

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    let inputValue = event.target.value;
    onChange(inputValue);
  }

  return (
    <label className={styles.inputComponent__wrapper}>
      {label && <span className={styles.inputComponent__label}>{label}</span>}
      <input
        onChange={changeHandler}
        className={styles.inputComponent__input}
        {...rest}
      />
    </label>
  );
};

export default InputComponent;
