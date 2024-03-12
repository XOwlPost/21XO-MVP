To streamline the setup and provide flexibility for developers to use local configurations, editing the initial setup instructions to include the option for activating the `pre-commit-env` environment directly and the method for using a local configuration file can be beneficial. Here's how you might edit and expand the documentation to incorporate these options:

---

### Setting Up Pre-Commit Hooks

Our project uses `pre-commit` hooks for maintaining code quality and consistency. Below is a guide to set up these hooks in your local development environment.

#### Prerequisites
- Ensure `pre-commit` is installed. If not, it can be installed via pip:
  
  ```bash
  pip install pre-commit
  ```

- Anaconda or Miniconda should be installed for managing environments.

#### Installation Steps

1. **Clone the Repository:**
   Start by cloning the project to your local machine.

2. **Navigate to the Project Directory:**
   
   ```bash
   cd path/to/your/project
   ```

3. **Activate the Pre-Commit Environment:**
   Activate the Conda environment specifically set up for pre-commit:

   ```bash
   conda activate pre-commit-env
   ```

4. **Install the Pre-Commit Hook:**
   The project provides a custom `pre-commit` hook script for handling both global and local configurations. This script is placed in `.git/hooks/pre-commit` and should be edited as follows:

   ```sh
   #!/usr/bin/env bash
   # Custom pre-commit hook

   # Activate Conda environment
   source activate pre-commit-env

   # Path to the global pre-commit configuration
   GLOBAL_CONFIG=".pre-commit-config.yaml"
   # Path to the optional local pre-commit configuration
   LOCAL_CONFIG=".pre-commit-config.local.yaml"

   # Determine which config to use
   CONFIG="$GLOBAL_CONFIG"
   if [ -f "$LOCAL_CONFIG" ]; then
       echo "Using local pre-commit configuration..."
       CONFIG="$LOCAL_CONFIG"
   else
       echo "Using global pre-commit configuration..."
   fi

   # Run pre-commit with the chosen configuration
   pre-commit run --config "$CONFIG" --all-files

   # Capture the exit status of pre-commit
   STATUS=$?

   # Exit with the captured status
   exit $STATUS
   ```

5. **Make the Script Executable:**
   Change the script's permissions to ensure it is executable:

   ```bash
   chmod +x .git/hooks/pre-commit
   ```

6. **Install Pre-Commit Configurations:**
   With the environment activated, run:

   ```bash
   pre-commit install
   ```

#### Using Local Configurations (Optional)
For personal customization of hooks, you can create a `.pre-commit-config.local.yaml` in the project root. This file is for individual use and should not be tracked by Git.

---

This guide includes the activation of the `pre-commit-env` and instructions for using a local configuration to provide flexibility for developers. Ensure this documentation is accessible in a location such as the project's README or a dedicated documentation section, facilitating ease of setup for all contributors.

