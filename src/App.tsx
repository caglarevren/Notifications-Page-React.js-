import { NotificationCardProvider } from './context/NotificationContext'

import Notifications from './components/Notifications'

function App() {
  return (
    <NotificationCardProvider>
      <Notifications />
    </NotificationCardProvider>
  )
}

export default App
