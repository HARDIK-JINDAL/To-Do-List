const container = document.getElementsByClassName('container');
const addButton = document.getElementById('add');
const inputField = document.querySelector('input');
const outerBody = document.querySelector('.outerbdy');

addButton.addEventListener('click', function () {
    var task = document.createElement('div');
    task.classList.add('job');

    var taskText = document.createElement('p');
    task.appendChild(taskText);
    taskText.innerText = `${inputField.value}`;

    var checkButton = document.createElement('button');
    task.appendChild(checkButton);
    checkButton.classList.add('check', 'btn');
    checkButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94849 20.0083 9.79043 19.1075 11.4743 17.3058Z" stroke="currentColor" stroke-width="1.5" />
    </svg>`;

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>`;

    deleteButton.classList.add('trash', 'btn');
    task.appendChild(deleteButton);

    if (inputField.value.trim() === '') {
        alert('Add a task');
    } else {
        outerBody.appendChild(task);
    }

    var isChecked = false;

    checkButton.addEventListener('click', function () {
        if (!isChecked) {
            taskText.style.textDecoration = "line-through";
            isChecked = true;
        } else {
            taskText.style.textDecoration = "none";
            isChecked = false;
        }
    });

    deleteButton.addEventListener('click', function () {
        task.remove();
    });

    inputField.value = "";
});
