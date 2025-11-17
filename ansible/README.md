# Ansible – Local Docker Deployment for Energy Transmission Web

This folder contains the Ansible automation used specifically to deploy the **Energy Transmission Web** application **locally via Docker**.  
Unlike cluster-level automation (EKS/OpenShift), this playbook focuses on **running the app on a local machine** using a clean, repeatable process.

---

## 🚀 What This Playbook Actually Does

This playbook performs one job:  
**Stop, remove, and redeploy the Energy Transmission Web container locally using Docker.**

It is useful for fast local testing, validating image updates, and confirming that the web app container runs correctly before pushing to ECR or deploying to Kubernetes.

### Here is exactly what happens step-by-step:

### 1. ✔ Validates Docker is installed  
Runs:

docker --version

This sanity-check ensures you are deploying on a machine that has Docker available.

---

### 2. ✔ Stops any existing container  
If the container is already running, it stops it:

docker stop energy-transmission-web

Errors are ignored gracefully (container might not exist).

---

### 3. ✔ Removes the old container  
Ensures a clean slate:

docker rm energy-transmission-web

This prevents conflicts or leftover state.

---

### 4. ✔ Deploys a fresh container  
Runs the app using the latest image:

docker run -d
--name energy-transmission-web
-p 8081:8080
energy-transmission-web:latest

**Host port → 8081**  
**Container port → 8080** (matches your Dockerfile)

---

### 5. ✔ Shows the running container  
After deployment, the playbook prints a formatted table showing:

- Container ID  
- Image used  
- Container status  

Example:

CONTAINER ID IMAGE STATUS
abcd1234 energy-transmission-web:latest Up XX seconds

This gives you immediate confirmation that the app is running.

---

## 🧩 Why This Playbook Exists

This automation solves a real problem in the Energy Transmission Project:

- You often rebuild Docker images locally while iterating on the .NET app.
- Stopping/starting containers manually gets repetitive.
- This playbook guarantees every run is **clean, repeatable, stable, and identical** — which is exactly what good DevOps automation should do.

It also mirrors early-phase workflow energy companies use before deploying to Kubernetes:

> **Local → Docker → CI/CD → ECR → EKS/OpenShift**

This playbook sits in the **Local** stage of that pipeline.

---

## 📦 Files in This Folder

ansible/
├─ deploy-local-docker.yaml # This exact playbook
└─ README.md # This file

(If your file is named differently, update the name above.)

---

## ▶️ How to Run

Run the playbook from the root of the project:

ansible-playbook -i inventory.ini ansible/deploy-local-docker.yaml

Or if your inventory group is named `energy_web`, make sure your inventory file contains:

[energy_web]
localhost

---

## 🧠 Notes

- This playbook is intentionally **local-only**.  
- It does **not** deploy to EKS or OpenShift (that is handled elsewhere).  
- It is perfect for fast testing before running your Jenkins pipeline or pushing to ECR.

---

## 🔗 Built With Precision

This automation is part of the broader **Energy Transmission Project**, supporting a realistic multi-environment DevOps workflow for cloud + energy sector engineering.
