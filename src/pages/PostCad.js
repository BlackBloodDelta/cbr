import React, {useState} from "react";
import firebase from "firebase";
import {makeStyles} from "@material-ui/core/styles";

export default function PostCad() {

    const [ title, setTitle ] = useState('');
    const [ subtitle, setSubtitle ] = useState('');
    const [ call, setCall ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ date, setDate ] = useState('0000-00-00');
    const [ article, setArticle ] = useState('');
    const [ err, setErr ] = useState('');

    const ref = firebase.firestore().collection('posts');

    async function addNote() {

        if (title.length > 0 && subtitle.length > 0 && call.length > 0 && author.length > 0 && date.length > 0 && article.length > 0){
            await ref.add({
                title: title,
                subtitle: subtitle,
                call: call,
                author: author,
                date: date,
                article: article,
            });
            setTitle('');
            setSubtitle('');
            setCall('');
            setAuthor('');
            setDate('');
            setArticle('');
        } else {
            setErr('All the camps must be filled');
        }

    }

    return (
        <section>
            <div className="content">
                <div className="cadContainer">
                    <h2>Fazer a publicação de um novo post</h2>

                    <label>Título</label>
                    <input type="text" autoFocus required value={title} onChange={(e) => setTitle(e.target.value)}/>

                    <label>Sub Título</label>
                    <input type="text" autoFocus required value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>

                    <label>Chamada para o Post</label>
                    <input type="text" autoFocus required value={call} onChange={(e) => setCall(e.target.value)}/>

                    <label>Autor</label>
                    <input type="text" autoFocus required value={author} onChange={(e) => setAuthor(e.target.value)}/>

                    <label>Data</label>
                    <input type="date" required value={date} onChange={(e) => setDate(e.target.value)}/>

                    <label>Escreva aqui o post</label>
                    <textarea value={article} onChange={(e) => setArticle(e.target.value)}/>

                    <div className="btnContainer">
                        <button onClick={addNote}>Salvar</button>
                        <label>{err}</label>
                    </div>
                </div>
            </div>
        </section>
    );
}