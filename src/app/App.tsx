
import AppRoutes from "@/routes/Routes"
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from "react-router-dom"
import { Footer } from "@/components/Footer"

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
