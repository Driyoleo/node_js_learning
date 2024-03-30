/* eslint-disable no-unused-vars */
import './App.css'
import {useForm} from "react-hook-form"
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <>
    <form action='' onSubmit={handleSubmit((data)=>{console.log(data)})}>
      <input {...register("firstname")} type="text" placeholder='firstname' />
      <input {...register("secondname")} type="text" placeholder='secondname' />
      <input type="submit" value="submit" />
    </form>
    </>
  )
}

export default App
