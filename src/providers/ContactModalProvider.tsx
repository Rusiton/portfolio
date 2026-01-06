import { createContext, useContext, useState } from "react";

type ContactModalProviderProps = {
  children: React.ReactNode
}

type ContactModalState = {
  open: boolean
  setOpen: (arg0: boolean) => void
}

const initialState: ContactModalState = {
  open: false,
  setOpen: () => null,
}

const ContactModalContext = createContext<ContactModalState>(initialState);

export function ContactModalProvider({ children }: ContactModalProviderProps) {
    const [open, setOpen] = useState<boolean>(false);

    const value = {
        open: open,
        setOpen: setOpen,
    };
    
    return (
        <ContactModalContext.Provider value={value}>
            { children }
        </ContactModalContext.Provider>
    )
}

export function useContactModal() {
    const context = useContext(ContactModalContext)
    
    if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

    return context
}