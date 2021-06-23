import { Container } from "./styles";

function Button({ children, fontColor, backgroundColor, ...props }) {
  return (
    <Container
      {...props}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </Container>
  );
}

export default Button;
