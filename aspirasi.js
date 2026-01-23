        const scriptURL = 'https://script.google.com/macros/s/AKfycbynznKv9bQqOgapGA6vwd0Iveb_iOpERgcCO3CYlFZ8r9JjsBzZ6hlHAqVUN9Bhv0DiXg/exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById("msg");

        form.addEventListener('submit', e => {
            e.preventDefault();
            // Ubah teks tombol saat proses
            const btn = document.querySelector('.btn-submit');
            btn.innerHTML = "Mengirim...";
            
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Terima kasih! Aspirasi Anda telah terkirim.";
                    btn.innerHTML = "Kirim"; // Kembalikan teks tombol
                    form.reset(); // Kosongkan form
                    
                    // Hilangkan pesan setelah 5 detik
                    setTimeout(function(){
                        msg.innerHTML = "";
                    }, 5000);
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    btn.innerHTML = "Kirim";
                    msg.style.color = "red";
                    msg.innerHTML = "Gagal mengirim. Coba lagi.";
                });
        });

        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-links");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));