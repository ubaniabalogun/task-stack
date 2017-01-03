import React, { PropTypes } from 'react'

const styles = {
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    WebkitAppRegion: 'drag'
  },
  button: {
    height: '58px',
    width: '60px',
    margin: '0px',
    outline: 'none',
    padding: '0px',
    WebkitAppRegion: 'no-drag'
  },
  input: {
    height: '58px',
    width: '490px',
    fontSize: '42px',
    paddingLeft: '10px',
    outline: 'none',
    WebkitAppRegion: 'no-drag'
  }
}


function Button(){
  return (
    <button type="submit" style={styles.button}>
    </button>
  )
}


function Input({ onUpdateEntry, entry }){
  return (
    <input
      style={styles.input}
      type="text"
      onChange={onUpdateEntry}
      value={entry}
      ref={ (input) => { input ? input.focus(): null } }
    />
  )
}



Input.propTypes = {
  onUpdateEntry: PropTypes.func.isRequired,
  entry: PropTypes.string.isRequired
}


export default function EntryView({ onUpdateEntry, onSubmitEntry, entry }){
  return (
    <form onSubmit={onSubmitEntry} style={styles.form}>
      <Input onUpdateEntry={onUpdateEntry} entry={entry}/>
      <Button/>
    </form>
  )
}


EntryView.propTypes = {
  onUpdateEntry: PropTypes.func.isRequired,
  onSubmitEntry: PropTypes.func.isRequired,
  entry: PropTypes.string.isRequired
}
