const colorButton=document.getElementById('colorButton');
colorButton.addEventListener('click',listener,()=>{
    colorButton.style.backgroundColor=colorButton.style.backgroundColor === 'blue'? '4CAF50': 'blue';
})