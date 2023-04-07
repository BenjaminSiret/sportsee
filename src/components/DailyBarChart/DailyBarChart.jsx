import PropTypes from "prop-types"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts"

const DailyBarChart = ({ data }) => {
  return (
    <BarChart
      width={800}
      height={300}
      data={data}
      barCategoryGap={45}
    > <CartesianGrid vertical={false} strokeDasharray='2' />
      <XAxis
        dataKey='day'
        tickLine={false}
        tickMargin={16}
        tick={{ fill: '#9B9EAC' }}
        stroke="#DEDEDE"
        axisLine={{ strokeWidth: 2, }}
        padding={{ left: -47, right: -47 }}
      />
      <YAxis
        yAxisId='right'
        orientation='right'
        type='number'
        domain={["dataMin - 2", 'dataMax+2']}
        tickLine={false}
        axisLine={false}
      />
      <YAxis
        yAxisId='left'
        orientation='left'
        type='number'
        domain={[0, 'auto']}
        hide={true}
      />
      <Tooltip />
      <Legend
        verticalAlign='top'
        iconType='circle'
        style={{ fontFamily: "Roboto", fontSize: "1.2rem" }}
      />
      <Bar
        yAxisId='right'
        dataKey='kilogram'
        name='Poids (kg)'
        fill='00000'
        radius={[10, 10, 0, 0]}
        maxBarSize={7}
      />
      <Bar
        yAxisId='left'
        dataKey='calories'
        name='Calories brulées (kcal)'
        fill='red'
        radius={[10, 10, 0, 0]}
        maxBarSize={7}
      />
    </BarChart >
  )
}

DailyBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired
}

export default DailyBarChart
