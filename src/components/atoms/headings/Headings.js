import { freeColors,paidColors } from "./HeadingsData";
const Headings = ({ setHeadingColor }) => {
  return (
    <>
      Color Options:
      <div className="d-flex py-2">
        {freeColors.map((color,index) => {
          return (
            <div
              className=" p-3  mx-2 rounded"
              style={{ backgroundColor: color }}
              onClick={() => setHeadingColor(color)}
              key={index}
            ></div>
          );
        })}
      </div>
      <div className="d-flex py-2">
        {true && paidColors.map((color,index ) => {
          return (
            <div
              className=" p-3  mx-2 rounded"
              style={{ backgroundColor: color }}
              onClick={() => setHeadingColor(color)}
              key={index}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Headings;
