import { Link, Outlet } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'

function About() {
  return (
    <PageLayout>
        <div>About</div>
        <Link to={'logout'}>Go To Logout</Link>
        <Outlet />
    </PageLayout>
    
  )
}

export default About