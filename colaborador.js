// Mock data storage
let daysData = [
    { date: '2026-02-03', code: 'P-2024-001', name: 'EDP Inovação Digital', type: 'Projeto', days: 1.0 },
    { date: '2026-02-04', code: 'P-2024-001', name: 'EDP Inovação Digital', type: 'Projeto', days: 0.5 },
    { date: '2026-02-04', code: 'AP-2026-003', name: 'NOS Consultoria', type: 'Proposta', days: 0.5 }
];

let expensesData = [
    { date: '2026-02-03', description: 'Deslocação cliente Lisboa', amount: 45.50 },
    { date: '2026-02-04', description: 'Almoço de trabalho', amount: 28.00 }
];

function removeRow(button) {
    const row = button.closest('tr');
    const table = row.closest('table');
    const isExpense = table.id === 'expenses-table';

    if (isExpense) {
        const index = Array.from(row.parentNode.children).indexOf(row);
        expensesData.splice(index, 1);
    } else {
        const index = Array.from(row.parentNode.children).indexOf(row);
        daysData.splice(index, 1);
    }

    row.remove();
    updateSummary();
    validateData();
}

function addDay() {
    const date = document.getElementById('day-date').value;
    const codeSelect = document.getElementById('day-code');
    const code = codeSelect.value;
    const amount = parseFloat(document.getElementById('day-amount').value);

    if (!date || !code) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const selectedOption = codeSelect.options[codeSelect.selectedIndex];
    const fullText = selectedOption.text;
    const name = fullText.split(' - ')[1] || fullText;

    let type = 'Projeto';
    if (code.includes('AP') && code.includes('ANG')) {
        type = 'Angariação';
    } else if (code.includes('AP')) {
        type = 'Proposta';
    }

    daysData.push({ date, code, name, type, days: amount });

    const tbody = document.getElementById('days-tbody');
    const row = tbody.insertRow();

    const typeClass = type === 'Projeto' ? 'badge-info' : type === 'Proposta' ? 'badge-warning' : 'badge-danger';

    row.innerHTML = `
        <td>${formatDate(date)}</td>
        <td>${code} - ${name}</td>
        <td><span class="badge ${typeClass}">${type}</span></td>
        <td>${amount.toFixed(1)}</td>
        <td><button class="btn btn-outline btn-small" onclick="removeRow(this)">Remover</button></td>
    `;

    // Reset form
    document.getElementById('day-code').value = '';

    updateSummary();
    validateData();
}

function addExpense() {
    const noExpenses = document.getElementById('no-expenses').checked;
    if (noExpenses) {
        alert('Desmarque a opção "Sem despesas neste mês" para adicionar despesas.');
        return;
    }

    const date = document.getElementById('expense-date').value;
    const description = document.getElementById('expense-desc').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (!date || !description || !amount) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    expensesData.push({ date, description, amount });

    const tbody = document.getElementById('expenses-tbody');
    const row = tbody.insertRow();

    row.innerHTML = `
        <td>${formatDate(date)}</td>
        <td>${description}</td>
        <td>${amount.toFixed(2)} €</td>
        <td><button class="btn btn-outline btn-small" onclick="removeRow(this)">Remover</button></td>
    `;

    // Reset form
    document.getElementById('expense-desc').value = '';
    document.getElementById('expense-amount').value = '';

    updateSummary();
    validateData();
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-PT');
}

function toggleExpenses() {
    const noExpenses = document.getElementById('no-expenses').checked;
    const expensesForm = document.getElementById('expenses-form');

    if (noExpenses) {
        expensesForm.style.opacity = '0.5';
        expensesForm.style.pointerEvents = 'none';
    } else {
        expensesForm.style.opacity = '1';
        expensesForm.style.pointerEvents = 'auto';
    }
}

function updateSummary() {
    const totalDays = daysData.reduce((sum, item) => sum + item.days, 0);
    const totalExpenses = expensesData.reduce((sum, item) => sum + item.amount, 0);
    const totalEntries = daysData.length + expensesData.length;

    document.getElementById('total-days').textContent = totalDays.toFixed(1);
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2) + ' €';
    document.getElementById('total-entries').textContent = totalEntries;
}

function validateData() {
    let hasErrors = false;

    // Check if any day exceeds 1.0
    const dayTotals = {};
    daysData.forEach(item => {
        if (!dayTotals[item.date]) {
            dayTotals[item.date] = 0;
        }
        dayTotals[item.date] += item.days;
    });

    const daysAlert = document.getElementById('days-alert');
    const exceedsLimit = Object.values(dayTotals).some(total => total > 1.0);
    if (exceedsLimit) {
        daysAlert.style.display = 'block';
        hasErrors = true;
    } else {
        daysAlert.style.display = 'none';
    }

    // Check if expenses have corresponding days
    const expensesAlert = document.getElementById('expenses-alert');
    const daysSet = new Set(daysData.map(d => d.date));
    const hasOrphanExpenses = expensesData.some(e => !daysSet.has(e.date));

    if (hasOrphanExpenses && !document.getElementById('no-expenses').checked) {
        expensesAlert.style.display = 'block';
        hasErrors = true;
    } else {
        expensesAlert.style.display = 'none';
    }

    return !hasErrors;
}

function submitMonth() {
    if (!validateData()) {
        alert('Por favor, corrija os erros antes de submeter.');
        return;
    }

    if (daysData.length === 0) {
        alert('Não há dias registados para submeter.');
        return;
    }

    if (confirm('Tem a certeza que deseja submeter este mês? Após a submissão, não poderá fazer alterações.')) {
        const status = document.getElementById('submission-status');
        status.textContent = 'Submetido';
        status.className = 'badge badge-success';

        alert('Mês submetido com sucesso! ✓\n\nOs seus registos foram enviados para processamento administrativo.');
    }
}

// Initialize
updateSummary();
validateData();
