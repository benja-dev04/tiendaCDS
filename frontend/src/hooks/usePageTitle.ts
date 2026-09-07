import { useEffect } from "react";

/**
 * Cambia el título de la pestaña del navegador mientras esa página
 * esté montada. Ej: usePageTitle("Rock") -> "Rock | Surco"
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Surco`;

    // Al salir de la página, no es estrictamente necesario restaurar
    // el título anterior porque la siguiente página va a poner el suyo,
    // pero lo dejamos por prolijidad.
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}