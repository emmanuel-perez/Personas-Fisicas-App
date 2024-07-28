
import { Provider } from "react-redux"
import { AppRouter } from "./routes/AppRouter"
import { store } from "./store/store"

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  )
}
