function openModal() {
  if (document.getElementById("appointmentModal")) return;

  document.body.insertAdjacentHTML("beforeend", `
  <div class="modal-overlay" id="appointmentModal">
  <div class="modal">
      <!-- HEADER -->
      <div class="modal-header">
        <h3>Schedule Appointment</h3>
        <span class="close-icon" onclick="closeModal()">×</span>
      </div>

      <!-- FORM -->
      <form id="appointmentForm" class="modal-form">

        <div class="form-row">
          <div class="form-group">
            <label>Patient Name</label>
            <div class="input-row">
              <span class="icon"> 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_60_223)">
                    <path d="M14.1666 17.5V15.8333C14.1666 14.9493 13.8154 14.1014 13.1903 13.4763C12.5652 12.8512 11.7173 12.5 10.8333 12.5H4.16659C3.28253 12.5 2.43468 12.8512 1.80956 13.4763C1.18444 14.1014 0.833252 14.9493 0.833252 15.8333V17.5" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.50008 9.16667C9.34103 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34103 2.5 7.50008 2.5C5.65913 2.5 4.16675 3.99238 4.16675 5.83333C4.16675 7.67428 5.65913 9.16667 7.50008 9.16667Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.1667 17.4999V15.8333C19.1662 15.0947 18.9204 14.3773 18.4679 13.7935C18.0154 13.2098 17.3819 12.7929 16.6667 12.6083" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.3333 2.60828C14.0503 2.79186 14.6858 3.20886 15.1396 3.79353C15.5935 4.37821 15.8398 5.0973 15.8398 5.83744C15.8398 6.57758 15.5935 7.29668 15.1396 7.88135C14.6858 8.46603 14.0503 8.88303 13.3333 9.06661" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_60_223">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input id="patient" type="text" required>
            </div>
          </div>
          <div class="form-group">
            <label>Doctor Name</label>
            <div class="input-row">
              <span class="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_60_223)">
                    <path d="M14.1666 17.5V15.8333C14.1666 14.9493 13.8154 14.1014 13.1903 13.4763C12.5652 12.8512 11.7173 12.5 10.8333 12.5H4.16659C3.28253 12.5 2.43468 12.8512 1.80956 13.4763C1.18444 14.1014 0.833252 14.9493 0.833252 15.8333V17.5" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.50008 9.16667C9.34103 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34103 2.5 7.50008 2.5C5.65913 2.5 4.16675 3.99238 4.16675 5.83333C4.16675 7.67428 5.65913 9.16667 7.50008 9.16667Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.1667 17.4999V15.8333C19.1662 15.0947 18.9204 14.3773 18.4679 13.7935C18.0154 13.2098 17.3819 12.7929 16.6667 12.6083" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.3333 2.60828C14.0503 2.79186 14.6858 3.20886 15.1396 3.79353C15.5935 4.37821 15.8398 5.0973 15.8398 5.83744C15.8398 6.57758 15.5935 7.29668 15.1396 7.88135C14.6858 8.46603 14.0503 8.88303 13.3333 9.06661" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_60_223">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <select id="doctor"  required>
                <option value="Dr. Shankar">Dr. Shankar</option>
                <option value="Dr. Khan">Dr. Khan</option>
                <option value="Dr. Salman">Dr. Salman</option>
                <option value="Dr. Amir">Dr. Amir</option>
                <option value="Dr. Samual">Dr. Samual</option>
                <option value="Dr. John">Dr. John</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Hospital</label>
            <div class="input-row">
              <span class="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_60_233)">
                    <path d="M10.0001 1.66663C6.77508 1.66663 4.16675 4.27496 4.16675 7.49996C4.16675 8.94996 4.58341 10.3083 5.34175 11.5333C6.13341 12.8166 7.17508 13.9166 7.97508 15.2C8.36675 15.825 8.65008 16.4083 8.95008 17.0833C9.16675 17.5416 9.34175 18.3333 10.0001 18.3333C10.6584 18.3333 10.8334 17.5416 11.0417 17.0833C11.3501 16.4083 11.6251 15.825 12.0167 15.2C12.8167 13.925 13.8584 12.825 14.6501 11.5333C15.4167 10.3083 15.8334 8.94996 15.8334 7.49996C15.8334 4.27496 13.2251 1.66663 10.0001 1.66663ZM10.0001 9.79163C8.85008 9.79163 7.91675 8.85829 7.91675 7.70829C7.91675 6.55829 8.85008 5.62496 10.0001 5.62496C11.1501 5.62496 12.0834 6.55829 12.0834 7.70829C12.0834 8.85829 11.1501 9.79163 10.0001 9.79163Z" fill="#2E2E2E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_60_233">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <select id="hospital" required>
                <option value="SRM hospital">SRM hospital</option>
                <option value="Apollo Hospital">Apollo Hospital</option>
                <option value="AIMS hospital">AIMS hospital</option>
                <option value="SIMS Hospital">SIMS Hospital</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Specialty</label>
            <div class="input-row">
              <span class="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_60_241)">
                    <path d="M6.21903 6.74834L6.35237 6.73834C6.40064 6.73367 6.44681 6.71849 6.48665 6.69417L6.4857 6.69501C6.61332 7.08001 6.76951 7.48501 6.96475 7.90917C7.21522 8.46417 7.46189 8.92001 7.73808 9.36001L7.69999 9.29334C7.67713 9.59667 7.64951 9.90834 7.61332 10.21C7.59746 10.388 7.55619 10.5635 7.49046 10.7325L7.49522 10.7175C7.4838 10.7217 7.4676 12.4508 7.4676 12.4508C7.46796 12.9874 7.67462 13.5082 8.05433 13.9295C8.43405 14.3508 8.96472 14.648 9.56094 14.7733L9.57999 14.7767C9.60646 14.7165 9.65309 14.6647 9.71376 14.6282C9.77443 14.5916 9.84631 14.5719 9.91999 14.5717H10.4667C10.5397 14.5725 10.6108 14.5922 10.6711 14.6282C10.7314 14.6642 10.7782 14.715 10.8057 14.7742L10.8067 14.7767C11.4079 14.6551 11.9447 14.3594 12.3299 13.9376C12.7152 13.5158 12.9265 12.9925 12.9295 12.4525C12.9295 12.4525 12.8962 10.73 12.879 10.7183C12.8223 10.5573 12.7834 10.3918 12.7628 10.2242L12.7619 10.2117C12.7286 9.90834 12.7067 9.60417 12.6752 9.295C12.9105 8.92334 13.1571 8.46834 13.3743 7.99917L13.4105 7.91084C13.6057 7.48667 13.7571 7.08251 13.8895 6.69667C13.9286 6.72098 13.9742 6.73618 14.0219 6.74084H14.0228L14.1571 6.75084C14.319 6.76584 14.4619 6.64917 14.4752 6.46834L14.62 4.85917V4.8575C14.6199 4.79275 14.5929 4.73023 14.544 4.68163C14.4951 4.63302 14.4277 4.60163 14.3543 4.59334H14.3362C14.463 3.75541 14.3844 2.90346 14.1057 2.09417L14.1181 2.13667C13.8495 1.61477 13.4409 1.15727 12.9271 0.803007C12.4133 0.448739 11.8094 0.208155 11.1667 0.101672L11.1419 0.0983382C10.8303 0.0436699 10.5139 0.0124448 10.1962 0.00500488H10.1762C9.84383 0.0102125 9.51281 0.0431393 9.1876 0.103338L9.22189 0.0983382C8.57949 0.202672 7.975 0.440137 7.45902 0.790855C6.94305 1.14157 6.53059 1.59534 6.25618 2.11417L6.2457 2.13667C5.97151 2.94284 5.89843 3.79115 6.03141 4.62417L6.0276 4.59334C5.95401 4.60031 5.88594 4.63076 5.83639 4.67888C5.78685 4.727 5.75931 4.7894 5.75903 4.85417V4.86L5.9038 6.46917C5.91713 6.65417 6.06189 6.76584 6.21808 6.75084L6.21903 6.74834Z" fill="black"/>
                    <path d="M20.3965 17.3983C20.3298 14.865 20.0403 14.2916 19.8841 13.9033C19.8222 13.7475 19.7717 12.6941 17.7832 12.0108C16.5641 11.5908 14.9908 11.5825 13.6593 11.09V12.46C13.658 13.1623 13.3775 13.8424 12.8659 14.3836C12.3544 14.9249 11.6437 15.2936 10.8555 15.4266L10.8336 15.43C10.8194 15.5039 10.7759 15.5711 10.7108 15.6198C10.6457 15.6685 10.5631 15.6957 10.4774 15.6966H10.4603V16.73C10.4603 17.2149 10.6804 17.6799 11.0723 18.0228C11.4642 18.3657 11.9956 18.5583 12.5498 18.5583C13.104 18.5583 13.6355 18.3657 14.0273 18.0228C14.4192 17.6799 14.6393 17.2149 14.6393 16.73V16.0083C14.3517 15.9714 14.0895 15.8435 13.9024 15.6489C13.7152 15.4543 13.616 15.2064 13.6236 14.9521C13.6312 14.6978 13.7451 14.4548 13.9436 14.269C14.1422 14.0832 14.4117 13.9675 14.7011 13.9438C14.9905 13.9201 15.2799 13.9901 15.5144 14.1404C15.7488 14.2908 15.9122 14.5111 15.9736 14.7598C16.0349 15.0084 15.9901 15.2681 15.8474 15.4897C15.7047 15.7113 15.4742 15.8795 15.1993 15.9625L15.1908 15.965V16.7691C15.1908 17.3822 14.9124 17.9702 14.417 18.4037C13.9215 18.8373 13.2495 19.0808 12.5489 19.0808C11.8482 19.0808 11.1762 18.8373 10.6808 18.4037C10.1853 17.9702 9.90696 17.3822 9.90696 16.7691V16.7275V16.7291V15.6866C9.82541 15.6818 9.74812 15.653 9.68762 15.6049C9.62712 15.5568 9.58696 15.4922 9.57363 15.4216V15.42C8.78462 15.2883 8.07249 14.9207 7.55923 14.38C7.04597 13.8394 6.76353 13.1595 6.7603 12.4566V11.0758C5.42315 11.5783 3.8403 11.5883 2.61458 12.0091C0.620295 12.6916 0.574581 13.7425 0.513629 13.9008C0.361248 14.2908 0.0679146 14.8616 0.00124792 17.3966C-0.0101807 17.73 0.00124797 18.2408 1.14982 18.6875C3.65077 19.5458 6.87268 19.8125 10.0489 20.0041H10.3536C13.5365 19.8141 16.7536 19.5483 19.2527 18.6875C20.3965 18.2433 20.407 17.735 20.3965 17.3983ZM6.41458 16.365H5.22791V17.4075H4.3803V16.3683H3.19363V15.6266H4.3803V14.5883H5.22791V15.6266H6.41458V16.365Z" fill="black"/>
                    <path d="M15.4523 14.9708C15.4522 14.8221 15.3846 14.6787 15.2643 14.5736C15.1441 14.4685 14.9811 14.4095 14.8111 14.4095C14.6412 14.4096 14.4782 14.4687 14.3581 14.5739C14.2379 14.6791 14.1704 14.8217 14.1704 14.9704C14.1704 15.1191 14.2379 15.2617 14.3581 15.3669C14.4782 15.472 14.6412 15.5312 14.8111 15.5312C14.9811 15.5313 15.1441 15.4723 15.2643 15.3672C15.3846 15.2621 15.4522 15.1195 15.4523 14.9708Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_60_241">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <select id="speciality" required>
                <option value="ENT Specialist">ENT Specialist</option>
                <option value="Gynaecologist">Gynaecologist</option>
                <option value="Orthopaedic Surgeon">Orthopaedic Surgeon</option>
                <option value="Psychiatrist">Psychiatrist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Pulmonologist">Pulmonologist</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Date</label>
            <div class="input-row" data-type="date">
              <span class="icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66675 15.8333C1.66675 17.25 2.75008 18.3333 4.16675 18.3333H15.8334C17.2501 18.3333 18.3334 17.25 18.3334 15.8333V9.16663H1.66675V15.8333ZM15.8334 3.33329H14.1667V2.49996C14.1667 1.99996 13.8334 1.66663 13.3334 1.66663C12.8334 1.66663 12.5001 1.99996 12.5001 2.49996V3.33329H7.50008V2.49996C7.50008 1.99996 7.16675 1.66663 6.66675 1.66663C6.16675 1.66663 5.83341 1.99996 5.83341 2.49996V3.33329H4.16675C2.75008 3.33329 1.66675 4.41663 1.66675 5.83329V7.49996H18.3334V5.83329C18.3334 4.41663 17.2501 3.33329 15.8334 3.33329Z" fill="black"/>
                </svg>
              </span>
              <input type="date" id="date" placeholder="Select date" required>
              <span class="placeholder">Select date</span>
            </div>
          </div>
          <div class="form-group">
            <label>Time</label>
            <div class="input-row" data-type="time">
              <span class="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_60_267)">
                    <path d="M9.99175 1.66663C5.39175 1.66663 1.66675 5.39996 1.66675 9.99996C1.66675 14.6 5.39175 18.3333 9.99175 18.3333C14.6001 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6001 1.66663 9.99175 1.66663ZM10.0001 16.6666C6.31675 16.6666 3.33341 13.6833 3.33341 9.99996C3.33341 6.31663 6.31675 3.33329 10.0001 3.33329C13.6834 3.33329 16.6667 6.31663 16.6667 9.99996C16.6667 13.6833 13.6834 16.6666 10.0001 16.6666Z" fill="#2E2E2E"/>
                    <path d="M10.4167 5.83337H9.16675V10.8334L13.5417 13.4584L14.1667 12.4334L10.4167 10.2084V5.83337Z" fill="#2E2E2E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_60_267">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input type="time" id="time" placeholder="Select time" required>
              <span class="placeholder">Select Time</span>
            </div>
          </div>
        </div>

        <div class="form-group full">
          <label>Reason</label>
          <div class="input-row textarea-row">
            <span class="icon"></span>
            <textarea id="reason"></textarea>
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="cancel" onclick="closeModal()">Cancel</button>
          <button type="submit" class="save">Save</button>
        </div>

      </form>
    </div>
  </div>
  `);

  // Attach interactive behavior for date/time rows: clicking the row opens picker and toggles placeholder
  const modalEl = document.getElementById('appointmentModal');
  if (modalEl) {
    const setupPickerRow = (type) => {
      const row = modalEl.querySelector(`.input-row[data-type="${type}"]`);
      if (!row) return;
      const input = row.querySelector('input');
      const placeholder = row.querySelector('.placeholder');

      const updatePlaceholder = () => {
        if (!placeholder) return;
        if (input.value) {
          placeholder.style.display = 'none';
          input.style.color = '';
          input.style.webkitTextFillColor = '';
        } else {
          placeholder.style.display = 'inline-block';
          // hide the browser's default empty rendering (eg. dd-mm-yyyy or --:--)
          input.style.color = 'transparent';
          input.style.webkitTextFillColor = 'transparent';
        }
      };

      // clicking anywhere in the row focuses the input and tries to open native picker
      row.addEventListener('click', (e) => {
        // if clicking a native select inside the row, don't override
        if (e.target.tagName.toLowerCase() === 'select') return;
        input.focus();
        if (typeof input.showPicker === 'function') {
          try { input.showPicker(); } catch (err) { /* ignore */ }
        }
      });

      // update placeholder on input events
      input.addEventListener('input', updatePlaceholder);
      input.addEventListener('change', updatePlaceholder);
      input.addEventListener('focus', () => {
        if (placeholder) placeholder.style.opacity = '0.6';
        // show native rendering while focused so user can see/edit
        input.style.color = '';
        input.style.webkitTextFillColor = '';
      });
      input.addEventListener('blur', () => {
        if (placeholder) placeholder.style.opacity = '1';
        // hide native rendering again if no value
        if (!input.value) {
          input.style.color = 'transparent';
          input.style.webkitTextFillColor = 'transparent';
        }
      });

      // initialize
      updatePlaceholder();
    };

    setupPickerRow('date');
    setupPickerRow('time');
  }
    // Attach submit handler AFTER modal is created
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const appointment = {
      id: editingId || Date.now(),
      patient: patient.value.trim(),
      doctor: doctor.value,
      hospital: hospital.value,
      speciality: speciality.value,
      date: date.value,
      time: time.value
    };

    if (!appointment.patient || !appointment.date || !appointment.time) {
      alert("Please fill required fields");
      return;
    }

    if (editingId) {
      updateAppointment(appointment);
      editingId = null;
    } else {
      addAppointment(appointment);
    }

    closeModal();

    // THIS MAKES GREEN DOT APPEAR
    if (typeof renderCalendar === "function") {
      renderCalendar(new Date(appointment.date));
    }
  });
  
}

function closeModal() {
  document.getElementById("appointmentModal").remove();
}

let editingId = null;

function editAppointment(id) {
  const appts = getAppointments();
  const appt = appts.find(a => a.id === id);
  if (!appt) return;

  openModal("edit", appt);
}





