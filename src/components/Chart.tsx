import React from "react";

interface ChartProps {
  filterValue: string;
}

const Chart: React.FC<ChartProps> = ({ filterValue }) => {
  return <div>Chart for filter value: {filterValue}</div>;
};

export default Chart;
