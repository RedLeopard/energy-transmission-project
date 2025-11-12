# Energy Transmission Project

A portfolio-ready hybrid cloud demo that visualizes **energy flow** (generation → transmission → substation → transformer → distribution → home) with an **animated dashboard** (includes a simple St. Louis Arch overlay).

## What’s inside
- **apps/energy-dashboard**: Flask app serving an animated SVG overlay on top of a grid image
- **k8s/energy-dashboard**: Kubernetes manifests to deploy the dashboard (port 5050)
- **ci/Jenkinsfile**: Simple CI pipeline example (Docker build + artifact archive)
- **infra/**: Placeholder for Terraform (EKS/ROSA will go here later)
- **monitoring/**: Placeholder for Prometheus/Grafana configs
- **docs/**: Architecture notes & future diagrams

## Local run (no Docker needed)
```bash
cd apps/energy-dashboard
python3 -m venv .venv
source .venv/bin/activate
pip install flask==3.0.0
python3 app.py
# open http://127.0.0.1:5050
```

## Docker build (optional)
```bash
docker build -t energy-dashboard:local apps/energy-dashboard
```

## Kubernetes (Minikube or any cluster)
```bash
# if using minikube and building locally
minikube start --driver=docker
minikube image load energy-dashboard:local

# apply manifests
kubectl apply -f k8s/energy-dashboard/deployment.yaml
kubectl apply -f k8s/energy-dashboard/service.yaml

# port-forward
kubectl port-forward svc/energy-dashboard 8080:80
# open http://127.0.0.1:8080
```

---

### Notes
- Default app port is **5050** to avoid macOS AirPlay conflicts.
- Replace `apps/energy-dashboard/static/img/grid.png` with your preferred grid schematic if desired.
