import * as C from './styles';

import { useState, KeyboardEvent } from 'react';
import { on } from 'stream';


type Props = {
    onEnter: (taskName: string) => void
}

    export const AddArea = ({onEnter}: Props ) => {
    const [inputText, setInputText] = useState('');

    const handleyKeyUp = (e:KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);

            setInputText('');
        }
    }
    return(
        <C.Container>
            <div className="image">➕</div>
            <input 
            type="text"
            placeholder="Adicione uma tarefa"
            onChange={e=>setInputText(e.target.value)}
            onKeyUp={handleyKeyUp}

            
            />
        </C.Container>
    )
}