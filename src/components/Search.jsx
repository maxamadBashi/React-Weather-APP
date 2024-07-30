import { useState } from "react";

export default function Search({ onSearch }) {
  // State to keep track of the search input value
  const [value, setValue] = useState("");

  // Handler for input value change
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    onSearch(value); // Call the onSearch prop with the current value
    setValue(""); // Clear the input value
  };

  return (
    // Form with styling for the search input
    <form
      className="max-w-64 w-full p-4 flex justify-between items-center gap-2 border border-white border-opacity-25 rounded-full bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur"
      onSubmit={handleSubmit}
    >
      <i className="fa-solid fa-magnifying-glass opacity-75"></i>
      <input
        className="w-full outline-0 bg-transparent placeholder:text-white placeholder:opacity-75"
        placeholder="Mogadishu, Somalia"
        name="search"
        type="text"
        value={value} // Bind input value to the state
        onChange={handleChange} // Call handleChange on input change
      ></input>
    </form>
  );
}
