import React from 'react'
import AnotherDummy from '../anotherDummy/AnotherDummy'
import './dummy.scss'

const Dummy = () => {
    return (
        <div>
            <h2 className="dummy__title--red">I am a dummy</h2>
            <AnotherDummy />
        </div>
    )
}

export default Dummy
