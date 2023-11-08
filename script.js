// Memilih elemen dengan ID "insert" dari dokumen HTML.
const insert = document.getElementById("insert");

// Menambahkan event listener untuk event "keydown" pada jendela (seluruh halaman).
window.addEventListener("keydown", (event) => {
    insert.innerHTML = `  
  <div class="key">
  ${event.key === " " ? "Space" : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
});