import illustration from "../../assets/images/illustration.svg";
import logo from "../../assets/images/logo.svg";
import { FiLogIn } from "react-icons/fi";
import Button from "../../components/UI/Button";

import { Formik, Form } from "formik";
import { Container, Aside, Main, MainContent } from "./styles";
import { useCallback } from "react";
import Input from "../../components/UI/Input";
import { createRoomSchema } from "../../utils/FormSchema";
import { Link, useHistory } from "react-router-dom";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();

  const handleCreateRoom = useCallback(
    async ({ roomName }) => {
      if (roomName.trim() === "") {
        return;
      }

      const roomRef = database.ref("rooms");

      const firebaseRoom = await roomRef.push({
        title: roomName,
        authorId: user?.id,
      });

      history.push(`/rooms/${firebaseRoom.key}`);
    },
    [user, history]
  );

  return (
    <Container>
      <Aside>
        <img
          src={illustration}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>
      <Main>
        <MainContent>
          <img src={logo} alt="LetMeAsk icon" />
          <h2>Criar uma nova sala</h2>
          <Formik
            initialValues={{
              roomName: "",
            }}
            onSubmit={handleCreateRoom}
            validationSchema={createRoomSchema}
          >
            {() => (
              <Form>
                <Input
                  type="text"
                  id="roomName"
                  name="roomName"
                  placeholder="Digite o código da sala"
                />
                <Button
                  fontColor="var(--white)"
                  backgroundColor="var(--purple)"
                  type="submit"
                >
                  <FiLogIn />
                  Criar sala
                </Button>
              </Form>
            )}
          </Formik>
          <p>Quer entrar em uma sala existente?</p>{" "}
          <Link to="/">clique aqui</Link>
        </MainContent>
      </Main>
    </Container>
  );
}

export default NewRoom;
