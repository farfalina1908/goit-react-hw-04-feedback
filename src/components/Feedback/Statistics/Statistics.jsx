import PropTypes from 'prop-types'
import css from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <ul className = {css.statList}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive feedback: {positivePercentage ? `${positivePercentage}%` : 'No positive feedback'}</li>
    </ul>
  )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics