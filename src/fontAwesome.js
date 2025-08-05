import { library } from "@fortawesome/fontawesome-svg-core";

// solid 아이콘
import {
  faPenToSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// regular 아이콘
import {
  faHeart as faHeartRegular,
  faFaceMeh as faFaceMehRegular,
  faPenToSquare as faPenToSquareRegular,
  faSquareMinus as faSquareMinusRegular,
} from "@fortawesome/free-regular-svg-icons";

// brands 아이콘
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

// 라이브러리에 등록
library.add(
  faPenToSquare,
  faChevronLeft,
  faChevronRight,

  faHeartRegular,
  faFaceMehRegular,
  faPenToSquareRegular,
  faSquareMinusRegular,

  faGithub,
  faFacebook,
);

/* 사용예시
    // 상단연결
    import "../../fontAwesome";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    // solid (기본)
    <FontAwesomeIcon icon="face-meh" />

    // regular
    <FontAwesomeIcon icon={['far', 'face-meh']} />
    <FontAwesomeIcon icon={['far', 'heart']} />

    // brands
    <FontAwesomeIcon icon={['fab', 'github']} />
*/
