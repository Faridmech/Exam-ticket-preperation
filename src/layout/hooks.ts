import { useLocation } from "react-router-dom"

export const useIsActiveRoute  = () =>{

  const {pathname} = useLocation()

  function checkIsActive(route:string): boolean{
    return pathname === route
  }

 return {checkIsActive}
}