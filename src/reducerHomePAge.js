export const initialHomePageReducer = {
    loading: true,
    error:"",
    lists:[]
}


export const reducerHomePage = (state,{type,payload})=>{

    switch(type){

        case "GET_REQUEST":{
            return {...state,loading:true}
        }
        case "GET_SUCCESS":{
            return {...state,lists:payload,loading:false}
        }
        case "GET_FAIL":{
            return {...state,loading:false,error:payload}
        }
        default:
        return state

    }

}