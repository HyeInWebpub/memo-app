import "./css/MemoContainer.css";
import "../../fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MemoContainer({ memo, setMemo, containerOnClick }) {
  if (memo === undefined) {
    return (
      <div
        className="MemoContainer"
        onClick={(e) => {
          e.stopPropagation();
          containerOnClick();
        }}
      >
        <div className="noMemo">
          <FontAwesomeIcon
            icon={["far", "pen-to-square"]}
            className="icon_noMemo"
          />
          <p>아무것도 없어요</p>
          <em>새로운 메모를 추가해주세요</em>
        </div>
      </div>
    );
  }

  return (
    <div
      className="MemoContainer"
      onClick={(e) => {
        e.stopPropagation();
        containerOnClick();
      }}
    >
      <input
        className="memo_title"
        type="text"
        placeholder="제목은 무엇인가요?"
        value={memo.title}
        onChange={(e) => {
          setMemo({
            ...memo,
            title: e.target.value,
            updatedAt: new Date().getTime(),
          });
        }}
      />

      <textarea
        className="memo_content"
        placeholder="내용을 자유롭게 남겨보세요 :)"
        value={memo.content}
        onChange={(e) => {
          setMemo({
            ...memo,
            content: e.target.value,
            updatedAt: new Date().getTime(),
          });
        }}
      ></textarea>
    </div>
  );
}

export default MemoContainer;
