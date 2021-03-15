import React from 'react';
import { connect } from 'react-redux'
import { set_name } from './store/action'
import { set_school } from './store/action'
import { set_job } from './store/action'


class App extends React.Component {

  render() {
    var newname = 'birat';
    var newschool = 'iba'
    var newjob = ['upwork', 'fiverr', 'software house']
    console.log('REDUX >>> ', this.props)
    return (
      <div>
        <h1>Hello World</h1>
        <br />
        <button onClick={() => this.props.set_name(newname)}>Set Name</button>
        <button onClick={() => this.props.set_school(newschool)}>Set School</button>
        <button onClick={() => this.props.set_job(newjob)}>Set Job</button>
      </div>
    )
  }
}

// THIS USE FOR PROPERTIES & FOR GETTING  GLOBAL STATE's PROPERTIES

const mapStateToProps = (state) => ({
  app_name: state.app.app_name,
  app_code: state.app.app_code,
  user_school: state.auth.user_school,
  user_name: state.auth.user_name,
  user_job: state.auth.user_job,
  email: 'aaa@gmail.com',
})


// THIS USE FOR FUNCTIONS & FOR UPDATING GLOBAL STATE's PROPERTIES

const mapDispatchToProps = (dispatch) => ({
  set_name: (name) => dispatch(set_name(name)),
  set_school: (school) => dispatch(set_school(school)),
  set_job: (job) => dispatch(set_job(job)),

})
export default connect(mapStateToProps, mapDispatchToProps)(App)
