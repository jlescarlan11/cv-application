import { useState } from "react";
import "./styles/BasicInfo.css";

const initialInfo = [
  {
    id: 0,
    label: "First Name",
    value: "",
    placeholder: "Lester",
    inputType: "input",
  },
  {
    id: 1,
    label: "Last Name",
    value: "",
    placeholder: "Escarlan",
    inputType: "input",
  },
  {
    id: 2,
    label: "Professional title",
    value: "",
    placeholder: "Web Developer",
    inputType: "input",
  },
  {
    id: 3,
    label: "Give a summary of yourself",
    value: "",
    placeholder: "Pogi",
    inputType: "textarea",
  },
];

const BasicInfo = () => {
  const [infos, setInfos] = useState(initialInfo);

  function handleInfoChange(id, newValue) {
    setInfos(
      infos.map((info) =>
        info.id === id ? { ...info, value: newValue } : info
      )
    );
  }

  return (
    <>
      <h2>Basic Info</h2>
      <div>
        {infos.map((info) => (
          <div key={info.id}>
            <label>
              {info.label}

              <info.inputType
                type="text"
                value={info.value}
                placeholder={info.placeholder}
                onChange={(e) => handleInfoChange(info.id, e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(infos, null, 2)}</pre> {/* For debugging */}
    </>
  );
};

export default BasicInfo;
