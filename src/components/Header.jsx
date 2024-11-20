import "./styles/Header.css";

const Header = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
  context,
}) => {
  const renderIcons = () => {
    if (context === "content" && !isSidebarOpen) {
      return (
        <>
          <span className="material-symbols-outlined" onClick={toggleSidebar}>
            view_sidebar
          </span>
          <span className="material-symbols-outlined">download</span>
        </>
      );
    } else if (context === "sidebar" && isSidebarOpen) {
      return (
        <>
          <div className="sidebar-header">
            <span className="material-symbols-outlined" onClick={toggleSidebar}>
              view_sidebar
            </span>
            <span className="material-symbols-outlined">download</span>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <header>
      <div className="header-left">
        {renderIcons()}
        {context === "content" && <p>CV Application Builder</p>}
      </div>
      {context === "content" && (
        <span className="material-symbols-outlined" onClick={toggleDarkMode}>
          {isDarkMode ? "light_mode" : "dark_mode"}
        </span>
      )}
    </header>
  );
};

export default Header;
