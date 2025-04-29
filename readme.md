# AOTA API Axios Next.js

Uma biblioteca TypeScript baseada em Axios, criada especificamente para **projetos Next.js**. Ideal para chamadas HTTP no lado do **cliente** e do **servidor**, com suporte completo a variáveis de ambiente (`.env`) do Next.js.

---

## 📦 Instalação

```bash
npm install aota-api-axios-nextjs
```

---

## 🌐 Variáveis de Ambiente

Adicione as seguintes variáveis ao seu `.env.local` no projeto Next.js:

```env
NEXT_PUBLIC_API_URL=https://api.externa.com
NEXT_PUBLIC_API_URL_NEXT=http://localhost:3000/api
```

- `NEXT_PUBLIC_API_URL`: Endpoint da API externa (produção ou staging).
- `NEXT_PUBLIC_API_URL_NEXT`: Endpoint da API local do próprio Next.js (caso esteja usando `/api` interno).

---

## 🚀 Uso Básico

### Requisição `GET`

```ts
import { api } from "aota-api-axios-nextjs";

const getProducts = async () => {
  const response = await api({
    method: "GET",
    endpoint: "/products",
  });

  console.log(response);
};
```

### Requisição `POST` com corpo e headers

```ts
import { api } from "aota-api-axios-nextjs";

const createUser = async () => {
  const response = await api({
    method: "POST",
    endpoint: "/users",
    body: {
      name: "João",
      email: "joao@example.com",
    },
    headers: {
      Authorization: "Bearer seu-token",
    },
  });

  console.log(response);
};
```

---

## 📥 Parâmetros da função `api()`

| Parâmetro  | Tipo                     | Obrigatório | Descrição                                  |
| ---------- | ------------------------ | ----------- | ------------------------------------------ |
| `method`   | `"GET"`, `"POST"`, etc.  | ✅          | Método HTTP.                               |
| `endpoint` | `string`                 | ✅          | Endpoint da API, ex: `"/users"`.           |
| `body`     | `any`                    | ❌          | Dados para envio no corpo (POST/PUT).      |
| `headers`  | `Record<string, string>` | ❌          | Headers adicionais (ex: Authorization).    |
| `local`    | `boolean`                | ❌          | Se `true`, usa `NEXT_PUBLIC_API_URL_NEXT`. |

---

## ✅ Retorno

A função `api()` retorna um objeto com:

```ts
interface ApiResponse<T = any> {
  status: number;
  data: T;
}
```

### Exemplo de resposta com sucesso:

```json
{
  "status": 200,
  "data": {
    "id": 1,
    "name": "Produto A"
  }
}
```

### Exemplo de resposta com erro:

```json
{
  "status": 404,
  "data": {
    "message": "Recurso não encontrado"
  }
}
```

---

## 🧠 Observações

- Axios está configurado com headers padrão (`Content-Type: application/json`).
- O pacote funciona tanto no cliente quanto no servidor.
- Durante o desenvolvimento, a verificação de certificado TLS é desativada para facilitar conexões com APIs locais inseguras.

---

## 📄 Licença

ISC - © AOTA Desenvolvimentos
