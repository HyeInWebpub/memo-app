function MemoSideBarFooter({ onClick }) {
  return (
    <div className="sideBarFooter">
      <button className="btn_add" type="button" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default MemoSideBarFooter;
