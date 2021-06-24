import { Container } from "./styles";

function Button({
  children,
  fontColor,
  backgroundColor = false,
  isOutlined,
  ...props
}) {
  return (
    <Container
      {...props}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      isOutlined={isOutlined}
    >
      {children}
    </Container>
  );
}

export default Button;
