// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateInput = value => {
    this.setState({searchInput: value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="img"
              />
              <input
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeInput}
              />
            </div>
            <ul>
              {searchResult.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionDetails={eachItem}
                  updateInput={this.updateInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
