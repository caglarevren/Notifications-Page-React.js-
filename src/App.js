import { NotificationCardProvider } from './context/NotificationContext'

import Notifications from './components/Notifications.jsx'

function App() {
  return (
    <NotificationCardProvider>
      <Notifications />
    </NotificationCardProvider>
  )
}

export default App
