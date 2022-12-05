import { Checkbox } from "@chakra-ui/react";
// import { FiEye, FiEyeOff } from "react-icons/fi";

const Section = ({ isVisible, setVisible }) => {
  let istrue = true;
  const handleVisibility = (key) => {
    let temp = isVisible;
    temp[key] = temp[key] ? false : true;
    setVisible(temp);
  };
  return (
    <div className="d-flex flex-col">
      Sections Visibility
      {isVisible &&
        Object.keys(isVisible).map((key, index) => {
          return (
            <Checkbox
              className="pl-3 text-capitalize"
              key={index}
              colorScheme={"cyan"}
              defaultChecked={isVisible[key]}
              onChange={(e) => {
                handleVisibility(key);
              }}
            >
              {key}
            </Checkbox>
          );
        })}
    </div>
  );
};

export default Section;
