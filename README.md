# Trainer Kit 🏍b

Trainer Kit is a **full-stack monorepo application** built with:

- **Client**: Next.js (React)
- **Server**: Go
- **Monorepo Structure**: Managed with Docker & Docker Compose

This project uses **Docker Compose profiles** to separate **development** and **production** environments.

---

## **📂 Project Structure**

```
trainer-kit/
│️— apps/
│   ├️— client/        # Next.js (React) frontend
│   └️— server/        # Go backend
│️— infra/
│   ├️— docker/
│   │   ├️— Dockerfile.dev (Client & Server - Development)
│   │   ├️— Dockerfile.prod (Client & Server - Production)
│   │   ├️— docker-compose.yml
│   │   ├️— .env
│   │   └️— start.sh  # Shell script to manage containers
│️— packages/          # Shared libraries (if any)
```

---

## **🚀 How to Run the Project**

The project supports **two modes**:

1. **Development Mode** (Hot Reloading Enabled)
2. **Production Mode** (Optimized Build)

### **1⃣ Prerequisites**

Ensure you have:

- **Docker** installed: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose** installed: [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Makefile Support** (for Go server, if needed)

---

### **2⃣ Run in Development Mode (**``**)**

Development mode enables: 👉 **Hot-reloading** for both **Next.js** (client) & **Go** (server)\
👉 **Volumes** for live file updates

#### **💻 Start the Development Server**

Run the following command:

```sh
./start.sh dev
```

OR manually using:

```sh
docker-compose --profile dev up --build
```

#### **📛 Stop Development Mode**

```sh
docker-compose --profile dev down -v
```

---

### **3⃣ Run in Production Mode (**``**)**

Production mode: 👉 Builds **optimized containers**\
👉 Uses **built Next.js & Go binaries**\
👉 **Removes volumes** for a clean deployment

#### **🚀 Start the Production Server**

```sh
./start.sh prod
```

OR manually using:

```sh
docker-compose --profile prod up --build -d
```

#### **📛 Stop Production Mode**

```sh
docker-compose --profile prod down -v
```

---

## **⚙️ Configuration**

### **Environment Variables**

This project loads environment variables from an `.env` file inside `infra/docker/`.

#### **📄 Create **``** File**

```sh
PROJECT_NAME=trainer-kit
```

This ensures all containers and images are prefixed as:

- `trainer-kit-client`
- `trainer-kit-server`
- `trainer-kit-client-prod`
- `trainer-kit-server-prod`

---

## **🛠️ Useful Commands**

| Command                                       | Description                             |
| --------------------------------------------- | --------------------------------------- |
| `./start.sh dev`                              | Run the project in **development mode** |
| `./start.sh prod`                             | Run the project in **production mode**  |
| `./start.sh remove-dev`                       | Remove **dev** containers & volumes     |
| `./start.sh remove-prod`                      | Remove **prod** containers & volumes    |
| `docker-compose --profile dev up --build`     | Manually start **dev mode**             |
| `docker-compose --profile prod up --build -d` | Manually start **prod mode**            |

---

## **📝 Notes**

- **In Dev Mode**: Changes are reflected instantly using **volumes**.
- **In Prod Mode**: Changes require rebuilding (`docker-compose --profile prod up --build`).
- Ensure **Docker and Compose** are installed before running the commands.

---

## **🤝 Contributing**

Feel free to open an issue or create a pull request if you find any bugs or improvements.

---

## **🐟 License**

MIT License © 2025 Trainer Kit

```

```
