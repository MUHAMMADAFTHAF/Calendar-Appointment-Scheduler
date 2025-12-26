let viewYear, viewMonth; // globals for current view

function setViewToDate(d) {
  viewYear = d.getFullYear();
  viewMonth = d.getMonth();
}

function formatFriendly(date) {
  // Force Month Day, Year format (e.g. December 25, 2025)
  const opts = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', opts);
}

function renderCalendar(date = new Date()) {
  const calendar = document.getElementById("calendarGrid");
  if (!calendar) return;
  calendar.innerHTML = "";

  setViewToDate(date);
  const year = viewYear;
  const month = viewMonth;

  // update hidden picker and visible display (if present)
  const picker = document.getElementById('calendarPicker');
  const display = document.getElementById('calendarDisplay');
  if (picker) picker.value = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toISOString().slice(0,10);
  if (display) display.value = formatFriendly(date);

  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay(); // 0..6
  const days = new Date(year, month + 1, 0).getDate();

  // add blank cells for previous month days (muted)
  for (let i = 0; i < startWeekday; i++) {
    const div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `<span class="muted"></span>`;
    calendar.appendChild(div);
  }

  // create day cells
  for (let i = 1; i <= days; i++) {
    const div = document.createElement("div");
    div.className = "day";
    const isToday = (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear());
    if (isToday) div.classList.add('today');
    div.innerHTML = `<strong>${i}</strong>`;
    calendar.appendChild(div);
  }

  // populate events from stored appointments (matching month/year)
  try {
    const appts = getAppointments();
    appts.forEach(a => {
      if (!a.date) return;
      // date expected in YYYY-MM-DD
      const parts = a.date.split('-');
      if (parts.length !== 3) return;
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      const d = parseInt(parts[2], 10);
      if (y === year && m === month) {
        // find the corresponding cell index: startWeekday offset + (d-1)
        const cellIndex = startWeekday + (d - 1);
        const cells = calendar.querySelectorAll('.day');
        const cell = cells[cellIndex];
        if (cell) {
          const ev = document.createElement('div');
          ev.className = 'event';
          ev.innerHTML = `<div class="left"><span>⏺</span><span>${a.patient} (${a.time})</span></div><div class="icons"><button title="Edit" onclick="editAppointment(${a.id})"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 16.25H18.75V17.5H1.25V16.25ZM15.875 5.625C16.375 5.125 16.375 4.375 15.875 3.875L13.625 1.625C13.125 1.125 12.375 1.125 11.875 1.625L2.5 11V15H6.5L15.875 5.625ZM12.75 2.5L15 4.75L13.125 6.625L10.875 4.375L12.75 2.5ZM3.75 13.75V11.5L10 5.25L12.25 7.5L6 13.75H3.75Z" fill="#2C7BE5"/>
</svg></button><button title="Delete" onclick="deleteAppointment(${a.id}); renderCalendar(new Date())"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#E23D28"/>
</svg></button></div>`;
          cell.appendChild(ev);
        }
      }
    });
  } catch (err) {
    console.warn('Calendar render error', err);
  }
}

// initial render to today
renderCalendar(new Date());

// hookup controls
document.addEventListener('DOMContentLoaded', () => {
  const picker = document.getElementById('calendarPicker');
  const display = document.getElementById('calendarDisplay');
  if (picker) {
    picker.addEventListener('change', (e) => {
      const v = e.target.value; // YYYY-MM-DD
      if (!v) return;
      const d = new Date(v);
      // update visible display and render that month
      if (display) display.value = formatFriendly(d);
      renderCalendar(d);
    });
  }

  // wire up custom popover
  const pickerWrap = document.getElementById('calendarPickerWrap');
  const popover = document.getElementById('calendarPopover');
  if (pickerWrap && popover) {
    const calendarIcon = document.getElementById('calendarIcon');
    if (calendarIcon) {
      calendarIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        popover.classList.toggle('active');
        // render popover mini calendar for current view
        renderMiniCalendar(new Date(viewYear, viewMonth, 1));
      });
    }

    // close popover when clicking outside
    document.addEventListener('click', (ev) => {
      if (!pickerWrap.contains(ev.target) && !popover.contains(ev.target)) {
        popover.classList.remove('active');
      }
    });
  }

  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  const todayBtn = document.getElementById('todayBtn');
  if (prev) prev.addEventListener('click', () => {
    const d = new Date(viewYear, viewMonth - 1, 1);
    renderCalendar(d);
  });
  if (next) next.addEventListener('click', () => {
    const d = new Date(viewYear, viewMonth + 1, 1);
    renderCalendar(d);
  });
  if (todayBtn) todayBtn.addEventListener('click', () => renderCalendar(new Date()));

  // month selector (if present): render chosen month in current view year
  const monthSelect = document.getElementById('monthSelect');
  if (monthSelect) {
    // set initial value to current month
    monthSelect.value = String(new Date().getMonth());
    monthSelect.addEventListener('change', (e) => {
      const m = parseInt(e.target.value, 10);
      const year = (typeof viewYear === 'number') ? viewYear : new Date().getFullYear();
      renderCalendar(new Date(year, m, 1));
    });
  }
});

// Renders a small selectable calendar into the popover
function renderMiniCalendar(date) {
  const pop = document.getElementById('calendarPopover');
  if (!pop) return;
  pop.innerHTML = '';
  const year = date.getFullYear();
  const month = date.getMonth();

  const heading = document.createElement('div');
  heading.style.display = 'flex';
  heading.style.justifyContent = 'space-between';
  heading.style.alignItems = 'center';
  heading.style.marginBottom = '8px';
  heading.innerHTML = `<strong>${date.toLocaleString(undefined,{month:'long', year:'numeric'})}</strong>`;
  pop.appendChild(heading);

  const miniWeek = document.createElement('div');
  miniWeek.className = 'mini-weekdays';
  ['S','M','T','W','T','F','S'].forEach(d=>{ const el=document.createElement('div'); el.textContent=d; miniWeek.appendChild(el)});
  pop.appendChild(miniWeek);

  const grid = document.createElement('div');
  grid.className = 'mini-grid';

  const firstDay = new Date(year, month, 1);
  const start = firstDay.getDay();
  const days = new Date(year, month+1,0).getDate();

  // previous month blanks
  for (let i=0;i<start;i++){ const d=document.createElement('div'); d.className='mini-day muted'; d.textContent=''; grid.appendChild(d) }
  for (let i=1;i<=days;i++){
    const dCell=document.createElement('div');
    dCell.className='mini-day';
    const isToday = (i===new Date().getDate() && month===new Date().getMonth() && year===new Date().getFullYear());
    if(isToday) dCell.classList.add('today');
    dCell.textContent = i;
    dCell.dataset.day = i;
    dCell.addEventListener('click', () => {
      const selected = new Date(year, month, i);
      renderCalendar(selected);
      // close popover
      pop.classList.remove('active');
    });
    grid.appendChild(dCell);
  }

  pop.appendChild(grid);
}


