
# Use Miniconda base image
FROM continuumio/miniconda3

# Install Node.js version 20.9.0 (correcting the command)
RUN conda install -c conda-forge nodejs=20.9.0

# Install Yarn (using npm, which comes with Node.js)
RUN npm install -g yarn

# Copy both the environment.yml for Conda and package.json (and yarn.lock if available) for Yarn
COPY environment.yml /tmp/environment.yml
COPY package.json yarn.lock* /tmp/

# Use the environment.yml to create the Conda environment
RUN conda env create -f /tmp/environment.yml

# Make RUN commands use the new environment
SHELL ["conda", "run", "-n", "pre-commit-env", "/bin/bash", "-c"]

RUN pip install checkov terrascan

SHELL ["docker run --rm -i hadolint/hadolint < Dockerfile"]

SHELL ["docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $HOME/Library/Caches:/root/.cache/ aquasec/trivy image [my-frontend-app] " ]

# Install JavaScript dependencies with Yarn
RUN cd /tmp && yarn install

# Copy the installed JavaScript dependencies (and other necessary files) into the working directory
COPY . /app
WORKDIR /app

# The code below ensures that the environment is activated on startup
RUN echo "conda activate pre-commit-env" >> ~/.bashrc

# (Optional) Install JupyterLab in the Conda environment if you need it
RUN conda run -n pre-commit-env pip install jupyterlab

# Set the default command for the container. Adjust as needed.
CMD ["conda", "run", "-n", "pre-commit-env", "your-command-here"]

name: Lint and Build

on:
  push:
    branches:
      - main
      - feature/**
  pull_request:

jobs:
  lint-dockerfiles:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      # Lint Dockerfile in root directory
      - name: Lint Root Dockerfile
        uses: hadolint/hadolint-action@v1.5.0
        with:
          dockerfile: ./Dockerfile

      # Lint Dockerfile in .devcontainer directory
      - name: Lint Devcontainer Dockerfile
        uses: hadolint/hadolint-action@v1.5.0
        with:
          dockerfile: ./.devcontainer/Dockerfile

  build:
    needs: lint-dockerfiles
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Build Docker Image from Root
        run: |
          docker build -t my-app:latest .

      - name: Build Docker Image from .devcontainer
        run: |
          docker build -f ./.devcontainer/Dockerfile -t my-devcontainer:latest .

# Use Miniconda base image
FROM continuumio/miniconda3

# Install dependencies, etc.

# Copy your application's source code and the entrypoint script
COPY . /app
COPY entrypoint.sh /usr/local/bin/entrypoint.sh

# Set the working directory
WORKDIR /app

# Make the entrypoint script executable
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set the entrypoint to run your script
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]


# Expose any ports your application uses (e.g., for a web server)
EXPOSE 8888
