# Energy Transmission Project (Dynamic .NET Version)

Root structure:
- app/EnergyTransmission.Web -> ASP.NET Core frontend with dynamic grid
- ansible/ -> placeholders for Ansible playbooks
- docker/ -> Dockerfiles and compose definitions
- infra/ -> Terraform or IaC modules
- k8s/ -> Kubernetes manifests
- monitoring/ -> Prometheus / Grafana config
- jenkins/ -> Jenkins pipelines
- docs/ -> Diagrams and interview notes


## Project structure
- `src/EnergyTransmission.Web` - ASP.NET Core web app (Razor Pages)
- `docker/Dockerfile` - Multi stage Dockerfile for .NET 8
- `k8s/` - Kubernetes manifests for namespace, deployment, service, and config
- `infra/` - Infrastructure as code placeholder
- `monitoring/` - Monitoring placeholder
