import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BreakPoint } from "./MediaQuery";
import "./fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./base/css/reset.css";
import "./base/css/common.css";
import MemoSideBar from "./components/MemoSideBar";
import MemoContainer from "./components/MemoContainer";

export default function App() {
  // 메모 디폴트값
  const [memos, setMemos] = useState([
    {
      title: "React와 SCSS를 사용",
      content: "이 메모장은 React와 SCSS로 제작했습니다.",
      createdAt: 1748518475645, // 생성시간 값. 브라우저 콘솔에서 new Date().getTime();을 입력하여 가져왔음.
      updatedAt: 1748518527357, // 수정한 시간 값
    },
    {
      title: "반응형 메모장 퍼블리싱입니다",
      content:
        "SCSS 미디어쿼리를 사용한 반응형으로 간단하게 퍼블리싱 해보았습니다.\n\n- Break Point: 가로기준 해상도 750px\n- display:flex를 활용하여 여러 해상도에 대응합니다.\n- 리스트에 마우스를 올리면 삭제버튼이 생깁니다.\n- 제목이 길어지면 리스트에 말줄임표가 생깁니다.",
      createdAt: 1748518475645,
      updatedAt: 1748518527357,
    },
    {
      title: "메모를 계속 추가해보세요",
      content:
        "- 메모를 계속 추가하면 리스트에 스크롤이 생깁니다.\n- 새로 추가한 메모가 자동으로 선택됩니다.\n- 스크롤 위치도 아래로 이동합니다.",
      createdAt: 1748518475645,
      updatedAt: 1748518527357,
    },
    {
      title: "모두 삭제해보세요",
      content:
        "- 메모를 삭제할 때 확인 알림창이 뜹니다.\n- 모든 메모를 삭제하면 빈 리스트 대신 안내문구가 표출됩니다.",
      createdAt: 1748518475645,
      updatedAt: 1748518527357,
    },
    {
      title: "사이드바 닫기 제어",
      content:
        "- 사이드바 상단의 닫기버튼을 누르면 사이드바가 닫힙니다.\n- 모바일에서 메모리스트를 클릭하면 해당 메모를 보여주고 사이드바는 닫힙니다.\n- 모바일에서 사이드바 외부를 클릭하면 사이드바가 닫힙니다.\n- 큰 해상도에서는 외부를 클릭해도 닫히지 않습니다.",
      createdAt: 1748518475645,
      updatedAt: 1748518527357,
    },
  ]);

  // 왼쪽 리스트에서 클릭한 메모의 인덱스
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  /* === 사용자가 적은 내용 실시간으로 화면에 반영하기 */
  const setMemo = (newMemo) => {
    /* 
    // 참고: 이 방법은 불변성이 훼손되어 라이프사이클이 망가질 수 있음 
    
    memos[selectedMemoIndex] = newMemo;
    setMemos([...memos]);

    // 세터함수는 기존과 같은 값이면 리렌더를 안함
    // memos는 배열이라서 주소값(reference)을 가지고 있는거라
    // memos[selectedMemoIndex] = newMemo;를 통해 내부데이터가 변경되었더라도
    // setMemos(memos)로 입력하면 주소값은 변함이 없는 것으로 인식해서 화면 리렌더를 안함
    // 그러므로 ...을 이용해서 새롭게 대입해야함 */

    const newMemos = [...memos]; //불변성. 기존데이터 카피한 새 배열
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  };

  /* === 메모 추가하기 === */
  const bottomRef = useRef(null); //자동 스크롤 위치
  const addMemo = () => {
    const now = new Date().getTime();

    setMemos([
      ...memos,
      {
        title: "",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ]);

    setSelectedMemoIndex(memos.length);

    // 다음 렌더링 후 자동 스크롤
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 0);
  };

  /* === 메모 삭제 컨펌창 === */
  const confirmDelete = (index) => {
    const yesDelete = window.confirm(
      "정말로 삭제할까요?\n한 번 지우면 되돌릴 수 없어요!",
    );
    if (yesDelete) {
      deleteMemo(index);
    }
  };

  /* === 메모 삭제 === */
  const deleteMemo = (index) => {
    const newMemos = [...memos]; //불변성
    newMemos.splice(index, 1); //index부터 1개까지 삭제
    setMemos([...newMemos]);

    if (index === 0) {
      setSelectedMemoIndex(0);
    } else if (index === selectedMemoIndex) {
      setSelectedMemoIndex(index - 1);
    }
  };

  /* === 사이드바 열고닫기 === */
  // 사이드바를 보여줄것인가
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  // 미디움 해상도인가
  const isMedium = useMediaQuery({ query: BreakPoint.medium });
  // 스몰 해상도인가
  const isSmall = useMediaQuery({ query: BreakPoint.small });
  // MemoContainer, MemoItem 클릭시
  const containerOnClick = () => {
    if (isSmall) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <div className="App">
      <MemoSideBar
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        addMemo={addMemo}
        bottomRef={bottomRef}
        deleteMemo={confirmDelete}
        isVisible={isSidebarVisible}
        setIsVisible={setIsSidebarVisible}
        onClickItem={containerOnClick}
      ></MemoSideBar>

      <div className={`btnBar ${isSidebarVisible && !isSmall ? "hide" : ""}`}>
        <button
          className="btn_showSideBar"
          onClick={() => {
            setIsSidebarVisible(true);
          }}
        >
          <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon>
        </button>
      </div>

      <MemoContainer
        memo={memos[selectedMemoIndex]}
        setMemo={setMemo}
        containerOnClick={containerOnClick}
      ></MemoContainer>
    </div>
  );
}
