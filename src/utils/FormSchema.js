import * as Yup from "yup";
const requiredMessage = "Por favor, preencha esse campo";

export const joinRoomSchema = Yup.object().shape({
  roomCode: Yup.string().required(requiredMessage),
});

export const createRoomSchema = Yup.object().shape({
  roomName: Yup.string().required(requiredMessage),
});

export const newQuestionSchema = Yup.object().shape({
  newQuestion: Yup.string().required(requiredMessage),
});
