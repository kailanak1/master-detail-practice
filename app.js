const detail = document.querySelector('.detail'); 
const detailTitle = document.querySelector('.detail-title'); 
const masterItems = document.querySelectorAll('.master-item');



masterItems.forEach(item => {
    item.addEventListener('click', function(){

        clearSelected()
        this.classList.add('active-item'); 

        detail.classList.remove('hidden-md-down')

        detailTitle.innerHTML = this.innerHTML;
    })
})

function back(){
    detail.classList.add("hidden-md-down")
}

function clearSelected(){
    for(let item of masterItems){
        item.classList.remove('active-item')
    }
}