# 📌 Estrutura do Projeto Frontend (React + TypeScript)

Este documento explica a estrutura de pastas utilizada no frontend do projeto.

## 📂 Estrutura de Diretórios
```
📂 src
 ┣ 📂 assets         # Imagens, ícones e arquivos estáticos
 ┣ 📂 components     # Componentes reutilizáveis
 ┣ 📂 pages         # Páginas principais da aplicação
 ┣ 📂 layouts        # Estruturas que agrupam páginas e componentes
 ┣ 📂 hooks          # Hooks personalizados (ex: useAuth, useFetch)
 ┣ 📂 contexts       # Context API para gerenciar estado global
 ┣ 📂 services       # APIs e comunicação com o backend
 ┣ 📂 utils          # Funções auxiliares e constantes
 ┣ 📂 styles         # Estilos globais e temas
 ┣ 📜 App.tsx        # Componente raiz do React
 ┣ 📜 main.tsx       # Ponto de entrada da aplicação
 ┣ 📜 index.css      # Estilos globais
 ┣ 📜 vite-env.d.ts  # Configuração do Vite
```

## 📌 Explicação das Pastas

### 📂 `components/`
Componentes reutilizáveis da aplicação, como botões, inputs, modais, etc.
```
📂 components
 ┣ 📂 Button
 ┃ ┣ 📜 Button.tsx
 ┃ ┣ 📜 Button.module.css
 ┣ 📂 Modal
 ┃ ┣ 📜 Modal.tsx
 ┃ ┣ 📜 Modal.module.css
```

### 📂 `pages/`
Cada página principal da aplicação.
```
📂 pages
 ┣ 📜 Home.tsx
 ┣ 📜 Login.tsx
 ┣ 📜 Dashboard.tsx
```

### 📂 `layouts/`
Layouts comuns, como Navbar fixa, Sidebar, etc.
```
📂 layouts
 ┣ 📜 MainLayout.tsx   # Layout principal
 ┣ 📜 AuthLayout.tsx   # Layout para páginas de login
```

### 📂 `hooks/`
Hooks personalizados para reutilização de lógica.
```
📂 hooks
 ┣ 📜 useAuth.ts       # Hook para autenticação
 ┣ 📜 useFetch.ts      # Hook para requisições HTTP
```

### 📂 `contexts/`
Contextos globais usando a Context API.
```
📂 contexts
 ┣ 📜 AuthContext.tsx    # Gerenciamento de autenticação
 ┣ 📜 ThemeContext.tsx   # Gerenciamento de temas
```

### 📂 `services/`
Chamadas para o backend via Axios ou Fetch.
```
📂 services
 ┣ 📜 api.ts            # Configuração do Axios
 ┣ 📜 authService.ts    # Serviço de autenticação
 ┣ 📜 userService.ts    # Serviço de usuários
```

### 📂 `utils/`
Funções auxiliares para formatação e validação.
```
📂 utils
 ┣ 📜 formatDate.ts    # Formatar datas
 ┣ 📜 validateEmail.ts # Validar emails
```

### 📂 `styles/`
Estilos globais e temas.
```
📂 styles
 ┣ 📜 global.css       # Estilos globais
 ┣ 📜 theme.ts         # Configuração de temas
```

## 🎯 Benefícios dessa Estrutura
✅ **Organização** – Facilita encontrar arquivos específicos.  
✅ **Escalabilidade** – Fácil expansão sem bagunçar o código.  
✅ **Reutilização** – Componentes, hooks e serviços são reutilizáveis.  
✅ **Separação de responsabilidades** – Cada parte do código tem seu lugar.

---
Essa estrutura é recomendada para garantir um código limpo, escalável e de fácil manutenção! 🚀

