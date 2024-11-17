// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSubmitted: false,
  }

  onChangeFeedbackStatus = () => {
    this.setState(prevState => ({
      isFeedbackSubmitted: !prevState.isFeedbackSubmitted,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackSubmitted} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          {isFeedbackSubmitted === true ? (
            <div className="thank-you-container">
              <img
                className="love-emoji-image"
                src={loveEmojiUrl}
                alt="love emoji"
              />
              <h1 className="thank-you-heading"> Thank you! </h1>
              <p className="thank-you-description">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <div>
              <h1 className="feedback-description">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id}>
                    <img
                      onClick={this.onChangeFeedbackStatus}
                      className="emoji-img"
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                    />
                    <p>{eachEmoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
