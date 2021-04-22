import React, {Component} from 'react'


class Check extends Component {
    constructor(props) {
      super(props);
      this.state = {
        c: false,
        cpp: false,
        java: false,
        python: false,
        checked: ''
      };
  
      this.change = this.change.bind(this);
      this.click = this.click.bind(this);
    }
  
    change(event) {
      this.setState({
          [event.target.name] : event.target.checked
      })
    }

    click() {
        var keys = []
        var selected = []
        for (var x in this.state) {
            keys.push(x)
        }
        for (var key of keys) {
            if(this.state[key] === true) {
                selected.push(key)
            }
        }

        var strSelected = 'Selected: '
        if(selected.length === 0){
            this.setState({
                checked: ''
            })
            return
        }

        for (key of selected) {
            strSelected+= ' ' + key
        }

        this.setState({
            checked: strSelected
        })
    }
  
    render() {
      const {checked} = this.state
      return (
           <div>
                <p>C <input
                    name="c"
                    type="checkbox"
                    checked={this.state.c}
                    onChange={this.change} /></p>
                <p>CPP <input
                    name="cpp"
                    type="checkbox"
                    checked={this.state.cpp}
                    onChange={this.change} /></p>
                <p>Java <input
                    name="java"
                    type="checkbox"
                    checked={this.state.java}
                    onChange={this.change} /></p>
                <p>Python <input
                    name="python"
                    type="checkbox"
                    checked={this.state.python}
                    onChange={this.change} /></p>
                <p>
                    <button onClick={this.click}>Submit</button>
                </p>
                <p>
                    {checked === '' ? '' : checked}
                </p>
                
           </div>
      );
    }
  }
  export default Check