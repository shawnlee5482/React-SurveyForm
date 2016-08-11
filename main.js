var React = require('react');
var ReactDOM = require('react-dom');

var SurveyForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      course: '',
      rating: '',
      bForm: true
    }
  },

  handleButtonClick(event) {
    event.preventDefault();

    this.setState({name: this.state.name});
    this.setState({course: this.state.course});
    this.setState({rating: this.state.rating});
    this.setState({comment: this.state.comment});

    this.setState({bForm: false});
  },

  handleCourseChange(event) {
    // this.setState({course: event.target.value });
    this.state.course = event.target.value;
    console.log('course = ', this.state.course);
  },  

  handleRatingChange(event) {
    // this.setState({rating: event.target.value });
    this.state.rating = event.target.value;
    console.log('rating = ', this.state.rating);
  },  

  handleCommentChange(event) {
    // this.setState({comment: event.target.value });
    this.state.comment = event.target.value;
    console.log('comment = ', this.state.comment);
  },  

  handleNameChange(event) {
    // this.setState({name: event.target.value });
    this.state.name = event.target.value;
  },

  render: function() {
    if(this.state.bForm) {
      return (
        <div>
          <p>Name: <input onChange={this.handleNameChange}/> </p>
          <p>Course: 
            <select onChange={this.handleCourseChange}>
                <option value="MEAN">MEAN</option>
                <option value="iOS">iOS</option>
                <option value="Python">Python</option>
            </select>
          </p>
          <p>Rating: <input type="number" onChange={this.handleRatingChange}/></p>
          <p>Comment: <textarea rows="3" cols="20" onChange={this.handleCommentChange}/></p>
          <p><button onClick={this.handleButtonClick}>Submit</button></p>


        </div>
      )
    } else {
      return (
        <div>
          <p> name: {this.state.name} </p>
          <p> course: {this.state.course} </p>
          <p> rating: {this.state.rating} </p>
          <p> comment: {this.state.comment} </p>
        </div>
      )
    }
  }
})

var App = React.createClass({
  render: function(){
    return (
      <SurveyForm />
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));