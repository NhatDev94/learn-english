import React, { useContext } from 'react'
import Table from '../components/Table'
import { VocabularyContext } from '../Provider'

function Home(props) {
    const context = useContext(VocabularyContext)
    
    return(
        <div className='home'>
            <Table data={context.all} />
        </div>
    )
}

export default Home