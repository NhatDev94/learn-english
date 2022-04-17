import React from 'react'
import LearnForm from '../components/LearnForm'

function Review(props) {

    return (
        <div className='review'>
            <LearnForm isReview={true} />
        </div>
    )
}

export default Review