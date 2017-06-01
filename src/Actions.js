import React from 'react'
import store from './redux/store'

class Actions extends React.Component {
  constructor() {
    super()
    this.showAll = this.showAll.bind(this)
    this.showCompleted = this.showCompleted.bind(this)
  }

  showAll() {
    store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' })
  }

  showCompleted() {
    store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'})
  }

  render() {
    return(
      <div className="actions">
        <div className="container">
          <div onClick={this.showAll} className="list"></div>
          <div onClick={this.showCompleted} className="completed"></div>
        </div>
      </div>
    )
  }
}

export default Actions
