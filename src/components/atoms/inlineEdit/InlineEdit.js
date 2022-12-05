import "./inlineEdit.css";
import { useState } from "react";
const InlineEdit = ({
  value,
  setValue,
  className,
  index = 0,
  type = "text",
  style = {},
  isPreview,
  maxLength,
}) => {
  const [editingValue, setEditingValue] = useState(value);

  const onChange = (event) => {
    //console.log("index > " + index);
    //console.log("localValue > " + event.target.value);
    setEditingValue(event.target.value);
    setValue(index, editingValue);
    //console.log("Value > " + value);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };
  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setValue(index, value);
    } else {
      setValue(index, event.target.value.trim());
      setEditingValue(event.target.value.trim());
    }
    // setIsEditing(false);
  };
  // //console.log("value :- " + value);
  // //console.log("editingValue :- " + editingValue);

  if (isPreview) {
    return (
      <input
        type={type}
        aria-label="Field name"
        value={editingValue}
        style={style}
        className={className + " preview"}
        size={editingValue.length}
        readOnly={true}
        // maxLength={maxLength ? maxLength : editingValue.length + 1}
      />
    );
  } else {
    return (
      <input
        type={type}
        aria-label="Field name"
        value={editingValue}
        style={style}
        onChange={(e) => onChange(e)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        className={className}
        size={value.length + 1}

        // maxLength={maxLength ? maxLength : editingValue.length + 1}
      />
    );
  }
};

export default InlineEdit;
