import { Error } from "@/components/Error"
import { DraftUser } from "@/types"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

const INITIAL_STATE = {
  username: "",
  lastname: "",
  password: "",
  phonenumber: "",
  birthdate: "",
}

export const RegisterUser = () => {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ defaultValues: INITIAL_STATE })

  const navigate = useNavigate()

  const onSubmit = (data: DraftUser) => {
    if (!data) return
    navigate("/")
  }

  return (
    <>
    <form
      className="max-w-sm md:max-w-lg mx-auto flex flex-col space-y-5 mt-20 border-2 border-gray-700 p-5 rounded shadow bg-white"
      onClick={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="username">Nombre</label>
        <input
          type="text"
          id="username"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("username", { required: "El nombre es requerido" })}
        />
        {errors.username && <Error>{errors.username.message}</Error>}
      </div>
      <div>
        <label htmlFor="lastname">Apellido</label>
        <input
          type="text"
          id="lastname"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("lastname", { required: "El apellido es requerido" })}
        />
        {errors.lastname && <Error>{errors.lastname.message}</Error>}
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("password", { 
            required: "La contraseña es requerida",
            minLength: { 
              value: 8, message: "La contraseña debe tener al menos 8 caracteres" 
            }
          })}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
      </div>
      <div>
        <label htmlFor="confirmpassword">Repetir Contraseña</label>
        <input
          type="password"
          id="confirmpassword"
          className="bg-slate-200 rounded-sm p-1 w-full" 
        />
      </div>
      <div>
        <label htmlFor="phonenumber">Telefono de contacto</label>
        <input
          type="number"
          id="phonenumber"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("phonenumber", { 
            required: "El telefono de contacto es requerido",
            minLength: { 
              value: 8, 
              message: "El telefono de contacto debe tener al menos 8 caracteres" 
            }
          })}
        />
        {errors.phonenumber && <Error>{errors.phonenumber.message}</Error>}
      </div>
      <div>
        <label htmlFor="birthdate">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthdate"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("birthdate", { 
            required: "La fecha de nacimiento es requerida" })}
        />
        {errors.birthdate && <Error>{errors.birthdate.message}</Error>}
      </div>
      <input
        type="submit"
        value="Resgistrarse"
        className="bg-cello-500 w-full py-2 text-white uppercase font-bold tracking-wide cursor-pointer hover:bg-cello-600 transition-all"
      />
    </form>
    </>
  )
}
