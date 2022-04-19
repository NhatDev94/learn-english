import React, { useContext } from 'react'
import Table from '../components/Table'
import { VocabularyContext } from '../Provider'

function Home(props) {
    const {all} = useContext(VocabularyContext)
    
    return(
        <div className='home'>
            <Table data={all} />
        </div>
    )
}

export default Home