import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class Test extends React.Component {
    handleEditorChange = (e) => {
        console.log(
            e.target.getContent()
        );
    }

    render() {
        return (
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
                        'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help'
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
}

export default Test;