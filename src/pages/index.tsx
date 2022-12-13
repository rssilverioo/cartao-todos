import { Fragment, useState } from 'react'
import Image from "next/image";

import { Dialog, Transition } from '@headlessui/react'
import {ModalForm} from '../components/Modal'
export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <main className="lg:h-screen max-w-[480px] lg:max-w-[1240px] p-12 mx-auto flex items-center gap-16 flex-col lg:items-center justify-center lg:flex-row">
      <div className="max-w-[520px] text-center lg:text-left">
        <Image src="/logo.svg" alt="" width={228} height={63} />
        <strong className="text-neutral-200 text-3xl lg:text-4xl leading-tight block mt-12">
          O Cartão de Saúde da sua família
        </strong>
        <p className="text-regular  text-white text-sm leading-tight block ">
          Descontos em consultas médicas, serviços odontológicos, exames e lojas parceiras
        </p>
        <footer className="mt-10 flex gap-5 flex-col lg:flex-row">
        </footer>
      </div>
      <div>
        <div className="justify-center pb-5">
          <span className="flex font-extralight		 items-center text-white">
            <Image className="mr-2" src="/icon/check-icon.svg" width={20} height={20} alt="" />
            Exames de diagnósticos por imagem </span>
        </div>
        <div className="justify-center pb-5">
          <span className="flex font-extralight	 items-center text-white">
            <Image className="mr-2" src="/icon/check-icon.svg" width={20} height={20} alt="" />
            Consultas médicas</span>
        </div>
        <div className="justify-center pb-5">
          <span className="flex font-extralight	 items-center text-white">
            <Image className="mr-2" src="/icon/check-icon.svg" width={20} height={20} alt="" />
            Serviços Odontológicos </span>
        </div>
        <div className="justify-center pb-5">
          <span className="flex font-extralight	 items-center text-white">
            <Image className="mr-2" src="/icon/check-icon.svg" width={20} height={20} alt="" />
            Exames laboratoriais </span>
        </div>
        <div className="justify-center pb-5">
          <span className="flex font-extralight	items-center text-white">
            <Image className="mr-2" src="/icon/check-icon.svg" width={20} height={20} alt="" />
            Outros exames de diagnósticos </span>
        </div>
        <div className="flex text-white justify-center items-center">
          <button onClick={() => setModalOpen(true)} className="bg-green-400 hover:bg-green-300 duration-100 px-4 py-2 rounded-md ">
            🚀 Pedir Cartão
          </button>
        </div>
        <ModalForm show={isModalOpen} handleClose={() => setModalOpen(false)}/>
      </div>

    </main>
  )
}
