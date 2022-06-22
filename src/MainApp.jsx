import AppProvider from "./contexts/BusinessContext/BusinessContext";
import AuthProvider from "./contexts/UserContext/UserContext";
import { AppRouter } from "./routers/AppRouter"
import { AlertDialogCity } from "./components/dialog/Dialog";
import CartShop from "./components/cartShop/CartShop";


export const MainApp = () => {

  return (
    <AppProvider>
      <AuthProvider>
        {/* Carrito de compras */}
        <CartShop />

        <AppRouter />

        {/* //Dialogs Imports */}
        <AlertDialogCity />

      </AuthProvider>
    </AppProvider>
  )
}