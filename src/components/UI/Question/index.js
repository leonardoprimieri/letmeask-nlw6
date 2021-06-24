import { UserInfo } from "../../../pages/Room/styles";
import { Container, QuestionFooter } from "./styles";

function Question({ content, author, children }) {
  return (
    <Container>
      <p>{content}</p>
      <QuestionFooter>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        {children}
      </QuestionFooter>
    </Container>
  );
}

export default Question;
