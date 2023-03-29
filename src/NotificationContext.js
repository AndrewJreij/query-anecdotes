import { useContext, useReducer, createContext } from "react";

const notificationContext = (state, action) => {
    switch (action.type) {
        case "SHOW":
            return action.payload
        case "HIDE":
            return null
    }
}

const NotificationContext = createContext()

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext[NotificationContext]
    return notificationAndDispatch[1]
}

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationContext)

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>

    )
}

export default NotificationContextProvider