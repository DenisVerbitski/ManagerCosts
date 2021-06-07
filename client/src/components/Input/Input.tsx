import styles from "../Input/Input.less";

const Input = (props: any) => {
  return (
    <input
      className={styles.authInput}
      onChange={(event) => props.setValue(event.target.value)}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
    />
  );
};

export default Input;
