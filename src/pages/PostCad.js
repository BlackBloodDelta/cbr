import React, {useState} from "react";
import firebase from "firebase";
import { Editor } from "@tinymce/tinymce-react";

export default function PostCad({user}) {

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
                call: call,
                author: author,
                date: date,
                article: ""+article+"",
            });
            setTitle('');
            setSubtitle('');
            setCall('');
            setAuthor('');
            setDate('');
            setArticle('');
            window.location.href = "/blog";
        } else {
            setErr('Todos os campos devem ser preenchidos.');
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
                    <input type="text" required value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>

                    <label>Chamada para o Post</label>
                    <input type="text" required value={call} onChange={(e) => setCall(e.target.value)}/>

                    <label>Autor</label>
                    <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}/>

                    <label>Data</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>

                    <label>Escreva aqui o post</label>
                    <Editor
                        apiKey="6i704em5efcj6vdsiaq7iz2n3afntdc06nqscj2cugn9ky31"
                        initialValue="<p>Initial content</p>"
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist autolink lists link image',
                                'charmap print preview anchor help',
                                'searchreplace visualblocks code',
                                'insertdatetime media table paste wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent image | help'
                        }}
                        onChange={(e) => setArticle(e.target.getContent())}
                    />
                    {/*<textarea value={article} onChange={(e) => setArticle(e.target.value)}/>*/}

                    <div className="btnContainer">
                        <button onClick={addNote}>Salvar</button>
                        <label>{err}</label>
                    </div>
                </div>
            </div>
        </section>
    );
}