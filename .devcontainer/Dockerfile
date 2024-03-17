# Use Miniconda base image
FROM continuumio/miniconda3

# Install Node.js and Yarn
RUN conda install -c conda-forge nodejs=20.9.0
RUN npm install -g yarn

# Copy environment specification and JS dependencies definition
COPY environment.yml /tmp/environment.yml
COPY package.json yarn.lock* /tmp/

# Create Conda environment
RUN conda env create -f /tmp/environment.yml

# Activate the Conda environment in bashrc for interactive sessions
RUN echo "conda activate pre-commit-env" >> ~/.bashrc

# Install dependencies within the environment
RUN conda run -n pre-commit-env pip install checkov terrascan jupyterlab

# Install JavaScript dependencies
COPY . /app
WORKDIR /app
RUN cd /tmp && yarn install

# Copy the rest of your application's source code
COPY . /app

# Set the default command for the container
CMD ["conda", "run", "-n", "pre-commit-env", "your-start-command-here"]

# Expose any necessary ports
EXPOSE 8888

