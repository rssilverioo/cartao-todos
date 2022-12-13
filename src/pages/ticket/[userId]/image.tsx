

import { GetStaticPaths, GetStaticProps } from 'next';
import { Ticket } from '../../../components/Tickets';

interface TicketImageProps {
  user: {
    id: string,
    nome: string;
  }

}

export default function userId({user}: TicketImageProps) {
console.log(user)
return (
  <main className="w-[1200px] h-[630px] bg-neutral-900 grid place-content-center bg-background bg-top bg-[length:auto_100vh] md:bg-cover bg-no-repeat">
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