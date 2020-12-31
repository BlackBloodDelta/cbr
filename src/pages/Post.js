import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import firebase from "firebase";
import {render} from "@testing-library/react";

const ref = firebase.firestore().collection('posts');

export default function Post() {
    const [ notes, setNotes ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const { id } = useParams()
    let data = [],
    note = [];

    useEffect(() => {
        return ref.doc(''+ id +'')
            .get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    const list = [];
                    const { author, date, title, subtitle, article} = doc.data();
                    list.push({
                        id: doc.id,
                        author,
                        date,
                        title,
                        subtitle,
                        article
                    });

                    setNotes(list);

                    console.log("LIST", list)

                    return list;
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });

    }, []);
    console.log("notes",notes)

    let p = Promise.resolve(notes);
    p.then(function(v) {
        data = v;
    });

    const posts = notes.map(post => {
        console.log("posts",post)
        return (
            <div className="post-content-view " key={post.id}>
                <h1 className="title">{post.title}</h1>
                <h3 className="title">{post.subtitle}</h3>

                <content className="article">{post.article}</content>

                <div className="credits">
                    <h5 className="author">Autor: {post.author}</h5>
                    <h5 className="author date"> Data de publicação: {post.date}</h5>
                </div>
            </div>
        )
    });

    return <div className="blog">{posts}</div>;
}