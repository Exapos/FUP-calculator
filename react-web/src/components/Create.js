import React from 'react'
import PropTypes from 'prop-types'

function Create({label}) {
  return (
    <div className='create'>
        <form>
            <label>
                <input type="text" placeholder={label}/>
            </label>
            <select>
                <option value="Bytes">Bytes[B/s]</option>
                <option value="Kilobytes">Kilobytes[KB/s]</option>
                <option value="Megabytes">Megabytes[MG/s]</option>
                <option value="Gigabytes">Gigabytes[GB/s]</option>
                <option value="Terabytes">Terabytes[TB/s]</option>
                <option value=""></option>
                <option value="Bits">Bits[b/s]</option>
                <option value="Kilobits">Kilobits[Kb/s]</option>
                <option value="Megabits">Megabits[Mb/s]</option>
                <option value="Gigabits">Gigabits[Gb/s]</option>
                <option value="Terabits">Terabits[Tb/s]</option>
            </select>
        </form>
    </div>
  )
}

Create.defaultProps = {
    title: "Text label",
}

Create.propTypes = {
    title: PropTypes.string,
}

export default Create