import styles from './index.module.scss'

const Button = (): JSX.Element => {
  return (
    <button className={styles.container} onClick={() => alert('button click')}>
      button
    </button>
  )
}

export default Button
