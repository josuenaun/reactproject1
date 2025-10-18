import { LayoutHeader } from "./components/layoutHeader";

export function App () {

  const infoheader = [
    {
      id:1,
      username: 'Josue Agurto',
      img: 'josuenaun',
    },
    {
      id:2,
      username: 'Jesus Agurto',
      img: 'jesusnaun',
    },
  ]
  return (
    <section>
      {
        infoheader.map(({id,username,img}) => {
          return(
            <LayoutHeader
            key={id}
            username={username}
            img={img}
            />
          )
        })
      }
    </section>
  )
}