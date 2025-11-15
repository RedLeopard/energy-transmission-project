# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore as separate layer
COPY ./src/EnergyTransmission.Web/EnergyTransmission.Web.csproj ./EnergyTransmission.Web/
RUN dotnet restore ./EnergyTransmission.Web/EnergyTransmission.Web.csproj

# Copy the rest of the source
COPY ./src/EnergyTransmission.Web ./EnergyTransmission.Web

WORKDIR /src/EnergyTransmission.Web

# Build and publish in Release mode
RUN dotnet publish -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Create non-root user
RUN adduser --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

# Copy published app from build stage
COPY --from=build /app/publish .

# Expose container port
EXPOSE 8080

# Configure ASP.NET Core to listen on port 8080
ENV ASPNETCORE_URLS=http://0.0.0.0:8080

ENTRYPOINT ["dotnet", "EnergyTransmission.Web.dll"]
