import React from "react"
import { connect } from "react-redux"

import Card from './Card'

import './Interval.css'

const Interval = (props) => {
    const { min, max } = props

    return (
        <Card title="Numbers interval" red>
            <div className="Interval">
                <span>
                    <strong>Min: </strong>
                    <input type="number" value={ min } />
                </span>

                <span>
                    <strong>Max: </strong>
                    <input type="number" value={ max } />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProps)(Interval)
