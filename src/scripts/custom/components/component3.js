class MyComponent3 extends React.Component{

  constructor(props) {
    super(props);
    this.state = {text: "Hello World 3", clicked: false};
  }

  handleClick(e){

    if(this.state.clicked) {
      this.setState({text: "Hello World 3", clicked: false});
    }
    else {
      this.setState({text: "Hello World 3 - clicked", clicked: true});
    }


  }

  render() {
    return <div onClick={ this.handleClick.bind(this) }>{this.props.name} - {this.state.text}</div>;
  }
};
