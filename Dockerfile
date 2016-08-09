FROM node:argon

WORKDIR /data/wellpass/src

ADD src  /data/wellpass/src

RUN rm -rf node_modules && npm install && npm install nodemon -g && npm install gulp -g

EXPOSE 3000
CMD ["bash"]

