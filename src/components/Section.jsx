const Section = ({ title, data, onUpdate }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
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
                />
              )}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
