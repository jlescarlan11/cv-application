import { useState } from "react";
import "./styles/EducationInfo.css";

const EducationInfo = ({ data, onUpdate }) => {
  return (
    <div>
      <h3>Education</h3>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <label>
              {item.label}:
              {item.inputType === "textarea" ? (
                <textarea
                  value={item.value}
                  onChange={(e) => onUpdate(item.id, e.target.value)}
                  placeholder={item.placeholder}
                />
              ) : (
                <input
                  value={item.value}
                  onChange={(e) => onUpdate(item.id, e.target.value)}
                  placeholder={item.placeholder}
                  type={item.type}
                />
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationInfo;
