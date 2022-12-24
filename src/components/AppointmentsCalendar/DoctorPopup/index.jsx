// styled components
import { Container } from "./style";

// components
import ShapeButton from "../../../UI/ShapeButton";
import Btn from "../../../UI/Btn";
import Backdrop from "@mui/material/Backdrop";

const DoctorPopup = ({ name, open, handler, elemsHeight }) => {
  return (
    <Backdrop
      open={open}
      onClick={() => handler(false)}
      sx={{
        backgroundColor: "transparent",
        zIndex: 1000,
      }}
    >
      <Container className={open ? "visible" : ""} top={elemsHeight}>
        <div className="header">
          <div className="user">{name}</div>
          <ShapeButton shape="round" icon="comment-text" label="Message" />
        </div>
        <div className="main">
          <div className="track">
            <span></span>
            <span></span>
          </div>
          <div className="hours">
            {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((hour, index) => (
              <span key={index}>{hour}</span>
            ))}
          </div>
        </div>
        <Btn text="Make an appointment" handler={() => handler(false)} />
      </Container>
    </Backdrop>
  );
};

export default DoctorPopup;
