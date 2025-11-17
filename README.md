# Energy Transmission Project

A realistic utility-style platform that shows how an energy company could deploy and monitor a **.NET 8** transmission application using:

- **Red Hat OpenShift** and **AWS EKS** for Kubernetes
- **Jenkins** for CI/CD automation
- **Docker** for containerization
- **Prometheus** and **Grafana** for observability
- **Oracle Autonomous Database (ADB)** for grid and transmission data storage

## Repo Structure

```mermaid
---
config:
  layout: dagre
---
flowchart LR
 subgraph Cluster["OpenShift / K8s Cluster<br>(Ubuntu Server, On-Prem)"]
        Pod["📦 Pod<br>(.NET Energy App)"]
        Prometheus["📈 Prometheus"]
        Grafana["📊 Grafana Dashboards"]
        OracleDB["OracleDB"]
  end
    Dev["👨‍💻 Developer"] -- Push Code --> Jenkins["🧰 Jenkins"]
    Dev -- Webhook --> GitHub["🐙 GitHub"]
    GitHub --> Docker["Docker"]
    Jenkins -- Build Docker --> Docker
    Jenkins -- Manual Deploy --> Cluster
    Docker -- Docker Image --> App["App"]
    App -- Oracle SQL --> OracleDB
    App -- Deploy Pod --> Cluster
    Pod --> Prometheus
    Prometheus --> Grafana
    Grafana --> OracleDB
```


This project is built as a full end-to-end demonstration suitable for interviews, portfolio presentations, and real-world cloud engineering discussions.

---

## ⚡ Quick Links

- **OpenShift Live App:** `https://energy-transmission-web-redleopard-dev.apps.rm2.thpm.p1.openshiftapps.com`
- **Jenkins Pipeline:** `jenkins/Jenkinsfile`
- **Kubernetes Manifests:** `k8s/`
- **Monitoring:** `monitoring/`
- **Ansible Automation:** `ansible/`
- **Docs:** `docs/`

---

## 📁 Repository Structure


---

## 🌐 Project Summary

This project mirrors a real utility company workflow:

- Start on **OpenShift** for initial hosting (as many energy companies use Red Hat OpenShift).
- Expand into **AWS EKS** to complete CI/CD, observability, and scalability.
- Implement a **full Jenkins pipeline** to automate building and deploying the .NET app.
- Build **ECR** repositories and container images with Docker.
- Deploy everything via **Kubernetes manifests** under a single namespace.
- Add **Prometheus + Grafana** for system-wide monitoring.
- Integrate an **Oracle Autonomous Database** to simulate transmission/event storage and future AI analytics.

The result is a realistic end-to-end cloud engineering demo.

---

## 🚀 Running the App Locally

### 1. Run .NET Application

cd app/EnergyTransmission.Web
dotnet restore
dotnet run

### 2. Build Docker Image

cd docker
docker build -t energy-transmission-web:latest -f Dockerfile ..

### 3. Run Container

docker run -p 8080:80 energy-transmission-web:latest

---

## ☸️ Deploying to Kubernetes

### 1. Create Namespace

kubectl create namespace energy-transmission

### 2. Apply Manifests

kubectl apply -f k8s/

### 3. Verify

kubectl get pods -n energy-transmission
kubectl get svc -n energy-transmission

### 4. Expose App
- **OpenShift:** use Routes  
- **EKS:** use LoadBalancer or Ingress

---

## 🧪 Jenkins Pipeline Overview

The Jenkins pipeline includes:

1. Checkout source  
2. Restore & build .NET  
3. Docker build & push to ECR  
4. Kubernetes deploy (EKS or OpenShift)

File located at:

jenkins/Jenkinsfile

---

## 📈 Monitoring with Prometheus & Grafana

Prometheus scrapes:

- Node health  
- Pod restarts  
- Resource usage  
- Application metrics  

Grafana visualizes everything in central dashboards.

Configuration inside:

monitoring/

---

## 🗄 Oracle AI Database Integration

This provides the long-term data layer for:

- Transmission events  
- Line status data  
- Outage history  
- Future predictive analytics  

No sensitive credentials are stored in the repo.

---

## 📸 Visual Evidence

### ✔ OpenShift  
<img width="1421" height="771" alt="Image" src="https://github.com/user-attachments/assets/57bff71c-5020-453e-a034-86d6ffbc1939" />

---

### ✔ EKS Cluster 
<img width="1421" height="771" alt="Image" src="https://github.com/user-attachments/assets/a1e8b53e-727a-41b1-b179-765df2bc7d3e" />

---

### ✔ ECR Repository  
<img width="1430" height="677" alt="Image" src="https://github.com/user-attachments/assets/7791e203-e3e9-4a5e-a5be-f9fe66477e6d" />

---

### ✔ Jenkins Pipeline  
<img width="1421" height="769" alt="Image" src="https://github.com/user-attachments/assets/4d6e7604-6356-449f-a329-e56be3f63f11" />
<img width="1421" height="769" alt="Image" src="https://github.com/user-attachments/assets/a40bee00-7965-44c9-b82e-f2eee063cf92" />

---

### ✔ Grafana  
<img width="1421" height="771" alt="Image" src="https://github.com/user-attachments/assets/dc886454-4fc7-4eed-976d-92a42a23ad78" />


---

### ✔ Oracle Database  
<img width="1421" height="771" alt="Image" src="https://github.com/user-attachments/assets/c45691bd-b4b0-422c-a025-ca37c93894ce" />

---

## 📦 Roadmap

- Add alert rules & dashboards  
- Add more Oracle queries & analytics  
- Automate full deployment via Ansible  
- Optional multi-cluster (OpenShift + EKS) demo  

---

## 🔗 Built With Pride

Created by **Edward Thornton**  
Energy Transmission Project — Cloud Engineering • Kubernetes • DevOps • Observability
