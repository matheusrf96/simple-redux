import React from "react"
import { connect } from "react-redux"

import Card from './Card'

const Draw = (props) => {
    const { min, max } = props

    return (
        <Card title="Numbers Draw" purple>
            <div className="Interval">
                <span>
                    <span>Result: </span>
                    <strong>{ parseInt(Math.random() * (max - min)) + min }</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Draw)
