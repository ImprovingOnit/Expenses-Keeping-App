import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from './../actions/auth'


export const LoginPage = ({ startLogin }) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify App</h1>
                <p>Knowing your expenses is easier than before</p>
                <button onClick={startLogin}>Login</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)