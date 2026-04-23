# OpenrhynnServerContent

This repository contains data files required to run OpenRhynn java server.
This data should be put near binaries

# Getting started

use either `configs/database_mysql.json` or `configs/database_postgresql.json` as a template
copy it to `configs/database.json` and enter required database credentials
restore db from `OpenrhynnJavaServer/<db type>.sql`

run with

```
# linux
./run.sh
# windows
./run.bat
```

systemd service example: [openrhynn.service](./openrhynn.service)

License notice:

- images belong to macrolutions LTD. see license https://github.com/marlowe-fw/Rhynn/blob/master/LICENSE
- some images was modified
- maps was recreated based on screenshot
- mobs and npcs was recreated based on forums and information from community
