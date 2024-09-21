FROM mongo:latest
RUN mkdir -p /data/db
RUN chown -R mongodb:mongodb /data/db
EXPOSE 27017
CMD ["mongod"]
