document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle&&nav) toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?'×':'☰';
  });
  const current=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===current) a.classList.add('active');
  });
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const form=document.querySelector('#inquiry-form');
  if(form) form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent('Evergreen Auto website inquiry');
    const body=encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`
    );
    const address=form.dataset.email;
    if(!address||address.includes('REPLACE')) {
      alert('Please configure the contact email in the page footer/form before publishing.');
      return;
    }
    location.href=`mailto:${address}?subject=${subject}&body=${body}`;
  });
});
