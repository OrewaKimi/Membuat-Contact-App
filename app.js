const contacts = require('./contacts.js')

// Fungsi utama menggunakan async/await
const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan Nama Anda :');
    const email = await contacts.tulisPertanyaan('Masukkan Email Anda :');
    const noHp = await contacts.tulisPertanyaan('Masukkan noHp Anda :');
    
    contacts.simpanContact(nama,email, noHp);
};

// Menjalankan fungsi utama
main();
