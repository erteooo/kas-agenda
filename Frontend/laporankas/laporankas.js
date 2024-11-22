// Data Keuangan
let financeData = {
    income: [],
    expense: [],
  };
  
  // Inisialisasi Chart
  const ctx = document.getElementById("finance-chart").getContext("2d");
  const financeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [], // Tanggal akan ditambahkan secara dinamis
      datasets: [
        {
          label: "Pemasukan (Rp)",
          data: financeData.income,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Pengeluaran (Rp)",
          data: financeData.expense,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: (context) => `Rp ${context.raw.toLocaleString()}`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => `Rp ${value.toLocaleString()}`,
          },
        },
      },
    },
  });
  
  // Fungsi untuk Menambah Data
  function updateFinance() {
    const income = parseFloat(document.getElementById("income").value) || 0;
    const expense = parseFloat(document.getElementById("expense").value) || 0;
    const today = new Date().toLocaleDateString();
  
    if (income || expense) {
      // Tambahkan data ke array
      financeData.income.push(income);
      financeData.expense.push(expense);
  
      // Tambahkan label tanggal
      financeChart.data.labels.push(today);
  
      // Perbarui grafik
      financeChart.update();
  
      // Hitung saldo total
      const totalIncome = financeData.income.reduce((a, b) => a + b, 0);
      const totalExpense = financeData.expense.reduce((a, b) => a + b, 0);
      const balance = totalIncome - totalExpense;
  
      document.getElementById("finance-summary").innerText = `Saldo saat ini: Rp ${balance.toLocaleString()}`;
  
      // Reset input
      document.getElementById("income").value = "";
      document.getElementById("expense").value = "";
    } else {
      alert("Masukkan data pemasukan atau pengeluaran!");
    }
  }
  