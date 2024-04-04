import SelectInput from "../components/fields/SelectInput";
import TextInput from "../components/fields/TextInput";
import { moleculeItems } from "../constants/moleculeList";

function ExperimentalSetup() {
  return (
    <div className="flex grow flex-col items-center justify-start bg-slate-400">
      <p>Experimental Setup</p>

      <TextInput label={"Partial Pressure (Bar)"} type={"text"} />

      <SelectInput label={"Molecule"} list={moleculeItems} />
    </div>
  );
}

export default ExperimentalSetup;
