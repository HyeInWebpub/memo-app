import React from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

const BreakPoint = {
  large: "(min-width : 1151px)",
  medium: "(max-width : 1150px) and (min-width : 751px)",
  small: "(max-width : 750px)",
};

const Responsive = ({ children }) => {
  const isLarge = useMediaQuery({ query: BreakPoint.large });
  const isMedium = useMediaQuery({ query: BreakPoint.medium });
  const isSmall = useMediaQuery({ query: BreakPoint.small });

  // 바로 아래 자식에게만 클래스 추가
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // child는 바로 아래 자식
      // child가 React 컴포넌트나 JSX 태그인지를 확인

      return React.cloneElement(child, {
        className: classNames(child.props.className, {
          MediaLarge: isLarge, // 붙일 클래스명: 조건
          MediaMedium: isMedium,
          MediaSmall: isSmall,
        }),
      });
    } else {
      return child;
    }
  });
};

export { BreakPoint, Responsive };
