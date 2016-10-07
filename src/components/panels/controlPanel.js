import React from 'react';
import Fieldset from './controls/fieldset';
import Slider from './controls/slider';
import ColorInput from './controls/colorInput';
import Radio from './controls/radio';

const ControlPanel = (props) => {

    const borderStyles = ["none", "solid", "double", "dashed", "dotted"];
    const gradientTypes = ["linear", "repeating-linear", "radial"];

    return (
      <section className="controls">
        <Fieldset name="Size">
          <Slider
            name="height"
            min="0"
            max="20"
            step="0.1"
            defaultValue={props.defaultValue.height}
            onUserInput={props.onUserInput("height")}
          />
          <Slider
            name="width"
            min="0"
            max="20"
            step="0.1"
            defaultValue={props.defaultValue.width}
            onUserInput={props.onUserInput("width")}
          />
        </Fieldset>
        <Fieldset name="Box-shadow">
          <Slider
            name="x-offset"
            min="-20"
            max="30"
            step="0.1"
            onUserInput={props.onUserInput("x")}
          />
          <Slider
            name="y-offset"
            min="-20"
            max="30"
            step="0.1"
            onUserInput={props.onUserInput("y")}
          />
          <Slider
            name="blur"
            min="0"
            max="10"
            step="0.1"
            onUserInput={props.onUserInput("blur")}
          />
          <Slider
            name="spread"
            min="-20"
            max="30"
            step="0.1"
            onUserInput={props.onUserInput("spread")}
          />
        </Fieldset>
        <Fieldset name="Border-radius">
          <Slider
            name="top-left"
            min="0"
            max="50"
            step="0.1"
            onUserInput={props.onUserInput("borderTopLeftRadius")}
          />
          <Slider
            name="top-right"
            min="0"
            max="50"
            step="0.1"
            onUserInput={props.onUserInput("borderTopRightRadius")}
          />
          <Slider
            name="bottom-right"
            min="0"
            max="50"
            step="0.1"
            onUserInput={props.onUserInput("borderBottomRightRadius")}
          />
          <Slider
            name="bottom-left"
            min="0"
            max="50"
            step="0.1"
            onUserInput={props.onUserInput("borderBottomLeftRadius")}
          />
        </Fieldset>
        <Fieldset name="Border">
          <Slider
            name="top-width"
            min="0"
            max="20"
            step="0.1"
            onUserInput={props.onUserInput("borderTopWidth")}
          />
          <Slider
            name="right-width"
            min="0"
            max="20"
            step="0.1"
            onUserInput={props.onUserInput("borderRightWidth")}
          />
          <Slider
            name="bottom-width"
            min="0"
            max="20"
            step="0.1"
            onUserInput={props.onUserInput("borderBottomWidth")}
          />
          <Slider
            name="left-width"
            min="0"
            max="20"
            step="0.1"
            onUserInput={props.onUserInput("borderLeftWidth")}
          />
          <hr />
          {borderStyles.map((c,i) => (
          <Radio
            key={i}
            value={c}
            name="border-style"
            onUserInput={props.onUserInput("borderStyle")}
          />
          ))}
        </Fieldset>
        <Fieldset name="Color">
          <ColorInput
            name="background"
            defaultValue={props.defaultValue.background}
            onUserInput={props.onUserInput("background")}
          />
          <ColorInput
            name="shadow"
            onUserInput={props.onUserInput("colorShadow")}
          />
          <ColorInput
            name="border"
            onUserInput={props.onUserInput("borderColor")}
          />
        </Fieldset>
        <Fieldset name="Gradient">
          <Slider
            name="position"
            min="0"
            max="100"
            step="0.5"
            onUserInput={props.onUserInput("position")}
          />
          <hr/>
          {gradientTypes.map((c,i) => (
            <Radio
              key={i}
              value={c}
              name="gradient-type"
              onUserInput={props.onUserInput("type")}
            />
          ))}
          <ColorInput
            name="color"
            onUserInput={props.onUserInput("color")}
          />
        </Fieldset>
      </section>
    );
  }

export default ControlPanel;
