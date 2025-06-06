import CustomDropdown from "./components/CustomDropdown";

const App = () => {
  const options = ["React", "Vue", "Angular", "Svelte"];

  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-dark">
      <h1 className="mb-3 text-primary display-1 fw-bold">Custom Dropdown</h1>
      <CustomDropdown items={options} placeholder="Choose a framework" />
    </div>
  );
};

export default App;
