import "./styles/Header.css";

const Header = ({ isSidebarOpen, toggleSidebar, context }) => {
  const renderIcons = () => {
    if (context === "mainContent" && !isSidebarOpen) {
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
        {context === "mainContent" && <p>CV Application Builder</p>}
      </div>
      {context === "mainContent" && (
        <span className="material-symbols-outlined">light_mode</span>
      )}
    </header>
  );
};

export default Header;
