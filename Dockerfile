FROM node:22-alpine

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ENV NODE_EXTRA_CA_CERTS /etc/ssl/ca-bundle.pem

COPY ./server/node_modules ./node_modules
COPY ./server/src .
COPY ./application/dist ./build
COPY ./package-lock.json ./package-lock.json

EXPOSE 3000

ENTRYPOINT ["sh", "-c"]
CMD ["node main.js"]