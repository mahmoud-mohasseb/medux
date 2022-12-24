// styled components
import { ListItem, Wrapper, Footer } from "../style";

// components
import Pill from "../../../UI/Pill";
import ShapeButton from "../../../UI/ShapeButton";
import Truncated from "../../../components/Truncated";
import Timestamp from "../../../UI/Timestamp";

// utils
import { motion, AnimatePresence } from "framer-motion";
import { fadePresence } from "../../../constants/framer";

const RecentQuestionsItem = ({ date, text }) => {
  return (
    <AnimatePresence>
      <ListItem as={motion.div} {...fadePresence} initial={{ opacity: 0 }}>
        <div>
          <Timestamp date={date} time={true} />
          <Wrapper>
            <Truncated className="h3" lines={2} text={text} />
            <ShapeButton shape="round" icon="comment-text" label="Messages" />
          </Wrapper>
        </div>
        <Footer>
          <Pill text="Read more" />
          <Pill text="Reply" />
        </Footer>
      </ListItem>
    </AnimatePresence>
  );
};

export default RecentQuestionsItem;
