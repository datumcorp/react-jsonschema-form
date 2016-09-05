import React, { PropTypes } from "react";


function CheckboxWidget({
  schema,
  id,
  value,
  required,
  disabled,
  onChange,
  label,
}) {
  return (
    <div className={`checkbox ${disabled ? "disabled" : ""}`}>
      <label className="toggle">
        <input type="checkbox"
          id={id}
          checked={typeof value === "undefined" ? false : value}
          required={required}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)} />
         <div className="track">
     <div className="handle"></div>
   </div> 
        <strong>{label}</strong>
      </label>
    </div>
  );
}
if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    required: PropTypes.bool,
  };
}

export default CheckboxWidget;
