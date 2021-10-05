import { useState } from 'react';
import {Item} from './types/Item'
import * as C from './App.styles';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea'

const App = () => {

  const [list, setList] = useState<Item[]>([
   { id: 1, name: 'Fazer café', done: false},
   { id: 1, name: 'Caminhar', done: false},
   { id: 3, name: 'Ir na padaria', done: false},
   { id: 4, name: 'Inciar rotina de trabalho', done: false},
  ]);

const handleAddtask = (taskName: string) =>{
    let newList = [...list];
    newList.push({
    id: list.length + 1,
    name: taskName,
    done: false
  })
  setList(newList);
}
  return (
  <C.Container>
    <C.Area>
      <C.Header>Lista de Tarefas</C.Header>

      {/* Área de adicionar nova tarefa */}
      <AddArea 
        onEnter={handleAddtask}
      />

      {/* Área que lista nova tarefa */}
      {list.map((item, index)=> (
          <ListItem  key={index} item={item} />
      ) )}
    </C.Area>
    </C.Container>
  );

}

export default App;