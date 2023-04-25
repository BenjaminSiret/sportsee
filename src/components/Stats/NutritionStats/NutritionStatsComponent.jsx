import Image from 'next/image'

const NutritionStatsComponent = ({ nutritionStats }) => {
  // return a component which displays the nutrition stats
  // nutritionStats is an array of objects

  return (
    <div >
      {nutritionStats.map((nutritionStat, index) => (
        <div key={index}>
          <p>{nutritionStat.name}</p>
          <Image src={`/assets/${nutritionStat.name}.png`} width={18} height={18} alt={`${nutritionStat.name}`} />
          <p>{nutritionStat.value}</p>
        </div>
      ))}
    </div>
  )
}

export default NutritionStatsComponent
