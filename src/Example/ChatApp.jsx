import { useState, useEffect } from 'react'

const lessons = [
    {
        id: 1,
        name: 'React JS'
    },
    {
        id: 2,
        name: 'Vue JS'
    },
    {
        id: 3,
        name: 'Anguler JS'
    }
]

const ChatApp = () => {

    const [lessonId, setLessonId] = useState(1)

    return (
        <div>
            <ul>
                {lessons.map(lesson => {
                    return (
                        <li
                            key={lesson.id}
                            style={{
                                color: lessonId === lesson.id ?
                                    'red' :
                                    '#fff'
                            }}
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ChatApp