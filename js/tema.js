let toggle = document.getElementById(`toggle`);
let label_toggle = document.getElementById(`label_toggle`);

toggle.addEventListener(`change`, (event)=>{
    let checked = event.target.checked;
    document.body.classList.add(`dark`);
    if(checked){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        label_toggle.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }else{
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        label_toggle.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    }
});