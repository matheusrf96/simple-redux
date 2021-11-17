import React from "react"

import Card from './Card'

import './Interval.css'

const Interval = (props) => {
    const { min, max }= props

    return (
        <Card title="Numbers interval" red>
            <div className="Interval">
                <span>
                    <strong>Min: </strong>
                    <input type="number" value={ min } min={0} onChange={(e) => props.onMinChanged(+e.target.value)} />
                </span>

                <span>
                    <strong>Max: </strong>
                    <input type="number" value={ max } min={0} onChange={(e) => props.onMaxChanged(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

export default Interval