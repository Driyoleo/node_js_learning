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

  function correction1(e){
    console.log(e)
    document.getElementById("fnm").innerText = `${e}`
    return true
  }
  function correction2(e){
    console.log(e)
    document.getElementById("snm").innerText = `${e}`
    return true
  }

  return (
    <>
    <form action='' onSubmit={handleSubmit((data)=>{console.log(data)})}>
      <input {...register("firstname" ,{required: {value : true , message: "this field is required"} , minLength : {value : 3 , message : "min length is 3"} , maxLength: {value : 15 , message : "max length is 15"}})} type="text" placeholder='firstname' />
      <p id="fnm"></p>
      {errors.firstname && correction1(errors.firstname.message)}

      <input {...register("secondname", {required: {value : true , message: "this field is required"} , minLength : {value : 3 , message : "min length is 3"} , maxLength: {value : 15 , message : "max length is 15"}})} type="text" placeholder='secondname' />
      <p id="snm"></p>
      {errors.secondname && correction2(errors.secondname.message)}
      <input type="submit" value="submit" />
    </form>
    </>
  )
}

export default App
