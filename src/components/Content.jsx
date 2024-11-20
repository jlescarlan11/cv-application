import Header from "./Header";
import "./styles/Content.css";

const Content = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="content">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        context="content"
      ></Header>
      <p>Hello content!</p>
    </div>
  );
};

export default Content;
