document.addEventListener("DOMContentLoaded", () => {
    
    // --- CONFIGURATION ---
    const CLOUD_NAME = 'dejpoxbs7';
    // FIX: Leave empty if images are in the main Media Library page (fixes your 404 error)
    const IMAGE_FOLDER = ''; 

    // --- HELPER FUNCTION ---
    function getCloudinaryUrl(publicId, width = 800) {
        const folderPath = IMAGE_FOLDER ? `${IMAGE_FOLDER}/` : '';
        // Note: If you still see broken images, try adding '.png' to the IDs in the projects list below.
        const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width},c_scale/${folderPath}${publicId}`;
        return url;
    }

    /* =========================================
       1. DATA SOURCES
       ========================================= */
    
    // GRAPHIC DESIGN PROJECTS
    // Ensure these match your Cloudinary filenames exactly
    const projects = [
        { id: "Mako_Poster_jllccq" },
        { id: "Different_Nozzle_needs_rwyayf" },
        { id: "Mosquito_Poster_w4fe0n" },
        { id: "Vanadium_Nozzle_3_mfqxfg" },
        { id: "Spare_Parts_qr0dhm" },
        { id: "How_to_Properly_Torque_a_3D_Printer_Nozzle_wmu8fj" },
        { id: "Accessories_and_Components_ih9ogy" },
        { id: "Heat_Breaks_okirhr" },
        { id: "25_OFF_Filament_Drying_Desiccant_1_ojmn2i" },
        { id: "NTW_Sale_1_aa1bsk" },
        { id: "NTW_Sale_GRAIN_cav2qx" },
        { id: "6_kffewm" },
        { id: "7_ry4h74" },
        { id: "Accessories_and_Components_ih9ogy" },
        { id: "Veterans_day_2_k8sxev" },
        { id: "4_bzvjmo" },
        { id: "Craftbot_Sale_1_mtywrl" },
        { id: "The_Heater_Unseater_2_agc8zt" },
        { id: "TAZ_8_3D_Printing_Nerd_Video_bhcn9j" },
        { id: "3_u8jtug" },
        { id: "Benefits_of_Thin_Film_Thermal_Grease_iyeoax" },
        { id: "5_zqmwya" },
        { id: "Filament_Drying_Desiccant_ucdpw3" },
        { id: "After_market_service_ywxxzj" },
        { id: "1_rv7riu" },
        { id: "7_ry4h74" },
        { id: "2_e4daos" },
        { id: "3_tix2oo" },
        { id: "0.1_mm_nozzle_for_MAKO_fjn4y6" },
        { id: "Do_you_know_GammaMaster_Limited_Lifetime_Warranty_dk3hij" },
        { id: "Silicone_Boots_jmty0t" },
        { id: "Copperhead_Poster_ttha8y" }
    ];

    // SHORTS / REELS DATA
    const shortsData = [
        // YOUTUBE VIDEOS
        { type: 'youtube', id: 'o2XInN6DKjg' },
        { type: 'youtube', id: 'vYiXNKXa3Hk' },
        { type: 'youtube', id: 'v711Y47eR9Y' },
        { type: 'youtube', id: '6YNeHPpk04Y' },
        { type: 'youtube', id: 'dC9-fJ0B6MU' },
        { type: 'youtube', id: 'VTip7hMZpOE' },
        { type: 'youtube', id: '4agPlEDwnYk' },
        { type: 'youtube', id: '2_vsBmHNlqM' },
        { type: 'youtube', id: 'Yw2SRbh9-xQ' },

        // CLOUDINARY VIDEOS 
        { type: 'cloudinary', id: 'Reel_Example3_mxuaaw' }, 
        { type: 'cloudinary', id: 'Reel_Example5_jljrzq' },
        { type: 'cloudinary', id: 'Reel_Example6_i9kqys' }, 
        { type: 'cloudinary', id: 'Reel_Example2_f3gchs' },
        { type: 'cloudinary', id: 'Reel_Example7_lcougy' }, 
        { type: 'cloudinary', id: 'Reel_Example4_ygwig6' }
    ];


    /* =========================================
       2. GENERATE GRAPHICS CAROUSEL & CLOUD
       ========================================= */
    const carouselSpinner = document.getElementById('carousel-spinner');
    const cloud = document.getElementById('card-cloud');

    // 2A. Main Graphics Carousel
    if (carouselSpinner) {
        carouselSpinner.innerHTML = ''; 

        projects.forEach((project, i) => {
            const item = document.createElement('div');
            item.className = 'graphic-item';
            
            const img = document.createElement('img');
            const mediumUrl = getCloudinaryUrl(project.id, 600);
            const hdUrl = getCloudinaryUrl(project.id, 1200);

            img.src = mediumUrl;
            img.alt = `Graphic Design Project ${i + 1}`;
            img.loading = "lazy"; 
            
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                openLightbox(hdUrl); 
            });

            item.appendChild(img);
            carouselSpinner.appendChild(item);
        });
    }

    // 2B. Floating Hero Cards
    if (cloud) {
        projects.forEach((project, i) => {
            const card = document.createElement('div'); 
            const cardImgUrl = getCloudinaryUrl(project.id, 500);
            const fullResUrl = getCloudinaryUrl(project.id, 1200);
            
            card.className = 'card';
            
            // Random Physics
            const x = (Math.random() + Math.random()) * 40 + 5; 
            const y = (Math.random() + Math.random()) * 25 + 20; 
            const isMessy = Math.random() > 0.8;
            const randRot = isMessy ? (Math.random() * 90 - 45) : (Math.random() * 30 - 15);
            const cornerTilt = (Math.random() * 6 - 3);

            card.dataset.rotation = randRot;
            card.dataset.cornerTilt = cornerTilt;
            card.dataset.x = x;
            card.dataset.y = y;
            card.dataset.speed = Math.random() * 1 + 0.4;      
            card.dataset.delay = Math.random() * 500;            
            card.dataset.freq = Math.random() * 0.012 + 0.002;   

            card.style.left = `${x}%`;
            card.style.top = `${y}%`;
            card.style.zIndex = Math.floor(y);
            card.style.setProperty('--r', `${randRot}deg`);
            card.style.transform = `rotateX(75deg) rotateZ(${randRot}deg) rotateY(${cornerTilt}deg)`;
            
            card.innerHTML = `<div class="card-image" style="background-image: url('${cardImgUrl}');"></div>`;

            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                openLightbox(fullResUrl); 
            });

            cloud.appendChild(card);
        });

        // Floating Animation Loop
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const cards = document.querySelectorAll('.card');

            cards.forEach((card) => {
                if (card.matches(':hover')) return; 

                const r = parseFloat(card.dataset.rotation);
                const cornerTilt = parseFloat(card.dataset.cornerTilt);
                const speed = parseFloat(card.dataset.speed);
                const delay = parseFloat(card.dataset.delay);
                const freq = parseFloat(card.dataset.freq);

                if (scrolled <= 0) {
                    card.style.transform = `rotateX(75deg) rotateZ(${r}deg) rotateY(${cornerTilt}deg)`;
                    card.style.opacity = 1;
                    card.style.boxShadow = `0 2px 5px rgba(0,0,0,0.8)`;
                    return;
                }

                const activeScroll = Math.max(0, scrolled - delay);
                const lift = activeScroll * .5 * speed;
                const currentPitch = Math.max(15, 75 - (activeScroll * 0.12 * speed));
                const flutter = Math.sin(scrolled * freq * speed) * (6 * speed);
                const windYaw = Math.cos(scrolled * freq) * (10 * speed) + (cornerTilt * 2);

                card.style.transform = `
                    translate3d(0, ${-lift}px, 0px) 
                    rotateX(${currentPitch + flutter}deg) 
                    rotateY(${windYaw}deg) 
                    rotateZ(${r + (scrolled * 0.02)}deg)
                `;

                const shadowBlur = 5 + (lift * 0.1);
                const shadowOpacity = Math.max(0, 0.8 - (lift / 1000));
                card.style.boxShadow = `0 ${shadowBlur}px ${shadowBlur * 2}px rgba(0,0,0,${shadowOpacity})`;

                const fadeStart = 900;
                if (lift > fadeStart) {
                    card.style.opacity = Math.max(0, 1 - (lift - fadeStart) / 400);
                } else {
                    card.style.opacity = 1;
                }
            });
        });
    }


    /* =========================================
       3. GENERATE SHORTS CAROUSEL (Hybrid)
       ========================================= */
    const shortsSpinner = document.getElementById('shorts-spinner');

    if (shortsSpinner) {
        shortsSpinner.innerHTML = ''; 

        shortsData.forEach(short => {
            const item = document.createElement('div');
            item.className = 'short-item';

            if (short.type === 'youtube') {
                item.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${short.id}?enablejsapi=1" 
                        title="YouTube Short" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen
                    ></iframe>`;
            } 
            else if (short.type === 'cloudinary') {
                const videoUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto,w_400/${short.id}.mp4`;
                const posterUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,w_400,q_auto,f_auto,jpg/${short.id}.jpg`;
                
                // Added 'muted' to ensure autoplay works reliably
                item.innerHTML = `
                    <video 
                        src="${videoUrl}" 
                        poster="${posterUrl}"
                        loop 
                        playsinline 
                        muted
                        controlsList="nodownload"
                    ></video>`;
            }
            shortsSpinner.appendChild(item);
        });
    }


    /* =========================================
       4. LIGHTBOX LOGIC
       ========================================= */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    
    let scale = 1, pX = 0, pY = 0, startX = 0, startY = 0, isDragging = false;

    function updateTransform() {
        if(lightboxImg) lightboxImg.style.transform = `translate(${pX}px, ${pY}px) scale(${scale})`;
    }

    function resetLightbox() {
        scale = 1; pX = 0; pY = 0; isDragging = false;
        if(lightboxImg) {
            lightboxImg.style.transform = `translate(0px, 0px) scale(1)`;
            lightboxImg.style.cursor = 'grab';
            lightboxImg.style.transition = 'transform 0.3s ease';
        }
    }

    function openLightbox(src) {
        if(lightbox && lightboxImg) {
            lightboxImg.src = src;
            lightbox.classList.add('active');
            resetLightbox();
        }
    }

    function closeLightbox() {
        if(lightbox) {
            lightbox.classList.remove('active');
            setTimeout(resetLightbox, 300);
        }
    }

    if (lightboxImg) {
        lightboxImg.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY * -0.005; 
            const newScale = Math.min(Math.max(1, scale + delta), 4);
            if (newScale === 1) { pX = 0; pY = 0; }
            scale = newScale;
            lightboxImg.style.transition = 'transform 0.1s ease-out';
            updateTransform();
        });

        lightboxImg.addEventListener('mousedown', (e) => {
            e.preventDefault(); 
            if (scale > 1) {
                isDragging = true;
                startX = e.clientX - pX;
                startY = e.clientY - pY;
                lightboxImg.style.cursor = 'grabbing';
                lightboxImg.style.transition = 'none';
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            pX = e.clientX - startX;
            pY = e.clientY - startY;
            updateTransform();
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                if(lightboxImg) lightboxImg.style.cursor = 'grab';
            }
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }


    /* =========================================
       5. VIDEO PAGINATION LOGIC
       ========================================= */
    const grid = document.getElementById('paginated-grid');
    const paginationContainer = document.getElementById('video-pagination');
    
    if (grid && paginationContainer) {
        const items = Array.from(grid.children);
        const itemsPerPage = 6; 
        const totalPages = Math.ceil(items.length / itemsPerPage);
        let currentPage = 1;

        function showPage(page) {
            currentPage = page;
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;

            items.forEach((item, index) => {
                if (index >= start && index < end) {
                    item.style.display = 'block';
                    item.style.animation = 'none';
                    item.offsetHeight; 
                    item.style.animation = 'fadeEffect 0.5s ease';
                } else {
                    if (item.style.display !== 'none') {
                        const iframe = item.querySelector('iframe');
                        if (iframe) iframe.src = iframe.src; 
                    }
                    item.style.display = 'none';
                }
            });
            updateButtons();
        }

        function createButtons() {
            paginationContainer.innerHTML = '';
            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.innerText = i;
                btn.className = 'page-btn';
                if (i === currentPage) btn.classList.add('active');
                btn.addEventListener('click', () => showPage(i));
                paginationContainer.appendChild(btn);
            }
        }

        function updateButtons() {
            const btns = paginationContainer.querySelectorAll('.page-btn');
            btns.forEach((btn, index) => {
                if (index + 1 === currentPage) btn.classList.add('active');
                else btn.classList.remove('active');
            });
        }

        createButtons();
        showPage(1);
    }


    /* =========================================
       6. REUSABLE 3D CAROUSEL LOGIC
       ========================================= */
    function init3DCarousel(containerId, prevBtnId, nextBtnId, radiusMult = 1) {
        const carousel = document.getElementById(containerId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

        if (!carousel || !prevBtn || !nextBtn) return;

        const items = carousel.children;
        const itemCount = items.length;
        if (itemCount === 0) return;

        const angle = 360 / itemCount;
        const tangent = Math.tan(Math.PI / itemCount);
        
        let currIndex = 0;
        let currentRadius = 0;

        function updateGeometry() {
            const isMobile = window.innerWidth < 768;
            let baseWidth = 300; 
            if (carousel.classList.contains('shorts-carousel')) {
                baseWidth = isMobile ? 240 : 300;
            } else {
                baseWidth = isMobile ? 260 : 300;
            }

            const newRadius = Math.round((baseWidth / 2) / tangent) * radiusMult;

            if (newRadius !== currentRadius) {
                currentRadius = newRadius;
                for (let i = 0; i < itemCount; i++) {
                    items[i].style.transform = `rotateY(${i * angle}deg) translateZ(${-currentRadius}px)`;
                }
                rotateCarousel();
            }
        }

        function rotateCarousel() {
            const rotateAngle = currIndex * -angle;
            carousel.style.transform = `translateZ(${currentRadius}px) rotateY(${rotateAngle}deg)`;

            const activeIndex = (currIndex % itemCount + itemCount) % itemCount;

            Array.from(items).forEach((item, index) => {
                item.style.pointerEvents = '';
                item.style.opacity = '';
                item.style.filter = '';
                
                // FIND VIDEO ELEMENTS
                const iframe = item.querySelector('iframe');
                const video = item.querySelector('video');

                if (index === activeIndex) {
                    // --- ACTIVE CARD ---
                    item.classList.add('active-card');
                    
                    if (video) {
                        video.setAttribute('controls', 'true'); 
                        video.muted = false; 
                        
                        // Safe Play Logic
                        const playPromise = video.play();
                        if (playPromise !== undefined) {
                            playPromise.catch(error => {
                                console.log("Autoplay prevented:", error);
                            });
                        }
                    }

                } else {
                    // --- SIDE CARDS ---
                    if (item.classList.contains('active-card')) {
                        item.classList.remove('active-card');
                        
                        // Stop Cloudinary Video
                        if (video) {
                            video.pause();
                            video.currentTime = 0; 
                            video.removeAttribute('controls'); 
                        }

                        // Stop YouTube (Delayed)
                        setTimeout(() => {
                            if (!item.classList.contains('active-card') && iframe) {
                                const tempSrc = iframe.src;
                                iframe.src = tempSrc; 
                            }
                        }, 1000); 

                    } else {
                        item.classList.remove('active-card');
                        if (video) {
                            video.pause();
                            video.removeAttribute('controls');
                        }
                    }
                }
            });
        }

        prevBtn.addEventListener('click', () => {
            currIndex--;
            rotateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currIndex++;
            rotateCarousel();
        });

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateGeometry, 100);
        });

        setTimeout(updateGeometry, 100);
    }

    // INITIALIZE CAROUSELS
    init3DCarousel('carousel-spinner', 'prev-btn', 'next-btn', 1);
    init3DCarousel('shorts-spinner', 'shorts-prev', 'shorts-next', 1.5);


    /* =========================================
       7. NAVIGATION: SCROLL TO CENTER
       ========================================= */
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                const targetId = e.target.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        e.preventDefault();
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'nearest'
                        });
                    }
                }
            }
        });
    }

    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        // Toggle the menu visibility
        navList.classList.toggle('active');
        // Toggle the hamburger X animation
        menuToggle.classList.toggle('is-active');
    });

    // Optional: Close menu when a link is clicked
    document.querySelectorAll('#nav-list li a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });

});