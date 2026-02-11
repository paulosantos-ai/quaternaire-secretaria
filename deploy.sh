#!/bin/bash

# Script de deploy para IBM Cloud
# Uso: ./deploy.sh [region]
# Exemplo: ./deploy.sh eu-gb

set -e

echo "🚀 Iniciando deploy do Sistema Secretaria para IBM Cloud..."
echo ""

# Verificar se IBM Cloud CLI está instalado
if ! command -v ibmcloud &> /dev/null; then
    echo "❌ IBM Cloud CLI não encontrado!"
    echo "📥 Instale em: https://cloud.ibm.com/docs/cli"
    exit 1
fi

# Verificar se Cloud Foundry plugin está instalado
if ! ibmcloud cf &> /dev/null; then
    echo "📦 Instalando Cloud Foundry plugin..."
    ibmcloud plugin install cloud-foundry
fi

# Região (padrão: eu-gb)
REGION=${1:-eu-gb}
ORG=${2:-quaternaire}
SPACE=${3:-production}

echo "📍 Região: $REGION"
echo "🏢 Organização: $ORG"
echo "🌍 Espaço: $SPACE"
echo ""

# Login (se necessário)
if ! ibmcloud target &> /dev/null; then
    echo "🔐 Por favor, faça login:"
    ibmcloud login
fi

# Definir target
echo "🎯 Configurando target..."
ibmcloud target -r "$REGION"

# Verificar se organização existe
if ! ibmcloud account org "$ORG" &> /dev/null; then
    echo "🏗️  Criando organização $ORG..."
    ibmcloud account org-create "$ORG"
fi

# Verificar se espaço existe
if ! ibmcloud account space "$SPACE" -o "$ORG" &> /dev/null; then
    echo "🏗️  Criando espaço $SPACE..."
    ibmcloud account space-create "$SPACE" -o "$ORG"
fi

# Definir organização e espaço
ibmcloud target -o "$ORG" -s "$SPACE"

# Deploy
echo ""
echo "🚢 Fazendo deploy da aplicação..."
ibmcloud cf push

# Verificar status
echo ""
echo "✅ Deploy concluído!"
echo ""
echo "📊 Status da aplicação:"
ibmcloud cf app quaternaire-secretaria

# Obter URL
APP_URL=$(ibmcloud cf app quaternaire-secretaria | grep -oE 'https://[^ ]+' | head -1)
echo ""
echo "🌐 Aplicação disponível em:"
echo "   $APP_URL"
echo ""
echo "📝 Para ver logs:"
echo "   ibmcloud cf logs quaternaire-secretaria --recent"
echo ""
echo "🎉 Deploy finalizado com sucesso!"
