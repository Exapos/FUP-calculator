import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

function Form({label, id,idText, option}) {
    const [size, setSize] = useState('')
    const [download, setDownload] = useState('')
    const [agrega, setAgrega] = useState('')
    const [time, setTime] = useState('')
    
    const handleSubmit = (e) => {
    e.preventDefault();
    const input = {size, download, agrega, time}
    console.log(input)
    }

  return (
    <div className='create'>
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" placeholder="Velikost dat" id="__p__velikost_dat" value={size} onChange={(e) => setSize(e.target.value)}/>
            </label>
            <select id="dropdown_box_up">
                <option value="Bytes">Bytes [B/s]</option>
                <option value="Kilobytes">Kilobytes [KB/s]</option>
                <option value="Megabytes">Megabytes [MG/s]</option>
                <option value="Gigabytes">Gigabytes [GB/s]</option>
                <option value="Terabytes">Terabytes [TB/s]</option>
                <option value=""></option>
                <option value="Bits">Bits [b/s]</option>
                <option value="Kilobits">Kilobits [Kb/s]</option>
                <option value="Megabits">Megabits [Mb/s]</option>
                <option value="Gigabits">Gigabits [Gb/s]</option>
                <option value="Terabits">Terabits [Tb/s]</option>
            </select>
            
            <label>
                <input type="text" placeholder="Rychlost stahovaní" id="__p__rychlost_stahovani_"  value={download} onChange={(e) => setDownload(e.target.value)}/>
            </label>
            <select id="dropdown_box_down">
                <option value="Bytes">Bytes [B/s]</option>
                <option value="Kilobytes">Kilobytes [KB/s]</option>
                <option value="Megabytes">Megabytes [MG/s]</option>
                <option value="Gigabytes">Gigabytes [GB/s]</option>
                <option value="Terabytes">Terabytes [TB/s]</option>
                <option value=""></option>
                <option value="Bits">Bits [b/s]</option>
                <option value="Kilobits">Kilobits [Kb/s]</option>
                <option value="Megabits">Megabits [Mb/s]</option>
                <option value="Gigabits">Gigabits [Gb/s]</option>
                <option value="Terabits">Terabits [Tb/s]</option>
            </select>
            
            <label>
                <input type="text" placeholder="Agregace" id="__p__agregace"  value={agrega} onChange={(e) => setAgrega(e.target.value)}/>
            </label>
            
            <label>
                <input type="text" placeholder="Doba stahovani" id="__p__time"  value={time} onChange={(e) => setTime(e.target.value)}/>
            </label>
            
            <button id="output">Kalkulovat</button>
            
        </form>
    </div>
  )
}

Form.defaultProps = {
    title: "Text label",
    id: "Id label",
    idText: "Text Id Label",
    option: "Id option label",
}

Form.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    idText: PropTypes.string,
    option: PropTypes.string,
}

export default Form