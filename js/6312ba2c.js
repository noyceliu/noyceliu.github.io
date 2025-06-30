document.addEventListener('DOMContentLoaded', () => {
  fixit.decryptor.addEventListener('decrypted', function() {
    console.log('after password decryption')
  })
  if (window.localStorage.getItem(`fixit-decryptor/#${location.pathname}`)) {
    console.log('after automatic decryption')
  }
});