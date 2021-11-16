import React from "react"

import Card from './Card'

const Draw = (props) => {
    return (
        <Card title="Numbers Draw" purple>
            <div className="Interval">
                <span>
                    <span>Result: </span>
                    <strong>7</strong>
                </span>
            </div>
        </Card>
    )
}

export default Draw