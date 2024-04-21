import { useState } from "react";
import DualInputSlider from "../components/fields/DualSliderInput.jsx";
import SelectInput from "../components/fields/SelectInput.jsx";
import SingleSliderInput from "../components/fields/SingleSliderInput.jsx";
import TextInput from "../components/fields/TextInput.jsx";
import ToggleInput from "../components/fields/ToggleInput.jsx";
import { moleculeItems } from "../constants/moleculeList.js";

function ExperimentalSetup() {
  const [formData, setFormData] = useState({
    pressure: "1",
    molecule: "HCN",
    source: false,
    scan: "500",
    waveMin: "1700",
    waveMax: "7000",
  });

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
        value={formData.source}
        leftOption={"Globar"}
        rightOption={"Tungsten"}
        onChange={() => setFormData({ ...formData, source: !formData.source })}
      />

      <SingleSliderInput
        label={"Number of Scans"}
        value={formData.scan}
        min={1}
        max={1000}
        onChange={(event) => {
          setFormData({ ...formData, scan: event.target.value });
        }}
      />

      <DualInputSlider
        label={"Wavenumber range (cm⁻¹)"}
        valueMin={formData.waveMin}
        valueMax={formData.waveMax}
        min={400}
        max={12500}
        onChangeMin={(event) => {
          setFormData({ ...formData, waveMin: event.target.value });
        }}
        onChangeMax={(event) => {
          setFormData({ ...formData, waveMax: event.target.value });
        }}
      />
    </div>
  );
}

export default ExperimentalSetup;
