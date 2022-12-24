// styling
import styled from "styled-components/macro";
import { light, colors } from "../../styles/vars";

// styled components
import { Button } from "./style";
// components
import RangeSlider from "../../UI/RangeSlider";

// hooks
import { useState, useEffect } from "react";
import { useInterfaceContext } from "../../contexts/interfaceContext";
import { useTheme } from "styled-components";
import { useTheme as MuiUseTheme } from "@mui/material/styles";

// utils
import fscreen from "fscreen";

// language
import { useTranslation } from "react-i18next";

const ScaleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 220px;

  .button {
    flex-grow: 1;
  }
`;

export const LayoutControl = () => {
  const { isLayoutEditable, toggleLayoutEditable } = useInterfaceContext();
  const { t } = useTranslation();
  return (
    <div>
      {isLayoutEditable ? (
        <Button onClick={() => toggleLayoutEditable()}>
          <i className="icon icon-save" />
          {`${t("Save")}`}
          {/* Save */}
        </Button>
      ) : (
        <Button onClick={() => toggleLayoutEditable()}>
          <i className="icon icon-edit"></i>
          {`${t("Edit")}`}
          {/* Edit */}
        </Button>
      )}
    </div>
  );
};

export const ThemeControl = () => {
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useInterfaceContext();
  return (
    <Button onClick={() => toggleDarkMode()}>
      <i className={`icon icon-${isDarkMode ? "sun" : "moon"}`} />
      <span>
        {isDarkMode ? `${t("Light")}` : `${t("Dark")}`} {`${t("theme")}`}
      </span>
    </Button>
  );
};

export const ContrastControl = () => {
  const { isContrastMode, toggleContrastMode } = useInterfaceContext();
  const { t } = useTranslation();
  return (
    <Button onClick={() => toggleContrastMode()}>
      <i className="icon icon-glasses"></i>
      <span>
        {isContrastMode ? `${t("Decrease")}` : `${t("Increase")}`}{" "}
        {`${t("contrast")}`}
      </span>
    </Button>
  );
};

export const ScaleControl = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const dir = MuiUseTheme().direction;
  const { fontScale, changeFontScale } = useInterfaceContext();

  return (
    <ScaleWrapper>
      <Button as="span" className="button disabled">
        <i className="icon icon-font"></i>
        {`${t("Font size")}`}
        {/* Font size */}
      </Button>
      <RangeSlider
        value={fontScale}
        min={1}
        max={1.2}
        step={0.05}
        label={`${fontScale}x`}
        onChange={(e) => changeFontScale(e.target.value)}
        style={{
          width: 100,
          color: "transparent",
          borderRadius: 2,
          padding: "6px 0 !important",
          "& .MuiSlider-thumb": {
            height: 16,
            width: 16,
            backgroundColor: light.text,
            boxShadow: "none !important",
            marginRight: dir === "ltr" ? "0" : "-9px",
          },
          "& .MuiSlider-track": {
            backgroundColor: light.text,
            borderRadius: 2,
            border: "none",
          },
          "& .MuiSlider-rail": {
            backgroundColor: theme === "light" ? colors.gray : colors.dark,
          },
        }}
      />
    </ScaleWrapper>
  );
};

export const FullscreenControl = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { t } = useTranslation();
  const handleFullscreen = () => {
    if (isFullscreen) {
      fscreen.exitFullscreen();
    } else {
      fscreen.requestFullscreen(document.documentElement);
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    window.addEventListener("fullscreenchange", () => {
      setIsFullscreen(fscreen.fullscreenElement !== null);
    });
  }, []);

  return (
    <Button onClick={handleFullscreen}>
      <i className="icon icon-expand-regular"></i>
      <span>{isFullscreen ? `${t("Normal")}` : `${t("Fullscreen")}`}</span>
    </Button>
  );
};

export const DirectionControl = () => {
  const { direction, toggleDirection } = useInterfaceContext();
  //changeLanguage
  return (
    <Button onClick={toggleDirection}>
      <i className="icon icon-book-open" />
      <span>{direction === "ltr" ? "RTL" : "LTR"}</span>
      {/* same as will will add arabic language 🇪🇬 */}
    </Button>
  );
};
