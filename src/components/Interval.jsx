import React from "react"

import Card from './Card'

import './Interval.css'

const Interval = (props) => {
    return (
        <Card title="Numbers interval" red>
            <div className="Interval">
                <span>
                    <strong>Min: </strong>
                    <input type="number" value={0} />
                </span>

                <span>
                    <strong>Max: </strong>
                    <input type="number" value={10} />
                </span>
            </div>
        </Card>
    )
}

export default Interval