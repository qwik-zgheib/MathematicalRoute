import styles from '../styles/Title.module.css'
export default function Title() {
  return (
    <div>
      <h1 className={`${styles.text} text-[#ECE5D1] dark:text-[#ECE5D1]`}>
        THΞ MΔTHEMΔTICΔL R<span className={styles.deco}>Θ</span>UTΞ
      </h1>
    </div>
  )
}
