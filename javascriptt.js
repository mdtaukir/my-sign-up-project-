document.querySelector('.singel-content-btn').addEventListener(
    'click',() => {
        document.querySelector('.suscribe_wrapper').style.display='none';
        document.querySelector('.form-container').style.cssText='opacity:1; visibility: visible;';
        document.querySelector('.container-wrapper').style.background= 'cornflowerblue';
    }
);
document.querySelector('.colose-btn').addEventListener(
    'click',() => {
        document.querySelector('.suscribe_wrapper').style.display='block';
        document.querySelector('.form-container').style.cssText='opacity:0; visibility: hidden;';
        document.querySelector('.container-wrapper').style.cssText='background-image: url("../img/bakground.jpg"),background-position: center,background-size: cover,background-repeat: no-repeat,'

    }
); 