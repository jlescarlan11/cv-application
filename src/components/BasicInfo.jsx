const BasicInfo = () => {
  return (
    <form className="form form__container form__basic-info">
      <h1 className="form-title">Basic Info</h1>
      <fieldset className="form-fieldset form__basic-info">
        <label className="form-label">
          <span className="form-label__title">First name:</span>
          <input
            type="text"
            name="firstName"
            className="form-input form-input__first-name"
            placeholder="John"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Last name:</span>
          <input
            type="text"
            name="lastName"
            className="form-input form-input__last-name"
            placeholder="Doe"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Professional title:</span>
          <input
            type="text"
            name="occupation"
            className="form-input form-input__occupation"
            placeholder="Business Manager"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">
            Give a summary about yourself
          </span>
          <textarea
            name="selfSummary"
            cols="30"
            rows="10"
            className="form-input form-input__self-summary"
          />
        </label>
      </fieldset>
    </form>
  );
};

export default BasicInfo;
