import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Text } from "recharts"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
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

const ScoreRadialBarChart = ({ data }) => {
  const [xValue, setXValue] = useState(30)
  const [yValue, setYValue] = useState(30)
  const breakpoint = 1200

  useEffect(() => {
    const updateTextPosition = () => {
      if (window.innerWidth < breakpoint) {
        setXValue(5)
        setYValue(15)
      } else {
        setXValue(30)
        setYValue(30)
      }
    }

    updateTextPosition()

    window.addEventListener('resize', updateTextPosition)
    return () => window.removeEventListener('resize', updateTextPosition)
  }, [])

  return (
    <ResponsiveContainer width="100%" height='100%' aspect={1} >
      <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" startAngle={90} endAngle={180} barSize={8} data={data}>
        <RadialBar
          minAngle={15}
          fill="#FF0000"
          cornerRadius='100%'
          dataKey="todayScore" />
        <text x={xValue} y={yValue} fontSize={15} fontWeight={500}>
          Score
        </text>
        <Legend content={<CustomLegend />} verticalAlign="middle" align="center" />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

ScoreRadialBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    todayScore: PropTypes.number.isRequired
  }))
}

export default ScoreRadialBarChart
