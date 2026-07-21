import { getAgenda } from "./Services/services";

export const initialStore=()=>{
  return{
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'add_contact':
      return {
        ...store, 
        contacts: action.payload
      }

      
    default:
      throw Error('Unknown action.');
  }    
}
