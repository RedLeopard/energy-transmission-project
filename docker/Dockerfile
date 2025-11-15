# -------- BUILD STAGE --------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore dependencies
COPY app/EnergyTransmission.Web/EnergyTransmission.Web.csproj app/EnergyTransmission.Web/
RUN dotnet restore app/EnergyTransmission.Web/EnergyTransmission.Web.csproj

# Copy the full web project and publish
COPY app/EnergyTransmission.Web/ app/EnergyTransmission.Web/
WORKDIR /src/app/EnergyTransmission.Web
RUN dotnet publish -c Release -o /app/publish

# -------- RUNTIME STAGE --------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy published output from build stage
COPY --from=build /app/publish ./

# Listen on port 8080 inside the container
ENV ASPNETCORE_URLS=http://+:8080

EXPOSE 8080

ENTRYPOINT ["dotnet", "EnergyTransmission.Web.dll"]
