import React, { Component } from 'react'
import EntryView from '../components/EntryView'


export default class EntryViewContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      entry: ''
    }
  }

  // componentDidMount(){
  //   console.log('component did mount',this.state)
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   console.log(`EntryViewContainer component will update`,nextState)
  // }
  //
  // componentDidUpdate(){
  //   console.log('component did update',this.state)
  // }



  handleUpdateEntry(event){
    this.setState({
      entry: event.target.value
    })
  }

  handleSubmitEntry(event){
    event.preventDefault()
    const { entry } = this.state
    this.setState({
      entry: ''
    })
    console.log(`Input: '${entry}'`)
  }

  render(){
    return (
      <EntryView
        onUpdateEntry={ (event) => this.handleUpdateEntry(event) }
        onSubmitEntry={ (event) => this.handleSubmitEntry(event) }
        entry={this.state.entry}/>
    )
  }
}
