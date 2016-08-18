import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  myProp: state.myNewReducer
})

const component = ({myProp}) => (<div>
  My second route {myProp}
</div>)

module.exports = connect(mapStateToProps)(component)
