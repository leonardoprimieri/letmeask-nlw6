import { UserInfo } from "../../../pages/Room/styles";
import { Container, QuestionFooter, Buttons } from "./styles";

function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}) {
  return (
    <Container
      isAnswered={isAnswered}
      isHighlighted={isHighlighted && !isAnswered}
    >
      <p>{content}</p>
      <QuestionFooter>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <Buttons>{children}</Buttons>
      </QuestionFooter>
    </Container>
  );
}

export default Question;
