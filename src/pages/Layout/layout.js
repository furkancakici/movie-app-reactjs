import {Outlet} from 'react-router-dom'
import { Footer, Header } from '../../components'
import '../../styles/App.scss'

const Layout = () => {
  return (
    <main>
        <Header/>
        <div className='container'>
          <Outlet/>
        </div>
        <Footer/>
    </main>
  )
}

export default Layout