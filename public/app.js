document.addEventListener('DOMContentLoaded', fetchUsers);
document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    });

    const result = await response.json();
    document.getElementById('message').textContent = result.message;

    fetchUsers();
});

async function fetchUsers() {
    const filter = document.getElementById('filter').value;
    const response = await fetch(`/getUsers?filter=${filter}`);
    const users = await response.json();

    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `Name: ${user.name}, Email: ${user.email}`;
        usersDiv.appendChild(userDiv);
    });
}
