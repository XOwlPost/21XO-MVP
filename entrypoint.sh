#!/bin/bash

# Activate the Conda environment
echo "Activating Conda environment..."
source activate pre-commit-env

# Execute the main command to start the Flask application
echo "Running Flask application..."
flask run --host=0.0.0.0

# Keep the container running (if necessary)
tail -f /dev/null

