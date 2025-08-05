import React from "react";
import { useMediaQuery } from "react-responsive";

const BreakPoint = {
  large: "(min-width : 1151px)",
  medium: "(max-width : 1150px) and (min-width : 751px)",
  small: "(max-width : 750px)",
};

const MediaLarge = ({ children }) => {
  const isLarge = useMediaQuery({ query: BreakPoint.large });

  return <div className="MediaLarge">{isLarge && children}</div>;
};

const MediaMedium = ({ children }) => {
  const isMedium = useMediaQuery({
    query: BreakPoint.medium,
  });

  return <div className="MediaMedium">{isMedium && children}</div>;
};

const MediaSmall = ({ children }) => {
  const isSmall = useMediaQuery({ query: BreakPoint.small });

  return <div className="MediaSmall">{isSmall && children}</div>;
};

export { BreakPoint, MediaLarge, MediaMedium, MediaSmall };
