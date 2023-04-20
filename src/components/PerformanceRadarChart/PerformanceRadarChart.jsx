import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
const PerformanceRadarChart = ({ data }) => {
  return (
    <RadarChart
      width={260}
      height={260}
      margin={{ top: 20, right: 30, left: 15, bottom: 5 }}
      data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis />
      <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  )
}

export default PerformanceRadarChart
