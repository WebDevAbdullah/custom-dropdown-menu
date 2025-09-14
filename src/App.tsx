import CustomDropdown from "./components/CustomDropdown";

const App = () => {
  const options = ["React", "Vue", "Angular", "Svelte"];

  return (
    <div className="w-100 h-100 d-flex align-items-center bg-dark">
      <div className="container px-2 px-sm-5 text-center">
        <h1 className="mb-3 text-primary display-4 display-md-1 fw-bold">Custom Dropdown</h1>
        <CustomDropdown items={options} placeholder="Choose a framework" />
      </div>
    </div>
  );
};

export default App;
