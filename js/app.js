/**
 * ARANDUMATH - Utilidades Generales de la Aplicación
 * Gráficos SVG interactivos, Notificaciones Toast, Navegación y Modales
 */

document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitcher();
  highlightActiveNav();
});

/**
 * Configura los botones de cambio rápido de idioma en la barra de navegación
 */
function setupLanguageSwitcher() {
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = getCurrentLang();
      const next = current === 'es' ? 'gn' : 'es';
      setLanguage(next);
      showToast(
        next === 'gn' 
          ? "Ñe'ẽ oñemoambue Guaraní Jopara-pe" 
          : "Idioma cambiado a Castellano", 
        "info"
      );
      // Notificar a componentes si tienen un listener específico
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: next } }));
    });
  });
}

/**
 * Resalta el enlace activo en la cabecera según la URL actual
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href.replace('../', '').replace('./', ''))) {
      link.classList.add('active');
    }
  });
}

/**
 * Muestra una notificación emergente estilizada (Toast)
 * @param {string} message 
 * @param {'info'|'success'|'warning'|'error'} type 
 */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Generador interactivo de gráficos en un elemento SVG para el plano cartesiano
 * @param {HTMLElement|string} target - Elemento o ID del SVG
 * @param {Object} graphData - Información matemática del gráfico
 */
function renderCartesianGraph(target, graphData) {
  const svg = typeof target === 'string' ? document.getElementById(target) : target;
  if (!svg || !graphData) return;

  const width = 420;
  const height = 300;
  const originX = width / 2;
  const originY = height / 2;
  const scale = 25; // 25 px por unidad

  let content = `
    <rect width="${width}" height="${height}" fill="#0d1527"/>
    <defs>
      <pattern id="grid" width="${scale}" height="${scale}" patternUnits="userSpaceOnUse">
        <path d="M ${scale} 0 L 0 0 0 ${scale}" fill="none" stroke="rgba(255, 255, 255, 0.07)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#grid)" />
    
    <!-- Ejes Cartesianos -->
    <line x1="0" y1="${originY}" x2="${width}" y2="${originY}" stroke="#64748b" stroke-width="1.5" />
    <line x1="${originX}" y1="0" x2="${originX}" y2="${height}" stroke="#64748b" stroke-width="1.5" />
    
    <!-- Etiquetas de Ejes -->
    <text x="${width - 15}" y="${originY - 8}" fill="#94a3b8" font-size="12" font-family="sans-serif">X</text>
    <text x="${originX + 8}" y="15" fill="#94a3b8" font-size="12" font-family="sans-serif">Y</text>
    <text x="${originX - 12}" y="${originY + 16}" fill="#64748b" font-size="10">0</text>
  `;

  // Marcas de escala en los ejes
  for (let i = -7; i <= 7; i++) {
    if (i !== 0) {
      const px = originX + i * scale;
      const py = originY - i * scale;
      if (px > 0 && px < width) {
        content += `<line x1="${px}" y1="${originY - 3}" x2="${px}" y2="${originY + 3}" stroke="#64748b" stroke-width="1"/>`;
      }
      if (py > 0 && py < height) {
        content += `<line x1="${originX - 3}" y1="${py}" x2="${originX + 3}" y2="${py}" stroke="#64748b" stroke-width="1"/>`;
      }
    }
  }

  // Trazado de función según tipo
  if (graphData.type === 'linear') {
    const m = graphData.m || 1;
    const b = graphData.b || 0;
    // Puntos extremos
    const x1 = -8;
    const y1 = m * x1 + b;
    const x2 = 8;
    const y2 = m * x2 + b;

    const sx1 = originX + x1 * scale;
    const sy1 = originY - y1 * scale;
    const sx2 = originX + x2 * scale;
    const sy2 = originY - y2 * scale;

    content += `
      <!-- Recta lineal -->
      <line x1="${sx1}" y1="${sy1}" x2="${sx2}" y2="${sy2}" stroke="#06b6d4" stroke-width="3" stroke-linecap="round" />
    `;

    // Resaltar puntos notables (Raíz y Ordenada al origen)
    if (graphData.interceptY !== undefined) {
      const iy = originY - graphData.interceptY * scale;
      content += `
        <circle cx="${originX}" cy="${iy}" r="5" fill="#f59e0b" />
        <text x="${originX + 8}" y="${iy + 4}" fill="#fbbf24" font-size="10" font-weight="bold">(0, ${graphData.interceptY})</text>
      `;
    }
    if (graphData.root !== undefined) {
      const rx = originX + graphData.root * scale;
      content += `
        <circle cx="${rx}" cy="${originY}" r="5" fill="#10b981" />
        <text x="${rx - 10}" y="${originY + 16}" fill="#34d399" font-size="10" font-weight="bold">(${graphData.root}, 0)</text>
      `;
    }

  } else if (graphData.type === 'quadratic') {
    const a = graphData.a || 1;
    const b = graphData.b || 0;
    const c = graphData.c || 0;

    let pathD = '';
    let isFirst = true;
    for (let x = -6; x <= 6; x += 0.2) {
      const y = a * (x * x) + b * x + c;
      const sx = originX + x * scale;
      const sy = originY - y * scale;

      if (sy >= -50 && sy <= height + 50) {
        if (isFirst) {
          pathD += `M ${sx.toFixed(1)} ${sy.toFixed(1)} `;
          isFirst = false;
        } else {
          pathD += `L ${sx.toFixed(1)} ${sy.toFixed(1)} `;
        }
      }
    }

    content += `
      <!-- Parábola cuadrática -->
      <path d="${pathD}" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round"/>
    `;

    // Resaltar vértice
    if (graphData.vertex) {
      const vx = originX + graphData.vertex.h * scale;
      const vy = originY - graphData.vertex.k * scale;
      content += `
        <circle cx="${vx}" cy="${vy}" r="6" fill="#f43f5e" />
        <text x="${vx + 8}" y="${vy - 8}" fill="#fda4af" font-size="11" font-weight="bold">V(${graphData.vertex.h}, ${graphData.vertex.k})</text>
      `;
    }

  } else if (graphData.type === 'rational') {
    const asympX = graphData.asymptoteX || 0;
    const sax = originX + asympX * scale;

    content += `
      <!-- Asíntota vertical punteada -->
      <line x1="${sax}" y1="0" x2="${sax}" y2="${height}" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,5" />
      <text x="${sax + 6}" y="24" fill="#fbbf24" font-size="10">Asíntota x = ${asympX}</text>
    `;

    // Rama izquierda
    let pLeft = '';
    for (let x = asympX - 6; x < asympX - 0.2; x += 0.2) {
      const y = graphData.numerator / (x - asympX);
      const sx = originX + x * scale;
      const sy = originY - y * scale;
      if (pLeft === '') pLeft += `M ${sx.toFixed(1)} ${sy.toFixed(1)} `;
      else pLeft += `L ${sx.toFixed(1)} ${sy.toFixed(1)} `;
    }

    // Rama derecha
    let pRight = '';
    for (let x = asympX + 0.2; x <= asympX + 6; x += 0.2) {
      const y = graphData.numerator / (x - asympX);
      const sx = originX + x * scale;
      const sy = originY - y * scale;
      if (pRight === '') pRight += `M ${sx.toFixed(1)} ${sy.toFixed(1)} `;
      else pRight += `L ${sx.toFixed(1)} ${sy.toFixed(1)} `;
    }

    content += `
      <path d="${pLeft}" fill="none" stroke="#38bdf8" stroke-width="3" />
      <path d="${pRight}" fill="none" stroke="#38bdf8" stroke-width="3" />
    `;

  } else if (graphData.type === 'relation') {
    // Puntos discretos de una relación
    if (graphData.points) {
      graphData.points.forEach(pt => {
        const px = originX + pt.x * scale;
        const py = originY - pt.y * scale;
        const color = pt.highlight ? '#f43f5e' : '#10b981';
        content += `
          <circle cx="${px}" cy="${py}" r="6" fill="${color}" />
          <text x="${px + 8}" y="${py + 4}" fill="${color}" font-size="10" font-weight="bold">${pt.label}</text>
        `;
      });
    }

    if (graphData.verticalLineAt !== undefined) {
      const vx = originX + graphData.verticalLineAt * scale;
      content += `
        <!-- Prueba de la recta vertical -->
        <line x1="${vx}" y1="20" x2="${vx}" y2="${height - 20}" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,4" />
        <text x="${vx + 6}" y="${height - 30}" fill="#f43f5e" font-size="10">Corte doble x = ${graphData.verticalLineAt}</text>
      `;
    }
  }

  svg.innerHTML = content;
}
