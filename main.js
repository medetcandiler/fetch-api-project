let jsonDatas='https://jsonplaceholder.typicode.com/posts'
fetch(jsonDatas).then(
    response => response.json()
).then(
    data => {
        let listItem=''
        data.forEach(element => {
            listItem+= `
            <ul class="list-group mb-3" id='${element.id}'>
                <li class="list-group-item">ID:${element.id} </li>
                <li class="list-group-item">Title: ${element.title}</li>
                <li class="list-group-item">Content: ${element.body}</li>
            </ul>
            `
        })
        let postsArea=document.querySelector('#posts');
        postsArea.innerHTML= listItem;
        document.querySelector('#searchForm').addEventListener('keyup' , (e) => {
            e.preventDefault();
            let searchDOM=document.querySelector('#search')
            data.forEach( element => {
                if( searchDOM.value == element.id || element.title.indexOf(searchDOM.value) > -1 || (searchDOM.value=='') ){
                    document.getElementById(element.id).style.display= ' block'
                }else {
                    document.getElementById(element.id).style.display= 'none'
                }
            })
        })
    }
)

document.querySelector('#btn').addEventListener('click' , submitPost)
let title=document.querySelector('#title').value
let body=document.querySelector('#content').value

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 

function submitPost(e){
    e.preventDefault();
    fetch(jsonDatas, {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            title, 
            body
        })
    }).then((res) => res.json()).then(
        data => console.log('your data successfully added', data)
    )
}




























