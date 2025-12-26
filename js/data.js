const STORAGE_KEY = "appointments";

function getAppointments() {
  return JSON.parse(localStorage.getItem("appointments")) || [];
}

function saveAppointments(data) {
  localStorage.setItem("appointments", JSON.stringify(data));
}

function addAppointment(appointment) {
  const data = getAppointments();
  data.push(appointment);
  saveAppointments(data);
}

function deleteAppointment(id) {
  let data = getAppointments();
  data = data.filter(a => a.id !== id);
  saveAppointments(data);
}

function updateAppointment(updated) {
  let data = getAppointments();
  data = data.map(a => a.id === updated.id ? updated : a);
  saveAppointments(data);
}
