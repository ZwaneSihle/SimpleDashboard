import React, { useState } from "react";

interface FilterProps {
  values: string[];
  onSelect: (selectedValue: string) => void;
}

const Filter: React.FC<FilterProps> = ({ values, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Filter;
