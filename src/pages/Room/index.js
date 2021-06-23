import logoImg from "../../assets/images/logo.svg";
import TextArea from "../../components/UI/TextArea";
import Button from "../../components/UI/Button";
import RoomCode from "../../components/UI/RoomCode";

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
} from "./styles";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { database } from "../../services/firebase";
import { newQuestionSchema } from "../../utils/FormSchema";
import { useEffect, useState } from "react";
import { useRoom } from "../../hooks/useRoom";

function Room() {
  const { id } = useParams();
  const { user } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState([]);

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

  useEffect(() => {
    const roomRef = database.ref(`rooms/${id}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        }
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [id]);

  return (
    <Container>
      <header>
        <HeaderContent>
          <img src={logoImg} alt="LetMeAsk" />
          <RoomCode code={id} />
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
      </Main>
    </Container>
  );
}

export default Room;
