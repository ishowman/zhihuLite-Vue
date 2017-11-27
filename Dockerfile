FROM node:6.10.3-slim
RUN apt-get update \    &amp;&amp; apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install \     &amp;&amp; npm run build \     &amp;&amp; cp -r dist/* /var/www/html \     &amp;&amp; rm -rf /app
CMD [<span class="hljs-string">"nginx"</span>,<span class="hljs-string">"-g"</span>,<span class="hljs-string">"daemon off;"</span>]