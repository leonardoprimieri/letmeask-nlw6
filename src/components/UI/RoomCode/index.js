import { Container } from "./styles";
import copyImg from "../../../assets/images/copy.svg";

function RoomCode({ code }) {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Code" />
      </div>
      <span>Sala {code}</span>
    </Container>
  );
}

export default RoomCode;
