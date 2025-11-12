# Energy Dashboard container
FROM python:3.11-slim
WORKDIR /app
COPY apps/energy-dashboard/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt
COPY apps/energy-dashboard /app
EXPOSE 5050
ENV PORT=5050
CMD ["python", "app.py"]
