(function(){
    const postBtn = document.querySelector('.hide');
    const postBlock = document.querySelector('.post');
    const shadow = document.querySelector('.shadow');
    postBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        
        postBlock.classList.toggle('post_show');
        shadow.classList.toggle('shadow_active');
    });
    document.addEventListener('click', (e) =>{
        let target = e.target;
        let ist_post = target == postBlock || postBlock.contains(target);
        let ist__btn = target == postBtn;
        let ist_post_isActive = postBlock.classList.contains('post_show');
        if(!ist_post && !ist__btn && ist_post_isActive) {
            postBlock.classList.remove('post_show');
            shadow.classList.remove('shadow_active');
        }
    });


    // Search
    const search = document.querySelector('.search__input');
    const searchList =document.querySelector('.search__list');
    const shadow1 = document.querySelector('.shadow1');
    search.addEventListener('keyup', ()=>{
        let filter, li,  a, i, txtValue;
        filter = search.value.toUpperCase();
        li = searchList.querySelector('.search__list-item');
        for(i = 0;i< li; i++){
            a = li[i].querySelector('a')[0];
            txtValue = a.textContent || a.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display= "";
            } else {
                li[i].style.display= "none";
            }
        }
    });
    search.addEventListener('focus', ()=> {
        searchList.classList.add('search__list_active');
        shadow1.classList.add('shadow_active');
    });
    search.addEventListener('blur', ()=> {
        searchList.classList.remove('search__list_active');
        shadow1.classList.remove('shadow_active');
    });
    document.addEventListener('click', (e) =>{
        let target = e.target;
        let ist_searList = target == searchList || searchList.contains(target);
        let ist__btn = target == search;
        let ist_search_isActive = searchList.classList.contains('search__list_active');
        if(!ist_searList && !ist__btn && ist_search_isActive) {
            searchList.classList.remove('search__list_active');
            shadow1.classList.remove('shadow_active');
        }
    });


    // Tabs 
    let tab_btn = document.querySelectorAll('.tab__btn');
    let tab_section = document.querySelectorAll('.article');
    let tabName;
    tab_btn.forEach(item => {
        item.addEventListener('click', selectbtn);
        function selectbtn() {
            tab_btn.forEach(item=>{
                item.classList.remove('tab__btn_active');
            });
            this.classList.add('tab__btn_active');
            tabName = this.getAttribute('data-tab');
            selectTab(tabName);
        }
    });
    function selectTab(tabName) {
        tab_section.forEach(item => {
            item.classList.contains(tabName) ? 
                item.classList.add('article_active') :
                item.classList.remove('article_active');
        });
    }
}());