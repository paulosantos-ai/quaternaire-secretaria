# ⚡ Quick Start: Deploy na IBM Cloud

Guia rápido de 5 minutos para deploy do Sistema Secretaria na IBM Cloud.

## 📋 Pré-requisitos

✅ Conta IBM Cloud (grátis): https://cloud.ibm.com/registration
✅ IBM Cloud CLI instalado

## 🚀 Deploy em 3 Passos

### 1️⃣ Instalar IBM Cloud CLI

**macOS:**
```bash
curl -fsSL https://clis.cloud.ibm.com/install/osx | sh
```

**Linux:**
```bash
curl -fsSL https://clis.cloud.ibm.com/install/linux | sh
```

**Windows:**
Download: https://github.com/IBM-Cloud/ibm-cloud-cli-release/releases

### 2️⃣ Login e Configuração

```bash
# Login
ibmcloud login
# ou para SSO: ibmcloud login --sso

# Instalar Cloud Foundry
ibmcloud plugin install cloud-foundry

# Selecionar região (Europa - Londres)
ibmcloud target -r eu-gb
```

### 3️⃣ Deploy Automático

```bash
# Clonar repositório
git clone https://github.com/paulosantos-ai/quaternaire-secretaria.git
cd quaternaire-secretaria

# Deploy com script
./deploy.sh

# OU deploy manual
ibmcloud cf push
```

**Pronto! 🎉**

A aplicação estará disponível em:
```
https://quaternaire-secretaria.eu-gb.mybluemix.net
```

---

## 📊 Comandos Úteis

### Ver status
```bash
ibmcloud cf apps
```

### Ver logs
```bash
ibmcloud cf logs quaternaire-secretaria --recent
```

### Restart da app
```bash
ibmcloud cf restart quaternaire-secretaria
```

### Deletar app
```bash
ibmcloud cf delete quaternaire-secretaria
```

---

## 🌍 Regiões Disponíveis

| Região | Código | URL Base |
|--------|--------|----------|
| 🇬🇧 Europa (Londres) | `eu-gb` | `.eu-gb.mybluemix.net` |
| 🇩🇪 Europa (Frankfurt) | `eu-de` | `.eu-de.mybluemix.net` |
| 🇺🇸 EUA (Dallas) | `us-south` | `.us-south.mybluemix.net` |
| 🇺🇸 EUA (Washington) | `us-east` | `.us-east.mybluemix.net` |

Para mudar região:
```bash
./deploy.sh eu-de  # Frankfurt
./deploy.sh us-south  # Dallas
```

---

## 💰 Custos

### Plano Lite (GRÁTIS)
- ✅ 256 MB de memória
- ✅ Suficiente para este site estático
- ✅ Sem cartão de crédito necessário
- ⚠️ App dorme após 10 dias sem uso

### Como Ativar
O app usa apenas **64 MB** (configurado em `manifest.yml`), bem dentro do limite gratuito!

---

## 🔧 Troubleshooting

### Erro: "No organization targeted"
```bash
ibmcloud target -o quaternaire -s production
```

### Erro: "App failed to start"
```bash
# Ver logs
ibmcloud cf logs quaternaire-secretaria --recent

# Verificar manifest
cat manifest.yml
```

### App muito lento
```bash
# Aumentar memória em manifest.yml
memory: 128M

# Re-deploy
ibmcloud cf push
```

---

## 📚 Mais Informações

- 📖 Guia completo: [DEPLOY.md](DEPLOY.md)
- 🌐 GitHub: https://github.com/paulosantos-ai/quaternaire-secretaria
- 📞 Suporte IBM: https://cloud.ibm.com/unifiedsupport

---

## ⚙️ Configuração Avançada

### Custom Domain
```bash
# Adicionar domínio
ibmcloud cf map-route quaternaire-secretaria quaternaire.pt --hostname secretaria

# Configurar DNS
CNAME secretaria -> quaternaire-secretaria.eu-gb.mybluemix.net
```

### HTTPS (SSL)
✅ Já configurado automaticamente!
Certificado gerido pela IBM Cloud.

### CI/CD Automático
Conecte o GitHub para deploy automático a cada push:
1. https://cloud.ibm.com/devops/setup/deploy
2. Selecione o repositório
3. Configure região e espaço
4. ✅ Deploy automático ativado!

---

**Tempo total: ~5 minutos** ⏱️
**Custo: GRÁTIS (Plano Lite)** 💰
