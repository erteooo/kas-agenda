const financeData = {
  income: [],
  expense: []
};

const ctx = document.getElementById('financeChart').getContext('2d');
const financeChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Income', 'Expense'],
      datasets: [{
          label: 'Amount',
          data: [0, 0],
          backgroundColor: ['#4CAF50', '#F44336'],
          borderColor: ['#388E3C', '#D32F2F'],
          borderWidth: 1
      }]
  },
  options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true
          }
      },
      plugins: {
          tooltip: {
              callbacks: {
                  label: function(tooltipItem) {
                      return '$' + tooltipItem.raw.toFixed(2);
                  }
              }
          }
      }
  }
});

function updateFinance() {
  const incomeInput = document.getElementById('income').value;
  const expenseInput = document.getElementById('expense').value;

  const income = parseFloat(incomeInput);
  const expense = parseFloat(expenseInput);

  // Validate inputs
  if (isNaN(income) || income < 0) {
      alert('Please enter a valid income amount.');
      return;
  }
  if (isNaN(expense) || expense < 0) {
      alert('Please enter a valid expense amount.');
      return;
  }

  financeData.income.push(income);
  financeData.expense.push(expense);

  const totalIncome = financeData.income.reduce((a, b) => a + b, 0);
  const totalExpense = financeData.expense.reduce((a, b) => a + b, 0);
  const balance = totalIncome - totalExpense;

  financeChart.data.datasets[0].data[0] = totalIncome;
  financeChart.data.datasets[0].data[1] = totalExpense;
  financeChart.update();

  document.getElementById('balance').innerText = 'Balance: $' + balance.toFixed(2);

  // Reset input fields
  document.getElementById('income').value = '';
  document.getElementById('expense').value = '';

  // Disable button if inputs are empty
  document.getElementById('submitBtn').disabled = true;
}

// Enable button when inputs are filled
function checkInputs() {
  const incomeInput = document.getElementById('income').value;
  const expenseInput = document.getElementById('expense').value;
  document.getElementById('submitBtn').disabled = !(incomeInput || expenseInput);
}

document.getElementById('income').addEventListener('input', checkInputs);
document.getElementById('expense').addEventListener('input', checkInputs);