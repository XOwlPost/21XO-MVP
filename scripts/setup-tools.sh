#!/bin/sh

# Install Trunk CLI via npm
npm install -g trunk-cli

# Or for direct download installations, adjust accordingly
# curl -o TrunkInstaller.sh "URL_TO_TRUNK_CLI_INSTALLER"
# chmod +x TrunkInstaller.sh
# ./TrunkInstaller.sh

# Verify installation
trunk --version
chmod +x install-trunk.sh
