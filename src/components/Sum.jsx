import React from "react"

import Card from './Card'

const Sum = (props) => {
    return (
        <Card title="Numbers Sum" blue>
            <div className="Interval">
                <span>
                    <span>Result: </span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sum