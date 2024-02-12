let container = document.querySelector('.container');
let value1 = document.querySelector('.input');
let add1 = document.querySelector('.add');

class Item {
    constructor(name) {
        this.create(name);
    }

    create(name) {
        let li = document.createElement('div');
        li.classList.add('item');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => this.toggleDone(li));

        let input = document.createElement('input');
        input.type = 'text';
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        remove.addEventListener('click', () => this.remove(li));

        container.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(input);
        li.appendChild(remove);
    }

    toggleDone(li) {
        li.classList.toggle('completed');
    }

    remove(li) {
        container.removeChild(li);
    }
}

add1.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
});

function check() {
    if (value1.value !== '') {
        new Item(value1.value);
        value1.value = '';
    }
}

function removeAll() {
    document.querySelector('.container').innerHTML = '';
}
