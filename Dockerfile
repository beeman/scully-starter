FROM beeman/scully-docker:latest
ENV SCULLY_PUPPETEER_EXECUTABLE_PATH '/usr/bin/chromium-browser'

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

RUN yarn install --network-timeout 1000000

COPY . /workspace/

RUN yarn build
RUN yarn scully

EXPOSE 5000

CMD ["yarn", "serve"]
