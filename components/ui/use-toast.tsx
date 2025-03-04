// "use client";

// import * as React from "react";
// import { Toast, ToastClose, ToastDescription, ToastTitle, ToastViewport } from "@/components/ui/toast";
// import { useState } from "react";

// const ToastContext = React.createContext<{
//   showToast: (message: string, type?: "default" | "destructive") => void;
// } | undefined>(undefined);

// export function useToast() {
//   const context = React.useContext(ToastContext);
//   if (!context) {
//     throw new Error("useToast must be used within a ToastProvider");
//   }
//   console.log("Checking ToastContext:", context);
//   return context;
// }

// export function ToastProvider({ children }: { children: React.ReactNode }) {
//   const [toasts, setToasts] = useState<{ id: number; message: string; type: "default" | "destructive" }[]>([]);

//   const showToast = (message: string, type: "default" | "destructive" = "default") => {
//     const newToast = { id: Date.now(), message, type };
//     setToasts((prev) => [...prev, newToast]);

//     setTimeout(() => {
//       setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
//     }, 3000);
//   };

//   return (
//     <ToastContext.Provider value={{ showToast }}>
//       {children}
//       {/* ✅ ToastViewport is inside the provider and outside the .map() */}
//       <ToastViewport />
//       {toasts.map((toast) => (
//         <Toast key={toast.id} variant={toast.type}>
//           <ToastTitle>{toast.type === "destructive" ? "Erro" : "Sucesso"}</ToastTitle>
//           <ToastDescription>{toast.message}</ToastDescription>
//           <ToastClose />
//         </Toast>
//       ))}
//     </ToastContext.Provider>
//   );
// }
