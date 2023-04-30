import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from './NutritionStatsComponent.module.css'
const NutritionStatsComponent = ({ nutritionStats }) => {

  const nutritionStatsColors = {
    Calories: "rgba(255, 0, 0, 0.1)",
    Proteines: "rgba(74, 184, 255, 0.1)",
    Glucides: "rgba(249, 206, 35, 0.1)",
    Lipides: "rgba(253, 81, 129, 0.1)"
  }

  return (
    <>
      {nutritionStats.map((nutritionStat, index) => (
        <div key={index} className={styles.nutritionStat}>
          <div className={styles.imageContainer} style={{ backgroundColor: nutritionStatsColors[nutritionStat.name] }}>
            <Image src={`/assets/${nutritionStat.name}.png`} width={18} height={18} alt={`${nutritionStat.name}`} />
          </div>
          <div className={styles.valueContainer}>
            <p className={styles.statValue}>{nutritionStat.value}{nutritionStat.unit}</p>
            <p className={styles.statName}>{nutritionStat.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}

NutritionStatsComponent.propTypes = {
  nutritionStats: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
  }))
}

export default NutritionStatsComponent
