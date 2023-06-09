import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts"
import PropTypes from "prop-types"
import styles from './DailyBarChart.module.css'

const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipLabel}>{`${payload[0].payload.kilogram}kg`}</p>
        <p className={styles.tooltipLabel}>{`${payload[1].payload.calories}kcal`}</p>
      </div>
    )
  }
  return null
}

const legendFormatter = (value) => {
  return <span style={{ color: '#74798C', fontSize: '14px', marginLeft: '5px' }}>{value}</span>
}

const DailyBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={16 / 6}>
      <BarChart
        data={data}
        barCategoryGap={35}
      > <CartesianGrid vertical={false} strokeDasharray='2' />
        <XAxis
          dataKey='day'
          tickLine={false}
          tickMargin={16}
          tick={{ fill: '#9B9EAC' }}
          stroke="#DEDEDE"
          axisLine={{ strokeWidth: 2, }}
          padding={{ left: -40, right: -40 }}
        />
        <YAxis
          yAxisId='right'
          orientation='right'
          type='number'
          domain={['dataMin - 2', 'dataMax + 2']}
          tickLine={false}
          axisLine={false}
          tickMargin={35}
        />
        <YAxis
          yAxisId='left'
          orientation='left'
          type='number'
          domain={[0, 'auto']}
          hide={true}
        />
        <Tooltip
          content={customTooltip}
          wrapperStyle={{ outlineStyle: "none" }}
        />
        <Legend
          align="right"
          iconType='circle'
          iconSize={8}
          formatter={legendFormatter}
          wrapperStyle={{ top: '-50px' }}
        />
        <Bar
          yAxisId='right'
          dataKey='kilogram'
          name='Poids (kg)'
          fill='00000'
          radius={[10, 10, 0, 0]}
          maxBarSize={7}
        />
        <Bar
          yAxisId='left'
          dataKey='calories'
          name='Calories brulées (kcal)'
          fill='red'
          radius={[10, 10, 0, 0]}
          maxBarSize={7}
        />
      </BarChart >
    </ResponsiveContainer >
  )
}

DailyBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired
}

export default DailyBarChart
