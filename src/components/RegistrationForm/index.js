// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isSubmitSuccess: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    console.log('blur triggered')
    const {firstName} = this.state

    const isFirstNameInputEmpty = firstName === ''
    console.log(isFirstNameInputEmpty)

    this.setState({showFirstNameError: isFirstNameInputEmpty})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isLastNameInputEmpty = lastName === ''
    console.log(isLastNameInputEmpty)

    this.setState({showLastNameError: isLastNameInputEmpty})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameError: true})
    } else {
      this.setState({showFirstNameError: false})
    }
    if (lastName === '') {
      this.setState({showLastNameError: true})
    } else {
      this.setState({showLastNameError: false})
    }
    if (firstName !== '' && lastName !== '') {
      this.submitSuccess()
    }
  }

  submitSuccess = () => {
    const {showFirstNameError, showLastNameError} = this.state
    if (showFirstNameError === false && showLastNameError === false) {
      this.setState({isSubmitSuccess: true})
      console.log('isSubmitSuccess')
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      showFirstNameError: false,
      showLastNameError: false,
      isSubmitSuccess: false,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
      isSubmitSuccess,
    } = this.state
    console.log(firstName)
    console.log(lastName)

    const firstNameCardClassName = showFirstNameError
      ? 'error-input-card'
      : 'input-card'

    const lastNameCardClassName = showLastNameError
      ? 'error-input-card'
      : 'input-card'

    return (
      <div className="registration-form-container">
        <h1 className="registration-form-title">Registration</h1>
        {isSubmitSuccess ? (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="submit-success-img"
            />
            <p className="submit-success-text">Submitted Successfully</p>
            <button
              className="submit-button"
              type="button"
              onClick={this.onSubmitAnotherResponse}
            >
              Submit Another Response
            </button>
          </>
        ) : (
          <form className="registration-form-card" onSubmit={this.onSubmitForm}>
            <label htmlFor="first-name" className="label-text">
              FIRST NAME
            </label>
            <input
              type="text"
              className={firstNameCardClassName}
              id="first-name"
              placeholder="First name"
              onBlur={this.onBlurFirstName}
              onChange={this.onChangeFirstName}
            />
            {showFirstNameError && <p className="error-msg">Required</p>}
            <label htmlFor="last-name" className="label-text">
              LAST NAME
            </label>
            <input
              type="text"
              className={lastNameCardClassName}
              id="last-name"
              placeholder="Last name"
              onBlur={this.onBlurLastName}
              onChange={this.onChangeLastName}
            />
            {showLastNameError && <p className="error-msg">Required</p>}
            <div className="submit-button-card">
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
