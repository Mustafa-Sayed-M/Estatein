import { NavContProvider } from "./NavContext";

function AppProviders({ children }) {
    return (
        <NavContProvider>
            {children}
        </NavContProvider>
    )
}

export default AppProviders;