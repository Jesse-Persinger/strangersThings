import { useState, useEffect } from 'react';
import { fetchAllPost } from '../routes/Post';
import Nav from './Nav'
import Card from './Card';

export default function Home() {

    const [posts, setPost] = useState([]);
    const [postError, setPostError] = useState(false);
    const [loadedPost, setLoadedPost] = useState(false);
    const [logged, setLogged] = useState(false);

    const queryParams = new URLSearchParams(window.location.search)
    const username = queryParams.get("username")

    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetchAllPost()
                setPost(response)
                setLoadedPost(true)
            } catch (error) {
                setPostError(error)
                setLoadedPost(false)
            }
        }

        getPost();

        if (localStorage.getItem(username)) {
            console.log(localStorage.getItem(username))
            setLogged(true)
        }

    }, []);

    return (
        <>
            <Nav />
            {
                loadedPost && !postError && (
                    posts.map((post) => <Card key={post._id} logged={logged} post={post} />)
                )
            }
        </>
    );
}