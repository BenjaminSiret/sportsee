import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts"

const ScoreRadialBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height='100%' aspect={1} >
      <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" startAngle={90} endAngle={180} barSize={10} data={data}>
        <RadialBar
          minAngle={15}
          fill="#FF0000"
          cornerRadius='100%'
          dataKey="todayScore" />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default ScoreRadialBarChart
