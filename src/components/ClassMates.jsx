import React, { useState, useEffect} from 'react'

export default function ClassMates(props) {

    let tableHeaders = ['First', 'Last', 'ID']

    const [people, setPeople] = useState([])

useEffect(() => {
    fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data => {
            let classData = data
            setPeople(classData)
        })
})


  return (
    <div className='row py-3'>
            <h4 className="text-center">Students</h4>
            <table className='table table-success table-striped mt-3'>  
            <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>     
                <tbody>
                    {people.map((guys, idx) => {   
                        return (<tr key={idx}>
                            <th>{guys.first_name}</th>
                            <td>{guys.last_name}</td>
                            <td>{guys.id}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    
  )
}
