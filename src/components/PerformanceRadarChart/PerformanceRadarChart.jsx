import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Text } from 'recharts'
import PropTypes from 'prop-types'

const CustomTick = ({ x, y, payload, cx, cy, ...rest }) => {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      x={x + (x - cx) / 20}
      y={y + (y - cy) / 20}
      fill='white'
    >
      {payload.value}
    </Text>
  )
}

const PerformanceRadarChart = ({ data }) => {
  return (
    <RadarChart
      width={260}
      height={260}
      margin={{ top: 0, right: 25, left: 25, bottom: 0 }}
      startAngle={-150}
      endAngle={210}
      data={data}>
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" fontSize={12} fontWeight={500} opacity={1} tick={<CustomTick />} />
      <PolarRadiusAxis axisLine={false} tick={false} />
      <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
    </RadarChart>
  )
}

PerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    kind: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }))
}

export default PerformanceRadarChart
