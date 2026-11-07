/**
 * DIWALI GALI 3D — INTERACTIVE E-SURPRISE
 * Complete Recreation of zuzumade.com with:
 * - Real authentic soothing Indian instrumental music tracks
 * - Auto-fade card transitions for an unobstructed view of the Gali
 * - Real-time progressive Rangoli coloring with card invisible during hold
 * - Glowing realistic sky lantern with radial bloom halo & trailing embers
 * - Interactive 360° Drag & Scroll exploration of the Gali
 * - Luxury Royal Greeting Card with gold calligraphy & Indian motifs
 * - Sender link generation with view-only recipient lock mode
 * - Cascade dark-to-light street ignition from nearest to farthest
 * - Realistic sweets showcase (Kaju Katli, Motichoor, Jamun, Peda)
 */

(function () {
  'use strict';

  // ══════════════════════════════════════════════
  // 1. STATE & WISHES PRESETS (Indian & English Curated Notes)
  // ══════════════════════════════════════════════
  const SAMPLE_NOTES = {
    hindi: [
      {
        id: 'h1',
        title: 'सुख-समृद्धि व दीप',
        tag: 'परिवार व स्नेह',
        text: 'दीपों की जगमगाहट, अपनों का साथ, और काजू कतली की मिठास! इस पावन दीवाली आपके घर में अपार खुशियाँ, उत्तम स्वास्थ्य और सुख-समृद्धि आए। शुभ दीपावली! 🪔✨'
      },
      {
        id: 'h2',
        title: 'तमसो मा ज्योतिर्गमय',
        tag: 'आध्यात्मिक व शांति',
        text: 'तमसो मा ज्योतिर्गमय — ईश्वर आपके जीवन के हर अँधेरे को आशा, प्रेम और सफलता के पावन प्रकाश से भर दे। आपको सपरिवार दीपोत्सव की हार्दिक शुभकामनाएँ! 🪔🙏'
      },
      {
        id: 'h3',
        title: 'आशीर्वाद व प्यार',
        tag: 'बड़ों व माता-पिता हेतु',
        text: 'आपके स्नेह और आशीर्वाद से ही हमारे जीवन का हर दिन दीवाली जैसा रोशन है। विघ्नहर्ता गणेश जी व माता लक्ष्मी की कृपा आप पर सदा बनी रहे। Happy Diwali! 🌸💛'
      },
      {
        id: 'h4',
        title: 'काजू कतली व मस्ती',
        tag: 'दोस्त व भाई-बहन',
        text: 'दीये भी जलेंगे, फुलझड़ियाँ भी चमकेंगी, और काजू कतली का डिब्बा सबसे पहले ख़त्म होगा! आपके चेहरे पर ये मुस्कान हमेशा ऐसे ही जगमगाती रहे। हैप्पी दीवाली! 🎇🍬'
      }
    ],
    hinglish: [
      {
        id: 'hg1',
        title: 'Ghar Ki Raunak',
        tag: 'Heartfelt & Warm',
        text: 'Ghar ki roshni aur dil ka sukoon! May your Diwali be filled with late-night laughter, infinite kaju katlis, and all your biggest dreams coming true. Happy Diwali! 🪔💛'
      },
      {
        id: 'hg2',
        title: 'Door Reh Kar Bhi Paas',
        tag: 'Distance & Love',
        text: 'Distance can’t dim our light! Miss celebrating together this year, but lighting this diya made me smile thinking of you. Wishing you endless barkat & peace! 🪔✨'
      },
      {
        id: 'hg3',
        title: 'Laughter & Patakhe',
        tag: 'Masti & Sweets',
        text: 'Diyas on the balcony, favorite tunes on repeat, and sneaking an extra motichoor ladoo before pooja! Wishing you a bombastic Diwali full of laughter & love! 🎆🪔'
      },
      {
        id: 'hg4',
        title: 'Barkat & New Heights',
        tag: 'Career & Fortune',
        text: 'Ghar mein barkat ho, career mein naye mukam milein, aur har naya din ek nayi umang lekar aaye. Sending you and the family warmest festive hugs & blessings! 🪔🥂'
      }
    ],
    english: [
      {
        id: 'en1',
        title: 'Home & Gentle Light',
        tag: 'Soulful & Peaceful',
        text: 'May our home always be this full of gentle light, quiet laughter, warm hugs, and cherished memories that last a lifetime. Happy Diwali! 🪔✨'
      },
      {
        id: 'en2',
        title: 'Radiant Health & Joy',
        tag: 'Health & Wellbeing',
        text: 'Beyond the fireworks and noise, I wish you a luminous peace of mind, radiant health, and the courage to follow every single dream in your heart. 🪔'
      },
      {
        id: 'en3',
        title: 'Abundance & Triumphs',
        tag: 'Prosperity & Growth',
        text: 'May Goddess Lakshmi illuminate your journey with boundless abundance, bold opportunities, and joyful triumphs in everything you do! 🎇'
      },
      {
        id: 'en4',
        title: 'To My Favorite Soul',
        tag: 'Close & Cherished',
        text: 'To the brightest light in my life: thank you for making every ordinary day feel like a festival. May your year ahead be as luminous as your smile! 💛'
      }
    ]
  };

  const SAMPLE_WISHES = {
    home: "May our home always be this full of light, warmth, and laughter. Happy Diwali!",
    health: "Wishing you radiant health, boundless peace of mind, and joyful smiles every single day.",
    success: "May Goddess Lakshmi bless you with abundant wealth, prosperity, and grand success in every endeavor.",
    traditional: "Shubh Deepavali! Tamaso ma jyotir gamaya — May divine light illuminate your path and heart.",
    friends: "To the brightest soul I know: wishing you a Diwali as joyful, radiant, and wonderful as you are!"
  };

  const RANGOLI_THEMES = {
    traditional: [
      "Ghar mein hamesha roshni rahe",
      "Good health for everyone we love",
      "Sukh, shanti aur samriddhi",
      "May all your heartfelt dreams take flight"
    ],
    prosperity: [
      "Abundance of wealth & divine fortune",
      "Grand success in every new endeavor",
      "Peace of mind, harmony & fulfillment",
      "A glowing, prosperous year ahead"
    ],
    family: [
      "Laughter that echoes across rooms",
      "Cherished togetherness across miles",
      "A lifetime of warm hugs & sweets",
      "Unbreakable bonds of love & care"
    ]
  };

  // Real Soothing Music Tracks (Human-recorded acoustic Indian music)
  const SOOTHING_TRACKS = [
    { id: 'bansuri', src: 'music_bansuri.mp3', name: 'Soulful Bansuri Bamboo Flute', genre: 'Acoustic Live Flute & Tanpura' },
    { id: 'walkthrough', src: 'walkthrough.mp4', name: 'Original Gali Melodic Dhun', genre: 'Soothing Melodic Acoustic' },
    { id: 'sitar', src: 'music_sitar.mp3', name: 'Royal Darbar Sitar Recital', genre: 'Authentic Indian Classical Sitar' },
    { id: 'flute_meditation', src: 'music_flute_meditation.mp3', name: 'Temple Morning Meditative Flute', genre: 'Serene Peaceful Harmony' }
  ];

  const state = {
    recipient: 'you',
    sender: 'me',
    message: 'दीपों की जगमगाहट, अपनों का साथ, और काजू कतली की मिठास! इस पावन दीवाली आपके घर में अपार खुशियाँ, उत्तम स्वास्थ्य और सुख-समृद्धि आए। शुभ दीपावली! 🪔✨',
    currentStep: 0,
    soundEnabled: true,
    firstDiyaLit: false,
    rangoliColored: false,
    lanternAscending: false,
    holdProgress: 0,
    isHolding: false,
    activeMusicTrack: 0,
    wishesTheme: 'traditional',
    cardTheme: 'crimson',
    isRecipient: false,
    cardsTemporarilyHidden: false
  };

  function parseUrlParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      const toVal = params.get('to');
      const fromVal = params.get('from');
      const msgVal = params.get('msg');
      const themeVal = params.get('theme');
      const musicVal = params.get('music');
      const cardThemeVal = params.get('cardTheme');
      const modeVal = params.get('mode');

      if (toVal && toVal.trim()) {
        state.recipient = toVal.trim();
        state.isRecipient = true; // Locks into recipient view-only mode!
      }
      if (fromVal && fromVal.trim()) state.sender = fromVal.trim();
      if (msgVal && msgVal.trim()) {
        try {
          state.message = decodeURIComponent(msgVal.trim());
        } catch (_) {
          state.message = msgVal.trim();
        }
      }
      if (themeVal && RANGOLI_THEMES[themeVal]) state.wishesTheme = themeVal;
      if (cardThemeVal) state.cardTheme = cardThemeVal;
      if (modeVal === 'recipient' || modeVal === 'view') state.isRecipient = true;

      if (musicVal && !isNaN(parseInt(musicVal, 10))) {
        const tIdx = parseInt(musicVal, 10);
        if (tIdx >= 0 && tIdx < SOOTHING_TRACKS.length) {
          state.activeMusicTrack = tIdx;
        }
      }
    } catch (e) {
      console.warn('URL parsing error:', e);
    }
  }

  // ══════════════════════════════════════════════
  // 2. REAL SOOTHING MUSIC PLAYER & SOUND EFFECTS
  // ══════════════════════════════════════
  let bgAudio = null;
  let audioCtx = null;

  function initAudioPlayer() {
    bgAudio = document.getElementById('bgAudio');
    if (!bgAudio) return;

    bgAudio.volume = 0.65;
    setAudioTrack(state.activeMusicTrack, false);
    updateMusicDropdownUI();
  }

  function setAudioTrack(index, autoplay = true) {
    if (index < 0 || index >= SOOTHING_TRACKS.length) return;
    state.activeMusicTrack = index;
    if (!bgAudio) return;

    const track = SOOTHING_TRACKS[index];
    bgAudio.src = track.src;

    const soundText = document.getElementById('soundText');
    if (soundText) soundText.textContent = track.name;

    if (autoplay && state.soundEnabled) {
      bgAudio.play().catch(() => {});
    }

    updateMusicDropdownUI();
  }

  function updateMusicDropdownUI() {
    document.querySelectorAll('.track-item').forEach((item) => {
      const tId = parseInt(item.getAttribute('data-track'), 10);
      item.classList.toggle('active', tId === state.activeMusicTrack);
    });
  }

  function toggleAudio() {
    if (!bgAudio) return;
    const soundIcon = document.getElementById('soundIcon');

    if (state.soundEnabled) {
      state.soundEnabled = false;
      bgAudio.pause();
      if (soundIcon) {
        soundIcon.innerHTML = `
          <svg class="icon-svg sound-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        `;
      }
    } else {
      state.soundEnabled = true;
      bgAudio.play().catch(() => {});
      if (soundIcon) {
        soundIcon.innerHTML = `
          <svg class="icon-svg sound-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        `;
      }
    }
  }

  function startAudioOnGesture() {
    getAudioCtx();
    if (!bgAudio || !state.soundEnabled) return;
    if (bgAudio.paused) {
      bgAudio.play().catch(() => {});
    }
  }

  function getAudioCtx() {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) audioCtx = new AudioCtxClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playBellChime(freq = 659.25) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.28, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.95);
    } catch (e) {}
  }

  function playSparkleSound(progress) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const freq = 520 + progress * 820;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch (e) {}
  }

  function playFireworkBoom() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;

      const bufferSize = ctx.sampleRate * 0.45;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.45);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();

      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.35);
      oscGain.gain.setValueAtTime(0.3, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {}
  }

  // ══════════════════════════════════════════════
  // 3. THREE.JS 3D LOW-POLY GALI SCENE & INTERACTIVE CAMERA
  // ══════════════════════════════════════
  let scene, camera, renderer;
  let firstDiyaPointLight = null;
  let firstDiyaMesh = null;
  let rangoliMesh = null;
  let skyLanternMesh = null;
  let lanternGlowSprite = null;
  let lanternEmbers = [];
  let miniLanterns = [];
  let hangingKandils = [];
  let fairyLightBulbs = [];
  let curbDiyaItems = [];
  let houseWindows = [];
  let streetLampPoles = [];
  let rangoliPerimeterDiyas = [];
  let animatedDecorations = [];
  let ambientLightRef = null;
  let hemiLightRef = null;

  // Cinematic Walking Interpolation System
  let isCameraWalking = false;
  let walkStartTime = 0;
  let walkDuration = 3800; // 3.8s prolonged cinematic stroll
  let walkStartPos = new THREE.Vector3();
  let walkEndPos = new THREE.Vector3();
  let walkStartLook = new THREE.Vector3();
  let walkEndLook = new THREE.Vector3();
  let pendingStepIndex = 0;

  const CAMERA_STEPS = [
    { pos: new THREE.Vector3(0, 1.5, 12),    look: new THREE.Vector3(0, 1.7, 0) },     // Step 0: Entrance Arch & First Diya
    { pos: new THREE.Vector3(0, 2.7, 5.2),   look: new THREE.Vector3(0, 0.1, 3.2) },   // Step 1: Rangoli on floor
    { pos: new THREE.Vector3(0, 1.8, -10.5), look: new THREE.Vector3(0, 3.4, -16.5) }, // Step 2: Sky Lantern (deep in gali)
    { pos: new THREE.Vector3(0, 9.2, 13.8),  look: new THREE.Vector3(0, 2.4, -4.0) }   // Step 3: Rooftop Fireworks
  ];

  let currentCamPos = CAMERA_STEPS[0].pos.clone();
  let targetCamPos = CAMERA_STEPS[0].pos.clone();
  let currentCamLook = CAMERA_STEPS[0].look.clone();
  let targetCamLook = CAMERA_STEPS[0].look.clone();

  // Interactive 360° Drag & Scroll Controls
  let isDragging = false;
  let pointerStart = { x: 0, y: 0 };
  let userLook = { yaw: 0, pitch: 0 };
  let targetUserLook = { yaw: 0, pitch: 0 };
  let userFovZoom = 0;
  let targetFovZoom = 0;

  function initThreeScene() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x04010B);
    scene.fog = new THREE.FogExp2(0x04010B, 0.022);

    camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 85);
    camera.position.copy(currentCamPos);
    camera.lookAt(currentCamLook);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    ambientLightRef = new THREE.AmbientLight(0x180A28, 0.12);
    scene.add(ambientLightRef);

    hemiLightRef = new THREE.HemisphereLight(0xFFE082, 0x1A0933, 0.12);
    scene.add(hemiLightRef);

    const moonLight = new THREE.DirectionalLight(0x5A4A88, 0.2);
    moonLight.position.set(5, 20, 10);
    scene.add(moonLight);

    buildStreetEnvironment();
    buildStreetLampPoles();
    buildRichDiwaliDecorations();
    buildFirstDiya();
    build3DRangoli();
    build3DAtmosphericSkyLantern();
    buildOverheadFairyLights();

    window.addEventListener('resize', onWindowResize);
    setupCameraDragAndScroll();
    animateThree();
  }

  function setupCameraDragAndScroll() {
    const container = document.getElementById('canvas-container');
    const dragHint = document.querySelector('.drag-hint-pill');

    const onPointerDown = (e) => {
      if (e.target.closest('button') || e.target.closest('.modal-backdrop') || e.target.closest('.gali-card') || e.target.closest('.music-dropdown-menu')) {
        return;
      }
      isDragging = true;
      pointerStart = { x: e.clientX, y: e.clientY };
      if (dragHint) {
        dragHint.style.opacity = '0';
        dragHint.style.transition = 'opacity 0.6s ease';
      }
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - pointerStart.x;
      const dy = e.clientY - pointerStart.y;

      targetUserLook.yaw -= dx * 0.0035;
      targetUserLook.pitch = Math.max(-0.45, Math.min(0.5, targetUserLook.pitch - dy * 0.0025));

      pointerStart = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onWheel = (e) => {
      if (e.target.closest('.modal-backdrop') || e.target.closest('.modal-dialog')) {
        return; // Allow modal to scroll!
      }
      targetFovZoom = Math.max(-12, Math.min(18, targetFovZoom + e.deltaY * 0.025));
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('wheel', onWheel, { passive: true });
  }

  function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function buildStreetEnvironment() {
    // 54-meter long street extending to the distant temple
    const streetGeo = new THREE.BoxGeometry(6.6, 0.3, 56);
    const streetMat = new THREE.MeshLambertMaterial({ color: 0x1E1822 });
    const street = new THREE.Mesh(streetGeo, streetMat);
    street.position.set(0, -0.15, -7);
    scene.add(street);

    const curbGeo = new THREE.BoxGeometry(0.45, 0.38, 56);
    const curbMat = new THREE.MeshLambertMaterial({ color: 0x2C2432 });

    const leftCurb = new THREE.Mesh(curbGeo, curbMat);
    leftCurb.position.set(-3.52, -0.05, -7);
    scene.add(leftCurb);

    const rightCurb = new THREE.Mesh(curbGeo, curbMat);
    rightCurb.position.set(3.52, -0.05, -7);
    scene.add(rightCurb);

    const leftColors = [0x00897B, 0xFBC02D, 0xC2185B, 0x1E88E5, 0x00897B, 0xFBC02D];
    const rightColors = [0xC2185B, 0x7B1FA2, 0xFFA000, 0xFB8500, 0xC2185B, 0x7B1FA2];

    const houseLength = 5.6;
    const houseWidth = 3.8;
    const houseHeight = 7.5;

    // 6 house blocks per side lining the gali
    for (let i = 0; i < 6; i++) {
      const zPos = 8 - i * houseLength;
      createHouseBlock(-5.6, zPos, houseWidth, houseHeight, houseLength, leftColors[i], true);
      createHouseBlock(5.6, zPos, houseWidth, houseHeight, houseLength, rightColors[i], false);
    }

    buildTempleSpire(0, -25.5);

    // Continuous dense curb diyas down both sides of the street
    for (let z = 14; z >= -28; z -= 0.85) {
      createCurbDiya(-3.52, 0.15, z);
      createCurbDiya(3.52, 0.15, z);
    }
  }

  // ══════════════════════════════════════════════
  // AESTHETIC HERITAGE STREET LAMP POLES
  // ══════════════════════════════════════════════
  function buildStreetLampPoles() {
    const poleZPositions = [11.0, 5.0, -1.0, -7.0, -13.0, -19.0];

    poleZPositions.forEach((z) => {
      createSingleLampPole(-3.55, z, true);
      createSingleLampPole(3.55, z, false);
    });
  }

  function createSingleLampPole(x, z, isLeft) {
    const poleGroup = new THREE.Group();

    // 1. Ornate Cast-iron Pedestal Base
    const baseGeo = new THREE.CylinderGeometry(0.24, 0.32, 0.5, 8);
    const ironMat = new THREE.MeshLambertMaterial({ color: 0x1A1412 });
    const base = new THREE.Mesh(baseGeo, ironMat);
    base.position.set(0, 0.25, 0);
    poleGroup.add(base);

    // 2. Brass trim ring on base
    const trimGeo = new THREE.TorusGeometry(0.22, 0.025, 6, 16);
    const brassMat = new THREE.MeshLambertMaterial({ color: 0xC68A00, emissive: 0x5C3B00, emissiveIntensity: 0.3 });
    const trim = new THREE.Mesh(trimGeo, brassMat);
    trim.rotation.x = Math.PI / 2;
    trim.position.set(0, 0.48, 0);
    poleGroup.add(trim);

    // 3. Fluted vertical column shaft
    const shaftGeo = new THREE.CylinderGeometry(0.065, 0.09, 3.2, 10);
    const shaft = new THREE.Mesh(shaftGeo, ironMat);
    shaft.position.set(0, 2.08, 0);
    poleGroup.add(shaft);

    // 4. Middle decorative collar ring
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.02, 6, 16), brassMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 2.2, 0);
    poleGroup.add(collar);

    // 5. Ornate Curved Bracket arm extending towards street
    const armOffset = isLeft ? 0.38 : -0.38;
    const armGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.52, 6);
    const arm = new THREE.Mesh(armGeo, ironMat);
    arm.rotation.z = isLeft ? -Math.PI / 4 : Math.PI / 4;
    arm.position.set(armOffset * 0.5, 3.65, 0);
    poleGroup.add(arm);

    // 6. Vintage Hexagonal Lantern Housing
    const lanternGeo = new THREE.CylinderGeometry(0.24, 0.16, 0.54, 6);
    const lanternFrameMat = new THREE.MeshLambertMaterial({ color: 0x241C16 });
    const lanternFrame = new THREE.Mesh(lanternGeo, lanternFrameMat);
    lanternFrame.position.set(armOffset, 3.82, 0);
    poleGroup.add(lanternFrame);

    // Roof cone on lantern
    const roofGeo = new THREE.ConeGeometry(0.28, 0.22, 6);
    const roof = new THREE.Mesh(roofGeo, brassMat);
    roof.position.set(armOffset, 4.14, 0);
    poleGroup.add(roof);

    // Finial ball on top
    const finialGeo = new THREE.SphereGeometry(0.05, 6, 6);
    const finial = new THREE.Mesh(finialGeo, brassMat);
    finial.position.set(armOffset, 4.28, 0);
    poleGroup.add(finial);

    // 7. Internal Glowing Globe Bulb (starts dim/unlit)
    const globeGeo = new THREE.SphereGeometry(0.13, 10, 10);
    const globeMat = new THREE.MeshLambertMaterial({
      color: 0xFFE082,
      emissive: 0xFFA000,
      emissiveIntensity: 0.08,
      transparent: true,
      opacity: 0.25
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globe.position.set(armOffset, 3.82, 0);
    poleGroup.add(globe);

    // 8. Attached PointLight for street illumination
    const poleLight = new THREE.PointLight(0xFFB703, 0.0, 8.0, 1.5);
    poleLight.position.set(armOffset, 3.75, 0);
    poleGroup.add(poleLight);

    poleGroup.position.set(x, 0, z);
    scene.add(poleGroup);

    streetLampPoles.push({ z, globeMat, pointLight: poleLight });
  }

  function createHouseBlock(x, z, w, h, d, wallColor, isLeft) {
    const houseGroup = new THREE.Group();

    const wallGeo = new THREE.BoxGeometry(w, h, d);
    const wallMat = new THREE.MeshLambertMaterial({ color: wallColor });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.set(x, h / 2, z);
    houseGroup.add(wall);

    const winGeo = new THREE.PlaneGeometry(1.0, 1.4);
    const winMat = new THREE.MeshLambertMaterial({
      color: 0x2A1C12,
      emissive: 0xF59E0B,
      emissiveIntensity: 0.0
    });

    const frontX = isLeft ? x + w / 2 + 0.02 : x - w / 2 - 0.02;
    const rotY = isLeft ? Math.PI / 2 : -Math.PI / 2;

    const doorGeo = new THREE.PlaneGeometry(1.3, 2.4);
    const doorMat = new THREE.MeshLambertMaterial({ color: 0x2A1206 });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(frontX, 1.2, z - 0.8);
    door.rotation.y = rotY;
    houseGroup.add(door);

    createMarigoldToran(houseGroup, frontX, 2.5, z - 0.8, isLeft);

    for (let wz of [-1.3, 1.2]) {
      const win = new THREE.Mesh(winGeo, winMat);
      win.position.set(frontX, 4.4, z + wz);
      win.rotation.y = rotY;
      houseGroup.add(win);
      houseWindows.push({ z: z + wz, winMat });
    }

    const balconyGeo = new THREE.BoxGeometry(0.7, 0.2, 2.2);
    const balconyMat = new THREE.MeshLambertMaterial({ color: 0x200E06 });
    const balcony = new THREE.Mesh(balconyGeo, balconyMat);
    balcony.position.set(frontX + (isLeft ? 0.35 : -0.35), 3.5, z + 1.2);
    houseGroup.add(balcony);

    scene.add(houseGroup);
  }

  function createMarigoldToran(parent, x, y, z, isLeft) {
    const toranGroup = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const colors = [0xFF9F0A, 0xFFD60A, 0x4CAF50];

    for (let i = -6; i <= 6; i++) {
      const arc = (1 - (i / 6) * (i / 6)) * 0.18;
      const mat = new THREE.MeshLambertMaterial({ color: colors[Math.abs(i) % 3] });
      const sphere = new THREE.Mesh(sphereGeo, mat);
      const zOffset = (i / 6) * 0.65;
      sphere.position.set(x + (isLeft ? 0.05 : -0.05), y - arc, z + zOffset);
      toranGroup.add(sphere);
    }
    parent.add(toranGroup);
  }

  function buildTempleSpire(x, z) {
    const templeGroup = new THREE.Group();

    const baseGeo = new THREE.BoxGeometry(7, 6, 2);
    const baseMat = new THREE.MeshLambertMaterial({ color: 0x481426 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(x, 3, z);
    templeGroup.add(base);

    const spireGeo = new THREE.ConeGeometry(2.4, 5.5, 4);
    const spireMat = new THREE.MeshLambertMaterial({
      color: 0x8A5F12,
      emissive: 0xC68A00,
      emissiveIntensity: 0.0
    });
    const spire = new THREE.Mesh(spireGeo, spireMat);
    spire.position.set(x, 8.2, z);
    spire.rotation.y = Math.PI / 4;
    templeGroup.add(spire);

    const starGeo = new THREE.SphereGeometry(0.24, 8, 8);
    const starMat = new THREE.MeshBasicMaterial({ color: 0xFFF3C4 });
    const star = new THREE.Mesh(starGeo, starMat);
    star.position.set(x, 11.2, z);
    templeGroup.add(star);

    scene.add(templeGroup);
  }

  function createCurbDiya(x, y, z) {
    const diyaGroup = new THREE.Group();

    const bowlGeo = new THREE.CylinderGeometry(0.12, 0.06, 0.08, 8);
    const bowlMat = new THREE.MeshLambertMaterial({ color: 0x4A1E00 });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.position.set(x, y, z);
    diyaGroup.add(bowl);

    const flameGeo = new THREE.SphereGeometry(0.06, 6, 6);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xFFEB3B,
      transparent: true,
      opacity: 0.0
    });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(x, y + 0.07, z);
    diyaGroup.add(flame);

    curbDiyaItems.push({ z, flameMat });
    scene.add(diyaGroup);
  }

  // ══════════════════════════════════════════════
  // RICH DIWALI DECORATIONS (CHANDELIERS, TORANS, URLIS, KANDILS, RANGOLIS)
  // ══════════════════════════════════════════════
  function buildRichDiwaliDecorations() {
    // 1. Two Grand Suspended Brass Chandeliers (Jhumars) with Ring of Glowing Diyas
    buildJhumarChandelier(0, 4.8, 0.2);
    buildJhumarChandelier(0, 4.8, -8.5);

    // 2. Cascading Marigold (Genda Phool) & Jasmine (Mogra) Floral Torans / Swags
    const toranZPositions = [4.0, -1.8, -6.8, -12.2, -17.2];
    toranZPositions.forEach((z, idx) => {
      buildFloralToran(z, idx);
    });

    // 3. Traditional Carved Stone Pedestal Urlis with Floating Rose Petals & Floating Diyas
    buildCurbsideUrli(-3.45, 0.16, 2.0);   // Left curb
    buildCurbsideUrli(3.45, 0.16, -2.5);   // Right curb
    buildCurbsideUrli(-3.45, 0.16, -7.5);  // Left curb
    buildCurbsideUrli(3.45, 0.16, -13.0);  // Right curb

    // 4. Authentic 3D Paper Akash Kandils (Star Lanterns with Hanging Streamers)
    buildAkashKandil(-2.6, 4.2, 1.2, 0xFF1744);   // Crimson red
    buildAkashKandil(2.6, 4.2, -4.2, 0x00E5FF);    // Cyan teal
    buildAkashKandil(-2.6, 4.2, -9.8, 0xFFA000);   // Golden saffron
    buildAkashKandil(2.6, 4.2, -14.8, 0xE040FB);   // Magenta violet

    // 5. Doorway Entrance Floral Rangolis on Pavement with Twin Floor Diyas
    buildDoorwayFloralRangoli(-3.65, 0.03, 0.8, true);
    buildDoorwayFloralRangoli(3.65, 0.03, -5.2, false);
    buildDoorwayFloralRangoli(-3.65, 0.03, -11.2, true);

    // 6. Festive Triangular Bunting Pennants (Bandhanwar) along First Floor Balconies
    buildBalconyBunting(-3.55, 3.75, 12, -22);
    buildBalconyBunting(3.55, 3.75, 12, -22);
  }

  function buildJhumarChandelier(x, y, z) {
    const jhumar = new THREE.Group();

    // Suspension brass chain
    const chainGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.2, 4);
    const chainMat = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
    const chain = new THREE.Mesh(chainGeo, chainMat);
    chain.position.set(0, 0.6, 0);
    jhumar.add(chain);

    // Top ornate brass canopy bell
    const brassMat = new THREE.MeshLambertMaterial({
      color: 0xDAA520,
      emissive: 0x8A5F12,
      emissiveIntensity: 0.4
    });
    const canopy = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.22, 10), brassMat);
    canopy.position.set(0, 0.1, 0);
    jhumar.add(canopy);

    // Main large brass ring with filigree
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.035, 8, 24), brassMat);
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.set(0, -0.25, 0);
    jhumar.add(outerRing);

    // Inner concentric ring
    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.025, 6, 20), brassMat);
    innerRing.rotation.x = Math.PI / 2;
    innerRing.position.set(0, -0.15, 0);
    jhumar.add(innerRing);

    // Cross brass spokes connecting rings
    for (let i = 0; i < 4; i++) {
      const ang = (i / 4) * Math.PI;
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.7, 4), brassMat);
      spoke.rotation.z = Math.PI / 2;
      spoke.rotation.y = ang;
      spoke.position.set(0, -0.25, 0);
      jhumar.add(spoke);
    }

    // 8 Brass Diya Cups with Glowing Flames around outer ring
    const diyaBowlMat = new THREE.MeshLambertMaterial({ color: 0xB8860B });
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xFFEB3B });
    for (let i = 0; i < 8; i++) {
      const ang = (i / 8) * Math.PI * 2;
      const dx = Math.cos(ang) * 0.85;
      const dz = Math.sin(ang) * 0.85;

      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.035, 0.05, 8), diyaBowlMat);
      cup.position.set(dx, -0.23, dz);
      jhumar.add(cup);

      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), flameMat);
      flame.position.set(dx, -0.17, dz);
      flame.scale.set(0.8, 1.4, 0.8);
      jhumar.add(flame);
    }

    // Hanging brass bell at bottom center
    const bell = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.24, 8), brassMat);
    bell.position.set(0, -0.5, 0);
    bell.rotation.x = Math.PI;
    jhumar.add(bell);

    // Warm central point light
    const light = new THREE.PointLight(0xFFA000, 1.35, 8.0, 1.3);
    light.position.set(0, -0.2, 0);
    jhumar.add(light);

    jhumar.position.set(x, y, z);
    scene.add(jhumar);

    animatedDecorations.push({
      type: 'sway',
      mesh: jhumar,
      speed: 1.2,
      angle: 0.032,
      offset: z * 0.4
    });
  }

  function buildFloralToran(z, variant) {
    const toranGroup = new THREE.Group();
    const marigoldColors = [0xFF6F00, 0xFFD54F, 0xFFFFFF, 0xFF8F00, 0x2E7D32];
    const flowerGeo = new THREE.SphereGeometry(0.075, 6, 6);

    const numFlowers = 26;
    for (let i = 0; i <= numFlowers; i++) {
      const t = i / numFlowers;
      const x = -3.5 + t * 7.0;
      const sag = 5.2 - Math.cos((x / 3.5) * Math.PI * 0.5) * 0.75;
      const color = marigoldColors[i % marigoldColors.length];
      const flowerMat = new THREE.MeshLambertMaterial({ color: color });
      const flower = new THREE.Mesh(flowerGeo, flowerMat);
      flower.position.set(x, sag, z);
      toranGroup.add(flower);

      // Hanging vertical floral drops at intervals
      if (i === 4 || i === 8 || i === 13 || i === 18 || i === 22) {
        const dropCount = (i === 13) ? 6 : 4;
        for (let d = 1; d <= dropCount; d++) {
          const dy = sag - d * 0.14;
          const dropColor = marigoldColors[(i + d) % marigoldColors.length];
          const dropFlower = new THREE.Mesh(
            new THREE.SphereGeometry(0.065, 5, 5),
            new THREE.MeshLambertMaterial({ color: dropColor })
          );
          dropFlower.position.set(x, dy, z);
          toranGroup.add(dropFlower);
        }
        const bell = new THREE.Mesh(
          new THREE.ConeGeometry(0.045, 0.08, 6),
          new THREE.MeshLambertMaterial({ color: 0xD4AF37, emissive: 0x5C3B00, emissiveIntensity: 0.3 })
        );
        bell.position.set(x, sag - (dropCount + 1) * 0.14, z);
        bell.rotation.x = Math.PI;
        toranGroup.add(bell);
      }
    }

    scene.add(toranGroup);
    animatedDecorations.push({
      type: 'sway',
      mesh: toranGroup,
      speed: 0.9,
      angle: 0.015,
      offset: z * 0.3
    });
  }

  function buildCurbsideUrli(x, y, z) {
    const urliGroup = new THREE.Group();

    // 1. Carved Sandstone Square Pedestal
    const pedGeo = new THREE.BoxGeometry(0.55, 0.28, 0.55);
    const pedMat = new THREE.MeshLambertMaterial({ color: 0x3E2D24 });
    const pedestal = new THREE.Mesh(pedGeo, pedMat);
    pedestal.position.set(0, 0.14, 0);
    urliGroup.add(pedestal);

    // 2. Wide Hammered Brass Urli Bowl
    const bowlGeo = new THREE.CylinderGeometry(0.42, 0.22, 0.18, 16);
    const brassMat = new THREE.MeshLambertMaterial({
      color: 0xC68A00,
      emissive: 0x5C3B00,
      emissiveIntensity: 0.35
    });
    const bowl = new THREE.Mesh(bowlGeo, brassMat);
    bowl.position.set(0, 0.37, 0);
    urliGroup.add(bowl);

    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.028, 6, 20), brassMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0, 0.46, 0);
    urliGroup.add(rim);

    // 3. Reflective Water Disc
    const waterGeo = new THREE.CylinderGeometry(0.40, 0.40, 0.01, 16);
    const waterMat = new THREE.MeshLambertMaterial({ color: 0x0E2433, transparent: true, opacity: 0.92 });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.position.set(0, 0.44, 0);
    urliGroup.add(water);

    // 4. Floating Crimson Rose Petals & Golden Marigolds
    const petalGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.005, 6);
    const roseMat = new THREE.MeshLambertMaterial({ color: 0xD81B60 });
    const gendaMat = new THREE.MeshLambertMaterial({ color: 0xFFA000 });
    for (let i = 0; i < 9; i++) {
      const ang = (i / 9) * Math.PI * 2;
      const pr = 0.22 + (i % 2) * 0.09;
      const petal = new THREE.Mesh(petalGeo, (i % 2 === 0) ? roseMat : gendaMat);
      petal.position.set(Math.cos(ang) * pr, 0.448, Math.sin(ang) * pr);
      petal.rotation.y = ang + 0.3;
      urliGroup.add(petal);
    }

    // 5. Central Floating Diya with Flame
    const diyaGeo = new THREE.CylinderGeometry(0.09, 0.045, 0.06, 8);
    const diyaMat = new THREE.MeshLambertMaterial({ color: 0x5C2400 });
    const centerDiya = new THREE.Mesh(diyaGeo, diyaMat);
    centerDiya.position.set(0, 0.465, 0);
    urliGroup.add(centerDiya);

    const flameGeo = new THREE.SphereGeometry(0.042, 6, 6);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xFFEB3B });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(0, 0.52, 0);
    flame.scale.set(0.8, 1.4, 0.8);
    urliGroup.add(flame);

    const urliLight = new THREE.PointLight(0xFFA000, 0.7, 3.5, 1.5);
    urliLight.position.set(0, 0.55, 0);
    urliGroup.add(urliLight);

    urliGroup.position.set(x, y, z);
    scene.add(urliGroup);
  }

  function buildAkashKandil(x, y, z, color) {
    const kandil = new THREE.Group();

    // Suspension wire
    const strGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0.7, 0),
      new THREE.Vector3(0, 0, 0)
    ]);
    const str = new THREE.Line(strGeo, new THREE.LineBasicMaterial({ color: 0xD4AF37, opacity: 0.6, transparent: true }));
    kandil.add(str);

    // Central Octahedron Star body
    const bodyGeo = new THREE.OctahedronGeometry(0.32, 0);
    const bodyMat = new THREE.MeshLambertMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 0.65
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.scale.set(1.0, 1.3, 1.0);
    kandil.add(body);

    // Star point cones
    const spikeGeo = new THREE.ConeGeometry(0.09, 0.22, 4);
    const spikeMat = new THREE.MeshLambertMaterial({
      color: 0xFFD54F,
      emissive: 0x8A5F12,
      emissiveIntensity: 0.5
    });
    const spikeDirs = [
      { dir: [1, 0, 0], rot: [0, 0, -Math.PI / 2] },
      { dir: [-1, 0, 0], rot: [0, 0, Math.PI / 2] },
      { dir: [0, 0, 1], rot: [Math.PI / 2, 0, 0] },
      { dir: [0, 0, -1], rot: [-Math.PI / 2, 0, 0] }
    ];
    spikeDirs.forEach(({ dir, rot }) => {
      const sp = new THREE.Mesh(spikeGeo, spikeMat);
      sp.position.set(dir[0] * 0.32, 0, dir[2] * 0.32);
      sp.rotation.set(rot[0], rot[1], rot[2]);
      kandil.add(sp);
    });

    // Hanging paper streamers / tassels
    const streamerGeo = new THREE.PlaneGeometry(0.045, 0.55);
    const streamerMat = new THREE.MeshBasicMaterial({
      color: 0xFFE082,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    for (let i = 0; i < 4; i++) {
      const ang = (i / 4) * Math.PI * 2;
      const st = new THREE.Mesh(streamerGeo, streamerMat);
      st.position.set(Math.cos(ang) * 0.12, -0.6, Math.sin(ang) * 0.12);
      kandil.add(st);
      animatedDecorations.push({
        type: 'streamer',
        mesh: st,
        speed: 2.2,
        offset: i * 0.8 + z
      });
    }

    const kLight = new THREE.PointLight(color, 0.8, 4.0, 1.6);
    kLight.position.set(0, 0, 0);
    kandil.add(kLight);

    kandil.position.set(x, y, z);
    scene.add(kandil);

    animatedDecorations.push({
      type: 'sway',
      mesh: kandil,
      speed: 1.5,
      angle: 0.05,
      offset: z * 0.5
    });
  }

  function buildDoorwayFloralRangoli(x, y, z, isLeft) {
    const group = new THREE.Group();

    // Outer floral circular carpet
    const outerGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.012, 16);
    const outerMat = new THREE.MeshLambertMaterial({ color: 0xD81B60 });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    outer.position.set(0, 0.006, 0);
    group.add(outer);

    // Middle yellow ring
    const midGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.014, 16);
    const midMat = new THREE.MeshLambertMaterial({ color: 0xFFA000 });
    const mid = new THREE.Mesh(midGeo, midMat);
    mid.position.set(0, 0.007, 0);
    group.add(mid);

    // Center green lotus
    const cenGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.016, 12);
    const cenMat = new THREE.MeshLambertMaterial({ color: 0x00897B });
    const cen = new THREE.Mesh(cenGeo, cenMat);
    cen.position.set(0, 0.008, 0);
    group.add(cen);

    // Twin flanking doorway clay diyas with flames
    [-0.55, 0.55].forEach(dz => {
      const diya = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.04, 0.06, 8),
        new THREE.MeshLambertMaterial({ color: 0x5C2400 })
      );
      diya.position.set(0, 0.03, dz);
      group.add(diya);

      const fl = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xFFD54F })
      );
      fl.position.set(0, 0.075, dz);
      fl.scale.set(0.8, 1.4, 0.8);
      group.add(fl);
    });

    group.position.set(x, y, z);
    scene.add(group);
  }

  function buildBalconyBunting(x, y, zStart, zEnd) {
    const buntingGroup = new THREE.Group();
    const colors = [0xFF5722, 0xFFC107, 0x4CAF50, 0xE91E63, 0x00BCD4];
    const flagWidth = 0.35;
    const flagHeight = 0.42;

    for (let z = zStart; z >= zEnd; z -= flagWidth * 1.3) {
      const geom = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        0, 0, -flagWidth * 0.5,
        0, 0, flagWidth * 0.5,
        0, -flagHeight, 0
      ]);
      geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      geom.computeVertexNormals();

      const color = colors[Math.abs(Math.round(z * 3)) % colors.length];
      const mat = new THREE.MeshLambertMaterial({
        color: color,
        side: THREE.DoubleSide
      });
      const flag = new THREE.Mesh(geom, mat);
      flag.position.set(x, y, z);
      buntingGroup.add(flag);
    }

    scene.add(buntingGroup);
    animatedDecorations.push({
      type: 'streamer',
      mesh: buntingGroup,
      speed: 1.8,
      offset: x
    });
  }

  function buildFirstDiya() {
    const diyaGroup = new THREE.Group();

    const bowlGeo = new THREE.CylinderGeometry(0.42, 0.2, 0.2, 12);
    const bowlMat = new THREE.MeshLambertMaterial({ color: 0x5C2400 });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.position.set(0, 0.1, 8.5);
    diyaGroup.add(bowl);

    const flameGeo = new THREE.SphereGeometry(0.16, 8, 8);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xFFD54F,
      transparent: true,
      opacity: 0.8
    });
    firstDiyaMesh = new THREE.Mesh(flameGeo, flameMat);
    firstDiyaMesh.position.set(0, 0.3, 8.5);
    firstDiyaMesh.scale.set(0.8, 1.4, 0.8);
    diyaGroup.add(firstDiyaMesh);

    firstDiyaPointLight = new THREE.PointLight(0xFFA000, 0.8, 10, 1.4);
    firstDiyaPointLight.position.set(0, 0.45, 8.5);
    scene.add(firstDiyaPointLight);

    scene.add(diyaGroup);
  }

  // ══════════════════════════════════════════════
  // RANGOLI TEXTURE CANVAS & REAL-TIME PROGRESS DRAWING
  // ══════════════════════════════════════════════
  function build3DRangoli() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    drawRangoliWithProgress(canvas, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;

    const rangoliGeo = new THREE.PlaneGeometry(3.8, 3.8);
    const rangoliMat = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true,
      opacity: 0.98
    });

    rangoliMesh = new THREE.Mesh(rangoliGeo, rangoliMat);
    rangoliMesh.rotation.x = -Math.PI / 2;
    rangoliMesh.position.set(0, 0.02, 3.2);
    scene.add(rangoliMesh);

    // 8 3D Perimeter Clay Diyas placed symmetrically around the Rangoli
    const rRadius = 1.95;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const dx = Math.cos(angle) * rRadius;
      const dz = 3.2 + Math.sin(angle) * rRadius;

      const diyaGroup = new THREE.Group();
      const bowl = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.06, 0.08, 8),
        new THREE.MeshLambertMaterial({ color: 0x5C2400 })
      );
      bowl.position.set(0, 0.04, 0);
      diyaGroup.add(bowl);

      const flameMat = new THREE.MeshBasicMaterial({
        color: 0xFFD54F,
        transparent: true,
        opacity: 0.0
      });
      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), flameMat);
      flame.position.set(0, 0.1, 0);
      diyaGroup.add(flame);

      diyaGroup.position.set(dx, 0, dz);
      scene.add(diyaGroup);

      rangoliPerimeterDiyas.push({ flameMat, flameMesh: flame, angle });
    }
  }

  function drawRangoliWithProgress(canvas, progress) {
    const ctx = canvas.getContext('2d');
    const cx = 512, cy = 512;
    ctx.clearRect(0, 0, 1024, 1024);

    // 1. Uncolored delicate golden outline (Mandala wireframe, always visible)
    ctx.beginPath();
    ctx.arc(cx, cy, 470, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 224, 130, 0.45)';
    ctx.lineWidth = 4;
    ctx.stroke();

    // 24 Kolam pulli border dots
    for (let i = 0; i < 24; i++) {
      const ang = (i / 24) * Math.PI * 2;
      const px = cx + Math.cos(ang) * 455;
      const py = cy + Math.sin(ang) * 455;
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();
    }

    // Outer Petal Wireframes
    for (let i = 0; i < 16; i++) {
      const ang = (i / 16) * Math.PI * 2;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ang);
      ctx.beginPath();
      ctx.ellipse(0, 340, 42, 85, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 224, 130, 0.4)';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }

    // Middle Ring Wireframe
    ctx.beginPath();
    ctx.arc(cx, cy, 270, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 224, 130, 0.45)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Inner Lotus Wireframe
    for (let i = 0; i < 8; i++) {
      const ang = (i / 8) * Math.PI * 2;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ang);
      ctx.beginPath();
      ctx.ellipse(0, 160, 36, 68, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 224, 130, 0.5)';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }

    // Center Circle Wireframe
    ctx.beginPath();
    ctx.arc(cx, cy, 110, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 224, 130, 0.6)';
    ctx.lineWidth = 4;
    ctx.stroke();

    // 2. RADIAL COLOR REVELATION (Expands smoothly from center as user holds!)
    if (progress > 0) {
      ctx.save();
      const clipRadius = Math.max(20, progress * 490);
      ctx.beginPath();
      ctx.arc(cx, cy, clipRadius, 0, Math.PI * 2);
      ctx.clip();

      // Outer Crimson & Gold Ring
      ctx.beginPath();
      ctx.arc(cx, cy, 475, 0, Math.PI * 2);
      ctx.fillStyle = '#C2185B';
      ctx.fill();

      // Layer 1: 16 Pointed Rani Pink Lotus Petals
      for (let i = 0; i < 16; i++) {
        const ang = (i / 16) * Math.PI * 2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ang);
        ctx.beginPath();
        ctx.ellipse(0, 370, 48, 95, 0, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#FF2A6D' : '#E91E63';
        ctx.fill();
        ctx.strokeStyle = '#FFE082';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();
      }

      // Layer 2: 16 Marigold Yellow & Saffron Petals
      ctx.beginPath();
      ctx.arc(cx, cy, 330, 0, Math.PI * 2);
      ctx.fillStyle = '#FF9F0A';
      ctx.fill();

      for (let i = 0; i < 16; i++) {
        const ang = (i / 16) * Math.PI * 2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ang + Math.PI / 16);
        ctx.beginPath();
        ctx.ellipse(0, 260, 38, 70, 0, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#FFD60A' : '#FFA000';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }

      // Layer 3: Peacock Turquoise Ring
      ctx.beginPath();
      ctx.arc(cx, cy, 220, 0, Math.PI * 2);
      ctx.fillStyle = '#05D9E8';
      ctx.fill();

      // Layer 4: 8 Inner Sacred Lotus Petals
      for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ang);
        ctx.beginPath();
        ctx.ellipse(0, 155, 34, 62, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#FF2A6D';
        ctx.fill();
        ctx.strokeStyle = '#FFE082';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();
      }

      // Layer 5: Golden Medallion Center
      ctx.beginPath();
      ctx.arc(cx, cy, 115, 0, Math.PI * 2);
      ctx.fillStyle = '#FFF8E1';
      ctx.fill();
      ctx.strokeStyle = '#FFD54F';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Auspicious Sunburst Rays
      for (let i = 0; i < 12; i++) {
        const ang = (i / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang) * 95, cy + Math.sin(ang) * 95);
        ctx.lineTo(cx + Math.cos(ang) * 115, cy + Math.sin(ang) * 115);
        ctx.strokeStyle = '#FFA000';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      ctx.restore();
    }

    // Recipient Name Calligraphy
    ctx.fillStyle = progress > 0.4 ? '#4A0E17' : 'rgba(255, 224, 130, 0.75)';
    ctx.font = 'bold 52px "Playfair Display", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(state.recipient, cx, cy - 6);

    // Diya vector motif under name
    ctx.fillStyle = progress > 0.4 ? '#E65100' : 'rgba(255, 183, 3, 0.8)';
    ctx.beginPath();
    ctx.arc(cx, cy + 28, 12, 0, Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy + 22, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#FFEB3B';
    ctx.fill();
  }

  // ══════════════════════════════════════════════
  // GLOWING ATMOSPHERIC SKY LANTERN & RADIAL BLOOM
  // ══════════════════════════════════════════════
  function createLanternGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 245, 180, 1.0)');
    grad.addColorStop(0.25, 'rgba(255, 150, 0, 0.65)');
    grad.addColorStop(0.65, 'rgba(230, 80, 0, 0.22)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
  }

  function build3DAtmosphericSkyLantern() {
    const lanternGroup = new THREE.Group();

    // 1. Translucent Fluted Origami Body (Dual Tapered)
    const bodyGeo = new THREE.CylinderGeometry(0.58, 0.44, 1.4, 24, 1, true);
    const bodyMat = new THREE.MeshLambertMaterial({
      color: 0xFFE082,
      emissive: 0xFF7A00,
      emissiveIntensity: 1.15,
      transparent: true,
      opacity: 0.94,
      side: THREE.DoubleSide
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    lanternGroup.add(body);

    // 2. Bamboo Ring Base & Top Gold Rim
    const topRingGeo = new THREE.TorusGeometry(0.58, 0.032, 6, 24);
    const ringMat = new THREE.MeshLambertMaterial({ color: 0xD4AF37, emissive: 0x8A5F12, emissiveIntensity: 0.5 });
    const topRing = new THREE.Mesh(topRingGeo, ringMat);
    topRing.rotation.x = Math.PI / 2;
    topRing.position.y = 0.7;
    lanternGroup.add(topRing);

    const bottomRingGeo = new THREE.TorusGeometry(0.44, 0.035, 6, 24);
    const bottomRing = new THREE.Mesh(bottomRingGeo, ringMat);
    bottomRing.rotation.x = Math.PI / 2;
    bottomRing.position.y = -0.7;
    lanternGroup.add(bottomRing);

    // Wire Cross Braces at base
    const wireMat = new THREE.LineBasicMaterial({ color: 0x8A5F12 });
    const wireGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.43, -0.7, 0), new THREE.Vector3(0.43, -0.7, 0),
      new THREE.Vector3(0, -0.7, -0.43), new THREE.Vector3(0, -0.7, 0.43)
    ]);
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    lanternGroup.add(wire);

    // 3. Glowing Candle Core Flame with PointLight
    const flameGeo = new THREE.SphereGeometry(0.18, 8, 8);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xFFFFAA });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(0, -0.38, 0);
    lanternGroup.add(flame);

    const lanternLight = new THREE.PointLight(0xFFA000, 3.2, 15, 1.2);
    lanternLight.position.set(0, 0, 0);
    lanternGroup.add(lanternLight);

    // 4. Atmospheric Radial Bloom Sprite Halo
    const glowMat = new THREE.SpriteMaterial({
      map: createLanternGlowTexture(),
      blending: THREE.AdditiveBlending,
      color: 0xFFA000,
      transparent: true,
      opacity: 0.92
    });
    lanternGlowSprite = new THREE.Sprite(glowMat);
    lanternGlowSprite.scale.set(3.4, 3.4, 1.0);
    lanternGlowSprite.position.set(0, 0, 0);
    lanternGroup.add(lanternGlowSprite);

    // 5. Hanging Golden Tassels
    const tasselGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.48, 4);
    const tasselMat = new THREE.MeshBasicMaterial({ color: 0xF5B041 });
    for (let i = 0; i < 4; i++) {
      const ang = (i / 4) * Math.PI * 2;
      const tassel = new THREE.Mesh(tasselGeo, tasselMat);
      tassel.position.set(Math.cos(ang) * 0.32, -0.95, Math.sin(ang) * 0.32);
      lanternGroup.add(tassel);
    }

    lanternGroup.position.set(0, 3.4, -16.5);
    skyLanternMesh = lanternGroup;
    scene.add(skyLanternMesh);

    buildMiniDistantLanterns();
  }

  function buildMiniDistantLanterns() {
    const miniGeo = new THREE.CylinderGeometry(0.2, 0.16, 0.5, 8);
    const miniMat = new THREE.MeshLambertMaterial({
      color: 0xFFD54F,
      emissive: 0xFF9800,
      emissiveIntensity: 0.85
    });

    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(miniGeo, miniMat);
      const x = (Math.random() - 0.5) * 16;
      const z = -18 - Math.random() * 10;
      const y = 3.6 + Math.random() * 3.5;
      m.position.set(x, y, z);
      m.visible = false;
      scene.add(m);
      miniLanterns.push({ mesh: m, speed: 0.022 + Math.random() * 0.024, startY: y });
    }
  }

  function spawnLanternEmber(pos) {
    const emberGeo = new THREE.SphereGeometry(0.04, 4, 4);
    const emberMat = new THREE.MeshBasicMaterial({ color: 0xFFD54F, transparent: true, opacity: 0.9 });
    const ember = new THREE.Mesh(emberGeo, emberMat);
    ember.position.set(
      pos.x + (Math.random() - 0.5) * 0.4,
      pos.y - 0.9,
      pos.z + (Math.random() - 0.5) * 0.4
    );
    scene.add(ember);
    lanternEmbers.push({ mesh: ember, vy: -0.015 - Math.random() * 0.01, life: 1.0 });
  }

  function buildOverheadFairyLights() {
    const bulbColors = [0xFFD54F, 0xFFE082, 0xFFA000, 0xFF8F00, 0xFF1744, 0x00E5FF, 0x69F0AE, 0xE040FB];
    const bulbGeo = new THREE.SphereGeometry(0.052, 6, 6);
    const dropBulbGeo = new THREE.SphereGeometry(0.042, 5, 5);

    // 1. Cross-street catenary strings from z = 15 to z = -28 (dense every 0.85m!)
    for (let z = 15; z >= -28; z -= 0.85) {
      const wirePoints = [];
      const sagSteps = 16;
      for (let s = 0; s <= sagSteps; s++) {
        const x = -3.5 + (s / sagSteps) * 7.0;
        const sag = 5.3 - Math.cos((x / 3.5) * Math.PI * 0.5) * 0.65;
        wirePoints.push(new THREE.Vector3(x, sag, z));
      }
      const wireGeo = new THREE.BufferGeometry().setFromPoints(wirePoints);
      const wireMat = new THREE.LineBasicMaterial({ color: 0x2A1C12, opacity: 0.4, transparent: true });
      const wire = new THREE.Line(wireGeo, wireMat);
      scene.add(wire);

      // Place 15 tiny bulbs on each cross wire
      for (let s = 1; s < sagSteps; s++) {
        const x = -3.5 + (s / sagSteps) * 7.0;
        const sag = 5.3 - Math.cos((x / 3.5) * Math.PI * 0.5) * 0.65;
        const color = bulbColors[Math.floor(Math.random() * bulbColors.length)];
        const bulbMat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.10 });
        const bulb = new THREE.Mesh(bulbGeo, bulbMat);
        bulb.position.set(x, sag - 0.04, z);
        scene.add(bulb);
        fairyLightBulbs.push({ z, bulbMat });

        // Vertical hanging curtain droopers (fringes) every 3rd step
        if (s % 3 === 0) {
          const dropCount = 2 + (Math.abs(Math.round(s * 7)) % 3);
          const dropPoints = [new THREE.Vector3(x, sag - 0.04, z)];
          for (let d = 1; d <= dropCount; d++) {
            const dropY = sag - 0.04 - d * 0.16;
            dropPoints.push(new THREE.Vector3(x, dropY, z));
            const dropColor = bulbColors[Math.floor(Math.random() * bulbColors.length)];
            const dropMat = new THREE.MeshBasicMaterial({ color: dropColor, transparent: true, opacity: 0.10 });
            const dropBulb = new THREE.Mesh(dropBulbGeo, dropMat);
            dropBulb.position.set(x, dropY, z);
            scene.add(dropBulb);
            fairyLightBulbs.push({ z, bulbMat: dropMat });
          }
          const dropLineGeo = new THREE.BufferGeometry().setFromPoints(dropPoints);
          const dropLineMat = new THREE.LineBasicMaterial({ color: 0x2A1C12, opacity: 0.35, transparent: true });
          scene.add(new THREE.Line(dropLineGeo, dropLineMat));
        }
      }

      // Add a festive hanging paper kandil lantern every 2.4m
      if (Math.abs(z % 2.4) < 0.45) {
        createHangingKandil(0, 4.3, z, bulbColors[Math.floor(Math.random() * bulbColors.length)]);
      }
    }

    // 2. Longitudinal roof eaves fairy light cables on left and right sides
    [-3.52, 3.52].forEach((xSide) => {
      const longPoints = [new THREE.Vector3(xSide, 5.3, 15), new THREE.Vector3(xSide, 5.3, -28)];
      const longWireGeo = new THREE.BufferGeometry().setFromPoints(longPoints);
      const longWireMat = new THREE.LineBasicMaterial({ color: 0x2A1C12, opacity: 0.35, transparent: true });
      scene.add(new THREE.Line(longWireGeo, longWireMat));

      for (let z = 14.5; z >= -27.5; z -= 0.55) {
        const color = bulbColors[Math.floor(Math.random() * bulbColors.length)];
        const bulbMat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.10 });
        const bulb = new THREE.Mesh(bulbGeo, bulbMat);
        bulb.position.set(xSide, 5.25, z);
        scene.add(bulb);
        fairyLightBulbs.push({ z, bulbMat });
      }
    });

    // 3. Mid-sky longitudinal fairy strings running parallel down the lane
    [-1.75, 1.75].forEach((xMid) => {
      const midPoints = [new THREE.Vector3(xMid, 5.0, 15), new THREE.Vector3(xMid, 5.0, -28)];
      const midWireGeo = new THREE.BufferGeometry().setFromPoints(midPoints);
      const midWireMat = new THREE.LineBasicMaterial({ color: 0x2A1C12, opacity: 0.28, transparent: true });
      scene.add(new THREE.Line(midWireGeo, midWireMat));

      for (let z = 14.0; z >= -27.0; z -= 0.65) {
        const color = bulbColors[Math.floor(Math.random() * bulbColors.length)];
        const bulbMat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.10 });
        const bulb = new THREE.Mesh(dropBulbGeo, bulbMat);
        bulb.position.set(xMid, 4.95, z);
        scene.add(bulb);
        fairyLightBulbs.push({ z, bulbMat });
      }
    });
  }

  function createHangingKandil(x, y, z, color) {
    const kandilGroup = new THREE.Group();
    const octGeo = new THREE.OctahedronGeometry(0.28, 0);
    const octMat = new THREE.MeshLambertMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 0.0
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    oct.scale.set(0.9, 1.4, 0.9);
    kandilGroup.add(oct);

    kandilGroup.position.set(x, y, z);
    hangingKandils.push({ z, kandilGroup, octMat });
    scene.add(kandilGroup);
  }

  // ══════════════════════════════════════════════
  // CASCADE LIGHTING WAVE
  // ══════════════════════════════════════════════
  function triggerCascadeLightingWave() {
    if (state.firstDiyaLit) return;
    state.firstDiyaLit = true;

    playBellChime(523.25);

    const cardStep1 = document.getElementById('cardStep1');
    if (cardStep1) cardStep1.classList.add('card-faded');

    showFloatingBanner("Watch the light cascade through the gali...", false);

    if (firstDiyaPointLight) {
      firstDiyaPointLight.intensity = 2.4;
      firstDiyaPointLight.color.setHex(0xFFB703);
    }
    if (firstDiyaMesh) {
      firstDiyaMesh.material.color.setHex(0xFFEB3B);
      firstDiyaMesh.scale.set(1.2, 1.9, 1.2);
    }

    const maxZ = 15;
    const minZ = -28;
    const waveDuration = 3200;

    // 1. Curb diyas ignite from nearest to farthest
    curbDiyaItems.sort((a, b) => b.z - a.z);
    curbDiyaItems.forEach(({ z, flameMat }) => {
      const delay = Math.max(0, Math.min(waveDuration, ((maxZ - z) / (maxZ - minZ)) * waveDuration));
      setTimeout(() => {
        flameMat.opacity = 1.0;
      }, delay);
    });

    // 2. Street lamp poles ignite from nearest to farthest
    streetLampPoles.forEach(({ z, globeMat, pointLight }) => {
      const delay = Math.max(0, Math.min(waveDuration, ((maxZ - z) / (maxZ - minZ)) * waveDuration));
      setTimeout(() => {
        globeMat.opacity = 1.0;
        globeMat.emissiveIntensity = 2.4;
        globeMat.color.setHex(0xFFF3C4);
        if (pointLight) pointLight.intensity = 1.8;
      }, delay);
    });

    // 3. House windows glow from nearest to farthest
    houseWindows.forEach(({ z, winMat }) => {
      const delay = Math.max(0, Math.min(waveDuration, ((maxZ - z) / (maxZ - minZ)) * waveDuration));
      setTimeout(() => {
        winMat.color.setHex(0xFFE082);
        winMat.emissiveIntensity = 0.75;
      }, delay);
    });

    // 4. Fairy light bulbs ignite from nearest to farthest
    fairyLightBulbs.forEach(({ z, bulbMat }) => {
      const delay = Math.max(0, Math.min(waveDuration, ((maxZ - z) / (maxZ - minZ)) * waveDuration));
      setTimeout(() => {
        bulbMat.opacity = 1.0;
      }, delay);
    });

    // 5. Hanging kandil lanterns
    hangingKandils.forEach(({ z, octMat }) => {
      const delay = Math.max(0, Math.min(waveDuration, ((maxZ - z) / (maxZ - minZ)) * waveDuration));
      setTimeout(() => {
        octMat.emissiveIntensity = 0.65;
      }, delay);
    });

    setTimeout(() => {
      if (ambientLightRef) ambientLightRef.intensity = 0.52;
      if (hemiLightRef) hemiLightRef.intensity = 0.65;
      const streetCenterLight = new THREE.PointLight(0xFFB703, 2.5, 36, 1.2);
      streetCenterLight.position.set(0, 4.2, -6.0);
      scene.add(streetCenterLight);
    }, waveDuration * 0.45);

    setTimeout(() => {
      showFloatingBanner("The entire gali is filled with light!", true, "Walk down the gali", () => {
        hideFloatingBanner();
        goToStep(1);
      });

      const card1Inst = document.getElementById('card1Instruction');
      if (card1Inst) card1Inst.textContent = 'The entire gali is illuminated with festive light! ✨';

      // Ensure proceed button is immediately visible & accessible on mobile on cardStep1
      const cardStep1 = document.getElementById('cardStep1');
      const step1WalkBtn = document.getElementById('step1WalkBtn');
      const diyaBtn = document.getElementById('lightDiyaActionBtn');
      if (step1WalkBtn) step1WalkBtn.classList.remove('hidden');
      if (diyaBtn) diyaBtn.style.display = 'none';
      if (cardStep1) cardStep1.classList.remove('card-faded');
    }, waveDuration + 400);
  }

  function showFloatingBanner(text, showBtn = false, btnText = '', btnCallback = null) {
    const banner = document.getElementById('floatingGaliBanner');
    const bText = document.getElementById('floatingBannerText');
    const bBtn = document.getElementById('floatingBannerBtn');
    const bBtnText = document.getElementById('floatingBannerBtnText');

    if (!banner) return;
    if (bText) bText.textContent = text;

    if (showBtn && bBtn) {
      bBtn.classList.remove('hidden');
      if (bBtnText) bBtnText.textContent = btnText;
      bBtn.onclick = btnCallback;
    } else if (bBtn) {
      bBtn.classList.add('hidden');
    }

    banner.classList.remove('hidden');
  }

  function hideFloatingBanner() {
    const banner = document.getElementById('floatingGaliBanner');
    if (banner) banner.classList.add('hidden');
  }

  function toggleViewGali() {
    state.cardsTemporarilyHidden = !state.cardsTemporarilyHidden;
    const cards = ['cardStep1', 'cardStep2', 'cardStep3', 'cardStep4'];
    const currentCard = document.getElementById(cards[state.currentStep]);
    const eyeBtn = document.getElementById('toggleViewGaliBtn');

    if (state.cardsTemporarilyHidden) {
      if (currentCard) currentCard.classList.add('card-faded');
      if (eyeBtn) eyeBtn.classList.add('active');
      showFloatingBanner("Viewing the gali (Tap 👁️ to return to card)", false);
    } else {
      if (currentCard) currentCard.classList.remove('card-faded');
      if (eyeBtn) eyeBtn.classList.remove('active');
      hideFloatingBanner();
    }
  }

  // ══════════════════════════════════════════════
  // 3D ANIMATION RENDER LOOP WITH ORBIT LOOK
  // ══════════════════════════════════════
  function animateThree() {
    requestAnimationFrame(animateThree);
    const now = performance.now();
    const time = now * 0.001;

    // Cinematic Walking Glide Transition
    if (isCameraWalking) {
      const elapsed = now - walkStartTime;
      const progress = Math.min(1.0, elapsed / walkDuration);

      // Smooth cubic ease-in-out curve
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      currentCamPos.lerpVectors(walkStartPos, walkEndPos, ease);
      currentCamLook.lerpVectors(walkStartLook, walkEndLook, ease);

      // Subtle natural walking sway
      const swayY = Math.sin(progress * Math.PI * 6) * 0.045;
      const swayX = Math.cos(progress * Math.PI * 3) * 0.035;
      currentCamPos.y += swayY;
      currentCamPos.x += swayX;

      if (progress >= 1.0) {
        isCameraWalking = false;
        currentCamPos.copy(walkEndPos);
        currentCamLook.copy(walkEndLook);
        hideFloatingBanner();

        // Reveal only the target scene card strictly
        updateSceneCards(pendingStepIndex);

        if (pendingStepIndex === 3) {
          for (let i = 0; i < 4; i++) setTimeout(launchFirework, i * 280);
        }
      }
    } else {
      // Gentle subtle lerp when stationary
      currentCamPos.lerp(targetCamPos, 0.045);
      currentCamLook.lerp(targetCamLook, 0.045);
    }

    // Apply interactive user yaw & pitch look offset
    userLook.yaw += (targetUserLook.yaw - userLook.yaw) * 0.08;
    userLook.pitch += (targetUserLook.pitch - userLook.pitch) * 0.08;
    userFovZoom += (targetFovZoom - userFovZoom) * 0.08;

    camera.fov = Math.max(30, Math.min(65, 46 + userFovZoom));
    camera.updateProjectionMatrix();

    const forward = new THREE.Vector3().subVectors(currentCamLook, currentCamPos);
    const dist = forward.length();
    forward.normalize();

    const rotEuler = new THREE.Euler(userLook.pitch, userLook.yaw, 0, 'YXZ');
    forward.applyEuler(rotEuler);

    const finalLook = new THREE.Vector3().addVectors(currentCamPos, forward.multiplyScalar(dist));
    camera.position.copy(currentCamPos);
    camera.lookAt(finalLook);

    // Central diya flicker
    if (firstDiyaPointLight && firstDiyaMesh) {
      const flicker = 0.94 + Math.sin(time * 18) * 0.12 + Math.cos(time * 26) * 0.08;
      firstDiyaPointLight.intensity = (state.firstDiyaLit ? 2.4 : 0.8) * flicker;
      firstDiyaMesh.scale.y = (state.firstDiyaLit ? 1.8 : 1.4) * flicker;
    }

    // Kandils gentle sway
    hangingKandils.forEach(({ kandilGroup }, idx) => {
      kandilGroup.rotation.z = Math.sin(time * 1.8 + idx * 0.8) * 0.08;
      kandilGroup.rotation.y = time * 0.35 + idx;
    });

    // Animate Rangoli perimeter diyas flicker
    rangoliPerimeterDiyas.forEach(({ flameMat, flameMesh }, idx) => {
      const threshold = (idx / 8) * 100;
      if (state.holdProgress > threshold) {
        flameMat.opacity = 1.0;
        const flk = 0.9 + Math.sin(time * 15 + idx) * 0.15;
        flameMesh.scale.set(flk, flk * 1.5, flk);
      } else {
        flameMat.opacity = 0.0;
      }
    });

    // Sky Lantern Glowing & Ascending with Dynamic Camera Centering (Infinite Flight)
    if (state.lanternAscending && skyLanternMesh) {
      // User request: Lantern flies till infinite!
      // Continuous smooth ascent without ceiling clamp
      const climbSpeed = Math.max(0.028, 0.052 - (skyLanternMesh.position.y * 0.00012));
      skyLanternMesh.position.y += climbSpeed;
      skyLanternMesh.position.z -= 0.024; // Drifts deeper into the infinite night horizon

      // Gentle swaying with the festive night wind
      skyLanternMesh.position.x = Math.sin(time * 1.1) * 0.55;
      skyLanternMesh.rotation.y = time * 0.20;
      skyLanternMesh.rotation.z = Math.sin(time * 1.5) * 0.045;
      skyLanternMesh.rotation.x = Math.cos(time * 1.2) * 0.035;

      if (lanternGlowSprite) {
        lanternGlowSprite.scale.set(3.5 + Math.sin(time * 3.5) * 0.25, 3.5 + Math.sin(time * 3.5) * 0.25, 1);
      }

      // Spawn trailing golden embers
      if (Math.random() < 0.32) {
        spawnLanternEmber(skyLanternMesh.position);
      }

      miniLanterns.forEach(({ mesh, speed }) => {
        mesh.visible = true;
        mesh.position.y += speed;
        mesh.position.z -= speed * 0.22;
        mesh.rotation.y = time * 0.25;
      });

      // DYNAMIC CAMERA TRACKING: Keep the main lantern in the middle of the frame as it flies to infinity!
      if (state.currentStep === 2 && !isCameraWalking) {
        // Look directly at the rising lantern so it stays dead-center in the frame
        targetCamLook.copy(skyLanternMesh.position);

        // Also smoothly elevate and tilt the camera position to capture the vast scale
        const heightClimbed = Math.max(0, skyLanternMesh.position.y - 3.4);
        targetCamPos.set(
          Math.sin(time * 0.4) * 0.25,
          1.8 + Math.min(6.5, heightClimbed * 0.16),
          -10.5 + Math.min(3.8, heightClimbed * 0.08)
        );
      }
    } else if (skyLanternMesh) {
      skyLanternMesh.position.y = 3.4 + Math.sin(time * 2) * 0.09;
      skyLanternMesh.rotation.y = Math.sin(time * 0.8) * 0.12;

      if (lanternGlowSprite) {
        const pulse = 3.4 + Math.sin(time * 3) * 0.25;
        lanternGlowSprite.scale.set(pulse, pulse, 1);
      }
    }

    // Animate swaying torans, chandeliers, and bunting in the festive night air
    animatedDecorations.forEach(item => {
      if (item.type === 'sway') {
        item.mesh.rotation.z = Math.sin(time * item.speed + item.offset) * item.angle;
      } else if (item.type === 'streamer') {
        item.mesh.rotation.x = Math.sin(time * item.speed + item.offset) * 0.14;
      }
    });

    // Update trailing embers
    for (let i = lanternEmbers.length - 1; i >= 0; i--) {
      const emb = lanternEmbers[i];
      emb.mesh.position.y += emb.vy;
      emb.life -= 0.02;
      emb.mesh.material.opacity = emb.life;
      if (emb.life <= 0) {
        scene.remove(emb.mesh);
        lanternEmbers.splice(i, 1);
      }
    }

    renderer.render(scene, camera);
  }

  // ══════════════════════════════════════════════
  // 4. 2D FIREWORKS PARTICLE ENGINE (Rooftop)
  // ══════════════════════════════════════
  let fwCanvas = null;
  let fwCtx = null;
  let fwParticles = [];

  function initFireworksCanvas() {
    fwCanvas = document.getElementById('fireworks-canvas');
    if (!fwCanvas) return;
    fwCanvas.width = window.innerWidth;
    fwCanvas.height = window.innerHeight;
    fwCtx = fwCanvas.getContext('2d');

    window.addEventListener('resize', () => {
      fwCanvas.width = window.innerWidth;
      fwCanvas.height = window.innerHeight;
    });

    window.addEventListener('click', (e) => {
      if (state.currentStep === 3) {
        if (e.target.closest('button') || e.target.closest('.modal-backdrop') || e.target.closest('.music-dropdown-menu')) return;
        launchFirework(e.clientX, e.clientY);
      }
    });

    loopFireworksCanvas();
  }

  function launchFirework(targetX, targetY) {
    if (!fwCanvas) return;
    const x = targetX !== undefined ? targetX : Math.random() * fwCanvas.width;
    const y = targetY !== undefined ? targetY : Math.random() * (fwCanvas.height * 0.45) + 50;

    const colors = ['#FFD700', '#FF2A6D', '#00E5FF', '#FF9F0A', '#69F0AE', '#FFEB3B', '#E040FB', '#FFFFFF'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const count = 65 + Math.floor(Math.random() * 35);

    playFireworkBoom();

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const speed = Math.random() * 5.4 + 1.8;
      fwParticles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        alpha: 1.0,
        size: Math.random() * 2.8 + 1.0,
        decay: Math.random() * 0.016 + 0.012
      });
    }
  }

  function loopFireworksCanvas() {
    if (fwCtx && fwCanvas) {
      fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);

      for (let i = fwParticles.length - 1; i >= 0; i--) {
        const p = fwParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.07;
        p.vx *= 0.985;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          fwParticles.splice(i, 1);
          continue;
        }

        fwCtx.save();
        fwCtx.globalAlpha = p.alpha;
        fwCtx.beginPath();
        fwCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        fwCtx.fillStyle = p.color;
        fwCtx.shadowColor = p.color;
        fwCtx.shadowBlur = 8;
        fwCtx.fill();
        fwCtx.restore();
      }

      if (state.currentStep === 3 && Math.random() < 0.035) {
        launchFirework();
      }
    }
    requestAnimationFrame(loopFireworksCanvas);
  }

  // ══════════════════════════════════════════════
  // STRICT SCENE CARDS ISOLATION & VISIBILITY
  // ══════════════════════════════════════════════
  function updateSceneCards(stepIndex) {
    const cards = ['cardStep1', 'cardStep2', 'cardStep3', 'cardStep4'];
    cards.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (idx === stepIndex) {
        el.classList.remove('hidden');
        el.classList.add('active-scene');
        if (id === 'cardStep4') {
          el.style.display = 'flex';
        } else {
          el.style.display = 'block';
        }
        setTimeout(() => el.classList.remove('card-faded'), 50);
      } else {
        el.classList.add('card-faded');
        el.classList.add('hidden');
        el.classList.remove('active-scene');
        el.style.display = 'none';
      }
    });
  }

  // ══════════════════════════════════════════════
  // 5. STEP NAVIGATION & CAMERA CHOREOGRAPHY
  // ══════════════════════════════════════
  function goToStep(stepIndex) {
    if (stepIndex < 0 || stepIndex > 3) return;
    const prevStep = state.currentStep;
    state.currentStep = stepIndex;
    state.cardsTemporarilyHidden = false;
    targetUserLook = { yaw: 0, pitch: 0 };
    targetFovZoom = 0;
    hideFloatingBanner();

    const eyeBtn = document.getElementById('toggleViewGaliBtn');
    if (eyeBtn) eyeBtn.classList.remove('active');

    const cards = ['cardStep1', 'cardStep2', 'cardStep3', 'cardStep4'];
    // Immediately fade out and isolate all non-target cards during walk
    cards.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('card-faded');
        if (idx !== stepIndex) {
          el.style.display = 'none';
          el.classList.add('hidden');
          el.classList.remove('active-scene');
        }
      }
    });

    const arch = document.getElementById('overheadArch');
    if (arch) {
      if (stepIndex === 0) {
        arch.style.opacity = '1';
        arch.style.pointerEvents = 'auto';
      } else {
        arch.style.opacity = '0';
        arch.style.pointerEvents = 'none';
      }
    }

    document.querySelectorAll('.dash-pill').forEach((dash, idx) => {
      dash.classList.toggle('active', idx === stepIndex);
    });

    // Reset lantern if rewinding back before Step 2
    if (stepIndex < 2) {
      state.lanternAscending = false;
      if (skyLanternMesh) {
        skyLanternMesh.position.set(0, 3.4, -16.5);
        skyLanternMesh.rotation.set(0, 0, 0);
      }
      miniLanterns.forEach(m => {
        m.mesh.visible = false;
        m.mesh.position.y = m.startY;
      });
      const relBtn = document.getElementById('releaseLanternBtn');
      const kwBtn = document.getElementById('step3KeepWalkingBtn');
      if (relBtn) relBtn.classList.remove('hidden');
      if (kwBtn) kwBtn.classList.add('hidden');
    }

    // Initiate prolonged cinematic camera walk
    isCameraWalking = true;
    walkStartTime = performance.now();
    // 5.0s for prolonged stroll from Rangoli to distant Lantern; 3.8s to Rangoli; 2.6s for other steps
    walkDuration = (prevStep === 1 && stepIndex === 2) ? 5000 : (prevStep === 0 && stepIndex === 1) ? 3800 : 2600;
    walkStartPos.copy(currentCamPos);
    walkEndPos.copy(CAMERA_STEPS[stepIndex].pos);
    walkStartLook.copy(currentCamLook);
    walkEndLook.copy(CAMERA_STEPS[stepIndex].look);
    pendingStepIndex = stepIndex;

    targetCamPos.copy(CAMERA_STEPS[stepIndex].pos);
    targetCamLook.copy(CAMERA_STEPS[stepIndex].look);

    if (prevStep === 0 && stepIndex === 1) {
      showFloatingBanner("Walking down the illuminated Diwali gali...", false);
    } else if (prevStep === 1 && stepIndex === 2) {
      showFloatingBanner("Strolling through the illuminated Diwali gali towards the golden lantern...", false);
    }
  }

  // ══════════════════════════════════════════════
  // 6. SCENE INTERACTIONS
  // ══════════════════════════════════════
  function setupInteractions() {
    const viewGaliBtn = document.getElementById('toggleViewGaliBtn');
    if (viewGaliBtn) viewGaliBtn.addEventListener('click', toggleViewGali);

    const greetingNavBtn = document.getElementById('openGreetingCardNavBtn');
    if (greetingNavBtn) greetingNavBtn.addEventListener('click', openGreetingCardModal);

    // ── STEP 1: LIGHT FIRST DIYA (CASCADE WAVE!) ──
    const lightDiyaBtn = document.getElementById('lightDiyaActionBtn');
    const step1WalkBtn = document.getElementById('step1WalkBtn');

    if (lightDiyaBtn) lightDiyaBtn.addEventListener('click', triggerCascadeLightingWave);
    if (step1WalkBtn) step1WalkBtn.addEventListener('click', () => goToStep(1));

    // ── STEP 2: HOLD TO COLOR RANGOLI (CARD INVISIBLE DURING HOLD) ──
    const holdRing = document.getElementById('pressHoldRing');
    const ringCircle = document.getElementById('ringProgressCircle');
    const ringPercent = document.getElementById('ringPercentText');
    const holdHelper = document.getElementById('holdHelperText');
    const holdCard = document.getElementById('rangoliHoldCard');
    const wishesCard = document.getElementById('rangoliWishesCard');
    const paintingHud = document.getElementById('rangoliPaintingHud');
    const hudVal = document.getElementById('hudProgressVal');
    const step2KeepWalkingBtn = document.getElementById('step2KeepWalkingBtn');
    const openSweetsBtn = document.getElementById('openSweetsBtn');
    const openGreetingCardRangoliBtn = document.getElementById('openGreetingCardRangoliBtn');

    let holdInterval = null;
    const circumference = 2 * Math.PI * 40;

    function startHolding() {
      if (state.rangoliColored) return;
      state.isHolding = true;
      if (holdRing) holdRing.classList.add('pressing');
      if (holdHelper) holdHelper.textContent = "Keep holding... painting the floor";

      // Make card invisible so user can watch rangoli being created on the street ground!
      if (holdCard) holdCard.classList.add('card-invisible-during-hold');
      if (paintingHud) paintingHud.classList.remove('hidden');

      clearInterval(holdInterval);
      holdInterval = setInterval(() => {
        if (!state.isHolding) return;
        state.holdProgress += 2.0;
        if (state.holdProgress > 100) state.holdProgress = 100;

        const offset = circumference - (state.holdProgress / 100) * circumference;
        if (ringCircle) ringCircle.style.strokeDashoffset = offset;
        if (ringPercent) ringPercent.textContent = `${Math.floor(state.holdProgress)}%`;
        if (hudVal) hudVal.textContent = `${Math.floor(state.holdProgress)}%`;

        playSparkleSound(state.holdProgress / 100);

        // Update 3D Rangoli canvas texture frame by frame as colors paint on the floor!
        if (rangoliMesh && rangoliMesh.material.map) {
          const canvas = rangoliMesh.material.map.image;
          drawRangoliWithProgress(canvas, state.holdProgress / 100);
          rangoliMesh.material.map.needsUpdate = true;
        }

        if (state.holdProgress >= 100) {
          finishRangoliColoring();
        }
      }, 50);
    }

    function stopHolding() {
      if (state.rangoliColored) return;
      state.isHolding = false;
      if (holdRing) holdRing.classList.remove('pressing');
      clearInterval(holdInterval);

      if (state.holdProgress < 100) {
        state.holdProgress = 0;
        if (ringCircle) ringCircle.style.strokeDashoffset = circumference;
        if (ringPercent) ringPercent.textContent = '0%';
        if (hudVal) hudVal.textContent = '0%';
        if (holdHelper) holdHelper.textContent = 'Press & hold the golden circle to paint';

        if (holdCard) holdCard.classList.remove('card-invisible-during-hold');
        if (paintingHud) paintingHud.classList.add('hidden');

        if (rangoliMesh && rangoliMesh.material.map) {
          const canvas = rangoliMesh.material.map.image;
          drawRangoliWithProgress(canvas, 0);
          rangoliMesh.material.map.needsUpdate = true;
        }
      }
    }

    function finishRangoliColoring() {
      state.rangoliColored = true;
      state.isHolding = false;
      clearInterval(holdInterval);
      playBellChime(880);

      if (paintingHud) paintingHud.classList.add('hidden');

      if (rangoliMesh && rangoliMesh.material.map) {
        const canvas = rangoliMesh.material.map.image;
        drawRangoliWithProgress(canvas, 1.0);
        rangoliMesh.material.map.needsUpdate = true;
      }

      showFloatingBanner("Rangoli colored! Ready to walk forward ✨", true, "Keep walking", () => {
        hideFloatingBanner();
        goToStep(2);
      });

      setTimeout(() => {
        if (holdCard) {
          holdCard.classList.remove('card-invisible-during-hold');
          holdCard.classList.add('hidden');
        }
        if (wishesCard) {
          wishesCard.classList.remove('hidden');
          wishesCard.classList.remove('card-faded');
        }
      }, 1600);
    }

    if (holdRing) {
      holdRing.addEventListener('mousedown', startHolding);
      window.addEventListener('mouseup', stopHolding);
      holdRing.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startHolding();
      });
      window.addEventListener('touchend', stopHolding);
    }

    if (step2KeepWalkingBtn) step2KeepWalkingBtn.addEventListener('click', () => goToStep(2));
    if (openSweetsBtn) openSweetsBtn.addEventListener('click', openSweetsModal);
    if (openGreetingCardRangoliBtn) openGreetingCardRangoliBtn.addEventListener('click', openGreetingCardModal);

    // ── STEP 3: SKY LANTERN RELEASE ──
    const releaseLanternBtn = document.getElementById('releaseLanternBtn');
    const step3KeepWalkingBtn = document.getElementById('step3KeepWalkingBtn');

    if (releaseLanternBtn) {
      releaseLanternBtn.addEventListener('click', () => {
        state.lanternAscending = true;
        playBellChime(783.99);

        // Hide lantern card completely so user can freely look around and watch it rise!
        const cardStep3 = document.getElementById('cardStep3');
        if (cardStep3) cardStep3.classList.add('card-faded');

        showFloatingBanner("Watching the golden lantern ascend into the infinite heavens...", false);

        setTimeout(() => {
          showFloatingBanner("The lantern soars into the night sky! ✨", true, "Ascend to the rooftop", () => {
            hideFloatingBanner();
            goToStep(3);
          });
          const cardStep3 = document.getElementById('cardStep3');
          if (cardStep3) cardStep3.classList.remove('card-faded');
          if (releaseLanternBtn) releaseLanternBtn.style.display = 'none';
          if (step3KeepWalkingBtn) step3KeepWalkingBtn.classList.remove('hidden');
        }, 5200);
      });
    }

    if (step3KeepWalkingBtn) step3KeepWalkingBtn.addEventListener('click', () => goToStep(3));

    // ── STEP 4: ROOFTOP ACTIONS ──
    const walkAgainBtn = document.getElementById('walkAgainBtn');
    const rooftopGreetingCardBtn = document.getElementById('rooftopGreetingCardBtn');
    const rooftopSweetsBtn = document.getElementById('rooftopSweetsBtn');
    const shareSurpriseBtn = document.getElementById('shareSurpriseBtn');
    const createOwnGaliBtn = document.getElementById('createOwnGaliBtn');

    if (walkAgainBtn) {
      walkAgainBtn.addEventListener('click', () => {
        state.lanternAscending = false;
        if (skyLanternMesh) {
          skyLanternMesh.position.set(0, 3.4, -16.5);
          skyLanternMesh.rotation.set(0, 0, 0);
        }
        miniLanterns.forEach(m => {
          m.mesh.visible = false;
          m.mesh.position.y = m.startY;
        });
        const cardStep3 = document.getElementById('cardStep3');
        if (cardStep3) cardStep3.classList.remove('card-faded');
        const relBtn = document.getElementById('releaseLanternBtn');
        const kwBtn = document.getElementById('step3KeepWalkingBtn');
        if (relBtn) {
          relBtn.classList.remove('hidden');
          relBtn.style.display = '';
        }
        if (kwBtn) kwBtn.classList.add('hidden');

        const diyaBtn = document.getElementById('lightDiyaActionBtn');
        const walk1Btn = document.getElementById('step1WalkBtn');
        if (diyaBtn) {
          diyaBtn.classList.remove('hidden');
          diyaBtn.style.display = '';
        }
        if (walk1Btn) walk1Btn.classList.add('hidden');
        goToStep(0);
      });
    }
    if (rooftopGreetingCardBtn) rooftopGreetingCardBtn.addEventListener('click', openGreetingCardModal);
    if (rooftopSweetsBtn) rooftopSweetsBtn.addEventListener('click', openSweetsModal);

    if (shareSurpriseBtn) {
      shareSurpriseBtn.addEventListener('click', () => {
        if (state.isRecipient) {
          const shareUrl = window.location.href;
          const waText = `🪔✨ *Happy Diwali!* ✨🪔\n\nExperience this breathtaking 3D interactive Diwali Gali with glowing lights, festive music, and fireworks:\n👉 ${shareUrl}\n\nWishing you joy & prosperity! 🌟`;
          window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, '_blank');
        } else {
          openPersonalizeModal();
        }
      });
    }

    if (createOwnGaliBtn) {
      createOwnGaliBtn.addEventListener('click', () => {
        window.location.href = window.location.origin + window.location.pathname;
      });
    }

    // ── CAPSULE DASH NAVIGATION ──
    const navBack = document.getElementById('navBackArrow');
    const navNext = document.getElementById('navNextArrow');
    const topBack = document.getElementById('topBackBtn');

    if (navBack) navBack.addEventListener('click', () => { if (state.currentStep > 0) goToStep(state.currentStep - 1); });
    if (navNext) navNext.addEventListener('click', () => { if (state.currentStep < 3) goToStep(state.currentStep + 1); });
    if (topBack) topBack.addEventListener('click', () => goToStep(0));

    document.querySelectorAll('.dash-pill').forEach((dash) => {
      dash.addEventListener('click', () => {
        const step = parseInt(dash.getAttribute('data-step'), 10);
        goToStep(step);
      });
    });

    setupMusicControls();
  }

  function setupMusicControls() {
    const soundBtn = document.getElementById('soundToggleBtn');
    const dropdown = document.getElementById('musicDropdown');
    const soundIcon = document.getElementById('soundIcon');

    if (soundBtn && dropdown) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });

      window.addEventListener('click', () => {
        dropdown.classList.add('hidden');
      });
    }

    if (soundIcon) {
      soundIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleAudio();
      });
    }

    document.querySelectorAll('.track-item').forEach((item) => {
      item.addEventListener('click', () => {
        const trackId = parseInt(item.getAttribute('data-track'), 10);
        setAudioTrack(trackId, true);
        if (dropdown) dropdown.classList.add('hidden');
      });
    });
  }

  // ══════════════════════════════════════════════
  // 7. LUXURY ROYAL GREETING CARD MODAL (SCROLLABLE)
  // ══════════════════════════════════════════════
  function setupGreetingCardModal() {
    const modal = document.getElementById('greetingCardModal');
    const closeX = document.getElementById('closeGreetingCardX');
    const closeBtn = document.getElementById('closeGreetingCardBtn');
    const envelope = document.getElementById('greetingCardEnvelope');

    if (closeX) closeX.addEventListener('click', closeGreetingCardModal);
    if (closeBtn) closeBtn.addEventListener('click', closeGreetingCardModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeGreetingCardModal();
      });
    }

    document.querySelectorAll('.theme-dot').forEach((dot) => {
      dot.addEventListener('click', () => {
        const theme = dot.getAttribute('data-card-theme');
        state.cardTheme = theme;

        document.querySelectorAll('.theme-dot').forEach((d) => d.classList.remove('active'));
        dot.classList.add('active');

        if (envelope) {
          envelope.className = `greeting-card-wrapper theme-${theme}`;
        }
      });
    });
  }

  function openGreetingCardModal() {
    const modal = document.getElementById('greetingCardModal');
    const recEl = document.getElementById('greetingModalRecipient');
    const sndEl = document.getElementById('greetingModalSender');
    const msgEl = document.getElementById('greetingModalMessage');
    const envelope = document.getElementById('greetingCardEnvelope');

    if (recEl) recEl.textContent = state.recipient;
    if (sndEl) sndEl.textContent = state.sender;
    if (msgEl) msgEl.textContent = state.message;

    if (envelope) {
      envelope.className = `greeting-card-wrapper theme-${state.cardTheme}`;
    }

    document.querySelectorAll('.theme-dot').forEach((dot) => {
      dot.classList.toggle('active', dot.getAttribute('data-card-theme') === state.cardTheme);
    });

    if (modal) modal.classList.remove('hidden');
    playBellChime(659.25);
  }

  function closeGreetingCardModal() {
    const modal = document.getElementById('greetingCardModal');
    if (modal) modal.classList.add('hidden');
  }

  // ══════════════════════════════════════════════
  // 8. REALISTIC SWEET BOX MODAL (SCROLLABLE)
  // ══════════════════════════════════════
  function setupSweetsModal() {
    const modal = document.getElementById('sweetsModal');
    const closeX = document.getElementById('closeSweetsX');
    const closeBtn = document.getElementById('closeSweetsBtn');

    if (closeX) closeX.addEventListener('click', closeSweetsModal);
    if (closeBtn) closeBtn.addEventListener('click', closeSweetsModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSweetsModal();
      });
    }

    const sweetBlessings = {
      kaju: "✨ Cashew fudge with pure silver vark: Wishing you sharp brilliance & radiant success!",
      ladoo: "🟡 Glistening Motichoor pearls: May joy & festive sweetness overflow in your home!",
      jamun: "🟤 Warm Gulab Jamun in saffron syrup: A tender blessing of divine love & affection!",
      peda: "💛 Kesar Peda stamped with almond: Prosperity, wisdom & auspicious beginnings!"
    };

    document.querySelectorAll('.sweet-card').forEach((card) => {
      card.addEventListener('click', () => {
        const type = card.getAttribute('data-sweet');
        playBellChime(740);
        showToast(sweetBlessings[type] || "Mithai blessings of sweetness!");
      });
    });
  }

  function openSweetsModal() {
    const modal = document.getElementById('sweetsModal');
    if (modal) modal.classList.remove('hidden');
    playBellChime(659.25);
  }

  function closeSweetsModal() {
    const modal = document.getElementById('sweetsModal');
    if (modal) modal.classList.add('hidden');
  }

  // ══════════════════════════════════════════════
  // 9. PERSONALIZE & WHATSAPP E-SURPRISE MODAL
  // ══════════════════════════════════════
  let activeNoteLang = 'hindi';
  let activeNoteId = 'h1';

  function renderSampleNotes(lang) {
    const container = document.getElementById('sampleNotesContainer');
    if (!container) return;
    const notes = SAMPLE_NOTES[lang] || SAMPLE_NOTES.hindi;
    container.innerHTML = '';

    notes.forEach((note) => {
      const card = document.createElement('div');
      card.className = `sample-note-card ${note.id === activeNoteId ? 'active' : ''}`;
      card.setAttribute('data-id', note.id);
      card.innerHTML = `
        <div class="sample-note-top-row">
          <strong class="sample-note-title">${note.title}</strong>
          <span class="sample-note-tag">${note.tag}</span>
        </div>
        <p class="sample-note-preview">${note.text}</p>
      `;

      card.addEventListener('click', () => {
        activeNoteId = note.id;
        document.querySelectorAll('.sample-note-card').forEach((c) => c.classList.remove('active'));
        card.classList.add('active');

        const inMsg = document.getElementById('inputMessage');
        if (inMsg) {
          inMsg.value = note.text;
          updateMessageCharCount(note.text.length);
        }
        state.message = note.text;
        updateShareUrlField();
        const msgEl = document.getElementById('greetingModalMessage');
        if (msgEl) msgEl.textContent = state.message;
      });

      container.appendChild(card);
    });
  }

  function updateMessageCharCount(len) {
    const el = document.getElementById('messageCharCount');
    if (el) el.textContent = `${len} / 400`;
  }

  function updateShareUrlField() {
    const shareField = document.getElementById('shareUrlField');
    if (shareField) shareField.value = buildShareUrl();
  }

  function setupPersonalizeModal() {
    const gearBtn = document.getElementById('gearBtn');
    const modal = document.getElementById('personalizeModal');
    const closeX = document.getElementById('modalCloseX');
    const saveBtn = document.getElementById('modalSaveBtn');
    const copyBtn = document.getElementById('copyUrlBtn');
    const openNewTabBtn = document.getElementById('openNewTabBtn');
    const waDirectBtn = document.getElementById('directWhatsAppBtn');
    const themeSelect = document.getElementById('wishesThemeSelect');
    const defaultSongSelect = document.getElementById('defaultSongSelect');

    if (gearBtn) gearBtn.addEventListener('click', openPersonalizeModal);
    if (closeX) closeX.addEventListener('click', closePersonalizeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closePersonalizeModal();
      });
    }

    renderSampleNotes(activeNoteLang);

    document.querySelectorAll('.lang-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeNoteLang = btn.getAttribute('data-lang') || 'hindi';
        renderSampleNotes(activeNoteLang);
      });
    });

    const shuffleBtn = document.getElementById('shuffleNoteBtn');
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        const langs = ['hindi', 'hinglish', 'english'];
        const randomLang = langs[Math.floor(Math.random() * langs.length)];
        const list = SAMPLE_NOTES[randomLang];
        const randomNote = list[Math.floor(Math.random() * list.length)];

        activeNoteLang = randomLang;
        activeNoteId = randomNote.id;

        document.querySelectorAll('.lang-tab-btn').forEach((b) => {
          b.classList.toggle('active', b.getAttribute('data-lang') === randomLang);
        });

        renderSampleNotes(randomLang);

        const inMsg = document.getElementById('inputMessage');
        if (inMsg) {
          inMsg.value = randomNote.text;
          updateMessageCharCount(randomNote.text.length);
          inMsg.focus();
        }
        state.message = randomNote.text;
        updateShareUrlField();
        const msgEl = document.getElementById('greetingModalMessage');
        if (msgEl) msgEl.textContent = state.message;
        showToast('Sample note loaded! ✨');
      });
    }

    const inMsg = document.getElementById('inputMessage');
    if (inMsg) {
      inMsg.addEventListener('input', (e) => {
        const val = e.target.value;
        updateMessageCharCount(val.length);
        state.message = val;
        updateShareUrlField();
        const msgEl = document.getElementById('greetingModalMessage');
        if (msgEl) msgEl.textContent = state.message;
      });
    }

    const inRec = document.getElementById('inputRecipient');
    if (inRec) {
      inRec.addEventListener('input', (e) => {
        state.recipient = e.target.value.trim() || 'you';
        updateShareUrlField();
      });
    }

    const inSnd = document.getElementById('inputSender');
    if (inSnd) {
      inSnd.addEventListener('input', (e) => {
        state.sender = e.target.value.trim() || 'me';
        updateShareUrlField();
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const inRec = document.getElementById('inputRecipient');
        const inSnd = document.getElementById('inputSender');
        const inMsg = document.getElementById('inputMessage');

        if (inRec && inRec.value.trim()) state.recipient = inRec.value.trim();
        if (inSnd && inSnd.value.trim()) state.sender = inSnd.value.trim();
        if (inMsg && inMsg.value.trim()) state.message = inMsg.value.trim();
        if (themeSelect) state.wishesTheme = themeSelect.value;
        if (defaultSongSelect) {
          const songId = parseInt(defaultSongSelect.value, 10);
          setAudioTrack(songId, true);
        }

        updateUIWithNames();
        closePersonalizeModal();
        showToast('E-Surprise updated! ✨');

        if (rangoliMesh && rangoliMesh.material.map) {
          const canvas = rangoliMesh.material.map.image;
          drawRangoliWithProgress(canvas, state.rangoliColored ? 1.0 : 0);
          rangoliMesh.material.map.needsUpdate = true;
        }
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const shareField = document.getElementById('shareUrlField');
        if (shareField) {
          shareField.select();
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(shareField.value).then(() => {
              showToast('Link copied to clipboard! 📋');
            });
          } else {
            showToast('Link selected, press Ctrl+C to copy!');
          }
        }
      });
    }

    if (openNewTabBtn) {
      openNewTabBtn.addEventListener('click', () => {
        const shareUrl = buildShareUrl();
        window.open(shareUrl, '_blank');
      });
    }

    if (waDirectBtn) {
      waDirectBtn.addEventListener('click', () => {
        const shareUrl = buildShareUrl();
        const waText = `🪔✨ *Happy Diwali, ${state.recipient}!* ✨🪔\n\nA special 3D interactive Diwali Gali surprise has been handcrafted just for you with love by *${state.sender}*! 🎆\n\nWalk through the glowing lane, light the diyas, and open your personalized royal greeting card:\n👉 ${shareUrl}\n\nWishing you a joyful & prosperous Deepavali! 🌟`;
        const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;
        window.open(waLink, '_blank');
      });
    }
  }

  function buildShareUrl() {
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('to', state.recipient);
    url.searchParams.set('from', state.sender);
    url.searchParams.set('msg', state.message);
    url.searchParams.set('theme', state.wishesTheme);
    url.searchParams.set('cardTheme', state.cardTheme);
    url.searchParams.set('music', state.activeMusicTrack.toString());
    url.searchParams.set('mode', 'recipient');
    return url.toString();
  }

  function openPersonalizeModal() {
    const modal = document.getElementById('personalizeModal');
    const inRec = document.getElementById('inputRecipient');
    const inSnd = document.getElementById('inputSender');
    const inMsg = document.getElementById('inputMessage');
    const shareField = document.getElementById('shareUrlField');
    const themeSelect = document.getElementById('wishesThemeSelect');
    const defaultSongSelect = document.getElementById('defaultSongSelect');

    if (inRec) inRec.value = state.recipient;
    if (inSnd) inSnd.value = state.sender;
    if (inMsg) {
      inMsg.value = state.message;
      updateMessageCharCount(state.message.length);
    }
    if (themeSelect) themeSelect.value = state.wishesTheme;
    if (defaultSongSelect) defaultSongSelect.value = state.activeMusicTrack.toString();

    renderSampleNotes(activeNoteLang);

    if (shareField) shareField.value = buildShareUrl();
    if (modal) modal.classList.remove('hidden');
  }

  function closePersonalizeModal() {
    const modal = document.getElementById('personalizeModal');
    if (modal) modal.classList.add('hidden');
  }

  function updateUIWithNames() {
    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setText('card4Recipient', state.recipient);
    setText('card4Sender', `with love, ${state.sender}`);

    const wishes = RANGOLI_THEMES[state.wishesTheme] || RANGOLI_THEMES.traditional;
    setText('w1Text', wishes[0]);
    setText('w2Text', wishes[1]);
    setText('w3Text', wishes[2]);
    setText('w4Text', wishes[3]);

    const gearBtn = document.getElementById('gearBtn');
    const recipientNotice = document.getElementById('recipientCreateNotice');

    if (state.isRecipient) {
      if (gearBtn) gearBtn.classList.add('hidden');
      if (recipientNotice) recipientNotice.classList.remove('hidden');
    } else {
      if (gearBtn) gearBtn.classList.remove('hidden');
      if (recipientNotice) recipientNotice.classList.add('hidden');
    }
  }

  function showToast(text) {
    const toast = document.getElementById('toastPopup');
    if (!toast) return;
    toast.textContent = text;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2400);
  }

  // ══════════════════════════════════════════════
  // 10. BOOTSTRAP INITIALIZATION
  // ══════════════════════════════════════
  function initApp() {
    parseUrlParams();
    updateUIWithNames();
    updateSceneCards(0); // STRICTLY initialize Step 0 (Starting page only!)
    initAudioPlayer();
    initThreeScene();
    initFireworksCanvas();
    setupInteractions();
    setupGreetingCardModal();
    setupSweetsModal();
    setupPersonalizeModal();

    const onFirstUserGesture = () => {
      startAudioOnGesture();
      window.removeEventListener('click', onFirstUserGesture);
      window.removeEventListener('touchstart', onFirstUserGesture);
      window.removeEventListener('pointerdown', onFirstUserGesture);
      window.removeEventListener('keydown', onFirstUserGesture);
    };
    window.addEventListener('click', onFirstUserGesture);
    window.addEventListener('touchstart', onFirstUserGesture);
    window.addEventListener('pointerdown', onFirstUserGesture);
    window.addEventListener('keydown', onFirstUserGesture);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
