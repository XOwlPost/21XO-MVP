# Use Miniconda base image
FROM continuumio/miniconda3

# Install Node.js and npm via Conda
RUN conda install -c conda-forge nodejs

# Copy the environment.yml file into the container to define your Conda environment
COPY environment.yml /tmp/environment.yml

# Use the environment.yml to create the Conda environment
RUN conda env create -f /tmp/environment.yml

# Make RUN commands use the new environment
SHELL ["conda", "run", "-n", "pre-commit-env", "/bin/bash", "-c"]

# The code below ensures that the environment is activated on startup
RUN echo "conda activate pre-commit-env" >> ~/.bashrc

# Install JupyterLab in the Conda environment
RUN conda run -n pre-commit-env pip install jupyterlab

# Set the default command to run when starting the container. Here, we start JupyterLab.
CMD ["conda", "run", "-n", "pre-commit-env", "jupyter", "lab", "--ip='*'", "--port=8888", "--no-browser", "--allow-root"]

# Expose the port JupyterLab runs on
EXPOSE 8888
