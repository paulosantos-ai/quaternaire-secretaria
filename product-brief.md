# Product Brief: Secretaria

## Resumo Executivo

**Nome do Projeto**: Secretaria - Portal de Registo de Tempo e Despesas
**Cliente**: Quaternaire Portugal
**Data**: 5 de fevereiro de 2026
**Versão**: 1.0

Portal web interno para registo mensal de dias de trabalho e despesas, substituindo o processo atual baseado em Excel e email. A solução visa reduzir significativamente o esforço administrativo, eliminar erros de imputação e melhorar a qualidade da informação de gestão.

---

## 1. Contexto e Problema

### 1.1 Situação Atual

A Quaternaire é uma empresa de consultoria com aproximadamente 20 colaboradores e 2 administrativas. O controlo de gestão atual baseia-se em:

- **Mapas mensais individuais em Excel** para registo de tempo e despesas
- **Envio por email** no final de cada mês
- **Códigos numéricos** para projetos e **códigos alfanuméricos (AP)** para propostas e angariações
- **Processamento manual** pela equipa administrativa (Cláudia Mendes e Isabel Antunes)
- **Prazo de entrega**: dia 6 do mês seguinte (frequentemente atrasado até dia 20)

### 1.2 Problemas Identificados

| Problema | Impacto |
|----------|---------|
| Processo manual em Excel com copy/paste | 5-6 dias de trabalho administrativo/mês |
| Erros de códigos (confusão angariação vs proposta) | Imputação incorreta de custos |
| Incoerência entre dias e despesas | Risco fiscal e de gestão |
| Atrasos na entrega dos mapas | Atraso no fecho mensal |
| Deteção tardia de erros | Retrabalho e correções manuais |
| Ausência de atualização automática de códigos | Colaboradores usam códigos desatualizados |
| Falta de mecanismo para indicar "sem despesas" | Administrativas precisam confirmar manualmente |

### 1.3 Custos do Problema

- **Custo direto**: ~5-6 dias de trabalho administrativo por mês
- **Custo indireto**: Tempo dos colaboradores a corrigir erros, perseguição para entregas
- **Risco**: Incoerências fiscais, informação de gestão imprecisa

---

## 2. Solução Proposta

### 2.1 Visão do Produto

Portal web interno com dois perfis principais que digitaliza e automatiza o processo de registo de tempo e despesas, mantendo compatibilidade total com o sistema de Controlo de Gestão existente.

### 2.2 Perfis de Utilizador

#### Colaborador (~20 utilizadores)
- Regista dias de trabalho por projeto/proposta/angariação (em meios-dias)
- Regista despesas associadas a datas específicas
- Seleciona códigos de lista centralizada e atualizada
- Submete o mês quando concluir o preenchimento

#### Administrativo (2 utilizadores: Cláudia Mendes, Isabel Antunes)
- Visualiza estado de submissão de todos os colaboradores
- Identifica quem ainda não submeteu
- Deteta incoerências sinalizadas automaticamente
- Corrige exceções pontuais
- Acede ao histórico mensal
- Exporta dados consolidados em Excel (compatível com CG atual)

### 2.3 Funcionalidades Principais

#### MVP (Fase 1)

| Funcionalidade | Descrição |
|----------------|-----------|
| Portal do Colaborador | Interface web para registo de dias e despesas |
| Painel Administrativo | Dashboard de gestão e acompanhamento |
| Gestão Central de Códigos | Repositório único sincronizado com gestor documental |
| Validação automática | Total diário máx. 1 dia; bloqueio se despesas sem dia correspondente |
| Distinção obrigatória | Entre angariação e proposta com base no código |
| Campo "sem despesas" | Indicação explícita quando não há despesas no mês |
| Estados de preenchimento | Draft / Submetido |
| Export Excel | Formato compatível com ficheiro final de Controlo de Gestão |

#### Automação Assistida (Fase 2 - Opcional)

| Funcionalidade | Descrição |
|----------------|-----------|
| Lembretes automáticos | Para colaboradores que não submeteram até data definida |
| Sugestões via agenda | Pré-preenchimento baseado em calendário digital (com validação humana) |
| Alertas inteligentes | Sinalização proativa de incoerências |
| Notificações administrativas | Quando todos os mapas estiverem submetidos |

---

## 3. Requisitos

### 3.1 Requisitos Funcionais

**RF01** - O sistema deve permitir registo de dias em unidades de meio-dia
**RF02** - O sistema deve validar que o total diário não excede 1 dia
**RF03** - O sistema deve bloquear submissão se existirem despesas sem dia correspondente
**RF04** - O sistema deve manter lista centralizada de códigos (projetos, propostas, angariações)
**RF05** - O sistema deve distinguir obrigatoriamente entre angariação e proposta
**RF06** - O sistema deve permitir indicar explicitamente "sem despesas neste mês"
**RF07** - O sistema deve exportar dados em formato Excel compatível com CG atual
**RF08** - O sistema deve mostrar estado de submissão de todos os colaboradores
**RF09** - O sistema deve sinalizar automaticamente incoerências (dias vs despesas)
**RF10** - O sistema deve manter histórico mensal acessível

### 3.2 Requisitos Não-Funcionais

**RNF01** - Interface em Português
**RNF02** - Acesso via browser (responsivo não é prioritário - uso desktop)
**RNF03** - Compatibilidade com workflow atual (export Excel para CG)
**RNF04** - Conformidade RGPD (dados pessoais e financeiros de colaboradores)
**RNF05** - Disponibilidade durante horário laboral

### 3.3 Integrações

| Sistema | Tipo | Prioridade |
|---------|------|------------|
| Gestor Documental (iportaldoc) | Sincronização de códigos | Alta |
| Calendários digitais (Teams) | Sugestões de pré-preenchimento | Baixa (Fase 2) |
| Email (Outlook) | Notificações/lembretes | Média (Fase 2) |

---

## 4. Restrições e Considerações

### 4.1 Validações que Mantêm Intervenção Humana

- Validação de dias indiretos (seminários/intervenções)
- Conferência de despesas
- Correção de códigos em casos excecionais
- Carregamento final no controlo de gestão

### 4.2 Gestão da Mudança

**Resistência esperada**: Resistência passiva (esquecimento, atrasos, queixas sobre esforço adicional)
**Mitigação**: Interface simples, valor claro para o colaborador, lembretes automáticos

### 4.3 Dados

- **Estruturados**: Registos de dias e despesas
- **Semi-estruturados**: PDFs de comprovantes de despesas
- **Histórico disponível**: Mapas mensais arquivados no gestor documental (pastas zipadas)
- **Dados sensíveis**: Dados pessoais de colaboradores, dados financeiros

---

## 5. Métricas de Sucesso

| Métrica | Situação Atual | Objetivo |
|---------|----------------|----------|
| Esforço administrativo mensal | 5-6 dias | < 2 dias |
| Prazo de fecho | Até dia 20 | Até dia 6 |
| Erros de imputação | Frequentes | Raros (< 5%) |
| Taxa de submissão no prazo | Variável | > 90% |

---

## 6. Abordagem de Implementação

### Fase 1 - MVP Operacional
- Portal de colaboradores
- Painel administrativo
- Gestão central de códigos
- Export Excel para Controlo de Gestão
- Validações essenciais

### Fase 2 - Automação Assistida (opcional)
- Lembretes automáticos
- Sugestões via agenda
- Alertas inteligentes

**Justificação**: Esta abordagem permite entregar valor rapidamente, com baixo risco e sem necessidade de transformação organizacional profunda.

---

## 7. Stakeholders

| Nome | Papel | Responsabilidade |
|------|-------|------------------|
| Cláudia Mendes | Administrativa / Product Owner | Responsável pelo fecho e controlo de gestão |
| Isabel Antunes | Administrativa | Processamento de mapas |
| Colaboradores (~20) | Utilizadores finais | Registo de dias e despesas |

---

## 8. Riscos Identificados

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Baixa adoção pelos colaboradores | Média | Alto | Interface intuitiva, lembretes, comunicação clara de benefícios |
| Incompatibilidade com CG atual | Baixa | Alto | Validação prévia do formato de export com equipa administrativa |
| Resistência à mudança | Média | Médio | Implementação faseada, formação, suporte inicial intensivo |
| Complexidade na sincronização de códigos | Média | Médio | Definir processo claro de atualização com gestor documental |

---

## Aprovações

| Papel | Nome | Data | Assinatura |
|-------|------|------|------------|
| Product Owner | | | |
| Sponsor | | | |
| Tech Lead | | | |

---

*Documento gerado com base nas entrevistas realizadas a 3 de fevereiro de 2026 com Cláudia Mendes e equipa.*
