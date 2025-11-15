function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const stageContent = {
    generation: {
        title: "Generating Sources → Cloud Ingest",
        body: "Energy starts at the plant: solar, wind, and thermal. In the cloud story this is SCADA, IoT, and telemetry landing in APIs, queues, and streams that feed everything else.",
        cloud: [
            "AWS IoT Core / MQTT brokers",
            "API Gateway or NGINX Ingress",
            "Kinesis or Kafka topics"
        ]
    },
    transmission: {
        title: "Transmission Lines → Service Mesh",
        body: "High-voltage lines map to regional network backbones and service mesh traffic between critical services.",
        cloud: [
            "Service mesh (App Mesh / Istio / Linkerd)",
            "Private subnets and VPC peering",
            "Cross-region routing and failover"
        ]
    },
    substation: {
        title: "Substation → Control Plane",
        body: "Substations decide how to step down and route power. In the platform this is config management, orchestration, and the control plane.",
        cloud: [
            "Kubernetes control plane",
            "Config stores (SSM / Consul / ConfigMaps)",
            "Oracle / Postgres for asset metadata"
        ]
    },
    distribution: {
        title: "Distribution Lines → Edge and Regions",
        body: "Distribution lines push power closer to customers. In cloud this is edge locations, regional clusters, and CDNs.",
        cloud: [
            "Regional EKS / AKS clusters",
            "CloudFront or other CDN",
            "Local caches and edge functions"
        ]
    },
    home: {
        title: "Homes and Businesses → Apps and Dashboards",
        body: "Homes are where value is actually consumed. This maps to customer applications, dashboards, and reporting.",
        cloud: [
            "Web and mobile apps",
            "BI dashboards and reporting",
            "Alerting and notifications"
        ]
    }
};

function updateMetrics() {
    const gridHealthEl = document.getElementById("metric-grid-health");
    const totalLoadEl = document.getElementById("metric-total-load");
    const activeCircuitsEl = document.getElementById("metric-active-circuits");

    const genEl = document.getElementById("metric-generation");
    const transEl = document.getElementById("metric-transmission");
    const subEl = document.getElementById("metric-substation");
    const distEl = document.getElementById("metric-distribution");
    const homeEl = document.getElementById("metric-home");

    const ingestEl = document.getElementById("metric-ingest");
    const errorsEl = document.getElementById("metric-errors");
    const regionsEl = document.getElementById("metric-regions");

    if (!gridHealthEl) return;

    const gen = randomInt(70, 98);
    const trans = randomInt(60, 95);
    const sub = randomInt(55, 90);
    const dist = randomInt(50, 88);
    const home = randomInt(45, 85);

    const avg = Math.round((gen + trans + sub + dist + home) / 5);
    const health = 99.80 + Math.random() * 0.15;

    gridHealthEl.textContent = health.toFixed(2) + "%";
    totalLoadEl.textContent = avg + "%";
    activeCircuitsEl.textContent = randomInt(90, 180).toString();

    genEl.textContent = gen + "%";
    transEl.textContent = trans + "%";
    subEl.textContent = sub + "%";
    distEl.textContent = dist + "%";
    homeEl.textContent = home + "%";

    ingestEl.textContent = randomInt(9000, 16000).toLocaleString() + " events / s";
    errorsEl.textContent = (Math.random() * 0.12).toFixed(2) + "%";
    regionsEl.textContent = randomInt(3, 6).toString();
}

function setStage(stageKey) {
    const data = stageContent[stageKey];
    if (!data) return;

    const titleEl = document.getElementById("stage-detail-title");
    const bodyEl = document.getElementById("stage-detail-body");
    const cloudListEl = document.getElementById("stage-detail-cloud");

    if (!titleEl || !bodyEl || !cloudListEl) return;

    titleEl.textContent = data.title;
    bodyEl.textContent = data.body;

    while (cloudListEl.firstChild) {
        cloudListEl.removeChild(cloudListEl.firstChild);
    }
    data.cloud.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cloudListEl.appendChild(li);
    });
}

function wireUpInteractions() {
    const stages = document.querySelectorAll(".et-stage");
    stages.forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-stage");
            setStage(key);
        });
    });

    const playBtn = document.getElementById("play-tour-btn");
    if (playBtn) {
        playBtn.addEventListener("click", () => {
            const stagesArray = Array.from(stages);
            let i = 0;
            function step() {
                if (i >= stagesArray.length) return;
                const key = stagesArray[i].getAttribute("data-stage");
                setStage(key);
                stagesArray[i].classList.add("et-stage-highlight");
                setTimeout(() => {
                    stagesArray[i].classList.remove("et-stage-highlight");
                    i += 1;
                    step();
                }, 1400);
            }
            step();
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    updateMetrics();
    setInterval(updateMetrics, 4000);
    wireUpInteractions();
    setStage("generation");
});
