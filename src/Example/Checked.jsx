import { useState } from 'react'

const Checked = () => {
    const courses = [
        { id: 1, name: 'HTML, CSS' },
        { id: 2, name: 'PHP' },
        { id: 3, name: 'Vue' },
        { id: 4, name: 'React' },
    ]

    const [radio, setRadio] = useState()
    const [checked, setChecked] = useState([])

    const handleChecked = (id) => {
        setChecked(pre => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...pre, id]
            }
        })
    }
    console.log(checked)

    const handleSubmit = () => {
        console.log({ id: radio })
    }

    return (
        <div style={{ padding: 20 }}>
            {courses.map(course => (
                <div key={course.id}>
                    <input type="radio"
                        checked={radio === course.id}
                        onChange={() => setRadio(course.id)}
                    />
                    <input type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Change</button>
        </div>
    )
}

export default Checked;