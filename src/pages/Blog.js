import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

const ref = firebase.firestore().collection('posts');

export default function Blog() {
    const [ notes, setNotes ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        return ref.get().then(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { author, date, title, subtitle, article, call} = doc.data();
                list.push({
                    id: doc.id,
                    author,
                    date,
                    title,
                    subtitle,
                    article,
                    call
                });
            });

            setNotes(list);

            console.log("Data", notes);

            if (loading) {
                setLoading(false);
            }
        });
    }, []);
    if (loading) {
        return null;
    }

    const posts = notes.map(post => {
        return (
            <div className="post-listing" key={post.id}>
                <h1>{post.title}</h1>
                <h5>{post.subtitle}</h5>
                <hr/>
                <span>{post.call}</span>
                <hr/>
                <h5>Post publicado por: {post.author}</h5>
                <h5>Data de publicação: {post.date}</h5>
                <Link to={"/post/" + post.id} key={post.id}><button>Leia Maix</button></Link>
            </div>
        );
    });

    return <div className="blog">{posts}</div>;
}