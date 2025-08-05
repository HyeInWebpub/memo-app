import "./css/MemoSideBar.css";
import MemoSideBarFooter from "../MemoSideBarFooter";
import MemoSideBarHeader from "../MemoSideBarHeader";
import MemoSideBarList from "../MemoSideBarList";

import "../../fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MemoSideBar({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  addMemo,
  bottomRef,
  deleteMemo,
  isVisible,
  setIsVisible,
}) {
  return (
    <div className={`MemoSideBar ${isVisible ? "show" : "hide"}`}>
      <div className="btnBox">
        <button
          title="사이드바 닫기"
          className="btn_hideSideBar"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <FontAwesomeIcon
            icon="chevron-left"
            className="icon_hide"
          ></FontAwesomeIcon>
        </button>
      </div>

      <div className="innerBox">
        <MemoSideBarHeader></MemoSideBarHeader>
        <MemoSideBarList
          memos={memos}
          setSelectedMemoIndex={setSelectedMemoIndex}
          selectedMemoIndex={selectedMemoIndex}
          bottomRef={bottomRef}
          deleteMemo={deleteMemo}
        ></MemoSideBarList>
        <MemoSideBarFooter onClick={addMemo}></MemoSideBarFooter>
      </div>
    </div>
  );
}

export default MemoSideBar;
