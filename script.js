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

// A short, skippable opening film; never gates access to the portfolio.
const intro = document.querySelector('#intro');
const introVideo = document.querySelector('#intro-video');
const skipIntro = document.querySelector('#skip-intro');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let introTimer;
let introFinished = false;
function dismissIntro() {
  if (introFinished) return;
  introFinished = true;
  clearTimeout(introTimer);
  introVideo.pause();
  const restoreFocus = intro.contains(document.activeElement);
  intro.hidden = true;
  document.body.classList.remove('intro-playing');
  if (restoreFocus) document.querySelector('.brand').focus({preventScroll:true});
  try {sessionStorage.setItem('jopelo-intro-seen','1');} catch {}
}
let seenIntro = false;
try {seenIntro = sessionStorage.getItem('jopelo-intro-seen') === '1';} catch {}
if (!motionPreference.matches && !seenIntro) {
  intro.hidden = false;
  document.body.classList.add('intro-playing');
  skipIntro.focus({preventScroll:true});
  introTimer = setTimeout(dismissIntro, 4000);
  introVideo.addEventListener('ended', dismissIntro, {once:true});
  introVideo.addEventListener('error', dismissIntro, {once:true});
  introVideo.play().catch(dismissIntro);
}
skipIntro.addEventListener('click', dismissIntro);
intro.addEventListener('keydown', event => {
  if (event.key === 'Escape') dismissIntro();
  if (event.key === 'Tab') {event.preventDefault();skipIntro.focus();}
});
const hero = document.querySelector('.hero');
const motionButton = document.querySelector('.motion-toggle');
let motionPaused = false;
motionButton.addEventListener('click', () => {
  motionPaused = !motionPaused;
  hero.classList.toggle('motion-paused',motionPaused);
  motionButton.setAttribute('aria-pressed',String(motionPaused));
  motionButton.textContent = motionPaused ? 'Resume motion' : 'Pause motion';
  hero.style.setProperty('--portrait-x','0px');
  hero.style.setProperty('--portrait-y','0px');
});
hero.addEventListener('pointermove', event => {
  if(motionPaused || motionPreference.matches || event.pointerType !== 'mouse') return;
  const rect = hero.getBoundingClientRect();
  hero.style.setProperty('--portrait-x',`${(event.clientX - rect.left - rect.width/2)*.008}px`);
  hero.style.setProperty('--portrait-y',`${(event.clientY - rect.top - rect.height/2)*.008}px`);
});
hero.addEventListener('pointerleave', () => {hero.style.setProperty('--portrait-x','0px');hero.style.setProperty('--portrait-y','0px');});
motionPreference.addEventListener('change', () => {if(motionPreference.matches) dismissIntro();});
