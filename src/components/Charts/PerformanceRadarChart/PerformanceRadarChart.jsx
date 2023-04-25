import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Text, ResponsiveContainer } from 'recharts'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
const CustomTick = ({ x, y, payload, cx, cy, ...rest }) => {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      x={x + (x - cx) / 30}
      y={y + (y - cy) / 30}
      fill='white'
    >
      {payload.value}
    </Text>
  )
}

const PerformanceRadarChart = ({ data }) => {

  const [margin, setMargin] = useState({ top: 0, right: 30, left: 30, bottom: 0 })
  const breakpoint = 1200

  useEffect(() => {
    const udpateMargin = () => {
      if (window.innerWidth < breakpoint) {
        setMargin({ top: 0, right: 40, left: 40, bottom: 0 })
      } else {
        setMargin({ top: 0, right: 30, left: 30, bottom: 0 })
      }
    }

    udpateMargin()

    window.addEventListener('resize', udpateMargin)
    return () => window.removeEventListener('resize', udpateMargin)
  }, [])

  return (
    <ResponsiveContainer width='100%' height='100%' aspect={1}>
      <RadarChart
        margin={margin}
        startAngle={-150}
        endAngle={210}
        data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" fontSize={12} fontWeight={500} opacity={1} tick={<CustomTick />} />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer >
  )
}

PerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    kind: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }))
}

export default PerformanceRadarChart
