FROM python:3.10

# create a directory for the app
RUN mkdir /app

# copy the source files
COPY ./requirements.txt /app/requirements.txt
COPY ./skgstat.py /app/skgstat.py

# install the requirements
RUN pip install -r /app/requirements.txt

# run the app as default CMD
CMD ["streamlit", "run", "/app/skgstat.py", "--server.headless", "true", "--server.fileWatcherType", "none", "--browser.gatherUsageStats", "false"]