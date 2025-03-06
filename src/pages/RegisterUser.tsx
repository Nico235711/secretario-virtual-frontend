import { Error } from "@/components/Error"
import { registerUser } from "@/services/registerUser"
import { DraftUser } from "@/types"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

const INITIAL_STATE = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
  dateOfBirth: "",
}

const routes = Object.freeze({
  registerUser: "codigo-registro"
})

export const RegisterUser = () => {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<DraftUser>({ defaultValues: INITIAL_STATE })

  const navigate = useNavigate()

  const onSubmit = async (data: DraftUser) => {
    if (!data) return
    
    await registerUser(routes.registerUser, data)
    navigate("/")
  }

  return (
    <>
    <form
      className="max-w-sm md:max-w-lg mx-auto flex flex-col space-y-5 mt-20 border-2 border-gray-700 p-5 rounded shadow bg-white"
      onClick={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("name", { required: "El nombre es requerido" })}
        />
        {errors.name && <Error>{errors.name.message}</Error>}
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("email", { 
            required: "El email es requerido",
            pattern: {
              value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              message: "Formato de mail inválido"
            }
          })}
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
        <label htmlFor="phone">Telefono de contacto</label>
        <input
          type="number"
          id="phone"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("phone", { 
            required: "El telefono de contacto es requerido",
            minLength: { 
              value: 8, 
              message: "El telefono de contacto debe tener al menos 8 caracteres" 
            }
          })}
        />
        {errors.phone && <Error>{errors.phone.message}</Error>}
      </div>
      <div>
        <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
        <input
          type="date"
          id="dateOfBirth"
          className="bg-slate-200 rounded-sm p-1 w-full" 
          {...register("dateOfBirth", { 
            required: "La fecha de nacimiento es requerida" })}
        />
        {errors.dateOfBirth && <Error>{errors.dateOfBirth.message}</Error>}
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
