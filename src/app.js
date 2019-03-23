import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
import AppRouter from './routers/AppRouter'
import storeExport from './store/expensesStore'


const store = storeExport()

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'))
