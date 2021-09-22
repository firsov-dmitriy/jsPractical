

window.addEventListener('DOMContentLoaded', ()=>{


    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }    

    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
               if(target == item) {
                hideTabContent();
                showTabContent(i);
               }
            });
        }
    });
});




function timeStock(day, hour, minut, second) {
    const dayStock = document.querySelector('#days'),
        hourStock = document.querySelector('#hours'),
        minutStock = document.querySelector('#minutes'),
        secondStcok =document.querySelector('#seconds');
    let nowData = new Date(),
    stockData = new Date(2021, 08, day - 2, hour, minut, second);
    
    console.log(new Date(stockData));
    function getResult(params) {
        
    }
    
        dayStock.textContent = new Date(stockData).getDate() - nowData.getDate();
        hourStock.textContent =  new Date(stockData).getHours() - nowData.getHours();
        minutStock.textContent =  new Date(stockData).getMinutes() - nowData.getMinutes();
   
        secondStcok.textContent = new Date(stockData).getSeconds() - nowData.getSeconds();
    
    
    
    
}


setInterval(() => {
    timeStock(31, 23, 59, 59);
}, 1000);
    
