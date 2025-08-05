export default function MemoItem({
  children,
  onClickItem,
  isSelected,
  onClickDelete,
}) {
  return (
    <div className={"MemoItem" + (isSelected ? " selected" : "")}>
      <div className="title">
        <div className="bullet">
          <span className="blind">bullet</span>
        </div>

        <div className="text" onClick={onClickItem}>
          {children}
        </div>
      </div>

      <button className="btn_delete" type="button" onClick={onClickDelete}>
        x
      </button>
    </div>
  );
}
