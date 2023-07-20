import { useEffect } from "react"

export const useTitle = headerTitle => {
  useEffect(() => {
    document.title = `${headerTitle} | Product-Project`;
  }, [headerTitle]);
}
