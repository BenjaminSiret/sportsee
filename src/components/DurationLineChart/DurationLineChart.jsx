import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import styles from './DurationLineChart.module.css'

const customLegend = () => {
  return <span style={{ fontSize: "15px", fontWeight: '500', color: 'white', opacity: '0.6' }}>Durée moyenne <br />des sessions</span>
}
const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip} >
        <span>{`${payload[0].payload.sessionLength}min`}</span>
      </div>
    )
  }
  return null
}

const DurationLineChart = ({ data }) => {
  return (
    <LineChart
      width={240}
      height={240}
      data={data}

    >
      <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "white" }} fontSize={12} fontWeight={500} opacity={0.6} />
      <YAxis domain={['dataMin - 15', "dataMax + 30"]} hide={true} />
      <Tooltip content={customTooltip} cursor={false} wrapperStyle={{ outlineStyle: "none" }} />
      <Legend content={customLegend} verticalAlign='top' wrapperStyle={{ paddingLeft: '10px', paddingTop: '10px' }} />
      <Line type='natural' dataKey="sessionLength" stroke="#ffff" strokeWidth={2} dot={false} activeDot={{ fill: 'white', r: 4, stroke: 'white', strokeWidth: '8', strokeOpacity: '0.4' }} opacity={0.6} />
    </LineChart>
  )
}

export default DurationLineChart
