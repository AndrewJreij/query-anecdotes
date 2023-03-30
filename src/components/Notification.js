import { useContext } from "react"
import { useNotificationValue } from "../NotificationContext"

const Notification = ({ message }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const test = useNotificationValue()

  // if (!{ message })
  //   return null

  return (
    <div style={style}>
      {test}
    </div>
  )
}

export default Notification
