import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import firebase from "firebase";
import ReactHtmlParser from 'react-html-parser';


const ref = firebase.firestore().collection('posts');

export default function Post() {
    const [ notes, setNotes ] = useState([]);

    const { id } = useParams()

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

    }, [id]);

    let p = Promise.resolve(notes);
    p.then(function(v) {
    });

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
            <div className="post-content-view " key={post.id}>
                <h1 className="title">{post.title}</h1>
                <h3 className="title">{post.subtitle}</h3>
                <br/><hr/><br/>
                <content className="article">{ReactHtmlParser(post.article)}</content>
                <br/><hr/><br/>
                <div className="credits">
                    <h5 className="author"><b>Por: {post.author} em {dataFormatada}</b></h5>
                    {/*<h5 className="author date"> Data de publicação: {dataFormatada}</h5>*/}
                </div>
            </div>
        )
    });

    return <div className="blog">{posts}</div>;
}