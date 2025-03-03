import { PropsWithChildren } from "react"

export const Error = ({ children }: PropsWithChildren) => {

  return (
    <p className="text-red-600 text-center font-bold text-lg">{children}</p>
  )
}
