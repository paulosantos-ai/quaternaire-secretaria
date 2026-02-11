# Deploy para IBM Cloud

Este documento descreve como fazer deploy do Sistema Secretaria na IBM Cloud.

## 🚀 Opção 1: Deploy via IBM Cloud Foundry (Recomendado)

### Pré-requisitos

1. **Conta IBM Cloud**
   - Crie uma conta em: https://cloud.ibm.com/registration
   - Plano Lite gratuito disponível

2. **IBM Cloud CLI**
   ```bash
   # macOS
   curl -fsSL https://clis.cloud.ibm.com/install/osx | sh

   # Linux
   curl -fsSL https://clis.cloud.ibm.com/install/linux | sh

   # Windows
   # Download: https://github.com/IBM-Cloud/ibm-cloud-cli-release/releases
   ```

3. **Cloud Foundry CLI Plugin**
   ```bash
   ibmcloud cf install
   ```

### Passos para Deploy

1. **Login na IBM Cloud**
   ```bash
   ibmcloud login
   # Para SSO: ibmcloud login --sso
   ```

2. **Selecionar região**
   ```bash
   # Europa (Londres)
   ibmcloud target -r eu-gb

   # Outras regiões disponíveis:
   # ibmcloud target -r us-south  # EUA (Dallas)
   # ibmcloud target -r eu-de     # Europa (Frankfurt)
   ```

3. **Criar organização e espaço (primeira vez)**
   ```bash
   ibmcloud account org-create quaternaire
   ibmcloud account space-create production -o quaternaire
   ```

4. **Definir target**
   ```bash
   ibmcloud target -o quaternaire -s production
   ```

5. **Deploy da aplicação**
   ```bash
   cd /caminho/para/quaternaire-secretaria
   ibmcloud cf push
   ```

6. **Verificar deploy**
   ```bash
   ibmcloud cf apps
   ```

### URL da Aplicação

Após o deploy, a aplicação estará disponível em:
- **Europa**: https://quaternaire-secretaria.eu-gb.mybluemix.net
- **Custom domain**: Configure nas settings da aplicação

---

## 🔄 Opção 2: Deploy via IBM Cloud Code Engine

### Vantagens
- Serverless (paga apenas pelo uso)
- Auto-scaling
- Mais moderno

### Passos

1. **Criar projeto Code Engine**
   ```bash
   ibmcloud ce project create --name quaternaire-secretaria
   ibmcloud ce project select --name quaternaire-secretaria
   ```

2. **Deploy via source code**
   ```bash
   ibmcloud ce app create \
     --name secretaria \
     --build-source https://github.com/paulosantos-ai/quaternaire-secretaria \
     --port 8080 \
     --min-scale 0 \
     --max-scale 2
   ```

3. **Obter URL**
   ```bash
   ibmcloud ce app get --name secretaria
   ```

---

## 🌐 Opção 3: Deploy via GitHub + IBM Cloud Toolchain

### Configuração Automática

1. Aceda a: https://cloud.ibm.com/devops/setup/deploy

2. Conecte o repositório GitHub:
   - Repository URL: `https://github.com/paulosantos-ai/quaternaire-secretaria`
   - Branch: `main`

3. Configure a Toolchain:
   - Região: `eu-gb` (Europa - Londres)
   - Organization: `quaternaire`
   - Space: `production`

4. Deploy automático será acionado a cada push no GitHub

---

## 📊 Monitorização

### Logs
```bash
# Cloud Foundry
ibmcloud cf logs quaternaire-secretaria --recent

# Code Engine
ibmcloud ce app logs --name secretaria
```

### Status
```bash
# Cloud Foundry
ibmcloud cf app quaternaire-secretaria

# Code Engine
ibmcloud ce app get --name secretaria
```

### Métricas
Acesse o Dashboard: https://cloud.ibm.com/resources

---

## 🔧 Configurações Avançadas

### Custom Domain

1. Aceda ao App Dashboard
2. Routes > Add Route
3. Configure DNS:
   ```
   CNAME secretaria.quaternaire.pt -> quaternaire-secretaria.eu-gb.mybluemix.net
   ```

### HTTPS/SSL
- Certificado SSL gerido automaticamente pela IBM Cloud
- Força HTTPS configurado no `Staticfile`

### Variáveis de Ambiente
```bash
ibmcloud cf set-env quaternaire-secretaria ENV production
ibmcloud cf restage quaternaire-secretaria
```

---

## 💰 Custos

### Plano Lite (Gratuito)
- **Cloud Foundry**: 256 MB de memória
- **Code Engine**: 100,000 vCPU-seconds/mês
- Suficiente para demo/desenvolvimento

### Plano Pago
- A partir de ~$0.05/hora por instância
- Escalamento automático disponível

---

## 🛠️ Troubleshooting

### Erro: "No space targeted"
```bash
ibmcloud target -o quaternaire -s production
```

### Erro: "Insufficient memory"
Reduza memória no `manifest.yml`:
```yaml
memory: 32M  # Mínimo para static site
```

### App não inicia
```bash
ibmcloud cf logs quaternaire-secretaria --recent
```

---

## 📞 Suporte

- Documentação: https://cloud.ibm.com/docs
- Suporte: https://cloud.ibm.com/unifiedsupport/supportcenter
- Community: https://community.ibm.com/community/user/cloud/home

---

**Nota**: Este é um site estático (HTML/CSS/JS), portanto não requer base de dados ou backend.
O deploy é simples e rápido (~2 minutos).
