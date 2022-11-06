import React from 'react'
import PropTypes from 'prop-types'

const Header = ({id}) => {
  return (
    <header>
        <h1 id={id}>Fup kalkulačka na toniho přijemné příklady</h1>
    </header>
  )
}

Header.defaultProps = {
    title: "header"
}

Header.propTypes = {
  id: PropTypes.string,
}


export default Header