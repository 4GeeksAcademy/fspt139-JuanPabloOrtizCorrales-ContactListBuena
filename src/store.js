import { getAgenda } from "./Services/services";

export const initialStore=()=>{
  return{
    contact: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_contact':
      return {
        ...store.contact.map(action.payload)
        

      }

      
    default:
      throw Error('Unknown action.');
  }    
}
