import React,{useContext} from 'react'
import classes from './Header.module.css'
import ThemeContext from '../ThemeContext'

function Posts() {
    const {theme} = useContext(ThemeContext)

    const posts = [
        {
            id:'001',
            title:'post1 title',
            decs: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            id:'002',
            title:'post2 title',
            decs: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            id:'003',
            title:'post3 title',
            decs: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
    ]

    const cl = `${classes['post-background']} ${theme==='dark'?classes['post-dark']:null}`
    return (
        <div className={cl}>
            {
                posts.map(post=>{
                    return <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.decs}</p>
                    </div>
                })
            }
            
        </div>
    )
}

export default Posts
