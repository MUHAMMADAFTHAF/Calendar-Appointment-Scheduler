document.addEventListener("submit", function (e) {
  if (e.target.id !== "appointmentForm") return;

  e.preventDefault();

  const appointment = {
    patient: patient.value,
    doctor: doctor.value,
    hospital: hospital.value,
    speciality: speciality.value,
    date: date.value,
    time: time.value,
    reason: reason.value,
    id: Date.now()
  };

  // save using helper and re-render
  addAppointment(appointment);
  closeModal();
  renderDashboard();
});

function renderDashboard() {
  const list = document.getElementById("appointmentList");
  if (!list) return;

  list.innerHTML = "";
  getAppointments().forEach(a => {
    list.innerHTML += `
      <tr data-id="${a.id}">
        <td><a href="#" class="link">${a.patient}</a></td>
        <td><a href="#" class="link">${a.doctor}</a></td>
        <td><span class="muted">${a.hospital}</span></td>
        <td>${a.speciality}</td>
        <td>${a.date}</td>
        <td><a href="#" class="time-link">${a.time}</a></td>
        <td class="text-right action-icons">
          <button class="edit" title="Edit" onclick="editAppointment(${a.id})"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 16.25H18.75V17.5H1.25V16.25ZM15.875 5.625C16.375 5.125 16.375 4.375 15.875 3.875L13.625 1.625C13.125 1.125 12.375 1.125 11.875 1.625L2.5 11V15H6.5L15.875 5.625ZM12.75 2.5L15 4.75L13.125 6.625L10.875 4.375L12.75 2.5ZM3.75 13.75V11.5L10 5.25L12.25 7.5L6 13.75H3.75Z" fill="#2C7BE5"/>
</svg>
</button>
          <button class="delete" title="Delete" onclick="removeAppointment(${a.id})"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#E23D28"/>
</svg>
</button>
        </td>
      </tr>`;
  });
}

renderDashboard();

function removeAppointment(id) {
  deleteAppointment(id);
  renderDashboard();
}

function editAppointment(id) {
  // basic stub: find appointment, populate modal fields and open modal for editing
  const appts = getAppointments();
  const a = appts.find(x => x.id === id);
  if (!a) return;

  // open modal and fill values
  openModal();
  // slight delay to ensure modal elements exist
  setTimeout(() => {
    const el = document.getElementById('appointmentModal');
    if (!el) return;
    try {
      document.getElementById('patient').value = a.patient;
      document.getElementById('doctor').value = a.doctor;
      document.getElementById('hospital').value = a.hospital;
      document.getElementById('speciality').value = a.speciality;
      document.getElementById('date').value = a.date;
      document.getElementById('time').value = a.time;
      document.getElementById('reason').value = a.reason;
    } catch (err) { /* ignore if not present */ }
  }, 100);
}


