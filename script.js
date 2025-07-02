document.addEventListener('DOMContentLoaded', () => {
  const f1 = document.getElementById('form-step1');
  if (f1) {
    f1.onsubmit = e => {
      e.preventDefault();
      fetch('/submit_form', {
        method: 'POST',
        body: new URLSearchParams(new FormData(f1))
      }).then(() => location = '/verify');
    };
  }
  const f2 = document.getElementById('form-step2');
  if (f2) {
    f2.onsubmit = e => {
      e.preventDefault();
      fetch('/submit_code', {
        method: 'POST',
        body: new URLSearchParams(new FormData(f2))
      }).then(() => location = '/success');
    };
  }
});
