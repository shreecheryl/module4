import React from 'react'
// import ReactDOM from 'react-dom'  // Need this is using the ReactDOM.render code below
import EmployeeList from './EmployeeList.jsx'

// If you get a create root error msg use this instead
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('content'))
root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>
)

// ReactDOM.render(
//     <React.StrictMode>
//         <EmployeeList />
//     </React.StrictMode>,
//     document.getElementById('content')
// )