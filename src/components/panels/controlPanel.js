import React from 'react';
import Fieldset from './controls/fieldset';
import Slider from './controls/slider';
import ColorInput from './controls/colorInput';
import Radio from './controls/radio';

const ControlPanel = (props) => {

    const borderStyles = ["none", "solid", "double", "dashed", "dotted"];
    const gradientTypes = ["linear", "repeating-linear", "radial"];
    const selected = props.selected;
    const input = props.inputValues;

    return (
      <section className="controls">
        <Fieldset name="Size">
          <Slider
            name="height"
            min="0"
            max="20"
            step="0.1"
            inputValue={input.height}
            onUserInput={props.handleBasicInput("height")}
          />
          <Slider
            name="width"
            min="0"
            max="20"
            step="0.1"
            inputValue={input.width}
            onUserInput={props.handleBasicInput("width")}
          />
          <hr />
          <ColorInput
            name="background"
            inputValue={input.background}
            onUserInput={props.handleBasicInput("background")}
          />
        </Fieldset>
        <Fieldset name="Box-shadow">
          <Slider
            name="x-offset"
            min="-20"
            max="30"
            step="0.1"
            inputValue={input.boxShadow[selected.boxShadow_id].x}
            onUserInput={props.handleComplexInput("x", "boxShadow")}
          />
          <Slider
            name="y-offset"
            min="-20"
            max="30"
            step="0.1"
            inputValue={input.boxShadow[selected.boxShadow_id].y}
            onUserInput={props.handleComplexInput("y", "boxShadow")}
          />
          <Slider
            name="blur"
            min="0"
            max="10"
            step="0.1"
            inputValue={input.boxShadow[selected.boxShadow_id].blur}
            onUserInput={props.handleComplexInput("blur", "boxShadow")}
          />
          <Slider
            name="spread"
            min="-20"
            max="30"
            step="0.1"
            inputValue={input.boxShadow[selected.boxShadow_id].spread}
            onUserInput={props.handleComplexInput("spread", "boxShadow")}
          />
          <hr />
          <ColorInput
            name="color"
            inputValue={input.boxShadow[selected.boxShadow_id].colorShadow}
            onUserInput={props.handleComplexInput("colorShadow", "boxShadow")}
          />
        </Fieldset>
        <Fieldset name="Border-radius">
          <Slider
            name="top-left"
            min="0"
            max="50"
            step="0.1"
            inputValue={input.borderTopLeftRadius}
            onUserInput={props.handleBasicInput("borderTopLeftRadius")}
          />
          <Slider
            name="top-right"
            min="0"
            max="50"
            step="0.1"
            inputValue={input.borderTopRightRadius}
            onUserInput={props.handleBasicInput("borderTopRightRadius")}
          />
          <Slider
            name="bottom-right"
            min="0"
            max="50"
            step="0.1"
            inputValue={input.borderBottomRightRadius}
            onUserInput={props.handleBasicInput("borderBottomRightRadius")}
          />
          <Slider
            name="bottom-left"
            min="0"
            max="50"
            step="0.1"
            inputValue={input.borderBottomLeftRadius}
            onUserInput={props.handleBasicInput("borderBottomLeftRadius")}
          />
        </Fieldset>
        <Fieldset name="Border">
          <Slider
            name="top-width"
            min="0"
            max="20"
            step="0.1"
            inputValue={input.borderTopWidth}
            onUserInput={props.handleBasicInput("borderTopWidth")}
          />
          <Slider
            name="right-width"
            min="0"
            max="20"
            step="0.1"
            inputValue={input.borderRightWidth}
            onUserInput={props.handleBasicInput("borderRightWidth")}
          />
          <Slider
            name="bottom-width"
            min="0"
            max="20"
            step="0.1"
            inputValue={input.borderBottomWidth}
            onUserInput={props.handleBasicInput("borderBottomWidth")}
          />
          <Slider
            name="left-width"
            min="0"
            max="20"
            step="0.1"
            inputValue={input.borderLeftWidth}
            onUserInput={props.handleBasicInput("borderLeftWidth")}
          />
          <hr />
          {borderStyles.map((c,i) => (
          <Radio
            key={i}
            value={c}
            name="border-style"
            onUserInput={props.handleBasicInput("borderStyle")}
          />
          ))}
          <ColorInput
            name="color"
            onUserInput={props.handleBasicInput("borderColor")}
          />
        </Fieldset>
        <Fieldset name="Gradient">
          <Slider
            name="position"
            min="0"
            max="100"
            step="0.5"
            inputValue={input.backgroundImage[selected.backgroundImage_id].position}
            onUserInput={props.handleComplexInput("position", "backgroundImage")}
          />
          <hr/>
          {gradientTypes.map((c,i) => (
            <Radio
              key={i}
              value={c}
              name="gradient-type"
              onUserInput={props.handleComplexInput("type", "backgroundImage")}
            />
          ))}
          <ColorInput
            name="color"
            inputValue={input.backgroundImage[selected.backgroundImage_id].color}
            onUserInput={props.handleComplexInput("color", "backgroundImage")}
          />
        </Fieldset>
      </section>
    );
  }

export default ControlPanel;
