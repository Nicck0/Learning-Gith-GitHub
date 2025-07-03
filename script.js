const input = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

btn.addEventListener('click', addTodo);
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTodo();
});

function addTodo() {
  const value = input.value.trim();
  if (!value) return;
  const li = document.createElement('li');
  li.textContent = value;
  li.addEventListener('click', function() {
    li.classList.toggle('done');
  });
  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.onclick = function() { li.remove(); };
  li.appendChild(del);
  list.appendChild(li);
  input.value = '';
}