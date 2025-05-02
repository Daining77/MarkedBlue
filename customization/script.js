const zipInput = document.getElementById('zipInput');
    const zipcodeBox = document.getElementById('zipcodeBox');
    zipInput.addEventListener('input', () => {
      zipcodeBox.textContent = zipInput.value;
    });

    const dateInput = document.getElementById('dateInput');
    const dateBox = document.getElementById('dateBox');

    function updateDateDisplay(val) {
      const parts = val.split('-'); // [YYYY, MM, DD]
      if (parts.length === 3) {
        const date = new Date(parts[0], parts[1] - 1, parts[2]);
        const formatted = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        dateBox.textContent = formatted;
      }
    }

    dateInput.addEventListener('input', () => {
      updateDateDisplay(dateInput.value);
    });

    // default to today's date
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    dateInput.value = todayStr;
    updateDateDisplay(todayStr);

    // toggle images
    const mainImage = document.getElementById('mainImage');
    const sunIcon = document.getElementById('sunIcon');
    const cloudIcon = document.getElementById('cloudIcon');

    sunIcon.addEventListener('click', () => {
      mainImage.src = 'image1.png';
    });

    cloudIcon.addEventListener('click', () => {
      mainImage.src = 'image2.png';
    });