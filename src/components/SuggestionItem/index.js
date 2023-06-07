// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateInput} = props
  const {suggestion} = suggestionDetails

  const onclickSuggestion = () => {
    updateInput(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={onclickSuggestion}>
        <img
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
