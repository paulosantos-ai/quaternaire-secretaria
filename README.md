# Demo do Sistema Secretaria

Este é um protótipo funcional do sistema **Secretaria** - Portal de Registo de Tempo e Despesas da Quaternaire.

## 🚀 Como Usar

### Opção 1: Local
1. Abra o ficheiro `index.html` num browser web
2. Escolha o perfil que deseja explorar:
   - **Portal do Colaborador**: Interface para registo de dias e despesas
   - **Painel Administrativo**: Dashboard de gestão e acompanhamento

### Opção 2: Deploy na IBM Cloud
Consulte o guia completo em [DEPLOY.md](DEPLOY.md) para instruções detalhadas de deploy na IBM Cloud.

**Deploy rápido:**
```bash
ibmcloud login
ibmcloud target -r eu-gb
ibmcloud cf push
```

## 📋 Funcionalidades Demonstradas

### Portal do Colaborador (`colaborador.html`)

#### ✅ Registo de Dias de Trabalho
- Seleção de data
- Escolha de projeto/proposta/angariação de lista centralizada
- Registo em unidades de meio-dia (0.5)
- **Validação automática**: Total diário não pode exceder 1 dia
- Distinção visual entre Projeto, Proposta e Angariação

#### 💶 Registo de Despesas
- Associação de despesas a datas específicas
- Campo de descrição e valor
- **Validação automática**: Despesas só podem ser registadas em datas com dias registados
- Opção "Sem despesas neste mês"

#### 📊 Resumo e Submissão
- Total de dias calculado automaticamente
- Total de despesas calculado automaticamente
- Estados: Rascunho / Submetido
- Botão de submissão com confirmação

### Painel Administrativo (`admin.html`)

#### 📈 Dashboard com Estatísticas
- Número de colaboradores que já submeteram
- Número de colaboradores pendentes
- Número de registos com incoerências
- Total de colaboradores

#### 🔍 Gestão de Submissões
- Vista completa de todos os colaboradores
- Estado de submissão de cada um
- Data de submissão
- Totais de dias e despesas
- **Alertas automáticos** para incoerências:
  - Despesas sem dias correspondentes
  - Total diário superior a 1.0
  - Colaboradores pendentes de submissão

#### 📧 Ações Administrativas
- Notificação automática para colaboradores pendentes
- Exportação para Excel (compatível com Controlo de Gestão)
- Visualização de detalhes de cada colaborador

#### 🏷️ Gestão de Códigos
- Lista centralizada de códigos de projetos/propostas/angariações
- Sincronização com gestor documental (iportaldoc)
- Adição manual de novos códigos
- Distinção clara entre tipos (Projeto/Proposta/Angariação)

## 🎨 Características do Design

- Interface limpa e intuitiva em português
- Cores consistentes para diferentes estados:
  - 🟢 Verde: Submetido / Sucesso
  - 🟡 Amarelo: Pendente / Proposta
  - 🔴 Vermelho: Incoerências / Angariação
  - 🔵 Azul: Informação / Projeto
- Layout responsivo e profissional
- Feedback visual imediato para todas as ações

## 🔒 Validações Implementadas

1. **RF02**: Total diário não pode exceder 1 dia
2. **RF03**: Bloqueio de submissão se existirem despesas sem dia correspondente
3. **RF05**: Distinção obrigatória entre angariação e proposta (por código)
4. **RF06**: Indicação explícita de "sem despesas neste mês"
5. **RF09**: Sinalização automática de incoerências

## 📁 Estrutura de Ficheiros

```
quaternaire-secretaria/
├── index.html          # Página inicial de seleção de perfil
├── colaborador.html    # Portal do colaborador
├── colaborador.js      # Lógica do portal do colaborador
├── admin.html          # Painel administrativo
├── admin.js            # Lógica do painel administrativo
├── logo.svg            # Logotipo Quaternaire Portugal
├── styles.css          # Estilos partilhados com cores corporativas
├── product-brief.md    # Documentação do produto
└── README.md           # Este ficheiro
```

## 🎯 Dados de Demonstração

### Colaboradores (10 exemplos)
- 14 submetidos
- 4 pendentes
- 2 com incoerências
- 1 em rascunho

### Códigos de Projeto
- **Projetos**: P-2024-001, P-2024-005, P-2025-012
- **Propostas**: AP-2026-003, AP-2026-007
- **Angariações**: AP-2026-ANG-001

## 💡 Casos de Uso Demonstrados

### Cenário 1: Colaborador Submete Mês
1. Aceder ao Portal do Colaborador
2. Registar dias de trabalho em diferentes projetos
3. Registar despesas associadas
4. Sistema valida automaticamente
5. Submeter o mês

### Cenário 2: Administrador Acompanha Submissões
1. Aceder ao Painel Administrativo
2. Ver dashboard com estatísticas
3. Identificar colaboradores pendentes
4. Detetar incoerências automáticas
5. Notificar colaboradores pendentes
6. Exportar dados para Excel

### Cenário 3: Validações em Ação
1. Tentar registar mais de 1 dia numa data → Alerta visual
2. Tentar registar despesa sem dia correspondente → Alerta visual
3. Marcar "sem despesas" → Desativa formulário de despesas
4. Sistema bloqueia submissão até correção

## 🔄 Próximos Passos (Fase 2)

As seguintes funcionalidades estão identificadas para desenvolvimento futuro:
- Lembretes automáticos via email
- Sugestões de pré-preenchimento via calendário (Teams)
- Integração real com iportaldoc
- Histórico mensal completo
- Relatórios avançados

## 📝 Notas Técnicas

- **Frontend**: HTML5, CSS3, JavaScript vanilla (sem dependências)
- **Dados**: Mock data em JavaScript (simulação)
- **Browser**: Testado em Chrome, Firefox, Safari, Edge
- **Responsividade**: Otimizado para desktop (uso principal)

## ✅ Métricas de Sucesso (Objetivos do Projeto)

| Métrica | Situação Atual | Objetivo | Demo |
|---------|----------------|----------|------|
| Esforço administrativo mensal | 5-6 dias | < 2 dias | ✓ Automatizado |
| Prazo de fecho | Até dia 20 | Até dia 6 | ✓ Tracking visível |
| Erros de imputação | Frequentes | Raros (< 5%) | ✓ Validação automática |
| Taxa de submissão no prazo | Variável | > 90% | ✓ Notificações |

---

**Desenvolvido para**: Quaternaire Portugal
**Data**: Fevereiro 2026
**Versão**: 1.0 (Demo/Protótipo)
**Repositório**: [github.com/paulosantos-ai/quaternaire-secretaria](https://github.com/paulosantos-ai/quaternaire-secretaria)
