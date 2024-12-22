import Header from "./Header";
import "./styles/Content.css";

const Content = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
  formData,
  contentRef,
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
      <div className="resume-content" ref={contentRef}>
        <div className="basic-info">
          <div>
            <h4>
              {[
                formData.basicInfo.find((item) => item.id === 0),
                formData.basicInfo.find((item) => item.id === 1),
              ]
                .map((item) => item?.value || `[${item?.label}]`)
                .join(" ")}
            </h4>
            <div>
              {formData.basicInfo.find((item) => item.id === 2)?.value ||
                `[${formData.basicInfo.find((item) => item.id === 2)?.label}]`}
            </div>
            <div>
              {formData.basicInfo
                .slice(formData.basicInfo.findIndex((item) => item.id === 3))
                .map((item) => item.value || `[${item.label}]`)
                .join(", ")}
            </div>
          </div>
        </div>
        <div className="education-info">
          <h3>Education</h3>
          <hr />
          <div className="education-info-main-container">
            <div className="education-info-left-container">
              {formData.educationInfo.slice(0, 3).map((item, index) => (
                <div key={index}>{item.value || `[${item.label}]`} </div>
              ))}
            </div>
            <div className="education-info-right-container">
              {formData.educationInfo
                .slice(3)
                .map((item, index) => item.value || `[${item.label}]`)
                .join(" - ")}
            </div>
          </div>
        </div>
        <div>
          <h3>Experience</h3>
          <hr />
          <div className="experience-info-main-container">
            <div className="experience-info-left-container">
              {formData.experienceInfo.slice(0, 4).map((item, index) => (
                <div key={index}>{item.value || `[${item.label}]`}</div>
              ))}
            </div>
            <div className="experience-info-right-container">
              {formData.experienceInfo
                .slice(4)
                .map((item, index) => item.value || `[${item.label}]`)
                .join(" - ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
