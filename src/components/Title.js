import React from "react"
import PropTypes from 'prop-types';

const Title = ({text}) => (
  <div className="title-scrabble">
    <div className="text">
      {text}
    </div>
  </div>
)

Title.defaultProps = {
  text: ""
}

Title.propTypes = {
  text: PropTypes.string
}

export default Title;