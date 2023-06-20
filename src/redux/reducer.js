
export const productDetails = (data = {}, action) => {
    if(action.type === "product details"){
      return {...data , product: action.payload}
    }if(action.type === "remove product"){
     return {}
    }
    return data
 }
 
 
 export const userDetails = (data = [], action) => {
     switch(action.type){
         case "users data" : return {...data, users : action.payload}
         case "filtered users data" : return {...data, user : action.payload}
         default: return data
     }
 }
 
 export const protectedComponents = (data = {login: false}, action) => {
     if(action.type === "protected components"){
         return {...data, login: action.payload }
     }
     return data
 }