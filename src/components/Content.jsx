import Header from "./Header";
import "./styles/Content.css";

const Content = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
  formData,
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
      <div className="resume-content">
        <div>
          <h3>Basic Info</h3>
          <div>
            {formData.basicInfo.map((item) => (
              <div key={item.id}>
                <strong>{item.label}:</strong> {item.value || "(Not Provided)"}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Education Info</h3>
          <div>
            {formData.educationInfo.map((item) => (
              <div key={item.id}>
                <strong>{item.label}:</strong> {item.value || "(Not Provided)"}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Experience Info</h3>
          <div>
            {formData.experienceInfo.map((item) => (
              <div key={item.id}>
                <strong>{item.label}:</strong> {item.value || "(Not Provided)"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
