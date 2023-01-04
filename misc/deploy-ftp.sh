#!/bin/bash
#https://docs.microsoft.com/en-us/azure/app-service/scripts/app-service-cli-deploy-ftp?toc=%2fcli%2fazure%2ftoc.json

warurl=https://raw.githubusercontent.com/Azure-Samples/html-docs-hello-world/master/index.html
#App Service
appName="angular-fundamentals"
appServicePlanName="angular-fundamentals"
printf "%s\n" "$appName"
printf "%s\n" "$appServicePlanName"
#echo ${!appName}

# Download sample static HTML page
#curl $warurl --output index.html

# Create a resource group.
#az group create --location westeurope --name $appName

# Create an App Service plan in `FREE` tier.
#az appservice plan create --name $appName --resource-group $appServicePlanName --sku FREE

# Create a web app.
#az webapp create --name $appName --resource-group $appServicePlanName --plan $appServicePlanName

# Get FTP publishing profile and query for publish URL and credentials
#creds=($(az webapp deployment list-publishing-profiles --name $appName --resource-group $appServicePlanName --query "[?contains(publishMethod, 'FTP')].[publishUrl,userName,userPWD]" --output tsv))

echo "Deploying..."
# Use cURL to perform FTP upload. You can use any FTP tool to do this instead. 
#curl -T index.html -u ${creds[1]}:${creds[2]} ${creds[0]}/
curl -T index.html -u angular-fundamentals\$angular-fundamentals:4QgLkeT5oDid5Alx0KTZRqo5dh5A5gQaf5sEYgFjRYmaETJCBZmax7RSwwv1 ftp://waws-prod-dm1-069.ftp.azurewebsites.windows.net/site/wwwroot/

# Copy the result of the following command into a browser to see the static HTML site.
echo http://$appName.azurewebsites.net
read -p "Press [Enter] key..."