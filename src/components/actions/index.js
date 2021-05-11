export const addItems =(data)=>{
    return {
        type:"ADD",
        payload: {
            id: new Date().getTime().toString(),
            data:data,
        }
    }
}
export const deleteItems =(id)=>{
    return {
        type:"DELETE",
        id
    }
}
export const removeAll =()=>{
    return {
        type:"REMOVE_ALL"
    }
}