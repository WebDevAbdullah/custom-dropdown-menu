import { useState } from "react";
import "./CustomDropdown.css";

type CustomDropdownPropsType = {
  items: string[];
  placeholder: string;
};

const CustomDropdown = ({ items, placeholder = "Select an option" }: CustomDropdownPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown mt-5" style={{ position: "relative", display: "inline-block" }}>
      <button className=" custom-dropdown-btn btn btn-primary dropdown-toggle fs-3 rounded-0 rounded-top" type="button" onClick={toggleDropdown}>
        {selectedItem || placeholder}
      </button>
      <ul className={`${isOpen ? "show" : ""} w-100 fs-3 dropdown-menu mb-5 rounded-0 rounded-bottom p-0`}>
        {items.map((item) => (
          <li key={item}>
            <button className={`${selectedItem === item ? "selected-item" : ""} custom-dropdown-item dropdown-item`} type="button" onClick={() => handleSelect(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdown;
