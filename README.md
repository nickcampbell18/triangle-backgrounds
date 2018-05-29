# triangle-backgrounds

A small JS package which generates a new system wallpaper for you. Only works on OSX.

I've set this up with a cron script to run every 5 minutes:

```
$ crontab -l
*/5 * * * * export PATH=$PATH:/usr/local/bin; cd /code/github.com/nickcampbell18/triangle-backgrounds && npm run generate >> output.log
```

(the weird thing with `$PATH` is to ensure the right NodeJS environment is available to `/bin/sh` which runs crons).
