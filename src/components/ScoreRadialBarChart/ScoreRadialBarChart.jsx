import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Text } from "recharts"
import styles from "./ScoreRadialBarChart.module.css"
const CustomLegend = ({ payload }) => {
  return (
    <div>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className={styles.legend}>
          <span className={styles.percentage}>{entry.payload.todayScore * 100}%</span>
          <span className={styles.target}>de votre objectif</span>
        </div>
      ))}
    </div>
  )
}

const CustomTitle = () => {
  return (
    <div >
      <span>Score</span>
    </div>
  )
}

const ScoreRadialBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height='100%' aspect={1} >
      <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" startAngle={90} endAngle={180} barSize={8} data={data}>
        <RadialBar
          minAngle={15}
          fill="#FF0000"
          cornerRadius='100%'
          dataKey="todayScore" />
        <text x={30} y={24} fontSize={15} fontWeight={500}>
          Score
        </text>
        <Legend content={<CustomLegend />} verticalAlign="middle" align="center" />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default ScoreRadialBarChart
