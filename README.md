# Energy Transmission Project

A realistic utility-style platform that shows how an energy company could deploy and monitor a **.NET 8** transmission application using:

- **Red Hat OpenShift** and **AWS EKS** for Kubernetes
- **Jenkins** for CI/CD automation
- **Docker** for containerization
- **Prometheus** and **Grafana** for observability
- **Oracle Autonomous Database (ADB)** for grid and transmission data storage

## Repo Structure

```mermaid
flowchart TD
    A[energy-transmission-project/] --> B[app/]
    B --> B1[EnergyTransmission.Web<br/>(.NET 8 Web App)]

    A --> C[ansible/]
    C --> C1[Playbooks<br/>(Automation WIP)]

    A --> D[docker/]
    D --> D1[Dockerfiles<br/>Container Builds]

    A --> E[infra/]
    E --> E1[Terraform / IaC<br/>(Placeholders)]

    A --> F[k8s/]
    F --> F1[Deployment.yaml]
    F --> F2[Service.yaml]
    F --> F3[Namespace.yaml]

    A --> G[monitoring/]
    G --> G1[Prometheus Config]
    G --> G2[Grafana Dashboards]

    A --> H[jenkins/]
    H --> H1[Jenkinsfile<br/>(CI/CD Pipeline)]

    A --> I[docs/]
    I --> I1[Architecture Diagrams]
    I --> I2[Interview Notes]
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

### ✔ Overview Image  
![Energy Transmission Overview](assets/project2.png)

---

### ✔ OpenShift  
![OpenShift Workloads](assets/openshift.png)

---

### ✔ EKS Cluster  
![EKS Cluster](assets/eks1.png)

---

### ✔ ECR Repository  
![ECR Repository](assets/ecr.png)

---

### ✔ Jenkins Pipeline  
![Jenkins Pipeline](assets/jenkins.png)

![Jenkins Console Output](assets/jenkins2.png)

---

### ✔ Grafana  
![Grafana Dashboard](assets/grafana.png)

---

### ✔ Oracle Database  
![Oracle ADB Metrics](assets/oracle.png)

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
