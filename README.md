# IdentityStream
![alt-text](http://www.teacher-support-force.com/images/Identity.jpg)

Smash a file into chunks and put it back together!

```
  npm install identity-stream
```
## Why?

Sometimes you need a default stream placeholder that doesn't modify anything

## It is easy to use
``` js
var identity = new identityStream();
fs.createReadStream('file.txt')
  .pipe(identity)
  .pipe(fs.createWriteStream('file-copy.txt');
```
## License

MIT
