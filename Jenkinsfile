pipeline {
    agent any

    options {
        timestamps()
    }

    environment {
        DOTNET_CLI_TELEMETRY_OPTOUT = "1"
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
                // Adjust path if your folder name is slightly different
                sh 'dotnet restore src/EnergyTransmission.Web/EnergyTransmission.Web.csproj'
            }
        }

        stage('Build') {
            steps {
                echo "Building solution in Release mode"
                sh 'dotnet build src/EnergyTransmission.Web/EnergyTransmission.Web.csproj -c Release --no-restore'
            }
        }

        stage('Test') {
            when {
                // This will only run if you later add a tests folder
                expression { fileExists('tests') }
            }
            steps {
                echo "Running unit tests"
                // Update this path later if you add a real test project
                sh 'dotnet test tests/Tests.csproj -c Release --no-build'
            }
        }

        stage('Docker Build') {
            when {
                expression { fileExists('Dockerfile') }
            }
            steps {
                echo "Building Docker image from Dockerfile at repo root"
                // Tags image with build number to keep them unique
                sh 'docker build -t energy-transmission-web:${BUILD_NUMBER} .'
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
