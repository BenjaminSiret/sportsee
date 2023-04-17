import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const customLegend = () => {
  return <span style={{ fontSize: "15px", fontWeight: '500', color: 'white', opacity: '0.5' }}>Durée moyenne <br />des sessions</span>
}
const DurationLineChart = ({ data }) => {
  return (
    <LineChart
      width={240}
      height={240}
      data={data}

    >
      <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "white" }} fontSize={12} fontWeight={500} opacity={0.5} />
      <YAxis domain={['dataMin - 15', "dataMax + 30"]} hide={true} />
      <Tooltip content={() => null} cursor={false} />
      <Legend content={customLegend} verticalAlign='top' wrapperStyle={{ paddingLeft: '10px', paddingTop: '10px' }} />
      <Line type='natural' dataKey="sessionLength" stroke="#ffff" strokeWidth={2} dot={false} activeDot={{ fill: 'white', r: 4 }} opacity={0.6} />
    </LineChart>
  )
}

export default DurationLineChart
