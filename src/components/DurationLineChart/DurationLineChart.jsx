import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const CustomTooltip = ({ active, payload }) => {


  return null
}
const DurationLineChart = ({ data }) => {
  return (
    <LineChart
      width={240}
      height={240}
      data={data}

    >
      <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "white" }} fontSize={12} fontWeight={500} />
      <YAxis domain={[-15, "dataMax + 30"]} hide={true} />
      <Tooltip content={() => null} cursor={false} />
      <Line type='natural' dataKey="sessionLength" stroke="#ffff" strokeWidth={2} dot={false} activeDot={{ fill: 'white', r: 8 }} />
    </LineChart>
  )
}

export default DurationLineChart
