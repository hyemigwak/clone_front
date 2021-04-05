import React from 'react'

const Detail = (props) => {
    const id = props.match.params.id;

    return (
        <div>
            {id}
        </div>
    )
}

export default Detail
