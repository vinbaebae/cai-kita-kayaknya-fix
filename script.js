
function mulai() {
  const nama = document.getElementById("nama").value.trim();
  if (nama === "") { alert("Masukkan nama terlebih dahulu!"); return; }
  localStorage.setItem("namaPeserta", nama);
  window.location.href = "materi.html";
}
function periksaJawaban(jawabanBenar, tombol, jawaban) {
  const feedback = document.createElement("div");
  feedback.style.marginTop = "10px";
  feedback.style.fontWeight = "bold";
  if (jawabanBenar) {
    feedback.innerHTML = "✅ Jawaban Benar!<br><small>Jawaban: " + jawaban + "</small>";
    feedback.style.color = "green";
  } else {
    feedback.innerHTML = "❌ Jawaban Salah.<br><small>Jawaban: " + jawaban + "</small>";
    feedback.style.color = "red";
  }
  tombol.parentElement.appendChild(feedback);
}
function hitungSkor() {
  let skor = 0;
  const jawaban1 = document.querySelector('input[name="soal1"]:checked');
  if (jawaban1 && jawaban1.value === "5") skor += 1;
  document.getElementById("skorHasil").innerText = "Skor Anda: " + skor;
  const nama = localStorage.getItem("namaPeserta") || "Anonim";
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ nama: nama, skor: skor });
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  return false;
}
window.onload = function() {
  const list = document.getElementById("daftarLeaderboard");
  if (list) {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.nama + " - Skor: " + item.skor;
      list.appendChild(li);
    });
  }
};

function nextLatihan() {
  const div = document.getElementById("soalLatihan");
  div.innerHTML = '<p>Soal 2: Apakah 8 adalah bilangan genap?</p>' +
                  '<button onclick="periksaJawaban(true, this, \'Benar\')">Benar</button>' +
                  '<button onclick="periksaJawaban(false, this, \'Benar\')">Salah</button><br><br>' +
                  '<a href="evaluasi.html"><button>Lanjut ke Evaluasi</button></a>';
}
