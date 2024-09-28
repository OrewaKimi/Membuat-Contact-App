const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Membuat folder 'data' jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Membuat file contact.json jika belum ada
const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Pertanyaan untuk input Nama
const pertanyaan1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan Nama Anda: ', (nama) => {
            resolve(nama);
        });
    });
};

// Pertanyaan untuk input Email
const pertanyaan2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan Email Anda: ', (email) => {
            resolve(email);
        });
    });
};

// Fungsi utama menggunakan async/await
const main = async () => {
    const nama = await pertanyaan1();
    const email = await pertanyaan2();

    const contact = { nama, email };
    const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contact.json', JSON.stringify(contacts, null, 2));

    console.log('Terima kasih sudah memasukkan data.');
    rl.close();
};

// Menjalankan fungsi utama
main();
