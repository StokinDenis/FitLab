import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {userStore} from "../user.store";


export const registrGuardFn:CanActivateFn=()=>{
  const authService=inject(userStore)
  if(!authService.getIsAuth()){
    return true
  }
  return false
}

export const authGuardFn: CanActivateFn = () => {
  const authService = inject(userStore);
  const router = inject(Router);

  if (authService.getIsAuth()) {
    return true;
  }
  void router.navigate(['/registration'])

  return false;
}
