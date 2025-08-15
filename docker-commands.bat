@echo off
echo Cera McEwan Portfolio - Docker Commands
echo ======================================
echo.
echo 1. Build the Docker image:
echo    docker build -t mcewan_cera_portfolio .
echo.
echo 2. Run the container:
echo    docker run -d -p 5575:5575 --name McEwan_Cera_coding_assignment14 mcewan_cera_portfolio
echo.
echo 3. Access the portfolio at: http://localhost:5575
echo.
echo 4. Stop the container:
echo    docker stop McEwan_Cera_coding_assignment14
echo.
echo 5. Remove the container:
echo    docker rm McEwan_Cera_coding_assignment14
echo.
pause
