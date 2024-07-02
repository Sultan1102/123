import React, { useState } from 'react';

function UserForm({onAddUsers}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        active: false,
        role: '',
    })

    // const onChange = ((name, value) => {
    //     setFormData(prev => ({...prev, [name]: value}))
    // })

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onAddUsers(formData)
        setFormData({
            name: '',
            email: '',
            active: false,
            role: '',
        })

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        name='name'
                        type="text"
                        value={formData.name}
                        onChange={onChange}
                        // onChange={(item) => onChange("name", item.target.value)}
                        placeholder="Name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        name='email'
                        type="text"
                        onChange={onChange}
                        value={formData.email}
                        // onChange={(item) => onChange("email", item.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div>
                <input
                        type="checkbox"
                        name="active"
                        checked={formData.active}
                        onChange={onChange}
                    />
                    Active
                </div>
                <div>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={onChange}
                    >
                        <option value="">Select role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <button type="submit" onClick={() => onAddUsers(formData)}>Add</button>
            </form>

        </>
    )
}

export default UserForm