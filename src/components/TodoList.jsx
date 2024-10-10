/* eslint-disable react/prop-types */
import {Stack, Checkbox, Button, Paper} from '@mantine/core'

export default function TodoList({tareas, accionTarea, eliminarTarea}){
    return(
        <Stack
            h={300}
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="flex-start"
            gap="xs"  
        >
           {tareas.map((tarea) => (
            <Paper
                key={tarea.id} 
                shadow="xs" 
                withBorder p="xs" 
                style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                <Checkbox
                    color="green"
                    radius="xl"
                    size="lg"
                    label= {tarea.titulo}
                    checked= {tarea.completado}
                    onChange={() => accionTarea(tarea.id)}
                >

                </Checkbox>
                <Button
                    color="pink"
                    size="md"
                    radius="lg"
                    onClick={() => eliminarTarea(tarea.id)}
                >
                    Eliminar Tarea
                </Button>
            </Paper>
           ))}
        </Stack>
    )
}