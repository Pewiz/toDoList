import {Container, Title} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import TodoForm from './ToDoForm'
import TodoList from './toDoList'

export default function TodoApp(){
    const [tareas, setTareas] = useLocalStorage({ key: 'tareas', defaultValue: [] });

    const addTask = (task) => {
        setTareas((prevTareas) => [...prevTareas, { id: prevTareas.length, titulo: task, completado: false }]);
    }

    const toggleTask = (id) => {
        setTareas((prevTareas) => prevTareas.map((task) => task.id === id ? { ...task, completado: !task.completado } : task));
    }

    const removeTask = (id) => {
        setTareas((prevTareas) => prevTareas.filter((task) => task.id !== id));
    }

    return (
        <Container size="sm">
        <Title style={{ textAlign: 'center', marginTop: 20 }}>Lista de Tareas</Title>

        <TodoForm nuevaTarea={addTask} />

        <TodoList tareas={tareas} accionTarea={toggleTask} eliminarTarea={removeTask} />
        </Container>
  );
}