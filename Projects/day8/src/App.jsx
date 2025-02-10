import CheckboxForm from "./Components/CheckboxForm";
import FormSubmit from "./Components/FormSubmit";
import MultiInputForm from "./Components/MultiInputForm";
import RadioForm from "./Components/RadioForm";
import SelectForm from "./Components/SelectForm";
import SimpleForm from "./Components/SimpleFrom";
import ValidatedForm from "./Components/ValidatedForm";


 function App() {
  return (
    <>
      <SimpleForm/>
      <FormSubmit/>
      <MultiInputForm/>
      <CheckboxForm/>
      <RadioForm/>
      <SelectForm/>
      <ValidatedForm/>
    </>
  );
}

export default App;