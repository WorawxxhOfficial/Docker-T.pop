# Docker-T.pop

## Overview

โปรเจกต์นี้เป็น **Web Mockup Login** แบบง่าย สำหรับ **Project Deployment & CI/CD Practice**

* ทำหน้า Login page แบบ HTML + JS
* เก็บ username/password แบบง่ายใน array
* ใช้ Docker container serve หน้าเว็บด้วย **nginx**
* มี Robot Framework test สำหรับตรวจสอบหน้าเว็บ
* พร้อม GitHub Actions workflow สำหรับ **auto build → test → push Docker image**

---

## Project Structure

```
Docker-T.pop/
├── src/                    # หน้าเว็บ HTML/JS
│   └── index.html
├── tests/                  # Robot Framework test
│   └── login_test.robot
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD workflow
├── Dockerfile              # Build Docker image
├── .dockerignore           # ไม่ให้ไฟล์ไม่จำเป็นติดไปใน image
├── .gitignore
└── README.md
```

---

## Usage

### Run locally

1. Build Docker image

```bash
docker build -t docker-tpop .
```

2. Run container

```bash
docker run -d -p 8080:80 docker-tpop
```

3. Open Web browser

```
http://localhost:8080
```

---

### Run Robot Framework Test

```bash
robot tests/login_test.robot
```

* จะเปิด browser → เข้าเว็บ → ตรวจสอบว่ามีข้อความ "Login"
* ถ้า test fail → workflow fail

---

## CI/CD Workflow

Workflow อยู่ที่ `.github/workflows/deploy.yml`
ทำงานเมื่อ push ไป branch `main` ดังนี้:

1. Checkout code
2. Setup Python + Robot Framework
3. Build Docker image
4. Run container + Robot test
5. Stop container
6. Push Docker image ไป Docker Hub

> ต้องตั้ง Secrets บน GitHub:
>
> * `DOCKER_USERNAME`
> * `DOCKER_PASSWORD`

---

## Users

* Username/Password ใน mockup:

  * `admin` / `1234`
  * `student` / `abcd`

---

## Workflow Diagram

```
          +------------------+
          |    PM / Dev      |
          | เขียน code + Dockerfile + Robot test |
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
         | Build Docker image |
         +---------+---------+
                   |
         +---------+---------+
         | Run container      |
         +---------+---------+
                   |
         +---------+---------+
         | Run Robot tests    |
         |   หรือ curl check  |
         +---------+---------+
                   |
         +---------+---------+
         | Stop container     |
         +---------+---------+
                   |
         +---------+---------+
         | Push image to Hub  |
         +------------------+
```

---

## Notes

* Project นี้เหมาะสำหรับ **PM / Dev / Tester practice CI/CD + Docker + Automation Test**
* หน้าเว็บเป็น **mockup** ง่าย ๆ เพื่อ demo flow ระบบ deployment
