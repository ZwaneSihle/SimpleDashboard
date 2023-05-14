import React, { useState } from "react";
import Filter from "./Filter";
import Title from "./Title";
import Chart from "./Chart";

const Dashboard: React.FC = () => {
  const filterValues = ["Value 1", "Value 2", "Value 3"];
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterSelect = (selectedValue: string) => {
    setSelectedFilter(selectedValue);
  };

  return (
    <div>
      <Title text="Dashboard Title" />
      <Filter values={filterValues} onSelect={handleFilterSelect} />
      <Chart filterValue={selectedFilter} />
    </div>
  );
};

export default Dashboard;
