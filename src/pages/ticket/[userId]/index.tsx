import Image from "next/image";

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Ticket from "../../../components/Tickets";

interface TicketPageProps {
  user: {
    id: string,
    nome: string;
  }
}

export default function TicketPage({ user }: TicketPageProps) {
  const router = useRouter()

  const userId = String(router.query.userId)

  useEffect(() => {
    fetch(`http://localhost:3000/ticket.png?userId=${userId}`);
  }, [userId])
  console.log(userId)
  return (
    <main className="lg:h-screen max-w-[480px] lg:max-w-[1240px] p-12 mx-auto flex justify-center items-center gap-24 flex-col lg:flex-row">
      <Head>
        <title>Ticket Gerado | Maratona Explorer</title>

        <meta name="robots" content="noindex" />
      </Head>

      <div className="max-w-[520px] text-center lg:text-left">
    

        <strong className="text-neutral-200 text-xl mt-12 inline-flex lg:flex gap-4">
          <img src="/icon/check.svg" />
          <span>Cartão criado <span className="text-green-500">com sucesso</span></span>
        </strong>

        <strong className="text-neutral-200 text-4xl mt-4 block">Agora mostre ao mundo</strong>
        
        <footer className="mt-6 grid grid-cols-4 gap-6">
        <a 
            href="#"
            className="h-[60px] bg-white rounded hover:bg-gray-300 duration-100 flex items-center justify-center">
            <img src="/icon/download-button.svg" alt="Baixe seu cartão" />
          </a>
          
          <a 
            href="#"
            className="h-[60px] bg-white rounded hover:bg-gray-300 duration-100 flex items-center justify-center">
            <img src="/icon/whatsapp.svg" alt="Compartilhar no WhatsApp" />
          </a>

          <a  href="#" className="h-[60px] bg-white rounded hover:bg-gray-300 duration-100 flex items-center justify-center">
            <img src="/icon/linkedin.svg" alt="Compartilhar no LinkedIn" />
          </a>


          <a  href="#" className="h-[60px] bg-white rounded hover:bg-gray-300 duration-100 flex items-center justify-center">
            <img src="/icon/facebook.svg" alt="Compartilhar no Facebook" />
          </a>
        </footer>

   
      </div>

      <Ticket 
        nome={user.nome}
        className="flex-1 w-full h-auto drop-shadow-ticket" 
      />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const user = await fetch(`http://localhost:3002/usuarios/${params?.userId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((responseObj) => responseObj);

  return {
    props: {
      user: user || null
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}