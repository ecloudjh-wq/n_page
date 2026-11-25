const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});
const dialog=document.querySelector('dialog');document.querySelectorAll('.trial').forEach(btn=>btn.addEventListener('click',()=>dialog.showModal()));document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
