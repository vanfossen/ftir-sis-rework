import SelectInput from "../components/fields/SelectInput.jsx";
import SingleSliderInput from "../components/fields/SingleSliderInput.jsx";
import TextInput from "../components/fields/TextInput.jsx";
import ToggleInput from "../components/fields/ToggleInput.jsx";
import { moleculeItems } from "../constants/moleculeList.js";

function ExperimentalSetup() {
  return (
    <div className="flex grow flex-col items-center justify-start">
      <p>Experimental Setup</p>

      <TextInput label={"Partial Pressure (Bar)"} type={"text"} />

      <SelectInput label={"Molecule"} list={moleculeItems} />

      <ToggleInput
        label={"Source"}
        leftOption={"Globar"}
        rightOption={"Tungsten"}
      />

      <SingleSliderInput label={"Number of Scans"} min={1} max={1000} />
    </div>
  );
}

export default ExperimentalSetup;
