import { useState } from 'react'

const Todos = () => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState(storageJobs ?? [])

    const handleTodo = () => {
        if (!todo) {
            alert("Ban them thong tin")
            return
        }
        setTodos(prev => {
            const newJobs = [...prev, todo]

            // Save to Local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setTodo('')
    }
    const handleDelete = (todo) => {
        setTodos((todos) => {
            let cur = todos.filter(item => item !== todo)
            let jsonJobs = JSON.stringify(cur)
            localStorage.setItem('jobs', jsonJobs)
            return cur
        })
    }

    return (
        <div>
            <input type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={handleTodo}>Add</button>
            <div>
                {todos && todos.length > 0 &&
                    todos.map((todo, index) => {
                        return (
                            <div style={{ display: 'flex' }} key={index}>
                                <li key={index}>{todo}</li> &nbsp;&nbsp;
                                <button onClick={() => window.confirm("Ban muon xoa") ? handleDelete(todo) : []}>Xoa</button>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Todos