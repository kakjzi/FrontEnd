const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row')

    const item = document.createElement('div');
    item.setAttribute('class','item')

    const name = document.createElement('span');
    name.setAttribute('class','item_name')
    name.innerText = text;

    const effectBtn = document.createElement('div');
    effectBtn.setAttribute('class','shake-slow');
    
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class','item_delete');
    delBtn.innerHTML='<i class="fas fa-trash"></i>'

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item_divider');

    effectBtn.appendChild(delBtn);
    item.appendChild(name);
    item.appendChild(effectBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    delBtn.addEventListener('click',() => {
        items.removeChild(itemRow);
    });

    return itemRow
}

addBtn.onclick = ()=>{
    const text = input.value;
    if (text === ''){
        input.focus();
        return
    }
    const item = createItem(text);
    items.appendChild(item);
    input.value='';
    input.focus();
};

input.onkeypress= () =>{
    if (window.event.keyCode == 13) {
        addBtn.onclick();
    }
}