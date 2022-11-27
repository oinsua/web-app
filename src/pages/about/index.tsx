import { Link, Outlet } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import { GO_TO } from '../../model/Routes'

function About() {
  return (
    <PageLayout>
        <div>About</div>
        <Link to={GO_TO.WHO}>Go To WHO</Link>
        <Outlet />
    </PageLayout>
    
  )
}

export default About