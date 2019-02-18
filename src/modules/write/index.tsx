import * as React from 'react'
import { Editor, EditorStateGenerator, ToolBar } from 'bb-editor'
import 'bb-editor/dist/bb-editor.css'
import { EditorState } from 'draft-js';

class Write extends React.Component {
    editorState = EditorStateGenerator()

    afterChange = (editorState: EditorState) => {
        console.log(editorState)
        this.setState({
            editorState
        })
    }
    render() {
        return (
            <div className="write">
                <h2>富文本编辑器</h2>
                <Editor
                    value={this.editorState}
                    afterChange={this.afterChange}>
                    <ToolBar>
                        <ToolBar.Buttons.Bold />
                        <ToolBar.Buttons.Italic />
                        <ToolBar.Buttons.UnderLine />
                    </ToolBar>
                </Editor>
            </div>
        )
    }
}

export default Write