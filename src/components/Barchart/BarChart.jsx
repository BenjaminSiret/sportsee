import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MyBarChart = ({ data }) => {
  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barCategoryGap={20}
    >
      <XAxis dataKey='day' />
      <YAxis />
      <Tooltip />
      <Legend
        verticalAlign='top'
        iconType='circle'
        style={{ fontFamily: "Roboto", fontSize: "1.2rem" }}
      />
      <Bar
        dataKey='kilogram'
        name='Poids (kg)'
        fill='00000'
        radius={[10, 10, 0, 0]}
        maxBarSize={10}
      />
      <Bar
        dataKey='calories'
        name='Calories brulées (kcal)'
        fill='red'
        radius={[10, 10, 0, 0]}
        maxBarSize={10}
      />
    </BarChart>
  );
};

export default MyBarChart;
