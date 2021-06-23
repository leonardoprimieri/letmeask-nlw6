import { ErrorMessage, useField } from "formik";
import { Container, InputContainer } from "./styles";

const TextArea = ({ label, type, placeholder, ...props }) => {
  const [inputProps, meta] = useField(props);

  const id = props.id || props.name;

  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <InputContainer>
        <textarea
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

export default TextArea;
