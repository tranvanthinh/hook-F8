import { useState, useEffect } from 'react'


const tabs = ['posts', 'comments', 'albums']

const useEffectReact = () => {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        // document.title = title

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeaddEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div>
            {/* <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /> */}

            {tabs.map(tab => {
                return (
                    <button
                        key={tab}
                        style={type === tab ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        } : {}}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>

                )
            })}
            {posts.map(post => {
                return (
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>
                )
            })}
            {showGoToTop &&
                <button
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20
                    }}>
                    Go To Home
                </button>
            }
        </div>
    )
}

export default useEffectReact;