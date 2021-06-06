import React,{Component} from 'react'
import PropTypes from "prop-types";

class Button extends Component{
    static propTypes={
            name: PropTypes.string,
            //orange: PropTypes.bool,
            //wide: PropTypes.bool,
            clickHandler: PropTypes.func,
        }
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };
    render() {
    
        return (
          <div >
            <button onClick={this.handleClick}>  {this.props.name}   </button>
          </div>
        );
      }
}
export default Button;
