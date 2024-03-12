import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  let issloggedIn=localStorage.getItem('isLoggedIn');
  if(issloggedIn == 'false'){
    alert("Authentication Failed !!")
    return false
  }
  return true;
};
