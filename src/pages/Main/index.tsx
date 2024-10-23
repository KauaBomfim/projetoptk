import { Outlet } from "react-router-dom"
import { Siderbar } from '../../components/sidebar'
import { Container } from './styles'
import logoImg from "../../assets/logo.svg"

export default function Main() {
  return (
    <Container>
      <Siderbar/>
      <section>
        <img src={logoImg} alt="Imagem de hambúrguer e refrigerante" />
        <Outlet/>
      </section>
    </Container>
  )
}
