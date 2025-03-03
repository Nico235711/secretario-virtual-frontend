import { Error } from "@/components/Error"
import { useForm } from "react-hook-form"
import { Link } from "react-router"

const INITIAL_STATE = {
  email: "",
  password: "",
}

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ defaultValues: INITIAL_STATE })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}
      className="max-w-sm md:max-w-lg mx-auto flex flex-col space-y-5 mt-20 border-2 border-gray-700 p-5 rounded shadow bg-white"
      noValidate
    >
      <div className="space-y-2">
        <label htmlFor="email" className="font-bold text-lg">Email</label>
        <div>
          <input
            type="email"
            id="email" 
            className="bg-slate-200 rounded-sm p-1 w-full"
            {...register("email", { 
              required: "El correo es requerido", 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "El correo no es valido",
              }
            })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="font-bold text-lg">Contraseña</label>
        <div>
          <input
            type="password"
            id="password" 
            className="bg-slate-200 rounded-sm p-1 w-full"
            {...register("password", {
              minLength: { 
                value: 8, message: "La contraseña debe tener al menos 8 caracteres" 
              },
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </div>
      </div>
      <input
        type="submit"
        className="bg-cello-500 w-full py-2 text-white uppercase font-bold tracking-wide cursor-pointer hover:bg-cello-600 transition-all" 
        value="Iniciar Sesión"
      />
      <Link
        to="/register"
        className="text-center text-lg"
      >
        ¿No tenes cuenta? <span className="text-cello-500 font-bold">Comienza creando una aquí</span>
      </Link>
    </form>
  )
}
