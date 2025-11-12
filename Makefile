run:
	cd apps/energy-dashboard && python3 app.py

build:
	docker build -t energy-dashboard:local apps/energy-dashboard

deploy:
	kubectl apply -f k8s/energy-dashboard/
