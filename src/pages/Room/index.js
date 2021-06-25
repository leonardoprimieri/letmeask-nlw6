import logoImg from "../../assets/images/logo.svg";
import TextArea from "../../components/UI/TextArea";
import Button from "../../components/UI/Button";
import RoomCode from "../../components/UI/RoomCode";

import { ReactComponent as Like } from "../../assets/images/like.svg";

import {
  ErrorNotification,
  SuccessNotification,
} from "../../utils/ToastNotifications";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  HeaderContent,
  Main,
  UserInfo,
  RoomTitle,
  FormFooter,
  QuestionList,
  LikeButton,
} from "./styles";
import { Form, Formik } from "formik";
import { Link, useParams } from "react-router-dom";
import { database } from "../../services/firebase";
import { newQuestionSchema } from "../../utils/FormSchema";
import { useRoom } from "../../hooks/useRoom";
import { FiPower } from "react-icons/fi";
import Question from "../../components/UI/Question";

function Room() {
  const { id } = useParams();
  const { user, signOut } = useAuth();
  const { title, questions } = useRoom(id);

  const handleLikeQuestion = async (questionId, likeId) => {
    if (likeId) {
      await database
        .ref(`rooms/${id}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${id}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  };

  const handleSendQuestion = async (values, { resetForm }) => {
    if (values.newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      ErrorNotification(
        "Ops",
        "Você precisa estar logado para fazer uma pergunta."
      );
    }

    const question = {
      content: values.newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${id}/questions`).push(question);
    SuccessNotification(
      "Obaa!",
      "Sua pergunta foi enviada e será respondida em breve!"
    );

    resetForm({});
  };

  return (
    <Container>
      <header>
        <HeaderContent>
          <Link to="/">
            <img src={logoImg} alt="LetMeAsk" />
          </Link>
          <RoomCode code={id} />

          {user && (
            <button onClick={signOut}>
              <FiPower size={24} color="var(--purple)" />
            </button>
          )}
        </HeaderContent>
      </header>

      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          <span>
            {questions.length > 0 && questions.length} pergunta
            {questions.length === 1 ? "" : "s"}
          </span>
        </RoomTitle>

        <Formik
          initialValues={{
            newQuestion: "",
          }}
          onSubmit={handleSendQuestion}
          validationSchema={newQuestionSchema}
        >
          {() => (
            <Form>
              <TextArea
                placeholder="O que você quer perguntar?"
                name="newQuestion"
                id="newQuestion"
              />

              <FormFooter>
                {!user ? (
                  <span>
                    Para enviar uma pergunta, <button>faça seu login.</button>
                  </span>
                ) : (
                  <UserInfo>
                    <img src={user.avatar} alt={user.name} />
                    <span>{user.name}</span>
                  </UserInfo>
                )}
                <Button
                  type="submit"
                  backgroundColor="var(--purple)"
                  fontColor="var(--white)"
                  disabled={!user}
                >
                  Enviar pergunta
                </Button>
              </FormFooter>
            </Form>
          )}
        </Formik>
        <QuestionList>
          {questions.map((question, idx) => (
            <Question
              key={idx}
              author={question.author}
              content={question.content}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {!question.isAnswered && (
                <LikeButton
                  liked={question.likeId ? true : false}
                  onClick={() =>
                    handleLikeQuestion(question.id, question.likeId)
                  }
                >
                  {question.likeCount > 0 && <span>{question.likeCount}</span>}
                  <Like stroke="var(--gray-400)" />
                </LikeButton>
              )}
            </Question>
          ))}
        </QuestionList>
      </Main>
    </Container>
  );
}

export default Room;
