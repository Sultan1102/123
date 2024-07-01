import React, { useState } from 'react';

function DishForm({adddate}) {
    const [formData, setFormData] = useState({
        name: '',
        Email: '',
        Active: '',
        Role: '',
    })

    const onChange = ((name, value) => {
        setFormData(prev => ({...prev, [name]: value}))

    })

    console.log(formData.name)
    return (
        <>
            <div>
                <input type="text" onChange={(item) => onChange("name", item.target.value)}/>
                <input type="text" />
                <input type="radio"/>
                <option></option>
                <button onClick={() => adddate(formData)}></button>
            </div>
        </>
    )
}

export default DishForm