import DataTable from 'datatables.net-dt';
import * as api from './api.js';

document.addEventListener('DOMContentLoaded', () => {

    // Declarations
    // --- USER MANAGEMENT ---
    const userForm = document.querySelector('#user-form');
    const usersTableDiv = document.querySelector('#users-table');


    // Rendering
    async function loadUsers() {
        try {
            const data = await api.getAllUsers()
            
        } catch(err) {
            alert(`Error: ${err.message}`)
            console.error(`Error: ${err.message}`)
        }
    }



    // Functions and Event Listeners
    // --- USER MANAGEMENT ---
    userForm.addEventListener('submit', async (e) => {
        try {
            e.preventDefault();
            
            const idInput = document.querySelector('#user-id').value.trim()
            const usernameInput = document.querySelector('#user-username').value.trim()
            const passwordInput = document.querySelector('#user-password').value.trim()

            if(!usernameInput || !passwordInput) {
                alert('All fields required.');
                return;
            }

            const data = {
                username: usernameInput,
                password: passwordInput
            }

            let result;
            let status;

            if(idInput) {
                result = await api.updateUser(data, idInput)
                status = 'updated'
            } else {
                result = await api.createUser(data)
                status = 'created'
            }

            alert(`User ${status} successfully!: ${result}`)
            loadUsers()
            userForm.reset()

        } catch(err) {
            alert(`Error: ${err.message}`)
            console.error(`Error: ${err.message}`)
        }
    })

    usersTableDiv.addEventListener('click', async (e) => {
        e.preventDefault();

        const target = e.target
        const id = target.dataset.id
        // console.log(target.classList.contains('edit-btn'))

        if(target.classList.contains('edit-btn')) {
            userForm.reset()
            userForm.querySelector('#user-form-title').textContent = 'Edit user'

            const user = await api.getUser(id)
            userForm.querySelector('#user-id').value = user.id
            userForm.querySelector('#user-username').value = user.username
            userForm.querySelector('#user-password').value = user.password
        }

        if(target.classList.contains('delete-btn')) { 
            const result = await api.deleteUser(id)
            alert(`User deleted successfully!: ${result}`)
            loadUsers()
        }
    })

    loadUsers();
})