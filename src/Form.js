import React from 'react'
import store from './redux/store'

class Form extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    store.dispatch({ type: 'ADD_TODO', content: this.text.value})
    store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'})
    this.form.reset()
  }

  render() {
    return (
      <div className="form">
        <div className="container">
          <form ref={value => this.form = value} onSubmit={this.handleSubmit}>
            <input ref={value => this.text = value} className="text-input" type="text" placeholder="请输入" />
            <input className="submit" type="submit" value="+" 
              style={{fontSize:"60px",fontWeight:"bloder",color:"#fff"}}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Form
