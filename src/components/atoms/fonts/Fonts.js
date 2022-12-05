import { Select } from "@chakra-ui/react";
import { free, paid } from "./fontsData";

const Fonts = ({ setFontName, setFontSize }) => {
  return (
    <>
      <br />
      Font Name:
      <Select
        variant="unstyled"
        className="px-3"
        onChange={(e) => {
          setFontName(e.target.value);
        }}
      >
        {free.map((font,index) => {
          return (
            <option value={font.family} style={{ fontFamily: font.family }} key={index}>
              {font.name}
            </option>
          );
        })}
        {true &&
          paid.map((font,index) => {
            return (
              <option
                value={font.family}
                style={{ fontFamily: font.family }}
                key={index}
              >
                {font.name}
              </option>
            );
          })}
      </Select>
      <br />
      Font Size:
      <Select
        variant="unstyled"
        className="px-3"
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
      >
        <option value="small">Small</option>
        <option value="smaller">Smaller</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </Select>
    </>
  );
};

export default Fonts;
