const localStorageKey = 'to-do-list-rd'

function validateIfExistsNewTask()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask()
{
    let input = document.getElementById('input-new-task')
    input.style.border = ''

    // validation
    if(!input.value)
    {
        input.style.border ='1px solid red'
        alert('Type something to add, to your tasks')
    }
    else if(validateIfExistsNewTask())
    {
        alert('It already been writed')
    }
    else
    {
        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()

    }
    input.value = ''
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list =document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
            list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16"><path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/></svg></button></li>`  
    }
}

function removeItem(data)
{

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data )
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()

}

showValues()