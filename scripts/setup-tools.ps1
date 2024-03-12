# Check if Node.js and npm are installed
if (-not (Get-Command "node" -ErrorAction SilentlyContinue)) {
    Write-Output "Node.js is not installed. Please install Node.js and npm first."
    exit
}

# Install Node.js tools via yarn
yarn global add trunk-cli eslint

# Install Python tools via pip
pip install black node npm yarn node-gyp OSINT babel webpack checkov ivy terrascan

# Run Terrascan for different cloud providers
terrascan scan -d ./ -t aws
terrascan scan -d ./ -t azure
terrascan scan -d ./ -t gcp
terrascan scan -d ./ -t azure -t gcp -t aws

# Run Hadolint
docker run --rm -i hadolint/hadolint < Dockerfile

# Run Trivy vulnerability scanner
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $HOME/Library/Caches:/root/.cache/ aquasec/trivy image [your_image_name]

# Verify the installation of Trunk CLI
trunk --version

# Optionally, change the execution policy to run scripts
# Be cautious with this setting, especially on shared or production systems
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# Confirm the installations
eslint --version
python -m black --version
black --version
node --version
npm --version
yarn --version
node-gyp --version
OSINT --version 
babel --version
checkov --version 
ivy --version
terrascan --version
