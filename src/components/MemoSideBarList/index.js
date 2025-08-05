import MemoItem from "../MemoItem";

function MemoSideBarList({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  bottomRef,
  deleteMemo,
}) {
  if (memos.length === 0) {
    return (
      <div className="MemoSideBarList">
        <div className="noMemo">
          <p>새 메모를 작성하려면</p>
          <p>아래의 +버튼을 눌러주세요</p>
        </div>
      </div>
    );
  }

  return (
    <div className="MemoSideBarList">
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClickItem={() => {
            console.log(`memo ${index} clicked`);
            setSelectedMemoIndex(index);
          }}
          isSelected={index === selectedMemoIndex}
          onClickDelete={() => {
            deleteMemo(index);
          }}
        >
          {memo.title === "" ? "제목없음" : memo.title}
        </MemoItem>
      ))}
      <div ref={bottomRef}>
        <span className="blind">bottomRef</span>
      </div>
    </div>
  );
}

export default MemoSideBarList;
