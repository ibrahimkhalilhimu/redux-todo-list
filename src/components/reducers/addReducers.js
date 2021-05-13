const initialState ={
    list: []
}
const addReducres =(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
            const {id,data} = action.payload;
            if(data.length > 2){
                return {
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]
                }
            }
         

            case "DELETE":
                
       const newState = state.list.filter((elem)=>elem.id !== action.id)
                return {
                    ...state,
                    list:newState
                }
                case "REMOVE_ALL" :return{
                    ...state,
                    list:[]
                }
            default: return state;
    }
}
export default addReducres;