# 🍽️ Sistema de PDV e Gerenciamento de Pedidos para Bares e Restaurantes (em desenvolvimento)

## 🚀 Tecnologias  
**Frontend:** React.js (Vite) + Tailwind CSS + TypeScript  
**Backend:** Node.js (Express) + PostgreSQL  
**Autenticação:** JWT (JSON Web Token)  

## 🛠️ Como Rodar  
```sh
# Clonar o repositório
git clone https://github.com/pabloalves01/gastro-flow
cd gastro-flow

# Rodando o Frontend
cd frontend
npm install
npm run dev

# Rodando o Backend
cd ../backend
npm install
npm run dev

# Configurar .env
Configure sua conexão com o banco de dados no .env substituindo os valores abaixo
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco

# Rode as migrations
npx sequelize db:migrate

