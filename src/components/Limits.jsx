import Menu from './Menu'
import styles from '../styles/Limits.module.css'
export function Limits() {
  return (
    <div className={`flex flex-row w-full h-screen ${styles.container}`}>
      <Menu />
      <h1>Limites</h1>
    </div>
  )
}
