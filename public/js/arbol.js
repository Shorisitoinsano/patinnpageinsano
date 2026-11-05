// Pantalla secreta: árbol + frase + música de fondo (reproductor de YouTube).
(function () {
  const VID = 'Ykz_TtuO1Ck';
  let player = null, ready = false, pending = false, muted = false;
  const $ = (id) => document.getElementById(id);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function make() {
    if (player || !window.YT || !YT.Player) return;
    const vars = { controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0, playsinline: 1, loop: 1, playlist: VID, iv_load_policy: 3 };
    if (/^https?:/.test(location.origin)) vars.origin = location.origin;
    player = new YT.Player('yt-p', { width: '100%', height: '100%', videoId: VID, playerVars: vars, events: {
      onReady: () => { ready = true; try { player.setPlaybackQuality('tiny'); player.setVolume(70); } catch (e) {} if (pending) player.playVideo(); },
      onStateChange: (e) => { if (e.data === 0) { try { player.seekTo(0); player.playVideo(); } catch (x) {} } }
    } });
  }
  if (window.YT && YT.Player) make();
  else { window.onYouTubeIframeAPIReady = make; const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(s); }
  const fade = (el, delay, dur) => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: reduce ? 0 : dur, delay: reduce ? 0 : delay, fill: 'forwards', easing: 'ease-out' });
  $('enter').addEventListener('click', () => {
    pending = true;
    if (ready) { try { player.unMute(); player.playVideo(); } catch (e) {} }
    $('enter').remove();
    fade($('tree'), 200, 2200);
    const line = $('line'); fade(line, 2600, 2600);
    if (!reduce) line.animate([{ opacity: 1 }, { opacity: 1, offset: .9 }, { opacity: .82, offset: .93 }, { opacity: 1, offset: .95 }, { opacity: .6, offset: .97 }, { opacity: 1 }], { duration: 5200, delay: 5600, iterations: Infinity });
    fade($('snd'), 3000, 800).onfinish = () => { $('snd').style.pointerEvents = 'auto'; };
    fade($('yt-wrap'), 3000, 800).onfinish = () => { $('yt-wrap').style.pointerEvents = 'auto'; };
  });
  $('snd').addEventListener('click', () => {
    muted = !muted; $('snd').textContent = '♪ ' + (muted ? 'sonido off' : 'sonido on');
    try { muted ? player.mute() : (player.unMute(), player.playVideo()); } catch (e) {}
  });
})();
