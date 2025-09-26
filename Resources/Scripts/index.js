(function() {
    const places = [
      { id: 'ffc', name: 'Fresh Food Company', type: 'dining-hall', tags: ['dining hall', 'buffet', 'fresh'], description: 'All-you-care-to-eat dining with rotating menus.', image: 'https://spaces4learning.com/-/media/edu/s4l/showcase/2015/freshfoodcompany04x640jpg.jpg' },
      { id: 'lakeside', name: 'Lakeside Dining', type: 'dining-hall', tags: ['dining hall', 'comfort', 'grill'], description: 'Dining hall with grill, comfort, and salad stations.', image: 'https://cmharch.com/wp-content/uploads/2019/10/191001_CMH_UofADiningHalls0341-1600x1067@2x.jpg' },
      { id: 'maryb', name: "Mary B's Dining Hall", type: 'dining-hall', tags: ['dining hall', 'mary burke', 'residential'], description: "Dining hall located in Mary Burke (Mary B's).", image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=60' },
      { id: 'cfa', name: 'Chick-fil-A (Lloyd)', type: 'fast-food', tags: ['chicken', 'sandwiches', 'fast food'], description: 'Classic chicken sandwiches and nuggets.', image: 'https://thecrimsonwhite.com/wp-content/uploads/2024/09/LLOYD-1200x800.jpg' },
      { id: 'panda', name: 'Panda Express', type: 'fast-food', tags: ['asian', 'fast food', 'wok'], description: 'American Chinese fast food favorites.', image: 'https://logo.clearbit.com/pandaexpress.com' },
      { id: 'subway', name: 'Subway', type: 'fast-food', tags: ['sandwiches', 'subs'], description: 'Build-your-own subs and salads.', image: 'https://newsroom.subway.com/download/Subway+Choicemark.png' },
      { id: 'starbucks', name: 'Starbucks', type: 'cafe', tags: ['coffee', 'cafe', 'breakfast'], description: 'Coffee, tea, and light bites at the student center.', image: 'https://cdn.freebiesupply.com/logos/large/2x/starbucks-coffee-logo-png-transparent.png' },
      { id: 'pizza-hut', name: "Pizza Hut", type: 'fast-food', tags: ['pizza'], description: 'Pizzas and sides for quick bites.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-Nv2ULB5lc2gcqL0ziK4E2oveiKqyEkLcA&s' },
      { id: 'canes', name: "Raising Cane's", type: 'fast-food', tags: ['chicken', 'tenders'], description: 'Chicken fingers, fries, sauce.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Raising_Cane%27s_Chicken_Fingers_logo.svg/1200px-Raising_Cane%27s_Chicken_Fingers_logo.svg.png' },
      { id: 'julias-market', name: "Julia's Market (Tutwiler)", type: 'cafe', tags: ['cafe', 'grab-and-go', 'tutwiler'], description: 'Grab-and-go market with snacks and prepared foods in Tutwiler.', image: 'https://turnerbatson.com/wp-content/uploads/2019/07/University-of-Alabama-Julia-Tutwiler-Hall-TURNERBATSON-Architects-Julias-Market.jpg' },
      { id: 'blenz-ferg', name: 'Blenz (Student Center)', type: 'cafe', tags: ['coffee', 'tea', 'blenz'], description: 'Coffee and beverages; one of multiple campus locations.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNc_MQYO_XsvJpOSftC3RVdygvKlv9W5oL2A&s' },
      { id: 'choolaah', name: 'Choolaah', type: 'fast-food', tags: ['indian', 'bbq', 'bowls'], description: 'Indian BBQ bowls and wraps.', image: 'https://choolaah.com/wp-content/themes/devdmbootstrap3-sasschild/img/choolaah-svg-logo.svg' },
      { id: 'cooper-cafe', name: 'Cooper Café', type: 'cafe', tags: ['coffee', 'pastries'], description: 'Cafe with coffee and light snacks.', image: 'https://culverhouse.ua.edu/wp-content/uploads/2021/09/2109002_MW_032_hewson_hall-scaled.jpg' },
      { id: 'dunkin', name: "Dunkin' Donuts", type: 'fast-food', tags: ['coffee', 'donuts'], description: 'Coffee, donuts, and breakfast sandwiches.', image: 'https://1000logos.net/wp-content/uploads/2023/04/Dunkin-Donuts-Logo-2019-2048x1152.png' },
      { id: 'java-city-gorgas', name: 'Java City (Gorgas)', type: 'cafe', tags: ['coffee', 'gorgas'], description: 'Coffee shop inside Gorgas.', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/IntKi456TIUQ5K4FiRMy_w/l.jpg' },
      { id: 'law-school-cafe', name: 'Law School Café', type: 'cafe', tags: ['law school', 'coffee'], description: 'Cafe located in the Law School.', image: 'https://my.matterport.com/api/v1/player/models/vGCtCdG5Qs6/thumb?disable=upscale&frame=1&width=1200&height=630&fit=crop' },
      { id: 'low-tide-poke', name: 'Low Tide Poke', type: 'fast-food', tags: ['poke', 'bowls'], description: 'Poke bowls and fresh toppings.', image: 'https://www.eventeny.com/users/pic/787773-business-picture-jbnc9wm845m11738616693-1200.jpeg' },
      { id: 'voodoo-wings', name: 'VooDoo Wings', type: 'fast-food', tags: ['wings', 'chicken'], description: 'Wings with a variety of sauces.', image: 'https://www.voodoowingco.com/wp-content/themes/voodoo/images/logo.png' },
      { id: 'chipotle', name: 'Chipotle', type: 'fast-food', tags: ['mexican', 'bowls', 'burritos'], description: 'Build-your-own bowls, burritos, and tacos.', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png' },
      { id: 'moes', name: "Moe's Southwest Grill", type: 'fast-food', tags: ['mexican', 'burritos', 'bowls'], description: 'Tex-Mex burritos, bowls, and queso.', image: 'https://logo.clearbit.com/moes.com' },
      { id: 'med-sandwich-co', name: 'Mediterranean Sandwich Co.', type: 'fast-food', tags: ['mediterranean', 'sandwiches', 'pita'], description: 'Mediterranean sandwiches, gyros, and salads.', image: 'https://mediterraneansandwich.com/wp-content/uploads/2024/09/logo-500-retina.png' },
      { id: 'taco-bell', name: 'Taco Bell', type: 'fast-food', tags: ['mexican', 'tacos'], description: 'Tacos, burritos, and specialties.', image: 'https://1000logos.net/wp-content/uploads/2017/06/Taco-Bell-Logo.png' },
      { id: 'the-standard', name: 'The Standard', type: 'fast-food', tags: ['american', 'grill'], description: 'American fare near campus.', image: 'https://d1w7312wesee68.cloudfront.net/Wrz5TaODa9C9D-88IJFJgdAkKVJ-f0olfhMTlNC7c24/ext:webp/quality:85/plain/s3://toast-sites-resources-prod/restaurantImages/b510f0ef-c7cf-43e2-81be-df12d17ada81/SRCGZN7OPZDSLE3DYRDVDR72PU.jpg' },
      { id: 'waffle-house', name: 'Waffle House', type: 'fast-food', tags: ['breakfast', 'waffles'], description: '24/7 diner classics and waffles.', image: 'https://logo.clearbit.com/wafflehouse.com' },
      { id: 'buffalo-phils', name: "Buffalo Phil's", type: 'fast-food', tags: ['wings', 'american'], description: 'Wings and American eats.', image: 'https://logo.clearbit.com/buffalophils.com' },
      { id: 'chicken-salad-chick', name: 'Chicken Salad Chick', type: 'fast-food', tags: ['salads', 'chicken', 'sandwiches'], description: 'Chicken salad, sandwiches, and sides.', image: 'https://logo.clearbit.com/chickensaladchick.com' },
      { id: 'la-mexicana', name: 'La Mexicana', type: 'fast-food', tags: ['mexican', 'tacos', 'grill'], description: 'Local Mexican cuisine near campus.', image: 'https://d3hbe0kmbam4a5.cloudfront.net/photos/f206b3d4-f0d8-4b09-9a12-aebd45e0b63b.jpg' },
      
      { id: 'presidential-terrace-deli', name: 'Presidential Terrace Deli', type: 'fast-food', tags: ['deli', 'presidential terrace'], description: 'Deli at Presidential Terrace.', image: 'https://my.matterport.com/api/v1/player/models/WYenR8S1L2s/thumb?disable=upscale&frame=1&width=1200&height=630&fit=crop' }
    ];
  
    let activeFilter = 'all';
    let searchQuery = '';
  
    const gridEl = document.getElementById('placesGrid');
    const resultsEl = document.getElementById('resultsCount');
    const yearEl = document.getElementById('year');
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
  
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  
    function normalize(text) {
      return (text || '').toLowerCase();
    }
  
    function matchesFilters(place) {
      const query = normalize(searchQuery);
  
      const matchesType = activeFilter === 'all' ? true : place.type === activeFilter;
      const matchesQuery = !query
        ? true
        : normalize(place.name).includes(query) || (place.tags || []).some(t => normalize(t).includes(query));
  
      return matchesType && matchesQuery;
    }
  
    function renderPlaces(list) {
      if (!gridEl) return;
      if (!list.length) {
        gridEl.innerHTML = '<div class="col-12 text-center text-muted py-5">No places match your search.</div>';
        return;
      }
  
      const cards = list.map(place => {
        const typeLabel = place.type.replace('-', ' ');
        const isLogo = place.type !== 'dining-hall';
        const imageClass = isLogo ? 'image-logo' : 'image-photo';
        const imageTag = place.image
          ? `<img class="card-img-top place-image ${imageClass}" src="${place.image}" alt="${place.name} image" onerror="this.style.display='none'">`
          : '<div class="card-img-top placeholder"></div>';
  
        return `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card place-card h-100" data-type="${place.type}" data-name="${place.name}" data-id="${place.id}">
              ${imageTag}
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="card-title mb-0">${place.name}</h5>
                  <span class="badge badge-type ${place.type}">${typeLabel}</span>
                </div>
                <p class="card-text text-secondary mb-3">${place.description || ''}</p>
                <div class="mt-auto d-flex gap-2 flex-wrap">
                  ${(place.tags || []).slice(0, 3).map(t => `<span class=\"badge rounded-pill bg-light text-secondary border\">${t}</span>`).join('')}
                </div>
                <div class="mt-3">
                  <a href="#" class="btn btn-sm btn-outline-secondary view-menu-btn">View Menu</a>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
  
      gridEl.innerHTML = cards;
    }
  
    function updateResultsCount(count) {
      if (!resultsEl) return;
      resultsEl.textContent = `Showing ${count} place${count === 1 ? '' : 's'}`;
    }
  
    function applyFilters() {
      const filtered = places.filter(matchesFilters);
      renderPlaces(filtered);
      updateResultsCount(filtered.length);
    }
  
    // Dropdown filters
    const filterLinks = document.querySelectorAll('.filter-option');
    filterLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.getAttribute('data-filter');
        if (!filter) return;
  
        activeFilter = filter;
  
        // Update active state
        filterLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
  
        applyFilters();
      });
    });
  
    // Search
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        searchQuery = searchInput ? searchInput.value : '';
        applyFilters();
      });
    }
  
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value;
        applyFilters();
      });
    }
  
    // Initial render
    applyFilters();

    // Delegated click handler for View Menu
    if (gridEl) {
      gridEl.addEventListener('click', async (e) => {
        const target = e.target;
        if (target && target.classList.contains('view-menu-btn')) {
          e.preventDefault();
          const card = target.closest('.place-card');
          if (!card) return;
          const placeId = card.getAttribute('data-id');
          const placeName = card.getAttribute('data-name');

          const modalEl = document.getElementById('menuModal');
          const modalTitle = document.getElementById('menuModalLabel');
          const loadingEl = document.getElementById('menuLoading');
          const errorEl = document.getElementById('menuError');
          const tbody = document.getElementById('menuTableBody');
          const searchInputModal = document.getElementById('menuSearch');
          if (!modalEl || !modalTitle || !loadingEl || !errorEl || !tbody) return;

          modalTitle.textContent = `${placeName} — Menu`;
          tbody.innerHTML = '';
          errorEl.classList.add('d-none');
          errorEl.textContent = '';
          loadingEl.classList.remove('d-none');

          // Show the modal immediately for faster perceived performance
          const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
          bsModal.show();

          const API_BASES = [
            'http://localhost:5210/api/menu',
            'https://localhost:7204/api/menu',
            'http://localhost:5202/api/menu',
            'https://localhost:5202/api/menu'
          ];

          async function fetchWithTimeout(url, options = {}, timeoutMs = 6000) {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeoutMs);
            try {
              const response = await fetch(url, { ...options, signal: controller.signal });
              return response;
            } finally {
              clearTimeout(id);
            }
          }

          async function fetchWithFallback(bases, path) {
            let lastError;
            for (const base of bases) {
              try {
                const res = await fetchWithTimeout(`${base}/${path}`);
                if (res.ok) return { base, res };
                lastError = new Error(`HTTP ${res.status} at ${base}`);
              } catch (err) {
                lastError = err;
              }
            }
            throw lastError || new Error('All API endpoints failed');
          }

          try {
            const { res } = await fetchWithFallback(API_BASES, encodeURIComponent(placeId));
            if (!res.ok) {
              throw new Error(`Request failed: ${res.status}`);
            }
            const data = await res.json();

            // Keep raw data for filtering
            const allRows = Array.isArray(data) ? data : [];

            function renderRows(rows) {
              if (!rows.length) {
                tbody.innerHTML = '<tr><td colspan="12" class="text-center text-muted">No items found.</td></tr>';
                return;
              }
              tbody.innerHTML = rows.map(item => {
                return `
                  <tr>
                    <td>${item.id ?? item.Id ?? ''}</td>
                    <td>${item.menuItem ?? item.MenuItem ?? ''}</td>
                    <td>${item.servingSize ?? item.ServingSize ?? ''}</td>
                    <td>${item.calories ?? item.Calories ?? ''}</td>
                    <td>${item.fats ?? item.Fats ?? ''}</td>
                    <td>${item.saturatedFats ?? item.SaturatedFats ?? ''}</td>
                    <td>${item.cholesterol ?? item.Cholesterol ?? ''}</td>
                    <td>${item.sodium ?? item.Sodium ?? ''}</td>
                    <td>${item.carbohydrates ?? item.Carbohydrates ?? ''}</td>
                    <td>${item.fiber ?? item.Fiber ?? ''}</td>
                    <td>${item.sugar ?? item.Sugar ?? ''}</td>
                    <td>${item.protein ?? item.Protein ?? ''}</td>
                  </tr>`;
              }).join('');
            }

            if (!Array.isArray(allRows) || allRows.length === 0) {
              tbody.innerHTML = '<tr><td colspan="12" class="text-center text-muted">No items found.</td></tr>';
            } else {
              renderRows(allRows);
              if (searchInputModal) {
                searchInputModal.value = '';
                searchInputModal.oninput = () => {
                  const q = (searchInputModal.value || '').toLowerCase();
                  const filtered = allRows.filter(it => String(it.menuItem ?? it.MenuItem ?? '').toLowerCase().includes(q));
                  renderRows(filtered);
                };
              }
            }
          } catch (err) {
            errorEl.textContent = 'Unable to load menu. Start the API and try http://localhost:PORT if https fails.';
            errorEl.classList.remove('d-none');
          } finally {
            loadingEl.classList.add('d-none');
          }

        }
      });
    }
  })();