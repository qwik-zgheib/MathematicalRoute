import style from '../styles/Limits.module.css'

import data from '../db/limits.json'

const Limits = () => {
  const { limits } = data

  console.log(limits)

  return (
    <div className={`${style.container} bg-[#ece5d1] dark:bg-[#2D2E40] dark:text-[#fff]`}>
      <h1>Limites</h1>
      <h1>Other change </h1>
    </div>
  )
}

export default Limits
