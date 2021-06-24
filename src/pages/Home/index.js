import illustration from "../../assets/images/illustration.svg";
import logo from "../../assets/images/logo.svg";
import googleIcon from "../../assets/images/google-icon.svg";
import { FiLogIn } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Button from "../../components/UI/Button";

import { Formik, Form } from "formik";
import { Container, Aside, Main, MainContent, Separator } from "./styles";
import { joinRoomSchema } from "../../utils/FormSchema";
import { useHistory } from "react-router-dom";

import Input from "../../components/UI/Input";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

import { ErrorNotification } from "../../utils/ToastNotifications";

function Home() {
  const history = useHistory();

  const { user, signInWithGoogle, signInGitHub } = useAuth();

  const handleCreateRoomWithGoogle = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  };

  const handleCreateRoomWithGithub = async () => {
    if (!user) {
      await signInGitHub();
    }
    history.push("/rooms/new");
  };

  const handleJoinRoom = async ({ roomCode }) => {
    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      ErrorNotification("Ops!", "Room dos not exists");
      return;
    }

    if (roomRef.val().endedAt) {
      ErrorNotification("Nooo", "Essa sala já fechou :(");
      return;
    }

    history.push(`/rooms/${roomCode}`);
  };

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

          <Button
            onClick={handleCreateRoomWithGoogle}
            fontColor="var(--white)"
            backgroundColor="var(--red)"
          >
            <img src={googleIcon} alt="Google" />
            Crie sua sala com o Google
          </Button>
          <Button
            onClick={handleCreateRoomWithGithub}
            fontColor="var(--white)"
            backgroundColor="var(--github)"
          >
            <FaGithub size="28" />
            Crie sua sala com o Github
          </Button>
          <Separator>ou entre em uma sala</Separator>
          <Formik
            initialValues={{
              roomCode: "",
            }}
            onSubmit={handleJoinRoom}
            validationSchema={joinRoomSchema}
          >
            {() => (
              <Form>
                <Input
                  type="text"
                  id="roomCode"
                  name="roomCode"
                  placeholder="Digite o código da sala"
                />
                <Button
                  fontColor="var(--white)"
                  backgroundColor="var(--purple)"
                  type="submit"
                >
                  <FiLogIn />
                  Entrar na sala
                </Button>
              </Form>
            )}
          </Formik>
        </MainContent>
      </Main>
    </Container>
  );
}

export default Home;
