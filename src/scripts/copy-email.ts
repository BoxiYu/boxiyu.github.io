// "Copy email address" buttons. Each [data-email-box] holds the address
// ([data-email-address]), the button ([data-copy-email], hidden until this
// runs) and a status line ([data-email-status]). Without JS or clipboard
// access the button stays hidden and the address can still be selected.
for (const box of document.querySelectorAll<HTMLElement>('[data-email-box]')) {
  const button = box.querySelector<HTMLButtonElement>('[data-copy-email]');
  const address = box.querySelector<HTMLElement>('[data-email-address]');
  const status = box.querySelector<HTMLElement>('[data-email-status]');
  if (!button || !address || !status || !navigator.clipboard) continue;
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(address.textContent!.trim());
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Select the email address and copy it manually.';
    }
  });
}
