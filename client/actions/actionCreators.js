 // increment
export function increment(index) {
    return{
        type:'INCREMENT_LIKES',
        index
    }
}


// add comment
export function addComment(postId, author, comment){
    return{
        tyep:'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
// i = index
export function removeComment(postId,i){
    return{
        type:'REMOVE-COMMENT',
        i,
        postId
    }
}
