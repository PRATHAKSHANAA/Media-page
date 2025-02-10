const menuItems = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message= messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');
const theme=document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontsizes = document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')




const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');

    })
}
menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notification-popup').
            style.display='none';
        }else{
            document.querySelector('.notification-popup').
            style.display='block';
            document.querySelector('#notifications.notification-count').style.display='none';
             }
    })
})



//messages
//searches
const val= messageSearch.value.toLowerCase();
message.forEach(chat =>{
    let name =chat.querySelector('hs').textContent.toLowerCase();
    if(name.indexOf(val)!= -1){
        chat.style.display='flex';
    }else{
        chat.style.display='flex';
    }

})


//search chat
messageSearch.addEventListener('keyup',searchMessage);



//messages
messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow = ' 0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() =>{
        message.style.boxshadow ='none'; 
    },2000);
})



//theme

//open model
const openThemeModal=()=>{
    themeModel.style.display ='grid';
}

//close model
themeModal.addEventListener('click',closeThememodal);

theme.addEventListener('click',openThemeModal);






//fonts
const removeSizeSelector=()=>{
    fontsizes.forEach(size=>{
        size.classList.remove('active')
    })
}



fontSizes.foreach(size =>{
    size.addEventListener('click',()=> {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

    

    if(size.classList.contains('font-size-1')){
        fontSize='10px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','5.4rem');
    }else if (size.classList.contains('font-size-2')){
        fontSize='13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-7remm');
    }else if (size.classList.contains('font-size-3')){
        fontSize='16px';
        root.style.setProperty('----sticky-top-left','-2rem,');
        root.style.setProperty('----sticky-top-right','-17rem');
    }else if (size.classList.contains('font-size-4')){
        fontSize='19px';
        root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-right','-25rem');
    }else if (size.classList.contains('font-size-5')){
        fontSize='22px';
        root.style.setProperty('----sticky-top-left','10rem');
        root.style.setProperty('----sticky-top-right','-33rem');
    }


     //change
     document.querySelector('html').style.fontSize = fontSize
    })
})



//remove active cls from colors
const changeActiveColorClass =()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

//change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click',()=>{
        let primary;
        // changeActiveColorClass

        if(color.classList.contains('color-1')){
             primaryHue=252;
        } else if(color.classList.contains('color-2')){
             primaryHue=52;
        } else if(color.classList.contains('color-3')){
             primaryHue=352;
        } else if(color.classList.contains('color-4')){
             primaryHue=152;
        } else if(color.classList.contains('color-5')){
             primaryHue=202;
        }

        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})






//theme bg values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBG =()=>{
    root.style.setproperty('--light-color-lightness',lightColorLightness);
    root.style.setproperty('--white-color-lightness',whiteColorLightness);
    root.style.setproperty('--dark-color-lightness',darkColorLightness);
}


Bg1.addEventListener('click',() =>{

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click',() =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click',() =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
});