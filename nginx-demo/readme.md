```
docker run --name=ng-study-01 -p 8880:8080 -d \
-v $PWD/nginx-demo/share/www:/usr/share/nginx/html \
-v $PWD/nginx-demo/share/conf.d:/etc/nginx/conf.d  \
-v $PWD/nginx-demo/share/logs:/var/log/nginx  \
nginx
```
