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
                const { author, date, title, subtitle, article, call, tag} = doc.data();
                list.push({
                    id: doc.id,
                    author,
                    date,
                    title,
                    subtitle,
                    article,
                    call,
                    tag
                });
            });

            setNotes(list);

            if (loading) {
                setLoading(false);
            }
        });
    });
    if (loading) {
        return null;
    }

    function adicionaZero(numero){
        if (numero <= 9)
            return "0" + numero;
        else
            return numero;
    }

    const posts = notes.map(post => {

        let date = new Date(post.date);
        let dataFormatada = ((adicionaZero(date.getDate().toString())) + "/" + (adicionaZero(date.getMonth()+1)) + "/" + date.getFullYear());

        return (
            <div className="post-listing" key={post.id}>
                <span className="tag">{post.tag}</span>
                <h1><b>{post.title}</b></h1>
                <h5>{post.subtitle}</h5>
                <hr/>
                <span>{post.call}</span>
                <br/><br/>
                <h5>Por: {post.author} em {dataFormatada}</h5>
                <Link to={"/post/" + post.id} key={post.id}><button className="more">Leia Mais</button></Link>
                <div className="spacer">
                    <hr/>
                </div>
            </div>
        );
    });

    return <div className="blog">{posts}</div>;
}