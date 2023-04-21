import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, Rectangle, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import styles from './DurationLineChart.module.css'

const customLegend = () => {
  return <span style={{ fontSize: "15px", fontWeight: '500', color: 'white', opacity: '0.6' }}>Durée moyenne <br />des sessions</span>
}
const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip} >
        <span>{`${payload[0].payload.sessionLength} min`}</span>
      </div>
    )
  }
  return null
}

const CustomCursor = ({ points }) => {
  return (
    <Rectangle x={points[0].x} width={260} height={260} opacity="0.1" />
  )
}

const DurationLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height='100%' aspect={1}>
      <LineChart
        margin={{ top: 20, right: 15, left: 15, bottom: 5 }}
        data={data}
      >
        <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "white" }} fontSize={12} fontWeight={500} opacity={0.6} />
        <YAxis domain={['dataMin - 15', "dataMax + 30"]} hide={true} />
        <Tooltip content={customTooltip} wrapperStyle={{ outlineStyle: "none" }} cursor={<CustomCursor />} />
        <Legend content={customLegend} verticalAlign='top' wrapperStyle={{ paddingLeft: '15px' }} />
        <Line type='natural' dataKey="sessionLength" stroke="#ffff" strokeWidth={2} dot={false} activeDot={{ fill: 'white', r: 4, stroke: 'white', strokeWidth: '8', strokeOpacity: '0.4' }} opacity={0.6} />
      </LineChart>
    </ResponsiveContainer >
  )
}

DurationLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    sessionLength: PropTypes.number.isRequired
  }))
}

export default DurationLineChart
