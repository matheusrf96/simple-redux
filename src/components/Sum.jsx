import React from "react"

import Card from './Card'

const Sum = (props) => {
    const { min, max } = props

    return (
        <Card title="Numbers Sum" blue>
            <div className="Interval">
                <span>
                    <span>Result: </span>
                    <strong>{ min + max }</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sum