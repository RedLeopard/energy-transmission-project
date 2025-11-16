pipeline {
    agent any

    options {
        timestamps()
    }

    environment {
        DOTNET_CLI_TELEMETRY_OPTOUT = "1"
        // Change this value if `which docker` prints a different path
        DOCKER_CMD = "/usr/local/bin/docker"
        IMAGE_NAME = "energy-transmission-web"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out source code"
                checkout scm
            }
        }

        stage('Restore') {
            steps {
                echo "Running dotnet restore"
                sh '/usr/local/share/dotnet/dotnet restore src/EnergyTransmission.Web/EnergyTransmission.Web.csproj'
            }
        }

        stage('Build') {
            steps {
                echo "Building solution in Release mode"
                sh '/usr/local/share/dotnet/dotnet build src/EnergyTransmission.Web/EnergyTransmission.Web.csproj -c Release --no-restore'
            }
        }

        stage('Test') {
            when {
                expression { fileExists("tests") }
            }
            steps {
                echo "Running unit tests (if present)"
                sh '/usr/local/share/dotnet/dotnet test tests/Tests.csproj -c Release --no-build'
            }
        }

        stage('Docker Build') {
            when {
                expression { fileExists("Dockerfile") }
            }
            steps {
                echo "Building Docker image from Dockerfile at repo root"

                // Build tagged with the Jenkins build number
                sh '${DOCKER_CMD} build -t ${IMAGE_NAME}:${BUILD_NUMBER} .'

                // Also tag as latest for convenience
                sh '${DOCKER_CMD} tag ${IMAGE_NAME}:${BUILD_NUMBER} ${IMAGE_NAME}:latest'

                echo "Built Docker images:"
                sh '${DOCKER_CMD} images | grep ${IMAGE_NAME}'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully"
        }
        failure {
            echo "Pipeline failed - check the stage logs for details"
        }
    }
}