import {Button, Group, TextInput} from '@mantine/core'
import {useField} from '@mantine/form'

// eslint-disable-next-line react/prop-types
export default function TodoForm({nuevaTarea}){

    const validarEntrada = (valor) => {
        if(valor.trim() === ""){ //El metodo .trim elimina todo espacio en el texto " hola " = "hola"
            return "La tarea no puede estar vacia"
        }

        nuevaTarea(valor)
        field.reset()
    }
    const field = useField({
        initialValue: "",
        validate: (valor) => 
           (valor.trim() !== "" ? validarEntrada(valor) : "La tarea no puede estar vacia")
        
    })


    return(
        <Group position="apart">
            <TextInput
                {...field.getInputProps()}
                placeholder='Agregar una nueva Tarea'
                mb='md'
                flex={1} 
                style={{ marginTop: 25 }}   
            >

            </TextInput>
            <Button
            onClick={field.validate}
            >
                Agregar nueva Tarea
            </Button>

        </Group>
        
    )
}