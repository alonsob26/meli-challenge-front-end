import MoonLoader from "react-spinners/MoonLoader";

const Spinner = () => {
  return (
    <div data-testid="spinner" className="spinner">
      <MoonLoader color="#3483fa" />
    </div>
  );
};

export default Spinner;
