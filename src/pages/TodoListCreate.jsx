import { Form, Formik } from 'formik'
import { createDataRequest } from '../api/todolist.api'
import { useTodoList } from '../context/TodoListContext'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const TodoListCreate = () => {

    const { updateData, getOnlyData } = useTodoList()

    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const data = async () => {
            if (params.id) {
                const response = await getOnlyData(params.id)
                setTask({
                    title: response.title,
                    description: response.description
                })
            }
        }
        data()
    }, [])

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-bold my-5'>Task Create</h2>

            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    try {
                        if (params.id) {
                            await updateData(params.id, values)
                            navigate('/')
                        } else {
                            const response = await createDataRequest(values)
                            console.log(response)
                        }
                        actions.resetForm()
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <Form onSubmit={handleSubmit} className='mt-10 flex flex-col w-2/4 gap-3'>
                        <input className='p-2 rounded-md' type="text" name='title' placeholder='Titulo' value={values.title} onChange={handleChange} />
                        <textarea className='resize-none p-2 rounded-md' name="description" rows="4" placeholder='Descripción' value={values.description} onChange={handleChange}></textarea>
                        <button className='bg-blue-500 text-white rounded-md py-2 font-bold' type='submit'>Guardar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export { TodoListCreate }