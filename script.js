'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {nav.classList.remove('open');menu.setAttribute('aria-expanded', 'false');menu.textContent = 'Menu';}
menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded', String(open));nav.classList.toggle('open', open);menu.textContent = open ? 'Close' : 'Menu';});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {if(event.key === 'Escape') {closeMenu();}});
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {document.querySelector('#service').value = button.dataset.service;document.querySelector('#contact').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});document.querySelector('#name').focus({preventScroll:true});}));
const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {event.preventDefault();const name = form.elements.name.value.trim();const brief = form.elements.brief.value.trim();if(!name || !brief) {return;}document.querySelector('#message').value = `Hi Josephine, I’m ${name}.\n\nI’d love to discuss ${form.elements.service.value === 'Let’s explore' ? 'a potential collaboration' : form.elements.service.value.toLowerCase()}.\n\n${brief}\n\nWould you be open to a conversation?`;document.querySelector('#introduction').hidden = false;document.querySelector('#copy-status').textContent = '';document.querySelector('#message').focus();});
document.querySelector('#copy').addEventListener('click', async () => {const message = document.querySelector('#message');try {await navigator.clipboard.writeText(message.value);document.querySelector('#copy-status').textContent = 'Copied. Paste your introduction into a LinkedIn message.';}catch {message.focus();message.select();document.querySelector('#copy-status').textContent = 'Select and copy the introduction, then paste it into LinkedIn.';}});
document.querySelector('#year').textContent = new Date().getFullYear();
