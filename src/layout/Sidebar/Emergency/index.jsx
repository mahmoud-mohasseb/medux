// styled components
import { ButtonWrapper, Container, Label } from "./style";

// components
import ShapeButton from "../../../UI/ShapeButton";
import { Badge } from "../../../UI/Badge/style";
// i18n
import { useTranslation } from "react-i18next";

const Emergency = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ButtonWrapper>
        <ShapeButton
          as="a"
          icon="microphone"
          label="Emergency help"
          shape="square"
          href="tel:911"
        />
        <Badge className="indicator" color="red" />
      </ButtonWrapper>
      <Label>{`${t("Emergency")}`}</Label>
    </Container>
  );
};

export default Emergency;
