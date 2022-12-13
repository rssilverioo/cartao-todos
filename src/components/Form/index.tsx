import { useForm,  } from "react-hook-form";
import axios from 'axios'
import router from "next/router";

type Inputs = {
  id: number,
  nome: string,
};


export default function Form() {
  const { register, watch, handleSubmit, formState: {errors} } = useForm<Inputs>();

  const onSubmit = (data: Inputs,) => {
    const { id, nome } = data
    axios.post("http://localhost:3002/usuarios", data)
    .then((response, ) => {
      response.data
      console.log("resposta do servidor ===>", response.data.id)
    router.push(`/ticket/${response.data.id}`)
    }).catch(() => {
      console.log("error")
    })

  }
  return ( 
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
          <div>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              {...register("nome")}
              name="nome"
              className="block w-full rounded-md capitalize  border-gray-300 pr-10 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
              placeholder="Nome completo"
              aria-invalid="true"
            />
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div> */}
          </div>
          {/* <p className="mt-2 text-sm text-red-600" id="email-error">
            Your password must be less than 4 characters.
          </p> */}
        </div>
        <div className="flex items-center mt-4 justify-center">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#0D6A35] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#084924] duration-100	 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    GARANTIR MEU CARTÃO GRATUITAMENTE
                  </button>
                 
                </div>
      </div>
    </form>
  );
}