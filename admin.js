// Mock functions for administrative panel

function refreshData() {
    alert('✓ Dados atualizados com sucesso!\n\nÚltima atualização: ' + new Date().toLocaleString('pt-PT'));
}

function notifyPending() {
    const pendingCount = document.querySelectorAll('.badge-warning').length;

    if (confirm(`Enviar lembrete para ${pendingCount} colaboradores que ainda não submeteram?\n\nSerá enviado um email automático.`)) {
        alert('✓ Notificações enviadas com sucesso!\n\n' + pendingCount + ' colaboradores foram notificados por email.');
    }
}

function exportToExcel() {
    alert('📊 A exportar dados para Excel...\n\nO ficheiro será gerado no formato compatível com o Controlo de Gestão atual.\n\nFormato: MapasMensais_Fev2026.xlsx\n\n✓ Download iniciado!');
}

function viewDetails(name) {
    const modal = `
=================================
DETALHES DO COLABORADOR
=================================

Nome: ${name}
Período: Fevereiro 2026

--- DIAS DE TRABALHO ---
03/02 - P-2024-001 (EDP) - 1.0 dias
04/02 - P-2024-001 (EDP) - 0.5 dias
04/02 - AP-2026-003 (NOS) - 0.5 dias
05/02 - P-2025-012 (CGD) - 1.0 dias

Total: 3.0 dias

--- DESPESAS ---
03/02 - Deslocação Lisboa - 45.50 €
04/02 - Almoço trabalho - 28.00 €

Total: 73.50 €

=================================
    `;

    alert(modal);
}

function syncCodes() {
    if (confirm('Sincronizar códigos com o iportaldoc?\n\nIsto irá importar todos os códigos de projetos, propostas e angariações.')) {
        // Simulate sync delay
        const btn = event.target.closest('button');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg> A sincronizar...';

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalText;
            alert('✓ Sincronização concluída!\n\n15 códigos atualizados\n3 novos códigos adicionados\n2 códigos marcados como inativos');
        }, 2000);
    }
}

function addCode() {
    const code = prompt('Código do projeto/proposta:');
    if (!code) return;

    const name = prompt('Nome do projeto/proposta:');
    if (!name) return;

    const type = prompt('Tipo (Projeto/Proposta/Angariação):');
    if (!type) return;

    alert('✓ Código adicionado com sucesso!\n\n' + code + ' - ' + name + '\nTipo: ' + type);
}

// Add spinning animation for sync button
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize page
console.log('Admin panel loaded');
