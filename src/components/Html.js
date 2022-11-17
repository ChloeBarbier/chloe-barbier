import React from "react"
import PropTypes from 'prop-types';

const DivEnd = ({tab}) => (
  <div className={`row ${tab}`}>
    <span className='grey'>{'</'}</span>
    <span className='blue'>div</span>
    <span className='grey'>{'>'}</span>
  </div>
)

const DivStart = ({tab, text}) => (
  <div className={`row ${tab}`}>
    <span className='grey'>{'<'}</span>
    <span className='blue'>div </span>
    <span className='lightblue'>class=</span>
    <span className='orange'>&quot;{text}&quot;</span>
    <span className='grey'>{'>'}</span>
  </div>
)

const Text = ({tab, text}) => (
  <div className={`row text-typing ${tab}`}>
    <p><span className='white'>{text}</span></p>
  </div>
)

DivEnd.defaultProps = {
  tab: ""
}

DivEnd.propTypes = {
  tab: PropTypes.string
}

DivStart.defaultProps = {
  tab: "",
  text: ""
}

DivStart.propTypes = {
  tab: PropTypes.string,
  text: PropTypes.string
}

Text.defaultProps = {
  tab: "",
  text: ""
}

Text.propTypes = {
  tab: PropTypes.string,
  text: PropTypes.string
}

export {
  DivEnd,
  DivStart,
  Text
}