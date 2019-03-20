import React from 'react'



const EditExpensePage = (props) => {
    return (
        <div>
            Edit Page { props.match.params.id }
        </div>
    )
}

export default EditExpensePage