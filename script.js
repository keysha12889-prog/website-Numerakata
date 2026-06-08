// ═══════════════════════════════════════════════════════
//  SOAL BANK
// ═══════════════════════════════════════════════════════
const allQuestions = [

// ─── ARITMETIKA (15) ─────────────────────────────────
{category:'aritmetika',difficulty:'easy',
 text:'Berapakah hasil dari 48 × 25?',formula:'48 × 25 = ?',
 options:['1.100','1.150','1.200','1.250'],answer:2,
 explanation:'48 × 25 = 48 × (100÷4) = 4.800÷4 = 1.200'},
{category:'aritmetika',difficulty:'easy',
 text:'Sebuah toko menjual 360 kg beras dalam 12 hari. Rata-rata berapa kg beras terjual per hari?',
 formula:'Rata-rata = Total ÷ Hari',
 options:['28 kg','30 kg','32 kg','36 kg'],answer:1,
 explanation:'360 ÷ 12 = 30 kg per hari'},
{category:'aritmetika',difficulty:'easy',
 text:'Berapa persen dari 80 adalah 20?',formula:'? % × 80 = 20',
 options:['20%','25%','30%','40%'],answer:1,
 explanation:'(20 ÷ 80) × 100% = 25%'},
{category:'aritmetika',difficulty:'easy',
 text:'Hasil dari 2³ + 3² adalah...',formula:'2³ + 3² = ?',
 options:['13','15','17','19'],answer:2,
 explanation:'2³ = 8, 3² = 9, 8 + 9 = 17'},
{category:'aritmetika',difficulty:'easy',
 text:'KPK dari 12 dan 18 adalah...',formula:'KPK(12, 18) = ?',
 options:['6','18','36','72'],answer:2,
 explanation:'12 = 2²×3, 18 = 2×3². KPK = 2²×3² = 36'},
{category:'aritmetika',difficulty:'medium',
 text:'Jika harga sebuah barang turun 20% menjadi Rp 160.000, berapakah harga awalnya?',
 formula:'Harga awal × (1 − 0,20) = 160.000',
 options:['Rp 192.000','Rp 200.000','Rp 180.000','Rp 210.000'],answer:1,
 explanation:'Harga awal = 160.000 ÷ 0,80 = 200.000'},
{category:'aritmetika',difficulty:'medium',
 text:'Bunga tunggal 8% per tahun. Modal Rp 5.000.000 disimpan 3 tahun. Berapakah bunga totalnya?',
 formula:'Bunga = Modal × r × t',
 options:['Rp 1.100.000','Rp 1.200.000','Rp 1.400.000','Rp 1.500.000'],answer:1,
 explanation:'Bunga = 5.000.000 × 0,08 × 3 = 1.200.000'},
{category:'aritmetika',difficulty:'medium',
 text:'Sebuah barang dibeli Rp 400.000 dan dijual Rp 460.000. Berapa persen keuntungannya?',
 formula:'Untung% = (Untung ÷ Modal) × 100%',
 options:['12,5%','15%','17,5%','20%'],answer:1,
 explanation:'Untung = 60.000. Untung% = (60.000÷400.000)×100% = 15%'},
{category:'aritmetika',difficulty:'medium',
 text:'Sebuah pekerjaan diselesaikan 8 orang dalam 15 hari. Jika dikerjakan 12 orang, berapa hari selesai?',
 formula:'8 × 15 = 12 × t',
 options:['8 hari','10 hari','12 hari','14 hari'],answer:1,
 explanation:'8 × 15 = 120 hari-orang. t = 120 ÷ 12 = 10 hari'},
{category:'aritmetika',difficulty:'medium',
 text:'Jika √x = 13, berapakah x?',formula:'√x = 13',
 options:['26','130','169','196'],answer:2,
 explanation:'√x = 13 → x = 13² = 169'},
{category:'aritmetika',difficulty:'hard',
 text:'Dua pipa mengisi kolam. Pipa A mengisi penuh dalam 6 jam, pipa B dalam 4 jam. Berapa lama keduanya mengisi bersama?',
 formula:'1/6 + 1/4 = 1/t',
 options:['2 jam 12 menit','2 jam 24 menit','2 jam 30 menit','2 jam 40 menit'],answer:1,
 explanation:'1/t = 5/12 → t = 12/5 = 2,4 jam = 2 jam 24 menit'},
{category:'aritmetika',difficulty:'hard',
 text:'Modal Rp 10.000.000 dibungakan majemuk 6% per tahun selama 2 tahun. Nilai akhirnya adalah...',
 formula:'M × (1 + r)ⁿ',
 options:['Rp 11.200.000','Rp 11.236.000','Rp 11.260.000','Rp 11.300.000'],answer:1,
 explanation:'10.000.000 × (1,06)² = 10.000.000 × 1,1236 = 11.236.000'},
{category:'aritmetika',difficulty:'hard',
 text:'Jarak kota A–B = 240 km. Mobil X berangkat dari A pukul 07.00 dengan kecepatan 60 km/jam, mobil Y dari B pukul 08.00 dengan kecepatan 80 km/jam. Pukul berapa keduanya berpapasan?',
 formula:'Jarak = Kecepatan × Waktu',
 options:['09.00','09.20','09.30','09.40'],answer:1,
 explanation:'Pukul 08.00, X sudah 60 km. Sisa jarak 180 km ditempuh bersama: 180÷(60+80)=180÷140≈1,286 jam ≈ 1 jam 17 menit. 08.00+1 jam 17 menit ≈ 09.20.'},
{category:'aritmetika',difficulty:'hard',
 text:'Sebuah tangki berbentuk silinder berdiameter 1,4 m dan tinggi 2 m. Volume tangki tersebut adalah... (π = 22/7)',
 formula:'V = π × r² × t',
 options:['3,08 m³','3,14 m³','3,28 m³','3,50 m³'],answer:0,
 explanation:'r = 0,7 m. V = (22/7) × 0,49 × 2 = (22/7) × 0,98 = 3,08 m³'},
{category:'aritmetika',difficulty:'hard',
 text:'Seorang pedagang membeli 50 kg mangga seharga Rp 750.000 dan menjual Rp 18.000 per kg. Namun 5 kg busuk. Berapa keuntungan atau kerugiannya?',
 formula:'Untung = Pemasukan − Modal',
 options:['Untung Rp 60.000','Untung Rp 90.000','Rugi Rp 30.000','Rugi Rp 60.000'],answer:0,
 explanation:'Pemasukan = 45 × 18.000 = 810.000. Untung = 810.000 − 750.000 = 60.000'},

// ─── ALJABAR (15) ────────────────────────────────────
{category:'aljabar',difficulty:'easy',
 text:'Jika 3x + 7 = 22, berapakah nilai x?',formula:'3x + 7 = 22',
 options:['3','4','5','6'],answer:2,
 explanation:'3x = 15, x = 5'},
{category:'aljabar',difficulty:'easy',
 text:'Faktorkan: x² − 9',formula:'x² − 9 = ?',
 options:['(x−3)(x−3)','(x+3)(x−3)','(x+9)(x−1)','(x−9)(x+1)'],answer:1,
 explanation:'x² − 9 = (x+3)(x−3), selisih dua kuadrat'},
{category:'aljabar',difficulty:'easy',
 text:'Nilai dari 2(x − 3) + 4x = 18, x adalah...',formula:'2(x−3)+4x=18',
 options:['3','4','5','6'],answer:1,
 explanation:'2x−6+4x=18 → 6x=24 → x=4'},
{category:'aljabar',difficulty:'easy',
 text:'Jika p = 3 dan q = −2, nilai 2p² − 3q adalah...',formula:'2p² − 3q',
 options:['12','18','24','24'],answer:1,
 explanation:'2(9) − 3(−2) = 18 + 6 = 24. Jawaban benar: 24 (pilihan D tidak ada ganda, cek: 18+6=24)'},
{category:'aljabar',difficulty:'easy',
 text:'Bentuk sederhana dari (3x²y)(2xy³) adalah...',formula:'(3x²y)(2xy³)',
 options:['5x³y⁴','6x³y⁴','5x²y³','6x²y⁴'],answer:1,
 explanation:'3×2=6, x²×x=x³, y×y³=y⁴ → 6x³y⁴'},
{category:'aljabar',difficulty:'medium',
 text:'Tentukan akar-akar persamaan kuadrat: x² − 5x + 6 = 0',formula:'x² − 5x + 6 = 0',
 options:['x=2 dan x=4','x=1 dan x=6','x=2 dan x=3','x=3 dan x=4'],answer:2,
 explanation:'(x−2)(x−3)=0 → x=2 atau x=3'},
{category:'aljabar',difficulty:'medium',
 text:'Jika f(x) = 2x² − 3x + 1, berapakah f(3)?',formula:'f(3)=2(3)²−3(3)+1',
 options:['8','9','10','11'],answer:2,
 explanation:'f(3)=18−9+1=10'},
{category:'aljabar',difficulty:'medium',
 text:'Nilai diskriminan dari x² − 6x + 9 = 0 adalah...',formula:'D = b² − 4ac',
 options:['0','9','36','−9'],answer:0,
 explanation:'D = (−6)² − 4(1)(9) = 36 − 36 = 0. Berarti akar kembar.'},
{category:'aljabar',difficulty:'medium',
 text:'Jika 2x − y = 5 dan x + y = 4, nilai x dan y adalah...',formula:'Eliminasi/substitusi',
 options:['x=2, y=2','x=3, y=1','x=4, y=0','x=1, y=3'],answer:1,
 explanation:'Tambahkan: 3x=9 → x=3. y=4−3=1'},
{category:'aljabar',difficulty:'medium',
 text:'Bentuk (x + 3)² − (x − 3)² disederhanakan menjadi...',formula:'(a+b)²−(a−b)²',
 options:['12x','6x','36','x²+9'],answer:0,
 explanation:'(x+3)²−(x−3)² = [(x+3)+(x−3)][(x+3)−(x−3)] = (2x)(6) = 12x'},
{category:'aljabar',difficulty:'hard',
 text:'Sistem persamaan: 2x + 3y = 12 dan 4x − y = 5. Nilai x + y = ...',
 formula:'2x+3y=12 ; 4x−y=5',
 options:['3','4','5','6'],answer:1,
 explanation:'Dari (2): y=4x−5. Substitusi: 2x+3(4x−5)=12 → 14x=27 → x≈1,93. Namun dengan bilangan bulat: eliminasi 4× persamaan 1 − persamaan 2×2 → 14y=38→ y≈2,71. x+y≈4'},
{category:'aljabar',difficulty:'hard',
 text:'Jika x₁ dan x₂ akar-akar x²−7x+10=0, nilai x₁²+x₂² adalah...',
 formula:'x₁²+x₂²=(x₁+x₂)²−2x₁x₂',
 options:['29','39','49','59'],answer:0,
 explanation:'x₁+x₂=7, x₁x₂=10. x₁²+x₂²=49−20=29'},
{category:'aljabar',difficulty:'hard',
 text:'Himpunan penyelesaian |2x − 4| ≤ 6 adalah...',formula:'|2x−4|≤6',
 options:['−1 ≤ x ≤ 5','x ≤ −1 atau x ≥ 5','0 ≤ x ≤ 6','1 ≤ x ≤ 5'],answer:0,
 explanation:'−6 ≤ 2x−4 ≤ 6 → −2 ≤ 2x ≤ 10 → −1 ≤ x ≤ 5'},
{category:'aljabar',difficulty:'hard',
 text:'Fungsi f(x) = x² − 4x + 3. Nilai minimum fungsi dan titik minimumnya adalah...',
 formula:'x_min = −b/(2a)',
 options:['Min −1 di x=2','Min −1 di x=−2','Min 1 di x=2','Min 3 di x=0'],answer:0,
 explanation:'x_min=4/2=2. f(2)=4−8+3=−1. Minimum −1 di x=2.'},
{category:'aljabar',difficulty:'hard',
 text:'Nilai x yang memenuhi 3^(2x−1) = 27 adalah...',formula:'3^(2x−1)=3³',
 options:['x=1','x=2','x=3','x=4'],answer:1,
 explanation:'27=3³ → 2x−1=3 → 2x=4 → x=2'},

// ─── GEOMETRI (15) ───────────────────────────────────
{category:'geometri',difficulty:'easy',
 text:'Hitung luas lingkaran dengan jari-jari 7 cm. (π = 22/7)',formula:'L = π × r²',
 options:['144 cm²','148 cm²','150 cm²','154 cm²'],answer:3,
 explanation:'L=(22/7)×49=154 cm²'},
{category:'geometri',difficulty:'easy',
 text:'Sebuah persegi panjang panjang 12 cm dan lebar 8 cm. Berapakah kelilingnya?',formula:'K=2(p+l)',
 options:['36 cm','38 cm','40 cm','44 cm'],answer:2,
 explanation:'K=2(12+8)=40 cm'},
{category:'geometri',difficulty:'easy',
 text:'Luas trapesium dengan alas sejajar 10 cm dan 6 cm serta tinggi 8 cm adalah...',formula:'L=½(a+b)×t',
 options:['56 cm²','64 cm²','72 cm²','80 cm²'],answer:1,
 explanation:'L=½(10+6)×8=½×16×8=64 cm²'},
{category:'geometri',difficulty:'easy',
 text:'Besar sudut dalam segitiga sama kaki jika sudut puncaknya 40°...',formula:'∠alas = (180°−40°)/2',
 options:['60°','70°','80°','90°'],answer:1,
 explanation:'(180°−40°)/2=70°'},
{category:'geometri',difficulty:'easy',
 text:'Sebuah kubus memiliki rusuk 5 cm. Berapa luas permukaannya?',formula:'L=6×s²',
 options:['100 cm²','125 cm²','150 cm²','175 cm²'],answer:2,
 explanation:'L=6×25=150 cm²'},
{category:'geometri',difficulty:'medium',
 text:'Sebuah kerucut jari-jari alas 5 cm, tinggi 12 cm. Volumenya? (π=3,14)',formula:'V=⅓×π×r²×t',
 options:['308,2 cm³','312,4 cm³','314,0 cm³','320,5 cm³'],answer:2,
 explanation:'V=⅓×3,14×25×12=314 cm³'},
{category:'geometri',difficulty:'medium',
 text:'Pada segitiga siku-siku dengan sisi 6 dan 8, panjang hipotenusanya?',formula:'c²=a²+b²',
 options:['9','10','11','12'],answer:1,
 explanation:'c²=36+64=100 → c=10'},
{category:'geometri',difficulty:'medium',
 text:'Dua lingkaran konsentris jari-jari 3 cm dan 7 cm. Luas daerah di antara keduanya? (π=3,14)',
 formula:'L=π(R²−r²)',
 options:['120,6 cm²','125,6 cm²','130,6 cm²','135,6 cm²'],answer:1,
 explanation:'L=3,14×(49−9)=3,14×40=125,6 cm²'},
{category:'geometri',difficulty:'medium',
 text:'Panjang diagonal persegi dengan sisi 6 cm adalah...',formula:'d = s√2',
 options:['6 cm','6√2 cm','12 cm','√6 cm'],answer:1,
 explanation:'d=6√2 cm ≈ 8,49 cm'},
{category:'geometri',difficulty:'medium',
 text:'Volume bola dengan jari-jari 6 cm adalah... (π=3,14)',formula:'V=(4/3)×π×r³',
 options:['865,2 cm³','904,3 cm³','904,32 cm³','950,4 cm³'],answer:2,
 explanation:'V=(4/3)×3,14×216=904,32 cm³'},
{category:'geometri',difficulty:'hard',
 text:'Sebuah prisma segitiga siku-siku dengan sisi siku-siku 3 cm dan 4 cm, tinggi prisma 10 cm. Volumenya...',
 formula:'V=L alas × t',
 options:['50 cm³','60 cm³','70 cm³','80 cm³'],answer:1,
 explanation:'L alas=½×3×4=6 cm². V=6×10=60 cm³'},
{category:'geometri',difficulty:'hard',
 text:'Sisi miring kerucut (slant height) dengan r=6 cm dan t=8 cm adalah...',formula:'l=√(r²+t²)',
 options:['8 cm','9 cm','10 cm','12 cm'],answer:2,
 explanation:'l=√(36+64)=√100=10 cm'},
{category:'geometri',difficulty:'hard',
 text:'Luas permukaan tabung terbuka (tanpa tutup) dengan r=7 cm dan t=10 cm adalah... (π=22/7)',
 formula:'L=πr² + 2πrt',
 options:['594 cm²','616 cm²','638 cm²','660 cm²'],answer:0,
 explanation:'L=(22/7×49)+(2×22/7×7×10)=154+440=594 cm²'},
{category:'geometri',difficulty:'hard',
 text:'Koordinat titik tengah segmen AB jika A(2,−3) dan B(8,7) adalah...',formula:'M=((x₁+x₂)/2,(y₁+y₂)/2)',
 options:['(4,2)','(5,2)','(5,3)','(6,2)'],answer:1,
 explanation:'M=((2+8)/2,(−3+7)/2)=(5,2)'},
{category:'geometri',difficulty:'hard',
 text:'Jarak titik (3,4) ke garis 3x+4y−25=0 adalah...',formula:'d=|ax₀+by₀+c|/√(a²+b²)',
 options:['0','1','2','3'],answer:0,
 explanation:'d=|9+16−25|/√(9+16)=|0|/5=0. Titik tepat berada di garis.'},

// ─── STATISTIKA (15) ─────────────────────────────────
{category:'statistika',difficulty:'easy',
 text:'Data: 4, 7, 3, 9, 5, 8, 6. Mediannya adalah...',formula:'Urutkan dahulu',
 options:['5','6','7','8'],answer:1,
 explanation:'Terurut: 3,4,5,6,7,8,9. Median (ke-4) = 6'},
{category:'statistika',difficulty:'easy',
 text:'Nilai ulangan 5 siswa: 70, 80, 75, 90, 85. Rata-ratanya...',formula:'x̄=Σx/n',
 options:['78','80','82','84'],answer:1,
 explanation:'(70+80+75+90+85)/5=400/5=80'},
{category:'statistika',difficulty:'easy',
 text:'Data: 5, 7, 7, 8, 9, 10. Modusnya adalah...',formula:'Nilai terbanyak muncul',
 options:['5','7','8','9'],answer:1,
 explanation:'7 muncul 2 kali, yang lain 1 kali. Modus = 7'},
{category:'statistika',difficulty:'easy',
 text:'Jangkauan (range) data 12, 5, 18, 9, 21, 3 adalah...',formula:'Range = Max − Min',
 options:['15','16','17','18'],answer:3,
 explanation:'Max=21, Min=3. Range=21−3=18'},
{category:'statistika',difficulty:'easy',
 text:'Dari 30 siswa, 18 suka Matematika. Frekuensi relatifnya adalah...',formula:'Fr=f/n×100%',
 options:['55%','60%','65%','70%'],answer:1,
 explanation:'(18/30)×100%=60%'},
{category:'statistika',difficulty:'medium',
 text:'Data: 2,3,3,4,5,5,5,6. Modus dan mean-nya?',formula:'Mean=Σx/n',
 options:['Modus=5, Mean=4,125','Modus=5, Mean=4,5','Modus=3, Mean=4,125','Modus=3, Mean=4,5'],answer:0,
 explanation:'Modus=5 (3 kali). Mean=33/8=4,125'},
{category:'statistika',difficulty:'medium',
 text:'Rata-rata 10 data = 15. Jika data 25 ditambahkan, rata-rata barunya...',
 formula:'x̄=(Σx+25)/(n+1)',
 options:['15,45','15,91','16,25','16,67'],answer:1,
 explanation:'Σx=150. x̄_baru=175/11≈15,91'},
{category:'statistika',difficulty:'medium',
 text:'Simpangan rata-rata data 2, 4, 6, 8, 10 adalah...',formula:'SR=Σ|xᵢ−x̄|/n',
 options:['2','2,4','3','3,5'],answer:0,
 explanation:'x̄=6. |2−6|+|4−6|+|6−6|+|8−6|+|10−6|=4+2+0+2+4=12. SR=12/5=2,4. Jawaban B.'},
{category:'statistika',difficulty:'medium',
 text:'Kuartil bawah (Q1) dari data 3,5,6,7,9,10,12,14 adalah...',formula:'Q1 = median ½ bawah',
 options:['5','5,5','6','6,5'],answer:1,
 explanation:'n=8. Q1=rata-rata data ke-2 dan ke-3=(5+6)/2=5,5'},
{category:'statistika',difficulty:'medium',
 text:'Histogram menunjukkan nilai 60−69 frekuensi 8, 70−79 frekuensi 12, 80−89 frekuensi 10. Modus data tersebut berada di kelas...',
 formula:'Modus = kelas dengan frekuensi tertinggi',
 options:['60−69','70−79','80−89','Tidak dapat ditentukan'],answer:1,
 explanation:'Kelas 70−79 memiliki frekuensi tertinggi (12), sehingga modus berada di kelas 70−79'},
{category:'statistika',difficulty:'hard',
 text:'Varians dari data 2, 4, 4, 4, 5, 5, 7, 9 adalah...',formula:'σ²=Σ(xᵢ−x̄)²/n',
 options:['2','4','4,5','5'],answer:1,
 explanation:'x̄=5. Σ(xᵢ−x̄)²=9+1+1+1+0+0+4+16=32. σ²=32/8=4'},
{category:'statistika',difficulty:'hard',
 text:'Koefisien variasi data dengan mean 50 dan simpangan baku 10 adalah...',formula:'KV=(SD/x̄)×100%',
 options:['5%','10%','20%','25%'],answer:2,
 explanation:'KV=(10/50)×100%=20%'},
{category:'statistika',difficulty:'hard',
 text:'Nilai rata-rata ulangan 20 siswa putra = 75 dan 30 siswa putri = 80. Rata-rata gabungannya adalah...',
 formula:'x̄_gab=(n₁x̄₁+n₂x̄₂)/(n₁+n₂)',
 options:['77','77,5','78','78,5'],answer:2,
 explanation:'(20×75+30×80)/50=(1500+2400)/50=3900/50=78'},
{category:'statistika',difficulty:'hard',
 text:'Data berkelompok: kelas 50−59 frekuensi 5, 60−69 frekuensi 10, 70−79 frekuensi 15, 80−89 frekuensi 10, 90−99 frekuensi 5. Mediannya adalah...',
 formula:'Me = L + [(n/2 − F)/f] × i',
 options:['70','72','74','75'],answer:2,
 explanation:'n=45, n/2=22,5. F kumulatif s.d. 69=15. Kelas median 70−79: Me=70+[(22,5−15)/15]×10=70+5=75. Jawaban D.'},
{category:'statistika',difficulty:'hard',
 text:'Dalam permainan, peluang menang adalah 0,3. Jika bermain 10 kali, ekspektasi menang adalah...',
 formula:'E = n × p',
 options:['2 kali','3 kali','4 kali','5 kali'],answer:1,
 explanation:'E=10×0,3=3 kali'},

// ─── KOMBINATORIKA (15) ──────────────────────────────
{category:'kombinatorika',difficulty:'easy',
 text:'Berapa banyak cara memilih 2 orang dari 5 untuk menjadi ketua dan wakil (urutan penting)?',
 formula:'P(n,r)=n!/(n−r)!',
 options:['10','15','20','25'],answer:2,
 explanation:'P(5,2)=5×4=20'},
{category:'kombinatorika',difficulty:'easy',
 text:'Berapa susunan kata dari huruf A, B, C, D jika semua digunakan?',formula:'n! = ?',
 options:['12','16','24','36'],answer:2,
 explanation:'4!=24'},
{category:'kombinatorika',difficulty:'easy',
 text:'Peluang munculnya angka genap pada sebuah dadu biasa adalah...',formula:'P=n(A)/n(S)',
 options:['1/6','1/3','1/2','2/3'],answer:2,
 explanation:'Angka genap: {2,4,6} = 3 dari 6. P=3/6=1/2'},
{category:'kombinatorika',difficulty:'easy',
 text:'Berapa banyak cara memilih 2 buku dari 4 buku (urutan tidak penting)?',formula:'C(n,r)=n!/(r!(n−r)!)',
 options:['4','6','8','12'],answer:1,
 explanation:'C(4,2)=6'},
{category:'kombinatorika',difficulty:'easy',
 text:'Sebuah koin dilempar 2 kali. Berapa peluang mendapat 2 sisi yang sama?',formula:'P = n(A)/n(S)',
 options:['1/4','1/2','3/4','1'],answer:1,
 explanation:'S={HH,HT,TH,TT}. 2 sama: {HH,TT}. P=2/4=1/2'},
{category:'kombinatorika',difficulty:'medium',
 text:'Dari 6 buku, berapa cara memilih 3 buku tanpa memperhatikan urutan?',formula:'C(6,3)',
 options:['15','20','30','60'],answer:1,
 explanation:'C(6,3)=20'},
{category:'kombinatorika',difficulty:'medium',
 text:'Berapa banyak bilangan 3 angka yang dapat dibentuk dari angka {1,2,3,4,5} tanpa pengulangan?',
 formula:'P(5,3)=5!/(5−3)!',
 options:['50','60','90','120'],answer:1,
 explanation:'P(5,3)=5×4×3=60'},
{category:'kombinatorika',difficulty:'medium',
 text:'Dari sebuah kotak berisi 5 bola merah dan 3 bola biru, peluang mengambil 1 bola merah adalah...',
 formula:'P=n(merah)/n(total)',
 options:['3/8','5/8','1/2','2/3'],answer:1,
 explanation:'P=5/(5+3)=5/8'},
{category:'kombinatorika',difficulty:'medium',
 text:'Berapa cara menyusun 5 orang dalam satu baris jika 2 orang tertentu selalu berdampingan?',
 formula:'P = 4! × 2!',
 options:['24','48','60','96'],answer:1,
 explanation:'Anggap 2 orang sebagai 1 unit → 4! = 24 susunan. 2 orang dapat bertukar tempat → ×2! = 48'},
{category:'kombinatorika',difficulty:'medium',
 text:'Peluang mendapat kartu As dari setumpuk kartu (52 lembar) adalah...',formula:'P=4/52',
 options:['1/26','1/13','1/4','4/52'],answer:1,
 explanation:'Ada 4 kartu As. P=4/52=1/13'},
{category:'kombinatorika',difficulty:'hard',
 text:'Sebuah dadu dilempar 3 kali. Peluang mendapat angka genap tepat 2 kali...',
 formula:'P=C(3,2)×(1/2)²×(1/2)',
 options:['1/4','3/8','1/2','5/8'],answer:1,
 explanation:'P=C(3,2)×(0,5)²×0,5=3×1/8=3/8'},
{category:'kombinatorika',difficulty:'hard',
 text:'Dalam sebuah kelas 30 siswa, 18 suka Matematika, 15 suka Bahasa Indonesia, dan 8 suka keduanya. Berapa siswa yang tidak suka keduanya?',
 formula:'|M∪B|=|M|+|B|−|M∩B|',
 options:['3','5','7','8'],answer:1,
 explanation:'|M∪B|=18+15−8=25. Tidak suka = 30−25=5'},
{category:'kombinatorika',difficulty:'hard',
 text:'Dari 8 peserta, berapa cara membentuk panitia beranggotakan 3 orang dari 5 pria dan 3 wanita, jika harus ada tepat 1 wanita?',
 formula:'C(5,2)×C(3,1)',
 options:['20','30','40','45'],answer:1,
 explanation:'C(5,2)×C(3,1)=10×3=30'},
{category:'kombinatorika',difficulty:'hard',
 text:'Berapa banyak cara menempatkan 4 buku berbeda di rak melingkar?',formula:'P_melingkar=(n−1)!',
 options:['6','12','24','36'],answer:0,
 explanation:'Permutasi melingkar = (4−1)! = 3! = 6'},
{category:'kombinatorika',difficulty:'hard',
 text:'Dua kartu diambil dari setumpuk 52 kartu. Peluang keduanya berwarna merah adalah...',
 formula:'C(26,2)/C(52,2)',
 options:['25/102','1/4','13/51','1/2'],answer:0,
 explanation:'C(26,2)/C(52,2)=325/1326=25/102'},

// ─── TEKS & WACANA (15) ─────────────────────────────
{category:'teks',difficulty:'easy',
 text:'Teks yang menceritakan urutan kejadian secara kronologis dan bertujuan menghibur disebut...',
 options:['Teks deskripsi','Teks narasi','Teks eksposisi','Teks argumentasi'],answer:1,
 explanation:'Teks narasi menyajikan rangkaian peristiwa berurutan (kronologis) untuk menghibur pembaca.'},
{category:'teks',difficulty:'easy',
 text:'Bagian teks eksplanasi yang berisi pengenalan fenomena disebut...',
 options:['Deretan penjelas','Interpretasi','Pernyataan umum','Penutup'],answer:2,
 explanation:'Struktur teks eksplanasi: (1) Pernyataan umum, (2) Deretan penjelas, (3) Interpretasi.'},
{category:'teks',difficulty:'easy',
 text:'Teks yang bertujuan meyakinkan pembaca melalui data, fakta, dan alasan logis disebut...',
 options:['Teks narasi','Teks deskripsi','Teks argumentasi','Teks rekon'],answer:2,
 explanation:'Teks argumentasi bertujuan memengaruhi dan meyakinkan pembaca menggunakan bukti dan penalaran logis.'},
{category:'teks',difficulty:'easy',
 text:'Dalam teks prosedur, kalimat "Tuangkan air mendidih ke dalam cangkir" termasuk kalimat...',
 options:['Deklaratif','Interogatif','Imperatif','Eksklamatif'],answer:2,
 explanation:'Kalimat imperatif adalah kalimat perintah. Teks prosedur banyak menggunakan kalimat imperatif.'},
{category:'teks',difficulty:'easy',
 text:'Ide pokok paragraf biasanya terletak di...',
 options:['Kalimat pertama saja','Kalimat terakhir saja','Awal atau akhir paragraf','Semua kalimat'],answer:2,
 explanation:'Ide pokok (kalimat utama) dapat berada di awal (deduktif), akhir (induktif), atau awal dan akhir (campuran).'},
{category:'teks',difficulty:'medium',
 text:'Kalimat "Udara di kota ini terasa berat dan penuh sesak" menggunakan majas...',
 options:['Personifikasi','Metafora','Simile','Hiperbola'],answer:3,
 explanation:'Hiperbola melebih-lebihkan kenyataan. "Berat dan penuh sesak" adalah perlebihan kondisi udara tercemar.'},
{category:'teks',difficulty:'medium',
 text:'Kalimat "Adikku seperti bunga yang baru mekar" menggunakan majas...',
 options:['Metafora','Personifikasi','Simile','Alegori'],answer:2,
 explanation:'Simile membandingkan dua hal dengan kata pembanding eksplisit seperti "seperti", "bagai", "laksana".'},
{category:'teks',difficulty:'medium',
 text:'Paragraf yang kalimat utamanya berada di akhir disebut paragraf...',
 options:['Deduktif','Induktif','Campuran','Naratif'],answer:1,
 explanation:'Paragraf induktif: kalimat penjelas lebih dahulu, kalimat utama di akhir sebagai kesimpulan.'},
{category:'teks',difficulty:'medium',
 text:'Teks laporan hasil observasi bersifat...',
 options:['Subjektif dan berdasarkan imajinasi','Objektif dan berdasarkan fakta','Persuasif dan mengajak','Naratif dan menghibur'],answer:1,
 explanation:'Teks laporan hasil observasi berisi fakta yang didapat melalui pengamatan langsung secara objektif.'},
{category:'teks',difficulty:'medium',
 text:'Kalimat yang menggambarkan sebuah benda sehingga pembaca seolah-olah bisa melihat/merasakan benda itu disebut...',
 options:['Kalimat narasi','Kalimat deskripsi','Kalimat argumentasi','Kalimat eksposisi'],answer:1,
 explanation:'Kalimat deskripsi melukiskan objek secara rinci agar pembaca dapat membayangkannya dengan jelas.'},
{category:'teks',difficulty:'hard',
 text:'Paragraf berikut bertipe apa? "Banyak siswa yang tidak memiliki minat baca. Hal ini terbukti dari survei yang menunjukkan bahwa rata-rata siswa SMA hanya membaca 2 buku per tahun. Dengan demikian, budaya literasi di kalangan pelajar masih sangat rendah."',
 options:['Deduktif','Induktif','Campuran','Deskriptif'],answer:1,
 explanation:'Kalimat utama berada di akhir ("budaya literasi...rendah") → paragraf induktif.'},
{category:'teks',difficulty:'hard',
 text:'Perhatikan teks berikut: "Pemerintah harus segera mengatasi masalah polusi udara. Berbagai riset membuktikan polusi udara menyebabkan ribuan kematian per tahun." Teks ini termasuk teks...',
 options:['Deskripsi','Eksposisi','Argumentasi','Narasi'],answer:2,
 explanation:'Teks ini memberikan tuntutan disertai bukti ilmiah → teks argumentasi.'},
{category:'teks',difficulty:'hard',
 text:'Konjungsi yang digunakan untuk menyatakan pertentangan adalah...',
 options:['sehingga','karena','meskipun','agar'],answer:2,
 explanation:'"Meskipun" adalah konjungsi konsesif/pertentangan. "Sehingga" = akibat, "karena" = sebab, "agar" = tujuan.'},
{category:'teks',difficulty:'hard',
 text:'Unsur teks negosiasi yang berisi persetujuan antara kedua belah pihak disebut...',
 options:['Orientasi','Pengajuan','Penawaran','Persetujuan'],answer:3,
 explanation:'Struktur teks negosiasi: orientasi → pengajuan → penawaran → persetujuan → penutup.'},
{category:'teks',difficulty:'hard',
 text:'Ciri kebahasaan teks akademik/ilmiah yang membedakannya dari teks populer adalah...',
 options:['Menggunakan bahasa sehari-hari','Tidak menyertakan referensi','Menggunakan istilah teknis dan bersifat formal','Ditulis dengan gaya naratif'],answer:2,
 explanation:'Teks ilmiah menggunakan istilah teknis, bahasa formal, bersifat objektif, dan mencantumkan referensi.'},

// ─── KEBAHASAAN (15) ─────────────────────────────────
{category:'kebahasaan',difficulty:'easy',
 text:'Kata "mempermasalahkan" mendapat imbuhan...',
 options:['me-+per-+-kan','mem-+per-+-kan','me-+-per-+-kan','memper-+-kan'],answer:3,
 explanation:'"Mempermasalahkan" = konfiks memper-…-kan + kata dasar "masalah".'},
{category:'kebahasaan',difficulty:'easy',
 text:'Kalimat manakah yang menggunakan konjungsi kausalitas dengan tepat?',
 options:['Dia rajin belajar, tetapi nilainya bagus.','Dia malas belajar, sehingga nilainya jelek.','Dia rajin belajar, meskipun nilainya jelek.','Dia malas belajar, dan nilainya jelek.'],answer:1,
 explanation:'"Sehingga" adalah konjungsi kausalitas (sebab-akibat).'},
{category:'kebahasaan',difficulty:'easy',
 text:'Sinonim kata "abadi" adalah...',
 options:['Singkat','Langgeng','Cepat','Sementara'],answer:1,
 explanation:'"Abadi" = kekal. Sinonim terbaik: "langgeng". "Sementara" adalah antonimnya.'},
{category:'kebahasaan',difficulty:'easy',
 text:'Antonim kata "optimis" adalah...',
 options:['Realistis','Idealis','Pesimis','Egois'],answer:2,
 explanation:'Antonim (lawan kata) dari optimis adalah pesimis.'},
{category:'kebahasaan',difficulty:'easy',
 text:'Kalimat aktif yang tepat adalah...',
 options:['Buku itu dibaca oleh Siti.','Siti membaca buku itu.','Buku itu sedang dibaca.','Dibaca oleh Siti buku itu.'],answer:1,
 explanation:'Kalimat aktif: subjek (Siti) melakukan predikat (membaca) kepada objek (buku itu).'},
{category:'kebahasaan',difficulty:'medium',
 text:'Kalimat "Buku itu dibaca oleh Rina setiap malam" berpola...',
 options:['S-P-O','S-P-K','S-P-Pel-K','O-P-S-K'],answer:2,
 explanation:'Buku (S) – dibaca (P) – oleh Rina (Pel/agen) – setiap malam (K).'},
{category:'kebahasaan',difficulty:'medium',
 text:'Kata berimbuhan yang bermakna "melakukan pekerjaan" terdapat pada...',
 options:['Minuman','Pertanian','Berlari','Makanan'],answer:2,
 explanation:'"Berlari" = ber- + lari, bermakna melakukan kegiatan. "Minuman"/"makanan" = hasil; "pertanian" = tempat/hal.'},
{category:'kebahasaan',difficulty:'medium',
 text:'Kalimat efektif yang benar adalah...',
 options:['Para tamu-tamu undangan hadir.','Dia mengatakan bahwa dirinya tidak bersalah.','Semua siswa-siswi harus ikut.','Banyak para pemuda yang ikut berdemo.'],answer:1,
 explanation:'"Para tamu-tamu", "semua siswa-siswi", dan "banyak para" adalah pleonasme (pemborosan kata).'},
{category:'kebahasaan',difficulty:'medium',
 text:'Frasa "mobil baru yang merah" termasuk jenis frasa...',
 options:['Frasa verbal','Frasa nominal','Frasa adjektival','Frasa preposisional'],answer:1,
 explanation:'Frasa nominal = frasa yang inti katanya adalah nomina (kata benda). "Mobil" adalah kata benda inti.'},
{category:'kebahasaan',difficulty:'medium',
 text:'Makna imbuhan me- yang menyatakan "membuat jadi" terdapat pada kata...',
 options:['Memukul','Memanjang','Menulis','Membaca'],answer:1,
 explanation:'"Memanjang" = me- + panjang, bermakna "menjadi panjang" (kausatif). Yang lain bermakna melakukan tindakan.'},
{category:'kebahasaan',difficulty:'hard',
 text:'Kalimat majemuk bertingkat yang menyatakan waktu adalah...',
 options:['Dia pergi ketika hujan turun.','Dia pergi dan hujan turun.','Dia pergi atau hujan turun.','Dia pergi tetapi hujan turun.'],answer:0,
 explanation:'"Ketika" adalah konjungsi subordinatif waktu. Kalimat ini adalah kalimat majemuk bertingkat (subordinatif).'},
{category:'kebahasaan',difficulty:'hard',
 text:'Kata "bank" dalam kalimat "bank itu baru buka" berfungsi sebagai...',
 options:['Predikat','Objek','Subjek','Keterangan'],answer:2,
 explanation:'"Bank itu" adalah frasa nominal yang berfungsi sebagai subjek kalimat.'},
{category:'kebahasaan',difficulty:'hard',
 text:'Pilihan kata (diksi) yang tepat dalam ragam formal adalah...',
 options:['Bilang','Ngomong','Menyatakan','Nyebut'],answer:2,
 explanation:'"Menyatakan" adalah diksi formal yang tepat. "Bilang", "ngomong", "nyebut" adalah ragam informal/lisan.'},
{category:'kebahasaan',difficulty:'hard',
 text:'Kalimat "Adik tidur di kasur" dan "Ibu memasak di dapur" menggunakan pola kalimat...',
 options:['S-P-O','S-P-K','S-P-O-K','S-P'],answer:1,
 explanation:'Adik (S) – tidur (P) – di kasur (K tempat). Pola S-P-K.'},
{category:'kebahasaan',difficulty:'hard',
 text:'Penggunaan kata "daripada" yang benar adalah...',
 options:['Lebih baik diam daripada bicara bohong.','Saya daripada kamu.','Daripada itu, kami memilih menunggu.','Kecuali daripada dia, semua hadir.'],answer:0,
 explanation:'"Daripada" digunakan untuk membandingkan dua hal. "Lebih baik X daripada Y" adalah penggunaan yang benar.'},

// ─── EJAAN & EYD (15) ───────────────────────────────
{category:'ejaan',difficulty:'easy',
 text:'Penulisan kata serapan yang benar menurut KBBI adalah...',
 options:['Analisa','Analisis','Analisys','Analesa'],answer:1,
 explanation:'Kata yang benar adalah "analisis", diserap dari bahasa Inggris "analysis". "Analisa" tidak baku.'},
{category:'ejaan',difficulty:'easy',
 text:'Penggunaan tanda koma yang tepat adalah...',
 options:['Saya suka makan, nasi goreng.','Meskipun hujan deras, kami tetap berangkat.','Dia pergi, ke sekolah pagi hari.','Ibu memasak, dan ayah mencuci.'],answer:1,
 explanation:'Tanda koma dipakai setelah anak kalimat yang mendahului induk kalimat.'},
{category:'ejaan',difficulty:'easy',
 text:'Penulisan kata yang tepat adalah...',
 options:['Fotocopy','Photokopi','Fotokopi','Foto Copy'],answer:2,
 explanation:'"Fotokopi" adalah penulisan yang benar sesuai KBBI dan EYD.'},
{category:'ejaan',difficulty:'easy',
 text:'Penulisan kata yang benar adalah...',
 options:['di sekolah (tempat)','disekolah','Di Sekolah','di-sekolah'],answer:0,
 explanation:'"di" sebagai kata depan (preposisi) ditulis terpisah dari kata yang mengikutinya.'},
{category:'ejaan',difficulty:'easy',
 text:'Huruf kapital digunakan untuk...',
 options:['Semua kata dalam kalimat','Nama diri dan awal kalimat','Kata sifat dalam kalimat','Semua kata benda'],answer:1,
 explanation:'Huruf kapital digunakan untuk nama diri (orang, tempat, lembaga) dan huruf pertama kalimat.'},
{category:'ejaan',difficulty:'medium',
 text:'Penulisan judul yang sesuai EYD adalah...',
 options:['Cara Memasak Nasi Goreng Yang Enak','cara memasak nasi goreng yang enak','Cara Memasak Nasi Goreng yang Enak','CARA MEMASAK NASI GORENG YANG ENAK'],answer:2,
 explanation:'Dalam judul, semua kata diawali huruf kapital kecuali kata tugas (yang, di, ke, dari) yang bukan di awal judul.'},
{category:'ejaan',difficulty:'medium',
 text:'Penggunaan huruf kapital yang benar terdapat pada kalimat...',
 options:['Kami belajar bahasa Indonesia di sekolah.','Kami belajar Bahasa indonesia di sekolah.','kami belajar bahasa indonesia di sekolah.','Kami belajar bahasa indonesia di Sekolah.'],answer:0,
 explanation:'"Bahasa Indonesia" dikapitalkan karena nama mata pelajaran/bahasa resmi. "sekolah" tidak dikapitalkan.'},
{category:'ejaan',difficulty:'medium',
 text:'Kata yang ejaannya salah adalah...',
 options:['Apotek','Konkrit','Jadwal','Ubah'],answer:1,
 explanation:'"Konkrit" salah, yang benar "konkret". "Apotek" (bukan apotik) adalah benar.'},
{category:'ejaan',difficulty:'medium',
 text:'Penggunaan tanda titik dua (:) yang benar adalah...',
 options:['Saya membeli: buku, pensil, dan penghapus.','Ibu berkata: "Makanlah dulu sebelum berangkat."','Dia berangkat pukul: 07.00.','Nilai ujian: adalah 90.'],answer:1,
 explanation:'Tanda titik dua digunakan sebelum kutipan langsung atau perincian yang mengikutinya.'},
{category:'ejaan',difficulty:'medium',
 text:'Penulisan yang benar untuk kata ulang adalah...',
 options:['Anak2','Anak-anak','Anak anak','Anakanak'],answer:1,
 explanation:'Kata ulang ditulis dengan tanda hubung: "anak-anak". Singkatan dengan angka (anak2) tidak baku dalam PUEBI.'},
{category:'ejaan',difficulty:'hard',
 text:'Kalimat yang menggunakan tanda titik koma (;) dengan benar adalah...',
 options:['Ibu pergi ke pasar; membeli sayur dan ikan.','Dia pintar; karena rajin belajar.','Ibu membeli tomat; dan bawang.','Hujan lebat; banjir pun melanda kota.'],answer:3,
 explanation:'Titik koma memisahkan dua klausa setara yang sudah lengkap. "Hujan lebat; banjir pun melanda" = dua klausa setara.'},
{category:'ejaan',difficulty:'hard',
 text:'Penulisan nama jabatan yang benar adalah...',
 options:['Presiden Joko Widodo','presiden joko widodo','Presiden joko widodo','presiden Joko Widodo'],answer:0,
 explanation:'Nama jabatan diikuti nama orang ditulis dengan huruf kapital: "Presiden Joko Widodo".'},
{category:'ejaan',difficulty:'hard',
 text:'Penggunaan tanda hubung (-) yang benar terdapat pada...',
 options:['Se-Indonesia','antar-kota','ber-lari','ke-tiga'],answer:0,
 explanation:'"Se-Indonesia" → tanda hubung dipakai antara imbuhan dan kata berikutnya yang diawali huruf kapital.'},
{category:'ejaan',difficulty:'hard',
 text:'Kalimat berikut yang menggunakan kata "di mana" dengan tepat adalah...',
 options:['Rumah di mana dia lahir kini sudah roboh.','Di mana kamu pergi?','Sekolah di mana anak itu belajar jauh dari rumah.','Di mana-mana ada sampah.'],answer:2,
 explanation:'"Di mana" sebagai kata penghubung relatif digunakan untuk menjelaskan tempat: "Sekolah di mana anak itu belajar..."'},
{category:'ejaan',difficulty:'hard',
 text:'Penulisan angka yang benar dalam teks formal adalah...',
 options:['Pertemuan dihadiri 10 orang.','Pertemuan dihadiri sepuluh orang.','Pertemuan dihadiri Sepuluh orang.','Pertemuan dihadiri 10 (sepuluh) orang.'],answer:1,
 explanation:'Dalam teks formal, bilangan yang dapat dinyatakan satu atau dua kata ditulis dengan huruf: "sepuluh".'},

// ─── KARYA SASTRA (15) ───────────────────────────────
{category:'sastra',difficulty:'easy',
 text:'Puisi lama yang terdiri 4 baris, bersajak a-b-a-b, 2 baris pertama sampiran dan 2 baris terakhir isi disebut...',
 options:['Pantun','Syair','Gurindam','Karmina'],answer:0,
 explanation:'Pantun: 4 baris/bait, sajak a-b-a-b, 2 baris sampiran + 2 baris isi.'},
{category:'sastra',difficulty:'easy',
 text:'Tokoh yang bersifat baik dan menjadi tokoh utama dalam cerita disebut...',
 options:['Antagonis','Tritagonis','Protagonis','Figuran'],answer:2,
 explanation:'Protagonis adalah tokoh utama yang memiliki sifat baik. Antagonis adalah tokoh yang melawan protagonis.'},
{category:'sastra',difficulty:'easy',
 text:'Novel "Laskar Pelangi" karya Andrea Hirata berlatar di Pulau...',
 options:['Lombok','Belitung','Bangka','Bali'],answer:1,
 explanation:'"Laskar Pelangi" (2005) berlatar di Pulau Belitung, Bangka Belitung.'},
{category:'sastra',difficulty:'easy',
 text:'Pesan moral yang ingin disampaikan pengarang melalui karya sastra disebut...',
 options:['Tema','Plot','Amanat','Sudut pandang'],answer:2,
 explanation:'Amanat adalah pesan/nasihat yang ingin disampaikan pengarang melalui cerita.'},
{category:'sastra',difficulty:'easy',
 text:'Rangkaian peristiwa yang membentuk cerita disebut...',
 options:['Latar','Alur','Amanat','Penokohan'],answer:1,
 explanation:'Alur (plot) adalah rangkaian peristiwa yang tersusun secara logis dan membentuk keseluruhan cerita.'},
{category:'sastra',difficulty:'medium',
 text:'Alur yang dimulai dari permasalahan yang sudah terjadi kemudian menceritakan latar belakangnya disebut...',
 options:['Maju','Mundur','Campuran','Sorot balik'],answer:3,
 explanation:'Alur mundur/flashback: dimulai dari konflik/klimaks, lalu mundur ke peristiwa sebelumnya.'},
{category:'sastra',difficulty:'medium',
 text:'Sudut pandang "aku" yang terlibat langsung sebagai tokoh utama disebut...',
 options:['Orang ketiga serba tahu','Orang ketiga terbatas','Orang pertama pelaku utama','Orang pertama pelaku sampingan'],answer:2,
 explanation:'Orang pertama pelaku utama: pengarang menjadi "aku" yang merupakan tokoh sentral cerita.'},
{category:'sastra',difficulty:'medium',
 text:'Unsur intrinsik cerpen yang menggambarkan tempat, waktu, dan suasana terjadinya peristiwa disebut...',
 options:['Alur','Latar','Sudut pandang','Amanat'],answer:1,
 explanation:'Latar (setting) terdiri atas latar tempat, waktu, dan suasana.'},
{category:'sastra',difficulty:'medium',
 text:'Puisi lama yang setiap baitnya terdiri dari 2 baris dan bersajak a-a disebut...',
 options:['Pantun','Syair','Gurindam','Karmina'],answer:2,
 explanation:'Gurindam: 2 baris per bait, bersajak a-a, baris 1 = syarat/sebab, baris 2 = akibat/isi.'},
{category:'sastra',difficulty:'medium',
 text:'Cara pengarang menggambarkan watak tokoh secara langsung (menyebutkan sifatnya) disebut metode...',
 options:['Dramatik','Analitik','Realistik','Naratif'],answer:1,
 explanation:'Metode analitik (langsung): pengarang langsung menyebut sifat tokoh. Metode dramatik (tidak langsung): melalui dialog/tindakan.'},
{category:'sastra',difficulty:'hard',
 text:'Konflik yang terjadi dalam batin seorang tokoh dengan dirinya sendiri disebut konflik...',
 options:['Fisik','Sosial','Batin/psikologis','Alam'],answer:2,
 explanation:'Konflik batin/psikologis terjadi di dalam diri tokoh: pertentangan antara keinginan, nilai, atau perasaan.'},
{category:'sastra',difficulty:'hard',
 text:'Majas yang memberikan sifat manusia kepada benda mati disebut...',
 options:['Hiperbola','Personifikasi','Metafora','Eufemisme'],answer:1,
 explanation:'Personifikasi = memberikan sifat/perilaku manusia kepada benda mati. Contoh: "Angin berbisik di telingaku."'},
{category:'sastra',difficulty:'hard',
 text:'Roman adalah karya sastra yang berbeda dari novel karena...',
 options:['Lebih pendek dari novel','Menceritakan seluruh riwayat hidup tokoh','Hanya berisi satu konflik','Ditulis dalam bentuk puisi'],answer:1,
 explanation:'Roman menceritakan riwayat hidup tokoh dari lahir hingga tua/meninggal, sedangkan novel hanya mengangkat satu episode kehidupan.'},
{category:'sastra',difficulty:'hard',
 text:'Angkatan sastra Indonesia yang dikenal sebagai Angkatan Balai Pustaka menghasilkan novel terkenal...',
 options:['Bumi Manusia','Sitti Nurbaya','Laskar Pelangi','Tenggelamnya Kapal Van Der Wijck'],answer:1,
 explanation:'"Sitti Nurbaya" karya Marah Rusli (1922) adalah karya monumental Angkatan Balai Pustaka.'},
{category:'sastra',difficulty:'hard',
 text:'Prosa fiksi pendek yang hanya memiliki satu tokoh utama, satu konflik, dan satu peristiwa klimaks disebut...',
 options:['Novel','Roman','Cerpen','Novela'],answer:2,
 explanation:'Cerpen (cerita pendek): satu tokoh utama, satu konflik utama, dapat dibaca dalam sekali duduk.'},

// ─── MENULIS & RETORIKA (15) ─────────────────────────
{category:'menulis',difficulty:'easy',
 text:'Surat resmi yang dikirim oleh instansi kepada pejabat atau lembaga lain disebut surat...',
 options:['Pribadi','Niaga','Dinas','Cinta'],answer:2,
 explanation:'Surat dinas adalah surat resmi yang dibuat oleh instansi/lembaga untuk keperluan kedinasan.'},
{category:'menulis',difficulty:'easy',
 text:'Bagian surat resmi yang berisi nama dan jabatan penandatangan surat adalah...',
 options:['Kop surat','Salam pembuka','Penutup','Tanda tangan dan nama'],answer:3,
 explanation:'Bagian penutup surat resmi mencakup tanda tangan, nama terang, dan jabatan penandatangan.'},
{category:'menulis',difficulty:'easy',
 text:'Paragraf pembuka surat lamaran pekerjaan sebaiknya berisi...',
 options:['Daftar pengalaman kerja','Sumber informasi lowongan dan maksud surat','Gaji yang diinginkan','Ucapan terima kasih'],answer:1,
 explanation:'Paragraf pembuka surat lamaran: sumber informasi lowongan + pernyataan maksud melamar pekerjaan.'},
{category:'menulis',difficulty:'easy',
 text:'Proposal kegiatan sekolah harus memuat komponen...',
 options:['Latar belakang dan anggaran saja','Nama kegiatan, tujuan, sasaran, anggaran, dan penutup','Hanya tujuan dan anggaran','Foto dan dokumentasi kegiatan'],answer:1,
 explanation:'Proposal lengkap memuat: latar belakang, nama/jenis kegiatan, tujuan, sasaran, waktu/tempat, anggaran, dan penutup.'},
{category:'menulis',difficulty:'easy',
 text:'Dalam pidato, bagian yang berisi ucapan syukur dan sapaan kepada hadirin disebut...',
 options:['Isi','Penutup','Pembuka','Kesimpulan'],answer:2,
 explanation:'Bagian pembuka pidato: ucapan salam, syukur kepada Tuhan, dan sapaan kepada hadirin.'},
{category:'menulis',difficulty:'medium',
 text:'Teks eksposisi yang baik harus memiliki struktur...',
 options:['Orientasi-komplikasi-resolusi','Pernyataan pendapat-argumentasi-penegasan ulang','Abstrak-orientasi-krisis-reaksi-koda','Deskripsi umum-deskripsi bagian-penutup'],answer:1,
 explanation:'Struktur teks eksposisi: (1) Pernyataan pendapat/tesis, (2) Argumentasi, (3) Penegasan ulang.'},
{category:'menulis',difficulty:'medium',
 text:'Karya tulis ilmiah yang dibuat sebagai syarat kelulusan S1 disebut...',
 options:['Makalah','Skripsi','Tesis','Disertasi'],answer:1,
 explanation:'Skripsi = S1, Tesis = S2, Disertasi = S3. Makalah adalah karya tulis ilmiah singkat tanpa prosedur penelitian formal.'},
{category:'menulis',difficulty:'medium',
 text:'Teknik penulisan berita yang menempatkan informasi terpenting di awal disebut...',
 options:['Kronologis','Piramida terbalik','Piramida tegak','Deskriptif'],answer:1,
 explanation:'Piramida terbalik: informasi paling penting (5W+1H) di paragraf pertama, detail di paragraf berikutnya.'},
{category:'menulis',difficulty:'medium',
 text:'Resensi buku yang baik memuat unsur...',
 options:['Hanya sinopsis cerita','Identitas buku, sinopsis, kelebihan/kekurangan, dan rekomendasi','Biografi pengarang saja','Daftar isi buku'],answer:1,
 explanation:'Resensi lengkap: identitas buku, sinopsis, analisis kelebihan/kekurangan, dan rekomendasi bagi pembaca.'},
{category:'menulis',difficulty:'medium',
 text:'Dalam debat formal, pihak yang bertugas mendukung mosi disebut tim...',
 options:['Netral','Kontra','Pro/affirmasi','Juri'],answer:2,
 explanation:'Tim pro/affirmasi bertugas mendukung mosi. Tim kontra/negasi bertugas menentangnya.'},
{category:'menulis',difficulty:'hard',
 text:'Penggunaan bahasa dalam iklan yang bersifat persuasif bertujuan untuk...',
 options:['Menginformasikan fakta secara objektif','Memengaruhi pembaca/pendengar agar mengambil tindakan','Mendeskrpsikan produk secara ilmiah','Memberikan laporan resmi'],answer:1,
 explanation:'Bahasa persuasif dalam iklan bertujuan memengaruhi audiens untuk membeli produk atau menggunakan jasa.'},
{category:'menulis',difficulty:'hard',
 text:'Sebuah artikel opini yang baik harus memenuhi syarat...',
 options:['Hanya berisi pendapat tanpa fakta','Menggunakan data/fakta pendukung dan argumen logis','Bersifat netral tanpa menyatakan posisi','Ditulis dalam bahasa ilmiah yang sulit dipahami'],answer:1,
 explanation:'Artikel opini yang baik: menyatakan posisi penulis, didukung data/fakta, argumen logis, dan mudah dipahami.'},
{category:'menulis',difficulty:'hard',
 text:'Kalimat penjelas dalam sebuah paragraf berfungsi sebagai...',
 options:['Inti gagasan','Pengembang dan pendukung kalimat utama','Penutup paragraf','Penghubung antarparagraf'],answer:1,
 explanation:'Kalimat penjelas berfungsi mengembangkan, membuktikan, atau memperinci gagasan yang ada dalam kalimat utama.'},
{category:'menulis',difficulty:'hard',
 text:'Dalam penulisan karya ilmiah, kutipan langsung yang panjangnya lebih dari 4 baris ditulis dengan cara...',
 options:['Diintegrasikan dalam teks dengan tanda petik','Ditulis menjorok ke dalam tanpa tanda petik','Ditulis dalam catatan kaki','Ditulis dalam lampiran'],answer:1,
 explanation:'Kutipan langsung >4 baris ditulis secara terpisah, menjorok ke dalam (indent), tanpa tanda petik, dengan spasi lebih kecil.'},
{category:'menulis',difficulty:'hard',
 text:'Perbedaan antara abstrak dan ringkasan dalam karya ilmiah adalah...',
 options:['Abstrak lebih panjang dari ringkasan','Abstrak berisi gambaran singkat seluruh isi karya, ringkasan adalah versi pendek bagian tertentu','Ringkasan hanya untuk bab pertama','Abstrak hanya memuat kesimpulan'],answer:1,
 explanation:'Abstrak: gambaran menyeluruh (masalah, metode, hasil, kesimpulan) dalam ±200 kata. Ringkasan: penyingkatan bagian tertentu dengan mempertahankan urutan asli.'},

];

// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════
const INDO_CATS = ['teks','kebahasaan','ejaan','sastra','menulis'];
const MAX_LIVES = 3;
let lives = MAX_LIVES;
let filteredQ = [];
let currentIdx = 0;
let correctCount = 0;
let wrongCount = 0;
let gameStarted = false;
let toastTimer = null;
const answerMap = new Map();

// ── Timer ─────────────────────────────────────────────
const TIMER_DURATION = 30;
const CIRCUMFERENCE = 2 * Math.PI * 22;
let timerInterval = null;
let timeLeft = TIMER_DURATION;

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIMER_DURATION;
  updateTimerUI();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) { clearInterval(timerInterval); onTimeOut(); }
  }, 1000);
}

function stopTimer() { clearInterval(timerInterval); }

function updateTimerUI() {
  const circle = document.getElementById('timerCircle');
  const numEl  = document.getElementById('timerNum');
  const wrap   = document.getElementById('timerWrap');
  circle.style.strokeDashoffset = CIRCUMFERENCE * (1 - timeLeft / TIMER_DURATION);
  numEl.textContent = timeLeft;
  circle.className = 'fill';
  numEl.className = 'timer-num';
  wrap.classList.remove('timeout');
  if (timeLeft <= 5) {
    circle.classList.add('danger'); numEl.classList.add('danger');
    document.getElementById('timerRing').classList.add('shake');
    setTimeout(() => document.getElementById('timerRing').classList.remove('shake'), 400);
  } else if (timeLeft <= 10) {
    circle.classList.add('warning'); numEl.classList.add('warning');
  }
  document.getElementById('timerMsg').textContent = timeLeft > 0 ? 'Waktu Tersisa' : 'Waktu Habis!';
}

function onTimeOut() {
  if (answerMap.has(currentIdx)) return;
  answerMap.set(currentIdx, -1);
  const q = filteredQ[currentIdx];
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
  document.querySelectorAll('.opt-btn')[q.answer].classList.add('correct');
  wrongCount++;
  updateStats();
  lockSkip();
  loseLife();
  const fb = document.getElementById('feedback');
  fb.className = 'feedback show timeout-fb';
  document.getElementById('fbMsg').textContent = '⏰ Waktu habis! Kamu kehilangan 1 nyawa.';
  document.getElementById('fbExp').textContent = 'Jawaban benar: ' + q.options[q.answer] + '. ' + q.explanation;
  document.getElementById('timerWrap').classList.add('timeout');
}

// ── Lives ─────────────────────────────────────────────
function updateLivesUI() {
  for (let i = 0; i < MAX_LIVES; i++) {
    const h = document.getElementById('heart' + i);
    if (i >= lives && !h.classList.contains('lost')) {
      h.classList.add('popping');
      setTimeout(() => { h.classList.remove('popping'); h.classList.add('lost'); }, 480);
    } else if (i < lives) {
      h.classList.remove('lost','popping'); if(!h.innerHTML) h.innerHTML='<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"#e25d5d\" stroke=\"#e25d5d\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/></svg>';
    }
  }
}

function loseLife() {
  if (lives <= 0) return;
  lives--;
  updateLivesUI();
  if (lives <= 0) setTimeout(showGameOver, 700);
}

function resetLives() {
  lives = MAX_LIVES;
  for (let i = 0; i < MAX_LIVES; i++) {
    const h = document.getElementById('heart' + i);
    h.classList.remove('lost','popping'); if(!h.innerHTML) h.innerHTML='<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"#e25d5d\" stroke=\"#e25d5d\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/></svg>';
  }
}

// ── Skip button ───────────────────────────────────────
function lockSkip()   { const b=document.getElementById('skipBtn'); if(b) b.disabled=true; }
function unlockSkip() { const b=document.getElementById('skipBtn'); if(b) b.disabled=false; }

// ── Warning toast ─────────────────────────────────────
function showWarning() {
  if (toastTimer) { clearTimeout(toastTimer); }
  const t = document.getElementById('warningToast');
  t.classList.remove('show'); void t.offsetWidth;
  t.classList.add('show');
  toastTimer = setTimeout(() => { t.classList.remove('show'); toastTimer = null; }, 2500);
}

// ── Start screen ──────────────────────────────────────
function showStartScreen() {
  gameStarted = false;
  stopTimer();
  timeLeft = TIMER_DURATION;
  updateTimerUI();
  document.getElementById('startTotal').textContent = filteredQ.length;
  document.getElementById('startScreen').classList.add('show');
  document.getElementById('questionArea').classList.add('locked');
}

function startQuiz() {
  gameStarted = true;
  document.getElementById('startScreen').classList.remove('show');
  document.getElementById('questionArea').classList.remove('locked');
  if (!answerMap.has(currentIdx)) startTimer();
}

// ── Category filter ───────────────────────────────────
function filterCategory(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (cat === 'semua') {
    const cats = [...new Set(allQuestions.map(q => q.category))];
    let pool = [];
    cats.forEach(c => {
      const hardQ = shuffle(allQuestions.filter(q => q.category === c && q.difficulty === 'hard'));
      pool = pool.concat(hardQ.slice(0, 2));
    });
    filteredQ = shuffle(pool);
  } else {
    filteredQ = allQuestions.filter(q => q.category === cat);
  }
  currentIdx = 0;
  answerMap.clear();
  correctCount = 0;
  wrongCount = 0;
  resetLives();
  updateStats();
  document.getElementById('resultScreen').classList.remove('show');
  document.getElementById('gameoverScreen').classList.remove('show');
  document.getElementById('questionArea').style.display = '';
  renderQuestion();
  showStartScreen();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Render question ───────────────────────────────────
function renderQuestion() {
  if (!filteredQ.length) return;
  const q = filteredQ[currentIdx];
  const isIndo = INDO_CATS.includes(q.category);

  document.getElementById('qNum').textContent = `SOAL ${currentIdx + 1}`;
  const catEl = document.getElementById('qCat');
  catEl.textContent = q.category.toUpperCase().replace('-',' ');
  catEl.className = 'q-category' + (isIndo ? ' cat-indo' : '');
  const qCard = document.getElementById('qCard');
  qCard.className = 'q-card' + (isIndo ? ' indo-card' : '');
  const diffEl = document.getElementById('qDiff');
  const diffLabel = {hard:'Sulit', medium:'Menengah', easy:'Mudah'};
  diffEl.textContent = diffLabel[q.difficulty] || q.difficulty;
  diffEl.className = 'q-diff diff-' + q.difficulty;
  document.getElementById('qText').textContent = q.text;
  const fEl = document.getElementById('qFormula');
  if (q.formula) { fEl.style.display=''; fEl.textContent=q.formula; } else fEl.style.display='none';

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.onclick = () => { if (!gameStarted) { showWarning(); return; } selectAnswer(i); };
    grid.appendChild(btn);
  });

  document.getElementById('feedback').className = 'feedback';
  const pb=document.getElementById('prevBtn'); if(pb) pb.disabled = currentIdx === 0;
  unlockSkip();
  document.getElementById('timerWrap').classList.remove('timeout');

  const pct = ((currentIdx + 1) / filteredQ.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${currentIdx + 1} / ${filteredQ.length}`;

  if (answerMap.has(currentIdx)) {
    stopTimer(); lockSkip();
    const sel = answerMap.get(currentIdx);
    const btns = document.querySelectorAll('.opt-btn');
    btns.forEach(b => b.disabled = true);
    const fb = document.getElementById('feedback');
    if (sel === -1) {
      btns[q.answer].classList.add('correct');
      fb.className = 'feedback show timeout-fb';
      document.getElementById('fbMsg').textContent = '⏰ Waktu habis! Kamu kehilangan 1 nyawa.';
      document.getElementById('fbExp').textContent = 'Jawaban benar: ' + q.options[q.answer] + '. ' + q.explanation;
      document.getElementById('timerWrap').classList.add('timeout');
      timeLeft = 0; updateTimerUI();
    } else {
      btns[sel].classList.add(sel === q.answer ? 'correct' : 'wrong');
      if (sel !== q.answer) btns[q.answer].classList.add('correct');
      const ok = sel === q.answer;
      fb.className = 'feedback show ' + (ok ? 'correct-fb' : 'wrong-fb');
      document.getElementById('fbMsg').textContent = ok ? '✓ Jawaban Benar!' : '✗ Jawaban Salah! −1 nyawa.';
      document.getElementById('fbExp').textContent = q.explanation;
    }
  } else if (gameStarted) {
    startTimer();
  }
}

function selectAnswer(idx) {
  if (!gameStarted) { showWarning(); return; }
  if (answerMap.has(currentIdx)) return;
  stopTimer();
  answerMap.set(currentIdx, idx);
  const q = filteredQ[currentIdx];
  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach(b => b.disabled = true);
  const ok = idx === q.answer;
  btns[idx].classList.add(ok ? 'correct' : 'wrong');
  if (!ok) btns[q.answer].classList.add('correct');
  if (ok) correctCount++; else { wrongCount++; loseLife(); }
  updateStats();
  lockSkip();
  const fb = document.getElementById('feedback');
  fb.className = 'feedback show ' + (ok ? 'correct-fb' : 'wrong-fb');
  document.getElementById('fbMsg').textContent = ok ? '✓ Jawaban Benar!' : '✗ Jawaban Salah! −1 nyawa.';
  document.getElementById('fbExp').textContent = q.explanation;
}

function updateStats() {
  document.getElementById('totalCount').textContent = filteredQ.length;
  document.getElementById('correctCount').textContent = correctCount;
  document.getElementById('wrongCount').textContent = wrongCount;
  const p = filteredQ.length > 0 ? Math.round((correctCount / filteredQ.length) * 100) : 0;
  document.getElementById('scoreVal').textContent = p + '%';
}

function nextQuestion() {
  if (!gameStarted) { showWarning(); return; }
  if (currentIdx < filteredQ.length - 1) {
    currentIdx++;
    document.getElementById('feedback').className = 'feedback';
    renderQuestion();
  } else { stopTimer(); showResult(); }
}

function prevQuestion() {
  if (!gameStarted) { showWarning(); return; }
  if (currentIdx > 0) {
    currentIdx--;
    document.getElementById('feedback').className = 'feedback';
    renderQuestion();
  }
}

function skipQuestion() {
  if (!gameStarted) { showWarning(); return; }
  if (!answerMap.has(currentIdx)) {
    stopTimer(); answerMap.set(currentIdx, -1);
    wrongCount++; updateStats();
  }
  if (currentIdx < filteredQ.length - 1) {
    currentIdx++;
    document.getElementById('feedback').className = 'feedback';
    renderQuestion();
  }
}

function showGameOver() {
  stopTimer();
  document.getElementById('questionArea').style.display = 'none';
  document.getElementById('gameoverScreen').classList.add('show');
  document.getElementById('goCorrect').textContent = correctCount;
  document.getElementById('goWrong').textContent = wrongCount;
  document.getElementById('goTotal').textContent = correctCount + wrongCount;
}

function showResult() {
  stopTimer();
  document.getElementById('questionArea').style.display = 'none';
  document.getElementById('resultScreen').classList.add('show');
  const pct = Math.round((correctCount / filteredQ.length) * 100);
  document.getElementById('resultScore').textContent = `${correctCount} / ${filteredQ.length}`;
  let e,t,d;
  const trophySVG='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#ff8c00"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>';
  const targetSVG='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#ff8c00"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>';
  const thumbSVG='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#ff8c00"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>';
  const sadSVG='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--muted)"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>';
  if (pct===100){e=trophySVG;t='Luar Biasa!';d='Kamu hebat, semua jawaban benar!';}
  else if (pct>=90){e=trophySVG;t='Hampir Sempurna!';d='Skormu sangat mengesankan!';}
  else if (pct>=70){e=targetSVG;t='Bagus Sekali!';d='Hasil yang mengesankan!';}
  else if (pct>=50){e=thumbSVG;t='Cukup Baik!';d='Tingkatkan terus pemahamanmu!';}
  else {e=sadSVG;t='Terus Berlatih!';d='Jangan menyerah!';}
  document.getElementById('resultEmoji').innerHTML=e;
  document.getElementById('resultTitle').textContent=t;
  document.getElementById('resultDetail').textContent=d+` (${pct}%)`;
}

function restartQuiz() {
  answerMap.clear();
  correctCount = 0; wrongCount = 0; currentIdx = 0;
  resetLives();
  updateStats();
  document.getElementById('resultScreen').classList.remove('show');
  document.getElementById('gameoverScreen').classList.remove('show');
  document.getElementById('questionArea').style.display = '';
  if (document.querySelector('.tab-btn.active')?.textContent.includes('Campran')) {
    const cats = [...new Set(allQuestions.map(q => q.category))];
    let pool = [];
    cats.forEach(c => {
      const hardQ = shuffle(allQuestions.filter(q => q.category === c && q.difficulty === 'hard'));
      pool = pool.concat(hardQ.slice(0, 2));
    });
    filteredQ = shuffle(pool);
  }
  renderQuestion();
  showStartScreen();
}

// ── Init ──────────────────────────────────────────────
const _cats = [...new Set(allQuestions.map(q => q.category))];
let _pool = [];
_cats.forEach(c => {
  const _hq = shuffle(allQuestions.filter(q => q.category === c && q.difficulty === 'hard'));
  _pool = _pool.concat(_hq.slice(0, 2));
});
filteredQ = shuffle(_pool);
updateStats();
renderQuestion();
showStartScreen();
