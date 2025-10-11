
# Docker-T.pop

## Overview

โปรเจกต์นี้เป็น **Web Mockup Login** แบบง่าย สำหรับ **Project Deployment & CI/CD Practice**  

- หน้า Login page แบบ HTML + JS  
- เก็บ username/password แบบง่ายใน array  
- ใช้ Docker container serve หน้าเว็บด้วย **nginx**  
- มี **Unit Test** ด้วย **Jest** สำหรับตรวจสอบฟังก์ชัน login  
- พร้อม GitHub Actions workflow สำหรับ **auto build → test → push Docker image**  

---

## Project Structure

Docker-T.pop/
```
├── src/ # หน้าเว็บ HTML/JS + login logic
│   ├── index.html
│   └── login.js
├── tests/ # Unit test ด้วย Jest
│   ├── login.admin.test.js
│   ├── login.student.test.js
│   ├── login.wrongpassword.test.js
│   ├── login.nonuser.test.js
│   ├── login.edgecase.test.js
│   └── login.integration.test.js
├── .github/
│   └── workflows/deploy.yml
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

---

## Users

**Username / Password ใน mockup:**  

| Username | Password |
|----------|----------|
| admin    | 1234     |
| student  | abcd     |

---

## Usage

### Run locally (Docker)

1. Build Docker image
```bash
docker build -t docker-tpop .
```

2. Run container
```bash
docker run -d -p 8080:80 --name docker-tpop docker-tpop
```

3. Open Web browser
```
http://localhost:8080
```

### Run Unit Test (Jest)
จากโฟลเดอร์ `src/`:
```bash
npm test
```
ตรวจสอบ login function ทั้งหมด: admin login, student login, wrong password, non-existing user, edge cases

---

## CI/CD Workflow (GitHub Actions)

Workflow อยู่ที่ `.github/workflows/deploy.yml`

ทำงานเมื่อ push ไป branch main:

- Checkout code
- Setup Node.js + Docker
- Run Unit Test (`npm test`)
- Build Docker image
- Push image ไป Docker Hub

**GitHub Secrets ที่ต้องตั้งค่า:**

- DOCKER_USERNAME → Docker Hub username
- DOCKER_PASSWORD → Docker Hub password

---

## Workflow Diagram

```
          +------------------+
          |    PM / Dev      |
          | เขียน code + Dockerfile + Unit test |
          +--------+---------+
                   |
          git push/merge
                   v
          +------------------+
          |  GitHub Actions  |
          |  Workflow start  |
          +--------+---------+
                   |
         +---------+---------+
         | Run Unit Tests    |
         +---------+---------+
                   |
         +---------+---------+
         | Build Docker image |
         +---------+---------+
                   |
         +---------+---------+
         | Push image to Hub  |
         +------------------+
```

---

## Notes

- หน้าเว็บเป็น mockup login สำหรับ demonstration
- Logic ของ login อยู่ใน `login.js`
- Unit test อยู่ใน `tests/`
- Integration test อยู่ใน `tests/login.integration.test.js`
- CI/CD workflow จะไม่ deploy ถ้า unit test fail
- PM สามารถ assign unit test ให้เพื่อน ๆ ทำแต่ละเทสได้ตามต้องการ
