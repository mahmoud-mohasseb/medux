// styled components
import { ListItem, Main, Header, Button } from "./style";

// components
import IconLink from "../../UI/IconLink";
import MenuDots from "../../UI/MenuDots";
import { motion, AnimatePresence } from "framer-motion";

// utils
import moment from "moment";
import { fadePresence } from "../../constants/framer";

const TestItem = ({ data }) => {
  const { doctor, title, date } = data;

  return (
    <AnimatePresence>
      <ListItem as={motion.div} {...fadePresence}>
        <Header>
          <IconLink title={`Dr. ${doctor}`} />
          <MenuDots />
        </Header>
        <Main>
          <div className="info">
            <span className="title">{title}</span>
            <span className="timestamp">{moment(date).format("hh:mm A")}</span>
          </div>
          <Button>View result</Button>
        </Main>
      </ListItem>
    </AnimatePresence>
  );
};

export default TestItem;
