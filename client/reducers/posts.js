// reducer take 2 things:
//  1.action
// 2. copy of current state

function posts(state=[], action){
    console.log("this post will change")
    console.log(state,action)
    return state;
}

export default posts
