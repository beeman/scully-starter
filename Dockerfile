FROM node:12-alpine

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

RUN yarn install --network-timeout 10000

COPY . /workspace/

RUN yarn build
RUN yarn scully

EXPOSE 5000

CMD ["yarn", "serve"]
