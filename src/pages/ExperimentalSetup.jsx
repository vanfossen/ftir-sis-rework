import { useState } from "react";
import SelectInput from "../components/fields/SelectInput.jsx";
import SingleSliderInput from "../components/fields/SingleSliderInput.jsx";
import TextInput from "../components/fields/TextInput.jsx";
import ToggleInput from "../components/fields/ToggleInput.jsx";
import { moleculeItems } from "../constants/moleculeList.js";

function ExperimentalSetup() {
  const [formData, setFormData] = useState({ pressure: "1", molecule: "HCN" });

  return (
    <div className="flex grow flex-col items-center justify-start">
      <p>Experimental Setup</p>

      <TextInput
        label={"Partial Pressure (Bar)"}
        value={formData.pressure}
        min={0.0001}
        max={10}
        step={0.0001}
        onChange={(event) => {
          setFormData({ ...formData, pressure: event.target.value });
        }}
      />

      <SelectInput
        label={"Molecule"}
        value={formData.molecule}
        list={moleculeItems}
        onChange={(event) => {
          setFormData({ ...formData, molecule: event.target.value });
        }}
      />

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
