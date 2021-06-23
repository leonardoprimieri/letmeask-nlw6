import { ErrorMessage, useField } from "formik";
import { Container, InputContainer } from "./styles";

const Input = ({ label, type, placeholder, icon: Icon, ...props }) => {
  const [inputProps, meta] = useField(props);

  const id = props.id || props.name;

  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <InputContainer>
        {Icon && <Icon color={"#ccc"} size={24} strokeWidth={2} />}
        <input
          id={id}
          {...inputProps}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </InputContainer>
      <div className="error-message">
        {meta.error && <ErrorMessage name={props.name} />}
      </div>
    </Container>
  );
};

export default Input;
