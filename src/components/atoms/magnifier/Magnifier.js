import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const zoomOut = (sliderValue, setSliderValue) => {
  return setSliderValue(
    sliderValue > parseInt(0.6) ? parseInt(sliderValue - 0.1) : sliderValue
  );
};
const zoomIn = (sliderValue, setSliderValue) => {
  return setSliderValue(
    sliderValue < parseInt(1.2) ? parseInt(sliderValue + 0.1) : sliderValue
  );
};
const Magnifier = ({ sliderValue, setSliderValue, showButtons, vertical }) => {
  if (vertical) {
    return (
      <Box
        pt={5}
        pb={2}
        className="flex-col "
        zIndex={10}
        position="fixed"
        right={"40"}
        bottom={"15"}
      >
        {showButtons && (
          <MinusIcon
            mt={0}
            mr={3}
            bg="blue.500"
            rounded="full"
            zIndex={10}
            onClick={() => zoomOut(sliderValue, setSliderValue)}
          />
        )}
        <Slider
          aria-label="slider-ex-6"
          min={0.6}
          max={1.4}
          step={0.1}
          zIndex={10}
          orientation={vertical ? "vertical" : "horizontal"}
          h={"fit-content"}
          minH={60}
          onChange={(val) => setSliderValue(val)}
        >
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-5"
            ml="5"
            w="12"
            zIndex={10}
            className="badge"
          >
            {sliderValue}
          </SliderMark>
          <SliderTrack background={"rgba(44,44,44,0.2)"} p={3} rounded={25}>
            <SliderFilledTrack zIndex={11} />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        {showButtons && (
          <AddIcon
            mt={0}
            ml={3}
            rounded="full"
            zIndex={10}
            bg="blue.500"
            onClick={() => zoomIn(sliderValue, setSliderValue)}
          />
        )}
        <br />
        <br />
      </Box>
    );
  }

  return (
    <Box
      pt={5}
      pb={2}
      w={"400px"}
      mx={"30%"}
      className="d-flex flex-row py-auto"
      position="fixed"
      right={"40"}
      bottom={"15"}
      zIndex={10}
    >
      {showButtons && (
        <MinusIcon
          mt={0}
          mr={3}
          bg="blue.500"
          rounded="full"
          zIndex={10}
          onClick={() => zoomOut(sliderValue, setSliderValue)}
        />
      )}
      <Slider
        aria-label="slider-ex-6"
        min={0.6}
        max={1.4}
        step={0.1}
        zIndex={10}
        // background="rgba(244,244,244,0.8)"
        // px={5}
        // rounded={"25"}
        onChange={(val) => setSliderValue(val)}
      >
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-5"
          ml="-5"
          w="12"
          zIndex={10}
          className="badge"
        >
          {sliderValue}
        </SliderMark>
        <SliderTrack background={"rgba(44,44,44,0.2)"} p={3} rounded={25}>
          <SliderFilledTrack zIndex={11} />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      {showButtons && (
        <AddIcon
          mt={0}
          ml={3}
          rounded="full"
          zIndex={10}
          bg="blue.500"
          onClick={() => zoomIn(sliderValue, setSliderValue)}
        />
      )}
      <br />
      <br />
    </Box>
  );
};

export default Magnifier;
