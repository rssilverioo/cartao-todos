import { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Form from '../Form'
export interface ModalPropTypes {
    handleClose: () => void
    show: boolean
}

export const ModalForm: FC<ModalPropTypes> = ({
  handleClose,
  show,
}) => {

  return (
   
    <Transition.Root show={show} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={handleClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-[#0D6A35] bg-opacity-75 backdrop-blur-sm	 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#F5F5F5] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="mx-auto 	duration-100	 flex h-12 w-12 text-gray-500 flex-shrink-0 items-center hover:text-gray-300 justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"
                    onClick={() => handleClose()}
                  >
                    <span className="sr-only">Close</span>
                        <p className="text-green-500"><img  src="icon/close.svg" alt="" width={32} height={32}/></p>
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-xl mt-5 font-medium leading-6 text-gray-900">
                    Preencha os dados abaixo e peça agora seu Cartão Eco Diagnósticos, GRÁTIS!
                    </Dialog.Title>
                    <div className="mt-4 flex justify-center items-center">
                      <Form />
                    </div>
                  </div>
                </div>

              </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
  )
}
