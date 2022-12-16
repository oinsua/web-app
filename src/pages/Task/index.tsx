import PageLayout from '../../components/PageLayout'
import TaskForm from '../../components/TaskForm'
import TaskList from '../../components/TaskList'

function Task() {
  return (
    <PageLayout>
      <TaskForm />
      <TaskList />
    </PageLayout>
  )
}

export default Task