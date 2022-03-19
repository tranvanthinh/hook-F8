import { useState } from 'react'

const ShowHide = () => {

    const [show, setShow] = useState(true)

    const handleToggleShowHide = () => {
        setShow(!show)
    }
    return (
        <div>
            <button onClick={() => handleToggleShowHide(!show)}>Togger</button>
            {show &&
                <div>Hello World</div>
            }
        </div>
    )
}

export default ShowHide