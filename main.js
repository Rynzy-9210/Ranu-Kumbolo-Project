// JavaScript untuk tabs paket wisata
        function openTab(tabId) {
            // Sembunyikan semua konten tab
            var tabs = document.getElementsByClassName('package-content');
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
            }
            
            // Nonaktifkan semua tombol tab
            var tabButtons = document.getElementsByClassName('tab-btn');
            for (var i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove('active');
            }
            
            // Tampilkan tab yang dipilih dan aktifkan tombolnya
            document.getElementById(tabId).classList.add('active');
            event.currentTarget.classList.add('active');
        }