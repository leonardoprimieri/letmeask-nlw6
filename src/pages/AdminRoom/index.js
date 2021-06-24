import logoImg from "../../assets/images/logo.svg";
import close from "../../assets/images/close.svg";
import Button from "../../components/UI/Button";
import RoomCode from "../../components/UI/RoomCode";
import ReactModal from "react-modal";

import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  HeaderContent,
  Main,
  RoomTitle,
  QuestionList,
  HeaderActions,
  ModalContent,
  ModalButtons,
} from "./styles";
import { Link, useHistory, useParams } from "react-router-dom";
import { useRoom } from "../../hooks/useRoom";
import { FiPower } from "react-icons/fi";
import Question from "../../components/UI/Question";

import deleteImg from "../../assets/images/delete.svg";
import { database } from "../../services/firebase";
import { useState } from "react";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    flexDirection: "column",
  },
};

function AdminRoom() {
  const { id } = useParams();
  const { user, signOut } = useAuth();
  const { title, questions } = useRoom(id);
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleEndRoom = async (questionId) => {
    await database.ref(`rooms/${id}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  };

  const handleDeleteQuestion = async (questionId) => {
    if (window.confirm("Tem certeza que vc deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${id}/questions/${questionId}`).remove();
    }
  };

  return (
    <Container>
      <header>
        <HeaderContent>
          <Link to="/">
            <img src={logoImg} alt="LetMeAsk" />
          </Link>
          <HeaderActions>
            <RoomCode code={id} />
            {user && (
              <>
                <Button
                  backgroundColor="var(--purple)"
                  fontColor="var(--white)"
                  isOutlined
                  onClick={() => setIsOpen(true)}
                >
                  Encerrar sala
                </Button>
                <button className="signOut" onClick={signOut}>
                  <FiPower size={24} color="var(--purple)" />
                </button>
              </>
            )}
          </HeaderActions>
        </HeaderContent>
      </header>
      <ReactModal style={customStyles} isOpen={modalIsOpen}>
        <ModalContent>
          <img src={close} alt="fechar modal" />
          <h2>Encerrar sala</h2>
          <p>Tem certeza que você deseja encerrar esta sala?</p>
          <ModalButtons>
            <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
            <Button
              onClick={handleEndRoom}
              backgroundColor="var(--danger)"
              fontColor="var(--white)"
            >
              Sim, encerrar
            </Button>
          </ModalButtons>
        </ModalContent>
      </ReactModal>
      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          <span>
            {questions.length > 0 && questions.length} pergunta
            {questions.length === 1 ? "" : "s"}
          </span>
        </RoomTitle>

        <QuestionList>
          {questions.map((question, idx) => (
            <Question
              key={idx}
              author={question.author}
              content={question.content}
            >
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover Pergunta" />
              </button>
            </Question>
          ))}
        </QuestionList>
      </Main>
    </Container>
  );
}

export default AdminRoom;
