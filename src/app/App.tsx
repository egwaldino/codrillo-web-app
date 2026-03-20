
import AppRoutes from "@/routes/Routes"
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from "react-router-dom"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
