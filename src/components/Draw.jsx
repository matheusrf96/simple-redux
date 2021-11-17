import React from "react"

import Card from './Card'

const Draw = (props) => {
    const { min, max } = props

    return (
        <Card title="Numbers Draw" purple>
            <div className="Interval">
                <span>
                    <span>Result: </span>
                    <strong>{ parseInt(Math.random() * (max - min)) + 1 }</strong>
                </span>
            </div>
        </Card>
    )
}

export default Draw