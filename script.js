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

// Typography-only opening sequence; the portrait is always still.
const intro = document.querySelector('#intro');
const skipIntro = document.querySelector('#skip-intro');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('.motion-toggle');
let introTimer;
let countTimer;
function dismissIntro() {
  clearTimeout(introTimer);
  clearInterval(countTimer);
  const restoreFocus = intro.contains(document.activeElement);
  intro.hidden = true;
  document.body.classList.remove('intro-playing');
  if (restoreFocus) document.querySelector('.brand').focus({preventScroll:true});
  try {sessionStorage.setItem('jopelo-cinematic-seen','1');} catch {}
}
let seenIntro = false;
try {seenIntro = sessionStorage.getItem('jopelo-cinematic-seen') === '1';} catch {}
if (!motionPreference.matches && !seenIntro) {
  intro.hidden = false;
  document.body.classList.add('intro-playing');
  skipIntro.focus({preventScroll:true});
  let count = 1;
  countTimer = setInterval(() => {count = Math.min(3,count+1);document.querySelector('#intro-count').textContent = `00${count} / 003`;},850);
  introTimer = setTimeout(dismissIntro,2800);
}
skipIntro.addEventListener('click',dismissIntro);
intro.addEventListener('keydown',event => {if(event.key === 'Escape') dismissIntro();if(event.key === 'Tab'){event.preventDefault();skipIntro.focus();}});
motionButton.addEventListener('click',() => {
  const paused = document.body.classList.toggle('motion-paused');
  motionButton.setAttribute('aria-pressed',String(paused));
  motionButton.textContent = paused ? 'Resume text motion' : 'Pause text motion';
});
const revealObserver = new IntersectionObserver(entries => {entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});},{threshold:.12});
if (!motionPreference.matches) document.querySelectorAll('.section-heading h2,.principal h2,.contact h2').forEach(el => {el.classList.add('text-reveal');revealObserver.observe(el);});
motionPreference.addEventListener('change',() => {if(motionPreference.matches){dismissIntro();document.querySelectorAll('.text-reveal').forEach(el=>el.classList.add('is-visible'));}});
