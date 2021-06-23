import { useState } from "react";
import { database } from "../services/firebase";

export function useRoom(id) {
  const [title, setTitle] = useState();
  const [questions, setQuestions] = useState([]);
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

    return title;
  });
}
